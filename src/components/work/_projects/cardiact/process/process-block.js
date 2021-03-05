
import React from 'react'
import Block from '../../../../page/page-block'
import HeroImg from '../../../../hero/hero'

const ProcessBlock = ( props ) => {
	return(

		<Block className={ props.className }>
			<div className="page__block--descp">
      	<div className="page__block--title"><strong>{ props.title }</strong></div>
      	<div><p>{ props.descp }</p></div>
      </div>

      <HeroImg>
      	{ props.children }
      </HeroImg>
		</Block>

	)
}

export default ProcessBlock
