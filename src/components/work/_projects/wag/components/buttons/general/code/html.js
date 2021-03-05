import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	{this.props.disabled
		  		?	<span>
		  				<span className="lsg__code--gray">// Blue Button</span>
		  				
					  	<br/>
						  &lt;
						  	<span className="lsg__code--red">a </span> 
						  	<span className="lsg__code--green">href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!" </span>
						  	<span className="lsg__code--green">disabled</span>
						  &gt;

						  	<br/>
							  &nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">span </span> 
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"btn btn__blue"</span>
							  &gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span</span> 
								  	&gt;Button Title&lt;/<span className="lsg__code--red">span</span>
								  &gt;

								<br/>
							  &nbsp;&nbsp;&lt;/<span className="lsg__code--red">span</span>&gt;

					  	<br/>
					  	&lt;/<span className="lsg__code--red">a</span>&gt;
		  			</span>

		  		: <span>
		  				<span className="lsg__code--gray">// Blue Button</span>
						  	<br/>
							  &lt;
							  	<span className="lsg__code--red">a </span> 
							  	<span className="lsg__code--green">href</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"#!"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span> 
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"btn btn__blue"</span>
								  &gt;

								  	<br/>
								  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">span </span> 
									  	<span className="lsg__code--green">class</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"icon icon__pin"</span>
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
									  	<span className="lsg__code--green">xlink:href</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"/icons/symbol-defs.svg#icon__pin"</span>
									  	&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="lsg__code--red">span</span>&gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">span</span> 
									  	&gt;Button Title&lt;/<span className="lsg__code--red">span</span>
									  &gt;

									<br/>
								  &nbsp;&nbsp;&lt;/<span className="lsg__code--red">span</span>&gt;

						  	<br/>
						  	&lt;/<span className="lsg__code--red">a</span>&gt;

						  	<br/><br/>
						  	<span className="lsg__code--gray">// Tint Blue Button</span>

						  	<br/>
							  &lt;
							  	<span className="lsg__code--red">a </span> 
							  	<span className="lsg__code--green">href</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"#!"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span> 
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"btn btn__tint-blue"</span>
								  &gt;

								  	<br/>
								  	&nbsp;&nbsp;&nbsp;&nbsp;<span className="lsg__code--gray">// Content Same as above</span>

									<br/>
								  &nbsp;&nbsp;&lt;/<span className="lsg__code--red">span</span>&gt;

						  	<br/>
						  	&lt;/<span className="lsg__code--red">a</span>&gt;

						  	<br/><br/>
						  	<span className="lsg__code--gray">// Dark Blue Button</span>

						  	<br/>
							  &lt;
							  	<span className="lsg__code--red">a </span> 
							  	<span className="lsg__code--green">href</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"#!"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span> 
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"btn btn__dark-blue"</span>
								  &gt;

								  	<br/>
								  	&nbsp;&nbsp;&nbsp;&nbsp;<span className="lsg__code--gray">// Content Same as above</span>

									<br/>
								  &nbsp;&nbsp;&lt;/<span className="lsg__code--red">span</span>&gt;

						  	<br/>
						  	&lt;/<span className="lsg__code--red">a</span>&gt;
		  			</span>
		  	}
			</pre>
		)
	}
}

export default CodeHtml