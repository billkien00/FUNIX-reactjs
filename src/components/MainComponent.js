import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import DepartmentCoponent from "./DepartmentCoponent";
import FooterComponent from "./FooterComponent";
import MoneyComponent from "./MoneyComponent";
import NavbarComponent from "./NavbarComponent";
import StaffsComponent from "./StaffsComponent";
import StaffsDetail from "./StaffsDetail";
import {
  fetchStaffs,
  fetchDepartments,
  fetchMoney,
} from "../redux/ActionCreator";
import DepartmentStaffsComponent from "./DepartmentStaffsComponent";

function MainComponent() {
  const staffs = useSelector((state) => state.staff);

  const departments = useSelector((state) => state.department);
  const moneys = useSelector((state) => state.money);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaffs());
    dispatch(fetchDepartments());
    dispatch(fetchMoney());
  }, []);

  const StaffDetail = ({ match }) => {
    const staff = staffs.staffs.filter(
      (x) => x.id === parseInt(match.params.staffId, 10)
    )[0];
    return <StaffsDetail staff={staff} />;
  };

  const DepartmentStaffs = ({ match }) => {
    const id = match.params.departmentId;

    return <DepartmentStaffsComponent id={id} />;
  };

  return (
    <div>
      <NavbarComponent />
      <Switch>
        <Route exact path="/staffs">
          <StaffsComponent staffs={staffs} />
        </Route>
        <Route exact path="/department">
          <DepartmentCoponent departments={departments} />
        </Route>
        <Route path="/money">
          <MoneyComponent moneys={moneys} />
        </Route>
        <Route exact path="/staffs/:staffId">
          {StaffDetail}
        </Route>
        <Route exact path="/department/:departmentId">
          {DepartmentStaffs}
        </Route>

        <Redirect to="/staffs" />
      </Switch>
      <FooterComponent />
    </div>
  );
}
export default withRouter(MainComponent);
