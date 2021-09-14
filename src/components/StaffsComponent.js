import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent";

export default function StaffsComponent(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setopenModal] = useState(false);

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
        <h1 className="col-lg-3">Nhân Viên</h1>
        <div className="form-inline col-lg-6">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              setopenModal(true);//đây a
            }}
          >
            <i class="bi bi-plus-square-fill"></i>
          </button>
        </div>
        <div className="form-inline col-lg-3 ">
          <input
            class="form-control "
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="row">{staff}</div>
      {openModal && <ModalComponent closeModal={setopenModal}/>}
    </div>
  );
}
