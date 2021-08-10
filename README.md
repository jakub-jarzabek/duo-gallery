# duo-gallery

> Gallery component that displays images as background as well as in main view window

[![NPM](https://img.shields.io/npm/v/duo-gallery.svg)](https://www.npmjs.com/package/duo-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save duo-gallery
```

## Usage

```jsx
import React, { Component } from 'react'

import DuoGallery from 'duo-gallery'
import 'duo-gallery/dist/index.css'

class Example extends Component {
const arr = [
  {
      id: 0,
      imgSrc: example_img_1,
    },
    {
      id: 1,
      imgSrc: example_img_2,
    },
    {
      id:2,
      imgSrc: example_img_3,
    },
]
  render() {
    return <DuoGallery imageArray={arr} />
  }
}
```

## License

MIT © [jakub-jarzabek](https://github.com/jakub-jarzabek)

## Design
Gallery Design By Magdalena Pierzchała (https://www.linkedin.com/in/magdalena-pierzchala/)
