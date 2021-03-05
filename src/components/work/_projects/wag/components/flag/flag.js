
import React from 'react'
import styles from "./style.scss"

class Flag extends React.Component {
	render() {
		return (

			<div className={`flag flag__${this.props.type}`}>
				<div className="flag__text">
					{this.props.children}
				</div>
			</div>

		)
	}
}

export default Flag
