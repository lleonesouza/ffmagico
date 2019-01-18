import React, { Component } from 'react'
import "./footer.css"

export default class footer extends Component {
  render() {
    return (
      <div id="footer">
            <div className="one">
            
            </div>
            <div className="two">

            <a href=""><i class="fab fa-facebook fa-3x"></i></a>

            <hr width="30px"/>

            <a href=""><i class="fab fa-instagram fa-3x"></i></a>

            <hr width="30px"/>

            <a href=""><i class="fab fa-youtube fa-3x"></i></a>

            </div>
            <div className="three">
                <ul>
                    <li><a href="#header">Inicio</a></li>
                    <li><a href="#types">Trabalhos</a></li>
                    <li><a href="#content01">Sobre</a></li>
                    <li><a href="#content03">Contato</a></li>
                </ul>
                <h3>mapa do site</h3>
            </div> 
            <div className="four">
                <p>felipefaccioli@gmail.com</p>
                <p>(19) 99954-8456</p>
            </div>
            <div className="five">
                <h5>copyright @  2019</h5>            
            </div>
      </div>
    )
  }
}
