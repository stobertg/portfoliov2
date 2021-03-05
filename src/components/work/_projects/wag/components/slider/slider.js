import React from 'react'
import styles from "./style.scss"

class Slider extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: this.props.value,
			minValue: this.props.minValue,
			maxValue: this.props.maxValue
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({ 
			value: event.target.value 
		});
	}

	render() {
		return (
		  
		  <div className="slider" style={{ maxWidth: "400px" }}>

		  	<label 
		  		id="selector"
		  		htmlFor="slider"
		  	>
		  		<strong>{this.props.label}</strong>
		  	</label>

		  	<input 
		  		id="slider"
		  		name="slider"
		  		type="range" 
		  		role="slider"
		  		min={this.state.minValue} 
		  		max={this.state.maxValue} 
		  		value={this.state.value} 
		  		onChange={this.handleChange}
		  	/>

		  	<div className="slider__numbers">
		  		<span className="slider__numbers--range">
		  			<strong>Min: {this.state.minValue}</strong>
		  		</span>

		  		<input 
		  			type="number"
		  			value={this.state.value} 
		  			onChange={this.handleChange}
		  			min={this.state.minValue} 
		  			max={this.state.maxValue} 
		  			pattern="[0-9]*"
		  		/>

			  	<span className="slider__numbers--range">
			  		<strong>Max: {this.state.maxValue}</strong>
			  	</span>
		  	</div>

			</div>

		)
	}
}

export default Slider
