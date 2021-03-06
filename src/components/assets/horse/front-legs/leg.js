
import React from 'react'
import './style.scss'

const HorseLeg = ( props ) => {
	return(

		<div className={`horse__leg horse__leg--${ props.position }`}>
			<div className="horse__leg--top"> 
				<svg viewBox="0 0 36.7 77.2">
					<g>
						<path className="st0" d="M9,38.5c0.8,3.5,1.7,12.3,2,14.8c0.3,2.4,0.4,11,0.2,15.3c-0.1,2.9,0.5,5.2,1,7.1c0,0,0.7,1.5,4.1,1.5
							c5,0,4.5-1.5,4.5-1.5c0-4.1,2.4-5.3,2.2-8.4c-0.2-3.1,0.2-4.5,0.6-7c0.3-2.5,1.5-13.8,1.9-16.5c0.4-2.8,2.5-9.7,5.2-13.3
							c0,0,9.4-14.8,4.4-24.8s-26-5-32.4,3s0,13.6,0,13.6C6.2,27.6,7.8,33.4,9,38.5z"/>
					</g>
				</svg>
			</div>

			<div className="horse__leg--bottom">
				<div className="horse__leg--mid">
					<svg viewBox="0 0 9.1 40.4">
						<g>
							<path d="M0.7,19C1.2,15.1,1.6,6.6,1.2,4.5C1,3.7,0.8,2.9,0.5,2c0,0,0.6-2,3.6-2c4.9,0,4.9,2,4.9,2c0,0.4,0,1,0,1.6 C9,9,8.7,20.9,9,23.4l0,17H2c0,0-2-4-2-8L0.7,19z"/>
						</g>
					</svg>
				</div>

				<div className="horse__leg--foot">
					<svg viewBox="0 0 13.7 10.5">
						<g>
							<path className="st0" d="M12.9,3.9c-0.2,1.7,1.3,2.7,0.6,3.8s-1.9,1.8-3.2,2.2C9.1,10.2,0,11.1,0,9.9s1.4-3.6,2.8-5.1s1.3-1.3,1-1.7
								c0,0,2.3-4,4.3-3S12.7-0.4,12.9,3.9z"/>
						</g>
					</svg>
				</div>
			</div>
		</div>

	)
}

export default HorseLeg
