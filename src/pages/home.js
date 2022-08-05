import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Profile from "../components/Profile";

import { connect } from "react-redux";

class home extends Component {
  componentDidMount() {}

  render() {
    return (
      <Grid container spacing={16} justify="center">
        <Grid item sm={10} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(home);
