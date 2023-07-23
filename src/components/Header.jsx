import { useEffect, useState } from 'react'
import logo from '../Assets/img/logo.png'

const Header = ()=> {
    const [sticky, setSticky] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            console.log(window.innerWidth)
            if(window.innerWidth > 1440){
                setSticky(window.scrollY > 200)
            } else if(window.innerWidth > 1024){
                setSticky(window.scrollY > 50)
            } else {
                setSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })
    const links = [
        {id: 1, href: '#inicio'},
        {id: 2, href: '#nosotros'},
        {id: 3, href: '#tratamientos'},
        {id: 4, href: '#contacto'}
    ]
    return(
        <div className="headerHero" id='inicio'>   
            <div className="headerContainer">
                <img src={logo} alt="Logo" className="logoPrincipal" />
            </div>
            <ul className={`${sticky ? "sticky" : "listNav"}`}>
                <li><a href={links[0].href} className='listNavElement'>Inicio</a></li>
                <li><a href={links[1].href} className='listNavElement'>Nosotros</a></li>
                <li><a href={links[2].href} className='listNavElement'>Tratamientos</a></li>
                <li><a href={links[3].href} className='listNavElement'>Contacto</a></li>
            </ul>
            <hr />
        <div className='bienvenidosContainer'>
            <p className="bienvenidos">BIENVENIDOS</p>
        <div id="nosotros"></div>
        </div>
        </div>
    )


}

export default Header

