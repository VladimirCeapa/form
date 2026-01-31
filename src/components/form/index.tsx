
import styles from './form.module.css';
import {useForm} from  "react-hook-form"
import type { FieldValues } from "react-hook-form";

const Form = () => {
 
  const { register,handleSubmit } = useForm(); // initialize the hook из react-hook-form
  

const onSubmit = (data:FieldValues) => {
  console.log(data);
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="name" >
        <label htmlFor="name" className="fomLabel">Name</label>
        <input
         {...register('name')} // регистрация инпута
           id="name" 
           type="text" 
           className="formInput" />
      </div>
      <div className="age">
        <label htmlFor="age" className="formLabel">Age</label>
        <input
         {...register('age')} 
          type="number"
           id="age" 
           className="formAge" />
      </div>
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
  );
};

export default Form;
