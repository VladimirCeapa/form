import React, { useState } from 'react'
import styles  from './TableFilter.module.css'
const TableFilter = () => {
     const [selectedValue, setSelectedValue] = useState('All categories');
        const options = [
            { value: 'All categories', label: 'All categories' },
            { value: 'Groceries', label: 'Groceries' },
            { value: 'Utilities', label: 'Utilities' },
            { value: 'Entertainment', label: 'Entertainment' },
          ];
          const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedValue(event.target.value);
          }
  return (
    <div className={styles.formTable}>
       <select value={selectedValue} onChange={handleChange} className={styles.input}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TableFilter

