import React from 'react'
import DeviceBrowser from '../shared/browser/browser'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
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