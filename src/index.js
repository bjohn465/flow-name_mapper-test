// @flow
import React from 'react'
import { render } from 'react-dom'
import AudioPlayer from './audio-player'
import sound from './bell.mp3'

const root = document.createElement('div')
document.body && document.body.appendChild(root)

render(<AudioPlayer src={sound} />, root)
