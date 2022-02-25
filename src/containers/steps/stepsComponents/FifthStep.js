import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import character from '../../../Images/steps/character2.png'
import { storeBooking } from '../../../modules/actions'
import Loader from '../../../layout/Loader/Loader'

function FithSection(props) {

    let { staff, category, schedule, service, meeting_type } = props.scheduler;
    let date_options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    let date = schedule.for_date ? new Date(schedule.for_date).toLocaleDateString('en-us', date_options) : "";

    // I just can't get over the fact that how stupid this stepper have been coded. Their's no way we can add a submit handler on these steps.
    // Cuz overall the handler is in parent component.
    useEffect(() => {
        let mounted = false;
        console.log(props, "effect")
        if (props.scheduler && props.scheduler.validated) {
            console.log(props.User, "effect -> if")
            props.storeBooking({...props.scheduler, town: props.User.town, postal_code: props.User.postal_code}, props.setloading)
            // props.storeBooking({ ...props.scheduler, schedule: { ...props.scheduler.schedule, end_time: props.scheduler.schedule.start_time } })
        }
        return () => {
            mounted = true;
        }
    }, [props.scheduler])

    return (
        <div className='fifthmain'>

            {props.loading ?
                // <div className=" loaderSec">
                //     <div className="loader"></div>

                // </div>
                <Loader />
                :
                <div className="fifthSectionMain">
                    <img src={character} alt="img" />
                    <div className="contentDiv">
                        <h5>Perfect ! Your appointment<br />is Confirmed. </h5>
                        <p>You 've just received a recapitulation by e-mail</p>
                        <button>
                            {date}
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.385" height="23.385" viewBox="0 0 23.385 23.385">
                                <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M23.947,12.255A11.692,11.692,0,1,1,12.255.563,11.692,11.692,0,0,1,23.947,12.255ZM10.9,18.446l8.675-8.675a.754.754,0,0,0,0-1.067L18.511,7.637a.754.754,0,0,0-1.067,0l-7.075,7.075-3.3-3.3a.754.754,0,0,0-1.067,0L4.932,12.476a.754.754,0,0,0,0,1.067l4.9,4.9a.754.754,0,0,0,1.067,0Z" transform="translate(-0.563 -0.563)" fill="#fff" />
                            </svg>
                        </button>
                        <div className="detailDiv">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Staff Member</td>
                                        <th>{staff && staff.name}</th>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <th>{category && category.name}</th>
                                    </tr>
                                    <tr>
                                        <td>Service</td>
                                        <th>{service && service.name}</th>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <th>{date && date}</th>
                                    </tr>
                                    <tr>
                                        <td>Time</td>
                                        <th>{schedule && `${schedule.start_time}`} EDT</th>
                                    </tr>
                                    <tr>
                                        <td>Meeting Type</td>
                                        <th>{schedule && meeting_type}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

const mapStateToProps = ({ UI, scheduler, vet }) => ({
    UI, scheduler, vet
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            storeBooking
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FithSection)