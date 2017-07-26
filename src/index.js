// @flow
import React from 'react'
import { render } from 'react-dom'
import AudioPlayer from './audio-player'

const root = document.createElement('div')
document.body && document.body.appendChild(root)

render(<AudioPlayer />, root)
