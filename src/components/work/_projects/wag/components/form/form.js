
import React from 'react'
import './style.scss'

class Form extends React.Component {
	render() {
		return (

			<form role={this.props.role} action={this.props.action} method={this.props.method}>
				<fieldset>
					{this.props.legend ? <legend><strong>{this.props.legend}</strong></legend>: null}
					{this.props.children}
				</fieldset>
			</form>

		)
	}
}

export default Form
