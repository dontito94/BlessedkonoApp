import React from 'react';
import ReactDOM from 'react-dom';

class Blessedkono extends React.Component {
	constructor(props){
		super(props);
		this.state = {brand:"BlessedkonoApp"};
	}
	changeName =() => {
		this.setState({brand:"next BlessedkonoApp"})
	}
  render() {
    return(
    	<div>
    	<h1>{this.state.brand}</h1>
    	<button type="button" onClick = {this.changeName}>Change Name</button>
    	</div>
    	) 
  }
}

export default Blessedkono;

/*
Notice that you now have three files in your project:
"App.js", "index.js", and "index.html".
*/
