import React from 'react'

class ContentItem extends React.Component {
	render() {
		return(
		  
		  <div 
		  	className={`content__item ${this.props.typeSize ? 'content__item--' + this.props.typeSize:''} ${this.props.inline ? 'content__item--inline':''} ${this.props.bgColor ? 'content__item--' + this.props.bgColor:''}`}
		  	style={{ marginBottom: this.props.spacingBottom }}
		  >
		  	{this.props.children} 
		  </div>

		)
	}
}
export default ContentItem