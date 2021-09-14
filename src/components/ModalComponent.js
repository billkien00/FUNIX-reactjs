import React, { useState } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

const handleSubmit = (values) => {
  console.log("Current State is: " + JSON.stringify(values));
  alert("Current State is: " + JSON.stringify(values));
  // event.preventDefault();
};

const ModalComponent = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Thêm Nhân Viên</ModalHeader>
        <ModalBody>
          <LocalForm
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Row className="form-group">
              <Label for="name" sm={5}>
                Tên
              </Label>
              <Col sm={7}>
                <Control.text
                  model=".name"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Họ và Tên"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(30),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Yêu cầu nhập",
                    minLength: "yêu cầu nhập hơn 2 ký tự",
                    maxLength: "yêu cầu nhập ít hơn 30 ký tự",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="birthday" sm={5}>
                Ngày Sinh
              </Label>
              <Col sm={7}>
                <Control
                  type="date"
                  model=".birthday"
                  className="form-control"
                  name="birthday"
                  id="birthday"
                  placeholder=""
                />
                <Errors
                  className="text-danger"
                  model=".birthday"
                  show="touched"
                  validators={{
                    required,
                  }}
                  messages={{
                    required: "Yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label for="startday" sm={5}>
                Ngày vào công ty
              </Label>
              <Col sm={7}>
                <Control
                  type="date"
                  model=".startday"
                  className="form-control"
                  name="startday"
                  id="startday"
                  placeholder=""
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label for="department" sm={5}>
                Phòng ban
              </Label>
              <Col sm={7}>
                <Control.select
                  model=".department"
                  className="form-control"
                  name="department"
                  id="department"
                >
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="salaryScale" sm={5}>
                Hệ số lương
              </Label>
              <Col sm={7}>
                <Control.text
                  model=".salaryScale"
                  className="form-control"
                  name="salaryScale"
                  id="salaryScale"
                  placeholder="1"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="annualLeave" sm={5}>
                Số ngày nghỉ còn lại
              </Label>
              <Col sm={7}>
                <Control.text
                  model=".annualLeave"
                  className="form-control"
                  name="annualLeave"
                  id="annualLeave"
                  placeholder="0"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="overTime" sm={5}>
                Số ngày đã làm thêm
              </Label>
              <Col sm={7}>
                <Control.text
                  model=".overTime"
                  className="form-control"
                  name="overTime"
                  id="overTime"
                  placeholder="0"
                />
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Thêm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
