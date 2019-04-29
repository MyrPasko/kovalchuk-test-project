import React, { Component } from 'react';
import './App.css';
import Test from "./components/Test";

class App extends Component {
    state = {
        counter: 0,
        isVisible: true,
    };

    onChangeNumberHandler = () => {
        this.setState(({counter}) => ({counter: ++counter}));
    };

    changeVisibilityHandler = () => {
        this.setState(({isVisible}) => ({isVisible: !isVisible}));
    };

    render() {
        const { counter, isVisible } = this.state;

        return (
            <div className="App">
                {isVisible && <Test
                    number={counter}
                    changeNumber={this.onChangeNumberHandler}
                />}
                <button onClick={this.changeVisibilityHandler}>Change visibility</button>
            </div>
        );
    }
}

export default App;
