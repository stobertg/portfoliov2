import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	{this.props.wBtn
		  		? <span>
		  				<span className="lsg__code--gray">// Attrs specific to the input with attached button</span> 
		  				<br/>
		  				<span className="lsg__code--gray">// All other Attrs can be found on the input page</span> 
		  				<br/><br/>
		  				&lt;
						  	<span className="lsg__code--red">Input</span> 

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">id</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"name"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">label</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"Field label"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">btn</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"Action"</span>

						  	<br/>
						  	<span>/</span>
						  &gt;
		  			</span>

		  		: <span>
		  				&lt;
						  	<span className="lsg__code--red">Input</span> 

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">id</span>
						  	<span className="lsg__code--red">=</span>
						  	&#123;
						  	<span>props</span>
						  	<span className="lsg__code--red">.</span>
						  	<span>id</span>&#125;

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">label</span>
						  	<span className="lsg__code--red">=</span>
						  	&#123;
						  	<span>props</span>
						  	<span className="lsg__code--red">.</span>
						  	<span>label</span>&#125;

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">type</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"email" | "file" | "number" | "password" | "tel" | "text"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">alert</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"success" | "warning" | "error"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">alertText</span>
						  	<span className="lsg__code--red">=</span>
						  	&#123;
						  	<span>props</span>
						  	<span className="lsg__code--red">.</span>
						  	<span>alertText</span>&#125;

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">inputDescp</span>
						  	<span className="lsg__code--red">=</span>
						  	&#123;
						  	<span>props</span>
						  	<span className="lsg__code--red">.</span>
						  	<span>inputDescp</span>&#125;&nbsp;
						  	<span className="lsg__code--gray">// Optional hint text below the input</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">value</span>
						  	<span className="lsg__code--red">=</span>
						  	&#123;
						  	<span>props</span>
						  	<span className="lsg__code--red">.</span>
						  	<span>value</span>&#125;&nbsp;
						  	<span className="lsg__code--gray">// Optional default value</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">tooltip</span>
						  	<span className="lsg__code--red">=</span>
						  	&#123;
						  	<span>props</span>
						  	<span className="lsg__code--red">.</span>
						  	<span>tooltip</span>&#125;&nbsp;
						  	<span className="lsg__code--gray">// Optional tooltip on the right of the input</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">small</span>
						  	&nbsp;<span className="lsg__code--gray">// Optional - smaller width</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">required</span>
						  	&nbsp;<span className="lsg__code--gray">// Optional - if input is required</span>
						  	<br/>
						  	<span>/</span>
						  &gt;
		  			</span>
		  	}
		  	
			</pre>
		)
	}
}

export default CodeReact