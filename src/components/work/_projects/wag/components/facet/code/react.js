import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">FacetList</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">facets</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;&#91;</span>

			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">title</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Facet one"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">title</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Facet two"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">title</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Facet three"</span>&nbsp;&#125;,</span>

			  	<br/>
			  	&nbsp;&nbsp;<span>&#93;&#125;</span>
			  	<br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact