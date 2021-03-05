import React from 'react'
import Link from '../link/link'
import Icon from '../icon/icon'
import './style.scss'

class CheckBox extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			checked: this.props.checked
		}
	}

	handleClick(){
		this.setState({ checked: !this.state.checked });
	}

	render() {
		return (

      <div className="input__wrap">
      	<button 
          role="checkbox"
          type="button"
      		className="checkbox"
          aria-checked={`${this.state.checked ? 'true':'false'}`}
      		disabled={this.props.disabled}
      		onClick={() => this.handleClick()}
          >

        	<label htmlFor={this.props.id}>
        		<span className={`checkbox__box ${this.state.checked ? 'checkbox__box--checked':''}`}>
              <Icon
                title="check"
                icon="check--v2"
              />  
        		</span>

            {this.props.linkTitle
              ? <span>{this.props.label}&nbsp;<Link href={this.props.link}>{this.props.linkTitle}</Link></span>
              : <span>{this.props.label}</span>
            }
        	</label>

          <input 
          	id={this.props.id} 
          	type="checkbox" 
          	tabIndex="-1"
            defaultChecked={this.state.checked}
          />
        </button>
      </div>

		)
	}
}

export default CheckBox