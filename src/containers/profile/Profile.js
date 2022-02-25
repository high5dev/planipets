import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Carousel } from 'react-responsive-carousel';

import sliderImage from '../../Images/profile/sliderImage.png'

import { Collapse } from 'antd';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './profile.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from 'react';
import Aos from 'aos';
import { fetchServices, getStaff, fetchSchedules, getCategoriesWithServices, loadShopDetails, setScheduler, bookAppointment } from '../../modules/actions';
import Loader from '../../layout/Loader/Loader';
import moment from "moment"

// Actions;


const { Panel } = Collapse;

function Profile(props) {

    let [stepOne, setStepOne] = useState(true)
    let [stepTwo, setStepTwo] = useState(false)
    let [stepThree, setStepThree] = useState(false)
    let [stepFour, setStepFour] = useState(false)
    let [stepFive, setStepFive] = useState(false)

    let [stepOneVal, setStepOneVal] = useState("select")
    let [stepTwoVal, setStepTwoVal] = useState("select")
    let [stepThreeVal, setStepThreeVal] = useState("")
    let [stepFourVal, setStepFourVal] = useState("")

    let [overlayBool, setOverlayBool] = useState(false)

    let [todayDate, setTodayDate] = useState(new Date())
    let [tomorrowDate, setTomorrowDate] = useState(new Date(new Date(todayDate).setDate(todayDate.getDate() + 1)))
    let [tomorrowAfterDate, setTomorrowAfterDate] = useState(new Date(new Date().setDate(new Date().getDate() + 2)))
    let [tomorrowAfterDate2, setTomorrowAfterDate2] = useState(new Date(new Date().setDate(new Date().getDate() + 3)))

    // get props.
    let { name, location, animals, category, gallery, users, user, testimonials, weekdays, pricings } = props.vet.vet_details;

    // SET;GET CATEGORIES:
    const [Calendar, setCalendar] = useState({
        category: '',
        service: '',
        monitor: '',
        schedule: '',
        staff: '',
        meeting_type: ''
    })

    var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "June.", "July.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    let daysInWeek = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];

    let [seeMore, setSeeMore] = useState(false)

    // let dispatch = useDispatch()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const changeDate = (backward) => {
        if (backward) {
            if (todayDate.getTime() > new Date().getTime()) {
                setTodayDate(new Date(new Date(todayDate).setDate(todayDate.getDate() - 4)))
                setTomorrowDate(new Date(new Date(todayDate).setDate(todayDate.getDate() - 3)))
                setTomorrowAfterDate(new Date(new Date(todayDate).setDate(todayDate.getDate() - 2)))
                setTomorrowAfterDate2(new Date(new Date(todayDate).setDate(todayDate.getDate() - 1)))
            } else {
                console.log("helloo")
            }
        } else {
            if (tomorrowAfterDate2.getTime() < new Date(props.store.schedule_dates[props.store.schedule_dates.length - 1].for_date).getTime()) {
                setTodayDate(new Date(new Date(todayDate).setDate(tomorrowAfterDate2.getDate() + 1)))
                setTomorrowDate(new Date(new Date(todayDate).setDate(tomorrowAfterDate2.getDate() + 2)))
                setTomorrowAfterDate(new Date(new Date(todayDate).setDate(tomorrowAfterDate2.getDate() + 3)))
                setTomorrowAfterDate2(new Date(new Date(todayDate).setDate(tomorrowAfterDate2.getDate() + 4)))
            } else {
                console.log("helloo")
            }
        }
    }

    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        });

        props.getCategoriesWithServices()
        if (props.match.params.id) {
            props.loadShopDetails(props.match.params.id)
        }
    }, [])

    // Wait for setState to be loaded and the proceed to dispatch
    useEffect(() => {
        let mounted = false;

        if (Calendar.schedule !== '') {

            props.setScheduler(Calendar)
            props.history.push("/steps?steps=1,2,3")
        }

        return function () {
            return mounted = true;
        }
    }, [Calendar])


    useEffect(() => {
        props.bookAppointment(props.match.params.id)
    }, [props.match.params.id])
    useEffect(() => {
        console.log(props.book, "====>")
    }, [props.book])

    const [service, setServices] = useState([])

    function loadServices(event) {
        let categoryId = category[event.target.selectedIndex - 1];
        console.log(categoryId)
        setCalendar({
            ...Calendar,
            category: categoryId
        })
        setServices(props.book.filter((a, i) => a.name === event.target.value)[0].service)
        // props.fetchServices(event.target.value)
    }
    const [staff, setStaff] = useState([])
    const [meetingType, setMeetingType] = useState([])

    function loadStaff(event) {
        let service1 = service[event.target.selectedIndex - 1];
        console.log(service1)

        setCalendar({
            ...Calendar,
            service: service1
        })
        let selectedService = service.filter((a, i) => a.name === event.target.value)[0]
        if (selectedService) {
            setStaff(selectedService.staff)
            setMeetingType(JSON.parse(selectedService.meeting_style_choice))
        }
        // props.getStaff(event.target.value)
        // props.getStaff(event.target.value)
    }

    function loadSchedules(e) {
        let staff1 = staff[e.target.selectedIndex - 1];

        setCalendar({
            ...Calendar,
            staff: staff1
        })
        if (Calendar.service && Calendar.service.id) {
            props.fetchSchedules(Calendar.service.id, e.target.value, staff1['id'])
        }
    }

    function changeHandler(event) {
        setCalendar({
            ...Calendar,
            [event.target.name]: event.target.value
        })
    }

    function handleSteps(data) {
        setCalendar({
            ...Calendar,
            schedule: data
        })
    }

    useEffect(() => {
        console.log(service)
        console.log(staff)
        console.log(meetingType)
    }, [service, staff, meetingType])

    const [loaderStep, setLoaderStep] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoaderStep(false)
        }, [500])
    }, [])

    let [appointObj, setAppointObj] = useState({})
    useEffect(() => {
        let arr = []
        let prvDate = false
        // setAppointObj(props.store.schedule_dates.map((a, i) => {
        //     if (!prvDate) {
        //         prvDate = a.for_date
        //         arr.push({
        //             [a.day]: {

        //             }
        //         })
        //     } else
        //         if (prvDate === a.for_date) {
        //             arr.push({
        //                 [a.day]: {
        //                     ...a.day,

        //                 }
        //             })
        //         }
        //     arr.push
        // }))
        arr = props.store.schedule_dates
        if (arr.length) {
            // console.log(props.store.schedule_dates)
            let arrobj = []
            arr.map((val, i) => {

                // if (arrobj[val.for_date]) {
                //     arrobj[val.for_date].push(val.start_time)
                // } else {
                //     arrobj{ [val.for_date]: [val.start_time] })
                // }
            })
            console.log(arrobj)
        }

    }, [props.store.schedule_dates])


    const [scrollValue, setScrollValue] = useState(0)


    useEffect(() => {
        document.addEventListener('scroll', function (e) {
            setScrollValue(window.scrollY);



        });
    }, [])

    const getAddressObj = (str) => {
        try {
            let obj = JSON.parse(str);
            return obj;
        } catch (err) {
            return str;
        }
    }


    // useEffect(() => {
    //     let arr = []
    //     props.store.schedule_dates ?
    //         props.store.schedule_dates
    //             .filter((el, i) => {
    //                 let cur = new Date(el.for_date).toLocaleDateString()
    //                 // console.log(el.for_date)
    //                 let tt = new Date(todayDate).toLocaleDateString()
    //                 console.log(`${new Date(el.for_date)}\n ${new Date(todayDate)}`)
    //                 return cur == tt;
    //             })
    //             .map((date, index) => {
    //                 // if (moment(`${date.for_date} ${date.start_time}`) > moment()) {
    //                 //     console.log(moment(`${date.for_date} ${date.start_time}`) > moment(), moment(`${date.for_date} ${date.start_time}`), moment())
    //                 console.log('OKAYYYY')
    //                 arr.push(date)

    //                 // }
    //             })
    //         : console.log('ERR');
    //         console.log(arr)
    // }, [props.store.schedule_dates])
    return (
        <>
            {loaderStep ?
                <Loader />
                :
                <div className="profilePageMain">
                    {overlayBool &&
                        <div onClick={() => setOverlayBool(false)} className="profilePageOverlay"></div>
                    }
                    <div className="container profilePageMainContainer">
                        <div className="rightDiv">
                            <div className="firstSection">
                                <h2>{name ? `${(name.charAt(0).toUpperCase() + name.slice(1))}`
                                    :
                                    <div className="">
                                        <div className="loader"></div>
                                    </div>
                                }</h2>
                            </div>

                            {!name && !location ?
                                <div className="secondSection loaderSec">
                                    <div className="loader"></div>

                                </div>
                                :
                                <div className="secondSection">
                                    <div className="imageDiv" style={{ backgroundImage: `url('https://app.planipets.com/public/images/${user && user.picture}')` }}></div>
                                    <div className="contentDiv">
                                        <div className="first">
                                            <h2>{name && name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                                            <p>{user.address}</p>
                                        </div>
                                        <div className="second">
                                            <h3>Moyen de paiement</h3>
                                            <div className="flexDiv">
                                                <div className="divOne">
                                                    <h3>Sur place</h3>
                                                    <div className="lists">
                                                        {/* <span>&#8226; Cheque</span>
                                                    <span>&#8226; Carte bancaire</span>
                                                    <span>&#8226; Espece</span> */}
                                                    </div>
                                                </div>
                                                <div className="hr"></div>
                                                <div className="divTwo">
                                                    <h3>Sur place</h3>
                                                    <div className="lists">
                                                        {/* <span>&#8226; Cheque</span>
                                                    <span>&#8226; Carte bancaire</span>
                                                    <span>&#8226; Espece</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {!animals ?
                                <div className="thirdSection loaderSec">
                                    <div className="loader"></div>

                                </div>
                                :
                                <div className="thirdSection">
                                    <h2>Animaux que nous accompagnons</h2>
                                    <div className="bulletsDiv">
                                        {
                                            animals && animals.map((animal, i) => {
                                                return (
                                                    <div key={i}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                            <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                            <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                            <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                            <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                        </svg>
                                                        {animal.name}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            }
                            <div className="fourthSection">
                                {!gallery ?
                                    <div className="imageSection loaderSec">
                                        <div className="loader"></div>

                                    </div>
                                    :
                                    <div className="imageSection">
                                        <h2>Ils sont passés chez {name && name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                                        <div className="twoImageDiv">
                                            <div className="image" style={{ backgroundImage: `url('https://app.planipets.com/public/images/gallery/${gallery && gallery[0] && gallery[0].path}')` }}></div>
                                            <div className="image" style={{ backgroundImage: `url('https://app.planipets.com/public/images/gallery/${gallery && gallery[1] && gallery[1].path}')` }}></div>
                                        </div>
                                    </div>
                                }
                                {!category ?
                                    <div className=" loaderSec">
                                        <div className="loader"></div>

                                    </div>
                                    :
                                    <Collapse
                                        bordered={false}
                                        expandIcon={({ isActive }) => isActive ? <span>-</span> : <span>+</span>}
                                        className="site-collapse-custom-collapse"
                                    >
                                        {
                                            category && category.map((cat, i) =>
                                                <Panel key={i} header={<h2>{cat.name}</h2>} className="site-collapse-custom-panel">
                                                    {cat.service.map((service, i) =>
                                                        <div className="notiType" key={i}>
                                                            <p>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                                </svg>
                                                                {service.name}
                                                            </p>
                                                        </div>
                                                    )}
                                                </Panel>
                                            )
                                        }
                                    </Collapse>
                                }
                            </div>

                            {!users ?
                                <div className="fifthSection loaderSec">
                                    <div className="loader"></div>
                                </div>
                                :
                                <div className="fifthSection">
                                    <h1>Staff Members</h1>
                                    {
                                        users && users.map((el, i) =>
                                            <div key={i} style={{ justifyContent: 'space-between' }} className={['fifthSectionItem', i % 2 == 1 ? "" : "right"].join(' ')}>
                                                <div className="imageDiv" style={{ backgroundImage: `url('https://app.planipets.com/public/images/${el.picture}')` }}></div>
                                                <div className="contentDiv">
                                                    <h2>{el.name} </h2>
                                                    <p>{el.description}</p>
                                                    {/* <button>Voir tous les avis</button> */}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            }
                            {/* {!testimonials ?
                            <div className="sixthSection loaderSec">
                                <div className="loader"></div>

                            </div>
                            :
                            <div className="sixthSection">
                                <h2>Ce que les propriétaires pensent</h2>
                                <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                                    {
                                        testimonials &&
                                        testimonials.map((testimonial, index) => <p key={index}>{testimonial.description}</p>)
                                    }
                                </Carousel>
                            </div>
                        } */}
                            {/* <button className="button">Voir tous les avis</button> */}
                            {!gallery ?
                                <div className="sixthSection loaderSec">
                                    <div className="loader"></div>

                                </div>
                                :
                                <div className="seventhSection">
                                    <h2>Gallery</h2>
                                    <div className="sliderMain">
                                        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                                            {
                                                gallery &&
                                                gallery.map((image, index) => {
                                                    return <div key={index} className="slideItem" style={{ backgroundImage: `url('https://app.planipets.com/public/images/gallery/${image.path}')` }}></div>;
                                                })
                                            }
                                        </Carousel>
                                    </div>
                                </div>
                            }
                            {!weekdays ?
                                <div className="eightSection loaderSec">
                                    <div className="loader"></div>

                                </div>
                                :
                                <div className="eightSection">
                                    <div className="tableDiv">
                                        <h2>Horaire d'ouvertures</h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Jour</th>
                                                    <th>Heure</th>
                                                </tr>
                                                {
                                                    weekdays &&
                                                    weekdays.map((weekday, index) => {
                                                        return <tr key={index}>
                                                            <td>{weekday.weekday}</td>
                                                            <td className="td2">{weekday.value ? weekday.value : '---'}</td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mapDiv">
                                        <h2>Carte Google Map</h2>
                                        <div className="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9562553499977!2d67.05814321487875!3d24.83116955254639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c47910d7623%3A0xe55d4b1b10cd06fe!2sDefence%20Central%20Library!5e0!3m2!1sen!2s!4v1627463900116!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                                        </div>
                                    </div>
                                </div>
                            }
                            {!pricings ?
                                <div className="nineSection loaderSec">
                                    <div className="loader"></div>

                                </div>
                                :
                                <div className="nineSection">
                                    <h2>Prices</h2>
                                    <div className='priceTAble'>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Service</th>
                                                    <th>Prix</th>
                                                </tr>
                                                {
                                                    pricings &&
                                                    pricings.map((price, index) => {
                                                        return <tr key={index}>
                                                            <td>{price.name}</td>
                                                            <td>{price.value}</td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    <button className="button">I want to make an appointment</button>
                                </div>
                            }
                        </div>
                        <div className='appointTabFix' id='appointTabFix'>

                            <div className={`bookAppointmentDiv ${stepOneVal !== "select" ? "top0" : ""}`}>
                                <div className="heading">
                                    <h3>Book your appointment online</h3>
                                    <span>Fill in the following information</span>
                                </div>
                                <div className='innerStepsFields'>
                                    <div className="stepss">
                                        <div data-aos="zoom-in" data-aos-anchor-placement="top" className={`dot ${stepOne ? "active" : ""}`}>1</div>
                                        <div data-aos="zoom-in" data-aos-anchor-placement="top" className={` firstLine ${stepTwo ? "active" : ""}`}></div>
                                        <div data-aos="zoom-in" data-aos-anchor-placement="top" className={`dot ${stepTwo ? "active" : ""}`}>2</div>
                                        <div data-aos="zoom-in" data-aos-anchor-placement="top" className={` secondLine ${stepThree ? "active" : ""}`}></div>
                                        <div data-aos="zoom-in" data-aos-anchor-placement="top" className={`dot ${stepThree ? "active" : ""}`}>3</div>
                                        <div data-aos="zoom-in" data-aos-anchor-placement="top" className={` thirdLine ${stepFour ? "active" : ""}`}></div>
                                        <div data-aos="zoom-in" data-aos-anchor-placement="top" className={`dot ${stepFour ? "active" : ""}`}>4</div>
                                        {stepFive &&
                                            <>
                                                <div data-aos="zoom-in" data-aos-anchor-placement="top" className={` fourthLine  ${stepFive ? "active" : ""}`}></div>
                                                <div data-aos="zoom-in" data-aos-anchor-placement="top" className={`dot ${stepFive ? "active" : ""}`}>5</div>
                                            </>
                                        }
                                    </div>
                                    <div className={`stepOne stepperDiv ${stepOne ? "active" : ""}`}>
                                        <div className="inputDiv">
                                            <label>Category</label>
                                            {props.book.length === 0 ?
                                                <div className="loaderDiv">
                                                    <div className="loader"></div>
                                                </div>
                                                :
                                                <select name="category" onChange={(e) => {
                                                    setStepOneVal(e.target.value)
                                                    loadServices(e)
                                                    setStepTwo(true)
                                                    setOverlayBool(true)
                                                    window.scrollTo({ top: 100, behavior: 'smooth' });
                                                }} value={stepOneVal} disabled={!stepOne}>
                                                    <option>Select</option>
                                                    {
                                                        props.book && props.book.map((cat, i) => <option key={i} id={cat.id} value={cat.name}>{cat.name}</option>)
                                                    }
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <hr />
                                    <div className={`stepTwo stepperDiv ${stepTwo ? "active" : ""}`}>
                                        <div className="inputDiv">
                                            <label>Services</label>

                                            <select name="service" onChange={(e) => {
                                                setStepTwoVal(e.target.value)
                                                setStepThree(true)
                                                setOverlayBool(true)
                                                loadStaff(e)
                                                window.scrollTo({ top: 200, behavior: 'smooth' });
                                            }} value={stepTwoVal} disabled={!stepTwo}>
                                                <option>select</option>
                                                {service && service.map((service, i) => <option key={i} value={service.name}>{service.name}</option>)}
                                            </select>

                                        </div>
                                    </div>
                                    <hr />
                                    <div className={`stepThree stepperDiv ${stepThree ? "active" : ""}`}>
                                        <div className="inputDiv">
                                            <label>Staff Member</label>

                                            <select name="staff" onChange={(e) => {
                                                setStepThreeVal(e.target.value)
                                                setStepFour(true)
                                                setOverlayBool(true)
                                                loadSchedules(e)
                                                window.scrollTo({ top: 300, behavior: 'smooth' });
                                            }} value={stepThreeVal} disabled={!stepThree}>
                                                <option>please select a staff member</option>
                                                {staff && staff.map((staff, i) => <option key={i} value={staff.user.name}>{staff.user.name}</option>)}
                                            </select>

                                        </div>
                                    </div>

                                    {stepFour &&
                                        <div className={`stepFour stepperDiv ${stepFour ? "active" : ""}`}>
                                            <div className="inputDiv">
                                                <label>Meeting Type</label>
                                                <select name="meeting_type" onChange={(e) => {
                                                    setStepFourVal(e.target.value)
                                                    setStepFive(true)
                                                    setOverlayBool(true)
                                                    changeHandler(e)
                                                    window.scrollTo({ top: 300, behavior: 'smooth' });
                                                    setTimeout(() => {
                                                        document.getElementById('appointTabFix').scrollTo({ top: 500, behavior: 'smooth' });
                                                    }, [500])
                                                    // .scrollTop = 500
                                                }} value={stepFourVal} disabled={!stepFour}>
                                                    <option>please select a meeting type</option>
                                                    {meetingType && meetingType ? meetingType.map((choice, i) => <option key={i} value={choice}>{choice}</option>) : ""}
                                                </select>
                                            </div>
                                        </div>
                                    }

                                    {stepFive &&
                                        <div data-aos="zoom-in" data-aos-anchor-placement="top" className={`stepFive stepperDiv ${stepFive ? "active" : ""}`}>
                                            <div className="inputDiv">
                                                <label onClick={() => console.log(props.store.schedule_dates)}>Select your appointment</label>
                                                <div className="timeSlotTableDiv">
                                                    <div className="arrowDiv">
                                                        <div style={{ minWidth: "15px" }}>
                                                            {todayDate.getTime() > new Date().getTime() ?
                                                                <svg onClick={() => changeDate("backward")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="black" />
                                                                </svg>
                                                                :
                                                                null
                                                            }
                                                        </div>
                                                        <div style={{ minWidth: "15px" }}>
                                                            {props.store.schedule_dates.length && tomorrowAfterDate2.getTime() < new Date(props.store.schedule_dates[props.store.schedule_dates.length - 1].for_date).getTime() ?
                                                                <svg onClick={() => changeDate(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M10.0001 6L8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6Z" fill="black" />
                                                                </svg>
                                                                :
                                                                null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="columnDiv">
                                                        <div className="headDiv">
                                                            <p>{daysInWeek[todayDate.getDay()]}</p>
                                                            <span>{todayDate.getDate()} {months[todayDate.getMonth()]}</span>
                                                        </div>
                                                        <div className="bodyDiv scrollbox">
                                                            {
                                                                props.store.schedule_dates ?
                                                                    props.store.schedule_dates
                                                                        .filter((el, i) => {
                                                                            let cur = new Date(el.for_date).toLocaleDateString()
                                                                            let tt = new Date(todayDate).toLocaleDateString()
                                                                            return cur == tt;
                                                                        })
                                                                        .map((date, index) => {
                                                                            if (moment(`${date.for_date} ${date.start_time}`) > moment()) {
                                                                                // console.log(moment(`${date.for_date} ${date.start_time}`) > moment(), moment(`${date.for_date} ${date.start_time}`), moment())
                                                                            return <div className='div' key={index} onClick={() => handleSteps(date)}>{
                                                                                date.start_time.split(":").slice(0, -1).join(':')
                                                                            }

                                                                            </div>
                                                                            }
                                                                        })
                                                                    :
                                                                    <div className=" loaderSec">
                                                                        <div className="loader"></div>

                                                                    </div>
                                                            }

                                                            {seeMore &&
                                                                <>
                                                                    <div onClick={() => {
                                                                        props.history.push("/steps?steps=1,2,3")
                                                                    }}>16:00</div>
                                                                    <div onClick={() => {
                                                                        props.history.push("/steps?steps=1,2,3")
                                                                    }}>16:15</div>
                                                                    <div onClick={() => {
                                                                        props.history.push("/steps?steps=1,2,3")
                                                                    }}>16:30</div>
                                                                    <div onClick={() => {
                                                                        props.history.push("/steps?steps=1,2,3")
                                                                    }}>16:00</div>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="columnDiv">
                                                        <div className="headDiv">
                                                            <p>{daysInWeek[tomorrowDate.getDay()]}</p>
                                                            <span>{tomorrowDate.getDate()} {months[tomorrowDate.getMonth()]}</span>
                                                        </div>
                                                        <div className="bodyDiv scrollbox">
                                                            {
                                                                props.store.schedule_dates ? props.store.schedule_dates.filter((el, i) => {
                                                                    let cur = new Date(el.for_date).toLocaleDateString()
                                                                    let tt = new Date(tomorrowDate).toLocaleDateString()
                                                                    return cur == tt;
                                                                }).map((date, index) => {
                                                                    return <div className='div' key={index} onClick={() => handleSteps(date)}>{
                                                                        date.start_time.split(":").slice(0, -1).join(':')
                                                                    }</div>
                                                                }) :
                                                                    <div className=" loaderSec">
                                                                        <div className="loader"></div>

                                                                    </div>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="columnDiv">
                                                        <div className="headDiv">
                                                            <p>{daysInWeek[tomorrowAfterDate.getDay()]}</p>
                                                            <span>{tomorrowAfterDate.getDate()} {months[tomorrowAfterDate.getMonth()]}</span>
                                                        </div>
                                                        <div className="bodyDiv scrollbox">
                                                            {
                                                                props.store.schedule_dates ? props.store.schedule_dates.filter((el, i) => {
                                                                    let cur = new Date(el.for_date).toLocaleDateString()
                                                                    let tt = new Date(tomorrowAfterDate).toLocaleDateString()
                                                                    return cur == tt;
                                                                }).map((date, index) => {
                                                                    return <div className='div' key={index} onClick={() => handleSteps(date)}>{
                                                                        date.start_time.split(":").slice(0, -1).join(':')
                                                                    }</div>
                                                                }) :
                                                                    <div className=" loaderSec">
                                                                        <div className="loader"></div>

                                                                    </div>
                                                            }
                                                            {seeMore &&
                                                                <>
                                                                    <div onClick={() => {
                                                                        props.history.push("/steps?steps=1,2,3")
                                                                    }}>16:00</div>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="columnDiv">
                                                        <div className="headDiv">
                                                            <p>{daysInWeek[tomorrowAfterDate2.getDay()]}</p>
                                                            <span>{tomorrowAfterDate2.getDate()} {months[tomorrowAfterDate2.getMonth()]}</span>
                                                        </div>
                                                        <div className="bodyDiv scrollbox">
                                                            {
                                                                props.store.schedule_dates ?
                                                                    props.store.schedule_dates.filter((el, i) => {
                                                                        let cur = new Date(el.for_date).toLocaleDateString()
                                                                        let tt = new Date(tomorrowAfterDate2).toLocaleDateString()
                                                                        return cur == tt;
                                                                    }).map((date, index) => {
                                                                        return <div className='div' key={index} onClick={() => handleSteps(date)}>{
                                                                            date.start_time.split(":").slice(0, -1).join(':')
                                                                        }</div>
                                                                    })
                                                                    :
                                                                    <div className=" loaderSec">
                                                                        <div className="loader"></div>

                                                                    </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                </div>}
            {scrollValue > 0 ?
                <div className='appointmentClick'>
                    <p>Appointment</p>
                    {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </div> */}
                </div>
                : null}
        </>

    )
}

const mapStateToProps = ({ store, auth, vet, book }) => ({
    store, auth, vet, book: store.book

})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchServices, getStaff, fetchSchedules, getCategoriesWithServices, loadShopDetails, setScheduler, bookAppointment
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)