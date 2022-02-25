import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function CopyComponent() {
    return (
        <div>

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
)(CopyComponent)