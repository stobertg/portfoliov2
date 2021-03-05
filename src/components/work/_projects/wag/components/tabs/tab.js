import React from 'react'
import './style.scss'

class Tab extends React.Component {
	render() {
		return (
		  
		  <button 
		  	className="tab" 
		  	aria-selected={this.props.selected ? "true":"false"}
		  	role="tab"
		  	data-tab={this.props.dataTab}
		  	onClick={this.props.onClick}
		  >

	  		<span>
	  			<strong>{this.props.label}</strong>
	  		</span>

	  		{this.props.subLabel 
	  			? <span>{this.props.subLabel}</span>
	  			: null
	  		}

		  </button>

		)
	}
}

export default Tab
