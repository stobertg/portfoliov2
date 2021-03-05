import React from 'react'
import './style.scss'

class Card extends React.Component {
	render() {
		return (

      <div className="card__contain" style={this.props.style}>
      	<div className={`card ${this.props.cardType ? 'card__'+ this.props.cardType:''} ${this.props.bgColor ? 'card__' + this.props.bgColor:''}`}>

      		{this.props.bgImg 
          	? <div className="card__bg--img">
  		          <img src={this.props.bgImg} alt={this.props.bgImgAltText} />
  		        </div>

  		      : null
          } 

          {this.props.heroImg
            ? <div className={`card__hero ${this.props.heroImgAlign ? 'card__hero--' + this.props.heroImgAlign:''} ${this.props.heroImgSize ? 'card__hero--' + this.props.heroImgSize:''}`}>
                <img src={this.props.heroImg} alt={this.props.heroImgAlt} />
              </div>
            : null
          }

          <div className="card__content">
            {this.props.imgThumb
              ? <div className={`card__img--thumb ${this.props.imgThumbSize ? 'card__img--thumb-' + this.props.imgThumbSize:''}`}>
                  <img src={this.props.imgThumb} alt={this.props.imgThumbAlt} />
                </div>
              : null
            }

            {this.props.children}
          </div>   
        </div>
      </div>

		)
	}
}

export default Card