import React from "react";
import { Link } from "react-router-dom";

export default function StaffsComponent(props) {
  const staff = props.staffs.map((staff) => {
    return (
      <div className="col-sm-6 col-md-4 col-lg-2">
        <Link to={`/staffs/${staff.id}`}>
          <div className="card rounded m-1">
            <img className="card-img-top" src={staff.image} alt={staff.name} />
            <div class="card-body">
              <p className="card-text text-center"> {staff.name}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="container-fluid">
      <h1 className="border-bottom">Nhân Viên</h1>
      <div className="row">{staff}</div>
    </div>
  );
}
