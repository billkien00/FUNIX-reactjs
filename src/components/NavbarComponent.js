// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/styles";
// import Link from "@mui/material/Link";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function SimpleTabs() {
//   //const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="simple tabs example"
//           >
//             <Link href="/staffs">
//               <Tab label="Nhân Viên" {...a11yProps(0)} />
//             </Link>
//             <Link href="/department">
//               <Tab label="Phòng Ban" {...a11yProps(1)} />
//             </Link>
//             <Link href="/money">
//               <Tab label="Bảng Lương" {...a11yProps(2)} />
//             </Link>
//           </Tabs>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <i class="bi bi-house"></i>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="m-2" to="/staffs/">
                Nhân Viên
              </Link>
            </NavItem>
            <NavItem>
              <Link className="m-2" to="/department">
                Phòng Ban
              </Link>
            </NavItem>
            <NavItem>
              <Link className="m-2" to="/money">
                Bảng Lương
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
