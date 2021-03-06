
import React from 'react'
import CardiContain from '../../shared/container/container'
import CardiCard from '../../shared/card/card'
import CardiButton from '../../shared/buttons/button'
import CardiGraph from './components/graph/graph'
import CardiRate from './components/rate/rate'
import './style.scss'

const CardiStaticStatus = ( props ) => {
	return (

    <CardiContain
      title="Heart Status"
      text="Your heart health looks great, everything is currently falling within normal range."
      modalBottom="true"
      modalTitle="Do you need help?"
      btnOneTitle="Emergency! (911)"
      btnTwoTitle="Emergency Contact"
      isModalOpen={ props.isHelpOpen }
      modalOpen={ props.helpOpen }
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
        onClick={ props.helpOpen } 
      />

    </CardiContain>

	)
}

export default CardiStaticStatus
