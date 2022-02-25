import { Radio } from 'antd';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import visa from '../../../Images/steps/visa.png'
import paypalImage from '../../../Images/steps/paypal.png'
import { setPaymentMode } from '../../../modules/actions';

function FourthStep(props) {

    const [value, setValue] = React.useState({
        id: 3,
        payment_mode: 'cash'
    });

    const onChange = e => {
        switch (e.target.value) {
            case 1:
                setValue({
                    id: 1,
                    payment_mode: 'visa'
                })
                break;

            case 2:
                setValue({
                    id: 2,
                    payment_mode: 'paypal'
                })
                break;

            case 3:
                setValue({
                    id: 3,
                    payment_mode: 'cash'
                })
                break;
            default:
                break;
        }
        // setValue(e.target.value);
    };
    useEffect(() => {
        if (value.id) {
            props.setPaymentMode(value)
        }
    }, [])

    // Check disabled payment type
    const { stripe, cash, paypal } = props.scheduler.service

    return (
        <div className="fouthStepMain">
            <div className="formDiv">
                <h5>Choose the payment method you prefer</h5>
                <div className="radioDiv">
                    <Radio.Group onChange={onChange} value={value.id}>
                        <Radio value={1} disabled={stripe ? false : true}><img src={visa} /></Radio>
                        <Radio value={2} disabled={paypal ? false : true}><img src={paypalImage} /></Radio>
                        <Radio value={3} disabled={cash ? false : true}>I pay on the spot</Radio>
                    </Radio.Group>
                </div>
                {value.id === 1 && <>

                    <div className="inputDiv">
                        <label>Card Number</label>
                        <input placeholder="Enter card number here...." />
                    </div>
                    <div className="inputDiv sixty">
                        <label>Expiration Date</label>
                        <input placeholder="18/20" />
                    </div>
                    <div className="inputDiv fourty">
                        <label>CVV</label>
                        <input placeholder="***" />
                    </div>
                    <div className="inputDiv">
                        <label>Card Holders Name</label>
                        <input placeholder="Enter card holder name here...." />
                    </div>
                </>}
            </div>
        </div>
    )
}

const mapStateToProps = ({ scheduler }) => ({
    scheduler
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setPaymentMode
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FourthStep)