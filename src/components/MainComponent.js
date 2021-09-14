import React, { Component } from "react";

import StaffsComponent from "./StaffsComponent";
import NavbarComponent from "./NavbarComponent";
import DepartmentCoponent from "./DepartmentCoponent";
import MoneyComponent from "./MoneyComponent";
import StaffsDetail from "./StaffsDetail";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staff: state.staff,
    department: state.department,
  };
};

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const StaffDetail = ({ match }) => {
      const staff = this.props.staff.filter(
        (x) => x.id === parseInt(match.params.staffId, 10)
      )[0];
      return <StaffsDetail staff={staff} />;
    };
    return (
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/staffs">
            <StaffsComponent staffs={this.props.staff} />
          </Route>
          <Route path="/department">
            <DepartmentCoponent departments={this.props.department} />
          </Route>
          <Route path="/money">
            <MoneyComponent staffs={this.props.staff} />
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
export default withRouter(connect(mapStateToProps)(MainComponent));
