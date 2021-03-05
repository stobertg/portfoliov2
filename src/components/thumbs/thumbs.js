import React from 'react'
import Website from '../assets/devices/web/web'
import StAlbans from '../../images/castle/stalbans.jpg'
import Gather from '../../images/gather/hero.jpg'
import './style.scss'

const ProjectThumb = ( props ) => {
	return(

		<div className="project__thumb">
			<div>
				<Website>
					<img src={ Gather } alt="St Albans Cathedral" />
				</Website>
	    </div>
	  </div>

	)
}

export default ProjectThumb