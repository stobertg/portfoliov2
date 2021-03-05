import React from 'react'
import Button from '../buttons/general/button'
import Input from '../input/input'
import './style.scss'

class Quantity extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clicks: this.props.value,
			minusDisabled: true,
			addDisabled: false
		}
	}

	incrementNum(){
    this.setState({ clicks: this.state.clicks + 1 });

    if(this.state.clicks > 0){
    	this.setState({ minusDisabled: false })
    }
  }

  decreaseNum(){
    this.setState({ clicks: this.state.clicks - 1 });

    if(this.state.clicks == 2){
    	this.setState({ minusDisabled: true })
    }
  }

	render() {
		return (
		  
		  <div className="quantity__wrap">
		  	<Button 
		  		btnCircle
		  		icon="subtract-v2"
		  		color="blue"
		  		disabled={this.state.minusDisabled}
		  		onClick={() => this.decreaseNum()}
		  	/>

	  		<Input 
	  			label="Enter the quantity"
	  			id={this.props.id}
	  			value={this.state.clicks} 
	  			min="100" 
	  			max="100"
	  			type="number"
	  			pattern="[0-9]*"
	  		/>

		  	<Button
		  		btnCircle 
		  		icon="plus-add-v2"
		  		color="blue"
		  		disabled={this.state.addDisabled}
		  		onClick={() => this.incrementNum()}
		  	/>
		  </div>

		)
	}
}

export default Quantity
