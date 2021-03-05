import React from 'react'
import styles from "./style.scss"

// Components needed

import PresentationTitle from './title/title'

class PresentationText extends React.Component {
	render() {
		return (

		  <div className="stage__text">
		  	{this.props.children}
		  </div>

		)
	}
}

export default PresentationText