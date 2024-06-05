import {conn} from '../config/db.js';
export const getAllBookings = async (req, res) => {
    try {
        const [bookings, fields] = await conn.query('SELECT * FROM bookings');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBookingById = async (req, res) => {
    try {
        const [booking, fields] = await conn.query('SELECT * FROM bookings WHERE idbookings = ?', [req.params.id]);
        if (booking.length === 0) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBooking = async (req, res) => {
    try {
        const { codigo_habitacion, idcliente, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida } = req.body;
        const fechaFormat = fecha_reservacion.slice(0, 19).replace('T', ' ');
        const [result] = await conn.query('INSERT INTO bookings (codigo_habitacion, idcliente, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida) VALUES (?, ?, ?, ?, ?, ?, ?)', [codigo_habitacion, idcliente, nombre_cliente, telefono_cliente, fechaFormat, fecha_entrada, fecha_salida]);
        res.status(201).json({ message: 'Booking created', bookingId: result.insertId });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

export const updateBooking = async (req, res) => {
    try {
        const {codigo_habitacion, telefono_cliente, fecha_entrada, fecha_salida, idbookings } = req.body;
        const [result] = await conn.query('UPDATE bookings SET codigo_habitacion=?, telefono_cliente = ?, fecha_entrada = ?, fecha_salida = ? WHERE idbookings = ?', [codigo_habitacion, telefono_cliente,  fecha_entrada, fecha_salida, idbookings]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json({ message: 'Booking updated', affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBookingById = async(req,res)=>{
    try {
        const {id} = req.params
        const [response] = await conn.query('DELETE FROM bookings WHERE idbookings=? ', [id])
        if(response.affectedRows===0){
            return res.statys(404).send({mesagge: 'No se ha podido eliminar la reservacion, confirma el id'})
        }
        res.status(200).send({messagge: 'Reserva eliminada correctamente'})
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
export const bookingCompleteByIdUser = async (req, res) => {
    try {
        const {id} = req.params
        const [bookings, fields] = await conn.query(`
            SELECT *
            FROM bookings
            INNER JOIN rooms  ON rooms.codigo_habitacion = bookings.codigo_habitacion
            INNER JOIN usuarios ON usuarios.idusuario = bookings.idcliente
            WHERE bookings.idcliente = ?`, [id]);
        if (bookings.length === 0) {
            return res.status(200).send([]);
        }
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
