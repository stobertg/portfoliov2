import React from 'react'



class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Hero</span> 
			  	{this.props.size
			  		? <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">size</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"{this.props.size}"</span>
						  	<span className="lsg__code--gray"> // Optional - for the smaller height hero</span>
			  			</span>

			  		: null
			  	}

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">image</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"/image-path"</span>
			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">imageAlt</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"Image alt text"</span>

			  	{this.props.text
			  		? <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">textBgColor</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"blue" | "red" | "green" | "pink"</span>
			  		  </span>

			  		: null
			  	}
			  	
			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">heroCta</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;&nbsp;&lt;
			  		<span className="lsg__code--red">strong</span>
							&gt;<span>FREE standard shipping on Contact Lens Orders.°</span>&lt;
						<span>/</span>
			  		<span className="lsg__code--red">strong</span>
					&gt;&nbsp;&#125;
					<span className="lsg__code--gray"> // Optional</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">heroCtaIcon</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"shipping"</span>
			  	<span className="lsg__code--gray"> // Refer to Icons - only works with heroCta attr</span>
			  	<br/>

			  	{this.props.text
			  		? null
			  		: <span>/</span>
			  	}
			  &gt;

			  {this.props.text
			  	? <span>
			  			<br/><br/>
						  &nbsp;&nbsp;
					  	<span className="lsg__code--gray">// Example - Customizable content below the title</span>

					  	<br/>
						  &nbsp;&nbsp;&lt;
					  		<span className="lsg__code--red">div</span>
					  	&gt;<span>Lorem ipsum dolor sit amet...</span>&lt;
					  		<span>/</span>
					  		<span className="lsg__code--red">div</span>
					  	&gt;

						  <br/><br/>
						  &lt;
					  		<span>/</span>
					  		<span className="lsg__code--red">Hero</span>
					  	&gt;
			  		</span>

			  	: null
			  }
			</pre>
		)
	}
}

export default CodeReact