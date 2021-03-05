
import React from 'react'
import Fade from 'react-reveal/Fade';
import './style.scss'

import ProcessBlock from './process-block'

import Process1 from '../../../../../images/cardiact/process/pone.jpg'
import Process2 from '../../../../../images/cardiact/process/ptwo.jpg'
import Process3 from '../../../../../images/cardiact/process/pthree.jpg'
import Process4 from '../../../../../images/cardiact/process/pfour.jpg'
import Process5 from '../../../../../images/cardiact/process/pfive.jpg'
import Process6 from '../../../../../images/cardiact/process/psix.jpg'
import Process7 from '../../../../../images/cardiact/process/pseven.jpg'
import Process8 from '../../../../../images/cardiact/process/peight.jpg'
import Process9 from '../../../../../images/cardiact/process/pnine.jpg'
import Process10 from '../../../../../images/cardiact/process/pten.jpg'

const Process = ( props ) => {
	return(

		<div className="block__process">
			<Fade bottom distance="32px">
				<ProcessBlock
					title="1. Research and Benchmarking"
					descp="For user testing, we took our prototype to a nearby hospital to test with four employees, who were all CPR certified, which we're inline with our target users to use the App. During User testing, we were able to identify key pain points and insight that allowed us to revise our app and move to the final design phase of v1."
				>
					<img src={ Process1 } alt="St Albans Cathedral" />
				</ProcessBlock>

				<ProcessBlock
					className="var-1"
					title="2. Research, Defining Users, and Exhausted Paths"
					descp="For user testing, we took our prototype to a nearby hospital to test with four employees, who were all CPR certified, which we're inline with our target users to use the App. During User testing, we were able to identify key pain points and insight that allowed us to revise our app and move to the final design phase of v1."
				>
					<img src={ Process2 } alt="St Albans Cathedral" />
	        <div>
		        <img style={{ width: 400 }} src={ Process3 } alt="St Albans Cathedral" />
		        <img src={ Process4 } alt="St Albans Cathedral" />
		      </div>
				</ProcessBlock>

				<ProcessBlock
					className="var-2"
					title="3. Sketching, Paper Prototypes, and Wireframes"
					descp="For user testing, we took our prototype to a nearby hospital to test with four employees, who were all CPR certified, which we're inline with our target users to use the App. During User testing, we were able to identify key pain points and insight that allowed us to revise our app and move to the final design phase of v1."
				>
					<img src={ Process5 } alt="St Albans Cathedral" />
	        <img src={ Process6 } alt="St Albans Cathedral" />
		      <img src={ Process7 } alt="St Albans Cathedral" />
				</ProcessBlock>

				<ProcessBlock
					className="var-3"
					title="4. User Testing"
					descp="For user testing, we took our prototype to a nearby hospital to test with four employees, who were all CPR certified, which we're inline with our target users to use the App. During User testing, we were able to identify key pain points and insight that allowed us to revise our app and move to the final design phase of v1."
				>
					<img src={ Process8 } alt="St Albans Cathedral" />
	        <img src={ Process9 } alt="St Albans Cathedral" />
	        <img src={ Process10 } alt="St Albans Cathedral" />
				</ProcessBlock>
			
			</Fade>
		</div>

	)
}

export default Process
