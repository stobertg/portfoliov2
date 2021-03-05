import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">ProductCarousel</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">sliderItems</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;
			  	<span className="lsg__code--orange">this</span>
			  	<span className="lsg__code--red">.</span>
			  	<span>state</span>
			  	<span className="lsg__code--red">.</span>
			  	<span>products</span>&#125;
			  	<br />
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact