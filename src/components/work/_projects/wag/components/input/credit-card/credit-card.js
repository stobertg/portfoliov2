import React from 'react'
import { PaymentInputsContainer, PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import InputCard from './input'
import InputAlerts from '../alerts/alerts'
import './style.scss'

class InputPayment extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false,
			value: ''
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

			<PaymentInputsContainer>
	      {({ meta, zipCode, handleChangeZipCode, handleChangeCardNumber, getZIPProps, handleBlur, handleChange, cardNumber, expiryDate, getCardImageProps, handleChangeExpiryDate, handleChangeCVC, cvc, getCardNumberProps, getExpiryDateProps, getCVCProps }) => (
	      	
	      	<div className="input__wrap input__wrap--payment">
		      	<InputCard
		      		name="Card number"
		      		id="card-num"
	      			value={cardNumber}
	      			cardImg={getCardImageProps({ images })}
	      			paymentType={getCardNumberProps({ onChange: handleChangeCardNumber })} 
	        		placeholder={null}
		      	/>

		      	<div className="input__wrap--card-info">
			      	<InputCard
			      		small
			      		name="Exp. Date"
			      		id="exp-date"
		      			value={expiryDate}
		      			paymentType={getExpiryDateProps({ onChange: handleChangeExpiryDate })} 
		      			placeholder="MM/YY"
			      	/>

			      	<InputCard
			      		small
			      		name="CVC"
			      		id="cvc"
		      			value={cvc}
		      			paymentType={getCVCProps({ onChange: handleChangeCVC })} 
		      			placeholder={null}
			      	/>
			      </div>

			      {meta.isTouched && meta.error && 
			      	<div className="input__descp">
					      <div className="input__descp--item">
						      <InputAlerts
						      	alert="error"
						      	alertText={meta.error}
						      />
						    </div>
						  </div>
					  }
	      
	      	</div>
	      )}
	    </PaymentInputsContainer>

		)
	}
}

export default InputPayment