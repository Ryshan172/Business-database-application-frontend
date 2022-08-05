import React from "react";
import "./footer.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function Footer() {
  return (
    <Grid>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="https://www.sustainatag.com/wp-content/uploads/2020/06/applogob-2048x579.png"
                width={400}
              ></img>
            </div>

            <div className="col">
              <h4>email: team@sustainatag.com</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Sturtium (Pty) Ltd. | All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Footer;
