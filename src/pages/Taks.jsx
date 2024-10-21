import img from "../img/logo.png";
import { useForm } from "react-hook-form";
import { useTaks } from "../context/Taks";
import Icon from "../Icons/Icons";
function Taks() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { registerTaks, taks,Destroy } = useTaks();

  const onSubmit = handleSubmit((data) => {
    registerTaks(data);
    reset({ title: "", description: "" });
  });
  const handleDelete = (data) =>{
    Destroy(data);
  }
  return (
    <div className="row">
      <div className="content-form">
        <div className="img-perfil">
          <img src={img} alt="" />
        </div>
        <div className="content-inf">
          <h1>Edgar Santiago</h1>
          <p>Developer Frontend</p>
        </div>
        <div className="content-input-form">
          <h1>Notas</h1>
          <form onSubmit={onSubmit}>
            <div className="group-input">
              <label>Titulo</label>
              <input type="text" {...register("title", { required: true })} />
              {errors.name && <p className="error">Title es requerido</p>}
            </div>
            <div className="group-input">
              <label>Descripcion</label>
              <textarea
                name=""
                id=""
                {...register("description", { required: true })}
              ></textarea>
              {errors.name && <p className="error">Title es requerido</p>}
            </div>
            <div className="btn">
              <button type="submit">Guardar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="content-nota">
       <div className="title">
        <h1>Notas</h1>
       </div>
        {taks.map((tak, index) => (
          <div className="card-nota" key={index}>
            <div className="title-nota">
              <h3>{tak.title}</h3>
            </div>
            <div className="description-nota">
              <p>{tak.description}</p>
            </div>
            <div className="btn-delet">
              <button className="btn-elit" onClick={()=>handleDelete(index)}>
                <Icon name="trash"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Taks;
