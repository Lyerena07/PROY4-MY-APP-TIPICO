import { db } from "./db";
import { addDoc, collection, getDocs, getDoc, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore'



// Función para obtener todas las reservaciones
export const obtenerReservas = async () => {
    
        const reservasCollection = collection(db, 'reservas');
        const reservasSnapshot = await getDocs(reservasCollection);
        return reservasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(data.docs);
   
};


// Función para crear una nueva reservación
export const crearReservacion = async (nuevaReserva) => {

    try {
        const reservasCollection = collection(db, 'reservas');
        const q = query(reservasCollection, where("fecha", "==", nuevaReserva.fecha));

        const querySnapshot = await getDocs(q);
        const reservasMismaFecha = querySnapshot.docs.map(doc => doc.data());

        const reservasMismoHorario = reservasMismaFecha.filter(res => res.hora === nuevaReservacion.hora);

        if (reservasMismoHorario.length >= 5) {
            return {
                success: false,
                message: `Ya no hay mesas disponibles en el horario ${nuevaReserva.hora}. Por favor, elige otro horario.`
            };
        }

        await addDoc(reservasCollection, nuevaReserva);
        return {
            success: true,
            message: 'Reservación creada con éxito.'
        };
    } catch (error) {
        console.error('Error al crear la reservación:', error);
        return {
            success: false,
            message: 'Hubo un problema al crear la reservación. Inténtalo de nuevo más tarde.'
        };
    }
};

