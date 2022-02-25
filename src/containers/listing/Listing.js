import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import brand from '../../Images/listing/brand.png'
// import Loader from './Loader/Loader';
import './listing.scss'
import { fetchFilters } from '../../modules/actions'

// Actions;
import { fetchVets } from '../../modules/actions'
import { Link } from 'react-router-dom';
import Loader from '../../layout/Loader/Loader';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Input, Select } from "antd";

const { Option } = Select;

function Listing(props) {
    let urlParams = new URLSearchParams(props.location.search);

    const [Filter, setFilter] = useState({
        name: '', location: '', animal: urlParams.get('animal') || '', type: urlParams.get('type') || ''
    })

    useEffect(() => {
        props.fetchFilters()
    }, [])

    useEffect(() => {
        let mounted = true;
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
        let searchString = `name=${Filter.name}&location=${Filter.location}&animal=${Filter.animal}&type=${Filter.type}`;
        props.fetchVets(searchString)
        setFilter({
            name: '', location: '', animal: '', type: ''
        })
    }



    const [selectAnimal, setSelectAnimal] = useState('Animal')


    const animalMenu = (
        <Menu className='animalMenu'>

            {props.store.animals &&
                props.store.animals.map((animal, index) => {
                    return (

                        <Menu.Item key="0" onClick={() => setSelectAnimal(animal.name)}>
                            {animal.name}
                        </Menu.Item>
                    )
                })

            }
        </Menu>
    );

    const [selectVilla, setSelectVilla] = useState('Villa')


    const professionalMenu = (
        <Menu className='animalMenu'>

            {props.store.types &&
                props.store.types.map((types, index) => {
                    return (

                        <Menu.Item key="0" onClick={() => setProfessional(types.name)}>
                            {types.name}
                        </Menu.Item>
                    )
                })

            }
        </Menu>
    );


    const [professional, setProfessional] = useState('Professional')


    // const professionalMenu = (
    //     <Menu className='animalMenu'>

    //         {props.store.types &&
    //             props.store.types.map((types, index) => (
    //                 <Option key={index} value={types.id}>
    //                     {types.name}
    //                 </Option>
    //             ))
    //         }
    //     </Menu>
    // );

    useEffect(() => {
        console.log(props.store)
    }, [props.store])


    const getAddressObj = (str) => {
        try {
           let obj = JSON.parse(str);
            return obj;
        } catch (err) {
            return str;
        }
    }


    return (
        <div className="listingPage">
            <div className="listingFilterDiv">
                <div className="container listingFilterDivContainer">
                    <div className="flexDiv">
                        {/* <div className="inputDiv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.406" height="16.41" viewBox="0 0 16.406 16.41">
                                <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M20.713,19.715,16.151,15.11a6.5,6.5,0,1,0-.987,1L19.7,20.685a.7.7,0,0,0,.991.026A.707.707,0,0,0,20.713,19.715Zm-9.673-3.55a5.134,5.134,0,1,1,3.631-1.5A5.1,5.1,0,0,1,11.041,16.165Z" transform="translate(-4.5 -4.493)" fill="#a4a4a4" />
                            </svg>
                            <input type="text" placeholder="Search" name="name" value={Filter.name} onChange={filterHandler} />
                        </div> */}
                        {/* 
                        <div className="inputDiv filter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <input type="text" placeholder="Location" name="location" value={Filter.location} onChange={filterHandler} />
                        </div> */}

                        <div className="inputDiv filter selectDiv">

                            <Dropdown className="select Animal" overlay={professionalMenu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {professional} <DownOutlined />
                                </a>
                            </Dropdown>
                            {/* <Select defaultValue="Animal" >
    {
        props.store.animals && 
        props.store.animals.map((animal, index) => <Option key={index} value={animal.id}>{ animal.name }</Option>)
    }
</Select> */}
                        </div>

                        <div className="inputDiv filter selectDiv">

                            <Dropdown className="select Animal" overlay={animalMenu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {selectAnimal} <DownOutlined />
                                </a>
                            </Dropdown>
                            {/* <Select defaultValue="Animal" >
    {
        props.store.animals && 
        props.store.animals.map((animal, index) => <Option key={index} value={animal.id}>{ animal.name }</Option>)
    }
</Select> */}
                        </div>




                        <div className="inputDiv filter selectDiv">
                            <Input className="select Animal" placeholder='Ville' />
                            {/* <Dropdown className="select Animal" overlay={villaMenu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {selectVilla} <DownOutlined />
                                </a>
                            </Dropdown> */}

                            {/* <Select
                                suffixIcon={null}
                                className="select villa"
                                showSearch
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                defaultValue="ville"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }
                            >
                                {
                                    props.store.types &&
                                    props.store.types.map((type, index) => <Option key={index} value={type.id}>{type.name}</Option>)
                                }
                            </Select> */}
                        </div>


                    </div>
                    <div className="flexDiv filterApply">
                        <div onClick={getVets}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                        {/* <button >Apply Filters</button> */}
                    </div>
                </div>
            </div>

            <div className="listingDivMain">
                <div className="container listingDivMainContainer">
                    <div className="listings">
                        {props.store.vets.length ? props.store.vets.map((vet, i) => {

                            const linkParams = `/vet/${vet.id}/${vet.name}`

                            return (
                                <>
                                    <div className='listItemDiv'>

                                        <div className="listItem" key={i}>
                                            <div className="imageDiv">
                                                <div className="img" style={{ backgroundImage: `url('https://app.planipets.com/public/images/${vet.user.picture}')` }} alt="Alt Image"></div>
                                                <p onClick={() => console.log(vet)}>{vet.catch_phrase}</p>
                                                <Link to={`/vet/${vet.id}/${vet.name}/profile`}><button>Voir la fiche detailee de toiletesiof</button></Link>
                                            </div>
                                            <div className="contentDiv">
                                                <Link to={linkParams}><h2>{vet.name.charAt(0).toUpperCase() + vet.name.slice(1)}</h2></Link>
                                                <p>{vet.user.address}</p>
                                                <div className="flexDiv">
                                                    <div className="brandImageDiv">
                                                        <img src={vet.logo} alt={vet.name} />
                                                    </div>
                                                    <div className="brandContentDiv">
                                                        {
                                                            vet.tags !== '' ? vet.tags.map((tag, tag_key) => {

                                                                return <span key={tag_key}>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                                        <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                                        <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                                        <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                                        <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                                    </svg> {tag.name}
                                                                </span>
                                                            }) : <span >
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12Z" fill="#26914A" />
                                                                    <path d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z" fill="#26914A" />
                                                                    <path d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z" fill="#26914A" />
                                                                    <path d="M19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12Z" fill="#26914A" />
                                                                    <path d="M17.34 14.86C16.47 13.84 15.74 12.97 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.60002 11.42 9.13002 11.96C8.26002 12.98 7.53002 13.85 6.65002 14.87C5.34002 16.18 3.73002 17.63 4.03002 19.66C4.32002 20.68 5.05002 21.69 6.36002 21.98C7.09002 22.13 9.42002 21.54 11.9 21.54H12.08C14.56 21.54 16.89 22.12 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.26 17.62 18.65 16.17 17.34 14.86Z" fill="#26914A" />
                                                                </svg>None yet
                                                            </span>

                                                        }

                                                        {/* <button>RDV des le 28 Juin</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='adressEstablish'>
                                            <div className='addressDataDiv'>
                                                <h3>Adress</h3>
                                                <p>{typeof getAddressObj(vet.location) === 'object' ? getAddressObj(vet.location).formatted_address :  getAddressObj(vet.location) }</p>
                                            </div>
                                            <div className='addressDataDiv'>
                                                <h3>Numero</h3>
                                                <p>{vet.phone_number}</p>
                                            </div>
                                            <div className='addressDataDiv'>
                                                <h3>Moyen de paiement</h3>
                                                <p>Cheque</p>
                                                <p>CB</p>
                                                <p>Espcies</p>
                                            </div>
                                            <Link to={`/vet/${vet.id}/${vet.name}/profile`}><button>Voir la fiche detailee de toiletesiof</button></Link>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : <Loader />}
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ store }) => ({
    store
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchVets, fetchFilters
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)