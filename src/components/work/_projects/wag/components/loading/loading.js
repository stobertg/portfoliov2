import React from 'react'
import styles from "./style.scss"

import LoadingDots from './loading-dots'

// Components needed

class Loading extends React.Component {
	render() {
		return (
		  
		  <div className="loading">
		  	<div className="loading__graphic">
		  		<LoadingDots loadingText={this.props.loadingText} />
		  	</div>
		  </div>

		)
	}
}

export default Loading
