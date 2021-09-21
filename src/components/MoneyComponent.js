import React from "react";
import { Loading } from "./LoadingComponent";

export default function MoneyComponent(props) {
  if (props.moneys.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.moneys.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.moneys.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    const staff = props.moneys.money.map((staff) => {
      const salary = parseInt(staff.salaryScale);
      return (
        <div className="card rounded col-sm-12 col-md-5 col-lg-3 m-2">
          <div class="card-body">
            <h4 className="card-title">{staff.name}</h4>
            <p className="card-text">Mã nhân viên: {staff.id} </p>
            <p className="card-text">Hệ số lương: {salary}</p>
            <p className="card-text">Số giờ làm thêm: {staff.overTime} </p>
            <p className="card-text bg-primary text-white p-2">Lương: {staff.salary} </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">{staff}</div>
      </div>
    );
  }
}
