import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function StaffsComponent(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const staff = props.staffs
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((staff) => {
      return (
        <div className="col-sm-6 col-md-4 col-lg-2">
          <Link to={`/staffs/${staff.id}`}>
            <div className="card rounded m-1">
              <img
                className="card-img-top"
                src={staff.image}
                alt={staff.name}
              />
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
      <div className="border-bottom row">
        <h1 className="col-lg-9">Nhân Viên</h1>
        <form className="form-inline col-lg-3 ">
          <input
            class="form-control "
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          
        </form>
      </div>

      <div className="row">{staff}</div>
    </div>
  );
}
