import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;<span className="lsg__code--red">Icon</span> 
				<br/>
		  	&nbsp;&nbsp;<span className="lsg__code--green">title</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"Title of icon"</span>

		  	<br/>
		  	&nbsp;&nbsp;<span className="lsg__code--green">icon</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"in-store"</span>
		  	<span className="lsg__code--gray"> // Reference above to the icon="" name</span>

				<br/>
		  	&nbsp;&nbsp;<span className="lsg__code--green">type</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"thin" | "wide"</span>
		  	<span className="lsg__code--gray"> // Optional - default state doesn't require this attr</span>

		  	<br/>
		  	&nbsp;&nbsp;<span className="lsg__code--green">color</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">"blue"</span>
		  	<span className="lsg__code--gray"> // Optional - if the color of the icon is different than the text color</span>
		  	<br/>/&gt;
			</pre>
		)
	}
}

export default CodeReact