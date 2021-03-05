import React from 'react'
import ContentContainer from '../containers/content/container'
import Content from '../containers/content/content-item'
import LinkCta from '../link-cta/link-cta'
import Icon from '../icon/icon'
import List from '../list/list'
import './style.scss'

class Ribbon extends React.Component {

	render() {
		return (
		  
		  <div className="ribbon">
		  	<div className="ribbon__text">

		  		{ this.props.icon || this.props.image
		  			? <div className={`ribbon__icon ${this.props.imageBgColor ? 'ribbon__icon--' + this.props.imageBgColor:''}`}>
				  			{ this.props.icon 
				  				? <Icon icon={ this.props.icon } />
				  				: null
				  			}

				  			{ this.props.image
				  				? <img src={ this.props.image } />
				  				: null
				  			}
				  		</div>
		  			: null
		  		}

		  		{ this.props.text }

		  		{ this.props.linkTitle
			  		? <LinkCta
							  href={this.props.href}
							  title={ this.props.linkTitle }
							/>
						: null
			  	}

		  	</div>

		  	{ this.props.links
	  			?	<div className="ribbon__icons">
	  					<List align="center">

	  						{ this.props.links.map(( link, index ) =>

	  							<li key={ link.linkTitle }>
	  								<a href={ link.link }>
	  									<Icon icon={ link.icon } />
	  									<div><strong>{ link.title }</strong></div>
	  								</a>
	  							</li>
	  							
	  						)}

	  					</List>
	  				</div>
	  			: null
	  		}
		  </div>

		)
	}
}

export default Ribbon
