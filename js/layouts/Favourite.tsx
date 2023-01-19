import React from 'react';
import ReactDOM from "react-dom";
import HeaderNav from "../components/HeaderNav.js";
import SearchData from '../components/SearchData.js';
import FoodStore from '../stores/FoodStore.js';
import * as FoodActions from "../actions/FoodActions.js";
import BackButton from "../components/BackButton.js";

const Favourite = () => {
	const [state, setState] = React.useState<any>({});

	React.useEffect(() => {
		if(localStorage.getItem('favItems')) {
			setState({ data: (localStorage.getItem('favItems')) ? localStorage.getItem('favItems')?.split(',') : [], results: FoodStore.getFevFoodList() })
		}
		return (() => {
			const results  = FoodStore.getFevFoodList();
		})

	}, [(localStorage.getItem('favItems'))])
	
		let searchDataResults;

		//Handling differnet States while rendering on the basis of DATA returned by Stores
		if (state.results.length === 0 && localStorage.getItem('favItems')) {
			searchDataResults = <div className="col-xs-12 text-center"><h4>Fetching Details ....</h4></div>;
		}
		else if (state.results.length > 0) {
			searchDataResults = state.results.map((item: any, i: any) => {
				return <SearchData key={i} data={item.food} from="favourite" />;
			});
		}
		else {
			searchDataResults = <div className="col-xs-12 text-center"><h4>Nothing Added to Favourites</h4></div>
		}

		let verticalMargin = { margin: "100px 0" };

		//Returning Components to Render within DOM 
		//Components used are the same as imported at the top of this Page
		return (
			<div style={verticalMargin}>
				<HeaderNav />
				<BackButton />
				<main className="container">
					<h1>Favourite Food</h1>
					<div className="row">{searchDataResults}</div>
				</main>


			</div>
		);
	/* } */
}

export default Favourite;
