import { useRef } from "react"

export default function Menu(props) {

  const menuContainer = useRef()

  function hideMenu(){
    menuContainer.current.style.display = 'none'
    props.hightBright()
  }

  function showMenu(){
    const bodyChildren  = document.querySelectorAll('.app')[0].childNodes
    menuContainer.current.style.display = 'flex'
    props.lowBright()
  }

  return (
    <nav className="menu">
        <span className="logo">room</span>
        <img className="menu-icon" onClick={showMenu} id="menu-h" src="/images/icon-hamburger.svg" alt="open-menu-icon" />
        <div className="menu-container" ref={menuContainer}>
            <img className="menu-icon" onClick={hideMenu} src="/images/icon-close.svg" alt="close-menu-icon" />  
            <ul>
                <li className="menu-opt">home</li>
                <li className="menu-opt">shop</li>
                <li className="menu-opt">about</li>
                <li className="menu-opt">contact</li>
            </ul>
        </div>
    </nav>
  )
}

