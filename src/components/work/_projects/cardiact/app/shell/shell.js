import React from 'react'
import Phone from '../../../../../assets/devices/iphone/iphone'
import CardiHeader from '../shared/header/header'
import CardiActEmergency from '../emergency/emergency'
import CardiActStatic from '../static/static'
import symbolDefs from '../../../../../../images/cardiact/icons/symbol-defs.svg'
import "./style.scss"

class CardiAct extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	phoneInfoWhite: true,
    }
  }

  phoneInfoWhite() {
  	this.setState({ phoneInfoWhite: !this.state.phoneInfoWhite });
  }

	render() {
		return (

			<Phone 
				white={ this.state.phoneInfoWhite }
				>

				{ this.props.transition 
					? <div className="cardiact__transition">
							<span className="icon icon__sm icon__victim">
								<svg><use xlinkHref={`${symbolDefs}#icon__victim`}></use></svg>
				      </span>
						</div> 

					: null
				}

				{ this.props.emergencyMode 
					? <CardiActEmergency 
					  	phoneInfoWhite={() => this.phoneInfoWhite()}
					  	showMapText={() => this.props.showMapText()}
				    	showStatusText={() => this.props.showStatusText()}
				    	showChatText={() => this.props.showChatText()}
				    	showConfirmText={() => this.props.showConfirmText()}
				    	removeConfirmText={() => this.props.removeConfirmText()}
					  /> 

					: null
				}

				{this.props.staticMode 
					? <CardiActStatic 
							showStatusText={() => this.props.showStaticStatusText()}
							showContactsText={() => this.props.showStaticContactsText()}
							showProfileText={() => this.props.showStaticProfileText()}
						/> 

					: null
				}
			</Phone>

		)
	}
}

export default CardiAct