
import React from 'react'
import styles from "./style.scss"

class TooltipModal extends React.Component {
	render() {
		return (
			
	    <span className="tooltip__modal">
    		<p>{this.props.text}</p>
	    </span>

		)
	}
}

export default TooltipModal
