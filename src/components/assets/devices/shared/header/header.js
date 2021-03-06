
import React from 'react'
import DeviceSignal from '../signal/signal'
import DateTime from '../date-time/date-time'
import './style.scss'

const DeviceHeader = ( props ) => {
	return (
	  
	  <div className={`device__info ${ props.white ? "device__info-white" : "" }`}>
      <DateTime tablet={  props.tablet } />
      <DeviceSignal />
    </div>

	)
}

export default DeviceHeader
