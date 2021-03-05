import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">div </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"font__{this.props.size}"</span>
			  &gt;

			  <br/>
			  &nbsp;&nbsp;&lt;
			  	<span className="lsg__code--red">strong</span>
			  	&gt;{this.props.text}&lt;/
			  	<span className="lsg__code--red">strong</span>
			  &gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">div</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml