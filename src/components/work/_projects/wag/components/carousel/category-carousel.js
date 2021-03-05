import React from 'react'
import Product from '../product/product'
import Card from '../card/card'
import CardItem from '../card/item/card-item'
import Slider from "react-slick";
import Button from '../buttons/general/button'
import './style.scss'

class CategoryCarousel extends React.Component {
	render() {
		return (
		  
		  <div className="carousel__wrap">
		  	<Slider
		  		dots={false}
		      infinite={false}
		      speed={500}
		      slidesToShow={4}
		      slidesToScroll={4}
		      nextArrow={
		      	<Button 
			      	className="btn__carousel" 
			      	btnCircle 
			      	color="blue" 
			      	icon="arrow-right" 
		      	/>
		      }
		      prevArrow={
		      	<Button 
		      		className="btn__carousel" 
		      		btnCircle 
		      		color="blue" 
		      		icon="arrow-left" 
		      	/>
		      }
		  	>

		  		{ this.props.sliderItems.map((item, index) =>

		  			<a href="#!">
		  				<Card key={ item.id }>
		  					<CardItem>
		  						<img src={ item.image } />
		  					</CardItem>

		  					<CardItem>
		  						<strong>{ item.title }</strong>
		  					</CardItem>
		  				</Card>
			  		</a>
			  		
      		)}

		  	</Slider>
		  </div>

		)
	}
}

export default CategoryCarousel
