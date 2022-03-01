import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input } from "antd";

function EditPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changed, setChanged] = useState(false);

  const changeCurrentPassword = (event) => {
    setCurrentPassword(event.target.value);
    setChanged(true);
  };
  const changeNewPassword = (event) => {
    setNewPassword(event.target.value);
    setChanged(true);
  };

  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setChanged(true);
  };

  const cancel = () => {
    setChanged(false);
  };

  const save = (event) => {
    event.preventDefault();
  };

  return (
    <div className="password">
      <div className="card">
        <div className="card-header">
          <h6 className="mb-0 text-success py-1">Change password</h6>
        </div>
        <div className="card-body">
          <form onSubmit={save} className="">
            <Input.Password
              className="mt-3"
              size={"large"}
              required={true}
              placeholder="Current Password"
              onChange={changeCurrentPassword}
            />
            <Input.Password
              className="mt-3"
              size={"large"}
              required={true}
              placeholder="New Password"
              onChange={changeNewPassword}
            />
            <Input.Password
              className="mt-3"
              size={"large"}
              required={true}
              placeholder="Confirm Password"
              onChange={changeConfirmPassword}
            />

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

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
