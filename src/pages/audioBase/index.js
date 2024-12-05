import React from 'react'
import AudioEqualizer from './audioEqualizer'
import MusicPlayer from './musicPlayer'
import { Outlet } from 'react-router-dom'

const AudioPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AudioPage