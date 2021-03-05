import React from 'react'
import Heading from '../typography/heading/heading'
import List from '../list/list'
import './style.scss'

class TermsConditions extends React.Component {
	render() {
		return (

			<div className="terms">
				<Heading size="large" title="Terms & Conditions" />

				{this.props.pdfLink
					?	<div className="terms__download">
							<a href={this.props.pdfLink} download><strong>Download PDF</strong></a>
						</div>
					: null
				}

				<List
					vertical
					listSpacing="large"
					type="numbered"
				  listItems={this.props.listItems}
				/>
			</div>

		)
	}
}

export default TermsConditions
