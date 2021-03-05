import React from 'react'
import './style.scss'

class Grid extends React.Component {
	render() {
		return(
		  
		  <div className={`grid ${this.props.columns ? 'grid__columns--' + this.props.columns:''} ${this.props.content ? 'grid__' + this.props.content: ''} ${this.props.dividers == "true" ? 'grid__dividers':''}`}>
		  	{this.props.children}
		  </div>

		)
	}
}

export default Grid