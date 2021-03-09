
import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'

const NextProject = ( props ) => {
	return(

		<div className="project__next">
			<Link to={`/${ props.project }`}>
				<div className="project__next--text">
					<div>Next Project</div>
					<div><strong>{ props.title }</strong></div>
				</div>

				<div className="project__next--bg">
					<img src={ props.bgImg } alt={ props.bgImgAlt } />
				</div>
			</Link>
		</div>

	)
}

export default NextProject