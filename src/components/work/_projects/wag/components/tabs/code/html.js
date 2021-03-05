import React from 'react'

class CodeHtml extends React.Component{
	render() {
		return(
		  <pre>
			  &lt;
			  	<span className="lsg__code--red">ul </span> 
			  	<span className="lsg__code--green">class</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"tabs"</span>
			  	&nbsp;
			  	<span className="lsg__code--green">role</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"tablist"</span>
			  &gt;

			  	<br /><br />
			  	&nbsp;&nbsp;<span className="lsg__code--gray">// For the selected tabs</span>
				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">li </span> 
				  	<span className="lsg__code--green">class</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"selected"</span>
				  	&nbsp;<span className="lsg__code--green">role</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"presentation"</span>
				  &gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">a </span> 
				  	<span className="lsg__code--green">href</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"#!"</span>

				  	&nbsp;<span className="lsg__code--green">aria-selected</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"true"</span>

				  	&nbsp;<span className="lsg__code--green">role</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"tab"</span>
				  &gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">strong</span> 
				  &gt;

				  	<span>Tab name</span>

				  &lt;
				  	<span className="lsg__code--red">span</span> 
				  &gt;

				  	<span>(100)</span>

				  &lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
				  &gt;&lt;
						<span>/</span>
						<span className="lsg__code--red">strong</span> 
				  &gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">a</span> 
				  &gt;

			  	<br/>
			  	&nbsp;&nbsp;&lt;
			  		<span>/</span>
			  		<span className="lsg__code--red">li</span>
			  	&gt;

			  	<br /><br />
					&nbsp;&nbsp;<span className="lsg__code--gray">// For the unselected tabs</span>
				  <br/>
				  &nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">li</span> 
				  	&nbsp;<span className="lsg__code--green">role</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"presentation"</span>
				  &gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">a </span> 
				  	<span className="lsg__code--green">href</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"#!"</span>

				  	&nbsp;<span className="lsg__code--green">aria-selected</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"false"</span>

				  	&nbsp;<span className="lsg__code--green">role</span>
				  	<span className="lsg__code--red">=</span>
				  	<span className="lsg__code--yellow">"tab"</span>
				  &gt;

				  <br/>
				  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span className="lsg__code--red">strong</span> 
				  &gt;

				  	<span>Tab name</span>

				  &lt;
				  	<span className="lsg__code--red">span</span> 
				  &gt;

				  	<span>(100)</span>

				  &lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">span</span>
				  &gt;&lt;
						<span>/</span>
						<span className="lsg__code--red">strong</span> 
				  &gt;

				  <br />
				  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
				  	<span>/</span>
				  	<span className="lsg__code--red">a</span> 
				  &gt;

			  	<br />
			  	&nbsp;&nbsp;&lt;
			  		<span>/</span>
			  		<span className="lsg__code--red">li</span>
			  	&gt;			  

		  	<br /><br />
		  	&lt;/<span className="lsg__code--red">ul</span>&gt;
			</pre>
		)
	}
}

export default CodeHtml