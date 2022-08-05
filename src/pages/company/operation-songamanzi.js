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
  createData("Category", "Water Management"),
  createData("Sub-category", "Community Development"),
  createData("Entity Type", "Non-profit"),
  createData("Country", "South Africa"),
  createData("Area", "KwaZulu-Natal"),
  createData("Year Founded", "2018"),
  createData("Employees", "10 - 20"),
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
              Operation Songamanzi{" "}
              <Chip
                icon={<CheckCircleOutlineIcon />}
                label="Featured"
                color="featured"
              />
            </Typography>

            <Typography className={classes.normal} color="black" gutterBottom>
              Operation Songamanzi believes that it can play a role in shaping
              the future. promoting water conservation, being proactive in
              responding to this challenge, by providing water conservation
              mentorship as well as the necessary tools leading to better way of
              using water. OSSO is concerned about the crisis of water scarcity
              and the impact of climate change
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
            <Chip label="Awareness" color="primary" />{" "}
            <Chip label="Water Scarcity" color="primary" />{" "}
            <Chip label="Education" color="primary" />{" "}
            <Chip label="Water Resources" color="primary" />{" "}
            <Chip label="Community Engagement" color="primary" />{" "}
          </CardContent>
        </Card>
        <Card className={classes.paper}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              Projects
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              Awareness Campaigns, Public Talks, Education Videos, Community
              Water Projects
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
                <ListItemText
                  primary="Pietermaritzburg, KwaZulu-Natal"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="+27 72 490 4246"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MailOutlineIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="ossowater@gmail.com"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://www.facebook.com/ossosakzn/"
              >
                <ListItemAvatar>
                  <Avatar>
                    <Facebook />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="@ossosakzn" className={classes.normal} />
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
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/download-150x150.png"
            title="logo"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="image1"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/31944479_501210656943789_1555976457027584000_n.jpg"
            title="image1"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="image2"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/31948957_501210730277115_4511161913727516672_n.jpg"
            title="image2"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="image3"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/88169101_941332142931636_1791887882336600064_o.jpg"
            title="image3"
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
                href="https://ndabaonline.ukzn.ac.za/UkzndabaStory/Vol6-Issue56/UKZN%20Students%20Lead%20the%20Fight%20Against%20Water%20Scarcity/"
              >
                UKZN Students Help Combat Water Scarcity
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
