import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import * as FoodActions from '../actions/FoodActions.js';

class SearchData extends React.Component {
	constructor(props){
		super();
		this.state= {
				btnText: "ADD TO FAV", 
				btnClass: "btn-success", 
				method: this.addToFavourite.bind(this), wrapperHiddenClass : ""
		}
	}

	addToFavourite(){
		let no = this.props.data.ndbno;
		let favItems = localStorage.getItem('favItems');
		favItems = favItems? (favItems+","+no) : no;
		localStorage.setItem('favItems', favItems);
		FoodActions.foodDetails(no,"fav");
		this.setState({btnText: "IN FAVOURITE'S", btnClass: "btn-link disabled" });
	}
	handleRemove(){
		let favItems = localStorage.getItem('favItems').split(",");
		favItems.splice(favItems.indexOf(""+this.props.data.ndbno),1);
		localStorage.setItem('favItems', favItems.join(","));
		FoodActions.removeFromFav(""+this.props.data.ndbno);
		this.setState({btnText: "", btnClass: "hidden" , wrapperHiddenClass : "hidden"});
	}
	
	
	render(){
		let { offset, group, name, ndbno, ds } = this.props.data; 
		let {btnText, btnClass, method, wrapperHiddenClass} = this.state;
		
		if(this.props.from === "favourite")
		{	
			btnText ="Remove"; 
			btnClass ="btn-danger";
			method = this.handleRemove.bind(this);
		} 
		
		let captionStyle = {minHeight: 265,position: "relative"};
		let fixedBottomStyle = {position: "absolute",bottom:10,width:"100%",left:0,padding:"0 10px"};
		
		return(
				
			<div className={"col-xs-12 col-sm-6 col-md-4 " + wrapperHiddenClass} >
				 <div className="thumbnail">
				  <div className="caption clearfix" style={captionStyle}>
					<p className="text-right"><span>NDBNo: { ndbno }</span></p>
					<h4><strong>{ name }</strong></h4>
					<p>{ group }, <em>{ ds === "BL" ? "Branded Food Products" : "Standard Release"}</em>
					</p>
					<p style={fixedBottomStyle}>
						<Link to={"details/"+ ndbno} className="btn btn-primary col-xs-6">Details</Link>
						<a className={"btn col-xs-6 "+ btnClass} onClick={method}>{btnText}</a>
						
					</p>
				  </div>
				</div>
			</div>
			
		
			);
		}
}

export default SearchData;
