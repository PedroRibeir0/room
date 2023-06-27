
export default function Menu() {

  function hideMenu(){
    document.querySelectorAll('.menu-container')[0].style.display = 'none'
  }

  function showMenu(){
    document.querySelectorAll('.menu-container')[0].style.display = 'flex'
  }

  return (
    <nav className="menu">
        <img className="logo" src="/images/logo.svg" alt="logo" />
        <img className="menu-icon" onClick={showMenu} src="/images/icon-hamburger.svg" alt="open-menu-icon" />
        <div className="menu-container">
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

