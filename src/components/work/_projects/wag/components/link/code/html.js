import React from 'react'

class LinkCodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
		  		<span className="lsg__code--red">a </span>
		  		<span className="lsg__code--green">href</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"#!"</span>
			  	&nbsp;
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"font__eighteen"</span>
		  	&gt;

			  	<br/>
			  	&nbsp;&nbsp;&lt;
			  	<span className="lsg__code--red">strong</span>
			  	&gt;<span>Header 18</span>&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">strong</span>
			  	&gt;

			  	<br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"icon icon__arrow-right"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
					  <span className="lsg__code--green">xlink:href</span>
					  <span className="lsg__code--red">=</span>
					  <span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__arrow-right"</span>
					  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

				  <br/>
				  &nbsp;&nbsp;&lt;/
				  	<span className="lsg__code--red">span</span> 
				  &gt;
		
		  	<br/>
		  	&lt;
		  		<span>/</span>
		  		<span className="lsg__code--red">a</span>
		  	
			</pre>
		)
	}
}

export default LinkCodeHtml