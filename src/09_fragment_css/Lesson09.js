import React, { Component, Fragment } from 'react';
import './styles.css';

// Array
// const Columns = () => ([
//     <td key="1">Hello</td>,
//     <td key="2">world</td>
// ]);

const styles = {color: 'red', textTransform: 'uppercase'};
// Fragment
const Columns = () => (
    <Fragment>
        <td style={styles}>Inline</td>
        <td className="title">Simple class</td>
    </Fragment>
);

class Table extends Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <Columns />
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
