import React from 'react'
import Icon from '../icon/icon'
import './style.scss'

class Undo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			remove: false,
			undo: false,
			dismissDisabled: false,
			undoDisabled: true
		}
	}

	handleClick(){
		this.setState({ 
			undo: true,
			dismissDisabled: true,
			undoDisabled: false,
		});
	}

	undoClick(){
		this.setState({ 
			undo: false,
			dismissDisabled: false,
			undoDisabled: true
		});
	}

	render() {
		return (
		  
		  <div className={`undo ${this.state.undo ? 'undo__active':''}`}>
		  	<div className="undo__content">
		  		<span>{this.props.text}</span>

		  		<div className="btn__undo">
			  		<button 
			  			disabled={this.state.dismissDisabled} 
			  			onClick={() => this.handleClick()}
			  			aria-label="Remove item from list"
			  		>
			  			<span className="btn__icon">
				  			<Icon 
				  				title="Undo action"
				  				icon="dismiss" 
				  			/>
							</span>
			  		</button>

			  		<button 
			  			disabled={this.state.undoDisabled} 
			  			onClick={() => this.undoClick()}
			  			aria-label="Add the item back to the list"
			  		>
			  			<span><strong>Undo</strong></span>
			  		</button>
			  	</div>
		  	</div>
		  </div>

		)
	}
}

export default Undo
