import React from "react";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";

export default function DepartmentCoponent(props) {
  if (props.departments.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.departments.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.departments.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    const dep = props.departments.dep.map((dep) => {
      return (
        <div
          className="card rounded col-sm-12 col-md-6 col-lg-3 m-3"
          key={`dep-${dep.id}`}
        >
          <Link to={`/department/${dep.id}`}>
            <div className="card-body">
              <h1 className="card-title ">{dep.name}</h1>
              <p className="card-text p-3">
                Số Lượng Nhân viên: {dep.numberOfStaff}{" "}
              </p>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">{dep}</div>
      </div>
    );
  }
}
