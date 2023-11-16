import React from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import "./css/Formulario.css";

const FormularioAdd = ({ dispatch }) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const actionAdd = {
      type: "add",
      payload: {
        id: uuid(),
        ...data,
      },
    };

    dispatch(actionAdd);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre: {""}
          <input
            {...register("nombre", { required: true })}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {errors.nombre?.type === "required" && (
            <p>El campo Nombre es requerido</p>
          )}
        </label>
        <label className="mx-1 d-grid gap-2">
          Número: {""}
          <input
            {...register("numero", { required: true })}
            type="text"
            className="form-control"
            autoComplete="off"
          />
          {errors.numero?.type === "required" && (
            <p>El campo Numero es requerido</p>
          )}
        </label>
        <label className="mx-1 d-grid gap-2">
          Sexo: {""}
          <select {...register("sexo")} className="form-control">
            <option value="">Seleccionar</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </label>
        <label className="mx-1 d-grid gap-2">
          Cumpleaños: {""}
          <input
            {...register("fechaNacimiento", { required: true })}
            type="date"
            className="form-control"
          />
          {errors.fechaNacimiento?.type === "required" && (
            <p>El campo Cumpleaños es requerido</p>
          )}
        </label>
        <label className="mx-1 d-grid gap-2">
          Imagen: {""}
          <input
            {...register("imagen")}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <hr />
        <h3>Verifica tus datos:</h3>
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Numero</th>
              <th>Sexo</th>
              <th>Fecha Nacimiento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{watch("nombre")}</td>
              <td>{watch("numero")}</td>
              <td>{watch("sexo")}</td>
              <td>{watch("fechaNacimiento")}</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <div className="mx-1 d-grid gap-2">
          <button type="submit" className="btn btn-info mt-2">
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormularioAdd;
