import React from 'react'
import Product from '../product/product'
import Icon from '../icon/icon'
import Slider from "react-slick";
import Button from '../buttons/general/button'
import './style.scss'

class ProductCarousel extends React.Component {
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

		  			<Product 
		  				key={ item.id }
              employee={ item.employee }
              image={ item.image }
              title={ item.title }
              price={ item.price }
              rating={ item.rating }
            />
			  	
      		)}

		  	</Slider>
		  </div>

		)
	}
}

export default ProductCarousel
