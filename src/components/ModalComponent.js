import React, { useState } from "react";
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
} from "reactstrap";

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
          <Form>
            <FormGroup row>
              <Label for="name" sm={5}>
                Tên
              </Label>
              <Col sm={7}>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Họ và Tên"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="birthday" sm={5}>
                Ngày Sinh
              </Label>
              <Col sm={7}>
                <Input
                  type="date"
                  name="birthday"
                  id="birthday"
                  placeholder=""
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="startday" sm={5}>
                Ngày vào công ty
              </Label>
              <Col sm={7}>
                <Input
                  type="date"
                  name="startday"
                  id="startday"
                  placeholder=""
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="department" sm={5}>
                Phòng ban
              </Label>
              <Col sm={7}>
                <Input type="select" name="department" id="department">
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="salaryScale" sm={5}>
                Hệ số lương
              </Label>
              <Col sm={7}>
                <Input
                  type="text"
                  name="salaryScale"
                  id="salaryScale"
                  placeholder="1"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="annualLeave" sm={5}>
                Số ngày nghỉ còn lại
              </Label>
              <Col sm={7}>
                <Input
                  type="text"
                  name="annualLeave"
                  id="annualLeave"
                  placeholder="0"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="overTime" sm={5}>
                Số ngày đã làm thêm
              </Label>
              <Col sm={7}>
                <Input
                  type="text"
                  name="overTime"
                  id="overTime"
                  placeholder="0"
                />
              </Col>
            </FormGroup>
          </Form>
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
