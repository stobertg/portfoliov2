import React from 'react'
import styles from "./style.scss"

// Components needed

import HorseBase from './base/base'
import HorseLeg from './front-legs/leg'
import HorseBackLeg from './back-legs/leg'

import Knight from './knight/knight'

const AnimationHorse = () => (
  
  <div className="animation__horse">
	  <div className="horse__contain">
		  <div className="horse">
		  	<div className="horse__knight">
		  		<Knight />
		  	</div>

				<div className="horse__top">
					<HorseBase />
				</div>

				<div className="horse__bottom">
					<div className="horse__bottom--legs">
						
						<HorseLeg position="front" />
						<HorseLeg position="back" />

						<HorseBackLeg position="front" />
						<HorseBackLeg position="back" />

					</div>
				</div>
			</div>

			<div className="horse__lines">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
)

export default AnimationHorse