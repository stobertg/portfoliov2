import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Button</span> 

			  	{this.props.disabled
			  		? <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">disabled</span>
			  			</span>
			  		: null
			  	}

			  	{this.props.animation
			  		? <span>
			  				<br/>
			  				&nbsp;&nbsp;
			  				<span className="lsg__code--gray">// Animation attributes</span>

			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">clickAnimation</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">clickedIcon</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"check-v2"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">clickedTitle</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"Clipped"</span>

						  	<br/><br/>
			  				&nbsp;&nbsp;
			  				<span className="lsg__code--gray">// Required attributes</span>
			  			</span>
			  		: null
			  	}

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">title</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Action"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">color</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"blue" | "tint-blue" | "white"</span>


			  	{this.props.disabled || this.props.animation
			  		? null

			  		: <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">icon</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"pin"</span>
						  	<span className="lsg__code--gray"> // Optional - supports any icon from the Icons page</span>
			  			</span>
			  	}
			  	
			  	{this.props.animation
			  		? null
			  		: <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"/path-to-page"</span>
						  	<span className="lsg__code--gray"> // If the button action takes the user to another page</span>
			  			</span> 
			  	}

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">onClick</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;()
			  	<span className="lsg__code--blue"> => </span>
			  	<span className="lsg__code--orange">this</span>
			  	<span className="lsg__code--red">.</span>
			  	<span className="lsg__code--blue">function</span>&#125;

			  	<br/><br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--gray">// Conditional - Accessibility support</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">type</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"button" | "submit" | "reset"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">ariaDescribeBy</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"aria-describedby"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">ariaLabel</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"aria-label"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">ariaLabelledby</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"aria-labelledby"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">ariaPressed</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"aria-pressed"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">ariaHidden</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"aria-hidden"</span>
			  	<br/>

			  /&gt;
			</pre>
		)
	}
}

export default CodeReact