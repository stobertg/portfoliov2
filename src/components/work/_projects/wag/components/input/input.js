import React from 'react'
import Icon from '../icon/icon'
import Button from '../buttons/general/button'
import InputAlerts from './alerts/alerts'
import Tooltip from '../tooltips/tooltips'
import './style.scss'

class Input extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false,
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.dateNumChange = this.dateNumChange.bind(this);
		this.phoneNumChange = this.phoneNumChange.bind(this);
		this.keyPressFunc = this.keyPressFunc.bind(this) 
	}

	// For genral value change

	handleChange(e) {
		let str = e.target.value;
    str = str.replace(/^\s+/, '');
    this.setState({ value: str});
  }

  // For the date input value change

  dateNumChange(e) {
    let val = e.target.value;
      if (val.length === 2) {
        val += '/';
      } else if (val.length === 5) {
        val += '/';
      }

      this.setState({
        value: val
      });
  }

  // For the Date input

  keyPressFunc(e) {
    if(e.which === 8) {
      var val = this.state.value;
      if(val.length == 3 || val.length == 6) {
        val = val.slice(0, val.length-1);
        this.setState({value: val})
      }
    }
  }

  phoneNumChange(e) {
    let phone = e.target.value;
      if (phone.length === 3) {
        phone += '-';
      } else if (phone.length === 7) {
        phone += '-';
      }

      this.setState({
        value: phone
      });
  }

  // For the Date input

  phoneKeyPressFunc(e) {
    if(e.which === 8) {
      var phone = this.state.value;
      if(phone.length == 4 || phone.length == 8) {
        phone = phone.slice(0, phone.length-1);
        this.setState({value: phone})
      }
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
		let state = this.state
		let props = this.props
		let alert = props.alert
		let alertText = props.alertText
		return (

			<div className={`input__wrap ${alert ? 'input__wrap--' + alert:''}`}>
				<div className="input__content">

					{ /* For the master container that holds all of content possible within the input */ }

					<div 
						className={`input__contain ${state.active || state.value || props.value ? 'input__contain--active':''} ${props.small?'input__contain--small': ''}`}
						onFocus={() => this.focusIn()}
	        	onBlur={() => {

	        		// Conditional statement if the input is filled out or not when the user leaves the field
	        		// If the input is empty, set the original state, where the label goes back to center

	        		if(state.value === ''){
	        			this.setState({ active: false });
	        		}

	        		// If the input is filled in, set the label to sit above the text that has been entered

	        		else{
	        			this.setState({ active: true });
	        		}
	        	}}>

	        	{ /* -- Universal content within the input container 
	        			 The label and the input 													--*/ }

							<div>
								<label htmlFor={ props.id }>{ props.label }</label>

								{ props.type == "date-picker" 

									// The only unique case in our inputs is the date picker
									// Since we are using a third party component to do the work for us, we need the logic to accomodate

									? null

									// The logic is: unless the Datepicker is declared, show the input shared 
									// This input accounts for all other inputs besides the datepicker

									: <input 
						        	id={ props.id }
						        	size={ props.size }
						        	min={ props.min }
						        	max="1"
						        	maxLength={ props.max }
						        	type={ props.type }
						        	value={ state.value || props.value }
						        	placeholder={ props.placeholder }
						        	pattern={ props.pattern }
						        	required={ props.required }
						        	onKeyDown={() => {
						        		if(props.id == "date"){
						        			this.keyPressFunc.bind(this)
						        		}
						        		else if(props.id == "tel"){
						        			this.phoneNumChange.bind(this)
						        		}
											}}
						        	onChange={() => {
						        		if(props.id == "date"){
						        			this.dateNumChange.bind(this)
						        		}
						        		else if(props.id == "tel"){
						        			this.phoneNumChange.bind(this)
						        		}
						        		else if(props.id == "search"){
						        			this.props.onChange.bind(this)
						        		}
						        		else{
						        			this.handleChange.bind(this)
						        		}
											}}
											autoComplete={props.label}
						        />
					      }
				      </div>

			      {/* -- End universal content -- */}

		        {props.btn 

		        	// If there is a button on the right side of the input
		        	// This is places when the btn attr is declared in the <Input /> Component

		        	? <span>
					        <Button 
										title={this.props.btn}
					        	color="blue"
					        	onClick={props.onClick}
					        />
					      </span>

					    : null
			      }

			      {props.id == "search" ? 
							<span className="search__input--controls">
								{this.props.value < 1
									? null

									: <span className="search__input--btn">
				              <Button
				              	btnCircle
				              	color="ghost"
				              	icon="dismiss"
				              	ariaLabel="Clear the input and type a new search"
				              	onClick={this.props.clear}
				              />
			              </span>
								}

	              <span className="search__input--btn">
		              <Button
		              	btnCircle
		              	color="ghost"
		              	icon="search"
		              	ariaLabel={"Search" + ' ' + this.props.value}
		              	disabled={this.props.value < 1}
		              	onClick={this.props.onClick}
		              />
		             </span>
		          </span>: null
						}
		      </div>

		      {props.tooltip ? 

		      	// If there is a tooltip needed with the input - on the right of the input

		      	<Tooltip
						  placement="top"
						  text={props.tooltip}
						/>: null
					}
				</div>

				{props.inputDescp || alert ?

					// For the default text below input 
					// Input descriptions or alerts below the input

					<div className="input__descp">
						{props.inputDescp ?

							// This gives further description to the input (i.e. "password requirements")

							<div className="input__descp--item">
								<span>{props.inputDescp}</span>
							</div>: null
						}

			      {alert ? 

			      	// For the alert text if the input is filled out inccorectly

			      	<div className="input__descp--item">
					      <InputAlerts
					      	alert={alert}
					      	alertText={alertText}
					      />
					     </div>: null
			      }
					</div>:null
				}
			</div>

		)
	}
}

export default Input