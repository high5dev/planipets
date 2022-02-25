import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logoWhite from '../../Images/home/logoWhite.png'

import './footer.scss'

function Footer() {
    return (
        window.location.pathname.slice(1)?<div className="footerMainDiv">
            <div className="container footerContainer">
                <div className="divOne">
                    <div className="imageDiv">
                        <img src={logoWhite} alt="Footer" /> 
                        {/* planipets */}
                    </div>
                    <button>Pet groomer? Register You!</button>
                </div>
                <div className="divTwo">
                    <div className="linksDiv">
                        <h2>Town </h2>
                        <span>Paris</span>
                        <span>Lyon</span>
                        <span>Marseille</span>
                        <span>Strasbourg</span>
                        <span>Bordeaux</span>
                        <span>Toulouse</span>
                    </div>

                    <div className="linksDiv">
                        <h2>Animals </h2>
                        <span>Cat</span>
                        <span>Dog</span>
                    </div>
                    
                    <div className="linksDiv">
                        <h2>Who </h2>
                        <span>About us</span>
                        <span>Team</span>
                    </div>
                </div>
            </div>
        </div>:null
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
)(Footer)