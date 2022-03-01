import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input } from "antd";
import "antd-country-phone-input/dist/index.css";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import fr from "world_countries_lists/data/countries/fr/world.json";

function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [changed, setChanged] = useState(false);

  const changeEmail = (event) => {
    setEmail(event.target.value);
    setChanged(true);
  };

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
    setChanged(true);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
    setChanged(true);
  };

  const getFlag = (short) => {
    const data = require(`world_countries_lists/data/flags/32x32/${short.toLowerCase()}.png`);
    if (typeof data === "string") {
      return data;
    }
    return data.default;
  };
  const changePhoneNumber = (event) => {
    setPhone(event.phone);
    setChanged(true);
  };

  const cancel = () => {
    setChanged(false);
  };

  const save = (event) => {
    event.preventDefault();
  };
  return (
    <div className="contact">
      <div className="card">
        <div className="card-header">
          <h6 className="mb-0 text-success py-1">My contact detail</h6>
        </div>
        <div className="card-body">
          <form onSubmit={save} className="row">
            <div className="col-sm-12 col-md-6 mb-3">
              <Input
                size={"large"}
                type="text"
                placeholder="First Name"
                required={true}
                onChange={changeFirstName}
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <Input
                size={"large"}
                type="text"
                placeholder="Last Name"
                required={true}
                onChange={changeLastName}
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-sm-3 mb-md-0">
              <Input
                size={"large"}
                type="email"
                placeholder="Email address"
                required={true}
                onChange={changeEmail}
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-sm-3 mb-md-0">
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

            {changed ? (
              <div className="col-12 mt-3 d-flex justify-content-between">
                <button
                  className="btn btn-success bg-white text-success px-4 py-2"
                  onClick={cancel}
                >
                  Cancel
                </button>

                <button type="sumbit" className="btn btn-success px-4 py-2">
                  Save
                </button>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ store }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
