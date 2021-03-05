import React from 'react'
import { ProgressBar } from "react-step-progress-bar";
import styles from "./style.scss"

class ProgressGoal extends React.Component {
	render() {
		return (
		 
			<div className="goal__bar--contain">
				<div className="goal__bar--title">
					<strong>{this.props.title}</strong>
				</div>

        <div className="goal__bar">
        	<ProgressBar
		      	percent={this.props.percent}
		      	fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
		      />
        </div>

        <div className="goal__bar--desp">{this.props.descp}</div>
      </div>
	  	

		)
	}
}

export default ProgressGoal
