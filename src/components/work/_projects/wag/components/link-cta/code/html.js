import React from 'react'

class LinkCtaCodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	<span className="lsg__code--gray">// By default, p tags have 18px font</span>
		  	<br/>
		  	&lt;
		  		<span className="lsg__code--red">p</span>
		  	&gt;&lt;
			  	<span className="lsg__code--red">a </span>
			  	<span className="lsg__code--green">href</span>
				  <span className="lsg__code--red">=</span>
				  <span className="lsg__code--yellow">"#!"</span>
			  &gt;<span>Body link 18</span>&lt;
		  		<span>/</span>
			  	<span className="lsg__code--red">a</span> 
			  &gt;&lt;
		  		<span>/</span>
		  		<span className="lsg__code--red">p</span>
		  	&gt;
			</pre>
		)
	}
}

export default LinkCtaCodeHtml