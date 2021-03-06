
import React from 'react'
import './style.scss'

const AnimationKnight = () => {
  return(

	  <div className="knight">
	  	<div className="knight__lance">
	  		<div className="knight__lance--shoulder">
	  			<svg viewBox="0 0 25.5 20.6">
						<path d="M1.5,9.3C0.6,9.2-0.5,9,0.3,7.5S3.7,0.2,11.7,0c0.9,0,3.9,0.3,6.3,1.5s5.4,4.5,6.6,6.9s1,5.7,0.8,6.8
							c-0.2,1.1,0.4,4.8-0.9,5.5c0,0,0.4-3.4-2-6s-3.7-4.7-8.6-4.3C14,10.3,5.2,10.5,1.5,9.3z"/>
					</svg>
	  		</div>

	  		<div className="knight__lance--lance">
	  			<svg viewBox="0 0 281.7 58.5">
						<path d="M0.2,3c0-0.2,0.5-0.1,0.7,0C1.1,3,1.1,2.6,1.2,2.4c0-0.1-0.7-0.1-0.9-0.2s0-0.6,0.1-0.8C0.5,1.3,1,1.5,1.1,1.5
							c0.1,0,0.2-0.3,0.1-0.4C1.2,1,1.1,1,1.1,1C0.9,1,0.6,1,0.6,0.7c0-0.2,0-0.8,0.6-0.7c0.4,0.1,1.5,0.1,1.9,0.3S3.5,1,3.5,1L8,1.4
							l0,0.5l232.3,34.8c-1.3-1.1-3-0.8-3-1.4c0-0.6-0.4-1.9,2.9-1c3.1,0.9,4,1.9,5.1,3.1l16,2.4c-0.1-0.8,0.6-1.8-0.1-1.7
							c-0.6,0.1-1.4-0.9-1.7-1.8c-0.4-0.9-1.3-1.8-2.2-1.9c-0.9-0.1-2.1-0.3-1.2-1.8c1.7-3,13.7,2.8,13.7,2.8s3,2.1,3,5
							c0,0.3,0,0.6-0.1,1.1l9,1.4l-0.6,3.9l-9.2-1.4c-1.2,5.6-3.5,13.5-4.5,13.1c-1.4-0.6-9.9-4.6-11.6-5.9c-1.7-1.3-4.7-3.5-5.9-3.2
							c-1.1,0.3-1.8,2.6-2.4,1.7s-4.2-5.7-5.4-5.8s-2.4,1.2-3.2,1.1c-0.8-0.1-3.3-1.6-4.2-4.1c-0.4-1.1-0.5-2-0.6-2.7L7.7,4.2L7.6,4.8
							L3.1,3.9C3.1,4.2,2.3,4.3,2.2,4.3c-0.1,0-1.9-0.4-2.1-0.4C-0.1,3.7,0.1,3.2,0.2,3z"/>
					</svg>
	  		</div>
	  	</div>

	  	<div className="knight__main">
				<svg viewBox="0 0 305.8 524.9">
					<g>
						<g>
							<path className="knight__saddle" d="M85.4,290.3c0,0-12.3-3.3-21.8,16c-9.4,19.3-11.3,32-9.1,50.9s20.3,32,24.7,33.8c18.7,7.5,42.9,5.8,50.9,3.3
								c8-2.5,21.1-8.4,33.1-5.8c12,2.5,74.1,9.1,83.9,9.8c9.8,0.7,34.7,0.4,47.9-9.4c10.2-7.6,14.5-19.3,6.9-42.1
								c-7.6-22.9-18.2-37.8-24.7-44c-6.5-6.2-9.8-6.2-14.2-5.8C258.7,297.2,137.4,340.5,85.4,290.3z"/>
							<path className="knight__saddle--light" d="M133.4,463.4c-0.4-5.4,3.1-44-0.9-57.9c-4-14-3.1-44.9-3.1-44.9s-41,2-48.9-10.2c-7.8-12.2-4-27.4-2.2-40.3
								c1.8-12.9,9.4-22.3,11.4-23.1s4.4-0.2,2.9-4.7c-1.5-4.5-0.2-14.9,3.1-21.2c3.3-6.4,12-3.1,13.4-3.3c1.5-0.2,0.7-1.5,0.9-5.1
								c0.2-3.6-1.1-5.1-3.8-6.2c-2.7-1.1-4.5-4.2-2.9-5.1c1.6-0.9,10.4,2.5,12.2,3.5c1.8,0.9,2.5,3.3,2.2,5.8c-0.4,2.5,3.1,0.4,4.7,2.2
								c1.6,1.8,1.1,3.8-0.9,9.3c-2,5.4,0.2,5.4,4.4,9.6s9.3,18.5,9.8,20.5c0,0,12,28.5,59.9,9.4c7.3-0.7,20.7-14.7,31.6-20.3
								c10.9-5.6,25.4-2.2,30.1-1.1c4.7,1.1,7.3,3.5,4.5,5.8s-9.6,7.3-13.3,11.1s-6.7,6.7,4.3,2.5c11.1-4.3,12.4-5.2,22,2.8
								c9.6,8,17.1,27.1,15.6,41.8c-1.5,14.8-23.8,17.4-33.2,19c-9.4,1.6-66.5,1.8-66.5,1.8c-0.9,13.4,1.3,30.5,1.8,34.7
								s8.5,24.7,8.5,35.1s-6.5,14.9-9.8,18c-3.3,3.1-17.1,2.5-20.2,2.5s-7.3-0.9-10,0c-2.7,0.9-1.8,8.2-1.8,8.2s0.8,10,2.8,18
								s1.9,15.8-8,15.9c-9.9,0.1-25.2-15.1-24.3-20.3C130.9,471.9,133.4,463.4,133.4,463.4z"/>
						</g>

						<path className="knight__person" d="M136,210.8c-0.7,1.7-3,7.4-5.1,17.6c-4.4,21.5,1.5,17.9-3.8,27.7c-5.3,9.9-24.7,45-12.5,39.6c16.3,6.1,22.3,2.5,22.3,2.5
							c-13.1,15.6-19.4,33.2-22.3,48.4c-6,2.6-5.5,11.6-5.5,15c0,3.9-1.1,16.5-0.6,21.3s7.4,13.7,12,14.2c0.7,0.1,1.2-0.1,1.7-0.5
							c0.2,12-0.7,31.9,0,38c1,9.2,8,29.6,8.2,33.8s-1,12.8-3,13.6c-2,0.8-4.4-2.6-8.2-1.6c-3.8,1-1.8,12.5-4.4,16.4
							c-2.6,3.9-1.8,7.6-8.5,8.2s-18.1,3-18.1,7.9c0,4.9,4.6,8.7,9,10.8c4.4,2.1,18.4-4.4,27.4-3.9c9,0.5,25.3,2.3,29.6,0
							c4.3-2.3,3.3-10,3.4-15.1c0.2-5.1-3.6-14.1-3.9-19.4c-0.3-5.3-2.1-30.4,4.4-40.1c5.1-7.6,6.5-33,6.9-45.5c6,2.7,11.9,2.8,17.4-2.8
							c6.9-6.9,13.3-43.8,5.5-56.6c2.5-14.7,7-30.1,15.3-41.5c0,0,62.6,1.6,20.4-84.3c-3.6-9.2,1.3-10.2,2.6-11.5
							c1.3-1.3,11-21.7,10.3-35.8c-0.7-14.1,12.3-18.7,12.4-21.6c2.9-51.6-38.4-69.2-38.4-69.2c-1.3-3.1-1.3-3.8,1.1-4.4
							c2.5-0.7,4.6-5.7,1.6-12.5S205.2,43,205.2,40c0-3-4.1-3.3-3.6,1.1s6.4,20.9,8.5,23c2.1,2.1-2.1,4.3-3.8,1.6
							c-1.6-2.6-6.6-14.5-6.6-14.5s-3.3-7.5-3.3-14.9c0-7.5-2.1-20-7.2-25.6C184.3,5.1,180.2,0,165.6,0s-24.7,6-29.8,10.4
							c-5.1,4.5-15.5,17-15.5,23.5c0,6.6,1.5,23.5,0,28.6c-1.5,5.1-5.7,9.5-4.8,12.5c0.1,0.3,0.4,1.2,0.8,1.3c1.7,0.6,13.4-3.9,16.2-4.4
							c2.8-0.4-3.5,2.5-7.3,3.8c-1.2,0.4-2.9,0.9-5.2,1.7c-0.6,0.2-3.3,1.2-1.5,2.7c0,0,16.8,9.1,22.5,11.8c5.7,2.7,6,3,8.6,3.3
							c2.7,0.3-1.8,4.5-3.4,7.7s-4.9,15.2-5.2,18c-0.3,2.8-1.6,51.2-1.6,51.2S139,199.8,136,210.8z"/>

						<path className="knight__saddle--light" d="M140.3,520.8c0,0-13.8-21.6-13.2-38.7c0,0,2.1,2.2-3.3-0.9c-5.4-3.1,5.7,36,8.3,39.6 C134.7,524.3,140.3,520.8,140.3,520.8z"/>
						<path className="knight__saddle--light" d="M124.6,519.9L145,521C145,521,138.9,530.5,124.6,519.9z"/>
					</g>
				</svg>
			</div>
		</div>

	)
}

export default AnimationKnight
