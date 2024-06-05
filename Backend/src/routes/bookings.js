import { Router } from 'express';
import { createBooking, deleteBookingById, getAllBookings, updateBooking, bookingCompleteByIdUser  } from '../controllers/bookingController.js';

const router = Router();

// Rutas para la gestión de reservas
router.get('/', getAllBookings);      // Obtener todas las reservas
router.get('/:id', bookingCompleteByIdUser);   // Obtener una reserva por ID
router.post('/', createBooking);      // Crear una nueva reserva
router.put('/:id', updateBooking);    // Actualizar una reserva existente
router.delete('/:id', deleteBookingById); // Eliminar una reserva

export default router;
