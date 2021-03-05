import React from 'react'
import "./style.scss"

const CardiButton = ( props ) => {
	return (

    <div className="btn btn__red" onClick={ props.onClick }>
      { props.iconAed 
        ? <span className="icon icon__sm icon__aed">
            <strong>AED</strong>
          </span> 

        : null
      }

      { props.iconNoAed 
        ? <span className="icon icon__sm icon__aed icon__aed--no">
            <strong>AED</strong>
          </span> 
        : null
      }

      <span><strong>{ props.title }</strong></span>
    </div>

	)
}

export default CardiButton
