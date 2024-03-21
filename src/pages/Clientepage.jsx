import { useState } from "react";


const ClientePage = () => {

   // 1. configuramos los hooks 
  const [DatosReserva, setDatosReserva] = useState('');
    const [TiempoReserva, setTiempoReserva] = useState('');
    const [nInvitados, setnInvitados] = useState(1);
    const [nombre, setNombre] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [telefono, setTelefono] = useState('');


// 2. eventos para el envío del formulario
const enviarFormulario = async (event) => {
  event.preventDefault();

  const reservacion = {
      nombre,
      correoElectronico,
      telefono,
      fecha: TiempoReserva,
      hora: DatosReserva,
      Npersonas: nInvitados,  
  };
  const resultado = await crearReservas(reservacion);
};

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

          <form className="mt-3" >
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
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                            <label htmlFor="DatosReserva" className="form-label" style={{ color: 'var(--color2)' }}>Fecha</label>
                            <input type="date"  className="form-control"  id="DatosReserva"
                                value={DatosReserva}
                                onChange={e => setDatosReserva(e.target.value)}
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
              <button type="submit" className="btn botonReservacion">Enviar Reservación</button>
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