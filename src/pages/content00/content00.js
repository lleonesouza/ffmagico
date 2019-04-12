import React from 'react'
import Card from '../../components/card/card'

export default function content00() {
  return (
    <div className="grid-content0" id="types">

      <br /><br />

      <div className="title">
        
        <h1><hr width="70%" />EVENTOS<hr width="100%" /></h1>

      </div>

      <div className="content">
          <Card  title="Mágica CARA a CARA!" subtitle="" description="Sem mangas, luzes ou assistentes... Felipe circula entre os convidados e a mágica acontece Cara a Cara diante de seus olhos" background={require("../../src/cards/cara.jpg")} />

          <Card title="Corporativo" subtitle="" description="Ideal para fazer seus funcionários e/ou colaboradores pensarem fora da caixa ! Deixe seus clientes surpreendidos com mágicas incríveis e adequadas em seu próximo evento" background={require("../../src/cards/corporativo_new.jpg")} />

          <Card  title="Intervenções" subtitle="" description="Torne sua festa uma experiência inesquecível ! Me misturo entre os convidados, socializo e quebro o gelo de forma dinâmica, moderna e elegante !" background={require("../../src/cards/eventos.jpg")} />

          <Card  title="Festas Particulares" subtitle="" description="Uma atração totalmente diferenciada para seu festival ! Felipe se mistura entre o público e quando menos se espera, BOOM!! Mágica Cara-a-Cara bem diante dos seus olhos !" background={require("../../src/cards/particulares2.jpg")} />
      </div>

    </div>
  )
}

