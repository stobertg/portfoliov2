import React from 'react'
import Breadcrumbs from '../breadcrumbs/breadcrumbs'
import Heading from '../typography/heading/heading'
import List from '../list/list'
import Card from '../card/card'
import CardItem from '../card/item/card-item'
import Button from '../buttons/general/button'
import Icon from '../icon/icon'
import Snow from '../brand-story/christmas/snow/snow'

import './style.scss'

class Hero extends React.Component {
	render(){
		return(

			<div className="hero__contain">
				{this.props.size == "full"
					? <div className={`hero hero__full ${this.props.bgColor ? 'hero__full--' + this.props.bgColor:''}`}>	
							<div className="hero__content">
								{this.props.children}
							</div>
						</div>

					: <div className={`hero ${this.props.size ? 'hero__' + this.props.size:''} ${this.props.textBgColor ? 'hero__split':''} ${this.props.brandStory ? 'hero__alt--bs':''} ${this.props.holiday ? 'hero__alt--bs hero__alt--bs-holiday':''}`}>
					  	<div className={`hero__content ${this.props.bgColor ? 'hero__bg--' + this.props.bgColor:''}`}>
								{this.props.children
									? <div className={`hero__text ${this.props.textColor ? 'hero__text--' + this.props.textColor:''} ${this.props.textBgColor ? 'hero__text--bg-' + this.props.textBgColor:''}`}>
											<div className="hero__text--content">
												{ this.props.children }
											</div>
										</div>
									: null
								}

								{ this.props.brandStory

 									? <div className="hero__illus">
 											<div className="bs__products">
 												<List columns="3">

 													<li>
 														<a href="#!">
			 												<Card>
			 													<CardItem>
			 														<img src="/products/lotion.jpg" />
			 													</CardItem>

			 													<CardItem>
			 														<div><strong>Buy 2 get 3rd FREE</strong></div>
			 														<div>skin care</div>
			 													</CardItem>
			 												</Card>
			 											</a>
		 											</li>

	 												<li>
	 													<a href="#!">
			 												<Card>
			 													<CardItem>
			 														<img src="/products/unicorn.jpg" />
			 													</CardItem>

			 													<CardItem>
			 														<div><strong>50% off</strong></div>
			 														<div>Gifts of the Week</div>
			 													</CardItem>
			 												</Card>
			 											</a>
		 											</li>

		 											<li>
		 												<a href="#!">
			 												<Card>
			 													<CardItem>
			 														<img src="/products/fragrances.jpg" />
			 													</CardItem>

			 													<CardItem>
			 														<div><strong>Up to 50% off</strong></div>
			 														<div>fragrances</div>
			 													</CardItem>
			 												</Card>
			 											</a>
		 											</li>

	 											</List>
 											</div>

 											<div className="bs__illus--wrap">
												<div className="bs__illus">
													<div className="illus__bulb--wrap illus__bulb--wrap-v1">

														<div className="illus__bulb--line">
															<div>
																<svg viewBox="0 0 25.94 84.99">
																	<g id="Layer_4" transform="translate(1528.793 2374)">
																		<path class="illus__bulb--line" d="M-1509.31-2289.01l-5.72-1.83c19.44-60.9-13.43-81.85-13.76-82.05l3.13-5.12c0.39,0.24,9.7,6.05,16.32,20.1
																			C-1498.49-2334.87-1503.34-2307.72-1509.31-2289.01z"/>
																	</g>
																</svg>
															</div>
														</div>

														<div className="illus__bulb">
															<svg viewBox="0 0 48.06 111.26">
																<g id="Group_8073" transform="translate(0 0)">
																	<path id="Path_59273" class="st0" d="M46,38.88c-1.37-4.95-4-9.46-7.62-13.09c-2.21-2.36-5.34-5.34-8.42-4.83
																		c-2.26,0.37-3.84,2.19-5,4.2c-1.09,1.14-2.01,2.44-2.73,3.85C12.38,41.89,9.6,73.4,23.99,100.38c1.29,2.43,2.67,5.45,5.31,6.12
																		c2.99,0.77,4.99-2.16,6.55-4.85c1.39-2.39,1.82-3.31,1.84-3.31C49.58,75.92,49.52,50.9,46,38.88z"/>
																	<path class="st1" d="M38.57,35.61c-1.62-5.62-4.71-10.73-8.91-14.75c-0.24-0.25-0.49-0.5-0.74-0.74c0.36-0.25,0.6-0.53,0.68-0.84
																		c0.46-1.83,0.14-4.03,0.06-5.89c-0.37-8.7-0.59-10.73-2.18-12.13c-0.31-0.3-0.66-0.55-1.04-0.75C25-0.11,14.94-0.35,12.13,0.89
																		c-3.11,1.37-2.7,5.77-2.86,8.6c-0.51,9.07-0.74,10.32,0.46,11.68c0.15,0.17,0.86,0.33,1.92,0.45c-0.76,0.93-1.43,1.92-2,2.98
																		c-5.94,7.5-9.45,19.85-9.64,33.91C-0.2,74.15,3.85,90.27,11.4,103.91l0.36,0.66c1.47,2.7,3.13,5.76,6.32,6.53
																		c0.46,0.11,0.91,0.17,1.34,0.17c3.65,0,5.96-3.81,7.26-5.96c0.98-1.61,1.54-2.62,1.85-3.16l0.28-0.5
																		C42.91,76.17,42.37,48.2,38.57,35.61z M26.26,97.42c-0.04,0.07-0.08,0.15-0.12,0.22c-0.21,0.4-0.7,1.33-1.7,3.05
																		c-1.75,3.02-3.34,4.93-5.44,4.38c-1.99-0.51-3.25-2.91-4.35-5.02l-0.32-0.61C0.67,73.83,2.35,42.42,12.49,29.16l0.1-0.16
																		c0.67-1.32,1.53-2.54,2.56-3.61l0.14-0.19c0.98-1.69,2.02-2.79,3.16-3.35c1.03-0.02,2.07-0.07,3.08-0.14
																		c1.96,0.67,3.95,2.56,5.59,4.32c3.5,3.51,6.04,7.88,7.37,12.67C37.77,49.87,38.28,74.74,26.26,97.42L26.26,97.42z"/>
																</g>
															</svg>
														</div>
													</div>

													<div className="illus__bulb--connect">
														<svg viewBox="0 0 772 177.8">
															<g id="Layer_4" transform="translate(1528.793 2374)">
																<path class="st0" d="M-804-2196.3c-45.2,0-88.5-17.1-99-21.6c-8.5-3.6-23.2-12.3-41.8-23.3c-45.9-27.1-115.4-68-165.5-76.1
																	c-34.7-5.6-61.8,7.8-93.1,23.3c-32.3,16-68.8,34.1-123.9,38.6c-64,5.3-97.7-5.4-115.3-17.3c-14.3,4.9-30.9,5.8-42.9,1.9
																	c-14-4.6-27.5-18-35.3-34.9c-6.6-14.3-12.5-37.9-2.7-68.4l5.7,1.8c-9.2,28.7-3.7,50.7,2.5,64.1c7.1,15.5,19.3,27.6,31.8,31.7
																	c9.6,3.2,23,2.7,35.1-0.7c-0.4-0.3-0.8-0.7-1.2-1c-11.9-10.8-13.3-21.4-13.4-25.4c-0.1-11.7,5.1-18.4,9.6-21.9
																	c6-4.8,14.4-6.8,21.2-5.1c11.9,2.9,21.9,16.9,18,33.2c-1.9,7.8-8,14.7-17.6,20c-1.3,0.7-2.6,1.4-4,2c17.6,10.3,49.6,18.9,108,14.1
																	c54-4.4,90-22.3,121.7-38c32.2-16,60.1-29.8,96.7-23.9c51.2,8.3,121.3,49.6,167.6,76.9c18.4,10.9,33,19.4,41.1,22.9
																	c13.9,5.9,86.3,34.4,141.8,13.8l2.1,5.6C-771.9-2198.4-788.1-2196.3-804-2196.3z M-1437.3-2325.1c-3.9,0-8.6,1.3-12.5,4.4
																	c-4.9,3.9-7.4,9.8-7.3,17.1c0,2.5,0.9,11.5,11.4,21.1c1.2,1.1,2.5,2.1,3.9,3.2c2.5-1,4.8-2.1,7-3.3c5.6-3.1,12.8-8.5,14.6-16.2
																	c3.4-13.9-5.7-24-13.5-25.9C-1434.8-2324.9-1436-2325.1-1437.3-2325.1z"/>
															</g>
														</svg>
													</div>

													<div className="illus__bulb--wrap illus__bulb--wrap-v2">
														<div className="illus__bulb--line">
															<div>
																<svg viewBox="0 0 183.57 99.33">
																	<g id="Layer_4" transform="translate(1528.793 2374)">
																		<path class="st0" d="M-1526.7-2274.67l-2.09-5.62c16.06-5.96,28.94-14.78,37.66-25.56c-15.73-5.31-29.29-13.75-34.84-27.11
																			c-5.03-12.1-1.57-24.67,3.78-31.22c5.62-6.88,14.03-10.51,22.52-9.71c9.28,0.88,17.35,6.87,22.75,16.85
																			c5.43,10.06,5.7,23.97,0.72,37.21c-1.39,3.69-3.15,7.26-5.25,10.67c7.92,2.07,17.34,3.75,28.54,4.85
																			c3.03,0.15,90.91,4.44,107.35,3.47l0.35,5.99c-16.97,0.99-104.36-3.29-108.07-3.47l-0.15-0.01c-10.07-0.99-21.11-2.71-31.57-5.64
																			C-1494.41-2291.48-1508.71-2281.35-1526.7-2274.67z M-1502.01-2368c-5.87,0-11.58,2.77-15.54,7.61
																			c-3.55,4.35-7.25,14.63-2.89,25.12c3.36,8.08,12,17.72,32.97,24.38c2.3-3.52,4.19-7.21,5.64-11.05c4.38-11.64,4.24-23.7-0.38-32.25
																			c-4.41-8.17-10.81-13.04-18.03-13.73C-1500.83-2367.97-1501.42-2368-1502.01-2368z"/>
																	</g>
																</svg>
															</div>
														</div>

														<div className="illus__bulb">
															<svg viewBox="0 0 48.06 111.26">
																<g id="Group_8073" transform="translate(0 0)">
																	<path id="Path_59273" class="st0" d="M46,38.88c-1.37-4.95-4-9.46-7.62-13.09c-2.21-2.36-5.34-5.34-8.42-4.83
																		c-2.26,0.37-3.84,2.19-5,4.2c-1.09,1.14-2.01,2.44-2.73,3.85C12.38,41.89,9.6,73.4,23.99,100.38c1.29,2.43,2.67,5.45,5.31,6.12
																		c2.99,0.77,4.99-2.16,6.55-4.85c1.39-2.39,1.82-3.31,1.84-3.31C49.58,75.92,49.52,50.9,46,38.88z"/>
																	<path class="st1" d="M38.57,35.61c-1.62-5.62-4.71-10.73-8.91-14.75c-0.24-0.25-0.49-0.5-0.74-0.74c0.36-0.25,0.6-0.53,0.68-0.84
																		c0.46-1.83,0.14-4.03,0.06-5.89c-0.37-8.7-0.59-10.73-2.18-12.13c-0.31-0.3-0.66-0.55-1.04-0.75C25-0.11,14.94-0.35,12.13,0.89
																		c-3.11,1.37-2.7,5.77-2.86,8.6c-0.51,9.07-0.74,10.32,0.46,11.68c0.15,0.17,0.86,0.33,1.92,0.45c-0.76,0.93-1.43,1.92-2,2.98
																		c-5.94,7.5-9.45,19.85-9.64,33.91C-0.2,74.15,3.85,90.27,11.4,103.91l0.36,0.66c1.47,2.7,3.13,5.76,6.32,6.53
																		c0.46,0.11,0.91,0.17,1.34,0.17c3.65,0,5.96-3.81,7.26-5.96c0.98-1.61,1.54-2.62,1.85-3.16l0.28-0.5
																		C42.91,76.17,42.37,48.2,38.57,35.61z M26.26,97.42c-0.04,0.07-0.08,0.15-0.12,0.22c-0.21,0.4-0.7,1.33-1.7,3.05
																		c-1.75,3.02-3.34,4.93-5.44,4.38c-1.99-0.51-3.25-2.91-4.35-5.02l-0.32-0.61C0.67,73.83,2.35,42.42,12.49,29.16l0.1-0.16
																		c0.67-1.32,1.53-2.54,2.56-3.61l0.14-0.19c0.98-1.69,2.02-2.79,3.16-3.35c1.03-0.02,2.07-0.07,3.08-0.14
																		c1.96,0.67,3.95,2.56,5.59,4.32c3.5,3.51,6.04,7.88,7.37,12.67C37.77,49.87,38.28,74.74,26.26,97.42L26.26,97.42z"/>
																</g>
															</svg>
														</div>
													</div>
												</div>
											</div>
										</div>

 									: null
								}

								{ this.props.brandStory

									? <Snow />

									: null

								}

								{ this.props.holiday

 									? <div className="hero__illus hero__illus--presents">
 											<div>
	 											<div className="holiday__present holiday__present--1">
	 												<div className="holiday__present--text">
	 													<div><Heading size="marketing--large" title={<span>Extra 15<sup>%</sup>off<sup>*</sup></span>} /></div>
	 													<div>$40+ purchase<br/>with code <strong>JOY15</strong></div>
	 												</div>

	 												<img src="/heros/present-one.png" />
	 											</div>

	 											<div className="holiday__present holiday__present--2">
	 												<div className="holiday__present--text">
	 													<div><Heading size="marketing--large" title={<span>Extra 20<sup>%</sup>off<sup>*</sup></span>} /></div>
	 													<div>$80+ purchase with code <strong>JOY20</strong></div>
	 												</div>
	 												
	 												<img src="/heros/present-two.png" />
	 											</div>
	 										</div>
										</div>

 									: null
								}

								{ this.props.image
									? <div className="hero__img">
								  		<img src={this.props.image} alt={this.props.imageAlt} />
								  	</div>

								  : null
								}
						  	
						  </div>

					  	{this.props.heroCtas
						  	? <div className="hero__links">
						  			{this.props.heroCtas.map(( cta, index ) =>

							  			<Button key={ cta.id } href={ cta.href }>
							  				{ cta.icon
							  					? <Icon size="wide" icon={ cta.icon } />
							  					: null
							  				}
							  				<strong>{ cta.title }</strong>
							  			</Button>
							  			
							  		)}
						  		</div>
						  	: null
						  }
					  </div>
				}

			  {this.props.heroCta
			  	? <div className="hero__cta">
			  			<Button href="#!">
			  				<Icon size="wide" icon={this.props.heroCtaIcon} />
			  				<span>{this.props.heroCta}</span>
			  			</Button>
			  		</div>

			  	: null
			  }
			  
			</div>

		 )
	}
}

export default Hero