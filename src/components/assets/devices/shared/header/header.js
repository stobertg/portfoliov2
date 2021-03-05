import React from 'react'
import DeviceSignal from '../signal/signal'
import DateTime from '../date-time/date-time'
import styles from "./style.scss"

class DeviceHeader extends React.Component {
	render() {
		return (
		  
		  <div className={`device__info ${this.props.white ? "device__info-white" : ""}`}>
        <DateTime tablet={ this.props.tablet } />
	      <DeviceSignal />
      </div>

		)
	}
}

export default DeviceHeader