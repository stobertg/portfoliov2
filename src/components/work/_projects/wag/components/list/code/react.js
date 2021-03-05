import React from 'react'

class CodeReact extends React.Component{
	render() {
		return(
		  <pre>
		  	&lt;
			  	<span className="lsg__code--red">List</span> 

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">vertical</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">type</span>
			  	<span className="lsg__code--red">=</span>
			  	<span className="lsg__code--yellow">"{this.props.type}"</span>

			  	<br/>
			  	&nbsp;&nbsp;
			  	<span className="lsg__code--green">listItems</span>
			  	<span className="lsg__code--red">=</span>
			  	<span>&#123;&#91;</span>

			  	{this.props.type == 'links' 
			  		? <span>
			  				<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">link</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"#!"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"First Barons War"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">link</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"#!"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Second Barons War"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">link</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"#!"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"The Peasents Revolt"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">link</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"#!"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"The Hundred Years War"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">link</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"#!"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Wars of the Roses"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">link</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"#!"</span>,&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Protestant Reformation"</span>&nbsp;&#125;</span>
			  			</span>
			  		: <span>
			  				<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"First Barons War"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Second Barons War"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"The Peasents Revolt"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"The Hundred Years War"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Wars of the Roses"</span>&nbsp;&#125;,</span>
						  	<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>&#123;&nbsp;<span className="lsg__code--yellow">label</span><span className="lsg__code--purple">:</span>&nbsp;<span className="lsg__code--yellow">"Protestant Reformation"</span>&nbsp;&#125;</span>
			  			</span>
			  	}

			  	<br/>
			  	&nbsp;&nbsp;<span>&#93;&#125;</span>
			  	<br/>
			  /&gt;
			</pre>
		)
	}
}

export default CodeReact