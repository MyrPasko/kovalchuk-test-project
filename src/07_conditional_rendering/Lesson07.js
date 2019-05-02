import React, { Component } from 'react';

const Tab1 = () => (
    <h1>Text of Tab1</h1>
);

const Tab2 = () => (
    <h1>Text of Tab2</h1>
);

const Tab3 = () => (
    <h1>Text of Tab3</h1>
);

class App extends Component {
    state = {
        activeTab: 1,
    };

    handleTab = (e) => {
        this.setState({activeTab: +e.target.getAttribute('data-name')});
        // this.setState({activeTab: e.target.innerText});
    };

    render() {
        console.log(this.state);
        const { activeTab } = this.state;

        return (
            <>
                <button data-name={1} onClick={this.handleTab}>Tab1</button>
                <button data-name={2} onClick={this.handleTab}>Tab2</button>
                <button data-name={3} onClick={this.handleTab}>Tab3</button>
                {activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/>}
            </>
        );
    }
}

export default App;
