import React from 'react'
import Icon from '../icon/icon'
import './style.scss'

class LinkCta extends React.Component {
	render() {
		return (

		  <a href={this.props.href} className="link__cta">
		  	<span>
		  		<strong>{this.props.title}</strong>
		  	</span>

		  	<Icon
		  		name="Arrow icon"
		  		icon="arrow--right"
		  	/>
		  </a>
		  
		)
	}
}

export default LinkCta