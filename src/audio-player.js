// @flow
import React, { Component } from 'react'

export default class AudioPlayer extends Component {
  props: {
    src: string
  }

  render () {
    return (
      <audio controls src={this.props.src} />
    )
  }
}
