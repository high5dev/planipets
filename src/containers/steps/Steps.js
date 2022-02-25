import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Stepper from 'react-stepper-horizontal';

import './steps.scss'
import FirstStep from './stepsComponents/FirstStep';
import SecondStep from './stepsComponents/SecondStep';
import ThirdStep from './stepsComponents/ThirdStep';
import FourthStep from './stepsComponents/FourthStep';
import FifthStep from './stepsComponents/FifthStep';

function StepsMain(props) {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    let [dot1, setDot1] = useState(true)
    let [dot2, setDot2] = useState(false)
    let [dot3, setDot3] = useState(false)
    let [dot4, setDot4] = useState(false)
    let [dot5, setDot5] = useState(false)

    let [line1, setLine1] = useState(false)
    let [line2, setLine2] = useState(false)
    let [line3, setLine3] = useState(false)
    let [line4, setLine4] = useState(false)
    const [loading, setloading] = useState(false)

    let [currentStep, setCurrentStep] = useState("4")

    // const loadUser
    const loadUser = (userData) => {
        // console.log(userData, "LoadData")
    }


    useEffect(()=>{
        window.scrollTo(0,0)
    },[currentStep])

    useEffect(() => {
        if (Object.keys(props.vet.vet_details).length <= 0) {
            props.history.push('/')
        }
        return () => {
            console.log("clearing up")
        }
    }, [props.vet])

    const [User, setUser] = useState({
        fullname: '',
        email: '',
        phone_number: '',
        address: ''
    })

    const [optVerify, setotpVerify] = useState(false)

    const changeHandler = (e) => {
        // console.log('e',e)
        if (e.target) {
            setUser({
                ...User,
                [e.target.name]: e.target.value
            })
        } else {
            setUser({
                ...User,
                phone_number: e
            })
        }
        // if(e && e!== undefined && e !==''){

        //     setUser({
        //         ...User,
        //         [phone_number] :e
        //     })
        // }
    }
    useEffect(() => {
        console.log(User)
    }, [User])
    console.log('props', props)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        if (params.get("steps")) {
            let arrStr = params.get("steps").split(",").join(" ")
            if (arrStr.match("2")) {
                setDot2(true)
                setLine1(true)
                setCurrentStep("2")
            }
            if (arrStr.match("3")) {
                setDot3(true)
                setLine2(true)
                setCurrentStep("3")
            }
            if (arrStr.match("4")) {
                setDot4(true)
                setLine3(true)
                setCurrentStep("4")
            }
            if (arrStr.match("5")) {
                setDot5(true)
                setLine4(true)
                setCurrentStep("5")
            }
        }
    }, [window.location.pathname])

    const next = () => {
        if (dot1 && !dot2 && !dot3 && !dot4 && !dot5) {
            props.history.push('/steps?steps=1,2')
            setDot2(true)
            setLine1(true)
            setCurrentStep("2")
        }
        if (dot1 && dot2 && !dot3 && !dot4 && !dot5) {
            props.history.push('/steps?steps=1,2,3')
            setDot3(true)
            setLine2(true)
            setCurrentStep("3")
        }
        if (dot1 && dot2 && dot3 && !dot4 && !dot5) {
            props.history.push('/steps?steps=1,2,3,4')
            setDot4(true)
            setLine3(true)
            setCurrentStep("4")
        }
        if (dot1 && dot2 && dot3 && dot4 && !dot5) {
            props.history.push('/steps?steps=1,2,3,4,5')
            setDot5(true)
            setLine4(true)
            setCurrentStep("5")
        }
    }


    const back = () => {
        if (currentStep == 3) {
            props.history.goBack();
            return;
        }
        if (dot1 && dot2 && dot3 && dot4 && dot5) {
            props.history.push('/steps?steps=1,2,3,4')
            setDot1(true)
            setDot2(true)
            setDot3(true)
            setDot4(true)
            setDot5(false)
            setLine1(true)
            setLine2(true)
            setLine3(true)
            setLine4(false)
            setCurrentStep("4")
        }
        if (dot1 && dot2 && dot3 && dot4 && !dot5) {
            props.history.push('/steps?steps=1,2,3')
            setDot1(true)
            setDot2(true)
            setDot3(true)
            setDot4(false)
            setDot5(false)
            setLine1(true)
            setLine2(true)
            setLine3(false)
            setLine4(false)
            setCurrentStep("3")
        }
        // if (dot1 && dot2 && dot3 && !dot4 && !dot5) {
        //     props.history.push('/steps?steps=1,2')
        //     setDot1(true)
        //     setDot2(true)
        //     setDot3(false)
        //     setDot4(false)
        //     setDot5(false)
        //     setLine1(true)
        //     setLine2(false)
        //     setLine3(false)
        //     setLine4(false)
        //     setCurrentStep("2")
        // }
        // if (dot1 && dot2 && !dot3 && !dot4 && !dot5) {
        //     props.history.push('/steps?steps=1')
        //     setDot1(true)
        //     setDot2(false)
        //     setDot3(false)
        //     setDot4(false)
        //     setDot5(false)
        //     setLine1(false)
        //     setLine2(false)
        //     setLine3(false)
        //     setLine4(false)
        //     setCurrentStep("1")
        // }
    }

    return (
        <div className="stepperDivMain">
            <div className="container stepperDivMainContainer">
                <div className="steppers">
                    <div className={`dot ${dot1 ? "active" : ""}`}></div>
                    <div className={`line line1 ${line1 ? "active" : ""}`}>
                        <div className={`backface ${line1 ? "active" : ""}`}></div>
                    </div>
                    <div className={`dot ${dot2 ? "active" : ""}`}></div>
                    <div className={`line line2 ${line2 ? "active" : ""}`}>
                        <div className={`backface ${line2 ? "active" : ""}`}></div>
                    </div>
                    <div className={`dot ${dot3 ? "active" : ""}`}></div>
                    <div className={`line line3 ${line3 ? "active" : ""}`}>
                        <div className={`backface ${line3 ? "active" : ""}`}></div>
                    </div>
                    <div className={`dot ${dot4 ? "active" : ""}`}></div>
                    {/* <div className={`line line4 ${line4 ? "active" : ""}`}>
                        <div className={`backface ${line4 ? "active" : ""}`}></div>
                    </div>
                    <div className={`dot ${dot5 ? "active" : ""}`}></div> */}
                </div>
                <div className="steppersHead">
                    <span className={`head1 ${dot1 ? "active" : ""}`}>Service & Date</span>
                    <span className={`head2 ${dot2 ? "active" : ""}`}>Select Time Slot</span>
                    <span className={`head3 ${dot3 ? "active" : ""}`}>Your details</span>
                    {/* <span className={`head4 ${dot4 ? "active" : ""}`}>payment</span> */}
                    <span className={`head4 ${dot4 ? "active" : ""}`}>confirmation</span>
                    {/* <span className={`head5 ${dot5 ? "active" : ""}`}>confirmation</span> */}
                </div>
            </div>
            <div className="container stepContentDiv">
                {currentStep === "1" ?
                    <FirstStep />
                    :
                    currentStep === "2" ?
                        <SecondStep />
                        :
                        currentStep === "3" ?
                            <ThirdStep loadUser={loadUser} changeHandler={changeHandler} User={User}
                                setUser={setUser} setotpVerify={setotpVerify}  next={next}
                            />
                            :
                            currentStep === "4" ?
                                 <FifthStep loading={loading} setloading={setloading}  User={User} />
                                :
                                currentStep === "5" ?
                                    <FourthStep />
                                    :
                                    null
                }
            </div>
            {/* {dot5 ? */}
            {dot4 ?
                !loading&&<div className="container buttonDiv">
                    <button className="next last" onClick={() => props.history.push("/")}>Go To Home Page</button>
                </div>
                :
                <div className="container buttonDiv">
                    {dot2 ?
                        <button className="cancel" onClick={() => back()}>Back</button>
                        :
                        <button className="cancel">Cancel</button>
                    }
                    {currentStep === "3" ?
                        (User.fullname &&
                            User.email &&
                            User.phone_number &&
                            User.address && optVerify) ?
                            <button className="next" onClick={() => {
                                next()
                                setloading(true)
                            }} disabled={false}>Next Step</button>
                            :
                            <button className="next" onClick={() => next()} disabled={true}>Next Step</button>
                        :
                        <button className="next" onClick={() => next()}>Next Step</button>
                    }
                </div>
            }
        </div>
    )
}

const mapStateToProps = ({ vet, scheduler }) => ({
    vet, scheduler
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
)(StepsMain)