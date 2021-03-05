import React from 'react'
import Radio from './radio'
import List from '../list/list'
import './style.scss'

class RadioList extends React.Component {
	render() {
		return (

		 	<div className="radio__contain">
	    	<List vertical>

      		{this.props.radioList.map(radio =>

	          <li key={radio.id}>
	          	<Radio
	          		id={radio.id}
	          		label={radio.label}
	          		checked={radio.checked}
	          		disabled={radio.disabled}
	          	/>
	          </li>

	        )}

	      </List>
	    </div>

		)
	}
}

export default RadioList
