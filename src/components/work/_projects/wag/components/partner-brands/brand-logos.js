import React from 'react'
import Heading from '../typography/heading/heading'
import List from '../list/list'
import './style.scss'

class PartnerBrandLogos extends React.Component {
	render() {
		return (

      <div className={`brand__logos ${this.props.size ? 'brand__logos--' + this.props.size:''}`}>
      	<Heading 
      		size="medium" 
      		title={this.props.title} 
      		spacingBottom={ 32 }
      	/>

        <List>
        	{this.props.logos.map(( logo, index ) =>

        		<li key={ logo.name }>
        			<a href={ logo.href }>
        				<div className="brand__logo">
        					<img src={ logo.logo } />
        				</div>
        			</a>
        		</li>

        	)}
        </List>
      </div>

		)
	}
}

export default PartnerBrandLogos