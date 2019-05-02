import React, { Component } from 'react';

const Welcome = (props) => {
    return (
        <h1>Hello from Welcome!</h1>
    )
}

class SuperWelcome extends Component {
    render() {
        return (
            <h1>Hello from SuperWelcome!!</h1>
        );
    }
}

class Lesson extends Component {
    render() {
        return (
            <div>
                <Welcome/>
                <SuperWelcome/>
            </div>
        );
    }
}

export default Lesson;
