import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Card</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">cardType</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"outline"</span>
			  	<span className="lsg__code--gray">&nbsp;// Optional - drop shadow is deafult</span>
			  	<br/>
			  &gt;

				  <br />
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">CardItem</span>
				  &gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;
				  <span>This is some content</span>

				  <br />
				  &nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">CardItem</span>
				  &gt;

			  <br />
			  &lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">Card</span> 
			  &gt;
			</pre>
		)
	}
}

export default CodeReact