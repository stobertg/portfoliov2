import React from 'react'
import styles from "./style.scss"

class Link extends React.Component {
	render() {
		return (
		  
		  <a href={this.props.href} className="link__underline">
		  	<span>{this.props.children}</span>
		  </a>

		)
	}
}

export default Link