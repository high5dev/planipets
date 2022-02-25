import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import errorImage from '../../Images/404page/errorImage.png'

import './pageNotFound.scss'

function PageNotFound(props) {
    return (
        <div className="container errorPageMain">
            <img src={errorImage} alt="PageNotFound" />
            <h2>Oooops! page not found </h2>
            <button onClick={() => props.history.goBack()}>GO BACK</button>
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
)(PageNotFound)