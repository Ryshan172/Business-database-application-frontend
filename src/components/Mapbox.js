import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Iframe from "react-iframe";

import "./styles.css";

export default function App({}) {
  return (
    <>
      <Iframe
        url="https://test.sturtium.co.za/"
        width="1000px"
        height="500px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </>
  );
}
