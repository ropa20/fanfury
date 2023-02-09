import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import {
  MdSearch,
  MdOutlineAccountBalanceWallet,
  MdOutlineSettings,
  MdDashboard,
  MdPersonOutline,
} from "react-icons/md";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./SideNav.css";
import logo from "../assests/logo.png";

const SideNav = () => {
  //   const navigate = useNavigate();
  const [activeStyle, setActiveStyle] = useState("");

  const NavbarHandler = (index) => {
    console.log("gg");
    if (index === 2) {
      setActiveStyle("dashboard");
    }
    if (index === 3) {
      setActiveStyle("transactions");
    }
    if (index === 4) {
      setActiveStyle("borrow");
    }
    if (index === 5) {
      setActiveStyle("myAssets");
    }
    if (index === 6) {
      setActiveStyle("settings");
    }
  };

  useEffect(() => {
    const path = window.location.href;
    const endPath = path.split("/");
    console.log(endPath[3], "path");
    if (endPath[3] === "dashboard") {
      setActiveStyle("dashboard");
    }
    if (endPath[3] === "transactions") {
      setActiveStyle("transactions");
    }
    if (endPath[3] === "borrow") {
      setActiveStyle("borrow");
    }
    if (endPath[3] === "myAssets") {
      setActiveStyle("myAssets");
    }
    if (endPath[3] === "settings") {
      setActiveStyle("settings");
    }
  }, []);

  // useEffect(() => {
  //   UserProfileHandler();
  // }, []);

  return (
    <Navbar expand="lg" className="custom-nav-main">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="custom-nav"
        style={{ margin: 0 }}
      >
        <Nav className="me-auto">
          <MdSearch className="nav-icon" />
          <Image src={logo} />
          <div className="side-nav-links">
            <Link
              onClick={() => {
                NavbarHandler(2);
              }}
              to="/dashboard"
              className={
                activeStyle === "dashboard"
                  ? "nav-link nav-active"
                  : "nav-link "
              }
            >
              <MdDashboard className="nav-icon" />
              Dashboard
            </Link>

            <Link
              onClick={() => {
                NavbarHandler(3);
              }}
              to="/transactions"
              className={
                activeStyle === "transactions"
                  ? "nav-link nav-active"
                  : "nav-link mt-0"
              }
            >
              <MdOutlineAccountBalanceWallet className="nav-icon" />
              Transactions
            </Link>

            <Link
              onClick={() => {
                NavbarHandler(4);
              }}
              to="/borrow"
              className={
                activeStyle === "borrow"
                  ? "nav-link nav-active"
                  : "nav-link mt-0"
              }
            >
              <HiOutlinePresentationChartLine className="nav-icon" /> Borrow
            </Link>
            <Link
              onClick={() => {
                NavbarHandler(5);
              }}
              to="/myAssets"
              className={
                activeStyle === "myAssets"
                  ? "nav-link nav-active "
                  : "nav-link mt-0"
              }
            >
              <MdPersonOutline className="nav-icon" /> My Assets
            </Link>
            <Link
              onClick={() => {
                NavbarHandler(6);
              }}
              to="/settings"
              className={
                activeStyle === "settings"
                  ? "nav-link nav-active "
                  : "nav-link mt-0"
              }
            >
              <MdOutlineSettings className="nav-icon" /> Settings
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideNav;
