import React from 'react';
import AddFishForm from './AddFishForm';


class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Invtory</h2>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Sample Fish</button>
            </div>
        )
    }
}

export default Inventory;