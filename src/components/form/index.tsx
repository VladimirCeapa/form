import React, {  useState } from "react";
import styles from './form.module.css';

const Form = () => {
 
  const [person,setPerson]=useState({ name: "", age: '' });

  const handleSubmit=(event: React.FormEvent) => {
    event.preventDefault();
console.log(person);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="name" >
        <label htmlFor="name" className="fomLabel">Name</label>
        <input value={person.name} onChange={(event)=> setPerson({...person, name:event.currentTarget.value})} id="name" type="text" className="formInput" />
      </div>
      <div className="age">
        <label htmlFor="age" className="formLabel">Age</label>
        <input value={person.age} onChange={(event)=> setPerson({...person, age: event.currentTarget.value})} type="number" id="age" className="formAge" />
      </div>
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
  );
};

export default Form;
