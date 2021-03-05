import React from 'react'
import styles from "./style.scss"

class DeviceSignal extends React.Component {
	render() {
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
}

export default DeviceSignal