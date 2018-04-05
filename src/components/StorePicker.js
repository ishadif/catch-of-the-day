import React, { Fragment } from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<Fragment>
				<form action="" className="store-selector">
					<h2>Please Enter A Store</h2>

					<input type="text" placeholder="Store Name" required/>
					<button type="submit">Visit Store → </button>
				</form>	
			</Fragment>
			
		);
	}
}

export default StorePicker;