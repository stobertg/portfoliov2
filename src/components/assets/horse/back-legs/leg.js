import React from 'react'
import styles from "./style.scss"

class HorseBackLeg extends React.Component {
	render() {
		return(

			<div className={`horse__leg--hind horse__leg--hind-${this.props.position}`}>
				<div className="horse__leg--hind-top"> 
					<svg viewBox="0 0 86.7 140.1">
						<g>
							<path class="st0" d="M0.1,29c0,0-4-29,39-29s50,27,47,35s-11,35-11,35c-5,13-7,40-4.9,48.3c0.9,3.3,2.7,4.7,2.8,5.6
								c0.2,0.9,2,3.1,0.2,12.2c-3.7,6.8-18.1,2.8-18.1,2.8c-6.9-9-13.1-27-13.1-27c-1.2-4.2-5.5-7.7-9-11s-5-4-9-8C24.1,93,0.1,65,0.1,29
								z"/>
						</g>
					</svg>
				</div>

				<div className="horse__leg--hind-bottom">
					<div className="horse__leg--hind-mid">
						<svg viewBox="0 0 9.1 40.4">
							<g>
								<path d="M0.7,19C1.2,15.1,1.6,6.6,1.2,4.5C1,3.7,0.8,2.9,0.5,2c0,0,0.6-2,3.6-2c4.9,0,4.9,2,4.9,2c0,0.4,0,1,0,1.6 C9,9,8.7,20.9,9,23.4l0,17H2c0,0-2-4-2-8L0.7,19z"/>
							</g>
						</svg>
					</div>

					<div className="horse__leg--hind-foot">
						<svg viewBox="0 0 13.7 10.5">
							<g>
								<path d="M12.9,3.9c-0.2,1.7,1.3,2.7,0.6,3.8s-1.9,1.8-3.2,2.2C9.1,10.2,0,11.1,0,9.9s1.4-3.6,2.8-5.1s1.3-1.3,1-1.7
									c0,0,2.3-4,4.3-3S12.7-0.4,12.9,3.9z"/>
							</g>
						</svg>
					</div>
				</div>
			</div>
	
		)
  }
}

export default HorseBackLeg