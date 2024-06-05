import React, { useContext, useEffect, useState } from 'react';
import { HotelContext } from '../contexto/Hotel/HotelContext';
import CardBooking from '../componentes/CardBooking';
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext';

export const MisReservas = () => {
    const { bookings, cargarBookings } = useContext(HotelContext);
    const { usuario } = useContext(UsuarioContext);
    useEffect(() => {
        if (usuario && usuario.idusuario) {
            cargarBookings(usuario.idusuario);
        }
    }, [usuario, usuario.idusuario]);
    return (
        <div>
            {bookings.length ? (
                bookings.map((booking) => (
                    <CardBooking
                        key={booking.idbookings}
                        idbookings={booking.idbookings}
                        codigo_habitacion={booking.codigo_habitacion}
                        telefono_cliente={booking.telefono_cliente}
                        numero={booking.numero}
                        tipo={booking.tipo}
                        valor={booking.valor}
                        fecha_entrada={booking.fecha_entrada}
                        fecha_salida={booking.fecha_salida}
                        fecha_reservacion={booking.fecha_reservacion}
                    />
                ))
            ) : (
                <h3>No tienes reservas</h3>
            )}
        </div>
    );
};
