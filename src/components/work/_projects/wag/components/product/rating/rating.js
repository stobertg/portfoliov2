import React from 'react'
import styles from "./style.scss"

class ProductRating extends React.Component {

	render() {
		return (

	  	<div className="product__rating">
	  		<span className="product__rating--stars">
	  			<span><img src={this.props.rating.stars} alt="Rating" /></span>
	  			<span>({this.props.rating.ratingNum})</span>
	  		</span>

	  		{this.props.rating.fsa ?
		  		<span className="product__rating--fsa">
		  			<img src="/icons/ratings/fsa.png" alt="FSA" />
		  		</span>:null
		  	}
	  	</div>

		)
	}
}

export default ProductRating
