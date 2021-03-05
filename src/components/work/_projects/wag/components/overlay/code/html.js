import React from 'react'

class ButtonBlueCodeHtml extends React.Component{
	render() {
		return(
		  <pre>

			  &lt;
			  	<span className="lsg__code--red">button </span> 
			  	<span className="lsg__code--green">type</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"button"</span>

			  	&nbsp;
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"btn btn__blue action__open-modal"</span>
			  &gt;

			  	<br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span</span> 
				  &gt;Default overlay&lt;/<span className="lsg__code--red">span</span>&gt;

			  	<br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"sr-only"</span>
				  &gt;Opens simulated dialog&lt;/<span className="lsg__code--red">span</span>&gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">button</span>&gt;

		  	<br/><br/>
		  	&lt;
			  	<span className="lsg__code--red">section </span> 
			  	<span className="lsg__code--green">id</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"dialog"</span>

			  	&nbsp;
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"modal modal-right-drawer"</span>

			  	&nbsp;
			  	<span className="lsg__code--green">role</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"dialog"</span>

			  	&nbsp;
			  	<span className="lsg__code--green">tabindex</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"-1"</span>

			  	&nbsp;
			  	<span className="lsg__code--green">hidden</span>
			  &gt;

			  	<br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">div </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"modal__content-contain modal__white"</span>
				  &gt;

				  	<br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span>
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"sr-only"</span>
				  	&gt;Beginning of the content&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
				  	&gt;

				  	<br/><br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">button </span> 
					  	<span className="lsg__code--green">type</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"button"</span>

					  	&nbsp;
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"btn btn__rounded btn__blk action__close-modal"</span>
					  &gt;

					  	<br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">span </span> 
						  	<span className="lsg__code--green">class</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"icon icon__dismiss-v2"</span>
						  &gt;

						  	<br/>
							  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
							  <span className="lsg__code--green">xlink:href</span>
							  <span className="lsg__code--red">=</span>
							  <span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__dismiss-v2"</span>
							  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

						  <br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
						  	<span className="lsg__code--red">span</span> 
						  &gt;

				  	<br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="lsg__code--red">button</span>&gt;

				  	<br/><br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">div </span> 
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"modal__content"</span>
					  &gt;

					  	<br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">h2</span> 
						  &gt;<span>Overlay title</span>&lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">h2</span> 
						  &gt;

						  <br/><br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">div </span> 
						  	<span className="lsg__code--green">class</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"modal__content-inner"</span>
						  &gt;

						  	<br/>
							  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">p</span> 
							  &gt;<span>Overlay paragraph</span>&lt;
							  	<span>/</span>
							  	<span className="lsg__code--red">p</span> 
							  &gt;

							<br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">div</span> 
						  &gt;

						  <br/><br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">div </span> 
						  	<span className="lsg__code--green">class</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"modal__bottom-actions"</span>
						  &gt;

						  	<br/>
							  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">button </span> 
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"btn btn__blue action__close-modal-small-white"</span>
							  	&nbsp;
							  	<span className="lsg__code--green">type</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"button"</span>
							  &gt;<span>Close</span>&lt;
							  	<span>/</span>
							  	<span className="lsg__code--red">button</span> 
							  &gt;

							<br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">div</span> 
						  &gt;

				  	<br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">div</span>&gt;

				  	<br/>
				  	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span>
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"sr-only"</span>
				  	&gt;End of the content&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
				  	&gt;

				  <br/>
				  &nbsp;&nbsp;&lt;/<span className="lsg__code--red">div</span>&gt;

				  <br/><br/>
			  	&nbsp;&nbsp;&lt;
			  	<span className="lsg__code--red">div </span>
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"overlay action__close-modal-small-white"</span>
			  	&gt;&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">div</span>
			  	&gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">section</span>&gt;
			</pre>
		)
	}
}

export default ButtonBlueCodeHtml