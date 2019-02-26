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
            <li> <a href="#header">Inicio</a> </li>
            <li> <a href="#types">Trabalhos</a> </li>
            <li> <a href="#content01">Sobre</a> </li>
            <li> <a href="#content03">Contato</a> </li>
        </ul>
    </nav>

    );
};


export default slideDrawer;