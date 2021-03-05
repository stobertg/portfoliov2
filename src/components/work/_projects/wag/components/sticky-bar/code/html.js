
import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">div </span>
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"sticky__bar"</span> 
			  &gt;

			  	<br/>
			  	&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">div </span>
				  	<span className="lsg__code--green">class</span>
			  		<span className="lsg__code--red">=</span>
			  		<span className="lsg__code--yellow">"content__container"</span> 
				  &gt;

				  	<br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">a </span>
					  	<span className="lsg__code--green">href</span>
				  		<span className="lsg__code--red">=</span>
				  		<span className="lsg__code--yellow">"#!"</span> 
				  		&nbsp;
				  		<span className="lsg__code--green">class</span>
				  		<span className="lsg__code--red">=</span>
				  		<span className="lsg__code--yellow">"btn btn__blue"</span> 
					  &gt;<span>Continue</span>&lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">a</span>
					  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">div</span>
				  &gt;
			  
			  <br/>
			  &lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">div</span>
			  &gt;
			</pre>
		)
	}
}

export default CodeHtml