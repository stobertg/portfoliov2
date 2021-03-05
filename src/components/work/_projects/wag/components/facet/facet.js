import React from 'react'
import Icon from '../icon/icon'
import './style.scss'

class Facet extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: true
		}
	}

	handleClick(){
		this.setState({ active: false })
	}

	render() {
		return (

			<div className={`facet ${this.state.active ? '':'facet__remove'}`}>
				<button
					aria-label={`remove ${this.props.title}`}
				 	onClick={() => this.handleClick()}
				>
				 	<Icon
				 		title="Remove facet"
				 		icon="dismiss"
				 	/>
				</button>

				<span>{this.props.title}</span>
			</div>

		)
	}
}

export default Facet
