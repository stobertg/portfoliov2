
import React from 'react'
import CardiModal from '../modal/modal'
import './style.scss'

const CardiContain = ( props ) => {
	return (

    <div className="cardiact__wrap">
      <div className="cardiact__content">

        { props.title 
          ? <div className="cardiact__content--intro">
              <h2><strong>{ props.title }</strong></h2>
              <p>{ props.text }</p>
            </div> 

          : null
        }

        { props.children }

        { props.modalBottom 
          ? <CardiModal
              modalTitle={ props.modalTitle }
              btnOneTitle={ props.btnOneTitle }
              btnTwoTitle={ props.btnTwoTitle }
              isModalOpen={ props.isModalOpen }
              modalOpen={ props.modalOpen }
            /> 
            
          : null
        }
      </div>
    </div>

	)
}

export default CardiContain
