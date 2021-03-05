import React from 'react'
import Icon from '../../icon/icon'
import './style.scss'

class InputAlerts extends React.Component {
	render() {
		let alert = this.props.alert
		let alertText = this.props.alertText
		return (

      <div className="input__alert">
      	{alert == "success" 
      		? <div>
	      			<Icon
	      				name="success"
	      				icon="check"
	      			/>
		          <span><strong>{alertText}</strong></span>
		        </div> 

		      : null
      	}

      	{alert == "error" || alert == "warning" 
      		? <div>
	      			<Icon
	      				name="error"
	      				icon="alert"
	      			/>
		          <span><strong>{alertText}</strong></span>
		        </div> 

		      : null
        }
      </div>

		)
	}
}

export default InputAlerts