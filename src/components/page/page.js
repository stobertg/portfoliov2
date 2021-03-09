
import React from 'react'
import Fade from 'react-reveal/Fade';
import Block from './page-block'
import './style.scss'

const PageWrap = ( props ) => {
	return(

		<div className="page__content">
			<div id="content" className={`page${ props.className ? ' page__' + props.className : '' }`}>
				{ props.title 

					? <Block>
							<Fade bottom distance="100px">
								<div className="page__header">
									<div>
										{ props.illustration ? <div className="page__header--illus">{ props.illustration }</div> : null }
										{ props.logo ? <img style={{ width: 100 }} src={ props.logo } alt={ props.logoAlt } /> : null}
									</div>

									<div><h1><strong>{ props.title }</strong></h1></div>
									<div><h2>{ props.subTitle }</h2></div>

									{ props.buttonTitle 
										? <div className="intro__btn">
												<a href={ props.buttonLink }>
													<div className="btn btn__blue"><strong>{ props.buttonTitle }</strong></div>
												</a>
											</div>

										: null
									}
								</div>
							</Fade>
						</Block>

					: null
				}
			
				{ props.children }
			</div>

			<div className="app__bg"></div>
		</div>

	)
}

export default PageWrap
