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
  createData("Sub-category", "Event Service"),
  createData("Entity Type", "For-profit"),
  createData("Country", "South Africa"),
  createData("Area", "KwaZulu-Natal"),
  createData("Year Founded", "2019"),
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
              Eco-Solid Group{" "}
              <Chip
                icon={<CheckCircleOutlineIcon />}
                label="Featured"
                color="featured"
              />
            </Typography>

            <Typography className={classes.normal} color="black" gutterBottom>
              Our company provides Waste Management and Event Cleanup services
              which incorporate sustainable practices. We aim to use
              eco-friendly cleaning products and manage waste in a responsible
              manner
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
            <Chip label="Eco-products" color="primary" />{" "}
            <Chip label="Events" color="primary" />{" "}
            <Chip label="Cleanup" color="primary" />{" "}
            <Chip label="Recycling" color="primary" />{" "}
          </CardContent>
        </Card>
        <Card className={classes.paper}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              Products/Services
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              Pest Control and Fumigation, Cleaning and Disinfection, Hygiene
              equipment and consumables, Waste management
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
                  primary="150115 Emvelweni Location, Sweetwaters Vulindlela, Pietermaritzburg, 3201"
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
                  primary="+27 82 234 9138"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <InstagramIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="@ecosolidgroup"
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
            alt="ecosolid logo"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/esglogo.jpg"
            title="ecosolid logo"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="ecosolid logo"
            image="https://www.sustainatag.com/wp-content/uploads/2020/06/IMG-20200603-WA0000.jpg"
            title="ecosolid logo"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="ecosolid logo"
            image="https://www.sustainatag.com/wp-content/uploads/2020/06/image.png"
            title="ecosolid logo"
          />
        </Card>
      </Grid>
    </Grid>
    //where available, you can add media links after the last grid.
    //Media link grid template is found in templates.txt
  );
}
