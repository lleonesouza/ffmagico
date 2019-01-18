import React from 'react';
import './../sideNav.css'

const slideDrawer = props => {

        let ChangeClass = 'slide-drawer';

        if (props.open) {
            ChangeClass = 'slide-drawer open';
        }


    return (
    <nav className={ChangeClass}>
        <ul>
            <li> <a href="">Products</a> </li>

            <li> <a href="">Users</a> </li>
        </ul>
    </nav>

    );
};


export default slideDrawer;