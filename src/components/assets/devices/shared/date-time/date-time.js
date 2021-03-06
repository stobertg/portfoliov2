
import React from 'react'
import './style.scss'

const DateTime = ( props ) => {
	return (
	  
	  <div className="device__dt">
		  <div className="device__dt--time">
        <strong>
          <span>10</span>
          <span></span>
          <span>66</span>

          { props.tablet
          	? <span>&nbsp;AM&nbsp;&nbsp;&nbsp;Fri Oct 13</span>
          	: null
          }
        </strong>
      </div>
    </div>

	)
}

export default DateTime
