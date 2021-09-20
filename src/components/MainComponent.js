import React, { useEffect, useState } from "react";
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

function MainComponent() {
  const staffs = useSelector((state) => state.staff);
  const departments = useSelector((state) => state.department);
  const moneys = useSelector((state) => state.money);

  const dispatch = useDispatch();

  const handleAddStaff = (staff) => {
    // staff.id = staffs.length;
    // setStaffs(staffs.concat([staff]));
  };

  useEffect(() => {
    dispatch(fetchStaffs());
    dispatch(fetchDepartments());
    dispatch(fetchMoney());
  }, []);

  const handleSearch = (search) => {
    // setStaffs(
    //   search
    //     ? staffsRedux.filter((s) =>
    //         s.name.toLowerCase().includes(search.toLowerCase())
    //       )
    //     : staffsRedux
    // );
  };

  const StaffDetail = ({ match }) => {
    const staff = staffs.filter(
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
            staffs={staffs}
            onAddStaff={handleAddStaff}
            onSearchStaff={handleSearch}
          />
        </Route>
        <Route path="/department">
          <DepartmentCoponent departments={departments} />
        </Route>
        <Route path="/money">
          <MoneyComponent moneys={moneys} />
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
export default withRouter(MainComponent);
