import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import moment from "moment";
import {
  DeleteTwoTone,
  CalendarTwoTone,
  ProjectTwoTone,
} from "@ant-design/icons";

function UpcomingAppointment({ data }) {
  const { name, address, type, date, serviceName, image } = data;
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-0 ">
              <img src={image} width={"100%"} />
            </div>
            <div className="col-md-8 col-12 ">
              <h6 className="fw-boldfw-bold">Name: {name}</h6>
              <div>Address: {address}</div>
              <div>Type: {type}</div>
              <div>Service: {serviceName}</div>
              <div>Date: {moment(date).format("dddd MMM DD hh:mm")}</div>
              <div className="pt-2 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <CalendarTwoTone twoToneColor="#198754" />
                  <NavLink className="text-success ms-1" to="/profile">
                    Add to my calendar
                  </NavLink>
                </div>
                <div className="d-flex align-items-center">
                  <DeleteTwoTone twoToneColor="#198754" />
                  <NavLink className="text-success ms-1" to="/profile">
                    Cancel appointment
                  </NavLink>
                </div>
                <div className="d-flex align-items-center">
                  <ProjectTwoTone twoToneColor="#198754" />
                  <NavLink className="text-success ms-1" to="/profile">
                    Move appointment
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ store }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingAppointment);
