import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">div </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"tool-tip"</span>
			  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"tool-tip__trigger"</span>

				  	&nbsp;<span className="lsg__code--green">role</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"button"</span>

				  	&nbsp;<span className="lsg__code--green">tabindex</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"0"</span>

				  	&nbsp;<span className="lsg__code--green">aria-describedby</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"tool-tip__text-2"</span>
				  &gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"tool-tip__title"</span>

				  	&nbsp;<span className="lsg__code--green">aria-hidden</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"true"</span>
				  &gt;Tooltip left - neutral&lt;/<span className="lsg__code--red">span</span>&gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">div </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"tool-tip__contain"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">span </span> 
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"icon icon__question-mark"</span>
					  &gt;

					  	<br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
						  	<span className="lsg__code--green">xlink:href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"/icons/symbol-defs.svg#icon__question-mark"</span>
						  	&gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

					  <br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
					  	<span className="lsg__code--red">span</span> 
					  &gt;

					  <br/><br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">div </span> 
					  	<span className="lsg__code--green">id</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"tool-tip__text-2" </span>

					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"tool-tip__overlay tool-tip__blue" </span>

					  	<span className="lsg__code--green">role</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"tooltip" </span>

					  	<span className="lsg__code--green">title</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"help information" </span>

					  	<span className="lsg__code--green">aria-label</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"tool-top-aria-label"</span>
					  &gt;

					  <br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  <span className="lsg__code--red">p</span>&gt;Text goes here&lt;/<span className="lsg__code--red">p</span>&gt;

					  <br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="lsg__code--red">div</span>&gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="lsg__code--red">div</span>&gt;


			  	<br/>
			  	&nbsp;&nbsp;&lt;/
			  		<span className="lsg__code--red">span</span>
			  	&gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">div</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml