
import React from 'react'
import CardiContain from '../../shared/container/container'
import VictimInfo from '../../shared/victim/info/info'

const CardiStaticProfile = () => {
	return (

    <CardiContain
      title="Profile"
      text="Information within your profile is shown to responders and to emergency contacts in the event of a cardiac event."
      >

      <VictimInfo />
    </CardiContain>

	)
}

export default CardiStaticProfile
