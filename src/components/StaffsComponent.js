import React from "react";
import { Link } from "react-router-dom";

export default function StaffsComponent(props) {
  constructor(props) {
    super(props)
  
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    }
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  handleSearch=(event) =>{
      this.toggleModal()
      alert('Username: ' + this.username.value + 'Password: ' + this.password.value + 'Remember : ' +this.remember.checked)
      event.preventDefault()
  }
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
      <div className="border-bottom row">
        <h1 className="col-lg-9">Nhân Viên</h1>
        <form onSubmit={this.handleSearch} className="form-inline col-lg-3 ">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
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
