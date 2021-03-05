import React from 'react'
import PhoneMessage from '../../../../../../assets/devices/iphone/message/message'
import Neighbor from '../../../../../../../images/cardiact/prototype/neighbor.jpg'
import George from '../../../../../../../images/cardiact/prototype/george.jpg'
import Edward from '../../../../../../../images/cardiact/prototype/son.jpg'
import "./style.scss"

const CardiChat = ( props ) => {
  const messages = [
    {
      user: false,
      name: 'Maria',
      headshot: Neighbor,
      message: "I'm here. Need an AED!",
      typing: false
    },
    {
      user: false,
      name: 'Maria',
      headshot: George,
      message: "There's one close to me - I'll go get it.",
      typing: false
    },
    {
      user: true,
      name: 'Edward',
      headshot: Edward,
      message: "I am his son. I'm on my way. Let me know how I can help.",
      typing: false
    },
    {
      user: false,
      name: 'Edward',
      headshot: Neighbor,
      typing: true
    }
  ]

  return (
    
    <div class="cardiact__chat">
      <div class="cardiact__chat-content">
        <div class="message__time-stamp">
          <div>
            <span><strong>Today</strong></span><span><em>10:64 AM</em></span>
          </div>
        </div>

        <ul>
          { messages.map(message =>

            <li class={`message__${ message.user ? "sender":"recipient" }`}>
              <figure>
                <div class="img__headshot img__headshot--sm">
                  <img src={ message.headshot } alt={ message.name } />
                </div>

                <figcaption>
                  <div class="cardiact__message">

                    { message.message 
                      ? <em>{ message.message }</em> 
                      : null
                    }

                    { message.typing 
                      ? <div class="message__typing"><span></span></div> 
                      : null
                    }

                  </div>
                </figcaption>
              </figure>
            </li>

          )}
        </ul>
      </div>

      <PhoneMessage />
    </div>

  )
}

export default CardiChat
