import {LiaAngleLeftSolid, LiaAngleRightSolid} from 'react-icons/lia'
import { useState, useRef } from 'react'
import Texts from './Texts'
import Index from './Index'

export default function Carrousel() {

  const carrousel = useRef()
  const reload = useRef()

  const [currentText, setCurrentText] = useState(Texts[0])
  const currentIndex = Texts.indexOf(currentText)
  const [fadeIn, setFadeIn] = useState(true);

  function bgRight(){
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    if (currentIndex >= 2) return
    setCurrentText(Texts[currentIndex + 1])
    setFadeIn(false); // Desativa o efeito "fade in" temporariamente
    setTimeout(() => {
      setFadeIn(true); // Ativa o efeito "fade in" após um pequeno atraso
    }, 100)
  }

  function bgLeft(){
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;     
    if (currentIndex <= 0) return
    setCurrentText(Texts[currentIndex - 1])
    setFadeIn(false); // Desativa o efeito "fade in" temporariamente
    setTimeout(() => {
      setFadeIn(true); // Ativa o efeito "fade in" após um pequeno atraso
    }, 100)
  }

  return (
    <section className="carrousel">
      <picture className="c-image" ref={carrousel}>
        <img src={`/images/desktop-image-hero-1.jpg`} alt="" />
        <img src={`/images/desktop-image-hero-2.jpg`} alt="" />
        <img src={`/images/desktop-image-hero-3.jpg`} alt="" />

      </picture>
      <div className='c-txt'>
      <div className="arrows-container" >
          <LiaAngleLeftSolid className='arrows' onClick={bgLeft}/>
          <LiaAngleRightSolid className='arrows' onClick={bgRight}/>
        </div>
        <h2 className={`${fadeIn ? "fade-in" : ""}`}>{currentText.tittle}</h2>
        <p className={`${fadeIn ? "fade-in" : ""}`}>{currentText.paragraph}</p>
        <button className='shop-button'>
          <span>Shop now</span>
          <img src="/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </section>
  )
}
