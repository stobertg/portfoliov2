import React from 'react'
import CardiButton from '../buttons/button'
import './style.scss'

const CardiModal = ( props ) => {
  return (

    <div className={`cardiact__confirm ${ props.isModalOpen ? "show__confirm" :"" }`}>
      <div className="btn__contain">
        <div>
          <div className="btn__contain-title"><em>{ props.modalTitle }</em></div>

          <CardiButton 
            icon={ props.icon }
            iconAed={ props.iconAed }
            title={ props.btnOneTitle } 
          />

          <CardiButton 
            icon={ props.icon }
            iconNoAed={ props.iconNoAed }
            title={ props.btnTwoTitle } 
          />
        </div>
      </div>

      <div className="btn__close" onClick={ props.modalOpen }>
        <div className="icon icon__x icon__x-sm"><div></div></div>
      </div>
    </div> 

  )
}

export default CardiModal
