import React, { useContext, useState } from 'react';
import { EditBooking } from './EditBooking';
import { HotelContext } from '../contexto/Hotel/HotelContext';

const CardBooking = ({ idbookings, codigo_habitacion, telefono_cliente, numero, tipo, valor, fecha_reservacion, fecha_entrada, fecha_salida }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const { deleteBooking } = useContext(HotelContext)
    const handleEditClick = (e) => {
        e.stopPropagation(); 
        setOpenEdit(true);
    };
    return (
        <div>
            {!openEdit ? (
                <div className='card-content'>
                    <p><strong>Id: </strong>{codigo_habitacion}</p>
                    <p><strong>Numero: </strong>{numero}</p>
                    <p><strong>Tipo: </strong>{tipo}</p>
                    <p><strong>Valor: </strong>{valor}</p>
                    <p><strong>Telefono cliente: </strong>{telefono_cliente}</p>
                    <p><strong>Fecha Reservacion: </strong>{fecha_reservacion}</p>
                    <p><strong>Fecha Entrada: </strong>{fecha_entrada}</p>
                    <p><strong>Fecha Salida: </strong>{fecha_salida}</p>
                    <button className='bnt-principal btn-card' onClick={handleEditClick}>Editar</button>
                    <button className='bnt-secundario btn-card' onClick={()=>deleteBooking(idbookings)}>Eliminar</button>
                </div>
            ) : (
                <EditBooking idbookings={idbookings} codigo_habitacion={codigo_habitacion} telefono_cliente={telefono_cliente} fecha_entrada={fecha_entrada} fecha_salida={fecha_salida} setopenEdit={setOpenEdit} />
            )}
        </div>
    );
};

export default CardBooking;
