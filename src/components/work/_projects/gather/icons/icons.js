
import React from 'react'
import Icon from './icon'
import './style.scss'

const GatherIcons = ( props ) => {
	const icons = [
		{ icon: 'dashboard--menu' },
		{ icon: 'chat--menu' },
		{ icon: 'chatalt--menu' },
		{ icon: 'hexes--menu' },
		{ icon: 'bell--menu' },
		{ icon: 'book--menu' },
		{ icon: 'doc--menu' },
		{ icon: 'settings--menu' },
		{ icon: 'avatar--menu' },
		{ icon: 'community--menu' },
		{ icon: 'link--menu' },
		{ icon: 'cal--menu' },
		{ icon: 'money--menu' },
		{ icon: 'pen--menu' },
		{ icon: 'question--menu' },
		{ icon: 'video--menu' },
		{ icon: 'camera--menu' },
		{ icon: 'image--menu' },
		{ icon: 'pin--menu' },
		{ icon: 'logout--menu' },
	]

	return (
		
		<div className="icon__contain">
			{ icons.map(( icon, index ) =>
				<Icon key={ icon.icon } icon={ icon.icon } />
			)}
	  </div>

  )
}

export default GatherIcons
