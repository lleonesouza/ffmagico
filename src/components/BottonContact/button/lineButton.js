import React from 'react';
import './../sideNav.css'

const lineButton = props => (
    <button className="t-button" onClick={props.toggle}>
        <div className="title">
          <h1><hr width="70%" />ENTRE EM CONTATO<hr width="70%" /></h1>
      </div>
    </button>
);

export default lineButton;