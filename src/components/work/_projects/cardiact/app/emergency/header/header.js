import React, { useState } from 'react'
import symbolDefs from '../../../../../../../images/cardiact/icons/symbol-defs.svg'
import CardiHeader from  '../../shared/header/header'

const CardiEmergencyHeader = ( props  ) => {
  const [ selected, setSelected ] = useState( false );
  const selectTab = () => setSelected( !selected );

	return (
	 
	  <CardiHeader>
      <div className="tabs">
        <ul className="list__inline">
          <li 
          	className={`tabs__btn ${ props.mapSelected ? 'selected' : '' }`} 
          	onClick={() => {
              selectTab(); 
              props.showMap(); 
              props.showMapText();
            }}>

            <div>
              <span className="icon icon__sm icon__sm--thin icon__pin">
                <svg><use xlinkHref={`${ symbolDefs }#icon__pin`}></use></svg>
              </span>
              <span><strong>Map</strong></span>
            </div>
          </li>

          <li 
          	className={`tabs__btn ${ props.statusSelected ? 'selected' : '' }`} 
          	onClick={() => {
              selectTab(); 
              props.showStatus(); 
              props.showStatusText();
            }}>

            <span className="icon icon__sm icon__heart">
              <svg><use xlinkHref={`${ symbolDefs }#icon__heart`}></use></svg>
            </span>
            <span><strong>Status</strong></span>
          </li>

          <li 
          	className={`tabs__btn ${ props.chatSelected ? 'selected' : '' }`} 
          	onClick={() => {
              selectTab(); 
              props.showChat(); 
              props.showChatText();
            }}>

            <span className="icon icon__sm icon__chat">
              <svg><use xlinkHref={`${ symbolDefs }#icon__chat`}></use></svg>
            </span>
            <span><strong>Chat</strong></span>
          </li>
        </ul>
      </div>
    </CardiHeader>

	)
}

export default CardiEmergencyHeader
