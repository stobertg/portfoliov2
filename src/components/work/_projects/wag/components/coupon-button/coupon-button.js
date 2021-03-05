import React from 'react'
import Button from '../buttons/general/button'
import Icon from '../icon/icon'
import './style.scss'

class CouponButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clipped: false,
      icon: 'add'
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({ 
      clipped: true,
      icon: 'check'
    })
	}

	render() {
		return (

    	<button 
    		className={`coupon__btn ${this.props.amount ? 'coupon__btn--lg':''}`}
    		aria-describedby={`${this.state.clipped ? 'You have clipped this coupon offer':'Click to clip this coupon offer'}`}
        aria-pressed={`${this.state.clipped ? 'true':'false'}`}
        aria-label={`${this.state.icon} icon`}
    		onClick={() => { this.handleClick(); this.props.onClick()} }
    	>

    		<div className="coupon__btn--icon">
    			<div className={`icon__bounce ${this.state.clipped ? 'icon__bounce--active':''}`}>
    				<Icon
	    				title="Clip coupon"
	    				icon="plus-add-v2"
	    			/>

	    			<Icon
	    				title="Clip coupon"
	    				icon="check-v2"
	    			/>
	    		</div>
    		</div>
        
        <div className="coupon__btn--text">
        	<div className="coupon__btn--deal">
        		{this.props.amount
        			? <span>
                  <strong>
          					{this.props.amount}&nbsp;
          					<span>clipped to your card!</span>
                  </strong>
        				</span>

        			: <span>
                  <strong>clip<span>ped!</span></strong>
        				</span>
        		} 
        	</div>

        	<div>{this.props.details}</div>
        	<div><strong>{this.props.expires}</strong></div>
        </div>
      </button>

		)
	}
}

export default CouponButton