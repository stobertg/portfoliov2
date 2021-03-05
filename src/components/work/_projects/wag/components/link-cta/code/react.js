import React from 'react'

class LinkCtaCodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
		  		<span className="lsg__code--red">p</span>
		  	&gt;&lt;
		  		<span className="lsg__code--red">Link </span>
		  		<span className="lsg__code--green">href</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"#!"</span>
		  	&gt;<span>Link title</span>&lt;
		  		<span>/</span>
		  		<span className="lsg__code--red">Link</span>
		  	&gt;&lt;
		  		<span>/</span>
		  		<span className="lsg__code--red">p</span>
		  	&gt;
			</pre>
		)
	}
}

export default LinkCtaCodeReact