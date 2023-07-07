'use client'
import '../../css/home/home.css'
import Menu from './Menu'
import Carrousel from './Carrousel'
import Static from './Static'
import { useRef } from 'react'
import Footer from './Footer'
import Shop from './Shop'

export default function Index() {

  const appContainer = useRef()

  function lowBright(){
    appContainer.current.childNodes.forEach(function callback(item, index){
      if (index == 0) return
      item.style.filter = 'brightness(30%)'
    })
  }
  function hightBright(){
    appContainer.current.childNodes.forEach(function callback(item, index){
      if (index == 0) return
      item.style.filter = 'brightness(100%)'
    })
  }
  return (
    <>
    <div 
      className='app'
      ref={appContainer}>
      <Menu
        lowBright={lowBright}
        hightBright={hightBright}
      />
      <Carrousel/>
      <Static/>
      <Shop/>
    </div>
     <Footer/>
    </>
  )
}

