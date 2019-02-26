import React, { Component } from 'react'
import video from './video.mp4'
import video2 from './video02.mp4'
import './style.css'
import DownArrow from '../downArrow/down_arrow'


export default class header_full_video extends Component {
  render() {
    return (
      <div className="v-header container">
        <div className="fullscreen">
            <video src={video2} autoPlay muted loop/>
        </div>

        <div className="overlay"/>

        <div className="header-content">
            
        </div>
      </div>
    )
  }
}
