import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
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
                <Inventory />
            </div>  
        )
    }
}

export default App;