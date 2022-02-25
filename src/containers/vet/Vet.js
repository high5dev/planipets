import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import './vet.scss'
import IMG from '../../Images/vet/vetImage.png'
// load actions;
import { loadShopDetails } from '../../modules/actions';
import Loader from '../../layout/Loader/Loader';

function Vet(props) {


    useEffect(() => {
        let mounted = true;
        props.loadShopDetails(props.match.params.id);
        return () => {
            mounted = false
        }
    }, [props.match.params])

    let { name, user, pricings, testimonials, location } = props.vet.vet_details;

    return (
        <div className="vetDivMain">
            {
                !props.vet.vet_details ? <Loader />:""
            }
            <div className="sectionOne"></div>

            <div className="sectionTwo">
                <div className="container">
                    <div className="imageDiv" style={{ backgroundImage: `url('https://localhost:8000/images/${ user && user.picture}')` }}></div>
                    {/* <div className="imageDiv" style={{ backgroundImage: `url(${IMG})` }}></div> */}
                    <div className="contentDiv">
                        <h2>{ name } <span>a partir de ${ pricings && pricings[0] && pricings[0].value}</span></h2>
                        <div className="starDiv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.52" height="21.554" viewBox="0 0 22.52 21.554">
                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M11.493.749,8.744,6.322l-6.15.9a1.348,1.348,0,0,0-.745,2.3L6.3,13.852,5.247,19.977A1.346,1.346,0,0,0,7.2,21.4L12.7,18.5,18.2,21.4a1.347,1.347,0,0,0,1.953-1.419L19.1,13.852l4.449-4.336a1.348,1.348,0,0,0-.745-2.3l-6.15-.9L13.909.749a1.348,1.348,0,0,0-2.416,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.52" height="21.554" viewBox="0 0 22.52 21.554">
                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M11.493.749,8.744,6.322l-6.15.9a1.348,1.348,0,0,0-.745,2.3L6.3,13.852,5.247,19.977A1.346,1.346,0,0,0,7.2,21.4L12.7,18.5,18.2,21.4a1.347,1.347,0,0,0,1.953-1.419L19.1,13.852l4.449-4.336a1.348,1.348,0,0,0-.745-2.3l-6.15-.9L13.909.749a1.348,1.348,0,0,0-2.416,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.52" height="21.554" viewBox="0 0 22.52 21.554">
                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M11.493.749,8.744,6.322l-6.15.9a1.348,1.348,0,0,0-.745,2.3L6.3,13.852,5.247,19.977A1.346,1.346,0,0,0,7.2,21.4L12.7,18.5,18.2,21.4a1.347,1.347,0,0,0,1.953-1.419L19.1,13.852l4.449-4.336a1.348,1.348,0,0,0-.745-2.3l-6.15-.9L13.909.749a1.348,1.348,0,0,0-2.416,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.52" height="21.554" viewBox="0 0 22.52 21.554">
                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M11.493.749,8.744,6.322l-6.15.9a1.348,1.348,0,0,0-.745,2.3L6.3,13.852,5.247,19.977A1.346,1.346,0,0,0,7.2,21.4L12.7,18.5,18.2,21.4a1.347,1.347,0,0,0,1.953-1.419L19.1,13.852l4.449-4.336a1.348,1.348,0,0,0-.745-2.3l-6.15-.9L13.909.749a1.348,1.348,0,0,0-2.416,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                            </svg>
                        </div>
                        <div className="listDiv">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.514" height="17.877" viewBox="0 0 12.514 17.877">
                                    <path id="Icon_material-edit-location" data-name="Icon material-edit-location" d="M13.757,3A6.264,6.264,0,0,0,7.5,9.257c0,4.693,6.257,11.62,6.257,11.62s6.257-6.927,6.257-11.62A6.264,6.264,0,0,0,13.757,3Zm-1.394,8.939H11.075V10.651L14.07,7.666l1.278,1.278ZM16.34,7.961l-.626.626L14.427,7.3l.626-.626a.34.34,0,0,1,.483,0l.8.8a.34.34,0,0,1,0,.483Z" transform="translate(-7.5 -3)" fill="#606060" />
                                </svg>
                                { props.vet.vet_details && location }
                            </p>
                            {/* <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.514" height="17.877" viewBox="0 0 12.514 17.877">
                                    <path id="Icon_material-edit-location" data-name="Icon material-edit-location" d="M13.757,3A6.264,6.264,0,0,0,7.5,9.257c0,4.693,6.257,11.62,6.257,11.62s6.257-6.927,6.257-11.62A6.264,6.264,0,0,0,13.757,3Zm-1.394,8.939H11.075V10.651L14.07,7.666l1.278,1.278ZM16.34,7.961l-.626.626L14.427,7.3l.626-.626a.34.34,0,0,1,.483,0l.8.8a.34.34,0,0,1,0,.483Z" transform="translate(-7.5 -3)" fill="#606060" />
                                </svg>
                                4 Rue du puits Descazeaux, 33000 Bordeas
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="sectionThree">
                <div className="container">
                    <div className="contentDiv">
                        <div className="overViewDiv">
                            <h1>Overview</h1>
                            <p>{ user && user.description }</p>
                            {/* <p>
                            ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                            </p> */}
                        </div>
                        <div className="reviewDiv">
                            <h1>Reviews</h1>
                            {
                                testimonials &&
                                testimonials.map((testimonial, i) => {
                                return (
                                    <div className="review" key={i}>
                                        <div className="imageDiv text-bold" style={{ backgroundImage: `url('${testimonial}')` }}>{ testimonial.title }</div>
                                        <div className="contentDiv">
                                            <p>{ testimonial.description }</p>
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15.622" height="14.952" viewBox="0 0 15.622 14.952">
                                                    <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.414.519,6.508,4.385l-4.266.622A.935.935,0,0,0,1.725,6.6L4.811,9.609l-.73,4.249a.934.934,0,0,0,1.355.984l3.816-2.006,3.816,2.006a.935.935,0,0,0,1.355-.984l-.73-4.249L16.78,6.6a.935.935,0,0,0-.517-1.594L12,4.385,10.09.519a.935.935,0,0,0-1.676,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15.622" height="14.952" viewBox="0 0 15.622 14.952">
                                                    <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.414.519,6.508,4.385l-4.266.622A.935.935,0,0,0,1.725,6.6L4.811,9.609l-.73,4.249a.934.934,0,0,0,1.355.984l3.816-2.006,3.816,2.006a.935.935,0,0,0,1.355-.984l-.73-4.249L16.78,6.6a.935.935,0,0,0-.517-1.594L12,4.385,10.09.519a.935.935,0,0,0-1.676,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15.622" height="14.952" viewBox="0 0 15.622 14.952">
                                                    <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.414.519,6.508,4.385l-4.266.622A.935.935,0,0,0,1.725,6.6L4.811,9.609l-.73,4.249a.934.934,0,0,0,1.355.984l3.816-2.006,3.816,2.006a.935.935,0,0,0,1.355-.984l-.73-4.249L16.78,6.6a.935.935,0,0,0-.517-1.594L12,4.385,10.09.519a.935.935,0,0,0-1.676,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15.622" height="14.952" viewBox="0 0 15.622 14.952">
                                                    <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.414.519,6.508,4.385l-4.266.622A.935.935,0,0,0,1.725,6.6L4.811,9.609l-.73,4.249a.934.934,0,0,0,1.355.984l3.816-2.006,3.816,2.006a.935.935,0,0,0,1.355-.984l-.73-4.249L16.78,6.6a.935.935,0,0,0-.517-1.594L12,4.385,10.09.519a.935.935,0,0,0-1.676,0Z" transform="translate(-1.441 0.001)" fill="#ffcd06" />
                                                </svg>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="filterDiv">
 
                        <div className="one">
                            <Link to="/vet-listings">
                                <h2 data-aos="zoom-in" >Make an appointment</h2>
                            </Link>
                            {/* <div className="selectDiv">
                                <svg className="suff" xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30">
                                    <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7.5 -3)" fill="#646464" />
                                </svg>
                                <select>
                                    <option>Chosdfasd un cabinet</option>
                                    <option>Lorem Ipsum</option>
                                    <option>Lorem Ipsum</option>
                                </select>
                                <svg className="pref" xmlns="http://www.w3.org/2000/svg" width="15.46" height="8.839" viewBox="0 0 15.46 8.839">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M13.92,17.421l5.846-5.85a1.1,1.1,0,0,1,1.56,0,1.114,1.114,0,0,1,0,1.565L14.7,19.764a1.1,1.1,0,0,1-1.524.032L6.51,13.141a1.1,1.1,0,0,1,1.56-1.565Z" transform="translate(-6.188 -11.246)" fill="#646464" />
                                </svg>
                            </div> */}
                        </div>

                        {/* <div className="two">
                            <h2>4 Rue Du puits Descazeaux, 33000 Brod</h2>
                            <div className="selectDiv">
                                <svg className="suff" xmlns="http://www.w3.org/2000/svg" width="26.173" height="22.902" viewBox="0 0 26.173 22.902">
                                    <path id="Icon_awesome-heartbeat" data-name="Icon awesome-heartbeat" d="M16.367,13.076l-2.541,5.081a.817.817,0,0,1-1.477-.031L9.441,11.67,7.907,15.335H3.1l9.329,9.533a.911.911,0,0,0,1.314,0l9.334-9.533H17.5Zm7.846-8.685-.123-.128a6.7,6.7,0,0,0-9.579,0L13.086,5.725,11.659,4.268a6.687,6.687,0,0,0-9.579,0l-.123.123A7.019,7.019,0,0,0,1.584,13.7H6.819L8.654,9.293a.819.819,0,0,1,1.5-.02l2.975,6.609,2.5-5a.817.817,0,0,1,1.462,0L18.509,13.7h6.078a7.019,7.019,0,0,0-.373-9.308Z" transform="translate(0.001 -2.246)" fill="#646464" />
                                </svg>
                                <select>
                                    <option>Choisissez une consultation</option>
                                    <option>Lorem Ipsum</option>
                                    <option>Lorem Ipsum</option>
                                </select>
                                <svg className="pref" xmlns="http://www.w3.org/2000/svg" width="15.46" height="8.839" viewBox="0 0 15.46 8.839">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M13.92,17.421l5.846-5.85a1.1,1.1,0,0,1,1.56,0,1.114,1.114,0,0,1,0,1.565L14.7,19.764a1.1,1.1,0,0,1-1.524.032L6.51,13.141a1.1,1.1,0,0,1,1.56-1.565Z" transform="translate(-6.188 -11.246)" fill="#646464" />
                                </svg>
                            </div>
                        </div>

                        <div className="three">
                            <h2>Premiere consultation</h2>
                            <div className="tableDiv">
                                <p>
                                    $70
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                            <g id="Icon_feather-clock" data-name="Icon feather-clock" transform="translate(-2 -2)">
                                                <path id="Path_48" data-name="Path 48" d="M23,13A10,10,0,1,1,13,3,10,10,0,0,1,23,13Z" fill="none" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                <path id="Path_49" data-name="Path 49" d="M18,9v6l4,2" transform="translate(-5 -2)" fill="none" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            </g>
                                        </svg>
                                        105min
                                    </span>
                                </p>
                                <div className="tableHeading">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="23.5" viewBox="0 0 23.5 23.5">
                                        <g id="Icon_feather-clock" data-name="Icon feather-clock" transform="translate(-1.25 -1.25)">
                                            <path id="Path_48" data-name="Path 48" d="M23,13A10,10,0,1,1,13,3,10,10,0,0,1,23,13Z" fill="none" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                                            <path id="Path_49" data-name="Path 49" d="M18,9v6l4,2" transform="translate(-5 -2)" fill="none" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                                        </g>
                                    </svg>
                                    Choisissez une consultation
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>22 June</th>
                                            <th>15 Aug</th>
                                            <th>19 Oct</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div></div>
                                            </td>
                                            <td>
                                                <div>17:00</div>
                                            </td>
                                            <td>
                                                <div>15:15</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div></div>
                                            </td>
                                            <td>
                                                <div></div>
                                            </td>
                                            <td>
                                                <div></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ vet }) => ({
    vet
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            loadShopDetails
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vet)