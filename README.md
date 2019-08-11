# react-song-embed 🎶

> React component for [Songlink embeds](https://github.com/songlink/docs/blob/master/embed.md)

[![npm](https://img.shields.io/npm/v/react-song-embed.svg)](https://www.npmjs.com/package/react-song-embed)

[**View demo**](https://lachlanjc.me/react-song-embed)

## Install

```bash
npm install --save react-song-embed
```

## Usage

Pass in a URL from any music service, get an all-platform music/video embed.

- Required. Pass `url` the song URL from any major/supported music service, including a Songlink URL.
- Optional. Pass `height` (number in px, or string) to control height. At `230`px or higher, Songlink shows available video.
- Optional. Pass `dark` for a dark theme.

```jsx
import React from 'react'
import Embed from 'react-song-embed'

export default () => (
  <Embed url="https://song.link/i/1396292353" height={52} dark />
)
```

Looking for Apple Music embeds? Check out [react-music-embed](https://github.com/lachlanjc/react-music-embed).

## License

MIT © [lachlanjc](https://github.com/lachlanjc)
