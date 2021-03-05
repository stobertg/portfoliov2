import React from 'react'
import DeviceBrowser from '../shared/browser/browser'
import "./style.scss"

class Tablet extends React.Component {
	render() {
		return (

			<div className="ipad__contain">		  
			  <div className="ipad">
		  		<div className="ipad__screen">
		  			<DeviceBrowser />
		  			<img src="/wag/gui-hero.png" />
		  		</div>

		  		<div className="ipad__side"></div>
		  		<div className="ipad__bottom"></div>
		  	</div>
		  </div>

		)
	}
}

export default Tablet