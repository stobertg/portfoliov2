import React from 'react'
import './style.scss'

// Components needed

class List extends React.Component {
	render() {
		return (
		  
		  <div className={`list__contain ${this.props.align ? 'list__contain--align-' + this.props.align:''}`}>
		  	{this.props.listItems
		  		? <ul 
					  	className={`${this.props.vertical ? 'list__vertical':''} ${this.props.type ? 'list__' + this.props.type:''} ${this.props.className ? this.props.className:''} ${this.props.columns ? 'list__column--' + this.props.columns:''} ${this.props.listSpacing && this.props.vertical ? 'list__vertical--' + this.props.listSpacing:''}`}
					  	role={this.props.role}
					  	aria-label={this.props.ariaLabel}
					  >
					  	{this.props.listItems.map((list, index) =>
					  		<li key={list.label}>

					  			{list.link
					  				? <a href={list.link}><span>{list.label}</span></a>
					  				: <span>{list.label}</span>
					  			}

					  		</li>
					  	)}
					  </ul>

					: <ul 
					  	className={`${this.props.vertical ? 'list__vertical':''} ${this.props.type ? 'list__' + this.props.type:''} ${this.props.className ? this.props.className:''} ${this.props.columns ? 'list__column--' + this.props.columns:''} ${this.props.listSpacing && this.props.vertical ? 'list__vertical--' + this.props.listSpacing:''}`}
					  	role={this.props.role}
					  	aria-label={this.props.ariaLabel}
					  >
					  	{this.props.children}
					  </ul>
		  	}
			  
			</div>

		)
	}
}

export default List
