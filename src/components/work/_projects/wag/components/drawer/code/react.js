import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Drawer</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">title</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Lorem ipsum"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">content</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Add content text here..."</span>

			  	<br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact