import React from 'react'
import Accordion from '../accordion/accordion'
import './style.scss'

class Drawer extends React.Component {
  render() {
    return(

      <Accordion 
        panels={[
          { 
            title: this.props.title, 
            content: this.props.content
          }
        ]}
      />

    )
  }
}

export default Drawer