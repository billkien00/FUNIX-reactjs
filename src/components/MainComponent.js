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

    this.state = {
      staffs: props.staff,
    };
    this.handleAddStaff = this.handleAddStaff.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddStaff = (staff) => {
    staff.id = this.props.staff.length;
    this.setState({
      staffs: this.state.staffs.concat([staff]),
    });
  };

  handleSearch = (search) => {
    this.setState({
      staffs: search
        ? this.props.staff.filter((s) =>
            s.name.toLowerCase().includes(search.toLowerCase())
          )
        : this.props.staff,
    });
  };

  render() {
    const StaffDetail = ({ match }) => {
      const staff = this.state.staffs.filter(
        (x) => x.id === parseInt(match.params.staffId, 10)
      )[0];
      return <StaffsDetail staff={staff} />;
    };

    return (
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/staffs">
            <StaffsComponent
              staffs={this.state.staffs}
              onAddStaff={this.handleAddStaff}
              onSearchStaff={this.handleSearch}
            />
          </Route>
          <Route path="/department">
            <DepartmentCoponent departments={this.props.department} />
          </Route>
          <Route path="/money">
            <MoneyComponent staffs={this.state.staffs} />
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
