import React, { useState } from 'react'
import axios from '../utils/Axios';

const RecentSearches = () => {
	
	const fetchTerms = () => dispatch => {
    axios.get('recentsearch', { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err)
    })
};
	let rSearch = fetchTerms();
	if(rSearch){
	return (
		<ul className="autocomplete-dropdown-container">
		
		
		{Object.entries(rSearch).map(([key, value]) => (
			<li key={key} >
			  <strong>{value.term_type}</strong>
			</li>
			))
	}
		</ul>
	 );		
}    
};

export default RecentSearches