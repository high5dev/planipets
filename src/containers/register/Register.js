import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { registerUser } from "../../modules/actions";
import "./Register.scss";
import "antd-country-phone-input/dist/index.css";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import fr from "world_countries_lists/data/countries/fr/world.json";
import Logo from "../../Images/home/logo.png";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const changePhoneNumber = (event) => {
    setPhone(event.phone);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const create = (event) => {
    event.preventDefault();

    console.log(email, password);
    props.registerUser({ email, password, phone });
  };

  const getFlag = (short) => {
    const data = require(`world_countries_lists/data/flags/32x32/${short.toLowerCase()}.png`);
    if (typeof data === "string") {
      return data;
    }
    return data.default;
  };

  return (
    <div className="container">
      <div className="wrapper mx-auto">
        <div className="d-flex justify-content-center pt-5">
          <img src={Logo} alt="planipets" width={200} />
        </div>
        <div className="card mt-5">
          <div className="card-body p-4">
            <h5 className="mb-3 text-center text-success">
              Already have an account?
            </h5>
            <div className="mt-4 w-100 text-center">
              <NavLink
                className="btn btn-success bg-white text-success text-center w-100"
                to="/login"
              >
                To Login
              </NavLink>
            </div>
          </div>
        </div>

        <div className="text-center w-100 my-3">
          <h4 className="text-success">Or</h4>
        </div>

        <div className="card">
          <div className="card-body p-4">
            <h5 className="mb-4 text-center text-success">
              Don’t have an account?
            </h5>

            <form onSubmit={create}>
              <div className="mb-3">
                <ConfigProvider
                  locale={fr}
                  areaMapper={(area) => {
                    return {
                      ...area,
                      emoji: (
                        <img
                          alt="flag"
                          style={{
                            width: 18,
                            height: 18,
                            verticalAlign: "sub",
                          }}
                          src={getFlag(area.short)}
                        />
                      ),
                    };
                  }}
                >
                  <CountryPhoneInput
                    defaultValue={{ short: "FR" }}
                    required
                    onChange={changePhoneNumber}
                  />
                </ConfigProvider>
              </div>
              <Input
                suffix={<MailOutlined />}
                size={"large"}
                type="email"
                placeholder="Email address"
                required={true}
                onChange={changeEmail}
              />
              <Input.Password
                className="mt-3"
                size={"large"}
                required={true}
                placeholder="Password"
                onChange={changePassword}
              />
              <button type="submit" className="btn btn-success w-100 mt-4">
                Create an account
              </button>
            </form>
          </div>
        </div>
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
      registerUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
