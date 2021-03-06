
import React from 'react'
import Phone from '../../../../../assets/devices/iphone/iphone'
import CardiActEmergency from '../emergency/emergency'
import CardiActStatic from '../static/static'
import symbolDefs from '../../../../../../images/cardiact/icons/symbol-defs.svg'
import "./style.scss"

const CardiAct = ( props ) => {
	return (

		<Phone white={ true }>

			{ props.transition 
				? <div className="cardiact__transition">
						<span className="icon icon__sm icon__victim">
							<svg><use xlinkHref={`${symbolDefs}#icon__victim`}></use></svg>
			      </span>
					</div> 

				: null
			}

			{ props.emergencyMode 
				? <CardiActEmergency 
				  	showMapText={() => props.showMapText()}
			    	showStatusText={() => props.showStatusText()}
			    	showChatText={() => props.showChatText()}
			    	showConfirmText={() => props.showConfirmText()}
			    	removeConfirmText={() => props.removeConfirmText()}
				  /> 

				: null
			}

			{props.staticMode 
				? <CardiActStatic 
						showStatusText={() => props.showStaticStatusText()}
						showContactsText={() => props.showStaticContactsText()}
						showProfileText={() => props.showStaticProfileText()}
					/> 

				: null
			}
		</Phone>

	)
}

export default CardiAct