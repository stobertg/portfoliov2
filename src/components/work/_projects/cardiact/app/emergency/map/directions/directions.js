import React from 'react'
import CardiModal from '../../../shared/modal/modal'
import symbolDefs from '../../../../../../../../images/cardiact/icons/symbol-defs.svg'
import "./style.scss"

const CardiDirections = ( props ) => {
  const directions = [
    {
      icon: 'arrow-left',
      turn: 'Left at East Liberty St.',
      distance: '0.3 miles away'
    },
    {
      icon: 'arrow-left',
      turn: 'Left at Wheeler St.',
      distance: '0.4 miles away'
    },
    {
      icon: 'heart',
      turn: 'Victim on the left',
      distance: '0.5 miles away'
    }
  ]

	return (

    <div 
      className={`cardiact__map-bottom${ props.isOpen ? ' show__dir-expanded' :'' }${ props.confirmOpen ? ' show__confirm' :'' }`}>
      <div 
        className="btn__contain" 
        onClick={() => {
          props.confirmMainOpen(); 
          props.showConfirmText()
        }}>
        <div className="btn btn__red btn__confirm"><strong>I'm with Victim</strong></div>
      </div>

      <div className="cardiact__dir">
        <div className="cardiact__dir--contain">
          <div className="cardiact__dir--title" onClick={ props.openDirs }>
            <div className="cardiact__dir--address">
              <div><strong>3000 Wheeler St.</strong></div>
              <div><em>Cincinnati, OH 45219</em></div>
              <div className="cardiact__dir--distance"><em>2 miles away</em></div>
            </div>

            <div className="cardiact__dir--start">
              <div>
                <span className="icon icon__sm icon__nav">
                <svg><use xlinkHref={`${ symbolDefs }#icon__nav`}></use></svg>
                </span>
                <strong>Start</strong>
              </div>
            </div>
          </div>

          <div className="dir__contain">
            <ul>
              { directions.map(( direction, index ) =>
                <li key={ direction.turn }>
                  <div className="dir__item">
                    <span className={`icon icon__sm icon__${ direction.icon }`}>
                      <svg><use xlinkHref={`${ symbolDefs }#icon__${ direction.icon }`}></use></svg>
                    </span>

                    <div className="dir__item--text">
                      <div><strong>{ direction.turn }</strong></div>
                      <div><em>{ direction.distance }</em></div>
                    </div>
                  </div>
                </li>
              )}
            </ul>

            <CardiModal 
              iconAed
              iconNoAed
              modalTitle="Are you with the victim?"
              btnOneTitle="I'm here with no AED"
              btnTwoTitle="I'm here with AED"
              modalOpen={ props.openConfirm }
            />
          </div>
        </div>
      </div>

      <div className="btn__contain-bottom">
        <div className="btn__contain">
          <div 
            className={`btn btn__red btn__confirm-alt${ props.confirmOpen ? ' btn__disabled' :'' }`}
            onClick={ props.openConfirm }>
              <strong>I'm with Victim</strong>
          </div>

          <div 
            className="btn btn__no-style btn__back-to-map" 
            onClick={ props.backToMap }>
              <strong>Back to Map</strong>
          </div>
        </div>
      </div>
    </div>
	  
	)
}

export default CardiDirections
