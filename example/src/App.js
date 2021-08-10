import React from 'react'

import { DuoGallery } from 'duo-gallery'
import 'duo-gallery/dist/index.css'

import test1 from './assets/test1.jpg'
import test2 from './assets/test2.jpg'
import test3 from './assets/test3.jpg'
import test4 from './assets/test4.jpg'
import test5 from './assets/test5.jpg'
import test6 from './assets/test6.jpg'
const App = () => {
  const imageArray = [
    {
      id: 0,
      imgSrc: test1,
    },
    {
      id: 1,
      imgSrc: test2,
    },
    {
      id:2,
      imgSrc:test3,
    },
    {
      id:3,
      imgSrc:test4,
    },
    {
      id:4,
      imgSrc:test5,
    },
    {
      id:5,
      imgSrc:test6,
    }
  ]
  return <DuoGallery imageArray={imageArray}/>
}

export default App
