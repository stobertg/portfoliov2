import React from 'react'
import { ProgressBar, Step } from "react-step-progress-bar";
import styles from "./style.scss"

class Progress extends React.Component {
	render() {
		return (
		 
	  	<ProgressBar
      	percent={this.props.percent}
      	fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      	hasStepZero={true}
      >
      	{this.props.steps.map((step, index) => 
	        <Step 
	        	key={step.id}
	        	transition="scale"
	        >
	          
	          {({ accomplished }) => (
	            <span 
	            	className="progress__node"
	            	style={{ filter: `grayscale(${accomplished ? 0 : step.activePercentage}%)` }}
	            >
	            </span> 
	          )}

	        </Step>
	      )}
      </ProgressBar>

		)
	}
}

export default Progress
