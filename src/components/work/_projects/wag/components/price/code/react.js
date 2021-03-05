import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;<span className="lsg__code--red">ProductPrice</span> 

		  	<br />&nbsp;&nbsp;
		  	<span className="lsg__code--green">dollars</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"10"</span>

		  	<br />&nbsp;&nbsp;
		  	<span className="lsg__code--green">cents</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"66"</span>

				<br />
				&nbsp;&nbsp;
		  	<span className="lsg__code--green">color</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"red" </span>
		  	<span className="lsg__code--gray">// Optional - by default, the color is black</span>

		  	<br />&nbsp;&nbsp;
		  	<span className="lsg__code--green">size</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"large" | "small" </span>
		  	<span className="lsg__code--gray">// Optional - Large is the first example in red, small is the example on the bottom</span>

		  	<br />&nbsp;&nbsp;
		  	<span className="lsg__code--green">quantity</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"1" </span>
		  	<span className="lsg__code--gray">// Optional - Should only be used for size small - provides the number and / to the left of the price</span>
		  	<br />
		  	<span>/</span>&gt;

		  	<br/><br/>
		  	<span className="lsg__code--gray">// For inline prices, wrap prices inside of PriceInline component</span>
		  	<br/>
		  	&lt;<span className="lsg__code--red">PriceInline</span>&gt;

		  	<br />
		  	&nbsp;&nbsp;&lt;<span className="lsg__code--red">ProductPrice</span> 

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">dollars</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"10"</span>

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">cents</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"66"</span>

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">size</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"small"</span>

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">quantity</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"2"</span>
		  	<br />
		  	&nbsp;&nbsp;
		  	<span>/</span>&gt;

		  	<br /><br />
		  	&nbsp;&nbsp;&lt;<span className="lsg__code--red">div</span>&gt;or&lt;<span>/</span><span className="lsg__code--red">div</span>&gt;

		  	<br /><br />
		  	&nbsp;&nbsp;&lt;<span className="lsg__code--red">ProductPrice</span> 

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">dollars</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"5"</span>

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">cents</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"33"</span>

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">size</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"small"</span>

		  	<br />&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--green">quantity</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"1"</span>
		  	<br />
		  	&nbsp;&nbsp;
		  	<span>/</span>&gt;
		  	<br />
		  	&lt;
		  	<span>/</span>
		  	<span className="lsg__code--red">PriceInline</span>&gt;
			</pre>
		)
	}
}

export default CodeReact