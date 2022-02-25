import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Section1Image from "../../Images/home/section1.png";
import thirdSectionRightImage from "../../Images/home/thirdSectionRightImage.png";
import thirdSectionLeftImage from "../../Images/home/thirdSectionLeftImage.png";

// actions
import { fetchFilters } from "../../modules/actions";
import calanderIcon from "../../Images/home/calanderIcon.png";
import playIcon from "../../Images/home/playIcon.png";
import houseDamageIcon from "../../Images/home/houseDamageIcon.png";

import section5Image from "../../Images/home/section5Image.png";

import sixthSectionDog from "../../Images/home/sixthSectionDog.png";

import locationIcon from "../../Images/home/locationIcon.png";
import clockIcon from "../../Images/home/clockIcon.png";
import checkIcon from "../../Images/home/checkIcon.png";

import Typist from "react-typist";

import { Link } from "react-router-dom";

import "./home.scss";
import FilterModal from "./filterModal";
import { Input, Select } from "antd";

import  PlacesAutocomplete from "../../modules/gmap";

const { Option } = Select;

function Home(props) {
  const [count, setCount] = useState(1);
  const [filter, setFilter] = useState({
    type: "",
    animal: "",
    professional:"",
    villa:''
  });

  useEffect(() => {
    setCount(1);

    return;
  }, [count]);

  useEffect(() => {
    props.fetchFilters();
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
  useEffect(() => {
    console.log(filter)
  }, [filter])

  return (
	
    <div className="homeDivMain">
      <div className="container homeContainer">
        <div className="contentDiv">
          {/* <h2 data-aos="zoom-in" >Groom Your <br />Lovely Pet With us!</h2> */}
          <h2 data-aos="zoom-in">
            Trouvez le professionnel <br /> dont votre <br /> animal a besoin pour son
            bien-être
          </h2>
          {/* <p data-aos="zoom-in" >Make an appointment online <br /> with your */}
          <p data-aos="zoom-in">
            Prenez rendez-vous en ligne
            <br /> avec votre
            {count ? (
              <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                {/* <span style={{ fontWeight: "bold", color: "#26914a", marginLeft: 5 }}> Veterinary</span> */}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#26914a",
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  Vétérinaire{" "}
                </span>
                <Typist.Backspace count={20} delay={800} />
                {/* <span style={{ fontWeight: "bold", color: "#26914a", marginLeft: 5 }}> Pet groomer</span> */}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#26914a",
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  Naturopathe{" "}
                </span>
                <Typist.Backspace count={20} delay={800} />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#26914a",
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  Toiletteur{" "}
                </span>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ""
            )}
            {/* <br /> 24/7 in a few clicks</p> */}
            <br /> 24/7 en quelques clics
          </p>
          {/* <Link to="/vet-listings"> */}
          {/* <button data-aos="zoom-in" onClick={showModal}>Make an appointment</button> */}
          <button data-aos="zoom-in" onClick={showModal}>
            Prendre rendez-vous
          </button>
          {/* </Link> */}
          <FilterModal
            isModalVisible={isModalVisible}
            showModal={showModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
            filter={props.store}
          />
        </div>
        <div data-aos="fade-left" className="imageDiv">
          <img src={Section1Image} />
        </div>
      </div>
      <div className="secondSection">
        <div className="container secondSectionContainer">
          <div className="textDiv">
            {/* <p>Trouvez le toilletteur qui prendra soin de <br />votre fidèle compagnon</p> */}
            <p>
              Planipets vous présente les professionnels qui vous facilitent le
              rendez-vous en ligne pour vos animaux
            </p>
          </div>
          <div className="buttonDiv" onClick={()=>console.log(props.store)}>
            <Select
              className="select Animal"
              name="professional"
              defaultValue="Professional"
            onChange={(e) =>
              setFilter({
                ...filter,
                professional: props.store.types.find((el) => el.id === e).name,
              })
            }
            >
              {props.store.types &&
                props.store.types.map((types, index) => (
              <Option key={index} value={types.id}>
                {types.name}
              </Option>
              ))}
            </Select>
            <Select
              className="select villa"
              name="animal"
              defaultValue="Animal"
              onChange={(e) =>
                setFilter({
                  ...filter,
                  animal: props.store.animals.find((el) => el.id === e).name,
                })
              }
           style={{ display:'none' }} >
              {props.store.animals &&
                props.store.animals.map((animal, index) => (
                  <Option key={index} value={animal.id}>
                    {animal.name}
                  </Option>
                ))}
            </Select>

            {/* <button>Animal
              <svg xmlns="http://www.w3.org/2000/svg" width="5.977" height="6.973" viewBox="0 0 5.977 6.973">
                <g id="Group_9" data-name="Group 9" transform="translate(-907.612 -583.514)">
                  <path id="Icon_ionic-md-arrow-dropup" data-name="Icon ionic-md-arrow-dropup" d="M9,16.488,11.988,13.5l2.988,2.988Z" transform="translate(898.612 570.014)" fill="#3b3b3b" />
                  <path id="Icon_ionic-md-arrow-dropup-2" data-name="Icon ionic-md-arrow-dropup" d="M0,2.988,2.988,0,5.977,2.988Z" transform="translate(913.588 590.486) rotate(180)" fill="#3b3b3b" />
                </g>
              </svg> 
            </button>
              */}
                   <PlacesAutocomplete></PlacesAutocomplete>
{/* 
            <Select
              suffixIcon={null}
              className="select villa"
              showSearch
              // style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              defaultValue="ville"
              name="type"
              onChange={(e) =>
                setFilter({
                  ...filter,
                  type: props.store.types.find((el) => el.id === e).name,
                })
              }
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {props.store.types &&
                props.store.types.map((type, index) => (
                  <Option key={index} value={type.id}>
                    {type.name}
                  </Option>
                ))}
            </Select> */}

            <Link
              to={
                filter.type || filter.animal
                  ? `/vet-listings?animal=${filter.animal}&type=${filter.type}`
                  : `/vet-listings`
              }
            >
              {/* <button>Trouver votre toiletteur</button> */}
              <button className="searchButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>

            </Link>
          </div>
        </div>
      </div>

      <div className="thirdSection">
        <div className="container thirdSectionContainer">
          <img
            data-aos="fade-right"
            data-aos-anchor-placement="center"
            className="leftImage"
            src={thirdSectionLeftImage}
          />
          <img
            data-aos="fade-left"
            data-aos-anchor-placement="center"
            className="rightImage"
            src={thirdSectionRightImage}
          />
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className="textDiv"
          >
            {/* <h2>You are a <span>pet groomer?</span></h2> */}
            <h2>
              Vous êtes un professionnel qui travaille<br />
              <span> auprès d'animaux ?</span>
            </h2>
            {/* <p>Register now to make your life easier</p> */}
            <p>Inscrivez-vous maintenant pour vous simplifier la vie </p>
            <br />
            {/* <p>Take advantage of a simple, intuitive and fast solution to connect to your customers and optimize your time.</p> */}
            <p>
              {" "}
              bénéficiez d'une solution simple, intuitive et rapide pour vous
              connecter à vos clients et optimiser votre temps.
            </p>
            <br />
            {/* <p>Discover our platform designed specifically for the pet grooming profession.</p> */}
            <p>
              Découvrez Planipets, une plateforme conçue spécifiquement pour
              vous !
            </p>
          </div>
        </div>
      </div>

      <div className="fourthSection">
        <div className="container fourthSectionContainer">
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            className="fourthSectionItem"
          >
            {/* <h2>50% More Appointment</h2> */}
            <h2>50% de gains de temps </h2>
            <img src={calanderIcon} />
            {/* <p>50% more appointments with time</p> */}
            <p>50% de rendez-vous en plus</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className="fourthSectionItem"
          >
            {/* <h2>4 times less forgetting</h2> */}
            <h2>4 fois moins d'oubli de la part de vos clients</h2>
            <img src={playIcon} />
            {/* <p>50% more appointments with time</p> */}
            <p>50% de rendez-vous en plus</p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="fourthSectionItem"
          >
            {/* <h2>Outside Appoitnements</h2> */}
            <h2>Hors rendez-vous</h2>
            <img src={houseDamageIcon} />
            {/* <p>50% of appointments made are outside opening hours</p> */}
            <p>
              Rendez-vous extérieurs 50% des rendez-vous pris sont en dehors des
              heures d'ouverture
            </p>
          </div>
        </div>
      </div>

      <div className="sectionFive">
        <div className="container sectionFiveContainer">
          <img
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            src={section5Image}
          />
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="textDiv"
          >
            {/* <h2>
              I find my <br />
              pet groomer
            </h2> */}
            <h2>
              Vous êtes un d'animaux ? <br />
              possesseur
            </h2>
            {/* <p>
              Make an appointment online <br />
              with your pet groomer 24/7 in a few clicks
            </p> */}
            <p>
              Trouvez l'intervenant idéal pour votre animal.<br /> Prenez rendez-vous en ligne avec lui dès maintenant.
            </p>
            <Link to="/vet-listings">
              {/* <button>Make an appointment</button> */}
              <button>Prendre rendez-vous</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="sixthSection">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="container sixthSectionContainer"
        >
          <img src={sixthSectionDog} />
          <div className="textDiv">
            <p>
              From any device, make an appointment for your pet with the nearest
              available groomer. The process is simple, secure and completely
              free.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="seventhSection">
        <div className="container seventhSectionContainer">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="seventhSectionItem"
          >
            <img src={locationIcon} />
            {/* <h2>Find your nearest pet groomer</h2>
            <p>
              Need to make an appointment with a groomer for your pet? Make a
              search according to your criteria (animal, groomer, city etc..)
            </p> */}
            <h2>Trouver le professionnel le plus proche </h2>
            <p>
              de chez vous afin de prendre rendez-vous pour votre animal. Lancez la recherche selon vos critères et c'est parti !
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className="seventhSectionItem"
          >
            <img src={clockIcon} />
            {/* <h2>Find your nearest pet groomer</h2>
            <p>
              Need to make an appointment with a groomer for your pet? Make a
              search according to your criteria (animal, groomer, city etc..)
            </p> */}
            <h2>Trouver le professionnel le plus proche </h2>
            <p>
              de chez vous afin de prendre rendez-vous pour votre animal. Lancez la recherche selon vos critères et c'est parti !
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            className="seventhSectionItem"
          >
            <img src={checkIcon} />
            {/* <h2>Find your nearest pet groomer</h2>
            <p>
              Need to make an appointment with a groomer for your pet? Make a
              search according to your criteria (animal, groomer, city etc..)
            </p> */}
            <h2>Trouver le professionnel le plus proche </h2>
            <p>
              de chez vous afin de prendre rendez-vous pour votre animal. Lancez la recherche selon vos critères et c'est parti !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ store }) => ({
  store,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchFilters,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);