import React from 'react'
import styles from "./style.scss"

class PriceInline extends React.Component {
	render() {
		return (

	  	<div className="price__inline">	
	  		{this.props.children}
		  </div>

		)
	}
}

export default PriceInline
