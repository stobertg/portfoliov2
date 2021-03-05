import React from 'react'
import LinkCta from '../link-cta/link-cta'
import BtnDismiss from '../buttons/dismiss/btn-dismiss'
import Icon from '../icon/icon'
import './style.scss'

class Alert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			alertClosed: false,
		}
	}

	handleClick() {
		this.setState({ alertClosed: true });
	}

	render() {
		return (

		  <div 
		  	className={`alert alert__${this.props.color} ${this.state.alertClosed ? 'alert__close':''} ${this.props.minimal ? 'alert__minimal':''}`}
		  	aria-live="polite"
		  >

		  	<a href="#!" className="alert__text">
		  		<Icon
		  			title="alert icon"
		  			icon={this.props.icon}
		  			ariaHidden
		  		/>

          <span>
            <p>
              {this.props.text}&nbsp;
              {this.props.linkCta 
              	? <LinkCta title={this.props.linkCta} /> 
              	: null 
              }
            </p>
          </span>
        </a>

        {this.props.dismissBtn 
        	? <BtnDismiss 
		        	size="sm" 
		        	ariaLabel="Dismiss the alert"
		        	onClick={() => this.handleClick()}
		        /> 

		      : null
	      }
		  </div> 
		)
	}
}

export default Alert