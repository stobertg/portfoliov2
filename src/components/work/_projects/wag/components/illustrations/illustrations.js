import React from 'react'
import './style.scss'

class Illustrations extends React.Component {
	render() {
		return(

			<div className="illust" style={{ maxWidth: this.props.width }}>
        <img src="/illustrations/people-w-phones.png" alt="Walgreens" />
      </div>

		)
	}
}

export default Illustrations