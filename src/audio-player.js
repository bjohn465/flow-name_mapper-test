// @flow
import React, { Component } from 'react'
import sound from './bell.mp3'

export default class AudioPlayer extends Component {
  render () {
    return (
      <audio controls src={sound} />
    )
  }
}
