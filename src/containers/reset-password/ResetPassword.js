import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "./ResetPassword.scss";
import sendImg from "../../Images/loginPage/send.svg";
import Logo from "../../Images/home/logo.png";
import { forgotPassword } from "../../modules/actions";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const reset = (event) => {
    event.preventDefault();
    props.forgotPassword(email, props.history);
    setSent(true);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center pt-5">
        <img src={Logo} alt="planipets" width={200} />
      </div>
      <div className="wrapper mx-auto">
        {!sent ? (
          <>
            <div className="card mt-5">
              <div className="card-body p-4">
                <h5 className="mb-4 text-center text-success">
                  Forgot your password?
                </h5>

                <form onSubmit={reset}>
                  <Input
                    suffix={<MailOutlined />}
                    size={"large"}
                    type="email"
                    placeholder="Email address"
                    required={true}
                    onChange={changeEmail}
                  />

                  <button
                    className="btn btn-block btn-success mt-3 w-100"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </form>

                <div className="mt-3 w-100 text-center">
                  <NavLink className="text-success text-center" to="/login">
                    Back to Login
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="text-center w-100 my-3 text-success">
              <h4 className="text-success">Or</h4>
            </div>

            <div className="card text-success">
              <div className="card-body p-4">
                <h5 className="mb-4 text-center text-success">
                  Don’t have an account?
                </h5>
                <NavLink
                  className="btn btn-block btn-success bg-white text-success w-100"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-5 text-center">
            <img src={sendImg} className="mb-4" alt="sent" width={100} />

            <h3 className="mb-3">Request sent successfully</h3>
            <div>
              We have sent a confirmation email to &nbsp;
              <strong>{email}</strong>
            </div>
            <div>Please check your email.</div>

            <div className="mt-3 w-100 text-center">
              <NavLink className="text-success text-center" to="/login">
                Back to Login
              </NavLink>
            </div>
          </div>
        )}
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
      forgotPassword,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
