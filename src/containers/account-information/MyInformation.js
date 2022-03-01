import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { useHistory } from "react-router-dom";
import { logOutUser } from "../../modules/actions";
import "./MyInformation.scss";

import Contact from "../../components/contact/Contact";
import EditPassword from "../../components/edit-password/EditPassword";

const MyInformation = (props) => {
  const history = useHistory();
  const signout = () => {
    props.logOutUser(history);
  };

  return (
    <div className="container">
      <div className="main-wrapper mx-auto">
        <div className="mt-4">
          <Contact />
        </div>

        <div className="mt-4">
          <EditPassword />
        </div>

        <button
          className="btn btn-success bg-white text-success px-4 py-2 mt-4 btn-block w-100"
          onClick={signout}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logOutUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MyInformation);
