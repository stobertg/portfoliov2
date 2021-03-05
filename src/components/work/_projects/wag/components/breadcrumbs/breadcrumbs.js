import React from 'react'
import Icon from '../icon/icon'
import './style.scss'

class Breadcrumbs extends React.Component {
	render() {
		return (

		  <nav className="breadcrumbs" aria-label="breadcrumbs">
		  	<ul>
		  		{
		        this.props.links.map(({ key, current, href, label }) => (
		        	<li key={key}>
		        		<a href={href} aria-current={current}>{label}<Icon icon="arrow-right" /></a>
		        	</li>
		      	))
		      }
		  	</ul>
		  </nav>

		)
	}
}

export default Breadcrumbs