import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">Heading</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">size</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"{this.props.size}"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">title</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"{this.props.text}"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">subTitle</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"{this.props.subTitle}"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">color</span>&nbsp;
			  	<span className="lsg__code--red">||</span>&nbsp;
			  	<span className="lsg__code--green">subTitleColor</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">
			  		<span className="lsg__code--gray">&nbsp;// Optional colors:</span>
			  		<br/>&nbsp;&nbsp;&nbsp;&nbsp;"white" <span className="lsg__code--gray">// Dark backgrounds</span>
			  		<br/>&nbsp;&nbsp;&nbsp;&nbsp;"red"&nbsp;&nbsp; <span className="lsg__code--gray">// Holiday messages</span>
			  		<br/>&nbsp;&nbsp;&nbsp;&nbsp;"blue"&nbsp; <span className="lsg__code--gray">// General Wagreens</span>
			  	</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">hTag</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"1" | "2" | "3" | "4" | "5" | "6"</span>
			  	&nbsp;<span className="lsg__code--gray">// Optional, if an h tag is needed</span>
			  	<br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact