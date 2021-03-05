import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Alert</span> 

			  	{this.props.minimal
			  		? <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">minimal</span>
			  			</span>
			  		
			  		: null 
			  	}

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">color</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"red" | "blue" | "green" | "yellow"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">icon</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"info" | "check" | "alert"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">text</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Text goes here..."</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">linkCta</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Refill now"</span>

			  	{this.props.minimal
			  		? null
			  		: <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">dismissBtn</span>
						  	<span className="lsg__code--red">=</span>
						  	&#123;&nbsp;
						  	<span className="lsg__code--purple">true</span>
						  	&nbsp;&#125;&nbsp;
						  	<span className="lsg__code--gray">// Optional if the alert can be dismissed</span>
			  			</span>
			  	}

			  	<br/>

			  <span>/</span>&gt;
			</pre>
		)
	}
}

export default CodeReact