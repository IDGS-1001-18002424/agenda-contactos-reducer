import React from "react";

const TablaContactos = ({ contactos = [], dispatch }) => {
  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

  function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const diffMeses = hoy.getMonth() - fechaNac.getMonth();
    if (
      diffMeses < 0 ||
      (diffMeses === 0 && hoy.getDate() < fechaNac.getDate())
    ) {
      return edad - 1;
    }
    return edad;
  }

  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Numero</th>
          <th>Sexo</th>
          <th>Fecha Nacimiento</th>
          <th>Edad</th>
          <th>Imagen</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contacto) => {
          const finalId = contacto.id.split("-");
          const edad = calcularEdad(contacto.fechaNacimiento);
          return (
            <tr key={contacto.id}>
              <td>{finalId[0]}</td>
              <td>{contacto.nombre}</td>
              <td>{contacto.numero}</td>
              <td>{contacto.sexo}</td>
              <td>{contacto.fechaNacimiento}</td>
              <td>{edad}</td>
              <td>
                {contacto.imagen && (
                  <img
                    src={contacto.imagen}
                    alt={`Imagen de ${contacto.nombre}`}
                    width="100"
                    height="100"
                  />
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(contacto.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaContactos;
