import React from 'react'
import './style.scss'

class OverlayContent extends React.Component {
	render() {
		return (
				  	
  		<div className={`modal__content ${this.props.fullWidth ? 'modal__content--full':''}`}>

  			{this.props.title 
		  		? <div className="modal__title">
		  				{this.props.titleImg 
		  					? <div className="modal__title--img">
		  							<img src={this.props.titleImg} alt={this.props.titleImgAlt} />
		  					  </div>
		  				
		  					: null
		  				}
				  		
				  		<div>{this.props.title}</div>
				  	</div>

				  : null
		  	}
				  	
  			{this.props.children}
	  	</div>

		)
	}
}

export default OverlayContent
