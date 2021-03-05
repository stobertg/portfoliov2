import React from 'react'
import styles from "./style.scss"
import symbolDefs from '../../../../../../../../../images/cardiact/icons/symbol-defs.svg'

const MapRouteOne = ( props ) => (
  
  <div className="route__main">
	  <span className="route route__right"></span>
	  <span className="route route__top"></span>
	  <span className="route route__left"></span>

	  <span className="route__user">
	    <span className="icon icon__nav icon__direction">
	      <svg><use xlinkHref={`${symbolDefs}#icon__nav`}></use></svg>
	    </span>
	  </span>

	  <span className="pin__victim">
	    <span className="icon icon__sm icon__victim">
        <svg><use xlinkHref={`${symbolDefs}#icon__victim`}></use></svg>
      </span>
	  </span>
	</div>
            
)

export default MapRouteOne