import React, { Component } from 'react'

//Components

import Backdrop from './backDrop/backDrop'
import Sidenav from './sideDrawer/sideDrawer'
import Button from './button/lineButton'


class sidenav extends Component {
    state = {
        sideOpen: false
    };

    toggle_button_handler = () => {
        this.setState((prevState) => {
            return { sideOpen: !prevState.sideOpen };
        })
    }

    hide_back_handler = () => {
        this.setState({ sideOpen: false })
    }

    render() {
        let hideBack
        if (this.state.sideOpen){
            hideBack = < Backdrop click={this.hide_back_handler} />
        }   

        return (
            <div>

                < Button toggle={this.toggle_button_handler}/>

                < Sidenav open={this.state.sideOpen} />
                
                {hideBack}

            </div>
        )
    }
}

export default sidenav