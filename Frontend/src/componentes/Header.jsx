import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../contexto/Usuario/UsuarioContext";
import { HotelContext } from "../contexto/Hotel/HotelContext";
export const Header = () => {
    const { usuario, cerrarSesion } = useContext(UsuarioContext);
    const { setbookings, setrooms } = useContext(HotelContext);
    return (
        <header>
            <h1>Reservando ando</h1>
            <nav>
                <ul className="nav-header">
                    <li className="nav-item">
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/habitaciones"}>Habitaciones</Link>
                    </li>
                    {usuario ? (
                        <>
                            {!usuario.admin && (
                                <li className="nav-item">
                                    <Link to={"/misreservas"}>Mis reservas</Link>
                                </li>
                            )}
                            {usuario.admin ? (
                                <li className="nav-item">
                                    <Link to={"/crudadmin"}>Crud admin</Link>
                                </li>
                            ) : (
                                ""
                            )}
                            {
                                <>
                                    
                                    <li className="bnt-secundario"
                                        onClick={() => {
                                            cerrarSesion();
                                            setbookings([]);
                                        }}
                                    >
                                        Cerrar Sesion
                                    </li>
                                </>
                            }
                        </>
                    ) : (
                        <>
                            <li className="bnt-principal">
                                <Link to={"/login"}>Ingresar</Link>
                            </li>
                            <li className="bnt-secundario">
                                <Link to={"/register"}>Registrarse</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};
