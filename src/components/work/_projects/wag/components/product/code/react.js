import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>

		  	<span className="lsg__code--gray">// JSON data for Products</span>
		  	<br/>
		  	<span className="lsg__code--yellow">products</span>
		  	<span className="lsg__code--purple">: </span>&#91;

		  	<br/>
		  	&nbsp;&nbsp;&#123;

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--yellow">id</span>
		  	<span className="lsg__code--purple">: </span>
		  	<span className="lsg__code--purple">0</span>
		  	<span>,</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--yellow">inStock</span>
		  	<span className="lsg__code--purple">: </span>
		  	<span className="lsg__code--purple">true</span>
		  	<span>,</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--yellow">href</span>
		  	<span className="lsg__code--purple">: </span>
		  	<span className="lsg__code--yellow">"#1"</span>
		  	<span>,</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--yellow">image</span>
		  	<span className="lsg__code--purple">: </span>
		  	<span className="lsg__code--yellow">"/products/gain.jpg"</span>
		  	<span>,</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--yellow">title</span>
		  	<span className="lsg__code--purple">: </span>
		  	<span className="lsg__code--yellow">"Shop Neutrogena Ultra Sheer Dry-Touch Water Resistant Sunscreen SPF 100+"</span>
		  	<span>,</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--yellow">rating</span>
		  	<span className="lsg__code--purple">:</span>
		  	&nbsp;&#123;

		  		<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<span className="lsg__code--yellow">stars</span>
			  	<span className="lsg__code--purple">: </span>
			  	<span className="lsg__code--yellow">"/icons/ratings/rating-4_5.gif"</span>
					<span>,</span>

					<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<span className="lsg__code--yellow">ratingNum</span>
			  	<span className="lsg__code--purple">: </span>
			  	<span className="lsg__code--yellow">"212"</span>
					<span>,</span>

					<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<span className="lsg__code--yellow">fsa</span>
			  	<span className="lsg__code--purple">: </span>
			  	<span className="lsg__code--purple">true</span>

			  <br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;&#125;
		  	<span>,</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--yellow">price</span>
		  	<span className="lsg__code--purple">:</span>
		  	&nbsp;&#123;

		  		<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<span className="lsg__code--yellow">price</span>
			  	<span className="lsg__code--purple">: </span>
			  	<span className="lsg__code--yellow">"7.64"</span>
					<span>,</span>

					<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<span className="lsg__code--yellow">deal</span>
			  	<span className="lsg__code--purple">: </span>
			  	<span className="lsg__code--yellow">"Buy 1, Get 1 50% OFF"</span>
					<span>,</span>

					<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<span className="lsg__code--yellow">material</span>
			  	<span className="lsg__code--purple">: </span>
			  	<span className="lsg__code--yellow">"material"</span>
			  	<span>,</span>

			  	<br/>
			  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<span className="lsg__code--yellow">priceByMaterial</span>
			  	<span className="lsg__code--purple">: </span>
			  	<span className="lsg__code--yellow">"3.00"</span>

			  <br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;&#125;
		  	<span>,</span>

		  	<br/>
		  	&nbsp;&nbsp;&nbsp;&nbsp;
		  	<span className="lsg__code--yellow">employee</span>
		  	<span className="lsg__code--purple">:</span>
		  	<span className="lsg__code--purple">true</span>
		  	&nbsp;

		  	<br/>
		  	&nbsp;&nbsp;&#125;,

		  	<br/>
		  	&nbsp;&nbsp;
		  	<span className="lsg__code--gray">// Add more products</span>

		  	<br/>
		  	&#93;

		  	<br/><br/>
		  	<span className="lsg__code--gray">// For lists of products</span>
		  	<br/>
				&lt;
			  	<span className="lsg__code--red">ProductList </span>
			  	<span className="lsg__code--green">products</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;&nbsp;
			  		<span className="lsg__code--orange">this</span>
			  		<span className="lsg__code--red">.</span>
				  	<span>state</span>
				  	<span className="lsg__code--red">.</span>
				  	<span>products</span>
			  	&nbsp;&#125;&nbsp;
			  	<span>/</span>
			  &gt;

		  	<br/><br/>
		  	<span className="lsg__code--gray">// Individual products</span>
		  	<br/>
				&lt;
			  	<span className="lsg__code--red">Product</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">image</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;&nbsp;
				  	<span>product</span>
				  	<span className="lsg__code--red">.</span>
				  	<span>image</span>
			  	&nbsp;&#125;

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">title</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;&nbsp;
				  	<span>product</span>
				  	<span className="lsg__code--red">.</span>
				  	<span>title</span>
			  	&nbsp;&#125;

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">price</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;&nbsp;
				  	<span>product</span>
				  	<span className="lsg__code--red">.</span>
				  	<span>price</span>
			  	&nbsp;&#125;

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">rating</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;&nbsp;
				  	<span>product</span>
				  	<span className="lsg__code--red">.</span>
				  	<span>rating</span>
			  	&nbsp;&#125;

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">inStock</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;&nbsp;
				  	<span>product</span>
				  	<span className="lsg__code--red">.</span>
				  	<span>inStock</span>
			  	&nbsp;&#125;

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">employee</span>
			  	<span className="lsg__code--red">=</span>
			  	&#123;&nbsp;
				  	<span>product</span>
				  	<span className="lsg__code--red">.</span>
				  	<span>employee</span>
			  	&nbsp;&#125;
			  	&nbsp;<span className="lsg__code--gray">// For employee's shopping</span>

			  	<br/>
			  	<span>/</span>
			  &gt;

			</pre>
		)
	}
}

export default CodeReact