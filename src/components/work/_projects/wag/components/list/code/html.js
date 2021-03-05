import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	{this.props.type == 'links'
		  		? <span>
		  				&lt;
						  	<span className="lsg__code--red">ul </span>
						  	<span className="lsg__code--green">class</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"links__listed"</span>
						 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">li</span>
						 	&gt;&lt;
						  	<span className="lsg__code--red">a </span>
						  	<span className="lsg__code--green">href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!"</span>
						 	&gt;<span>Vitamins</span>&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">a</span>
						 	&gt;&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">li</span>
						 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">li</span>
						 	&gt;&lt;
						  	<span className="lsg__code--red">a </span>
						  	<span className="lsg__code--green">href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!"</span>
						 	&gt;<span>Calcium</span>&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">a</span>
						 	&gt;&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">li</span>
						 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">li</span>
						 	&gt;&lt;
						  	<span className="lsg__code--red">a </span>
						  	<span className="lsg__code--green">href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!"</span>
						 	&gt;<span>Vitamin D</span>&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">a</span>
						 	&gt;&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">li</span>
						 	&gt;

						  <br/>
						  &lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">ul</span> 
						  &gt;

						  <br/><br/>
						  &lt;
						  	<span className="lsg__code--red">ol </span>
						  	<span className="lsg__code--green">class</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"links__listed ordered"</span>
						 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">li</span>
						 	&gt;&lt;
						  	<span className="lsg__code--red">a </span>
						  	<span className="lsg__code--green">href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!"</span>
						 	&gt;<span>Vitamins</span>&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">a</span>
						 	&gt;&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">li</span>
						 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">li</span>
						 	&gt;&lt;
						  	<span className="lsg__code--red">a </span>
						  	<span className="lsg__code--green">href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!"</span>
						 	&gt;<span>Calcium</span>&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">a</span>
						 	&gt;&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">li</span>
						 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">li</span>
						 	&gt;&lt;
						  	<span className="lsg__code--red">a </span>
						  	<span className="lsg__code--green">href</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"#!"</span>
						 	&gt;<span>Vitamin D</span>&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">a</span>
						 	&gt;&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">li</span>
						 	&gt;

						  <br/>
						  &lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">ol</span> 
						  &gt;
		  			</span>

		  		: null
		  	}

		  	{this.props.type == 'unordered'
		  		? <span>
		  				&lt;
						  	<span className="lsg__code--red">ul </span>
						  	<span className="lsg__code--green">class</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"list-styles list-styles__unordered"</span>
						 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">li</span>
						 	&gt;

							 	<br/>
							 	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">span </span>
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"list__master-title"</span>
							 	&gt;<span>List item</span>&lt;
							 		<span>/</span>
							  	<span className="lsg__code--red">span</span>
							 	&gt;

						 		<br/>
							 	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">ul</span>
							 	&gt;

							 		<br/>
								 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">li</span>
								 	&gt;<span>List item</span>&lt;
								 		<span>/</span>
								  	<span className="lsg__code--red">li</span>
								 	&gt;

								 	<br/>
								 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">li</span>
								 	&gt;<span>Add more list items ...</span>&lt;
								 		<span>/</span>
								  	<span className="lsg__code--red">li</span>
								 	&gt;

							 	<br/>
							 	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							 		<span>/</span>
							  	<span className="lsg__code--red">ul</span>
							 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">li</span>
						 	&gt;

						  <br/>
						  &lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">ul</span> 
						  &gt;
		  			</span>

		  		: null
		  	}

		  	{this.props.type == 'ordered'
		  		? <span>
		  				&lt;
						  	<span className="lsg__code--red">ol </span>
						  	<span className="lsg__code--green">class</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"list-styles list-styles__ordered"</span>
						 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						  	<span className="lsg__code--red">li</span>
						 	&gt;

							 	<br/>
							 	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">span </span>
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"list__master-title"</span>
							 	&gt;<span>List item</span>&lt;
							 		<span>/</span>
							  	<span className="lsg__code--red">span</span>
							 	&gt;

						 		<br/>
							 	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">ol</span>
							 	&gt;

							 		<br/>
								 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">li</span>
								 	&gt;<span>List item</span>&lt;
								 		<span>/</span>
								  	<span className="lsg__code--red">li</span>
								 	&gt;

								 	<br/>
								 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">li</span>
								 	&gt;<span>Add more list items ...</span>&lt;
								 		<span>/</span>
								  	<span className="lsg__code--red">li</span>
								 	&gt;

							 	<br/>
							 	&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							 		<span>/</span>
							  	<span className="lsg__code--red">ol</span>
							 	&gt;

						 	<br/>
						 	&nbsp;&nbsp;&lt;
						 		<span>/</span>
						  	<span className="lsg__code--red">li</span>
						 	&gt;

						  <br/>
						  &lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">ol</span> 
						  &gt;
		  			</span>

		  		: null
		  	}
		  	
			</pre>
		)
	}
}

export default CodeHtml