
import React from 'react'
import styles from "./style.scss"

class Toggle extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			toggleOn: this.props.toggleOn
		}
	}

	handleClick(){
		this.setState({ toggleOn: !this.state.toggleOn })
	}

	render() {
		return (
		  
		  <button 
		  	className="btn__toggle"
		  	type="button"
		  	role="switch"
		  	aria-pressed={`${this.state.toggleOn ? 'true':'false'}`}
		  	onClick={() => this.handleClick()}
		  	>

		  	<label htmlFor={this.props.id}>
			    <span className="btn__toggle--item"><strong>Off</strong></span>
		  		<span className="btn__toggle--item"><strong>On</strong></span>
			  </label>

		  	<input 
		  		type="checkbox" 
		  		id={this.props.id}
		  		name={this.props.id}
		  		tabIndex="-1"
		  		defaultChecked={this.state.toggleOn}
		  	/>
		  </button>

		)
	}
}

export default Toggle
