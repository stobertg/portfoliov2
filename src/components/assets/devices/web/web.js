
import React from 'react'
import DeviceBrowser from '../shared/browser/browser'
import './style.scss'

const Website = ( props ) => {
	return(
		
		<div className="device__web">
		  <div className="device__web--contain">
		  	<DeviceBrowser url={ props.url } />

		  	{ props.image
		  		? <img
		  				alt={ props.imageAlt }
				      src={ props.image }
		  			/>

		  		: <div>{ props.children }</div>
		  	}
		  </div>
		</div>
		
	)
}

export default Website