import {conn} from '../config/db.js'; 

export const getAllRooms = async (req, res) => {
    try {
        const [rooms, fields] = await conn.query('SELECT * FROM rooms');
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRoomByCode = async (req, res) => {
    try {
        const [room, fields] = await conn.query('SELECT * FROM rooms WHERE codigo_habitacion = ?', [req.params.id]);
        if (room.length === 0) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json(room[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createRoom = async (req, res) => {
    try {
        const { numero, tipo, valor } = req.body;
        const [result] = await conn.query('INSERT INTO rooms (numero, tipo, valor) VALUES (?, ?, ?)', [numero, tipo, valor]);
        res.status(201).json({ message: 'Room created', roomId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateRoom = async (req, res) => {
    try {
        const { numero, tipo, valor } = req.body;
        const [result] = await conn.query('UPDATE rooms SET numero = ?, tipo = ?, valor = ? WHERE codigo_habitacion = ?', [numero, tipo, valor, req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json({ message: 'Room updated', affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteRoom = async (req, res) => {
    try {
        await conn.query('DELETE FROM bookings WHERE codigo_habitacion = ? ', [req.params.id])
        const [result] = await conn.query('DELETE FROM rooms WHERE codigo_habitacion = ?', [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json({ message: 'Room deleted', affectedRows: result.affectedRows });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
