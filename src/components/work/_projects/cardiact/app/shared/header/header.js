
import React from 'react'
import VictimCard from '../victim/card/card'
import "./style.scss"

const CardiHeader = ( props ) => {
	return (
	  
	  <div className="cardiact__header">
      <div className="cardiact__victim">
        <VictimCard />

        <div className="cardiact__nav">
          { props.children }
        </div>
      </div>
    </div>

	)
}

export default CardiHeader
