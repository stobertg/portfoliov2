import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
		  		<span className="lsg__code--red">Search </span>

		  		<br/>
			  	&nbsp;&nbsp;
		  		<span className="lsg__code--green">placeholder</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Search"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">results</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;&#91;</span>
			  	<span className="lsg__code--gray"> // If results are not needed, do not include this Attr</span>

			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--purple">1</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Search item 1"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--purple">2</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Search item 2"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--purple">3</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Search item 3"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--purple">4</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Search item 4"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--purple">5</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Search item 5"</span>&nbsp;&#125;</span>
		  		
		  		<br/>
		  		&nbsp;&nbsp;&#93;&#125;

			  	<br/>
		  		<span>/</span>
		  	&gt;
			</pre>
		)
	}
}

export default CodeReact