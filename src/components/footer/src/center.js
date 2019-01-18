import React from 'react'

export default function center() {
    return (
        <div className="footer_center">
            <div className="left">
                <p>redes sociais</p>

                <div className="social_media">
                    <a href=""><i class="fab fa-whatsapp fa-2x"></i></a> 
                    <hr width="15px"/>
                    <a href=""><i class="fab fa-facebook fa-2x"></i></a>
                    <hr width="15px"/>
                    <a href=""><i class="fab fa-instagram fa-2x"></i></a>
                    <hr width="15px"/>
                    <a href=""> <i class="fab fa-youtube fa-2x"></i></a>
                </div>
                
         

            </div>


            <div className="center">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Trabalhos</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
                <h3>MAPA</h3>
            </div>

            <div className="right">
                <h3>
                    <a href="www.ffmagico.com.br">www.ffmagico.com.br</a>
                    <hr width="50%" />
                </h3>
            </div>

        </div>
    )
}
