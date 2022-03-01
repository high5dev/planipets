import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../../assets/common.scss";
import Layout from "../../layout/layout";
import Connection from "../connection/Connection";
import Listing from "../listing/Listing";
import Profile from "../profile/Profile";
import Steps from "../steps/Steps";

import "antd/dist/antd.css";
import Login from "../login/Login";
import Vet from "../vet/Vet";

import AOS from "aos";

import "aos/dist/aos.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import store from "../../modules/store";
import { bookAppointment, getUserCredentials } from "../../modules/actions";
import VetListings from "../vetListings/VetListings";
import NotCompletePage from "../NotcompletePage/notCompletePage";
import ResetPassword from "../reset-password/ResetPassword";
import Register from "../register/Register";
import MyAccountPage from "../account/MyAccountPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = store;
  }

  componentDidMount() {
    AOS.init({
      duration: 500,
      once: true,
    });
    // Get localStorage time;
    const loginCookie = localStorage.getItem("cookie-token");
    console.log("data book_Appointment", this.props.bookingData);

    // if (loginCookie)
    //   this.props.getUserCredentials()
  }

  render() {
    console.log("data book_Appointment", this.props.bookingData);
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ResetPassword} />
          <Route exact path="/register" component={Register} />
          <Layout>
            <Route exact path="/" component={NotCompletePage} loading={true} />
            {/* <Route exact path="/" component={Home} loading={true} /> */}
            <Route exact path="/test" component={Home} loading={true} />{" "}
            {/*//correct*/}
            <Route exact path="/myaccount" component={MyAccountPage} />
            <Route exact path="/connection" component={Connection} />
            <Route exact path="/listings" component={Listing} /> {/*//correct*/}
            {/* <Route exact path="/vet-listings" component={VetListings} /> //correct */}
            <Route exact path="/vet-listings" component={Listing} />{" "}
            {/*//correct*/}
            <Route exact path="/vet/:id/:name" component={Vet} />{" "}
            {/*//correct*/}
            <Route exact path="/profile" component={Profile} /> {/*//correct*/}
            <Route
              exact
              path="/vet/:id/:name/profile"
              component={Profile}
            />{" "}
            {/*//correct*/}
            <Route exact path="/steps" component={Steps} />
            <Route exact path="/listing" component={Listing} /> {/*//correct*/}
          </Layout>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, bookAppointment }) => ({
  auth,
  bookingData: bookAppointment,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUserCredentials,
      bookAppointment,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
