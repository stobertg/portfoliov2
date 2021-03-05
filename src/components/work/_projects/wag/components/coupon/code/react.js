import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	{this.props.basic
		  		? <span>
		  				&lt;
						  	<span className="lsg__code--red">CouponButton</span> 

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">amount</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"$2 off"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">details</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"In-store or online. Mrf. coupon"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">expires</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"Expires in 5 days"</span>

					  		<br/>
					  		&nbsp;&nbsp;
					  		<span className="lsg__code--green">onClick</span>
						  	<span className="lsg__code--red">=</span>&#123;&#40;&#41;&nbsp;
						  		<span className="lsg__code--blue">=></span>&nbsp;
							  	<span className="lsg__code--orange">this</span>
							  	<span className="lsg__code--red">.</span>
							  	<span className="lsg__code--blue">function</span>&#40;&#41;&#125;

						  	<br/>
						  	<span>/</span>
						  &gt;

						  <br/><br/>
						  <span className="lsg__code--gray">// For the basic button on the bottom</span>
						  <br/>
						  &lt;
						  	<span className="lsg__code--red">CouponButton</span> 
						  	&nbsp;

						  	<br/>
					  		&nbsp;&nbsp;
					  		<span className="lsg__code--green">onClick</span>
						  	<span className="lsg__code--red">=</span>&#123;&#40;&#41;&nbsp;
						  		<span className="lsg__code--blue">=></span>&nbsp;
							  	<span className="lsg__code--orange">this</span>
							  	<span className="lsg__code--red">.</span>
							  	<span className="lsg__code--blue">function</span>&#40;&#41;&#125;

							  <br/>
								<span>/</span>
							&gt;
		  			</span>

		  		: <span>
		  				&lt;
						  	<span className="lsg__code--red">Coupon</span> 

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">expiration</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"1/27/2020"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">brand</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"Gain"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">deal</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"$1 Off with card"</span>

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">description</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"One Gain Detergent and Fabric Enhancers (excludes trial/travel this is some more text."</span>

				  			<br/>
					  		&nbsp;&nbsp;
					  		<span className="lsg__code--green">productLink</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!" </span>
						  	<span className="lsg__code--gray">// For the link of the product and the product details</span>

						  	<br/>
					  		&nbsp;&nbsp;
					  		<span className="lsg__code--green">clipClick</span>
						  	<span className="lsg__code--red">=</span>&#123;&#40;&#41;&nbsp;
						  		<span className="lsg__code--blue">=></span>&nbsp;
							  	<span className="lsg__code--orange">this</span>
							  	<span className="lsg__code--red">.</span>
							  	<span className="lsg__code--blue">function</span>&#40;&#41;&#125;

						  	<br/>
						  	&nbsp;&nbsp;
						  	<span className="lsg__code--green">shopLink</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!" </span>
						  	<span className="lsg__code--gray">// Optional</span>

						  	<br/>
						  	<span>/</span>
						  &gt;
		  			</span>
		  	}
		  	
			</pre>
		)
	}
}

export default CodeReact