import React from 'react'
import './style.scss'

class BtnCotnainer extends React.Component {
	render() {
		return(
		  
		  <div className={`btn__contain ${this.props.vertical ? "btn__contain--vert":""} ${this.props.align ? 'btn__contain--' + this.props.align:''} ${this.props.className ? this.props.className:''}`}>
		  	{this.props.children}
		  </div>

		)
	}
}
export default BtnCotnainer