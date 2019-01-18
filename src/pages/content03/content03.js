import React, { Component } from 'react'
import EmailForm from '../../components/contact-form/contact_form'

export default class content03 extends Component {
  render() {
    return (
      <div className="content03" id="content03">

      <div className="title">
          <h1><hr width="70%" />ENTRE EM CONTATO<hr width="100%" /></h1>
      </div>

        < EmailForm/>
      </div>
    )
  }
}
