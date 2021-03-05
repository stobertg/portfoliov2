import React from 'react'
import CardiCard from '../../shared/card/card'
import CountUp from 'react-countup';
import "./style.scss"

const CardiVitals = ( props ) => {
	return (
        
    <CardiCard>
      <div className="cardiact__vitals">
        <div>
          <div className="cardiact__vitals--info">
            <div className="cardiact__vitals--time">
              <div>
                <span><strong>2</strong></span>
                <span className="icon__colon"></span>
                <span>
                  <strong>
                    <CountUp 
                      start={10}
                      end={59} 
                      duration={49}
                      useEasing={false}
                      onEnd={({ reset, start, update }) => start()}
                    />
                  </strong>
                </span>
              </div>
            </div>

            <div className="font__twelve">
              <div><em>Time in distress</em></div>
            </div>
          </div>

          <div className="cardiact__vitals--info">
            <div className="cardiact__vitals--time">
              <div>
                <strong>
                  <CountUp 
                    start={270}
                    end={285} 
                    duration={2}
                    useEasing={false}
                    onEnd={({ reset, start, update }) => start()}
                  />
                </strong>
              </div>
            </div>

            <div className="font__twelve">
              <div><em>Current BPM</em></div>
            </div>
          </div>
        </div>

        <div className="cardiact__vitals--alert"><strong>EMS on their way</strong></div>
      </div>
    </CardiCard>

	)
}

export default CardiVitals
