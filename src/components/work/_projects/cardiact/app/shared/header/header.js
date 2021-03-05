import React, { useState } from 'react'
import VictimCard from '../victim/card/card'
import "./style.scss"

const CardiHeader = ( props ) => {
  const [ selected, setSelected ] = useState( false )
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