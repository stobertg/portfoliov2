import React from 'react'
import styles from "./style.scss"

// Components needed

class LoadingDots extends React.Component {
	render() {
		return (
		 
		 	<div className="loading__dots--contain"> 
			  <div className="loading__dots">
			  	<span className="dot__blue--light"></span>
			  	<span className="dot__blue--mid"></span>
			  	<span className="dot__blue--dark"></span>
			  </div>

			  { this.props.loadingText
	  			? <div className="loading__dots--text">
	  					<strong>{ this.props.loadingText }</strong>
	  				</div>

	  			: null
	  		}
			</div>

		)
	}
}

export default LoadingDots
