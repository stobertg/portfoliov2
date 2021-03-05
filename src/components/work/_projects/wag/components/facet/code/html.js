import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">ul </span>
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"facets"</span>
			  &gt;

			  	<br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">li </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"facet"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">tabindex</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"0"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">role</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"button"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">span </span> 
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"icon icon__facet"</span>
					  &gt;&lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">span</span>
				  	&gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">span</span> 
					  &gt;<span>Facet title</span>&lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">span</span>
				  	&gt;

				  <br/>
			  	&nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">li</span>
			  	&gt;

		  	<br/>
		  	&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">ul</span>
		  	&gt;
			</pre>
		)
	}
}

export default CodeHtml