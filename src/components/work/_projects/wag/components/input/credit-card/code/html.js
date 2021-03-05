import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">form</span>
			  	&nbsp;
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"form__credit-card form__on-light-bg"</span>
				&gt;

				<br /><br />
				&nbsp;&nbsp;
				<span className="lsg__code--gray">// Full width input</span>

				<br />
				&nbsp;&nbsp;&lt;
			  	<span className="lsg__code--red">span</span>
			  	&nbsp;
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"input__contain"</span>
				&gt;

					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">input</span>
				  	&nbsp;
				  	<span className="lsg__code--green">type</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"number"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">name</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"card-number"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">id</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"card-number"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">required</span>
				  	&nbsp;
				  	<span>/</span>
					&gt;

					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">label</span>
				  	&nbsp;
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"input__title"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">for</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"card-number"</span>
				  &gt;
				  	<span>Field label</span>
				  &lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">label</span>
					&gt;

					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span</span>
				  	&nbsp;
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"credit-card__img"</span>
				  &gt;&lt;
					  	<span className="lsg__code--red">img</span>
					  	&nbsp;
					  	<span className="lsg__code--green">src</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"/themes/images/credit-cards/visa.png"</span>
					&gt;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
					&gt;

				<br />
				&nbsp;&nbsp;&lt;
					<span>/</span>
			  	<span className="lsg__code--red">span</span>
				&gt;

				<br /><br />
				&nbsp;&nbsp;
				<span className="lsg__code--gray">// Expiration inputs</span>

				<br />
				&nbsp;&nbsp;&lt;
			  	<span className="lsg__code--red">div</span>
			  	&nbsp;
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"card__exp"</span>
				&gt;

					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span</span>
				  	&nbsp;
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"input__contain input__fifty-fifty"</span>
					&gt;

						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">input</span>
					  	&nbsp;
					  	<span className="lsg__code--green">type</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"number"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">name</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"date-card"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">id</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"card-exp-date"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">placeholder</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"MM/YY"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">maxlength</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"5"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">required</span>
					  	&nbsp;
					  	<span>/</span>
						&gt;

						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">label</span>
					  	&nbsp;
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"input__title"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">for</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"card-exp-date"</span>
					  &gt;
					  	<span>Exp. date</span>
					  &lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">label</span>
						&gt;

					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						<span>/</span>
				  	<span className="lsg__code--red">span</span>
					&gt;

					<br /><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span</span>
				  	&nbsp;
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"input__contain input__fifty-fifty"</span>
					&gt;

						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">input</span>
					  	&nbsp;
					  	<span className="lsg__code--green">type</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"number"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">name</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"card-zip-code"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">id</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"card-zip-code"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">placeholder</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"12345"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">maxlength</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"5"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">required</span>
					  	&nbsp;
					  	<span>/</span>
						&gt;

						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">label</span>
					  	&nbsp;
					  	<span className="lsg__code--green">class</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"input__title"</span>
					  	&nbsp;
					  	<span className="lsg__code--green">for</span>
					  	<span className="lsg__code--red">=</span>
					  	<span className="lsg__code--yellow">"card-zip-code"</span>
					  &gt;
					  	<span>ZIP Code</span>
					  &lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">label</span>
						&gt;

					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;
						<span>/</span>
				  	<span className="lsg__code--red">span</span>
					&gt;

				<br />
				&nbsp;&nbsp;&lt;
					<span>/</span>
			  	<span className="lsg__code--red">div</span>
				&gt;

				<br /><br />&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">form</span> 
			  &gt;
			</pre>
		)
	}
}

export default CodeReact