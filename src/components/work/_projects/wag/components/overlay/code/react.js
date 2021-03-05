import React from 'react'


class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Overlay</span> 

			  	{this.props.drawer
			  		? <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">type</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"drawer"</span>
			  			</span>
			  		: null
			  	}
			  
			  	{this.props.drawer
			  		? null
			  		: <span>
			  				<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">size</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"small" | "large" </span>
						  	<span className="lsg__code--gray">// Optional - small: 500px, large: 90% vw && vh</span>
			  			</span>
			  	}

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">btnColor</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"dark-blue"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">btnTitle</span>
			  	<span className="lsg__code--red">=</span>
			  	{this.props.drawer
			  		? <span className="lsg__code--yellow">"Modal drawer"</span>
			  		: <span className="lsg__code--yellow">"Modal"</span>
			  	}
			  <br/>&gt;

				  <br/><br/>
			  	&nbsp;&nbsp;&lt;
			  		<span className="lsg__code--red">OverlayContent</span>

			  		<br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;
				  	<span className="lsg__code--green">fullWidth </span>
				  	<span className="lsg__code--gray">// Optional - when content needs to go full width of the container (i.e. Tabs with the neutral background)</span>

			  		<br/>
			  		&nbsp;&nbsp;&nbsp;&nbsp;
			  		<span className="lsg__code--green">title</span>
				  	<span className="lsg__code--red">=</span>
				  	&#123;
				  		&lt;
				  			<span className="lsg__code--red">strong</span>
				  		&gt;
				  			This is the title of the overlay
				  		&lt;
				  			<span>/</span>
				  			<span className="lsg__code--red">strong</span>
				  		&gt;
				  	&#125;
				  	<span className="lsg__code--gray"> // Optional</span>

				  	<br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;
				  	<span className="lsg__code--green">titleImg</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"/heros/bed.jpg" </span>
				  	<span className="lsg__code--gray">// Optional - Image on the left side of the modal</span>
			  	<br/>
			  	&nbsp;&nbsp;&gt;

					  <br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&#123; 
					  	<span className="lsg__code--orange">this</span>
					  	<span className="lsg__code--red">.</span>
					  	<span>props</span>
					  	<span className="lsg__code--red">.</span>
					  	<span>children</span>
					  &#125;

					<br/>
			  	&nbsp;&nbsp;&lt;
			  		<span>/</span>
			  		<span className="lsg__code--red">OverlayContent</span>
			  	&gt;

			  	{this.props.drawer
			  		? <span>
			  				<br/><br/>
			  				&nbsp;&nbsp;<span className="lsg__code--gray">// Buttons on the bottom of the container</span>

			  				<br/><br/>
						  	&nbsp;&nbsp;&lt;
						  		<span className="lsg__code--red">ButtonContainer</span>
						  	&gt;

						  		<br/>
							  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  		<span className="lsg__code--red">Button</span>

							  		<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  		<span className="lsg__code--green">color</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"white"</span>

								  	<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  		<span className="lsg__code--green">title</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"Cancel"</span>

								  	<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  		<span className="lsg__code--green">onClick</span>
								  	<span className="lsg__code--red">=</span>&#123;&#40;&#41;&nbsp;
								  		<span className="lsg__code--blue">=></span>&nbsp;
									  	<span className="lsg__code--orange">this</span>
									  	<span className="lsg__code--red">.</span>
									  	<span className="lsg__code--blue">function</span>
									  &#125;

							  		<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;
							  		<span>/</span>
							  	&gt;

							  	<br/><br/>
							  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  		<span className="lsg__code--red">Button</span>

							  		<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  		<span className="lsg__code--green">color</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"blue"</span>

								  	<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  		<span className="lsg__code--green">title</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"Action"</span>

								  	<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  		<span className="lsg__code--green">onClick</span>
								  	<span className="lsg__code--red">=</span>&#123;&#40;&#41;&nbsp;
								  		<span className="lsg__code--blue">=></span>&nbsp;
									  	<span className="lsg__code--orange">this</span>
									  	<span className="lsg__code--red">.</span>
									  	<span className="lsg__code--blue">function</span>
									  &#125;

							  		<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;
							  		<span>/</span>
							  	&gt;

								<br/>
						  	&nbsp;&nbsp;&lt;
						  		<span>/</span>
						  		<span className="lsg__code--red">ButtonContainer</span>
						  	&gt;
			  			</span>

			  		: null
			  	}

			  <br/>
			  &lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">Overlay</span>
			  &gt;
			</pre>
		)
	}
}

export default CodeReact