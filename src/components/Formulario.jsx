import { useForm } from "react-hook-form";

const Formulario = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h2>Formulario</h2>
      <form></form>
    </div>
  );
};

export default Formulario;
