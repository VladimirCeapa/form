import React from "react";
import styles from './form.module.css';

const Form = () => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const ageRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit=(event: React.FormEvent) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const age = ageRef.current?.value;
    console.log("Name:", name, "Age:", age);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="name" >
        <label htmlFor="name" className="fomLabel">Name</label>
        <input ref={nameRef}id="name" type="text" className="formInput" />
      </div>
      <div className="age">
        <label htmlFor="age" className="formLabel">Age</label>
        <input ref={ageRef} type="number" id="age" className="formAge" />
      </div>
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
  );
};

export default Form;
