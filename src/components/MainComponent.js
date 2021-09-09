import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import StaffsComponent from "./StaffsComponent";
import NavbarComponent from "./NavbarComponent";
import DepartmentCoponent from "./DepartmentCoponent";
import MoneyComponent from "./MoneyComponent";
import StaffsDetail from "./StaffsDetail";
import { Redirect, Route, Switch } from "react-router-dom";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staff: STAFFS,
      department: DEPARTMENTS,
    };
  }

  render() {
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
          <Route exact path="/staffs/:dishId">
            <StaffsDetail staffs={this.state.staff} />
          </Route>

          <Redirect to="/staffs" />
        </Switch>
      </div>
    );
  }
}
