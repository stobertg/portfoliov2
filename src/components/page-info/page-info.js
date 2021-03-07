
import React from 'react'
import './style.scss'

const PageInfo = ( props ) => {
	return(

		<div className="page__info">
      <div className="page__info--content">
      	<div className="page__info--text">
        	<div className="page__info--title">
        		<div><h3><strong>{ props.title }</strong></h3></div>
	        	{ props.subTitle
	        		? <div className="page__info--title"><h3><strong>{ props.subTitle }</strong></h3></div>
	        		: null
	        	}
	        </div>
        	<div className="page__info--descp">{ props.descp }</div>
	      </div>

        <div className="page__info--details">
          <div className="page__info--list">
            <div><h4><strong>Roles / Skills</strong></h4></div>
            <ul>
            	{ props.skills.map(( skill, index ) =>
	              <li key={ skill.skill }>{ skill.skill }</li>
	            )}
            </ul>
          </div>

          <div className="page__info--list">
            <div><h4><strong>Project</strong></h4></div>
            <ul>
            	{ props.project.map(( project, index ) =>
              	<li key={ project.project }>{ project.project }</li>
            	)}
            </ul>
          </div>
        </div>
      </div>
    </div>

	)
}

export default PageInfo
