import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDepartmentsStaff } from "../redux/ActionCreator";
import Moment from "react-moment";
import { Loading } from "./LoadingComponent";

export default function DepartmentStaffsComponent({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDepartmentsStaff(id));
  }, []);
  const departmentsStaff = useSelector((state) => state.departmentStaffReducer);

  if (departmentsStaff.isLoanding) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (departmentsStaff.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{departmentsStaff.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    const depStaff = departmentsStaff.depStaff.map((depStaff) => {
      return (
        <div className="card rounded col-sm-12 col-md-5 col-lg-3 m-2">
          <div class="card-body">
            <img
              className="card-img-top"
              src={depStaff.image}
              alt={depStaff.name}
            />

            <h4 className="card-title">{depStaff.name}</h4>
            <p>
              Ngày sinh: <Moment format="DD/MM/YYYY">{depStaff.doB}</Moment>
            </p>
            <p>
              Ngày vào công ty:{" "}
              <Moment format="DD/MM/YYYY">{depStaff.startDate}</Moment>
            </p>
            <p className="card-text">Hệ số lương: {depStaff.salaryScale}</p>
            <p className="card-text">Số giờ làm thêm: {depStaff.overTime} </p>
            <p className="card-text bg-primary text-white p-2">
              Lương: {depStaff.salary}{" "}
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">{depStaff}</div>
      </div>
    );
  }
}
