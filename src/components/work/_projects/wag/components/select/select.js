import React from 'react'
import Icon from '../icon/icon'
import './style.scss'

class Select extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	value: this.props.defaultSelected,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

	render() {
		let options = this.props.options
		return (

			<div className="input__wrap">

        {this.props.descp
          ? <div className="input__select--descp">
              <strong>{this.props.descp}</strong>
            </div>
          : null
        }

				<div className="input__contain input__contain--active input__select">
					<label>{this.props.label}</label>
	          
          <select 
          	value={this.state.value} 
          	onChange={this.handleChange}>

          	{options.map((option, index) =>
            	<option key={option.label} value={option.label}>{option.label}</option>
          	)}
          </select>

          <Icon
            size="sm"
            title="arrow-down"
            icon="arrow-down"
          />
				</div>
			</div>

		)
	}
}

export default Select
