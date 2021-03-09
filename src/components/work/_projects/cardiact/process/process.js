
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

const Process = () => {
	return(

		<div className="page__block--process">
			<Fade bottom distance="100px">
				<ProcessBlock
					title="1. Research and Benchmarking"
					descp="Our process began with extensive research into the human heart, and cardiac arrest. We needed to understand how it functioned, and what exactly was occurring during cardiac arrest in order to design for a scenario where it was happening."
				>
					<img src={ Process1 } alt="Cardiact Process" />
				</ProcessBlock>

				<ProcessBlock
					className="var-1"
					title="2. Research, Defining Users, and User Flows"
					descp="After becoming familiar with the process of treating a victim of cardiac arrest, we needed to look into how our application would fit into this scenario. We began to develop flow charts in order to visually develop the functionality of the app, and identify opportunities where we could save time or solve an issue. "
				>
					<img src={ Process2 } alt="Cardiact Process" />
	        <div>
		        <img src={ Process3 } alt="Cardiact Process" />
		        <img src={ Process4 } alt="Cardiact Process" />
		      </div>
				</ProcessBlock>

				<ProcessBlock
					className="var-2"
					title="3. Sketching, Paper Prototypes, and Wireframes"
					descp="Based on our research and interviews, we began to develop our application beginning with sketching. After completing the paper prototype, we developed digital wireframes. Here we concentrated on taking revisions and additions from the paper prototype and refined our flow, hierarchical structure and typography along with developing graphic elements."
				>
					<img src={ Process5 } alt="Cardiact Process" />
	        <img src={ Process6 } alt="Cardiact Process" />
		      <img src={ Process7 } alt="Cardiact Process" />
				</ProcessBlock>

				<ProcessBlock
					className="var-3"
					title="4. User Testing"
					descp="To test our initial prototype, we visited University Hospital at the University of Cincinnati where we tested and interviewed five employees who are CPR certified in Basic Life Support (BLS). We conducted a mix of Obtrusive and Unobtrusive testing. For three of the five testers we let them explore the app, having them speak aloud their thoughts as they went though, while we were quiet and documenting if what they were seeing is what we expected or any areas that proved to be confusing."
				>
					<img src={ Process8 } alt="Cardiact Process" />
	        <img src={ Process9 } alt="Cardiact Process" />
	        <img src={ Process10 } alt="Cardiact Process" />
				</ProcessBlock>
			
			</Fade>
		</div>

	)
}

export default Process
