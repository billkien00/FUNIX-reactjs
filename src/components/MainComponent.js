import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import DepartmentCoponent from "./DepartmentCoponent";
import FooterComponent from "./FooterComponent";
import MoneyComponent from "./MoneyComponent";
import NavbarComponent from "./NavbarComponent";
import StaffsComponent from "./StaffsComponent";
import StaffsDetail from "./StaffsDetail";
import * as AllAction from "../redux/ActionCreator";

function MainComponent() {
  const staffsRedux = useSelector((state) => state);
  console.log(staffsRedux);
  const departments = useSelector((state) => state.department);
  const [staffs, setStaffs] = useState(staffsRedux);

  const dispatch = useDispatch();

  const handleAddStaff = (staff) => {
    staff.id = staffs.length;
    setStaffs(staffs.concat([staff]));
  };

  useEffect(() => {
    // dispatch(AllAction.addStaffs(staffs));
  });

  const handleSearch = (search) => {
    setStaffs(
      search
        ? staffsRedux.filter((s) =>
            s.name.toLowerCase().includes(search.toLowerCase())
          )
        : staffsRedux
    );
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
          {/* <StaffsComponent
            staffs={staffs}
            onAddStaff={handleAddStaff}
            onSearchStaff={handleSearch}
          /> */}
        </Route>
        <Route path="/department">
          <DepartmentCoponent departments={departments} />
        </Route>
        <Route path="/money">
          <MoneyComponent staffs={staffs} />
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
