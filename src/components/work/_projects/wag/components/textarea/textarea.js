
import React from 'react'
import styles from "./style.scss"

class Textarea extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      value: '',
      count: this.props.characterCount
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const charCount = event.target.value.length;
    const charLeft = this.props.characterCount - charCount;
    this.setState({ 
    	value: event.target.value,
    	count: charLeft
    });
  }

	render() {
		let props = this.props
		return (

			<div className="input__wrap">
				<div className="input__textarea">
					<label htmlFor={props.id}>{props.label}</label>
				  <textarea
				  	id={props.id}
				  	name={props.id}
				  	placeholder={props.placeholder}
				  	maxLength={props.characterCount}
				  	value={this.state.value} 
				  	onChange={this.handleChange}
				  />
				</div>

				<div className="input__descp">
					<div className="input__descp--item">
						<span>{this.state.count} characters remaining</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Textarea
