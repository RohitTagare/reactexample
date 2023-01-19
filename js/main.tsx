import React from 'react';
import ReactDOM from 'react-dom';
import SearchList from "./layouts/SearchList.js";
import Details from "./layouts/Details.js";
import Favourite from "./layouts/Favourite.js";
import {   BrowserRouter as Router,  Route, useHistory} from 'react-router-dom';

const App = () => { 
	 const history = useHistory();
  return (
	<SearchList />
	/* <Router >
    <div>
      	<Route exact path="/" component={SearchList}/>
		<Route path="/details/:foodID" component={Details}/>
		<Route path="/favourite" component={Favourite}/>
    </div>
  </Router> */
)}
//Rendering DOM VIA Router, Different Pages to display when Paramerters change's in URL 
ReactDOM.render(
	<App></App>
, document.getElementById('app'));
