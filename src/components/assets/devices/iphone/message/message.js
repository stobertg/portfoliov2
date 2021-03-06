
import React from 'react'
import IconCamera from '../../../icons/camera/camera'
import IconMic from '../../../icons/microphone/mic'
import './style.scss'

const PhoneMessage = () => {
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

export default PhoneMessage
