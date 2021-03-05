import React from 'react'
import styles from "./style.scss"

class DateTime extends React.Component {
	render() {
		return (
		  
		  <div className="device__dt">
			  <div className="device__dt--time">
	        <strong>
	          <span>10</span>
	          <span></span>
	          <span>66</span>

	          { this.props.tablet
	          	? <span>&nbsp;AM&nbsp;&nbsp;&nbsp;Fri Oct 13</span>
	          	: null
	          }
	        </strong>
	      </div>
	    </div>

		)
	}
}

export default DateTime