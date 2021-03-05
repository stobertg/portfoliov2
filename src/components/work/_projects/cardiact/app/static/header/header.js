import React, { useState } from 'react'
import symbolDefs from '../../../../../../../images/cardiact/icons/symbol-defs.svg'
import CardiHeader from '../../shared/header/header'
import VictimCard from '../../shared/victim/card/card'
import styles from "./style.scss"

const CardiStaticHeader = ( props ) => {
  const [ selected, setSelected ] = useState( false );
  const selectTab = () => setSelected( !selected );

	return (
	  
	  <CardiHeader>
      <div className="tabs">
        <ul className="list__inline">
          <li 
          	className={`tabs__btn ${ props.statusSelected ? 'selected' : '' }`} 
          	onClick={() => {
              selectTab(); 
              props.showStaticStatus(); 
              props.showStatusText();
            }}>

            <div>
              <span className="icon icon__sm icon__heart">
                <svg><use xlinkHref={`${ symbolDefs }#icon__heart`}></use></svg>
              </span>
              <span><strong>Status</strong></span>
            </div>
          </li>

          <li 
          	className={`tabs__btn ${ props.contactsSelected ? 'selected' : '' }`} 
          	onClick={() => {
              selectTab(); 
              props.showStaticContacts(); 
              props.showContactsText();
            }}>

            <span className="icon icon__sm icon__contacts">
              <svg><use xlinkHref={`${ symbolDefs }#icon__contacts`}></use></svg>
            </span>
            <span><strong>Contacts</strong></span>
          </li>

          <li 
          	className={`tabs__btn ${ props.profileSelected ? 'selected' : '' }`} 
          	onClick={() => {
              selectTab(); 
              props.showStaticProfile(); 
              props.showProfileText();
            }}>

            <span className="icon icon__sm icon__sm--thin icon__avatar">
              <svg><use xlinkHref={`${ symbolDefs }#icon__avatar`}></use></svg>
            </span>
            <span><strong>Profile</strong></span>
          </li>
        </ul>
      </div>
    </CardiHeader>

	)
}

export default CardiStaticHeader
