import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar as BsNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();

  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav className="ml-auto">
        <NavItem>
          <Link className="nav-link" to="/">
            Posts
          </Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </NavItem>
        <li className="nav-item">

        </li>
      </Nav>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <BsNavbar className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
        <NavbarBrand href="/">StackDeveloper</NavbarBrand>
          <NavbarToggler className="mr-2" />
         <Collapse  navbar>


            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  Developers
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}

              </Collapse>
        </div>

        </BsNavbar>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Navbar);
