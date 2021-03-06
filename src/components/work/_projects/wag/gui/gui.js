
import React from 'react'
import './style.scss'

import Gui from '../../../../../images/wag/heros/gui.jpg'

const WagGui = ( props ) => {
	return(

		<div className="gui">
			<img style={{ width: 5000 }} src={ Gui } alt="Walgreens LSG GUI" />
		</div>

	)
}

export default WagGui
