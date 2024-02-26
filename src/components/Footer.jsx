import { NavLink } from "react-router-dom"
import Imgfooter from '..//assets/Imagenes/footerimg.png'

const Footer = () => {
  
    return (
   <>
   <footer className='text-light bg-dark py-4 bg-dark'>
<nav className="row">
<NavLink to='/' className='col-10 col-md-3 d-felx aling-items-center justyfy-context-center'>
  <img src= {Imgfooter} alt="imagenfooter" className="mx-2" width='80' ></img> 
</NavLink>

<ul className="col-12 col-md-3 list-unstyled">
  <li className="text-center font-weigth-bold mb-2">Tipico</li>
  <li className="text-center">Directo a tu paladar</li>
 </ul>

  <ul className="col-12 col-md-3 list-unstyled">
  <li className="font-weigth-bold mb-2">Enlaces</li>
  
  <li>
    <NavLink to =' /Home' class='text-reset'>Home</NavLink>
  </li>
  <li>
    <NavLink to =' /Menu' class='text-reset'>Menu</NavLink>
  </li>
  </ul>

  <ul className="col-12 col-md-3 list-unstyled">
  <li className="text-center font-weigth-bold mb-2">Siguenos</li>
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