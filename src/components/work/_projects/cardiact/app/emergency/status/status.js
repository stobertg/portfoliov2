import React from 'react'
import CardiVitals from './vitals'
import CardiContain from '../../shared/container/container'
import CardiCard from '../../shared/card/card'
import CardiList from '../../shared/list/list'
import VictimInfo from '../../shared/victim/info/info'
import George from '../../../../../../../images/cardiact/prototype/george.jpg'
import Richard from '../../../../../../../images/cardiact/prototype/neighbor.jpg'
import Liz from '../../../../../../../images/cardiact/prototype/wife.jpg'
import RichardIII from '../../../../../../../images/cardiact/prototype/richardiii.jpg'
import Edward from '../../../../../../../images/cardiact/prototype/son.jpg'
import "./style.scss"

const CardiStatus = ( props ) => {
  const responders = [
    {
      name: 'George Clarence',
      distance: '.02 mi away',
      image: George,
      aed: true
    },
    {
      name: 'Richard Neville',
      distance: 'There now',
      image: Richard,
      aed: false
    }
  ]

  const contacts = [
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

    <CardiContain>
      <CardiVitals />

      <CardiCard title="Confirmed Responders">
        <ul className="list__contacts">
          { responders.map(responder =>

            <li>
              <CardiList 
                title={ responder.name }
                subtitle={ responder.distance }
                image={ responder.image }
                aed={ responder.aed }
              />
            </li>

          )}
        </ul>
      </CardiCard>

      <CardiCard title="Emergency Contacts">
        <ul className="list__contacts">
          { contacts.map(contact =>

            <li>
              <CardiList 
                title={ contact.name }
                subtitle={ contact.relation }
                image={ contact.image }
                btnTypePhone="true"
              />
            </li>

          )}
        </ul>
      </CardiCard>

      <VictimInfo />
    </CardiContain>

	)
}

export default CardiStatus
