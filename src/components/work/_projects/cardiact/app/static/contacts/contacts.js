import React from 'react'
import CardiContain from '../../shared/container/container'
import CardiCard from '../../shared/card/card'
import CardiList from '../../shared/list/list'
import CardiButton from '../../shared/buttons/button'
import Liz from '../../../../../../../images/cardiact/prototype/wife.jpg'
import RichardIII from '../../../../../../../images/cardiact/prototype/richardiii.jpg'
import Edward from '../../../../../../../images/cardiact/prototype/son.jpg'
import "./style.scss"

const CardiStaticContacts = ( props ) => {
  const lists = [
    {
      name: 'Liz Woodville', 
      relation: 'Wife',
      image: Liz
    },
    {
      name: 'Richard III', 
      relation: 'Brother & Neighbor',
      image: RichardIII
    },
    {
      name: 'Edward York V', 
      relation: 'Son',
      image: Edward
    }
  ]

	return (

    <CardiContain
      title="Contacts"
      text="These are your emergency contacts who, in a cardiac event, will be notified of your heart status."
      >

      <CardiCard>
        <ul className="list__contacts">
          { lists.map( list => 

            <li key={ list.name }>
              <CardiList
                title={ list.name }
                subtitle={ list.relation }
                image={ list.image }
                btnTypeInfo="true"
              />
            </li>

          )}
        </ul>
      </CardiCard>

      <CardiButton title="Add New Contact" />
    </CardiContain>

	)
}

export default CardiStaticContacts
