import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;<span className="lsg__code--red">div</span>
		  	<span className="lsg__code--green">&nbsp;class</span>
		  	<span className="lsg__code--red">=</span>
		  	<span className="lsg__code--yellow">
		  		"hero{this.props.small ? <span>&nbsp;hero__sm</span> : null}"
		  	</span>
		  	&gt;

		  		<br/>
		  		&nbsp;&nbsp;&lt;
			  		<span className="lsg__code--red">div</span>
				  	<span className="lsg__code--green">&nbsp;class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">
				  		"hero__wrapper 
				  			{this.props.text
				  				? <span>&nbsp;hero__dark-bg color__blue-aa reverse-on-mobile</span>
				  				: null
				  			}
				  		"
				  	</span>

				  	{this.props.text
				  		? null
				  		: <span>
				  				<span className="lsg__code--green">&nbsp;style</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"background-image: url('path-to-img');"</span>
				  			</span>
				  	}
			  	&gt;

			  		<br/><br/>
			  		&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  		<span className="lsg__code--red">div</span>
					  	<span className="lsg__code--green">&nbsp;class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"content__half"</span>
				  	&gt;

				  		<br/>
				  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  		<span className="lsg__code--red">div</span>
						  	<span className="lsg__code--green">&nbsp;class</span>
						  	<span className="lsg__code--red">=</span>
						  	<span className="lsg__code--yellow">"contain"</span>
					  	&gt;

					  		<br/>
					  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  		<span className="lsg__code--red">div</span>
							  	<span className="lsg__code--green">&nbsp;class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"page__header"</span>
						  	&gt;

						  		<br/>
						  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  		<span className="lsg__code--red">nav</span>
								  	<span className="lsg__code--green">&nbsp;aria-label</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"breadcrumb"</span>
							  	&gt;

							  		<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  		<span className="lsg__code--red">ul</span>
									  	<span className="lsg__code--green">&nbsp;class</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"nav__bread-crumbs nav__bread-crumbs-white"</span>
								  	&gt;

								  		<br/>
								  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  		<span className="lsg__code--red">li</span>
									  	&gt;&lt;
									  		<span className="lsg__code--red">a</span>
									  		<span className="lsg__code--green">&nbsp;href</span>
							  				<span className="lsg__code--red">=</span>
							  				<span className="lsg__code--yellow">"#!"</span>
									  	&gt;<span>Home</span>&lt;
								  			<span>/</span>
									  		<span className="lsg__code--red">a</span>
									  	&gt;&lt;
								  			<span>/</span>
									  		<span className="lsg__code--red">li</span>
									  	&gt;

									  	<br/>
								  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  		<span className="lsg__code--red">li</span>
									  	&gt;&lt;
									  		<span className="lsg__code--red">a</span>
									  		<span className="lsg__code--green">&nbsp;href</span>
							  				<span className="lsg__code--red">=</span>
							  				<span className="lsg__code--yellow">"#!"</span>
									  	&gt;<span>Shop</span>&lt;
								  			<span>/</span>
									  		<span className="lsg__code--red">a</span>
									  	&gt;&lt;
								  			<span>/</span>
									  		<span className="lsg__code--red">li</span>
									  	&gt;

									  	<br/>
								  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  		<span className="lsg__code--red">li</span>
									  	&gt;&lt;
									  		<span className="lsg__code--red">h1</span>
									  	&gt;<span>Beauty Products</span>&lt;
								  			<span>/</span>
									  		<span className="lsg__code--red">h1</span>
									  	&gt;&lt;
								  			<span>/</span>
									  		<span className="lsg__code--red">li</span>
									  	&gt;

								  	<br/>
							  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  			<span>/</span>
								  		<span className="lsg__code--red">ul</span>
								  	&gt;

							  	<br/>
						  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						  			<span>/</span>
							  		<span className="lsg__code--red">nav</span>
							  	&gt;

						  	<br/>
					  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  			<span>/</span>
						  		<span className="lsg__code--red">div</span>
						  	&gt;

						  	{this.props.text
						  		? <span>
						  				<br/><br/>
								  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  		<span className="lsg__code--red">div</span>
									  		<span className="lsg__code--green">&nbsp;class</span>
							  				<span className="lsg__code--red">=</span>
							  				<span className="lsg__code--yellow">"hero__text"</span>
									  	&gt;

									  		<br/>
									  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
										  		<span className="lsg__code--red">h2</span>
										  		<span className="lsg__code--green">&nbsp;class</span>
								  				<span className="lsg__code--red">=</span>
								  				<span className="lsg__code--yellow">"font__fifty"</span>
										  	&gt;&lt;
										  		<span className="lsg__code--red">strong</span>
										  	&gt;<span>Hero title</span>&lt;
										  		<span>/</span>
										  		<span className="lsg__code--red">strong</span>
										  	&gt;&lt;
									  			<span>/</span>
										  		<span className="lsg__code--red">h2</span>
										  	&gt;

										  	<br/>
									  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
										  		<span className="lsg__code--red">div</span>
										  		<span className="lsg__code--green">&nbsp;class</span>
								  				<span className="lsg__code--red">=</span>
								  				<span className="lsg__code--yellow">"font__twenty-two"</span>
										  	&gt;

										  		<br/>
										  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
											  		<span className="lsg__code--red">em</span>
											  			&gt;<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut iaculis felis.</span>&lt;
											  		<span className="lsg__code--red">em</span>
											  	&gt;

										  	<br/>
									  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;	
									  			<span>/</span>
										  		<span className="lsg__code--red">div</span>
										  	&gt;

									  	<br/>
								  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  			<span>/</span>
									  		<span className="lsg__code--red">div</span>
									  	&gt;
						  			</span>
						  		: null
						  	}

					  	<br/>
				  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  			<span>/</span>
					  		<span className="lsg__code--red">div</span>
					  	&gt;

				  	<br/>
			  		&nbsp;&nbsp;&nbsp;&nbsp;&lt;
			  			<span>/</span>
				  		<span className="lsg__code--red">div</span>
				  	&gt;

				  	{this.props.text
				  		? <span>
				  				<br/><br/>
						  		&nbsp;&nbsp;&nbsp;&nbsp;&lt;
							  		<span className="lsg__code--red">div</span>
							  		<span className="lsg__code--green">&nbsp;class</span>
					  				<span className="lsg__code--red">=</span>
					  				<span className="lsg__code--yellow">"content__half"</span>
					  				&nbsp;
					  				<span className="lsg__code--green">style</span>
					  				<span className="lsg__code--red">=</span>
					  				<span className="lsg__code--yellow">"background-image: url('path-to-img');"</span>
							  	&gt;&lt;
						  			<span>/</span>
							  		<span className="lsg__code--red">div</span>
							  	&gt;
				  			</span>
				  		: null
				  	}

			  	<br/>
		  		&nbsp;&nbsp;&lt;
		  			<span>/</span>
			  		<span className="lsg__code--red">div</span>
			  	&gt;

		  	<br/>&lt;
		  	<span>/</span>
		  	<span className="lsg__code--red">div</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml