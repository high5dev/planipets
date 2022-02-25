import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { fetchCategories, getCategoriesWithServices } from '../../../modules/actions'

// 


function FirstStep(props) {

    // State and props;
    const [category] = useState()

    // States from the store;

    // dipatcher
    // Load categories on page load
    useEffect(() => {
        let mounted = true
        props.fetchCategories()
        props.getCategoriesWithServices()        
        return () => {
            mounted = false
        }
    }, [])
    

    function changeHandler (event) {
        console.log("change handler")
    }

    // Click handlers;

    return (
        <div className="firstStepMain">
            <div className="formDiv">
                <div className="inputDiv">
                    <label>Category</label>
                    <select onChange={changeHandler} value={category}>
                    {
                        props.store.categories.map((cat, i) => <option key={i} value={cat.id}>{ cat.name }</option>)
                    }
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.619" height="22.619" viewBox="0 0 22.619 22.619">
                        <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.684A11.309,11.309,0,1,0,14.684,3.375,11.308,11.308,0,0,0,3.375,14.684Zm15.719-2.36a1.053,1.053,0,0,1,1.484,0,1.037,1.037,0,0,1,.3.739,1.055,1.055,0,0,1-.31.745L15.446,18.92A1.048,1.048,0,0,1,14,18.887L8.8,13.7a1.05,1.05,0,1,1,1.484-1.484l4.41,4.453Z" transform="translate(-3.375 -3.375)" fill="#acacac" />
                    </svg>
                </div>
                <div className="inputDiv">
                    <label>Services</label>
                    <select>
                        <option>Online Business Consultation | $25</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.619" height="22.619" viewBox="0 0 22.619 22.619">
                        <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.684A11.309,11.309,0,1,0,14.684,3.375,11.308,11.308,0,0,0,3.375,14.684Zm15.719-2.36a1.053,1.053,0,0,1,1.484,0,1.037,1.037,0,0,1,.3.739,1.055,1.055,0,0,1-.31.745L15.446,18.92A1.048,1.048,0,0,1,14,18.887L8.8,13.7a1.05,1.05,0,1,1,1.484-1.484l4.41,4.453Z" transform="translate(-3.375 -3.375)" fill="#acacac" />
                    </svg>
                </div>
                <div className="inputDiv">
                    <label>Staff Member</label>
                    <select>
                        <option>please select a staff member</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.619" height="22.619" viewBox="0 0 22.619 22.619">
                        <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,14.684A11.309,11.309,0,1,0,14.684,3.375,11.308,11.308,0,0,0,3.375,14.684Zm15.719-2.36a1.053,1.053,0,0,1,1.484,0,1.037,1.037,0,0,1,.3.739,1.055,1.055,0,0,1-.31.745L15.446,18.92A1.048,1.048,0,0,1,14,18.887L8.8,13.7a1.05,1.05,0,1,1,1.484-1.484l4.41,4.453Z" transform="translate(-3.375 -3.375)" fill="#acacac" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ store, scheduler }) => ({
    store, scheduler
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchCategories, getCategoriesWithServices
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstStep)