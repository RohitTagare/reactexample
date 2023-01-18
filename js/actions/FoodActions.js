//Import Statements
import dispatcher from "../dispatcher.js";

//Applying Polyfill for Promises in IE
import ES6Promise from 'es6-promise';
ES6Promise.polyfill();
import axios from "axios";

//This action will capture the request to search a particular NDBNO to fetch the food list result
export function searchFood(searchText){
	//for the first time whole list of food will be displayed
	if(searchText === undefined)
		searchText = "";
	else
	searchText = "&q="+searchText;
	
	//Ajax Call to API
	axios.get('https://app.swaggerhub.com/apis/fdcnal/food-data_central_api/1.0.1#/FDC/postFoodsSearch')
		 .then(function(res){
			if(res.data.errors){
				//Error Case Handle
				dispatcher.dispatch({
					type: "updateSearchResults",
					text: searchText,
					resultList :  []
				});		
			}else if(res.data.list !== undefined)
				//Dispatching the result list
				dispatcher.dispatch({
					type: "updateSearchResults",
					text: searchText,
					resultList :  res.data.list.item
				});	
				
			
		 });
	
	
}

//This action will capture the request to fetch the Detail of the food article selected by user
export function foodDetails(ndbno, type){

	//Ajax Call to API for fetching the Data
	axios.get('https://app.swaggerhub.com/apis/fdcnal/food-data_central_api/1.0.1#/FDC/getFood')
	.then(function(res){
		//If the Request Came from unknown source
		if(type === undefined)
		{	
			//Handling Error Case
			if(res.data.errors){
				dispatcher.dispatch({
					type: "fecthDetails",
					text: searchText,
					resultList :  {}
				});		
			}
			else if(res.data.report !== undefined){
				dispatcher.dispatch({
					type: "fecthDetails",
					resultList :  res.data.report
				});	
			}
		}
		//If the Request Came from Favourite Page
		else if(type === "fav"){
			
			if(res.data.errors){
				//Handling Error Case
				dispatcher.dispatch({
					type: "fecthFav",
					text: searchText,
					resultList :  {}
				});		
			}
			else if(res.data.report !== undefined){
				//Fetching Data
				dispatcher.dispatch({
					type: "fecthFav",
					resultList :  res.data.report
				});	
			}
		}
	});
	
}



export function removeFromFav(ndbno){
		dispatcher.dispatch({
			type: "removeFav",
			ndbno: ndbno
		});	
}
