import React, { Fragment, useState } from 'react'

const Formulario = () => {

    //crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    });
    const actualizarState = e => (
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
        
     
    )
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    return (
        <Fragment>
            <h2>Crear Cita </h2>
            <form>
                <label>nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-with"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                />
                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-with"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-with"
                    onChange={actualizarState}

                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-with"
                    onChange={actualizarState}

                />
                <label>Sintomas</label>
                <textarea

                    name="sintomas"
                    className="u-full-with"
                    onChange={actualizarState}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-with button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;