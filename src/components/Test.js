import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            number: props.number,
        };

        console.log('[Constructor]');
    }

    static getDerivedStateFromProps() {
        console.log('[Get Derived State From Props]');
    }

    componentDidMount() {
        console.log('[Component Did Mount]');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.number === 5) {
            console.log('[Should Comp Update]', 'No');
            return false;
        }
        if (this.props.number < nextProps.number) {
            console.log('[Should Comp Update]', 'Yes');
            return true;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Get Snapshot Before Update]');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Component Did Update]');
    }

    componentWillUnmount() {
        console.log('[Component Will Unmount]');
    }

    render() {
        const { number, changeNumber } = this.props;
        
        console.log('[Render]');
        
        return (
            <div>
                {number}
                <button onClick={changeNumber}>Change Number</button>
            </div>
        );
    }
}

export default Test;
