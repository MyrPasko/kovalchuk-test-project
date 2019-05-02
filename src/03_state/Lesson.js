import React, { Component } from 'react';
import Counter from "../04_props/Counter";

class CounterButton extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         counter: 0,
    //     }
    // }
    state = {
        counter: 0,
    };

    handleClick = () => {
        // this.setState((prevState) => {
        //     return {counter: ++prevState.counter};
        // });
        this.setState(({ counter }) => {
            return {counter: ++counter}
        });
    }

    render() {
        const { counter } = this.state;

        return (
            <>
                <div>{counter}</div>
                <Counter
                    counter={counter}
                    func={() => {}}
                    number={1}
                    string={'str'}
                />
                <button onClick={this.handleClick}>+1</button>
            </>
        )
    }
}

export default CounterButton;
