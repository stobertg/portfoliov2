import React from 'react'
import styles from "./style.scss"

class CardHalf extends React.Component {

	render() {
		return (

    	<div className={`card__half ${this.props.align ? 'card__half--' + this.props.align:''}`}>
        {this.props.children}
      </div>

		)
	}
}

export default CardHalf