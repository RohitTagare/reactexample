import React from 'react';
import ReactDOM from 'react-dom';
import {  Link } from 'react-router-dom';
class HeaderNav extends React.Component {
   constructor(){
	   super();
	   this.state = {
		   collapsed : true
	   }
   }
	
	toggleCollapse(){
		this.setState({collapsed: !this.state.collapsed});
	}
	
	render() {
	
	let navClass = this.state.collapsed ? "collapse" : "";	
		
      return (
         <nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
			<div className="navbar-header">
			  <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			  </button>
			  <a className="navbar-brand" href="#">Food Report</a>
			</div>

			  
			<div className={"navbar-collapse " + navClass}>
			 <ul className="nav navbar-nav navbar-right">
				 <li><Link to="/" >Home</Link></li>
				 <li><Link to="favourite" >Favourite</Link></li>
				
				
			  </ul>
			</div> 
		  </div> 
		</nav>
      );
   }
}

export default HeaderNav;
