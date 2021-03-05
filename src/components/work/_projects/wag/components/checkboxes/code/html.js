import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">span </span>
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"check-box"</span>
			  &gt;

			  	<br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">input </span> 
				  	<span className="lsg__code--green">id</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"check-one"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">tabindex</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"0"</span>
				  	<span>/</span>
				  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">label </span> 
				  	<span className="lsg__code--green">for</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"check-one"</span>
				  &gt;&lt;
				  	<span className="lsg__code--red">span </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"check"</span>
				  &gt;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
			  	&gt;&lt;
				  	<span className="lsg__code--red">span</span> 
				  &gt;<span>Text</span>&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
			  	&gt;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">label</span>
			  	&gt;

		  	<br/>
		  	&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">span</span>
		  	&gt;
			</pre>
		)
	}
}

export default CodeHtml