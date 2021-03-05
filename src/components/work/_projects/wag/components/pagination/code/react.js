import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Pagination</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">value</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;</span>
			  	<span className="lsg__code--purple">1</span>
			  	<span>&#125;</span>
			  	&nbsp;<span className="lsg__code--gray">// Set the default value</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">totalPages</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;</span>
			  	<span className="lsg__code--purple">25</span>
			  	<span>&#125;</span>
			  	&nbsp;<span className="lsg__code--gray">// Set the total page value</span>
			  	<br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact