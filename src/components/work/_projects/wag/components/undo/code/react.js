import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Undo</span> 

			  	&nbsp;
			  	<span className="lsg__code--green">text</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;
			  	<span className="lsg__code--orange">this</span>
			  	<span className="lsg__code--red">.</span>
			  	<span>props</span>
			  	<span className="lsg__code--red">.</span>
			  	<span>text</span>&#125;
			  	/&gt;
			</pre>
		)
	}
}

export default CodeReact