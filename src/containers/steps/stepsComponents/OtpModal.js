import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { recieveOtp, resendOtp } from '../../../modules/actions'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
function OtpModal({ isModalVisible,
    handleOk,
    handleCancel,
    history, setotpVerify, user, recieveOtp, num, resendOtp,next, ...props }) {
    useEffect(() => {
        // document.querySelector('.digit-group').querySelector('input').each(function () {
        //     document.querySelector(this).attr('maxlength', 1);
        //     document.querySelector(this).addEventListener('keyup', function (e) {
        //         var parent = document.querySelector(document.querySelector(this).parent());

        //         if (e.keyCode === 8 || e.keyCode === 37) {
        //             var prev = parent.querySelector('input#' + document.querySelector(this).data('previous'));

        //             if (prev.length) {
        //                 document.querySelector(prev).select();
        //             }
        //         } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
        //             var next = parent.querySelector('input#' + document.querySelector(this).data('next'));

        //             if (next.length) {
        //                 document.querySelector(next).select();
        //             } else {
        //                 if (parent.data('autosubmit')) {
        //                     parent.submit();
        //                 }
        //             }
        //         }
        //     });
        // });
    }, [document])

    const [otpVerify, setotpVerifyCode] = useState()



    const resend = () => {
        const obj = { "phone_number": num.phone_number }

        resendOtp(obj, handleCancel)

    }

    const verify = () => {
        const obj = { "phone_number": num.phone_number, "otp": otpVerify }
        // console.log(obj)
        recieveOtp(obj, setotpVerify, handleCancel, next)

    };

    return (
        <Modal className="OptModal" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closable={false}>
            <div id="wrapper">
                <div id="dialog">
                    <button class="close" onClick={() => handleCancel()}>×</button>
                    {/* <h3>Please enter the 4-digit verification code we have sent on {user.phone_number} via SMS:</h3> */}
                    <h3>Veuillez saisir les 4 chiffres que vous venez de recevoir {user.phone_number} par SMS:</h3>
                    {/* <span >(we want to make sure it's you before we contact our movers)</span> */}
                    <span >(Nous souhaitons authentifier votre réservation)</span>
                    <div id="form">
                        <input type="text" maxLength="4" size="4" min="0" onChange={e => setotpVerifyCode(e.target.value)} max="9" pattern="[0-9]{1}" />

                        {/* <button class="btn btn-primary btn-embossed" onClick={() => { verify() }} disabled={props.otploading}>{props.otploading ? <div className="loaderSec">
                            <div class="loader"></div>

                        </div> : `Verify`}</button> */}
                        <button class="btn btn-primary btn-embossed" onClick={() => { verify() }} disabled={props.otploading}>{props.otploading ? <div className="loaderSec">
                            <div class="loader"></div>

                        </div> : `Vérifier`}</button>
                    </div>

                    <div className="opt">
                        {/* Didn't receive the code?<br /> */}
                        Code non reçu ?<br />
                        {/* <p onClick={() => resend()} >{props.resendloading ? <div className="loaderSec">
                            <div class="loader"></div>

                        </div> : `Send code again`}</p> */}
                        <p onClick={() => resend()} >{props.resendloading ? <div className="loaderSec">
                            <div class="loader"></div>

                        </div> : `Demandez-en un nouveau`}</p>
                        {/* <p onClick={() => handleCancel()}>Change phone number</p> */}
                        <p onClick={() => handleCancel()}>Changez le numéro de téléphone</p>
                    </div>
                    <img src="http://jira.moovooz.com/secure/attachment/10424/VmVyaWZpY2F0aW9uLnN2Zw==" alt="test" />
                </div>
            </div>
        </Modal>
    )
}
const mapStateToProps = ({ recieveOtp, resendOtp, store }) => ({
    verify: recieveOtp,
    resend: resendOtp,
    otploading: store.otploading,
    resendloading: store.resendloading
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            recieveOtp, resendOtp
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OtpModal)

