import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";
import MakePost from "./MakePost";
import Table from "./Table";
import Sustainamap from "./Sustainamap";
import Notifications from "./Notifications";
//Material UI Imports//
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
//Icons
import HomeIcon from "@material-ui/icons/Home";
import CardMedia from "@material-ui/core/CardMedia";
import AppIcon from "../images/icon.JPG";
import { Typography } from "@material-ui/core";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <Button
                color="inherit"
                target="_blank"
                href="https://www.sustainatag.com/sustainatag-connect-support/"
              >
                Support
              </Button>
              <Link to="/">
                <MyButton tip="Dashboard">
                  <AssignmentIndIcon />
                </MyButton>
              </Link>
              <Table />
              <Sustainamap />
            </Fragment>
          ) : (
            <Fragment>
              <Button
                color="inherit"
                target="_blank"
                href="https://www.sustainatag.com/sustainatag-connect-support/"
              >
                Support
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Dashboard
              </Button>
              <Table />
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
