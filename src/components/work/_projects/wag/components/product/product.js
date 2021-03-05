import React from 'react'
import ButtonContainer from '../buttons/container/container'
import Button from '../buttons/general/button'
import Card from '../card/card'
import CardItem from '../card/item/card-item'
import ProductPrice from '../price/price'
import ProductRating from './rating/rating'
import CheckBox from '../checkboxes/checkbox'
import './style.scss'


class Product extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false
		}
	}

	render() {
		let props = this.props
		return (
		  
		  <Card cardType="product" key={this.props.key}>
		  	<div className="product__item">
			  	<CardItem>
			  		<a href="#!">
			  			{props.image ?
						  	<div className="card__product--img">
						  		<img src={props.image} alt={props.title} />
						  	</div>: null
						  }

					  	<div className="card__product--title">
					  		<span>{props.title}</span>
					  	</div>
				  	</a>
				  </CardItem>

				  {props.rating ? 
					  <CardItem>
					  	<ProductRating rating={props.rating}/>
					  </CardItem>: null
					}

					{props.price.price 
						? <CardItem>
						  	<ProductPrice 
						  		dollar="10"
						  		cents="66"
						  		employee={props.employee} 
						  		inStock={props.inStock}
						  	/>
					  	</CardItem>
					  : <CardItem><span>Price available in store</span></CardItem>
					}
				</div>

				{this.props.inStock ?
					<div className="product__item--purchase">
						{props.inStock ?
						  <CardItem>
						  	<ButtonContainer vertical>
							  	<Button
							  		title="Find at store"
							  		color="tint-blue"
							  	/>

							  	<Button
							  		title="Add to cart"
							  		color="blue"
							  		href="#!"
							  	/>
							  </ButtonContainer>
							</CardItem>:null
						}

						{this.props.compare ?
						  <CardItem>
						  	<CheckBox label="Compare" />
						  </CardItem>:null
						}
					 </div>: null
				}
		  </Card>

		)
	}
}

export default Product
