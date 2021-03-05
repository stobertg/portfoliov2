import React from 'react'
import ButtonContainer from '../buttons/container/container'
import Card from '../card/card'
import CardItem from '../card/item/card-item'
import Button from '../buttons/general/button'
import CouponImg from '../../../../../../images/wag/products/gain.jpg'
import './style.scss'

class Coupon extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clipped: false
		}
	}

	render() {
		return (

    	<Card cardType="coupon">
    		<a href={this.props.productLink}>
		      <figure>
		        <div className="card__product--img">
		          <img src={ CouponImg } alt={this.props.poductName} />
		        </div>

		        <figcaption>
		        	<CardItem>
		        		<div className="card__item--expiration">Expires {this.props.expiration}</div>
		        		<div className="card__item--brand"><strong>{this.props.brand}</strong></div>
		        		<div className="card__item--deal"><strong>{this.props.deal}</strong></div>
		        	</CardItem>
		        	
		        	<CardItem 
		        		description={this.props.description}
		        	/>

		        	<CardItem>
		        		<span>View details</span>
		        	</CardItem>
		        </figcaption>
		      </figure>
        </a>

        <ButtonContainer className={this.props.shopLink ? '':'btn__contain--full'}>
        	<Button 
        		clickAnimation
        		title="Clip"
        		color="blue"
        		clickedIcon="check-v2"
        		clickedTitle="Clipped"
        		onClick={this.props.clipClick}
        	/>

        	{this.props.shopLink
        		? <Button
							  title="Shop"
							  color="tint-blue"
							  href={this.props.shopLink}
							/>

        		: null
        	}
        </ButtonContainer>
      </Card>

		)
	}
}

export default Coupon