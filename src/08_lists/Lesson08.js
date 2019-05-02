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

const people = ['Jack', 'Max', 'Leo', 'Alex'];

const TABS_BTN = [
    {
        dataName: 1,
        title: 'Tab1',
        icon: '+',
    },
    {
        dataName: 2,
        title: 'Tab2',
        icon: '-',
    },
    {
        dataName: 3,
        title: 'Tab3',
        icon: '*',
    }
];


class App extends Component {
    state = {
        activeTab: 1,
    };

    handleTab = (e) => {
        this.setState({activeTab: +e.target.getAttribute('data-name')});
    };

    render() {
        console.log(this.state);
        const { activeTab } = this.state;

        return (
            <>
                {/*<button data-name={1} onClick={this.handleTab}>Tab1</button>*/}
                {/*<button data-name={2} onClick={this.handleTab}>Tab2</button>*/}
                {/*<button data-name={3} onClick={this.handleTab}>Tab3</button>*/}
                {TABS_BTN.map(({ dataName, title, icon }) => {
                    return (
                        <button
                            key={`${dataName}-${title}`}
                            data-name={dataName}
                            onClick={this.handleTab}
                        >{icon}{title}</button>)
                })}
                {activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/>}
                <div>
                    {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
                </div>
                <ul>
                    {people.map((person, index) => {
                        return (<li key={index}>{person}</li>)
                    })}
                </ul>
            </>
        );
    }
}

export default App;
