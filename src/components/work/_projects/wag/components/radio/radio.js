import React from 'react'
import "./style.scss"

class Radio extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({ expanded: !this.state.selected });
	}

	render() {
		return (
		  
		  <div
		  	className={`radio ${this.props.disabled ? 'radio__disabled':''}`}
		  	disabled={this.props.disabled}
		  >

  			<label htmlFor={this.props.id}>
  				<span>{this.props.label}</span>
  			</label>

	  		<input 
	  			id={this.props.id}
	  			name="radio"
	  			type="radio"
	  			disabled={this.props.disabled}
	  			checked={this.props.checked}
	  		/>

	  		<span className="radio__btn"></span>
		  </div>

		)
	}
}

export default Radio
