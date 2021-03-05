import React from 'react'
import styles from "./style.scss"

class PresentationTitle extends React.Component {
	render() {
		return (
			
		  <div className="stage__text--title">
		  	<div className={`stage__text--mode ${this.props.switchMode ? 'stage__text--mode-switch':''}`}>
    			<strong>{this.props.firstMode}</strong><strong>{this.props.secondMode}</strong>
    		</div>

		  	{this.props.children}
		  </div>

		)
	}
}

export default PresentationTitle