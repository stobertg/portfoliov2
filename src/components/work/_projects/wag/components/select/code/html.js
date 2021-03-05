import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">span </span>
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"select__contain"</span>
			  &gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">label </span> 
				  	<span className="lsg__code--green">for</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"select-dropdown"</span>
				  &gt;<span>Title select</span>&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">label</span>
			  	&gt;

			  	<br/><br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">span </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"icon icon__arrow-down"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  <span className="lsg__code--red">svg</span>&gt;&lt;<span className="lsg__code--red">use </span>
					  <span className="lsg__code--green">xlink:href</span>
					  <span className="lsg__code--red">=</span>
					  <span className="lsg__code--yellow">"/images/adaptive/livestyleguide/walgreens.com/v3.0/themes/images/icons/symbol-defs.svg#icon__arrow-down"</span>
					  &gt;&lt;/<span className="lsg__code--red">use</span>&gt;&lt;/<span className="lsg__code--red">svg</span>&gt;

				  <br/>
				  &nbsp;&nbsp;&lt;/
				  	<span className="lsg__code--red">span</span> 
				  &gt;

			  	<br/><br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">select </span> 
				  	<span className="lsg__code--green">id</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"select-dropdown"</span>
				  	&nbsp;
				  	<span className="lsg__code--green">aria-label</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"Sort by drop-down list, press SPACE BAR to open available options in the list, page will reload"</span>
				  &gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">option</span> 
					  	&gt;<span>Select list item</span>&lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">option</span>
				  	&gt;

				  	<br/>
					  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
					  	<span className="lsg__code--red">option</span> 
					  	&gt;<span>Add more list items</span>&lt;
					  	<span>/</span>
					  	<span className="lsg__code--red">option</span>
				  	&gt;

				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">select</span>
			  	&gt;

		  	<br/>
		  	&lt;
			  	<span>/</span>
			  	<span className="lsg__code--red">span</span>
		  	&gt;
			</pre>
		)
	}
}

export default CodeHtml