import React, {useState, useEffect, useRef} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginPageImage from '../../Images/loginPage/loginPageImage.png'
import logo from '../../Images/home/logo.png'

import "./login.scss";
import { Checkbox } from "antd";
import { NavLink } from "react-router-dom";

// actions;
import { loginUser } from "../../modules/actions";


const LoginPage = (props) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        hasErrors: false,
        errors: []
    })
    const prevErrors = useRef({ errors: props.auth.errors }).current

    useEffect(() => {
        let mounted = true

        if (props.auth.errors !== prevErrors.errors) {
            setError({
                hasErrors: true,
                errors: {
                    error: "Something went wrong, please enter correct credentials",
                    payload: props.auth.errors
                }
            })
        }

        return () => {
            mounted = false
        }
    }, [props.auth])

    // Dispatch Login
    function changeHandler (event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="loginPageMain">
            <div className="imageDivMain">
                <div className="imageDiv" style={{ backgroundImage: `url('${loginPageImage}')` }}></div>
                <div className="overlay"></div>
            </div>
            <div className="formDiv">
                <img src={logo} alt="PP"/>

                <div className="inputGroup">
                    {/* Error message */}

                    {
                        error.hasErrors && <div className="alert alert-danger">
                            {error.errors.error}
                        </div>
                    }

                    <div className="inputDiv">
                        <input placeholder="Email" name="email" type="email" onChange={changeHandler} />
                    </div>
                    <div className="inputDiv">
                        <input placeholder="Password" name="password" type="password" onChange={changeHandler} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20">
                            <path id="Icon_awesome-eye-slash" data-name="Icon awesome-eye-slash" d="M12.5,15.625a5.6,5.6,0,0,1-5.582-5.2L2.82,7.258A13.019,13.019,0,0,0,1.386,9.43a1.264,1.264,0,0,0,0,1.14A12.529,12.529,0,0,0,12.5,17.5a12.133,12.133,0,0,0,3.043-.409l-2.027-1.568a5.63,5.63,0,0,1-1.016.1Zm12.258,2.269L20.44,14.557a12.939,12.939,0,0,0,3.174-3.987,1.264,1.264,0,0,0,0-1.14A12.529,12.529,0,0,0,12.5,2.5,12.037,12.037,0,0,0,6.745,3.972L1.776.132A.625.625,0,0,0,.9.241l-.767.987a.625.625,0,0,0,.11.877L23.224,19.868a.625.625,0,0,0,.877-.11l.767-.987a.625.625,0,0,0-.11-.877Zm-7.176-5.547-1.535-1.187A3.7,3.7,0,0,0,11.511,6.4a1.861,1.861,0,0,1,.364,1.1,1.822,1.822,0,0,1-.06.391L8.939,5.668A5.559,5.559,0,0,1,12.5,4.375,5.622,5.622,0,0,1,18.125,10a5.491,5.491,0,0,1-.543,2.348Z" transform="translate(0 0)" fill="#cbcbcb" />
                        </svg>
                    </div>
                    <Checkbox className="checkboxRemeber">Remember Me</Checkbox>
                    <button onClick={() => props.loginUser(user, props.history)}>LOGIN</button>
                    <span className="forgotPassword"><NavLink to='/forgot-password'>Forgot Password?</NavLink></span>
                    <span className="orLoginWith">OR LOGIN WITH</span>
                    <div className="socialIconDiv">
                        <span className="eclipse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="57.427" height="35.892" viewBox="0 0 57.427 35.892">
                                <path id="Icon_awesome-google-plus-g" data-name="Icon awesome-google-plus-g" d="M35.788,19.875a15.223,15.223,0,0,1,.294,2.987c0,10.259-6.88,17.53-17.236,17.53a17.946,17.946,0,0,1,0-35.892A17.142,17.142,0,0,1,30.867,9.2L26,13.877a10.076,10.076,0,0,0-7.149-2.767,11.338,11.338,0,0,0,0,22.671c7.1,0,9.769-5.117,10.185-7.737H18.846v-6.17H35.788Zm17.33.6V15.268H47.884v5.209H42.674v5.234h5.209v5.209h5.234V25.711h5.209V20.477H53.118Z" transform="translate(-0.9 -4.5)" fill="#26914a" />
                            </svg>
                        </span>

						<span className="eclipse">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45.333"
								height="36.819"
								viewBox="0 0 45.333 36.819"
							>
								<path
									id="Icon_awesome-twitter"
									data-name="Icon awesome-twitter"
									d="M40.674,12.557c.029.4.029.805.029,1.208C40.7,26.047,31.354,40.2,14.267,40.2A26.256,26.256,0,0,1,0,36.029a19.22,19.22,0,0,0,2.244.115,18.607,18.607,0,0,0,11.535-3.97,9.307,9.307,0,0,1-8.687-6.443,11.717,11.717,0,0,0,1.755.144,9.827,9.827,0,0,0,2.445-.316,9.292,9.292,0,0,1-7.45-9.119v-.115a9.357,9.357,0,0,0,4.2,1.179A9.3,9.3,0,0,1,3.164,5.078,26.41,26.41,0,0,0,22.322,14.8a10.488,10.488,0,0,1-.23-2.129,9.3,9.3,0,0,1,16.08-6.357,18.292,18.292,0,0,0,5.9-2.244,9.266,9.266,0,0,1-4.085,5.12,18.626,18.626,0,0,0,5.35-1.438,19.972,19.972,0,0,1-4.66,4.8Z"
									transform="translate(0 -3.381)"
									fill="#26914a"
								/>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = ({ auth }) => ({
    auth
})

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			loginUser
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
