import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// constructor() {
	// 	super();

	// 	this.goToStore = this.goToStore.bind(this);
	// }

	myInput = React.createRef();

	// we use arrow function to automatically bind our custom methods to storePicker class
	// the other way without arro function is we can make constructor and do binding dance but it will get muddy if we have bunch of custom methods
	goToStore = e => {
		// 1. we stop default action when submitting form
		e.preventDefault();

		// 2. we grab value from the input
		const storeName = this.myInput.value.value;

		// 3. change the page to /store/whatever-they-entered
		this.props.history.push(`/store/${storeName}`);

		
	}

	render() {
		console.log(this);
		return (
			<Fragment>
				<form action="" className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter A Store</h2>

					<input type="text" 
						placeholder="Store Name"
						ref={this.myInput} 
						required 
						defaultValue={ getFunName() }
					/>

					<button type="submit">Visit Store → </button>
				</form>	
			</Fragment>
			
		);
	}
}

export default StorePicker;