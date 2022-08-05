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
  createData("Sub-category", "Marine Waste"),
  createData("Entity Type", "Non-profit"),
  createData("Country", "South Africa"),
  createData("Area", "Western Cape"),
  createData("Year Founded", "2018"),
  createData("Employees", "1 - 10"),
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
              #SeaTheBiggerPicture{" "}
              <Chip
                icon={<CheckCircleOutlineIcon />}
                label="Featured"
                color="featured"
              />
            </Typography>

            <Typography className={classes.normal} color="black" gutterBottom>
              An organisation focused on coastal environmental education and
              ocean pollution awareness. We aim to defend South African waters
              and beaches against marine litter through education, beach
              clean-ups and corporate engagement. With a growing team of
              passionate volunteers and partners we get communities involved in
              addressing the global pollution crisis. We achieve this through
              our Defenders of the Blue school program, collaborative clean up
              initiatives, informative talks and dedicated efforts to find
              alternatives to single-use plastic
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
            <Chip label="Waste" color="primary" />{" "}
            <Chip label="Plastic" color="primary" />{" "}
            <Chip label="Recycling" color="primary" />{" "}
            <Chip label="Community training" color="primary" />{" "}
          </CardContent>
        </Card>
        <Card className={classes.paper}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              Products/Services
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              Beach cleanup, waste management
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
                  primary="Cape Town, Western Cape"
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
                  primary="seathebiggerpicture@gmail.com"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://seathebiggerpicture.org/"
              >
                <ListItemAvatar>
                  <Avatar>
                    <LanguageIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="seathebiggerpicture.org"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
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
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/cropped-Logo_final.png"
            title="logo"
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
                href="https://www.supershazzer.com/seathebiggerpicture-ocean-initiative-doing-amazing-work/"
              >
                SeaTheBiggerPicture doing amazing work
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
