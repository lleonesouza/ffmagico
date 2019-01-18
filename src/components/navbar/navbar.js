import React from 'react'

//components
import Logo from './logo'
import List from './list'



import './navbar.css'

const navbar = props => (
    
        <nav className="nav">


                <hr width="40px"/>

             < Logo />

             

             <hr width="370px"/>
             
            < List />

            <hr width="500px"/>
           

        </nav>
    
);

export default navbar;