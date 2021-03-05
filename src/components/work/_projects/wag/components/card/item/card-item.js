import React from 'react'
import styles from "./style.scss"

class CardItem extends React.Component {


	truncate(str) {
	  return str.length > 50 ? str.substring(0, 85) + "..." : str;
	}

	render() {
		return (

    	<div 
    		className={`card__item ${this.props.description ? 'card__item--descp':''} ${this.props.inline ? 'card__item--inline':''} ${this.props.align ? 'card__align--' + this.props.align:''}`}
    		style={{ marginBottom: this.props.spacingBottom }}
    	>
        {this.props.description 
        	? <span>{this.truncate(this.props.description)}</span>
        	: null
        }

        {this.props.children}
      </div>

		)
	}
}

export default CardItem