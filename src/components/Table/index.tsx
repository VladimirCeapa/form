import React, { useState } from 'react'
import styles  from './table.module.css'

const Table = () => {
    const [selectedValue, setSelectedValue] = useState('Groceries');
    const options = [
        { value: 'Groceries', label: 'Groceries' },
        { value: 'Utilities', label: 'Utilities' },
        { value: 'Entertainment', label: 'Entertainment' },
      ];
      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
      }
  return (
    <form className={styles.formTable}>
        <div className={styles.formItem}>
            <label htmlFor="Description" className={styles.label}>Description</label>
            <input id='Description' type="text" className={styles.input} />
            </div>   
                 <div className={styles.formItem}>
            <label htmlFor="Amount" className={styles.label}>Amount</label>
            <input id='Amount' type="number" className={styles.input} />
            </div> 
                 <div className={styles.formItem}>
            <label htmlFor="Category" className={styles.label}>Category</label>
            <select value={selectedValue} onChange={handleChange} className={styles.selectInput}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
            </div>   
            <button className={styles.btn} type="submit">Submit</button>
    </form>
  )
}

export default Table
