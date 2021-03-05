import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">figure </span>
			  	<span className="lsg__code--green">class</span>
				  <span className="lsg__code--red">=</span>
				  <span className="lsg__code--yellow">"flag__corner"</span>
			  &gt;&lt;
			  	<span className="lsg__code--red">p</span>
			  &gt;<span>Due today</span>&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">p</span>
		  	&gt;&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">figure</span>
		  	&gt;
			</pre>
		)
	}
}

export default CodeHtml