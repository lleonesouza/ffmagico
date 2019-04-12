import React from 'react'

//components
import Logo from './logo'
import List from './list'
import SideNav from '../sideNav/sideNav'



import './navbar.css'

const navbar = props => (

        <nav className="nav">




                < Logo />

                <div className="social">
                        <a href="https://wa.me/5519997394489"><i class="fab fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/ffmagico/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/ffmagico"><i class="fab fa-facebook"></i></a>
                </div>

                <h1 className="text"> </h1>
        

                < List />



                

                <div className="side_nav">
                <hr width="100px" />
                        < SideNav />
                        <hr width="100px" />
                </div>


        </nav>

);

export default navbar;