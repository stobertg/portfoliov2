import React from 'react'
import ButtonContainer from '../buttons/container/container'
import Button from '../buttons/general/button'
import BtnDismiss from '../buttons/dismiss/btn-dismiss'
import './style.scss'

class StickyBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false
		}
	}

	showSticky(){
		this.setState({ active: true })
	}

	removeSticky(){
		this.setState({ active: false })
	}

	render() {
		return (
		  
		  <div className="sticky__bar--wrap">
		  	<Button 
	        title={this.props.launchBtnTitle}
	        color={this.props.launchBtnColor}
	        onClick={() => this.showSticky()}
	      />

			  <div className={`sticky__bar ${this.state.active ? 'sticky__bar--active':''} ${this.props.color ? 'sticky__bar--' + this.props.color:''}`}>
			  	<div className="sticky__bar--content">
			  		{this.props.description ? 
				  		<span className="sticky__bar--descp">
				  			{this.props.description}
				  		</span>: null
				  	}

			  		<div className="sticky__bar--action">
			  			<ButtonContainer>
				  			<Button
								  title={this.props.btnTitle}
								  color="white"
								  btnLink="#!"
								/>

								<BtnDismiss 
						  		size="sm"
						  		onClick={() => this.removeSticky()}
						  	/>
						  </ButtonContainer>
			  		</div>
			  	</div>
			  </div>
			</div>

		)
	}
}

export default StickyBar
