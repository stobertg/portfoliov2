import React from 'react'
import symbolDefs from '../../../../../../../images/cardiact/icons/symbol-defs.svg'
import "./style.scss"

const CardiCard = ( props ) => {
	return (

    <div className="cardiact__card">
      <div className="cardiact__card--content">

        { props.title 
          ? <div className="cardiact__card--header">
              <div className="cardiact__card--title"> 
                { props.heartIcon 
                  ? <span className="icon icon__heart">
                      <svg><use xlinkHref={`${ symbolDefs }#icon__heart`}></use></svg>
                    </span> 
                  : null
                }
                <span><strong>{ props.title }</strong></span>   
              </div>

              <span className="cardiact__card--info">{ props.timeStamp }</span>  
            </div> 

          : null
        }

        { props.children }
      </div>
    </div>

	)
}

export default CardiCard
