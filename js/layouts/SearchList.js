import React from 'react';
import ReactDOM from "react-dom";
import HeaderNav from "../components/HeaderNav.js";
import SearchPanel from "../components/SearchPanel.js";

class SearchList extends React.Component {
	
	render() {
		let verticalMargin =  {margin:"100px 0"};
		
	  	return (
		  <div style={verticalMargin}>
			<HeaderNav />
			<main className="container">			
				<SearchPanel />
			</main>
		  </div>
		);
  	 }
}

export default SearchList;
