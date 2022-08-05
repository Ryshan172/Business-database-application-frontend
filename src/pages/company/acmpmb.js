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
  createData("Category", "Social Sustainability"),
  createData("Sub-category", "Community Development"),
  createData("Entity Type", "Non-profit"),
  createData("Country", "South Africa"),
  createData("Area", "KwaZulu-Natal"),
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
              Active Citizen's Movement PMB{" "}
              <Chip
                icon={<CheckCircleOutlineIcon />}
                label="Featured"
                color="featured"
              />
            </Typography>

            <Typography className={classes.normal} color="black" gutterBottom>
              The Active Citizen's Movement Pietermaritzburg is a civil society
              formation drawn from all communities and promoting active
              citizenship. We aim to encourage people to take an active stance
              in issues affecting them, and to demand accountability from
              elected public officials
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
            <Chip label="Public Health" color="primary" />{" "}
            <Chip label="Environmental Health" color="primary" />{" "}
            <Chip label="Education" color="primary" />{" "}
            <Chip label="Community Services" color="primary" />{" "}
          </CardContent>
        </Card>
        <Card className={classes.paper}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              Projects
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              We value social cohesion, non-racism, non-sexism, democracy and
              the values enshrined in the Constitution and Bill of Rights. To
              promote these values, the ACM-PMB has been involved with several
              initiatives over the years Some of the avenues we have worked in
              include Securing medical assistance for underprivileged, citizens,
              Environmental education and awareness, Food security and skills
              development, Sanitation and Waste Management
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
                  primary="Pietermaritzburg, KwaZulu-Natal, South Africa"
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
                  primary="+27 71 481 9760"
                  className={classes.normal}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://www.instagram.com/acm_pmb/"
              >
                <ListItemAvatar>
                  <Avatar>
                    <InstagramIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary="@acm_pmb" className={classes.normal} />
              </ListItem>
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://www.acm-pmb.co.za/"
              >
                <ListItemAvatar>
                  <Avatar>
                    <LanguageIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary="www.acm-pmb.co.za"
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
            alt="acm logo"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/cropped-Logo1.jpg"
            title="acm logo"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="acm donation"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/beneficiary-1.jpg"
            title="acm donation"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="hospital visit"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/IMG-20200407-WA0005-2.jpg"
            title="hospital visit"
          />
        </Card>
        <Card className={classes.paperb}>
          <CardMedia
            component="img"
            alt="hospital visitb"
            image="https://www.sustainatag.com/wp-content/uploads/2020/09/eyescreeningsb.jpg"
            title="hospital visitb"
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
                href="https://capitalnewspapers.co.za/43800/call-united-local-civic-front/"
              >
                Call for united local civic front
              </a>
            </Typography>
            <Typography className={classes.normal} color="black" gutterBottom>
              <a
                target="_blank"
                href="https://capitalnewspapers.co.za/102420/pietermaritzburg-protest-action/"
              >
                Pietermaritzburg protest action
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
