'use client'
import '../../css/home/home.css'
import Menu from './Menu'
import Carrousel from './Carrousel'

export default function Index() {
  return (
    <div className='app'>
      <Menu/>
      <Carrousel/>
    </div>
  )
}

