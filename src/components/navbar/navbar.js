import React from 'react'

//components
import Logo from './logo'
import List from './list'
import SideNav from '../sideNav/sideNav'



import './navbar.css'

const navbar = props => (

        <nav className="nav">


                <hr width="40px" />

                < Logo />


                <h1 className="text"> Felipe Faccioli </h1>
                <hr width="350px" />

                < List />



                <hr width="500px" />

                <div className="side_nav">
                <hr width="100px" />
                        < SideNav />
                        <hr width="100px" />
                </div>


        </nav>

);

export default navbar;