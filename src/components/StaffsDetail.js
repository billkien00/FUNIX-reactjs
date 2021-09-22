import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { delStaff } from "../redux/ActionCreator";
import FixModal from "./FixModel";

export default function StaffsDetail({ staff }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = (id) => {
    dispatch(delStaff(id));
    history.push(`/staffs`);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/staffs">Nhân Viên</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {staff.name}
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div style={{ float: "right" }}>
          <button
            className="ml-3 btn btn-danger"
            onClick={() => handleDelete(staff.id)}
          >
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
        <div className="form-inline" style={{ float: "right" }}>
          <FixModal buttonLabel={"sửa"} id={staff.id} />
        </div>
        <div className="row m-3">
          <img
            className="col-lg-3 col-md-4 col-sm-12"
            src={staff.image}
            alt={staff.name}
          />
          <div className="col-lg-9 col-md-8 col-sm-12">
            <h2>Họ và Tên: {staff.name}</h2>
            <p>
              Ngày sinh: <Moment format="DD/MM/YYYY">{staff.doB}</Moment>
            </p>
            <p>
              Ngày vào công ty:{" "}
              <Moment format="DD/MM/YYYY">{staff.startDate}</Moment>
            </p>
            <p>Phòng ban: {staff.departmentId}</p>
            <p>Số ngày nghỉ còn lại:{staff.annualLeave} </p>
            <p>Số ngày nghỉ đã làm thêm:{staff.overTime} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
