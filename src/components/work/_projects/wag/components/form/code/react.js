import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Form</span> 
			  &gt;

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">action</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"/"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">method</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"get"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">legend</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"This is the legend of the form field"</span>
			  	&nbsp;
			  	<span className="lsg__code--gray">// Optional</span>

			  	<br/>
			  &gt;

			  	<br/><br/>
			  	&nbsp;&nbsp;<span className="lsg__code--gray">// Input fields go here</span>

			  	<br/><br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">Button</span> 

					  	<br/>
					  	&nbsp;&nbsp;&nbsp;&nbsp;
					  	<span className="lsg__code--green">color</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"blue"</span>

					  	<br/>
					  	&nbsp;&nbsp;&nbsp;&nbsp;
					  	<span className="lsg__code--green">title</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"Submit"</span>

				  	<br/>&nbsp;&nbsp;
				  	<span>/</span>
				  &gt;

			  <br/>
			  &lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">Form</span> 
			  &gt;
			</pre>
		)
	}
}

export default CodeReact