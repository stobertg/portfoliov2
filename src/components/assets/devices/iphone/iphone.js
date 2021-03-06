
import React from 'react'
import DeviceHeader from '../shared/header/header'
import "./style.scss"

const Phone = ( props ) => {
	return (
	  
	  <div className="iphone">
      <div className="iphone__top">
        <div className="iphone__speaker"><span></span></div>
        <DeviceHeader white />
      </div>

      <div className="iphone__screen">
      	{ props.children }

				<div className="iphone__bottom"><div></div></div>
    	</div>
    </div>

	)
}

export default Phone
