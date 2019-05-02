import React, { Component } from 'react';
import PropTypes from 'prop-types';

// //For component
// Component.propTypes = {
//     node: PropTypes.node,
// };
//
// //For element
// Component.propTypes = {
//     element: PropTypes.element,
// };
//
// //Instance of
// Component.propTypes = {
//     instance: PropTypes.instanceOf(Constructor),
// };
//
// //List of validators, when type of data can change
// Component.propTypes = {
//     elem: PropTypes.oneOf(['val1', 'val2']),
// };
//
// Component.propTypes = {
//     elem: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//     ])
// };
//
// //Array of / Object of:
// Component.propTypes = {
//     array: PropTypes.arrayOf(PropTypes.string),
//     object: PropTypes.objectOf(PropTypes.number),
// };
//
// //Shape
// Component.propTypes = {
//     elem: PropTypes.shape({
//         color: PropTypes.string,
//         fontSize: PropTypes.number,
//         lineHeight: PropTypes.number,
//     })
// };

export const Counter = ({ counter = 0 }) => {
    return (
        <h1>
            {`Counter component. Counter value is: ${counter}`}
        </h1>
    );
};

export const Button = (props) => {
    return (
        <button disabled>Simple button</button>
    )
}

export class Lesson extends Component {
    static propTypes = {
        children: PropTypes.element,
    };

    static defaultProps = {
        children: null,
    };

    state = {
        counter: 0,
    };

    handleClick = () => {
        this.setState(({ counter }) => {
            return {counter: ++counter}
        });
    }

    render() {
        const { counter } = this.state;
        const { children, child } = this.props;

        return (
            <>
                <div>{counter}</div>
                {/*<Counter*/}
                {/*    counter={counter}*/}
                {/*    func={() => {}}*/}
                {/*    number={1}*/}
                {/*    string={'str'}*/}
                {/*/>*/}
                {child}
                {children}
                {React.cloneElement(children, {counter: counter})}
                <button onClick={this.handleClick}>++1</button>
            </>
        )
    }
}
