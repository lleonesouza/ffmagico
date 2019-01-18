import React, { Component } from 'react'
import './contact_form.css'

export default class contact_form extends Component {
    render() {
        return (
            <div id="contact_form">
                
                <div className="wrapper">

                    <div className="company">
                        <h3>Como me encontrar?</h3>
                        <ul>
                        <br />

                        <li>  <i class="fas fa-phone"></i> FACE</li>
                            <br />
                            <li>  <i class="fas fa-road"></i> INSTA</li>
                            <br />
                            <li>  <i class="fas fa-phone"></i>  (555) 556-546</li>
                            <br />
                            <li>  <i class="fas fa-envelope"></i> teste@gmail.com</li>
                        </ul>
                    </div>

                    <div className="contact">
                        <h3>Envie um Email</h3>

                        <form action="https://formspree.io/felipecunhafaccioli@gmail.com" method="POST">
                            <p>
                                <label>Nome:</label>
                                <input type="text" name="name" />
                            </p>
                            <p>
                                <label>Email:</label>
                                <input type="text" name="email" />
                            </p>
                            <p>
                                <label>Companhia:</label>
                                <input type="text" name="company" />
                            </p>
                            <p>
                                <label>Celular: </label>
                                <input type="text" name="phone" />
                            </p>
                            <p className="full">
                                <label> Mensagem: </label>
                                <textarea rows="5" name="message" />
                            </p>
                            <p className="full button">
                                <button type="submit">Enviar</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
