import React from 'react'
import symbolDefs from '../../../../../../images/wag/icons/symbol-defs.svg'
import './style.scss'

class Icon extends React.Component {
	render() {
		return(

			<span 
				className={`icon icon__${this.props.icon} ${this.props.size ? 'icon__' + this.props.size:''} ${this.props.type ? 'icon__' + this.props.type:''} ${this.props.color ? 'icon__' + this.props.color:''}`}
				aria-hidden={this.props.ariaHidden ? 'true':'false'}
				focusable="false"
			>
	      <svg>
	      	<use xlinkHref={`${symbolDefs}#icon__${this.props.icon}`}></use>
	      </svg>
	    </span>	

		)
	}
}

export default Icon