import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">RadioList</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">radioList</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;&#91;</span>

			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"radio-one"</span>,&nbsp;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Henry IV"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"radio-two"</span>,&nbsp;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Henry V"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"radio-thee"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Henry VI"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"radio-four"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Edward IV"</span>&nbsp;&#125;,</span>
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">id</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"radio-five"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Richard III"</span>&nbsp;&#125;</span>

			  	<br/>
			  	&nbsp;&nbsp;<span>&#93;&#125;</span>
			  	<br/>
			  <span>/</span>
			  &gt;

			  <br/><br/>
			  <span className="lsg__code--gray">// For disabled list</span>
			  <br/>
			  &lt;
			  	<span className="lsg__code--red">RadioList</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">radioList</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;&#91;</span>

			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;
			  		<span>&#123;&nbsp;
			  			<span className="lsg__code--yellow">id</span>
				  		<span className="lsg__code--purple">:</span>&nbsp;
				  		<span className="lsg__code--yellow">"radio-one"</span>,&nbsp;
				  		<span className="lsg__code--yellow">label</span>
				  		<span className="lsg__code--purple">:</span>&nbsp;
				  		<span className="lsg__code--yellow">"Disabled"</span>,
			  		</span>
			  		&nbsp;
			  		<span className="lsg__code--yellow">disabled</span>
			  		<span className="lsg__code--purple">:</span>&nbsp;
			  		<span className="lsg__code--purple">true</span>&nbsp;&#125;
			  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;
			  		<span>&#123;&nbsp;
			  			<span className="lsg__code--yellow">id</span>
			  			<span className="lsg__code--purple">:</span>&nbsp;
			  			<span className="lsg__code--yellow">"radio-two"</span>,&nbsp;
			  			<span className="lsg__code--yellow">label</span>
			  			<span className="lsg__code--purple">:</span>&nbsp;
			  			<span className="lsg__code--yellow">"Disabled Selected"</span>,&nbsp;
				  		<span className="lsg__code--yellow">disabled</span>
				  		<span className="lsg__code--purple">:</span>&nbsp;
				  		<span className="lsg__code--purple">true</span>,&nbsp;
				  		<span className="lsg__code--yellow">checked</span>
				  		<span className="lsg__code--purple">:</span>&nbsp;
				  		<span className="lsg__code--purple">true</span>&nbsp;
				  		&#125;
			  		</span>

			  	<br/>
			  	&nbsp;&nbsp;<span>&#93;&#125;</span>
			  	<br/>
			  <span>/</span>
			  &gt;
			</pre>
		)
	}
}

export default CodeReact