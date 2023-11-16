import React, { useReducer, useEffect, useState } from "react";
import TablaContactos from "./TablaContactos";
import FormularioAdd from "./FormularioAdd";
import { ContactosReducer } from "../reducers/ContactosReducer";

//Datos de prueba
const contactos = [
  {
    id: "C1",
    nombre: "Ana",
    numero: "4771029847",
  },
  {
    id: "C2",
    nombre: "Juan",
    numero: "4770012455",
  },
];

//Definimos la funcion init, donde vamos a poder hacer todo lo necesario.
const init = () => {
  //Definimos el localstorage
  const contactos = localStorage.getItem("contactos");
  //console.log(contactos);

  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  //Creamos el  useReducer pasandole el Reducer y un initial state.
  const [state, dispatch] = useReducer(ContactosReducer, [], init);

  //Agregamos un useEffect
  useEffect(() => {
    //Creamos el localstorage
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <button
            onClick={() => setFormView(!formView)}
            className="btn btn-success"
          >
            {!formView ? "Agregar Contacto" : "Cerrar Formulario"}
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          {formView && <FormularioAdd dispatch={dispatch} />}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <TablaContactos contactos={state} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default Contactos;
