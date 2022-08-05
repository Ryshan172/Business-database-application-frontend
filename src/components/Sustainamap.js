import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import EditIcon from "@material-ui/icons/Edit";
import MyButton from "../util/MyButton";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
//dialog stuff
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
//Redux stuff
import { connect } from "react-redux";
import { makePost, clearErrors } from "../redux/actions/dataActions";
import { compose } from "redux";
import MUIDataTable from "mui-datatables";
import Sustainadata from "./Sustainadata";
import Statictable from "./Statictable";
import Mapbox from "./Mapbox";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import ExploreIcon from "@material-ui/icons/Explore";

const styles = (theme) => ({
  ...theme.spreadThis,
  submitButton: {
    position: "relative",
    marginTop: 10,
    float: "left",
  },
  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    right: "6%",
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class MakePost extends Component {
  state = {
    open: false,
    body: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "", open: false, errors: {} });
    }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.makePost({ body: this.state.body });
  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading },
    } = this.props;
    return (
      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Map of Data Points">
          <ExploreIcon />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullScreen="true"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogTitle>Map</DialogTitle>
          <DialogContent>
            <Mapbox />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

MakePost.propTypes = {
  makePost: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { makePost, clearErrors })(
  withStyles(styles)(MakePost)
);

//I made changes to the "write a post" placeholder and gave suggested topics
//Suggested topics: Water management, Rural development, Waste management
