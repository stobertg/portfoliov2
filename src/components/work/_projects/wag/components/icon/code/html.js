import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;<span className="lsg__code--red">span</span>
		  	<span className="lsg__code--green">&nbsp;class</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"icon icon__pill-bottle-clock"</span>
		  	&gt;

		  	<br/>
		  	&nbsp;
		  	&lt;<span className="lsg__code--red">svg</span>
		  	<span className="lsg__code--green">&nbsp;aria-label</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"pill bottle clock"</span>
		  	&gt;

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
	  		<span className="lsg__code--red">use </span>
	  		<span className="lsg__code--green">xlink:href</span>=
	  		<span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__pill-bottle-clock"</span>
	  		&gt;&lt;/<span className="lsg__code--red">use</span>
	  		&gt;

		  	<br/>&nbsp;&nbsp;&lt;/<span className="lsg__code--red">svg</span>&gt;
		  	<br/>&lt;/<span className="lsg__code--red">span</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml