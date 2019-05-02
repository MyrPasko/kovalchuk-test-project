import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter, func, number, string }) => {
    console.log(counter, func, number, string);

    return (
        <h1>
            {`Counter component. Counter value is: ${counter}`}
        </h1>
    );
};

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    func: PropTypes.func,
    number: PropTypes.number,
    string: PropTypes.string,
};

Counter.defaultProps = {
    func: () => {},
    number: 0,
    string: '',
};

export default Counter;
