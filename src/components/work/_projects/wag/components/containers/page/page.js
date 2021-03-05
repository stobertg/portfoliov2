import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import './style.scss'

class PageWrap extends React.Component {
	render() {
		return(
		  
		  <div className="page__wrap">
		  	<Header user={this.props.user} />

		  		{this.props.children}

		  	<Footer />
		  </div>

		)
	}
}

export default PageWrap