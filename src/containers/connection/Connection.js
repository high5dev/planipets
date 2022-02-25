import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import flag from '../../Images/connection/flag.png'

import iconOne from '../../Images/connection/iconOne.png'
import iconTwo from '../../Images/connection/iconTwo.png'
import iconThree from '../../Images/connection/iconThree.png'
import iconFour from '../../Images/connection/iconFour.png'

import first from '../../Images/connection/first.png'
import second from '../../Images/connection/second.png'
import third from '../../Images/connection/third.png'
import fourth from '../../Images/connection/fourth.png'

import thankyou from '../../Images/connection/thankyou.png'

import AOS from "aos";

import "aos/dist/aos.css";
import './connection.scss'
import Modal from 'antd/lib/modal/Modal';
import { registerUser } from '../../modules/actions';

function Connection(props) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            document.getElementById("formDiv").style.boxShadow = "2px 2px 17px 7px #000000"
            document.getElementById("firstName").focus()
        }, 500)
    }

    // form_data
    const [User, setUser] = useState({
        first_name:'',
        last_name:'',
        password:'',
        phone_number:'',
        email: '',
        postal_code: '',
        address:'',
        name:''
    })

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleChange = (event) => {
        setUser({
            ...User,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = () => {
        props.registerUser(User, props.history)
    }

    return (
        <div className="connectionMain">
            <div className="firstSection">
                <div className="container firstSectionContainer">
                    <div className="textDiv">
                        <h2>Connectez-vous a <br />vos clients!</h2>
                        <p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ display: "flex" }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="white" />
                                                <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="white" />
                                                <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="white" />
                                                <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="white" />
                                                <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="white" />
                                            </svg>
                                        </td>
                                        <td>
                                            2 proprietaires sur 3 souhaitent pouvair prendre RDV en ligne
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                        <p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ display: "flex" }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="white" />
                                                <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="white" />
                                                <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="white" />
                                                <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="white" />
                                                <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="white" />
                                            </svg>
                                        </td>
                                        <td>
                                            40% des RDV veteromaores pris hors ouvertures
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                        <p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ display: "flex" }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="white" />
                                                <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="white" />
                                                <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="white" />
                                                <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="white" />
                                                <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="white" />
                                            </svg>
                                        </td>
                                        <td>
                                            80% de reduction des RDV non honores
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div>
                    <div id="formDiv" className="formDiv">
                        <h2>Inscrivez-vous en <br />2 minutes seulement !</h2>
                        <div className="inputDiv">
                            <div className="inpFlexDiv">
                                <input id="firstName" className="fiftyPercent" type="text" placeholder="First Name" onChange={handleChange} name="first_name" value={User.first_name} />
                                <input className="fiftyPercent" type="text" placeholder="Last Name" onChange={handleChange} name="last_name" value={User.last_name} />
                            </div>
                            <div className="inpFlexDiv">
                                <input id="name" className="hundredPercent" type="text" placeholder="User Name" onChange={handleChange} name="name" value={User.name} />
                            </div>
                            <div className="inpFlexDiv">
                                <input className="hundredPercent" type="email" placeholder="Email Address" onChange={handleChange} name="email" value={User.email} />
                            </div>
                            <div className="inpFlexDiv">
                                <div className="phoneCode"><img src={flag} /> +33</div>
                                <input className="sixtyPercent" type="text" placeholder="Phone Number" onChange={handleChange} name="phone_number" value={User.phone_number} />
                                <input className="thirtyPercent" type="text" placeholder="Postal Code" onChange={handleChange} name="postal_code"  value={User.postal_code}/>
                            </div>
                            <div className="inpFlexDiv">
                                <input className="hundredPercent" type="text" placeholder="Address" onChange={handleChange} name="address" value={User.address} />
                            </div>
                            <div className="inpFlexDiv">
                                <input className="hundredPercent" type="password" placeholder="Password" onChange={handleChange} name="password" value={User.password} />
                            </div>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondSection">
                <div className="container secondSectionContainer">
                    <div className="secondSectionRadius">
                        <div className="innerItem">
                            <img src={iconOne} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className="innerItem">
                            <img src={iconTwo} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className="innerItem">
                            <img src={iconThree} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className="innerItem">
                            <img src={iconFour} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="thirdSection">
                <div className="container thirdSectionContainer">
                    <div className="flexDiv">
                        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="imageDiv">
                            <img src={first} />
                        </div>
                        <div className="textDiv right">
                            <h2>Connectez-vous a vos clients!</h2>
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                2 proprietaires sur 3 souhaitent pouvair prendre RDV en ligne
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                40% des RDV veteromaores pris hors ouvertures
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                80% de reduction des RDV non honores
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        </div>
                    </div>

                    <div className="flexDiv reverse">
                        <div className="textDiv left">
                            <h2>Connectez-vous a vos clients!</h2>
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                2 proprietaires sur 3 souhaitent pouvair prendre RDV en ligne
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                40% des RDV veteromaores pris hors ouvertures
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                80% de reduction des RDV non honores
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        </div>
                        <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="imageDiv">
                            <img src={second} />
                        </div>
                    </div>

                    <div className="flexDiv">
                        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="imageDiv">
                            <img src={third} />
                        </div>
                        <div className="textDiv right">
                            <h2>Connectez-vous a vos clients!</h2>
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                2 proprietaires sur 3 souhaitent pouvair prendre RDV en ligne
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                40% des RDV veteromaores pris hors ouvertures
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                80% de reduction des RDV non honores
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        </div>
                    </div>

                    <div className="flexDiv reverse">
                        <div className="textDiv left">
                            <h2>Connectez-vous a vos clients!</h2>
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                2 proprietaires sur 3 souhaitent pouvair prendre RDV en ligne
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                40% des RDV veteromaores pris hors ouvertures
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                </svg>
                                            </td>
                                            <td>
                                                80% de reduction des RDV non honores
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        </div>
                        <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="imageDiv">
                            <img src={fourth} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container redirectionButtonDiv">
                <button onClick={scrollToTop}>Yes i register</button>
            </div>

            <Modal width={
                "80%"
            } title={null} visible={isModalVisible} onOk={null} onCancel={handleCancel} footer={null} zIndex="100000000" closeIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="39" viewBox="0 0 21 39">
                    <text id="X" transform="translate(0 29)" fill="#fff" font-size="28" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">X</tspan></text>
                </svg>
            } >
                <div className="modelContent">
                    <img src={thankyou} />
                    <p>
                        Thank you. We will get in touch with you <br />
                        under 48h to implement Planipets for you.
                    </p>
                    <button onClick={handleCancel}>Explore more</button>
                </div>
            </Modal>
        </div >
    )
}

const mapStateToProps = ({ store }) => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            registerUser
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Connection)