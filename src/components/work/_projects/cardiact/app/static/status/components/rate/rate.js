import React from 'react'
import styles from "./style.scss"

import CountUp from 'react-countup';

class CardiRate extends React.Component {

	render() {
		return (

      <div className="cardiact__hr--bpm">
        <div><strong>Current</strong></div>

        <div className="cardiact__hr--rate">
          <div>
            <div className="cardiact__hr--number">
              <strong>
                
                <CountUp 
                  start={72}
                  end={73} 
                  duration={5}
                  useEasing={false}
                  onEnd={({ reset, start, update }) => start()}
                />
              </strong>
            </div>

            <div className="cardiact__hr--numbpm">
              <div><strong>BPM</strong></div>
              <div>
                <span className="icon icon__sm icon__heart">
                  <svg><use xlinkHref="/cardiact/icons/symbol-defs.svg#icon__heart"></use></svg>
                </span>
              </div>
            </div>
          </div>

          <div className="cardiact__hr--range">
            <span>Range: 65 - 96</span>
          </div>
        </div>
      </div>

		)
	}
}

export default CardiRate
