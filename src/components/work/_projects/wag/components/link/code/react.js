import React from 'react'

class LinkCodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;<span className="lsg__code--red">LinkCta</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">href</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"#!"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">linkLabel</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Refill now"</span>
		
		  		<br/>
		  		<span>/</span>
		  	&gt;
			</pre>
		)
	}
}

export default LinkCodeReact