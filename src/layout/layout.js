import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import Loader from "./Loader/Loader";

function Layout(props) {
	let [loader, setLoader] = useState(true);
	let [pathname, setPathname] = useState("");

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	});

	useEffect(() => {
		if (window.location.pathname) {
			setPathname(window.location.pathname.slice(1));
		}
	}, [window.location.pathname]);

	// console.log(pathname);

	const [scrollValue,setScrollValue] = useState(0)


    useEffect(()=>{
        document.addEventListener('scroll', function(e) {
            setScrollValue(window.scrollY);
          });
    },[])

	return (
		<>
			{loader && <Loader />}

			{!loader && pathname.toLowerCase() !== "login" && <Header />}

			{!loader && <div className="bodyContainer">{props.children}</div>}

			{!loader && pathname.toLowerCase() !== "login" &&pathname && (
				scrollValue > 0 ?
				<div className="backToTop" onClick={scrollToTop}>
					<svg
						width="100"
						height="100"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16.6667 50L22.5417 55.875L45.8334 32.625V83.3333H54.1667V32.625L77.4167 55.9166L83.3334 50L50.0001 16.6666L16.6667 50Z"
							fill="#FFFAFA"
						/>
					</svg>
				</div>
				: null
			)}
			{!loader && pathname.toLowerCase() !== "login" && <Footer />}
		</>
	);
}

const mapStateToProps = ({ store }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
