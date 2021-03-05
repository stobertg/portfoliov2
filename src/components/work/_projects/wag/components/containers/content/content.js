import React from 'react'

class Content extends React.Component {
	render() {
		return(
		  
		  <div 
		  	className={`content ${this.props.className ? 'content__' + this.props.className:''} ${this.props.inline ? "content__inline":""} ${this.props.align ? "content__" + this.props.align:''}`}
		  	style={{ maxWidth: this.props.width, marginBottom: this.props.spacingBottom }}
		  >
		  	{this.props.children}
		  </div>

		)
	}
}
export default Content