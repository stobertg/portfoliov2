import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	<span className="lsg__code--gray">// For the horizontal slider</span>
		  	<br/>
			  &lt;
			  	<span className="lsg__code--red">div </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"slider__drag"</span>
			  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">input </span> 
				  	<span className="lsg__code--green">type</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"text"</span>

				  	&nbsp;<span className="lsg__code--green">id</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"slider__number-vertical"</span>

				  	&nbsp;<span className="lsg__code--green">readonly</span>
				  	&nbsp;<span>/</span>
				  &gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">div</span>&gt;

		  	<br/><br/>
		  	<span className="lsg__code--gray">// For the vertical slider</span>
		  	<br/>
		  	&lt;
			  	<span className="lsg__code--red">div </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"slider__drag-vertical"</span>
			  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">input </span> 
				  	<span className="lsg__code--green">type</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"text"</span>

				  	&nbsp;<span className="lsg__code--green">id</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"slider__number-vertical"</span>

				  	&nbsp;<span className="lsg__code--green">readonly</span>
				  	&nbsp;<span>/</span>
				  &gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">div</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml