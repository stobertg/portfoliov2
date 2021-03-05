import React from 'react'
import Icon from '../icon/icon'
import TooltipModal from "./modal"
import './style.scss'


class Tooltip extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
	}

	showTooltip(){
		this.setState({expanded: true});
	}

	hideTooltip(){
		this.setState({expanded: false});
	}

	render() {
		return (
		
			<div className="tooltip__contain">
			  <button 
			  	className={`tooltip tooltip__${this.props.placement}`} 
			  	aria-expanded={this.state.expanded}
			  	onMouseEnter={() => this.showTooltip()}
			  	onMouseLeave={() => this.hideTooltip()}
			  	onFocus={() => this.showTooltip()}
			  	onBlur={() => this.hideTooltip()}>
			  	
			  	<Icon title="tooltip icon" icon="question-mark" />
			    <TooltipModal text={this.props.text} />
			  </button>

			  {this.props.title
			  	? <span><strong>{this.props.title}</strong></span>
			  	: null
			  }
			</div>

		)
	}
}

export default Tooltip
