
import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Toggle </span>

			  	<br/>
			  	&nbsp;&nbsp;<span className="lsg__code--green">id</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"name" </span>
			  	<span className="lsg__code--gray">// Associate the label with the input</span>

			  	<br/> 
			  	&nbsp;&nbsp;<span className="lsg__code--green">toggleOn </span>
			  	<span className="lsg__code--gray"> // Optional to show the toggle on by default</span>

			  <br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact