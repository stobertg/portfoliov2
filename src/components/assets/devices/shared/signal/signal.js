
import React from 'react'
import './style.scss'

const DeviceSignal = () => {
	return (
	  
	  <div className="device__signal">
      <ul>
        <li><div className="signal"><div></div></div></li>
        <li><div className="lte"><em>LTE</em></div></li>
        <li><div className="battery"><div></div></div></li>
      </ul>
    </div>

	)
}

export default DeviceSignal
