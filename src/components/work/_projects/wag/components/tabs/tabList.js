import React from 'react'
import Button from '../buttons/general/button'
import Tab from './tab'
import List from '../list/list'
import './style.scss'

class TabList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tabActive: this.props.tabActive
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		this.setState({
			tabActive: e.target.getAttribute("data-tab")
		});
	}

	render() {
		return (
		  
		  <div className={`tabs ${this.props.tabsFullWidth ? 'tabs__full':''}`}>
		  	<div className="tabs__contain--wrap">
			  	<div className="tabs__item tabs__contain">
				  	<List>
				  		{this.props.tabs.map((tab, index) => 
				  			<li key={ tab.id } role="presentation">

				  				{this.state.tabActive == tab.id 
					  				? <Tab 	
						  					dataTab={ tab.id }
						  					label={ tab.label }
												subLabel={ tab.subLabel }
												selected={ true }
												onClick={ this.handleClick }
						  				/>

						  			: <Tab 
						  					dataTab={ tab.id }
						  					label={ tab.label }
												subLabel={ tab.subLabel }
												selected={ false }
												onClick={ this.handleClick }
						  				/>
						  		}

				  			</li>
				  		)}
				  	</List>

				  	{this.props.tabsAction
				  		? <Button
				  				color="white"
				  				title="Print"
				  				icon="print"
				  				onClick={this.props.tabsActionClick}
				  			/>

				  		: null
				  	}
				  </div>
				</div>

			  <div className={`tabs__content--wrap ${this.props.tabsNeutral ? 'tabs__content--neutral':''}`}>
				  <div className="tabs__item tabs__content">
				  	{this.props.tabs.map((tab, index) =>

				  		<div key={tab.id}>
				  			{this.state.tabActive == tab.id 
				  				? <div data-tab={ tab.id }>{ tab.content }</div>
				  				: null
				  			}
				  		</div>

				  	)}
				  </div>
				</div>
		  </div>

		)
	}
}

export default TabList
