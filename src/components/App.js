import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    // we declare state at the parent component so we can pass the data up and down between components with any deep level
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        const fishes = {...this.state.fishes};

        fishes[`fishes${Date.now()}`] = fish;

        this.setState({ fishes });
    }

    handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <button onClick={this.handleGoBack}>Back</button>
                </div>

                <Order />
                <Inventory addFish={this.addFish} />
            </div>  
        )
    }
}

export default App;