import { NavLink } from "react-router-dom"
import Imgfooter from '..//assets/Imagenes/footerimg.png'
import "../css/footerCompoStyles.css"

const Footer = () => {
    
    return (
   <>
   <footer className='text-dark bg-dark py-4 bg-body-tertiary'>
<nav className="row">
<NavLink to='/' className='col-10 col-md-3 d-felx aling-items-center justyfy-context-center'>
  <img src= {Imgfooter} alt="imagenfooter" className="mx-2" width='70' ></img> 
</NavLink>

<ul className="col-12 col-md-3 list-unstyled">
  
  <li className="text-center"> !Tipico¡ Directo a tu paladar</li>
 </ul>

  <ul className="col-12 col-md-3 list-unstyled">
  <li className="text-center font-black-bold mb-2">Siguenos</li>
  <li className= "d-flex justify-content-between"> 
  <i className="bi bi-whatsapp"></i>
  <i className="bi bi-instagram"></i>
  <i className="bi bi-twitter"></i>
  <i className="bi bi-youtube"></i>
  </li>
  </ul>
  
</nav>
   </footer>
   </>
    
    )
    
  };
  
  export default Footer;