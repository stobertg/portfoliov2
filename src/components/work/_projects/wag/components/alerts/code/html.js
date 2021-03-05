import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">div </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"alert alert__blue {this.props.minimal ? 'minimal':''}"</span>
			  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">a </span> 
				  	<span className="lsg__code--green">href</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"#!"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"alert__text-contain"</span>
				  &gt;

			  	<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
			  		<span className="lsg__code--red">span </span> 
			  		<span className="lsg__code--green">class</span>
			  		<span className="lsg__code--red">=</span>
			  		<span className="lsg__code--yellow">"icon icon__alert"</span>
			  	&gt;

			  		<br/>
			  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
			  			<span className="lsg__code--red">svg</span>&gt;&lt;
			  			<span className="lsg__code--red">use </span>
			  			<span className="lsg__code--green">xlink:href</span>=
			  			<span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__alert"</span>&gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>
			  		&gt;

			 		<br/>
			 		&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
			 			<span className="lsg__code--red">span</span>
			 		&gt;

			 		<br/><br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
			  		<span className="lsg__code--red">span</span>
			  	&gt;

				 		<br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  		<span className="lsg__code--red">p</span>&gt;Information alert.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tortor.&lt;/<span className="lsg__code--red">p</span>
				  	&gt;

			  	<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
			  		<span>/</span>
			  		<span className="lsg__code--red">span</span>
			  	&gt;

			  	<br/>
			  	&nbsp;&nbsp;&lt;/
			  		<span className="lsg__code--red">a</span>
			  	&gt;

			  	<br/><br/>
			  	&nbsp;&nbsp;&lt;
			  		<span className="lsg__code--red">button </span>
			  		<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"btn action__dismiss-alert icon icon__dismiss-v2 btn-close-icon"</span>
			  	&gt;

			  		<br/>
			  		&nbsp;&nbsp;&nbsp;&nbsp;&lt;
			  			<span className="lsg__code--red">svg</span>&gt;&lt;
			  			<span className="lsg__code--red">use </span>
			  			<span className="lsg__code--green">xlink:href</span>=
			  			<span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__dismiss-v2"</span>&gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>
			  		&gt;

			  	<br/>
			  	&nbsp;&nbsp;&lt;
			  		<span>/</span>
			  		<span className="lsg__code--red">button</span>
			  	&gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">div</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml