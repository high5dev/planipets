import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from './Calander';

function SecondStep() {

    let timeSlots = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
    let [selectedSlot, setSelectedSlot] = useState("04")

    return (
        <div className="secondStepMain">
            <div className="firstDiv">
                <div className="div1">
                    <p>You are booking for </p>
                    <span>17th May, 2021 - Thursday</span>
                </div>
                <div className="div2">
                    <p>Doctor Name</p>
                </div>
                <div className="div3">
                    <span>The appointment will last </span>
                    <p>1 Hour</p>
                </div>
            </div>
            <div className="secondDiv">
                <Calendar />
                <div className="TimeSlots">
                    {timeSlots.map((a, i) => {
                        return (
                            <div onClick={() => setSelectedSlot(a)} className={`slot ${a === selectedSlot ? "active" : ""}`}>
                                {a}:00
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ store }) => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondStep)