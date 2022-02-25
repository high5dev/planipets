import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import personOne from '../../Images/vetListing/personOne.png'

import './vetListing.scss'
import { fetchVets } from '../../modules/actions';
import { Link } from 'react-router-dom';

function VetListings(props) {

    // get vet listings;
    const [Filter, setFilter] = useState({
        name: '', location:''
    })
    
    useEffect(() => {
        let mounted = true
        getVets();
        return () => {
            mounted = false
        }
    }, [])

    const filterHandler = (event) => {
        setFilter({
            ...Filter,
            [event.target.name]: event.target.value
        })
    }

    const getVets = () => {
        // Prepare search string;
        let searchString = `?name=${Filter.name}&location=${Filter.location}`
        props.fetchVets(searchString)
    }

    return (
        <div className="vetListingPage">
            <div className="listingFilterDiv">
                <div className="container listingFilterDivContainer">
                    <div className="flexDiv">
                        <div className="inputDiv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.406" height="16.41" viewBox="0 0 16.406 16.41">
                                <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.713,19.715,16.151,15.11a6.5,6.5,0,1,0-.987,1L19.7,20.685a.7.7,0,0,0,.991.026A.707.707,0,0,0,20.713,19.715Zm-9.673-3.55a5.134,5.134,0,1,1,3.631-1.5A5.1,5.1,0,0,1,11.041,16.165Z" transform="translate(-4.5 -4.493)" fill="#a4a4a4" />
                            </svg>
                            <input type="text" placeholder="Search" name="name" value={Filter.name} onChange={filterHandler} />
                        </div>

                        <div className="inputDiv filter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.802" height="13.868" viewBox="0 0 19.802 13.868">
                                <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3.5 -8)">
                                    <path id="Path_45" data-name="Path 45" d="M4.5,18H22.3" transform="translate(0 -3.066)" fill="none" stroke="#a4a4a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    <path id="Path_46" data-name="Path 46" d="M4.5,9H22.3" fill="none" stroke="#a4a4a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    <path id="Path_47" data-name="Path 47" d="M4.5,27H22.3" transform="translate(0 -6.132)" fill="none" stroke="#a4a4a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </g>
                            </svg>
                            <input type="text" placeholder="Filter" />
                        </div>

                        <div className="inputDiv location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.285" height="21.835" viewBox="0 0 15.285 21.835">
                                <path id="Icon_material-edit-location" data-name="Icon material-edit-location" d="M15.142,3A7.651,7.651,0,0,0,7.5,10.642c0,5.732,7.642,14.193,7.642,14.193s7.642-8.461,7.642-14.193A7.651,7.651,0,0,0,15.142,3Zm-1.7,10.918H11.867V12.346L15.524,8.7l1.561,1.561ZM18.3,9.059l-.764.764L15.961,8.251l.764-.764a.415.415,0,0,1,.59,0l.983.983a.415.415,0,0,1,0,.59Z" transform="translate(-7.5 -3)" fill="#a4a4a4" />
                            </svg>
                            <input type="text" placeholder="Location" name="location" value={Filter.location} onChange={filterHandler} />
                        </div>
                    </div>
                    <div className="flexDiv filterApply">
                        <button onClick={getVets} >Apply Filters</button>
                    </div>
                </div>
            </div>

            <div className="listingMain container">
                <div className="listings">
                    { props.store.vets && props.store.vets.map((a, i) => {
                        return (
                            <div className="listDiv" key={i}>
                                <div className="imageDiv" style={{ backgroundImage: `url('${personOne}')` }}></div>
                                <div className="contentDiv">
                                    <h3 className="text-capitalize">
                                        <Link to ="vet">{a.name.charAt(0).toUpperCase() + a.name.slice(1)}</Link>
                                        <div className="starDiv">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.602" height="13.019" viewBox="0 0 13.602 13.019">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.513.452,5.853,3.818,2.138,4.36a.814.814,0,0,0-.45,1.388L4.375,8.367l-.636,3.7a.813.813,0,0,0,1.18.857l3.323-1.747,3.323,1.747a.814.814,0,0,0,1.18-.857l-.636-3.7L14.8,5.748a.814.814,0,0,0-.45-1.388l-3.715-.542L8.972.452a.814.814,0,0,0-1.459,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.602" height="13.019" viewBox="0 0 13.602 13.019">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.513.452,5.853,3.818,2.138,4.36a.814.814,0,0,0-.45,1.388L4.375,8.367l-.636,3.7a.813.813,0,0,0,1.18.857l3.323-1.747,3.323,1.747a.814.814,0,0,0,1.18-.857l-.636-3.7L14.8,5.748a.814.814,0,0,0-.45-1.388l-3.715-.542L8.972.452a.814.814,0,0,0-1.459,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.602" height="13.019" viewBox="0 0 13.602 13.019">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.513.452,5.853,3.818,2.138,4.36a.814.814,0,0,0-.45,1.388L4.375,8.367l-.636,3.7a.813.813,0,0,0,1.18.857l3.323-1.747,3.323,1.747a.814.814,0,0,0,1.18-.857l-.636-3.7L14.8,5.748a.814.814,0,0,0-.45-1.388l-3.715-.542L8.972.452a.814.814,0,0,0-1.459,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.602" height="13.019" viewBox="0 0 13.602 13.019">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.513.452,5.853,3.818,2.138,4.36a.814.814,0,0,0-.45,1.388L4.375,8.367l-.636,3.7a.813.813,0,0,0,1.18.857l3.323-1.747,3.323,1.747a.814.814,0,0,0,1.18-.857l-.636-3.7L14.8,5.748a.814.814,0,0,0-.45-1.388l-3.715-.542L8.972.452a.814.814,0,0,0-1.459,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                                            </svg>
                                        </div>
                                    </h3>
                                    <div className="tagDiv">
                                        <div className="tag">Naturopathie</div>
                                        <div className="tag">Phytotherapie</div>
                                        <div className="tag">Aromatherapie</div>
                                    </div>
                                    <div className="insideList">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10.743" height="15.347" viewBox="0 0 10.743 15.347">
                                                <path id="Icon_material-edit-location" data-name="Icon material-edit-location" d="M12.871,3A5.377,5.377,0,0,0,7.5,8.371c0,4.029,5.371,9.975,5.371,9.975s5.371-5.947,5.371-9.975A5.377,5.377,0,0,0,12.871,3Zm-1.2,7.673h-1.1v-1.1L13.14,7.006l1.1,1.1Zm3.415-3.415-.537.537-1.1-1.1.537-.537a.292.292,0,0,1,.414,0l.691.691a.292.292,0,0,1,0,.414Z" transform="translate(-7.5 -3)" fill="#1c9b77" />
                                            </svg>
                                            { a.location }
                                        </p>
                                    </div>
                                    <div className="buttonDiv">
                                        <span>a partir de $50</span>
                                        <button>RDV des Mar 22 juin</button>
                                    </div>
                                    <div className="lastWarnText">poids : La naturepathie au quotidian pour vivre mieux at en bonne sante</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="mapDiv">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9562553499977!2d67.05814321487875!3d24.83116955254639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c47910d7623%3A0xe55d4b1b10cd06fe!2sDefence%20Central%20Library!5e0!3m2!1sen!2s!4v1627463900116!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = ({ store }) => ({
    store
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchVets
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VetListings)