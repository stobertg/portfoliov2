
import React from 'react'
import Edgar from '../../../../../../../../images/cardiact/prototype/edgar.jpg'
import "./style.scss"

const VictimCard = ( props ) =>  {
	return (

		<div className="cardiact__victim--name">
      <figure>
        <div className="img__victim">
          <img src={ Edgar } alt="cardiact arrest" />
        </div>

        <figcaption>
          <div><strong>Edward York IV</strong></div> 
          <div><em>Cardiovascular Profile</em></div>
        </figcaption>
      </figure>

      <div className="icon icon__arrow-down">
        <svg viewBox="0 0 139 110" >
          <g>
            <path d="M69.7,87.6c-2.6,0-5.1-1-7.1-2.9L17.9,40c-3.9-3.9-3.9-10.2,0-14.1c3.9-3.9,10.2-3.9,14.1,0l37.6,37.6 l37.6-37.6c3.9-3.9,10.2-3.9,14.1,0c3.9,3.9,3.9,10.2,0,14.1L76.8,84.7C74.8,86.6,72.3,87.6,69.7,87.6z"/>
          </g>
        </svg>
      </div>
    </div>

	)
}

export default VictimCard
