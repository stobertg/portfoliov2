import React from 'react'
import styles from "./style.scss"

// Components needed

import Icon from '../icon/icon'

class ShowMore extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({
			expanded: !this.state.expanded
		})
	}

	render() {
		return (
		  
		  <div 
		  	className={`show__more ${this.state.expanded ? 'show__more--expanded':''}`}
		  	style={{ height: this.props.initialHeight + 'px' }}
		  >
		  	<div className="show__more--content">
		  		{this.props.children}
		  	</div>

		  	<div className="show__more--btn">
				  <button 
				  	className="btn__more"
				  	onClick={() => this.handleClick()}
				  >
				  	{this.state.expanded  
				  		? <span>Show Less</span>
				  		: <span>Show More</span>
				  	}

				  	<Icon 
				  		size="sm"
				  		title="Arrow icon"
				  		icon="arrow-down" 
				  	/>
					</button>
				</div>
			</div>

		)
	}
}

export default ShowMore
