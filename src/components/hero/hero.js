
import React from 'react'
import './style.scss'

const HeroImg = ( props ) => {
	return(

		<div className="hero__img">	
			{ props.children }
		</div>

	)
}

export default HeroImg