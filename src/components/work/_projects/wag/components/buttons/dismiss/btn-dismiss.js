import React from 'react'
import './style.scss'
import Icon from '../../icon/icon'

class BtnDismiss extends React.Component {
	render() {
		return(
		  <button 
		  	className={`btn__dismiss ${this.props.size ? `btn__dismiss--${this.props.size}`:""}`} 
		  	onClick={this.props.onClick}
		  	aria-label={this.props.ariaLabel}
		  >
		  	
		  	<Icon 
		  		title="Dismiss"
		  		icon="close--v2" 
		  	/>
			</button>
		)
	}
}
export default BtnDismiss