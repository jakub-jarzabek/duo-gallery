import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const DuoGallery = ({ imageArray }) => {
  const [counter, setCounter] = useState(0)
  const [currentImage, setCurrentImage] = useState(imageArray[0].imgSrc)
  const [imageWidth, setImageWidth] = useState()
  useEffect(() => {
    setImageWidth(document.querySelector(`[imagecounter="0"]`).offsetWidth)
    console.log(styles.__DuoGallery)
    console.log(currentImage)
    document
      .getElementById('BgImg')
      .classList.add(styles.__DuoGalleryBackgroundImgOut)
    document
      .getElementById('MainImage')
      .classList.add(styles.__DuoGalleryMainImageOut)
    setTimeout(() => {
      document
        .getElementById('BgImg')
        .classList.remove(styles.__DuoGalleryBackgroundImgOut)
      document
        .getElementById('MainImage')
        .classList.remove(styles.__DuoGalleryMainImageOut)
      setCurrentImage(imageArray[counter].imgSrc)
      document
        .querySelector(`[imagecounter="${counter}"]`)
        .classList.add(styles.__GalleryImgActive)
    }, 200)
  }, [counter])
  // Image on Click
  const handleImageOnClick = (e) => {
    console.log('test')
    document
      .querySelector(`[imagecounter="${counter}"]`)
      .classList.remove(styles.__GalleryImgActive)
    setCounter(parseInt(e.target.attributes.imagecounter.nodeValue, 10))
  }
  const Images = imageArray.map((image) => (
    <img
      src={image.imgSrc}
      alt={image.alt}
      key={image.id}
      onClick={handleImageOnClick}
      imagecounter={image.id}
      className={styles.__GalleryImg}
    />
  ))
  // Increment and Decrement on Click
  const incrementOnClick = () => {
    document.getElementById('ImagesContainer').scrollLeft += imageWidth
  }
  const decrementOnClick = () => {
    document.getElementById('ImagesContainer').scrollLeft -= imageWidth
  }
  return (
    <div className={styles.__DuoGalleryWrapper}>
      <div
        className={styles.__DuoGalleryBackgroundImg}
        style={{ backgroundImage: `url(${currentImage})` }}
        id='BgImg'
      />
      <div className={styles.__DuoGallery} id='PhotographyDiv'>
        <div className={styles.__ImageDisplay}>
          <img
            src={currentImage}
            className={styles.__ImageDisplayImage}
            alt=''
            id='MainImage'
          />
        </div>
        <div className={styles.__ImagesContainerWrapper}>
          <button onClick={decrementOnClick} className={styles.__ControlBtn}>
            <i className={styles.__ArrowLeft} onClick={decrementOnClick}/>
          </button>
          <div className={styles.__ImagesContainer} id='ImagesContainer'>
            {Images}
          </div>
          <button onClick={incrementOnClick} className={styles.__ControlBtn}>
            <i className={styles.__ArrowRight} />
          </button>
        </div>
      </div>
    </div>
  )
}
