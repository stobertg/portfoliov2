import React from 'react'
import AnimationHorse from '../assets/horse/horse'
import './style.scss'

class Preloader extends React.Component {
  render() {
    return (
      
      <div className="preloader">
        <AnimationHorse />
      </div>

    )
  }
}

export default Preloader
