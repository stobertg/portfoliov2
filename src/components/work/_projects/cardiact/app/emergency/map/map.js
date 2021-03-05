import React from 'react'
import MapRouteOne from './routes/route-one/route-one'
import MapRouteTwo from './routes/route-two/route-two'
import MapRouteThree from './routes/route-three/route-three'
import CardiModal from '../../shared/modal/modal'
import CardiMapImg from '../../../../../../../images/cardiact/prototype/map.jpg'
import "./style.scss"

const CardiMap = ( props ) => {
	return (

	  <div className="cardiact__map">
      <MapRouteOne />
      <MapRouteTwo />
      <MapRouteThree />

      <div className="cardiact__map-img">
        <img src={ CardiMapImg } alt="cardiact map" />
        <div className="cardiact__aed"><strong>AED</strong></div>
      </div>

      <CardiModal 
        iconAed
        iconNoAed
        isModalOpen={ props.confirmMainOpen }
        modalTitle="Are you with the victim?"
        btnOneTitle="I'm here with no AED"
        btnTwoTitle="I'm here with AED"
        modalOpen={ props.closeConfirm }
      />
    </div>

	)
}

export default CardiMap