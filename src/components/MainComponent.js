import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import StaffsComponent from "./StaffsComponent";
import NavbarComponent from "./NavbarComponent";
import DepartmentCoponent from "./DepartmentCoponent";
import MoneyComponent from "./MoneyComponent";
import StaffsDetail from "./StaffsDetail";
import { Redirect, Route, Switch } from "react-router-dom";
import FooterComponent from "./FooterComponent";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staff: STAFFS,
      department: DEPARTMENTS,
    };
  }

  render() {
    const StaffDetail = ({ match }) => {
      const staff = this.state.staff.filter(
        (x) => x.id === parseInt(match.params.staffId, 10)
      )[0];
      return <StaffsDetail staff={staff} />;
    };
    return (
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/staffs">
            <StaffsComponent staffs={this.state.staff} />
          </Route>
          <Route path="/department">
            <DepartmentCoponent departments={this.state.department} />
          </Route>
          <Route path="/money">
            <MoneyComponent staffs={this.state.staff} />
          </Route>
          <Route exact path="/staffs/:staffId">
            {StaffDetail}
          </Route>

          <Redirect to="/staffs" />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}
