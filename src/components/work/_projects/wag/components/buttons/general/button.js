import React from 'react'
import Icon from '../../icon/icon'
import './style.scss'

class Button extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false,
			clickAnimation: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({ 
			active: true,
			clickAnimation: true 
		});
	}

	render() {
		return(

			<div className="btn__wrap">

				{this.props.href
					? <a 
							className={this.props.className}
					  	disabled={this.props.disabled}
					  	href={this.props.href} 
					  	type={this.props.type}
					  	
					  	// Accessibility support - General
					  	role={this.props.role}
					  	aria-describedby={this.props.ariaDescribeBy}
					  	aria-labelledby={this.props.ariaLabelledby}
					  	aria-pressed={this.props.ariaPressed}
					  	aria-hidden={this.props.ariaHidden}
					  	// Automated - Accessibility
					  	aria-disabled={this.props.disabled}
					  	aria-label={this.props.title}
					  >

					  	{this.props.title
					  		? <span className={`btn btn__${this.props.color}`}>
							  		{this.props.icon 
							  			? <Icon icon={this.props.icon} /> 
							  			: null
							  		}

							  		<span>{this.props.title}</span>
							  	</span>

							  : <span>{this.props.children}</span>
					  	}
					  </a>

					: <button 
							ref={this.props.reference}
					  	className={`${this.props.className ? this.props.className:''} ${this.props.clickAnimation ? 'btn__animation':''}`}
					  	disabled={this.props.disabled}
					  	type={this.props.type}
					  	onClick={() => {
					  		this.props.onClick(); 

					  		if (this.props.clickAnimation){
					  			this.handleClick()
					  		}
					  	}}

					  	// Automated - Accessibility
					  	aria-disabled={this.props.disabled}	
					  	aria-describedby={this.props.ariaDescribedBy}
					  	aria-pressed={this.props.ariaPressed}

					  	// Accessibility support - General
					  	role={this.props.role}
					  	aria-labelledby={this.props.ariaLabelledby}
					  	aria-label={this.props.ariaLabel}
					  	aria-hidden={this.props.ariaHidden}
					  >

					  	<span className={`btn btn__${this.props.color} ${this.props.btnCircle ? 'btn__circle':''} ${this.props.btnCircle === "small" ? 'btn__circle--small':''}`}>

					  		{this.props.clickAnimation

					  			// This is for <button> animations
					  			// This is for buttons that respond to click events, such as clip coupon transforms into 'Clipped'

					  			? <span className="btn__animation--text">
					  					<span>
									  		{this.props.icon 
									  			? <Icon icon={this.props.icon} />
									  			: null
												}

									  		{this.props.title 
									  			? <span>{this.props.title}</span>
									  			: null
									  		}
									  	</span>

									  	<span>
									  		{this.props.clickedIcon 
									  			? <Icon icon={this.props.clickedIcon} />
									  			: null
												}

									  		{this.props.clickedTitle 
									  			? <span>{this.props.clickedTitle}</span>
									  			: null
									  		}
									  	</span>
					  				</span>

					  			// For static button clicks where no animation happens if the <button> is clicked

					  			: <span>
								  		{this.props.icon 
								  			? <Icon icon={this.props.icon} />
								  			: null
											}

								  		{this.props.title 
								  			? <span>{this.props.title}</span>
								  			: null
								  		}
								  	</span>
					  		}
						  </span>
					  </button>
				}
			  
			</div>

		)
	}
}

export default Button