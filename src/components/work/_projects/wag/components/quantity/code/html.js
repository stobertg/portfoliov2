import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">div </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"quantity__buttons"</span>
			  &gt;

			  	<br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">button </span> 
				  	<span className="lsg__code--green">class</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"btn btn__neutral btn__rounded btn__disabled qtyminus"</span>
		  			&nbsp;
		  			<span className="lsg__code--green">aria-label</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"decrease"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">span </span> 
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"icon icon__minus-v2"</span>
					  &gt;

					  	<br/>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
						  <span className="lsg__code--green">xlink:href</span>
						  <span className="lsg__code--red">=</span>
						  <span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__minus-v2"</span>
						  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

					  <br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
					  	<span className="lsg__code--red">span</span> 
					  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">button</span> 
				  &gt;

				  <br/><br/>
				  &nbsp;&nbsp;&lt;
			  		<span className="lsg__code--red">label </span>
			  		<span className="lsg__code--green">for</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"quantity-counter"</span>
		  			&nbsp;
		  			<span className="lsg__code--green">class</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"sr-only"</span>
		  		&gt;<span>Item Quantity</span>&lt;
		  			<span>/</span>
		  			<span className="lsg__code--red">label</span>
			  	&gt;

			  	<br/>
				  &nbsp;&nbsp;&lt;
			  		<span className="lsg__code--red">input </span>
			  		<span className="lsg__code--green">class</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"quantity"</span>
		  			&nbsp;
		  			<span className="lsg__code--green">id</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"quantity-counter"</span>
		  			&nbsp;
		  			<span className="lsg__code--green">type</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"text"</span>
		  			&nbsp;
		  			<span className="lsg__code--green">name</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"text"</span>
		  			&nbsp;
		  			<span className="lsg__code--green">value</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"1"</span>
		  			&nbsp;
		  			<span>/</span>
			  	&gt;

				  <br/><br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">button </span> 
				  	<span className="lsg__code--green">class</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"btn btn__blue btn__rounded qtyplus"</span>
		  			&nbsp;
		  			<span className="lsg__code--green">aria-label</span>
		  			<span className="lsg__code--red">=</span>
		  			<span className="lsg__code--yellow">"increase"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">span </span> 
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"icon icon__plus-v2"</span>
					  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
					  <span className="lsg__code--green">xlink:href</span>
					  <span className="lsg__code--red">=</span>
					  <span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__plus-v2"</span>
					  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

					  <br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
					  	<span className="lsg__code--red">span</span> 
					  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">button</span> 
				  &gt;

		  	<br/>
		  	&lt;/<span className="lsg__code--red">div</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml