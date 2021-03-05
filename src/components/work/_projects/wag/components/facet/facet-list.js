import React from 'react'
import Facet from './facet'
import List from '../list/list'
import './style.scss'

class FacetList extends React.Component {
	render() {
		let facets = this.props.facets
		return (

			<div className="facet__list">
				<List>
					{facets.map((facet, index) =>
						<li key={facet.id}>
							<Facet 
								title={facet.title} 
								titleClick={facet.titleClick}
							/>
						</li>
					)}
				</List>
			</div>

		)
	}
}

export default FacetList