import '../Styles/StyleFooter.css'
import logo from '../Assets/img/logo.png'
import logoFirma from '../Assets/img/logoFirma.png'

const Footer = ()=>{
    const link = [
        {name:'Inicio', url:'#inicio'},
    ]
    return(
        <div className="logoFooterHero">
            <div className="logoFooterContainer">
        <a href={link[0].url} className="logoFooterContainer">
                <img src={logo} alt="Logo" className="logoFooter"/>
        </a>
            </div>
        <div>
            <b>
                <p className='datosFooter'> Teléfono - 11 7147-2115 <br/>
                    Email - fundacionatravezar@gmail.com<br/>
                    Merlo
                </p>
            </b>
        </div>
         <img src={logoFirma} alt="firma" className='logoFirma'/>
        </div>
        
    )
}   

export default Footer