import React, { Component } from 'react'
import './flip_card.css'

export default class flip_card extends Component {
  render() {
    return (
      <div className="card">
          <div className="content">
                <div className="front">

                    <h2 className="title">Mágica Cara-a-Cara</h2>
                    <p className="subtitle">Time for fun</p>

                </div>
                <div className="back">

                    <p className="back-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod illum aspernatur eos labore perferendis amet temporibus modi, explicabo vel atque. Adipisci doloribus dolore optio nulla. Nobis ducimus est recusandae laudantium!</p>

                </div>
          </div>
      </div>
    )
  }
}
