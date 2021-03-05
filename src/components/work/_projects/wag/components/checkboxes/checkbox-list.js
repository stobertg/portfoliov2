import React from 'react'
import CheckBox from './checkbox'
import List from '../list/list'
import './style.scss'

class CheckboxList extends React.Component {
	render() {
		return (

		 	<div className="checkboxes__contain">
	    	<List vertical>
      		{this.props.checkboxes.map(checkbox =>

	          <li key={checkbox.label}>
	          	<CheckBox 
	          		disabled={checkbox.disabled}
	          		label={checkbox.label}
	          		checked={checkbox.checked}
	          		id={checkbox.id}
	          		link={checkbox.link}
	          		linkTitle={checkbox.linkTitle}
	          	/>
	          </li>

	        )}
	      </List>
	    </div>

		)
	}
}

export default CheckboxList