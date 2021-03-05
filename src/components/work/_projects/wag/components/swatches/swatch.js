import React from 'react'
import TooltipModal from "../tooltips/modal"
import './style.scss'

class Swatch extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
	}

	showTooltip(){
		this.setState({ expanded: true });
	}

	hideTooltip(){
		this.setState({ expanded: false });
	}

	render() {
		return (
		  
		  <span 
		  	className="swatch"
		  	aria-expanded={this.state.expanded}
		  	onMouseEnter={() => this.showTooltip()}
		  	onMouseLeave={() => this.hideTooltip()}
		  	onFocus={() => this.showTooltip()}
		  	onBlur={() => this.hideTooltip()}>

  			<label htmlFor={this.props.id}>
					<TooltipModal text={this.props.text} />
				</label>

	  		<input 
	  			id={this.props.id}
	  			name="radio"
	  			type="radio"
	  		/>

	  		<div className="swatch__color">
			  	<div 
			  		className="swatch__color--hex"
		  			style={{background: `${this.props.hex}`}}>
					</div>
				</div>
		  </span>

		)
	}
}

export default Swatch
