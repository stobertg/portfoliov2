import React from 'react'
import ReactDOM from 'react-dom';
import Icon from '../icon/icon'
import styles from "./style.scss"

class Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this);
			const height = el.querySelector('.inner').scrollHeight;
			this.setState({
				height
			});
		}, 333);
	}

	render () {
		const { title, content, activeTab, index, activateTab } = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		const innerStyle = {
			height:  `${isActive ? height : 0}px`
		}

		return (
			<li>
				<button 
					className="toggle title__master" 
					onClick={ activateTab } 
					aria-expanded={ isActive }
				>
					<strong>{this.props.title}</strong>

					<Icon
						title="arrow down"
						icon="arrow-down"
						ariaHidden
					/>
				</button>

				<div 
					className="inner" 
					style={ innerStyle } 
					aria-hidden={ !isActive }
				>
					<div>{this.props.content}</div>
				</div>
			</li>
		);
	}
}

export default Panel
