import React from 'react'
import styles from "./style.scss"

class ProductPrice extends React.Component {

	render() {
		let price = this.props
		return (

	  	<div className="product__price--wrap">	
	  		<div className="product__price--contain">
			  	<div 
			  		aria-label={`${this.props.quantity ? this.props.quantity + ' for':''} ${this.props.dollar} dollars ${this.props.cents} cents`}
			  		className={`product__price ${this.props.color ? 'product__price--' + this.props.color :''} ${this.props.size ? 'product__price--' + this.props.size:''}`}
			  	>
			  		{this.props.quantity 
			  			? <strong>{this.props.quantity}&nbsp;/&nbsp;</strong>
			  			: null
			  		}

			  		<sup><strong>$</strong></sup>
			  		<span><strong>{this.props.dollar}</strong></span>

			  		{this.props.size == "small"
			  			? <span>.</span>
			  			: null
			  		}

			  		<sup><strong>{this.props.cents}</strong></sup>
			  	</div>

			  	{price.priceByWeight || price.priceByMaterial 
			  		? <div className="product__price--breakdown">
					  		<span>${price.priceByWeight || price.priceByMaterial} / {price.weight || price.material}</span>
					  	</div>
				  	: null
				  }
			  </div>

			  {price.deal 
			  	? <div className="product__price--deal">
				  		<strong>{price.deal}</strong>
				  	</div>
				  : null
			  }

			  {this.props.employee 
			  	? <div className="tag">
		  				<span>•</span>
		  				<span><strong>Employee {price.employee}</strong></span>
		  			</div>
		  		: null
	  		}
		  </div>

		)
	}
}

export default ProductPrice
