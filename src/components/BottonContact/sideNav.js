import React, { Component } from 'react'

//Components

import Backdrop from './backDrop/backDrop'
import Sidenav from './sideDrawer/contact-form/contact_form'
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
            <div className="div_contact">

               

                < Sidenav open={this.state.sideOpen} />
                
                {hideBack}


                < Button toggle={this.toggle_button_handler}/>
            </div>
        )
    }
}

export default sidenav