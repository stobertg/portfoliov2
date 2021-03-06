
import React from 'react'
import './style.scss'

const PresentationTitle = ( props ) => {
	return (
		
	  <div className="stage__text--title">
	  	<div className={`stage__text--mode${ props.switchMode ? ' stage__text--mode-switch':'' }`}>
  			<strong>{ props.firstMode }</strong><strong>{ props.secondMode }</strong>
  		</div>

	  	{ props.children }
	  </div>

	)
}

export default PresentationTitle
