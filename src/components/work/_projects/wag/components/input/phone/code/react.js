import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Input</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">id</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"tel"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">type</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"tel"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">label</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Phone number"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">placeholder</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"123-456-7890"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">max</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"12"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">small </span>
			  	<span className="lsg__code--gray">// Optional - smaller width</span>

			  	<br/>
			  	<span>/</span>
			  &gt;
			</pre>
		)
	}
}

export default CodeReact