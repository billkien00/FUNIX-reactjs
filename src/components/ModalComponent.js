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
import { STAFFS } from "../shared/staffs";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

const ModalComponent = (props) => {
  const { buttonLabel, className, onAddStaff } = props;
  const [modal, setModal] = useState(false);
  const handleSubmit = (values) => {
    onAddStaff({
      name: values.name,
      dob: values.birthday,
      salaryScale: values.salaryScale,
      startDate: values.startday,
      department: values.department,
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/assets/images/alberto.png",
    });
    setModal(false);
  };

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
                <Input
                  type="text"
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
                <Input
                  type="date"
                  model=".birthday"
                  className="form-control"
                  name="birthday"
                  id="birthday"
                  placeholder=""
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".birthday"
                  show="touched"
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
                <Input
                  type="date"
                  model=".startday"
                  className="form-control"
                  name="startday"
                  id="startday"
                  placeholder=""
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".startday"
                  show="touched"
                  messages={{
                    required: "Yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label for="department" sm={5}>
                Phòng ban
              </Label>
              <Col sm={7}>
                <Input
                  type="select"
                  model=".department"
                  className="form-control"
                  name="department"
                  id="department"
                  // defaultValue="IT"
                >
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </Input>
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="salaryScale" sm={5}>
                Hệ số lương
              </Label>
              <Col sm={7}>
                <Input
                  type="text"
                  model=".salaryScale"
                  className="form-control"
                  name="salaryScale"
                  id="salaryScale"
                  placeholder="1.0->3.0"
                  // defaultValue={1}
                  validators={{
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".salaryScale"
                  show="touched"
                  messages={{
                    isNumber: "Yêu Cầu nhập số",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="annualLeave" sm={5}>
                Số ngày nghỉ còn lại
              </Label>
              <Col sm={7}>
                <Input
                  type="text"
                  model=".annualLeave"
                  className="form-control"
                  name="annualLeave"
                  id="annualLeave"
                  placeholder={1.0}
                  // defaultValue={0}
                  validators={{
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".annualLeave"
                  show="touched"
                  messages={{
                    isNumber: "Yêu Cầu nhập số",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="overTime" sm={5}>
                Số ngày đã làm thêm
              </Label>
              <Col sm={7}>
                <Input
                  type="text"
                  model=".overTime"
                  className="form-control"
                  name="overTime"
                  id="overTime"
                  placeholder="0"
                  // defaultValue={0}
                  validators={{
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".overTime"
                  show="touched"
                  messages={{
                    isNumber: "Yêu Cầu nhập số",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 9 }}>
                <Button type="submit" color="primary">
                  thêm
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalComponent;
