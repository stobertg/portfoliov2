import React from 'react'
import Panel from "./panel";
import List from '../list/list'
import "./style.scss"

class Accordion extends React.Component { 
	constructor(props) {
		super(props);
		
		this.state = {
			activeTab: null
		};
		
		this.activateTab = this.activateTab.bind(this);
	}
	
	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}

	render() {
		const { activeTab } = this.state;
		return (

			<List className='accordion'>

				{this.props.panels.map((panel, index) =>
					<Panel
						key={ index }
						activeTab={ activeTab }
						index={ index }
						{ ...panel } 
						activateTab={ this.activateTab.bind(null, index) }
					/>
				)}

			</List>

		);
	}
}

export default Accordion
