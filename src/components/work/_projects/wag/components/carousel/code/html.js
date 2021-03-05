import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">div </span>
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span> 
			  	<span className="lsg__code--yellow">"slider__wrap"</span>
			  &gt;

			  	<br/>
			  	&nbsp;&nbsp;&lt;
			  	<span className="lsg__code--red">div </span>
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span> 
			  	<span className="lsg__code--yellow">"slider white"</span>
			  	&gt;

			  		<br/><br/>
			  		&nbsp;&nbsp;&nbsp;&nbsp;
			  		<span className="lsg__code--gray">// Content that lives inside of the carosel is wrapped in this tag</span>
				  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">div </span>
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span> 
				  	<span className="lsg__code--yellow">"carousel-cell"</span>
				  	&gt;&lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">div</span>
					  &gt;

			  	<br/><br/>
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