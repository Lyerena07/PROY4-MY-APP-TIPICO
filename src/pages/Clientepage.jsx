import { useState } from "react";
import {db} from "../firebase";
import{collection,addDoc, getDocs,doc,getDoc,updateDoc,deleteDoc} from "firebase/firestore";

const ClientePage = () => {
   // 1. configuramos los hooks 
    const [fechaReserva, setFechaReserva] = useState('');
    const [TiempoReserva, setTiempoReserva] = useState('');
    const [nInvitados, setnInvitados] = useState(1);
    const [nombre, setNombre] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [telefono, setTelefono] = useState('');


  //console.log(reservas);
  const enviarFormulario = async (event) => {
    event.preventDefault();
  //const crearReservacion = async ()=>{
    const reservacion = {
      nombre:nombre,
      correoElectronico:correoElectronico,
      telefono:telefono,
      fecha:fechaReserva,
      hora: TiempoReserva,
      Npersonas: nInvitados,  
  };

   const resultado = await crearReservacion(reservacion);
  console.log("resp:",resultado);
   if(resultado.success){
    alert("Reservacion creada exitosamente");
    setFechaReserva('');
    setNombre('');
    setCorreoElectronico('');
    setTiempoReserva('');
    setnInvitados('');
    setTelefono('');
  }else{
    alert(resultado.message);
  }
 
  };
  const crearReservacion = async(reservacion)=>{
    try {
      const tabla = collection(db,"Reservacion");
      await addDoc(tabla,reservacion);
      return {
       success: true,
       message: 'Reservación creada con éxito.'
      };
    } catch (error) {
      console.error('Error al crear la reservación:', error);
      return {
        success: false,
        message: 'Hubo un problema al crear la reservación. Inténtalo de nuevo más tarde'
       };
    }

  };

  const obtenerReservacion = async () => {
    const resp = await getDocs(collection(db, "Reservacion"));
    const reservas = resp.docs.map((reserva) => {
      return {
        id: reserva.id,
        ...reserva.data(),
      };
    });

    console.log(reservas);
};

/*const obtenerReserva = async () =>{
const documento = doc(db,"Reservacion", "id");
const resp = await getDoc(documento);
const reserva = {

id: resp.id,
...resp.data(),
}
console.log(reserva);
};*/
  return (
    
      <>
  <h1 className="text-center" style={{ color: 'var(--color3)' }}>Reservaciones</h1>
  <div>
     <p className="text-center" style={{ color: 'var(--color2)' }}>Coordinamos eventos masivos con 10 dias de anticipacion, contactarnos al interno.</p>
    </div>
            <hr />
    
            <div className="row">
              </div>  
            <div className="col-12 text-start">     
          </div> 
            <h4 style={{ color: 'var(--color3)'}}>Realiza tu Reservación Aquí</h4>
            <div className="col">

          <form className="mt-3" onSubmit={enviarFormulario}>
          <div className="mb-3"> <label htmlFor="nombre" className="form-label" style={{ color: 'var(--color2)' }}>Nombre</label>
            <input type="text" className="form-control"
             id="nombre"
             value={nombre}
             onChange={e => setNombre(e.target.value)}
             required
             pattern="[A-Za-z\s]{3,}" // Description del nombre
             title="El nombre debe tener minimo 5 letras. No aplican números y caracteres especiales."
            />
            <div className="mb-3">
                            <label htmlFor="correoElectronico" className="form-label" style={{ color: 'var(--color2)' }}>Correo Electrónico</label>
                            <input type="email"  className="form-control"
                            id="correoElectronico"
                            value={correoElectronico}
                            onChange={e => setCorreoElectronico(e.target.value)}
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{0,}$"
                            title="introduce una dirección de correo válida."      
                            />            
            </div>  
                     <div className="mb-3">
                            <label htmlFor="Telefono" className="form-label" style={{ color: 'var(--color2)' }}>Telefono</label>
                            <input type="tel" className="form-control"
                            id="telefono"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                            required
                            pattern="[0-9]{10}"
                            title="El número de teléfono debe tener 10 dígitos numéricos."
                            />
                      <div className="mb-3">
                            <label htmlFor="TiempoReserva" className="form-label" style={{ color: 'var(--color2)' }}>Hora</label>
                            <input  type="time"
                             className="form-control"
                             id="TiempoReserva"
                             value={TiempoReserva}
                             onChange={e => setTiempoReserva(e.target.value)}
                             min="10:00"
                             max="22:00"
                             required
                            
                            />
                            
                  </div>   

                  <div className="mb-3">
                            <label htmlFor="FechaReserva" className="form-label" style={{ color: 'var(--color2)' }}>Fecha</label>
                            <input type="date"  className="form-control"  id="FechaReserva"
                                value={fechaReserva}
                                onChange={e => setFechaReserva(e.target.value)}
                                min="10:00"
                                max="20:00"
                                required 
                               
                               />
                  </div> 

                  <div className="mb-3">
                            <label htmlFor="nInvitados" className="form-label" style={{ color: 'var(--color2)' }}>N° persona</label>
                            <input  type="number"
                             className="form-control"
                             id="nInvitados"
                             value={nInvitados}
                             onChange={e => setnInvitados(e.target.value)}
                             min="1"
                             required
                            
                            />
                  </div>
                </div>
             </div>

             <div className='btnform'>
              <button type="submit" className="btn botonReservacion" >Enviar Reservación</button>
              </div>
              <div className="row-col">
          <div className="text-start">
                 <h4 style={{ color: 'var(--color3)'}}>Tiempos de Reservación:</h4>
                </div>
                <div className="contenedorHorarios">
                    <p style={{ color: 'var(--color2)' }}>
                        - Lunes a Viernes: 08:00 AM - 10:00 PM
                    </p>
                    <p style={{ color: 'var(--color2)' }}>
                        - Sábados y Domingos: 12:00 PM - 11:00 PM
                    </p>
                </div>
            </div>
          </form>   
        </div>
      </>
  )
};

export default ClientePage;