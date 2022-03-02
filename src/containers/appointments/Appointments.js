import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import { fetchAppointments } from "../../modules/actions";
import "./Appointments.scss";
import PastAppointment from "../../components/appointment-past/PastAppointment";
import UpcomingAppointment from "../../components/appointment-upcoming/UpcomingAppointment";

const Appointments = (props) => {
  const { past_appointments, upcoming_appointments } = props.appointment;

  useEffect(() => {
    props.fetchAppointments();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-xl-8 col-12 px-xl-4">
          {upcoming_appointments && upcoming_appointments.length ? (
            <h5 className="fw-bold">Your appointment is confirmed</h5>
          ) : (
            <h5 className="fw-bold">My appointments</h5>
          )}
          {upcoming_appointments && upcoming_appointments.length ? (
            upcoming_appointments.map((item, key) => (
              <UpcomingAppointment key={key} data={item} />
            ))
          ) : (
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold">
                  No scheduled appointment at the moment.
                </h6>
                <NavLink to={"/"} className="btn btn-success px-4 py-2">
                  Make an appointment
                </NavLink>
              </div>
            </div>
          )}
        </div>
        <div className="col-xl-4 col-12 past-container px-xl-4">
          <h5 className="fw-bold">My past appointments</h5>
          {past_appointments && past_appointments.length ? (
            past_appointments.map((item, key) => (
              <PastAppointment key={key} data={item} />
            ))
          ) : (
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold">No appointment in the past.</h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ appointment }) => ({
  appointment,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAppointments,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
