import React from 'react'
import './style.scss'

const Block = ( props ) => {
	return(

		<div className={`page__block${ props.type ? ' ' + 'page__block--' + props.type : ''}${ props.bgColor ? ' ' + 'page__block--' + props.bgColor : ''}${ props.slant ? ' ' + 'page__block--slant':''}${ props.className ? ' ' + 'page__block--' + props.className : ''}`}>
			<div className={`page__block--content${ props.inline ? ' ' + 'page__block--inline':'' }${ props.spacing ? ' ' + 'page__block--sp-' + props.spacing : ''}`}>
				{ props.children }
			</div>
		</div>

	)
}

export default Block