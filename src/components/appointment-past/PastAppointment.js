import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import moment from "moment";

function PastAppointment({ data }) {
  const { name, address, type, date, serviceName } = data;
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h6 className="mb-0 py-1 text-center fw-bold">
            {moment(date).format("dddd MMM DD hh:mm")}
          </h6>
        </div>
        <div className="card-body py-1">
          <h6 className="fw-boldfw-bold">Name: {name}</h6>
          <div>Address: {address}</div>
          <div>Type: {type}</div>
          <div>Service: {serviceName}</div>
          <div className="pt-2">
            <NavLink className="text-success" to="/profile">
              Book Again
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ store }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PastAppointment);
