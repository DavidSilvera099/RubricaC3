import express from 'express';
import roomRoutes from './routes/rooms.js';
import bookingRoutes from './routes/bookings.js';
import usuarioRoutes from './routes/usuario.js'
import cors from 'cors'
import cookies from 'cookie-parser'
import config from './config/config.js';
const app = express();
app.use(express.json());
app.use(cors({
    origin: config.LINKFRONTEND,
    credentials:true
}))
app.use(cookies())
// Agrega una ruta base para manejar la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al API de reserva de habitaciones del hotel!');
});
app.use('/usuarios', usuarioRoutes)
app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
