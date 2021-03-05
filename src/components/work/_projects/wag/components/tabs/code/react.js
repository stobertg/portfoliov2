import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
	  		<span className="lsg__code--blue">class</span>&nbsp;
	  		<span className="lsg__code--green">Page</span>&nbsp;
	  		<span className="lsg__code--blue">extends</span>&nbsp;
	  		<span>React</span>
	  		<span className="lsg__code--red">.</span>
	  		<span>Component</span>&nbsp;&#123;
	  		<br/>
	  		&nbsp;&nbsp;
	  		<span className="lsg__code--green">constructor</span>
	  		<span>(<span className="lsg__code--orange">props</span>)&#123;</span>
	  		<br/>
	  		&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--orange">super</span>
	  		<span>(props);</span>
	  		<br/>
	  		&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--orange">this</span>
	  		<span className="lsg__code--red">.</span>
	  		<span>state</span>&nbsp;
	  		<span className="lsg__code--red">=</span>&nbsp;&#123;
	  		<br/>
	  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--yellow">tabActive</span>
	  		<span className="lsg__code--purple">:</span>&nbsp;
	  		<span className="lsg__code--purple">0</span>
	  		<span>,</span>
	  		<br />
	  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--yellow">tabs</span>
	  		<span className="lsg__code--purple">:</span>&nbsp;&#91;
	  		<br/>

	  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--yellow">id</span>
	  		<span className="lsg__code--purple">:</span>&nbsp;
	  		<span className="lsg__code--purple">0</span>
	  		<span>,</span>

	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--yellow">label</span>
	  		<span className="lsg__code--purple">:</span>&nbsp;
	  		<span className="lsg__code--yellow">"</span>
	  		<span className="lsg__code--yellow">Tab item 1</span>
	  		<span className="lsg__code--yellow">"</span>
	  		<span>,</span>

	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--yellow">content</span>
	  		<span className="lsg__code--purple">:</span>&nbsp;
	  		<span className="lsg__code--yellow">"</span>
	  		<span className="lsg__code--yellow">Tab content 1</span>
	  		<span className="lsg__code--yellow">"</span>
	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
	  		<span>,</span>

	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--yellow">id</span>
	  		<span className="lsg__code--purple">:</span>&nbsp;
	  		<span className="lsg__code--purple">1</span>
	  		<span>,</span>

	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--yellow">label</span>
	  		<span className="lsg__code--purple">:</span>&nbsp;
	  		<span className="lsg__code--yellow">"</span>
	  		<span className="lsg__code--yellow">Tab item 2</span>
	  		<span className="lsg__code--yellow">"</span>
	  		<span>,</span>

	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--yellow">content</span>
	  		<span className="lsg__code--purple">:</span>&nbsp;
	  		<span className="lsg__code--yellow">"</span>
	  		<span className="lsg__code--yellow">Tab content 2</span>
	  		<span className="lsg__code--yellow">"</span>
	  		<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;

	  		<br/>
	  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#93;
	  		<br/>
	  		&nbsp;&nbsp;&nbsp;&nbsp;&#125;
	  		<br/>
	  		&nbsp;&nbsp;&#125;
	  		<br/><br/>

	  		&nbsp;&nbsp;
	  		<span className="lsg__code--green">render</span>
	  		<span>()</span>&nbsp;&#123;
	  		<br/>
	  		&nbsp;&nbsp;&nbsp;&nbsp;
	  		<span className="lsg__code--red">return</span>&nbsp;&#40;

	  		<br/><br />
		  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  	&lt;<span className="lsg__code--red">TabList</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">tabsNeutral </span>
		  	<span className="lsg__code--gray">// Optional - Neutral background</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">tabsFullWidth </span>
		  	<span className="lsg__code--gray">// Optional - for full width implementation (i.e. Rx refill hub)</span>

			<br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">tabs</span>
		  	<span className="lsg__code--red">=</span>
		  	&#123;
		  	<span className="lsg__code--orange">this</span>
		  	<span className="lsg__code--red">.</span>
		  	<span>state</span>
		  	<span className="lsg__code--red">.</span>
		  	<span>tabs</span>&#125;

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">tabActive</span>
		  	<span className="lsg__code--red">=</span>
		  	&#123;
		  	<span className="lsg__code--orange">this</span>
		  	<span className="lsg__code--red">.</span>
		  	<span>state</span>
		  	<span className="lsg__code--red">.</span>
		  	<span>tabActive</span>&#125;
		  	<br />
		  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
		  	<br/><br />
		  	&nbsp;&nbsp;&nbsp;&nbsp;&#41;
		  	<br/>
		  	&nbsp;&nbsp;&#125;
		  	<br/>
		  	&#125;
			</pre>
		)
	}
}

export default CodeReact