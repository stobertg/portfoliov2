import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>

		  	{this.props.basic
		  		? <span>
		  				&lt;
						  	<span className="lsg__code--red">form</span>
						  &gt;

							  <br/><br/>
							  &nbsp;&nbsp;<span className="lsg__code--gray">// Full width input</span>
							  <br/>
							  &nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">div </span>
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"form__input"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__contain"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">input </span>
									  	<span className="lsg__code--green">type</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">name</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">id</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"field-label"</span>
									  	&nbsp;
									  	<span>/</span>
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">label </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__title"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">for</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"field-label"</span>
								  	&gt;<span>Field label</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">label</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  <br/>
							  &nbsp;&nbsp;&lt;
							  	<span>/</span>
							  	<span className="lsg__code--red">div</span>
						  	&gt;

						  	<br/><br/>
							  &nbsp;&nbsp;<span className="lsg__code--gray">// 50% width input</span>
							  <br/>
							  &nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">div </span>
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"form__input input__fifty-fifty"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__contain"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">input </span>
									  	<span className="lsg__code--green">type</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">name</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">id</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"field-label"</span>
									  	&nbsp;
									  	<span>/</span>
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">label </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__title"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">for</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"field-label"</span>
								  	&gt;<span>Field label</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">label</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  <br/>
							  &nbsp;&nbsp;&lt;
							  	<span>/</span>
							  	<span className="lsg__code--red">div</span>
						  	&gt;

					  	<br/><br/>
					  	&lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">form</span>
					  	&gt;
		  			</span>

		  		: null
		  	}

		  	{this.props.alerts
		  		? <span>
		  				&lt;
						  	<span className="lsg__code--red">form</span>
						  &gt;

							  <br/><br/>
							  &nbsp;&nbsp;<span className="lsg__code--gray">// Success Message</span>
							  <br/>
							  &nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">div </span>
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"form__input"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__contain input__success"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">input </span>
									  	<span className="lsg__code--green">type</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">name</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">id</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"input-1"</span>
									  	&nbsp;
									  	<span>/</span>
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">label </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__title"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">for</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input-1"</span>
								  	&gt;<span>Field label</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">label</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  	<br/><br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__success-text"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">role</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"alert"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">aria-live</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"assertive"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">span </span> 
									  	<span className="lsg__code--green">class</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"icon icon__check-v2"</span>
									  &gt;

									  	<br/>
										  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
										  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
										  <span className="lsg__code--green">xlink:href</span>
										  <span className="lsg__code--red">=</span>
										  <span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__check-v2"</span>
										  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
									  	<span className="lsg__code--red">span</span> 
									  &gt;

								  	
									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span</span>
								  	&gt;&lt;
								  	<span className="lsg__code--red">strong</span>
								  	&gt;<span>Success text goes here</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">strong</span>
								  	&gt;&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">span</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  <br/>
						  	&nbsp;&nbsp;&lt;
							  	<span>/</span>
							  	<span className="lsg__code--red">div</span>
						  	&gt;

						  	<br/><br/>
						  	&nbsp;&nbsp;<span className="lsg__code--gray">// Warning Message</span>
								<br/>
							  &nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">div </span>
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"form__input"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__contain input__warning"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">input </span>
									  	<span className="lsg__code--green">type</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">name</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">id</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"input-1"</span>
									  	&nbsp;
									  	<span>/</span>
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">label </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__title"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">for</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input-1"</span>
								  	&gt;<span>Field label</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">label</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  	<br/><br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__warning-text"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">role</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"alert"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">aria-live</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"assertive"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">span </span> 
									  	<span className="lsg__code--green">class</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"icon icon__alert"</span>
									  &gt;

									  	<br/>
										  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
										  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
										  <span className="lsg__code--green">xlink:href</span>
										  <span className="lsg__code--red">=</span>
										  <span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__alert"</span>
										  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
									  	<span className="lsg__code--red">span</span> 
									  &gt;

								  	
									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span</span>
								  	&gt;&lt;
								  	<span className="lsg__code--red">strong</span>
								  	&gt;<span>Warning text goes here</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">strong</span>
								  	&gt;&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">span</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  <br/>
						  	&nbsp;&nbsp;&lt;
							  	<span>/</span>
							  	<span className="lsg__code--red">div</span>
						  	&gt;

						  	<br/><br/>
						  	&nbsp;&nbsp;<span className="lsg__code--gray">// Error Message</span>
								<br/>
							  &nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">div </span>
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"form__input"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__contain input__error"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">input </span>
									  	<span className="lsg__code--green">type</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">name</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">id</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"input-1"</span>
									  	&nbsp;
									  	<span>/</span>
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">label </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__title"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">for</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input-1"</span>
								  	&gt;<span>Field label</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">label</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  	<br/><br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__error-text"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">role</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"alert"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">aria-live</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"assertive"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">span </span> 
									  	<span className="lsg__code--green">class</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"icon icon__alert"</span>
									  &gt;

									  	<br/>
										  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
										  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
										  <span className="lsg__code--green">xlink:href</span>
										  <span className="lsg__code--red">=</span>
										  <span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__alert"</span>
										  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/
									  	<span className="lsg__code--red">span</span> 
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span</span>
								  	&gt;&lt;
								  	<span className="lsg__code--red">strong</span>
								  	&gt;<span>Error text goes here</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">strong</span>
								  	&gt;&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">span</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  <br/>
						  	&nbsp;&nbsp;&lt;
							  	<span>/</span>
							  	<span className="lsg__code--red">div</span>
						  	&gt;

					  	<br/><br/>
					  	&lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">form</span>
					  	&gt;
		  			</span>

		  		: null
		  	}

		  	{this.props.wBtn
		  		? <span>
		  				&lt;
						  	<span className="lsg__code--red">form</span>
						  &gt;

							  <br/>
							  &nbsp;&nbsp;&lt;
							  	<span className="lsg__code--red">div </span>
							  	<span className="lsg__code--green">class</span>
							  	<span className="lsg__code--red">=</span>
							  	<span className="lsg__code--yellow">"form__input"</span>
							  &gt;

							  	<br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">span </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__contain input__btn-attached"</span>
								  &gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
									  	<span className="lsg__code--red">input </span>
									  	<span className="lsg__code--green">type</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">name</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"text"</span>
									  	&nbsp;
									  	<span className="lsg__code--green">id</span>
									  	<span className="lsg__code--red">=</span>
									  	<span className="lsg__code--yellow">"input-1"</span>
									  	&nbsp;
									  	<span>/</span>
									  &gt;

									  <br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">label </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input__title"</span>
								  	&nbsp;
								  	<span className="lsg__code--green">for</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"input-1"</span>
								  	&gt;<span>Field label</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">label</span>
								  	&gt;

								  	<br/>
									  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span className="lsg__code--red">button </span>
								  	<span className="lsg__code--green">class</span>
								  	<span className="lsg__code--red">=</span>
								  	<span className="lsg__code--yellow">"btn btn__blue"</span>
								  	&gt;<span>Action</span>&lt;
									  	<span>/</span>
									  	<span className="lsg__code--red">button</span>
								  	&gt;

								  <br/>
								  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
								  	<span>/</span>
								  	<span className="lsg__code--red">span</span>
							  	&gt;

							  <br/>
						  	&nbsp;&nbsp;&lt;
							  	<span>/</span>
							  	<span className="lsg__code--red">div</span>
						  	&gt;

					  	<br/>
					  	&lt;
						  	<span>/</span>
						  	<span className="lsg__code--red">form</span>
					  	&gt;
		  			</span>

		  		: null
		  	}
			  
			</pre>
		)
	}
}

export default CodeHtml