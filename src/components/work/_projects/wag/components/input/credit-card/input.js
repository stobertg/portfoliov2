import React from 'react'
import styles from "./style.scss"

// Components needed

import { PaymentInputsContainer, PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

class InputCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false,
			value: this.props.value
		}
	}

	// Set the active state 
  // Animate the label and change the outline of the input field

	focusIn(){
		this.setState({ active: true })
	}

	// Remove the styling on focus out
	// This also will return the label if there is nothing in the input or throw an error if input is required

	focusOut(){
		this.setState({ active: false })
	}

	render() {
		return(

      	<div 
					className={`input__contain ${this.props.cardImg ? 'input__payment':''} ${this.state.active ? 'input__contain--active':''} ${this.props.small ? 'input__contain--small':''}`}
					onFocus={() => this.focusIn()}
        	onBlur={() => {

        		if(this.state.value === ''){
        			this.setState({ active: false });
        		}
        		else{
        			this.setState({ active: true });
        		}

        	}}>

        	{this.props.cardImg
        		? <span className="input__payment--card">
		      			<svg {...this.props.cardImg} />
		      		</span>

		      	: null
        	}

      		<label htmlFor={this.props.id}>{this.props.name}</label>

        	<input 
        		{...this.props.paymentType}
        		value={this.state.value}
        		id={this.props.id}
        		name={this.props.name}
        		placeholder={this.props.placeholder}
        	/>
        </div>

		)
	}
}

export default InputCard