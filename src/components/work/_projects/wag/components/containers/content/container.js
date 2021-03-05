import React from 'react'
import './style.scss'

class ContentContainer extends React.Component {
	render() {
		return(
		  
		  <div className={`content__wrap ${this.props.bgColor ? 'content__wrap--' + this.props.bgColor:''}`}>
		  	<div className={`content__contain ${this.props.columns ? 'content__column--' + this.props.columns:''} ${this.props.spacing ? 'content__spacing--' + this.props.spacing:''}`}>
			 	 	{this.props.children}
			 	</div>
			</div>

		)
	}
}

export default ContentContainer