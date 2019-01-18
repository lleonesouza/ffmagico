import React, { Component } from 'react'
import { Spring } from 'react-spring'
import './card.css'

export default class card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            description: props.description,
            background: props.background
        }
    }
    
    render() {
        const style = {
            background: `url(${this.state.background})`,
        }

        const front =
            <div className="front" style={style}>
                <h1 className="title">{this.state.title}</h1>
                <h2 className="subtitle">{this.state.subtitle}</h2>
            </div>

        const back =
            <div className="back">

                <p className="description">{this.state.description}</p>

            </div>


        return (
            <Spring config={{ duration: 1000 }}
                delay={3000}
                from={{ opacity: 0, transform: "translate(-100px)" }}
                to={{ opacity: 1, transform: "translate(0px)" }}>
                {props =>
                    <div id="card" style={props}>
                        <div className="content">
                            {front}
                            {back}
                        </div>
                    </div>
                }
            </Spring>

        )
    }
}
