import React from "react";

export default function StaffsDetail(props) {
  const staff = props.staffs.map((staff) => {
    return (
      <div className="">
        <img className="" src={staff.image} alt={staff.name} />
      </div>
    );
  });
  return <div></div>;
}
