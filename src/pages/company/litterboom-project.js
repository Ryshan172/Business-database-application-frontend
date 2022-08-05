import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
//icons
import PhoneIcon from "@material-ui/icons/Phone";
import BusinessIcon from "@material-ui/icons/Business";
import InstagramIcon from "@material-ui/icons/Instagram";
import { ReactTinyLink } from "react-tiny-link";

import PropTypes from "prop-types";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
//import EditDetails from "EditDetails";
import MUIDataTable from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { CardMedia } from "@material-ui/core";
import Iframe from "react-iframe";
import LanguageIcon from "@material-ui/icons/Language";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Facebook from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  paper: {
    minWidth: 275,
    margin: 50,
  },
  paperb: {
    minWidth: 400,
    margin: 50,
    minHeight: 300,
    maxWidth: 400,
    maxHeight: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  titlemain: {
    fontSize: 25,
    fontWeight: "bolder",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  normal: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  table: {
    minWidth: 200,
  },
});

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function createData(description, valueobject) {
  return { description, valueobject };
}

const rows = [
  createData("Category", "Waste Management"),
  createData("Sub-category", "Community Development"),
  createData("Entity Type", "Non-profit"),
  createData("Country", "South Africa"),
  createData("Area", "KwaZulu-Natal"),
  createData("Year Founded", "2017"),
  createData("Employees", "20 - 50"),
];

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Grid>
      <Grid>
        <Card className={classes.paper}>
          <CardContent>
            <Typography
              className={classes.titlemain}
              color="black"
              gutterBottom
            >
              The Litterboom Project{" "}
              <Chip
                icon={<CheckCircleOutlineIcon />}
                label="Featured"
                color="featured"
              />
            </Typography>

            <Typography className={classes.normal} color="black" gutterBottom>
              With 90% of marine plastic pollution coming from RIvers, our
              approach is to effectively deploy teams and Litterbooms within
              strategic hot-spot areas and capture and remove this plastic
              pollution daily. Furthermore, we do extensive training with our
              teams and also do the sorting of waste at the Rivers, in order to
              offset the maximum amount of waste from over-run landfill sites,
              into recycling facilities and innovation projects using these
              waste materials. Our focus is to establish many Litterboom sites
              within certain regions and alongside Municipality, impose improved
              infrastructure within these problematic areas, whilst also
              tackling the real source of the problem, which goes all the way up
              to Big Plastics Industry and ensuring that the end-of-life
              strategy for the companies is taken into account and a formal
              responsibility is implemented, in order to do so correctly.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.paper}>
          <CardContent>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.description}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.normal}
                    >
                      {row.description}
                    </TableCell>
                    <TableCell align="left" className={classes.normal}>
                      {row.valueobject}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardContent>
            <Chip label="Oceans" color="primary" />{" "}
            <Chip label="Water Resources" color="primary" />{" "}
            <Chip label="Plastic" color="primary" />{" "}
            <Chip label="Recycling" color="primary" />{" "}
            <Chip label="Community Engagement" color="primary" />{" "}
            <Chip label="Training" color="primary" />{" "}
          </CardContent>
        </Card>
        <Card className={classes.paper}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              Projects
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              Litterboom River Interception solutions, Waste Management
              Training, Waste Beneficiation and beach Cleanups
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        container
        direction="row"
        justify="left"
        alignItems="flex-start"
        spacing={1}
      >
        <Card className={classes.paper}>
          <CardContent>
            <List component="nav" className={classes.normal} aria-label="items">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BusinessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="-" className={classes.normal} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="-" className={classes.normal} />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MailOutlineIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="Info@thelitterboomproject.com"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://www.thelitterboomproject.com/"
              >
                <ListItemAvatar>
                  <Avatar>
                    <LanguageIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="www.thelitterboomproject.com"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://www.facebook.com/The-Litterboom-Project-2271680683154501/"
              >
                <ListItemAvatar>
                  <Avatar>
                    <Facebook />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="@thelitterboomproject"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://www.instagram.com/p/CFgYRaTn6Q6/?igshid=9iyauhyfgmn5"
              >
                <ListItemAvatar>
                  <Avatar>
                    <InstagramIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="the_litterboom_project"
                  className={classes.normal}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        container
        direction="row"
        justify="left"
        alignItems="flex-start"
        spacing={1}
      >
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="logo"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/litterboom-logo-150x150.jpg"
            title="logo"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="image1"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/18217916-2410-41EC-B2A5-B6F806F6F528-Cameron-Service.jpeg"
            title="image1"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="image2"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/39BB8253-46C4-491C-A727-E71E4E0F5E88-Cameron-Service.jpeg"
            title="image2"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="image2"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/FF1F34DF-EC5E-43F9-A3DB-4D9D5663F346-Cameron-Service.jpeg"
            title="image2"
          />
        </Card>
      </Grid>
      <Grid>
        <Card className={classes.paper}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              In The Media
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              <a
                target="_blank"
                href="https://northglennews.co.za/252564/river-clean-up-curbs-pollution/"
              >
                River clean up curbs pollution
              </a>
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              <a
                target="_blank"
                href="https://www.businessinsider.co.za/litterbooms-in-cape-town-2020-6"
              >
                Floating litter booms are now on Cape Town’s rivers to help
                fight plastic waste
              </a>
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              <a
                target="_blank"
                href="https://edition.cnn.com/videos/business/2020/04/06/litterboom-innovate-africa.cnn"
              >
                Cleaning up rivers to curb plastic pollution
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    //where available, you can add media links after the last grid.
    //Media link grid template is found in templates.txt
  );
}
