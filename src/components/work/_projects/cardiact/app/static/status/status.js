import React from 'react'
import styles from "./style.scss"

// Components needed

import CardiContain from '../../shared/container/container'
import CardiCard from '../../shared/card/card'
import CardiButton from '../../shared/buttons/button'

import CardiGraph from './components/graph/graph'
import CardiRate from './components/rate/rate'

class CardiStaticStatus extends React.Component {

	render() {
		return (

      <CardiContain
        title="Heart Status"
        text="Your heart health looks great, everything is currently falling within normal range."
        
        // For the modal on the bottom of the container
        // This shows up when the user clicks red button on the bottom

        modalBottom="true"
        modalTitle="Do you need help?"
        btnOneTitle="Emergency! (911)"
        btnTwoTitle="Emergency Contact"
        isModalOpen={this.props.isHelpOpen}
        modalOpen={this.props.helpOpen}
        >

        <CardiCard
          heartIcon="true"
          title="Your Heart Rate"
          >
          <CardiGraph />
          <CardiRate />
        </CardiCard>

        <CardiCard
          title="Electrocardiograms"
          timeStamp="10:21 AM"
          >
          <div className="cardiact__hr--var">
            <div><strong>Sinus Rhythm</strong></div>
            <div><strong>70 BPM Average</strong></div>
          </div>
        </CardiCard>

        <CardiCard 
          title="Heart Rate Variability"
          timeStamp="9:55 AM"
          >
          <div className="cardiact__hr--var">
            <span><strong>60</strong></span><span>ms</span>
          </div>
        </CardiCard>

        <CardiButton 
          title="I need help" 
          onClick={this.props.helpOpen} 
        />

      </CardiContain>

		)
	}
}

export default CardiStaticStatus
