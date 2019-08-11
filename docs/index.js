import React, { Component } from 'react'
import Embed from '../dist'
import styled, { css, createGlobalStyle } from 'styled-components'

const Styles = createGlobalStyle`
  body {
    background-color: #134e5f;
    color: white;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: black;
      color: #99b0bc;
    }

    h1,
    h2,
    input {
      color: #eee !important;
    }

    a:hover,
    a:focus {
      color: #eee !important;
    }
  }

  h1 {
    line-height: 0.875;
    font-weight: 900;
    font-size: 4rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.875rem;
    margin-bottom: -0.75rem;
  }

  p,
  nav {
    font-size: 1.375rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: inherit;
    transition: color 0.125s ease-in-out;
    text-decoration: none;
    font-weight: 800;

    &:focus,
    &:hover {
      color: #99b0bc;
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-color: initial;
      text-decoration-line: underline;
      text-decoration-style: wavy;
    }
  }
`

const Container = styled('article')`
  width: 100%;
  max-width: 48rem;
  margin: auto;
  padding: 3rem 1rem;
`

const Nav = styled('nav')`
  margin: 1rem 0 3rem;

  a {
    margin-right: 1.5rem;
  }
`

const module = css`
  padding: 1rem;
  background-color: #99b0bc;
  color: #134e5f;
  border-radius: 6px;
  margin: 2rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: #99b0bc;

    input[type='url'] {
      background-color: black;
    }
  }
`

const Label = styled('label')`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;

  span:first-child {
    width: 8rem;
    text-align: right;
    margin-right: 1rem;
  }

  span:last-child {
    margin-left: 1rem;
    opacity: 0.66;
    font-size: 0.875rem;
  }

  input {
    line-height: 1.5;
    height: 2rem;
    margin: 0;

    &[type='url'] {
      flex: 1 1 auto;
      border: 0;
      border-radius: 6px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      padding: 0.25rem 0.5rem;
      -webkit-appearance: none;
    }
  }
`

const Playground = styled('section')`
  ${module}
`

const Example = styled('pre')`
  ${module}
  font-size: 1rem;
  font-family: Menlo, monospace;
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
`

// This would use Hooks but x0 hasn’t updated to support them yet 😩
export default class extends Component {
  state = {
    url: 'https://song.link/i/1396292353',
    height: 150,
    dark: false
  }

  componentDidMount() {
    // Automatically demo dark mode if your device is running it
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setState({ dark: true })
    }
  }

  changeUrl = e => this.setState({ url: e.target.value })
  changeHeight = e => this.setState({ height: Number(e.target.value) })
  changeDark = e => this.setState({ dark: e.target.checked })

  render() {
    const { url, height, dark } = this.state

    return (
      <Container>
        <Styles />

        <h1>react-song-embed</h1>
        <p>
          {'React component for '}
          <a href="https://github.com/songlink/docs/blob/master/embed.md">
            Songlink embeds
          </a>
          {' 🎶'}
        </p>
        <p>
          Pass in a URL from any music service, get an all-platform music/video
          embed
        </p>
        <p>
          Made by <a href="https://lachlanjc.me">@lachlanjc</a>
        </p>

        <Nav>
          <a href="https://github.com/lachlanjc/react-song-embed">GitHub</a>
          <a href="https://npmjs.com/package/react-song-embed">npm</a>
        </Nav>

        <h2>Try it live</h2>
        <Playground>
          <Label>
            <span>Song URL</span>
            <input
              type="url"
              value={url}
              placeholder="https://song.link/…"
              onChange={this.changeUrl}
            />
          </Label>
          <Label>
            <span>Height</span>
            <input
              type="range"
              value={height}
              min={52}
              max={512}
              onChange={this.changeHeight}
            />
            <span>{height}px</span>
          </Label>
          <Label>
            <span>Dark theme</span>
            <input type="checkbox" checked={dark} onChange={this.changeDark} />
          </Label>
        </Playground>

        <Embed url={url} height={height} dark={dark} />

        <Example
          children={`import Embed from 'react-song-embed'

<Embed url="${url}" height={${height}}${dark ? ' dark' : ''} />`}
        />
      </Container>
    )
  }
}
