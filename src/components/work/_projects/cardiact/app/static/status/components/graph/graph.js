
import React from 'react'
import './style.scss'

const CardiGraph = () => {
	return (

    <div className="cardiact__hr--history">
      <div className="cardiact__hr--check">
        <ul>
          <li><span></span><span></span></li>
          <li><span></span></li>
          <li><span></span><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span><span></span><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span><span></span></li>
          <li><span></span></li>
          <li><span></span><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
        </ul>
      </div>

      <div className="cardiact__hr--timeline">
        <ul>
          <li><strong>12 am</strong></li>
          <li><strong>6 am</strong></li>
          <li><strong>12 pm</strong></li>
          <li><strong>6 pm</strong></li>
        </ul>
      </div>

      <div className="cardiact__hr--flux">
        <ul>
          <li><strong>100</strong></li>
          <li><strong>60</strong></li>
        </ul>
      </div>

      <div className="cardiact__hr--grid">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>  

	)
}

export default CardiGraph
