import React from 'react'
import MobileAudioReceiver from './mobileAudioReciver'
import MobileAudioSender from './mobileAudioSender'

const Chatting = () => {
  return (
    <div>
      <MobileAudioReceiver/>
      <MobileAudioSender/>
    </div>
  )
}

export default Chatting