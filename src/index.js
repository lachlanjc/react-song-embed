import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Frame = props => (
  <iframe
    width="100%"
    frameBorder={0}
    allowFullScreen
    sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
    {...props}
  />
)

export default class Embed extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dark: PropTypes.bool
  }

  static defaultProps = {
    url: 'https://song.link/i/1396292353',
    height: 150,
    dark: false
  }

  render() {
    const { url, height, dark, ...props } = this.props
    const lg = typeof height === 'number' && height > 230
    let src = 'https://embed.song.link/?url=' + encodeURIComponent(url)
    if (dark === true) src += '&theme=dark'

    return lg ? (
      <div style={{ maxWidth: '100%;' }}>
        <div
          style={{
            position: 'relative',
            paddingBottom: 'calc(56.25% + 52px)',
            height: 0
          }}
        >
          <Frame
            {...props}
            height={height}
            src={src}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      </div>
    ) : (
      <Frame {...props} height={height} src={src} />
    )
  }
}
