
import React from 'react'
import styles from "./style.scss"

// Components needed

import Swatch from "./swatch"

class SwatchList extends React.Component {
	render() {
		return (

  		<div className="swatch__list">
	  		{this.props.swatches.map(swatch =>
  				<Swatch 
  					key={swatch.id}
  					id={swatch.id}
  					hex={swatch.hex}
  					text={swatch.text}
  				/>
	  		)}
	  	</div>

		)
	}
}

export default SwatchList
