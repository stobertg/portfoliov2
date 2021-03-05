import React from 'react'
import symbolDefs from '../../../../../../../../images/cardiact/icons/symbol-defs.svg'
import Edgar from '../../../../../../../../images/cardiact/prototype/edgar.jpg'
import CardiCard from '../../card/card'
import "./style.scss"

const VictimInfo = ( props ) => {
	return (

		<div className="cardiact__victim--info">
			<CardiCard>
        <div className="profile__headshot">
          <figure>
            <div className="profile__headshot--img">
              <div>
                <img src={ Edgar } alt="" />
              </div>
            </div>

            <figcaption>
              <div><strong>Edward York IV</strong></div>
              <div>Male - 40 Years old</div>

              <div className="profile__entry">
                <span><strong>Forcable Entry Allowed</strong></span>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="profile__address">
          <div className="profile__address--item">
            <div>
              <span className="icon icon__sm icon__pin">
                <svg><use xlinkHref={`${symbolDefs}#icon__pin`}></use></svg>
              </span>
            </div>

            <div>
              <div><strong>1483 Westminster</strong></div>
              <div><strong>England, UK</strong></div>
            </div>
          </div>
        </div>
      </CardiCard>

      <CardiCard title="Medical Information">
        <ul class="cardiact__list">
          <li>Takes 50mg of Lipitor daily</li>
          <li>Has seasonal allergies</li>
          <li>Primary Care Physician:<br/> William Hatteclyffe</li>
          <li>Preferred Hospital: University Hospital</li>
        </ul>
      </CardiCard>
    </div>

	)
}

export default VictimInfo