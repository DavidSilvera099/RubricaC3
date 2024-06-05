import React, { useContext, useState } from 'react';
import { EditBooking } from './EditBooking';
import { HotelContext } from '../contexto/Hotel/HotelContext';

const CardBooking = ({ idbookings, codigo_habitacion, telefono_cliente, numero, tipo, valor, fecha_reservacion, fecha_entrada, fecha_salida }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const { deleteBooking } = useContext(HotelContext)
    const handleEditClick = (e) => {
        e.stopPropagation(); // Previene la propagación del evento
        setOpenEdit(true);
    };

    return (
        <div>
            {!openEdit ? (
                <div>
                    <p>Id: {codigo_habitacion}</p>
                    <p>Numero: {numero}</p>
                    <p>Tipo: {tipo}</p>
                    <p>Valor: {valor}</p>
                    <p>Telefono_cliente: {telefono_cliente}</p>
                    <p>Fecha Reservacion: {fecha_reservacion}</p>
                    <p>Fecha Entrada: {fecha_entrada}</p>
                    <p>Fecha Salida: {fecha_salida}</p>
                    <img onClick={handleEditClick} width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/edit--v1.png" alt="edit--v1" />
                    <button onClick={()=>deleteBooking(idbookings)}>Delete</button>
                </div>
            ) : (
                <EditBooking idbookings={idbookings} codigo_habitacion={codigo_habitacion} telefono_cliente={telefono_cliente} fecha_entrada={fecha_entrada} fecha_salida={fecha_salida} setopenEdit={setOpenEdit} />
            )}
        </div>
    );
};

export default CardBooking;
