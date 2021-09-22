import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import ModalComponent from "./ModalComponent";

export default function StaffsComponent(props) {
  const [search, setsearch] = useState("");

  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setsearch(searchRef.current.value);
  };

  if (props.staffs.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.staffs.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.staffs.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    const staff = props.staffs.staffs
      .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
      .map((staff) => {
        return (
          <div className="col-sm-6 col-md-4 col-lg-2" key={`staff-${staff.id}`}>
            <Link to={`/staffs/${staff.id}`}>
              <div className="card rounded m-1">
                <img
                  className="card-img-top"
                  src={staff.image}
                  alt={staff.name}
                />
                <div className="card-body">
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
            <ModalComponent buttonLabel={"+"} />
          </div>

          <form onSubmit={handleSearch} class="form-inline col-lg-3">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={searchRef}
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="row">{staff}</div>
      </div>
    );
  }
}
