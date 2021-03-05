import React, { useRef, useState, useEffect } from 'react'
import Button from '../buttons/general/button'
import './style.scss'

const Overlay = (props) => {
	const [ expanded, setExpanded ] = useState(false);
	const handleClick = () => setExpanded( !expanded );

	// For the function of the tap trap within modals
	// This is for accessability - the focus stays inside the modal until the user clicks the close button
	// Or clicks on the overlay, behind the modal

	const topTabTrap = React.useRef()
	const bottomTabTrap = React.useRef()
	const firstFocusableElement = React.useRef()
	const lastFocusableElement = React.useRef()

	React.useEffect(() => {
		document.addEventListener('focusin', trapFocus)

		return function cleanup(){
			document.removeEventListener('focusin', trapFocus)
		}

		function trapFocus(event){
			if(event.target === topTabTrap.current){
				lastFocusableElement.current.focus()
			}

			if(event.target === bottomTabTrap.current){
				firstFocusableElement.current.focus()
			}
		}
	}, [ firstFocusableElement, lastFocusableElement ])

	return (
		<div className="modal__wrap">
			<Button
				color={ props.btnColor }
				title={ props.btnTitle }
				onClick={ handleClick }
				ariaLabel="Opens simulated dialog"
				role="dialog" 
				aria-modal="true"
			/>
	  	
		  <div className={`modal ${ props.type == "drawer" ? 'modal__drawer':'' } ${ expanded ? 'modal__show':'' }`}>
		  	<div 
		  		id={ props.btnTitle }
		  		className={`modal__contain ${props.size ? 'modal__contain--' + props.size:''}`}
		  		role="dialog"
		  		aria-labelledby={ props.btnTitle }
		  		aria-modal="true"
		  	>
		  		<span ref={ topTabTrap } tabIndex="0"></span>
		  		<div className="sr-only">Beginning of the content</div>

		  		<div className="modal__header">
	  				<div className="modal__header--content">
				  		<Button
				  			btnCircle
				  			icon="dismiss-v2"
				  			color="ghost"
				  			onClick={ handleClick }
				  			reference={ firstFocusableElement }
				  		/>
				  	</div>
			  	</div>
			  	
		  		{ props.children }

			  	<div className="sr-only">End of the content</div>
		  	</div>

		  	<button 
		  		ref={ lastFocusableElement }
		  		className="overlay"
		  		tabIndex="0"
		  		onClick={handleClick}
		  	>
		  		<span ref={ bottomTabTrap } tabIndex="0"></span>
		  	</button>
		  </div>

		</div>
	)
}

export default Overlay;
