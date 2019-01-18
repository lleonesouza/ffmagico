import React, { Component } from 'react'
import video from '../../src/fire.mov'
import Full_Video from '../../components/header-full-video/header_full_video'


export default class header extends Component {
    render() {
        return (
            <div className="header" id="header">
                < Full_Video />
            </div>
        )
    }
}
