
import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	<span className="lsg__code--gray">// Colors within swatches should be written inline, instead of bloating the css</span>
		  	
		  	<br/>
		  	&lt;
			  	<span className="lsg__code--red">ul </span>
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"swatches"</span> 
			  &gt;

			  	<br/>
			  	&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">li</span>
				  &gt;&lt;
				  	<span className="lsg__code--red">span </span>
				  	<span className="lsg__code--green">style</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"background-color: #color-code"</span>
				  &gt;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
				  &gt;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">li</span>
				  &gt;

				  <br/>
			  	&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">li</span>
				  &gt;&lt;
				  	<span className="lsg__code--red">span </span>
				  	<span className="lsg__code--green">style</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"background-color: #add-more-colors"</span>
				  &gt;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
				  &gt;&lt;
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