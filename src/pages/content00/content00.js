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
    
        <Card title="Eventos corporativos" description="Eventos em Reuinões e Eventos" background={require("../../src/type3.png")} />

        <Card title="Mágica cara-a-cara!" description="Mágica frente a frente, da maneira old school" background={require("../../src/type1.png")} />

        <Card title="Intervenções" description="Intervenções em eventos e festivais" background={require("../../src/type2.png")} />

        <Card title="Festas particulares" description="Em festas particulares" background={require("../../src/type4.png")} />
        
      </div>
      
    </div>
  )
}

