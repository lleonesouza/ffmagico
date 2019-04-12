import React, { Component } from 'react'
import "./footer.css"
import Top from './src/top'
import Bottom from './src/bottom'
import Center from './src/center'

export default class footer extends Component {
  render() {
    return (
      <div id="footer">

          
          
           < Center />

           <hr width="100%"/>

            < Bottom />
      </div>
    )
  }
}
