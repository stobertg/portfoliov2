
import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">ShowMore</span>
			  	&nbsp; 
			  	<span className="lsg__code--green">initialHeight</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;</span>
			  	<span className="lsg__code--purple">200</span>
			  	<span>&#125;</span>
			  &gt;

			  	<br/>&nbsp;&nbsp;
					<span className="lsg__code--gray">// Content within Show More goes here</span>

			  <br/>
			  &lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">ShowMore</span>
			  &gt;
			</pre>
		)
	}
}

export default CodeReact