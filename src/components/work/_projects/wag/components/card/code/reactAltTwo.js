import React from 'react'

class CodeReactAltTwo extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Card</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">cardType</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"img"</span>
			  	<span className="lsg__code--gray">&nbsp;// Attr provides the background image</span>
			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">bgImg</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"/path"</span>
			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">bgImageAltText</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Image alt text"</span>
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

export default CodeReactAltTwo