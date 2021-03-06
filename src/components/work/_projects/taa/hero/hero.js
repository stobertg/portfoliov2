
import React from 'react'
import Fade from 'react-reveal/Fade';
import './style.scss'

import Logo from '../../../../../images/taa/deco/logo.svg'
import Sewing from '../../../../../images/taa/deco/sewing.svg'
import Scissors from '../../../../../images/taa/deco/siz.svg'
import Thimble from '../../../../../images/taa/deco/thimble.svg'
import HeroVid from '../../../../../images/taa/mp4/taa.mp4'

const TaaHero = ( props ) => {
	return(

		<div className="hero__taa">
			<Fade bottom>
		    <div className="page__header">
					<div className="hero__taa--content">
			      <div className="hero__taa--title">
			        <div className="hero__taa--logo"><img src={ Logo } alt="The Apparel Agency Logo" /></div>
			      </div>

			      <div className="hero__taa--deco">
			        <div><img src={ Sewing } alt="Sewing Icon" /></div>
			        <div><img src={ Scissors } alt="Sissors Icon" /></div>
			        <div><img src={ Thimble } alt="Sewing Icon" /></div>
			      </div>
			    </div>

	  			<div><h1><strong>The Apperal Agency</strong></h1></div>
	  			<div><h2>UI Design and Front End Development</h2></div>
	  		</div>
	  	</Fade>

  		<div className="hero__taa--bg">
	    	<video autoPlay muted loop src={ HeroVid } type="video/mp4" />
	    </div>
    </div>

	)
}

export default TaaHero
