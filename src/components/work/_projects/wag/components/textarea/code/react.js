import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Textarea</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">id</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"textarea"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">label</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Label"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">placeholder</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Placeholder text"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">characterCount</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"500"</span>

			  	<br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact