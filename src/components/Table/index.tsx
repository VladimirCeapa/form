import React, { useState } from 'react'
import styles from './table.module.css'
import data from '../data'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'
const Table = () => {

  const schema = z.object({
    Description: z.string().min(3),
    Amount: z.number().min(3),
    Category: z.string().min(3),
  })
  type FormData = z.infer<typeof schema>
  const { register, handleSubmit } = useForm<FormData>()

  const [selectedValue, setSelectedValue] = useState('Groceries');
  const options = [
    { value: 'Groceries', label: 'Groceries' },
    { value: 'Utilities', label: 'Utilities' },
    { value: 'Entertainment', label: 'Entertainment' },
  ];
  const onSubmit = (dataTable: FieldValues) => {
    [...data, { ...dataTable }]
  }
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  }
  return (
    <form className={styles.formTable} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formItem}>
        <label htmlFor="Description" className={styles.label}>Description</label>
        <input  {...register("Description", {})} id='Description' type="text" className={styles.input} />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="Amount" className={styles.label}>Amount</label>
        <input {...register("Amount", {})} id='Amount' type="number" className={styles.input} />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="Category" className={styles.label}>Category</label>
        <select {...register("Category", {})} value={selectedValue} onChange={handleChange} className={styles.selectInput}>
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
