import AppRouter from "./router/AppRouter";

import  {useState} from 'react'

// importando los modulos de firebase
import  appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from '../node_modules/firebase/auth'
const auth = getAuth (appFirebase)

import  {useState} from 'react'

const AppUsuario =() =>{

  const [usuario,setUsuario] = useState(null)
  onAuthStateChanged (auth,(usuarioFirebase)=>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
      else{
        setUsuario(null)
      }
    
  })

  return(
    <div>
      {usuario ? <Cliente correoUsuario = {usuario.email} /> :<Login/>}
    </div>
    )
    
};


const App = () => {
  return (
    <>
    <AppRouter/>
    </>
   
  );
};

export default App;