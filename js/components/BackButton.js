import React from 'react';
import ReactDOM from 'react-dom';

// BackButton Class created which extends component from class "React"
class BackButton extends React.Component {
	handleBack(){
		window.history.back();
	}
	
	render(){
		return(
			<div className="container">
				<a className="btn btn-info" onClick={this.handleBack.bind(this)}>Back</a>
			</div>
		);
	}
}

export default BackButton;
