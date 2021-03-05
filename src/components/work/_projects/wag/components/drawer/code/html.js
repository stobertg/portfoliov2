import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">div </span>
			  	<span className="lsg__code--green">class</span>
				  <span className="lsg__code--red">=</span>
				  <span className="lsg__code--yellow">"drawer drawer__neutral"</span>
			  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span>
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"drawer__title"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">strong</span>
					  	&gt;<span>Drawer title goes here</span>&lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">strong</span>
					  &gt;

					  <br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  		<span className="lsg__code--red">span </span> 
				  		<span className="lsg__code--green">class</span>
				  		<span className="lsg__code--red">=</span>
				  		<span className="lsg__code--yellow">"icon icon__arrow-down"</span>
				  	&gt;

				  		<br/>
				  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  			<span className="lsg__code--red">svg</span>&gt;&lt;
				  			<span className="lsg__code--red">use </span>
				  			<span className="lsg__code--green">xlink:href</span>=
				  			<span className="lsg__code--yellow">"/icons/symbol-defs.svg#icon__arrow-down"</span>&gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>
				  		&gt;

				 		<br/>
				 		&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				 			<span>/</span>
				 			<span className="lsg__code--red">span</span>
				 		&gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
				  &gt;

				  <br/><br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">p</span>
				  	&gt;<span>Drawer text goes here</span>&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">p</span>
				  &gt;
			  
		  	<br/>
		  	&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">div</span>
		  	&gt;
			</pre>
		)
	}
}

export default CodeHtml