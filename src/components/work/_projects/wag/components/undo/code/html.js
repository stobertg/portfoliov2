import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">div </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"facet"</span>
			  &gt;

			  <br/>
			  &nbsp;&nbsp;&lt;
			  	<span className="lsg__code--red">span</span>
			  	&gt;Bacitracin Ointment 30mg&lt;/
			  	<span className="lsg__code--red">span</span>
			  &gt;

		  	<br/>
			  &nbsp;&nbsp;&lt;
			  	<span className="lsg__code--red">span </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"icon icon__facet"</span>
			  &gt;

		  	<br/>
			  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
			  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
			  <span className="lsg__code--green">xlink:href</span>
			  <span className="lsg__code--red">=</span>
			  <span className="lsg__code--yellow">"/icons/symbol-defs.svg#icon__dismiss"</span>
			  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

			  <br/>
			  &nbsp;&nbsp;&lt;/
			  	<span className="lsg__code--red">span</span> 
			  &gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">div</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml