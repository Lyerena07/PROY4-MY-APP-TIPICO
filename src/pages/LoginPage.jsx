import "../css/LoginCompStyles.css"
import Imagen from '..//assets/Imagenes/imglogin.png'
import ImagenProfile from '..//assets/Imagenes/imgProfile1.png'

import React from 'react'

const LoginPage = () => {

  

   return (
    <>
    
    <div className="row"> 

    {/*columna mas pequeña*/}
  <div className="col-md-4">
    <div className="padre" >
      <div className="card card-body shadow-lg " >
      <img src= {ImagenProfile} alt="" className="estilo-profile"></img>
     <form >
<input type="text" placeholder='Ingresar Email' className='cajatexto' id='email' />
<input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password' />
<button className='btnform'>iniciar seccion</button>
</form>

 </div>     
    </div>
      </div>
    

    {/*columna mas grande*/}
     <div className="col-md-8">
     <img src= {Imagen} alt="tamañoimg" class="tamaño-imagen"/>
    </div>
   </div>
  
    </>
  )
};

export default LoginPage;