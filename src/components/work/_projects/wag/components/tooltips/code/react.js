
import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Tooltip</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">placement</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"top" | "bottom"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">text</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;</span>
			  	<span className="lsg__code--orange">this</span>
			  	<span className="lsg__code--red">.</span>
			  	<span>props</span>
			  	<span className="lsg__code--red">.</span>
			  	<span>text&#125;</span>
			  	<br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact