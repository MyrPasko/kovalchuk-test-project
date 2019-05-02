import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import App from "./08_lists/Lesson08";
import Table from "./09_fragment_css/Lesson09";
// import { Button, Counter, Lesson } from "./05_props/Lesson";

// ReactDOM.render(<Lesson child={<Button/>}><Counter/></Lesson>, document.getElementById('root'));
ReactDOM.render(<Table />, document.getElementById('root'));
registerServiceWorker();
