import React from 'react'
import Form from '../form/form'
import Input from '../input/input'
import './style.scss'

class Footer extends React.Component {
	render() {
		return (

			<footer>
				<div className="footer__email">
					<Form>
						<Input
						  id="name"
						  label="Enter email for weekly deals"
						  btn="Sign up"
						/>
					</Form>
				</div>
			</footer>

		)
	}
}

export default Footer
