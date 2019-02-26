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

          <Card  description="Eventos em Reuinões e Eventos" background={require("../../src/cards/corporativo.png")} />

          <Card  description="Mágica CARA a CARA!" background={require("../../src/type1.png")} />

          <Card  description="Intervenções em eventos e festivais" background={require("../../src/cards/eventos.jpg")} />

          <Card  description="Em festas particulares" background={require("../../src/cards/particulares2.jpg")} />

      </div>

    </div>
  )
}

