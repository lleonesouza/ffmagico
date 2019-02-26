import React, { Component } from 'react'
import './contact_form.css'

export default class contact_form extends Component {
    render() {

        let ChangeClass = 'slide-drawer';

        if (this.props.open) {
            ChangeClass = 'slide-drawer open';
        }

        return (
            <div id="contact_form" className={ChangeClass}>

                <div className="wrapper">

                    <div className="company">
                        <h3>Como me encontrar?</h3>
                        <ul>
                            <br />

                            <li>
                                <i class="fab fa-facebook"></i> <a href="https://www.facebook.com/felipe.faccioli.9"> facebook/ </a>
                            </li>
                            <br />
                            <li>
                                <i class="fab fa-instagram"></i> <a href="https://www.instagram.com/ffmagico/"> instagram/</a>
                            </li>
                            <br />
                            <li>
                            <i class="fab fa-whatsapp"></i>  (19) 55555-5555
                                 </li>
                            <br />
                            <li>
                                <i class="fas fa-envelope"></i> felipecunhafaccioli@gmail.com
                                </li>
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
