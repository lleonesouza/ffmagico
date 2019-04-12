import React from 'react';
import './../sideNav.css'

const lineButton = props => (
    <button className="t-button ajust" onClick={props.toggle}>
        <div className="t-button-line"/>
        <div className="t-button-line"/>
        <div className="t-button-line"/>
    </button>
);

export default lineButton;