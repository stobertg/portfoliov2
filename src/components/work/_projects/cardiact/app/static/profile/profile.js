import React from 'react'

// Components needed

import CardiContain from '../../shared/container/container'
import CardiCard from '../../shared/card/card'
import VictimInfo from '../../shared/victim/info/info'

class CardiStaticProfile extends React.Component {

	render() {
		return (

      <CardiContain
        title="Profile"
        text="Information within your profile is shown to responders and to emergency contacts in the event of a cardiac event."
        >

        <VictimInfo />
      </CardiContain>

		)
	}
}

export default CardiStaticProfile
