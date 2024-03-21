import React, {useState} from 'react'
import "../css/LoginCompStyles.css"
import Imagen from '..//assets/Imagenes/imglogin.png'
import ImagenProfile from '..//assets/Imagenes/imgProfile1.png'

import appFirebase from '../firebase' 
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth (appFirebase)


const LoginPage = () => {

  const [registrando, setRegistrando] = useState (false)

const functAutenticacion = async (e) =>{
e.preventDefault();
const correo = e.target.email.value;
const contraseña = e.target.password.value;
//console.log(correo);

if (registrando){
  await createUserWithEmailAndPassword(auth, correo, contraseña)
}
else{
  await signInWithEmailAndPassword(auth, correo, contraseña)
}
};

   return (
    <>
    
    <div className="row"> 

    {/*columna mas pequeña*/}
  <div className="col-md-4">
    <div className="padre" >
      <div className="card card-body shadow-lg " >
      <img src= {ImagenProfile} alt="" className="estilo-profile"></img>
     <form onSubmit={functAutenticacion}>
<input type="text" placeholder='Ingresar Email' className='cajatexto' id='email' />
<input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password' />
<button className='btnform'>{registrando ? "Registrate": "Iniciar Sesion"}</button>
</form>
<h4 className='texto'> {registrando ?"Si ya tienes cuenta": "No tienes cuenta"} <button className='btnswicth' onClick={()=>setRegistrando(!registrando)}>{registrando ? "inicia sesion":"registrate"}</button></h4>
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