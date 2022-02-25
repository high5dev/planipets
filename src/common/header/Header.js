import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import Logo from "../../Images/home/logo.png";
import { Drawer, Button } from "antd";

import "./header.scss";

// Logout Actions;
import { logOutUser } from "../../modules/actions";

function Header(props) {
    let [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

    useEffect(() => {
        if (window.location.pathname) {
        // console.log(c.slice(1))
        }
    }, [window.location.pathname])

    return (
        window.location.pathname.slice(1)?<div className={`headerMainDiv`}>
            <div className="container headerContainer">
                <div className="logoDiv">
                    <img src={Logo} />
                    {/* planipets */}
                </div>
                <div className="linksDiv">
                    <div className="links">
                        {[{ name: 'Home', link: "/" }
                        // , { name: 'Download', link: "/download" },
                        // { 
                        //     name: 'Pricing', link: "/pricing" }, { name: 'About Us', link: "/about-us" }
                        ].map((a, i) => {
                            return (
                                <NavLink className="linkItem" key={i} to={a.link}>{a.name}</NavLink>
                            )
                        })}
                    </div>
                    {
                        !props.auth.logged_in && 
                        <div className="buttonLinks">
                            <NavLink to="/login">
                                <button className="firstButt buttPrimary">Login</button>
                            </NavLink>
                            <NavLink to="/connection">
                                <button className="secondButt buttSecondary">connexion</button>
                            </NavLink>
                        </div>
                    }
                    {
                        props.auth.logged_in && 
                        <div className="buttonLinks">
                            <NavLink to="/profile">
                                <button className="firstButt buttPrimary">{ props.auth.user_credentials.name }</button>
                            </NavLink>
                            <button onClick={() => props.logOutUser()} className="secondButt buttSecondary btn-sm">Logout</button>
                        </div>
                    }
                </div>
                <div className="MenuIconDiv">
                    <svg onClick={showDrawer} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.375 26.25H30.625V23.3333H4.375V26.25ZM4.375 18.9583H30.625V16.0417H4.375V18.9583ZM4.375 8.75V11.6667H30.625V8.75H4.375Z" fill="black" />
                    </svg>
                </div>
            </div>
            <Drawer
                title={
                    <>
                        <img src={Logo} />
                        <svg onClick={onClose} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.75 8.01253L21.9875 6.25003L15 13.2375L8.0125 6.25003L6.25 8.01253L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.01253Z" fill="white" />
                        </svg>
                    </>
                }
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                style={{ zIndex: 999999 }}
            >
                {[{ name: 'Home', link: "/home" }, { name: 'Download', link: "/download" },
                { name: 'Pricing', link: "/pricing" }, { name: 'About Us', link: "/about-us" }].map((a, i) => {
                    return (
                        <NavLink key={i} to="#">{a.name}</NavLink>
                    )
                })}
                <div className="buttonLinks">
                    <button className="firstButt buttPrimary">Vous êtes toiletteur</button>
                    <button className="secondButt buttSecondary">connexion</button>
                </div>
            </Drawer>
        </div>:null
    )
}

const mapStateToProps = ({ auth }) => ({
	auth
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			logOutUser
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
