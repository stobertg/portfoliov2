import React from 'react'
import Button from '../buttons/general/button'
import Input from '../input/input'
import './style.scss'

class Pagination extends React.Component {
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
		  
		  <div className="pagination__wrap">
		  	<Button 
		  		btnCircle
		  		icon="arrow-left"
		  		color="blue"
		  		disabled={this.state.minusDisabled}
		  		onClick={() => this.decreaseNum()}
		  	/>

		  	<div className="pagination">
		  		<Input 
		  			label="Enter the desired page"
		  			id="pagination"
		  			value={this.state.clicks} 
		  			min="100" 
		  			max="100"
		  			type="number"
		  			pattern="[0-9]*"
		  		/>

		  		<span><strong>of {this.props.totalPages}</strong></span>
		  	</div>

		  	<Button
		  		btnCircle 
		  		icon="arrow-right"
		  		color="blue"
		  		disabled={this.state.addDisabled}
		  		onClick={() => this.incrementNum()}
		  	/>
		  </div>

		)
	}
}

export default Pagination
