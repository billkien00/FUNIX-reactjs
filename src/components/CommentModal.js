import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

const CommentModal = (props) => {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  const handleSubmit = (values) => {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
    // event.preventDefault();
  };

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form model="feedback" onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label md={3}>Ratting</Label>
              <Col md={9}>
                <Control
                  type="number"
                  model=".contactType"
                  name="contactType"
                  className="form-control"
                  placeholder="5"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="yourname" md={3}>
                Your Name
              </Label>
              <Col md={9}>
                <Control.text
                  model=".yourname"
                  id="yourname"
                  name="yourname"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".yourname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="comment" md={3}>
                Comment
              </Label>
              <Col md={9}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="6"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 11, offset: 8 }}>
                <Button type="submit" color="primary">
                  Add Comment
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CommentModal;
