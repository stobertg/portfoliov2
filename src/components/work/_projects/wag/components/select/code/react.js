import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Select</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">descp</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Description text" </span>
			  	<span className="lsg__code--gray">// Optional text if needed on the top of the input</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">label</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Pick your favorite Plantagenet king:"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">defaultSelected</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Henry V"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">options</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;&#91;</span>

			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Select option"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Henry II"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Richard I"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"John"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Henry III"</span>&nbsp;&#125;</span>

			  	<br/>
			  	&nbsp;&nbsp;<span>&#93;&#125;</span>
			  	<br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact