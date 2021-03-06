import React from 'react'
import symbolDefs from '../../../../../images/gather/icons/gather-alt.svg'
import './style.scss'

const Icon = ( props ) => {
	return(

		<span 
			className={`icon icon__${ props.icon }${ props.size ? ' icon__' +  props.size:'' }${ props.type ? ' icon__' +  props.type:'' } ${ props.color ? ' icon__' +  props.color:'' }`}
			aria-hidden={ props.ariaHidden ? 'true':'false'}
			focusable="false"
		>
      <svg>
      	<use xlinkHref={`${symbolDefs}#icon__${ props.icon }`}></use>
      </svg>
    </span>	

	)
}

export default Icon