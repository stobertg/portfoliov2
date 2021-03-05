import React from 'react'
import styles from "./style.scss"

// Components needed

import IconCamera from '../../../icons/camera/camera'
import IconMic from '../../../icons/microphone/mic'

class PhoneMessage extends React.Component {
  render() {
    return (
      
      <div class="cardiact__chat-menu">
        <div class="icon">
          <IconCamera />
        </div>

        <div class="iphone__message-prompt">
          <div class="message__input">
            <input type="text" name="search" placeholder="Type message" autocomplete="off" />
            
            <div class="btn__icon-sm">
              <IconMic />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default PhoneMessage