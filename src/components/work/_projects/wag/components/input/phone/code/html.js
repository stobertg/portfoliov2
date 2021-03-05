import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">div </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"form__input input__fifty-fifty"</span>
			  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"input__contain"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">input </span> 
					  	<span className="lsg__code--green">type</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"text"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">id</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"phone-number"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">name</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"phone-number"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">aria-label</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"please enter your phone number"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">required</span>
					  	<span>/</span>
					  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">label </span> 
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"input__title"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">for</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"phone-number"</span>
					  &gt;<span>Phone number (optional)</span>&lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">label</span> 
					  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span> 
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