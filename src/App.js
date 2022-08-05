import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//Pages//
import home from "./pages/home";
import login from "./pages/login";
//Components
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";
import Footer from "./pages/footer";
//import signup from "./pages/signup";
import user from "./pages/user";
import database from "./pages/company/database";
import eco_solid_group from "./pages/company/eco-solid-group";
import acmpmb from "./pages/company/acmpmb";
import kvm_recyclers from "./pages/company/kvm-recyclers";
import drisa from "./pages/company/drisa";
import sustainable_tech from "./pages/company/sustainable-tech";
import pyrolysis_group from "./pages/company/pyrolysis-group";
import biko_sivananda from "./pages/company/biko-sivananda";
import litterboom_project from "./pages/company/litterboom-project";
import sibayeni_metrofarming from "./pages/company/sibayeni-metrofarming";
import swayana from "./pages/company/swayana";
import operation_songamanzi from "./pages/company/operation-songamanzi";
import sustainable_cities_africa from "./pages/company/sustainable-cities-africa";
import seathebiggerpicture from "./pages/company/seathebiggerpicture";
import smartner from "./pages/company/smartner";
import kudoti from "./pages/company/kudoti";
import jobs4mzansi from "./pages/company/jobs4mzansi";
import socialcapital from "./pages/company/socialcapital";
import greenlight from "./pages/company/greenlight";
import ecowarrior from "./pages/company/ecowarriorsa";
import compostkitchen from "./pages/company/thecompostkitchen";
import biodegradable from "./pages/company/biodegradable";
import eyakogreen from "./pages/company/eyakogreen";
import regenize from "./pages/company/regenize";

const theme = createMuiTheme({
  palette: {
    primary: {
      //new colours
      light: "#b2dfdb",
      main: "#26a69a",
      dark: "#004d40",
      contrastText: "#fff",

      //Old colours
      //light: "#33c9dc",
      //main: "#00bcd4",
      //dark: "#008394",
      //contrastText: "#fff",
    },
    secondary: {
      //light: "#9e9e9e",
      //main: "#616161",
      //dark: "#424242",
      //contrastText: "#fff",

      //Old
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
    featured: {
      light: "#003366",
      main: "#003366",
      dark: "#003366",
      contrastText: "#fff",
    },
  },

  spreadThis: {
    typography: {
      useNextVariants: true,
    },
    form: {
      textAlign: "center",
    },
    image: {
      height: 50,
      width: 50,
      padding: 25,
    },
    pageTitle: {
      margin: "10px auto 10px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    button: {
      marginTop: 20,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },
    progress: {
      position: "absolute",
    },
    invisibleSeparator: {
      border: "none",
      margin: 4,
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },
  },
});

axios.defaults.baseURL =
  "https://us-central1-sustainatagapp.cloudfunctions.net/api";

//Get the token
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} />
                <Route exact path="/users/:handle" component={user} />
                <Route
                  exact
                  path="/users/:handle/post/:postId"
                  component={user}
                />
              </Switch>
            </div>
            <Route
              exact
              path="/company/eco-solid-group"
              component={eco_solid_group}
            />
            <Route exact path="/company/acmpmb" component={acmpmb} />
            <Route
              exact
              path="/company/kvm-recyclers"
              component={kvm_recyclers}
            />
            <Route exact path="/company/drisa" component={drisa} />

            <Route
              exact
              path="/company/sustainable-tech"
              component={sustainable_tech}
            />
            <Route
              exact
              path="/company/pyrolysis-group"
              component={pyrolysis_group}
            />
            <Route
              exact
              path="/company/biko-sivananda"
              component={biko_sivananda}
            />
            <Route
              exact
              path="/company/litterboom-project"
              component={litterboom_project}
            />
            <Route
              exact
              path="/company/sibayeni-metrofarming"
              component={sibayeni_metrofarming}
            />
            <Route exact path="/company/swayana" component={swayana} />
            <Route
              exact
              path="/company/operation-songamanzi"
              component={operation_songamanzi}
            />
            <Route
              exact
              path="/company/sustainable-cities-africa"
              component={sustainable_cities_africa}
            />
            <Route
              exact
              path="/company/seathebiggerpicture"
              component={seathebiggerpicture}
            />
            <Route exact path="/company/smartner" component={smartner} />
            <Route exact path="/company/kudoti" component={kudoti} />
            <Route exact path="/company/jobs4mzansi" component={jobs4mzansi} />
            <Route
              exact
              path="/company/socialcapital"
              component={socialcapital}
            />
            <Route exact path="/company/greenlight" component={greenlight} />
            <Route exact path="/company/ecowarriorsa" component={ecowarrior} />
            <Route
              exact
              path="/company/thecompostkitchen"
              component={compostkitchen}
            />
            <Route
              exact
              path="/company/biodegradable"
              component={biodegradable}
            />
            <Route exact path="/company/eyakogreen" component={eyakogreen} />
            <Route exact path="/company/regenize" component={regenize} />
          </Router>
          <Footer />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
