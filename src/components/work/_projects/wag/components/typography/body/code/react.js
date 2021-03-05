import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>

		  	<span className="lsg__code--gray">
		  		{this.props.tag == "p" 
		  			? <span>// Any text within a p tag is automated to 18px</span>
		  			: <span>// Default type size is 16px - no special styling needed</span>
		  		}
		  	</span>
		  	<br/>

		  	&lt;
			  	<span className="lsg__code--red">{this.props.tag}</span> 
			  &gt;

			  	<span>This is some text...</span>

			  &lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">{this.props.tag}</span> 
			  &gt;
			</pre>
		)
	}
}

export default CodeReact