import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '../../../layout/Loader/Loader';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// get this staff;
import { getStaff, setUserData } from '../../../modules/actions'
import OtpModal from './OtpModal';
import { sendOtp } from '../../../modules/actions';
import '../steps.scss'
import moment from 'moment';




function ThirdStep(props) {

    // set initials;
    let { staff, category, schedule, service, meeting_type } = props.scheduler;
    let { vet_details } = props.vet
    let date_options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    const [AddressObj, setAddressObj] = useState({
        PostalCode: "",
        Town: "",
        Address: ""
    })
    useEffect(() => {
        props.setUser({ ...props.User, address: AddressObj.Address, town: AddressObj.Town, postal_code: AddressObj.PostalCode })
    }, [AddressObj])
    let date = schedule.for_date ? new Date(schedule.for_date).toLocaleDateString('en-us', date_options) : "";

    // https://app.planipets.com/api/send-otp
    // expects JSON => {phone_number:""}
    // https://app.planipets.com/api/resend-otp
    // expects JSON => {phone_number:""}
    // https://app.planipets.com/api/verify-otp

    // expects JSON => { phone_number:"", otp:""}

    useEffect(() => {
        let mounted = false;

        if (props.User.fullname && props.User.email && props.User.phone_number && props.User.address) {
            props.setUserData(props.User);
        }

        return () => {
            return mounted = true;
        }
    }, [props.User])

    const [loaderStep, setLoaderStep] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoaderStep(false)
        }, [500])
    }, [])

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [num, setNum] = useState(false);
    const [phone, setPhoneNumber] = useState()
    const sendOtp2 = () => {
        const obj = { "phone_number": props.User.phone_number }
        setNum(obj)
        props.sendOtp(obj, showModal)




    };

    function showModal() {
        // console.log('aaagyaa ha response...',)
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    console.log(props.otploading)


    const [duration, setDuration] = useState("")


    useEffect(() => {
        var startTime = moment(`${schedule.for_date} ${schedule.start_time}`);
        var endTime = moment(`${schedule.for_date} ${schedule.end_time}`);

        // calculate total duration
        var duration = moment.duration(endTime.diff(startTime));
        var hours = parseInt(duration.asHours());

        // duration in minutes
        var minutes = parseInt(duration.asMinutes()) % 60;
        setDuration((hours ? hours + ' hour ' : '') + (hours && minutes ? 'and' : '') + (minutes ? minutes + ' minutes.' : ''));
        console.log(schedule, 'schedule')
    }, [schedule])


    return (
        loaderStep ?
            <Loader />
            :
            <div className="thirdSectionMain">
                <div className="formDiv">
                    <div className="inputDiv">
                        <label>Full Name</label>
                        <input name="fullname" onChange={props.changeHandler} placeholder="enter your full name" />
                    </div>
                    <div className="inputDiv">
                        <label>Email <span className="emailError" id="emailError">!</span></label>
                        <input name="email" onChange={(ev) => {
                            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            let email = re.test(ev.target.value)
                            if (email) {
                                //  console.log('OK')
                                document.getElementById('emailError').style.display = 'none'
                                props.changeHandler(ev);
                            } else {
                                if (ev.target.value === '') {
                                    document.getElementById('emailError').style.display = 'none'
                                } else {
                                    document.getElementById('emailError').style.display = 'flex'
                                }
                                console.log('error');
                            }
                        }} placeholder="enter a valid email address" />

                    </div>
                    <div className="inputDiv">
                        <label>Address</label>
                        <input name="address" className='inputAddress' onChange={(ev) => {
                            props.changeHandler(ev);
                        }} placeholder="enter a valid address" />
                    </div>
                    <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
                        <div className="inputDiv" style={{ width: "50%", }}>
                            <label>Town</label>
                            <input name='town' className='inputAddress' onChange={(ev) => {
                                props.changeHandler(ev);
                            }} placeholder="Town" />
                        </div> <div className="inputDiv" style={{ width: "50%", }}>
                            <label>Postal Code</label>
                            <input name='postal_code' className='inputAddress' onChange={(ev) => {
                                props.changeHandler(ev);
                            }} placeholder="Postal Code" />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label >Phone</label>
                        <div className="phoneNumberDiv">
                            <div className='input-2 input-22'>
                                <PhoneInput className='inputPhoneNumber' inputProps={{
                                    name: 'phone_number',
                                    required: true,
                                    enableAreaCodes: true,
                                    autoFocus: true,
                                    disableSearchIcon: true,
                                    disableDropdown: true,
                                    enableSearch: true
                                }} name="phone_number" type="tel" country={'fr'} inputStyle={{ "border": "1px solid !important", "borderRight": "0px !important" }} onChange={e => props.changeHandler(e)} />


                                {/* <input name="phone_number" type="tel" pattern="((00)?(\+)?\d{1,3})[-\s]+(\d{1,3})[-\s]+(\d{4,10})" maxLength="13" size="11" min="11" max="11" onChange={(e) => { props.changeHandler(e) }} placeholder="+XX XXXXXXXX" /> */}
                                {/* <input name="phone_number" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxLength="14" size="11" min="11" max="14" onChange={(e) => { props.changeHandler(e) }} placeholder="enter a valid Phone number" /> */}
                                <button className="optButton" onClick={sendOtp2}
                                    disabled={props.otploading}>{props.otploading ? <div className="loaderSec">
                                        <div class="loader"></div>

                                    </div> : `Send Otp`}</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="detailDiv">
                    <h5>Appointment Details</h5>
                    <div className="detailBox">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Staff Member</td>
                                    <th>{staff && staff.user.name}</th>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <th>{date && date}</th>
                                </tr>
                                <tr>
                                    <td>Time</td>
                                    {/* <th>{schedule && `${schedule.start_time.split(":").slice(0, -1).join(':')} - ${schedule.end_time.split(":").slice(0, -1).join(':')}`} EDT</th> */}
                                    <th>{schedule && `${schedule.start_time.split(":").slice(0, -1).join(':')}`} EDT</th>
                                </tr>
                                <tr>
                                    <td>Length</td>
                                    {/* <th>{schedule && `${schedule.start_time.split(":").slice(0, -1).join(':')} - ${schedule.end_time.split(":").slice(0, -1).join(':')}`} EDT</th> */}
                                    <th>{duration}</th>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <th>{vet_details && vet_details.location}</th>
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
                                    <td>Meeting Type</td>
                                    <th>{schedule && meeting_type}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <OtpModal isModalVisible={isModalVisible}
                    showModal={showModal}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    setotpVerify={props.setotpVerify}
                    user={props.User}
                    num={num}
                    next={props.next}
                />
            </div>


    )
}

const mapStateToProps = ({ UI, scheduler, vet, sendOtp, store }) => ({
    UI, scheduler, vet, sendOtp, otploading: store.otploading
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getStaff, setUserData, sendOtp
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThirdStep)