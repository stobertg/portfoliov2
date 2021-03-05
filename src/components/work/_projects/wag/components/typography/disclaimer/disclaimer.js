import React from 'react'
import './style.scss'

class Disclaimer extends React.Component { 
  render(){
    return(

      <div className="text__disclaimer">
        <span>{this.props.children}</span>
      </div>

    )
  }
}

export default Disclaimer
