import React, { useState } from 'react'
<<<<<<< HEAD
import styles from './table.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'
interface DataTable {
  id: number,
  description: string,
  amount: string,
  category: string
}
interface TableProps {
data:DataTable[]
  setData:(data: DataTable[])=> void
}


const Table = ({data,setData}: TableProps) => {
  const schema = z.object({
    description: z.string().min(3,{'message':'Description must be at least 3 characters long'}),
    amount:  z.coerce.number({invalid_type_error: 'Amount field is required'}).min(1,{'message':'Amount must be greater than 0'}  ),
    category: z.string().min(3),
  })
  type FormData = z.infer<typeof schema>
  const { register, handleSubmit, formState:{errors} } = useForm<FormData>({resolver:zodResolver(schema)});

  const [selectedValue, setSelectedValue] = useState('Groceries');
  const options = [
    { value: 'Groceries', label: 'Groceries' },
    { value: 'Utilities', label: 'Utilities' },
    { value: 'Entertainment', label: 'Entertainment' },
  ];
  const onSubmit = (dataTable: FieldValues) => {
    const newItem: DataTable ={
      id: data.length + 1,
      description: dataTable.description,
      amount: dataTable.amount,
      category: dataTable.category
    } 
   
  setData([...data,newItem])
  }
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  }
  return (
    <form className={styles.formTable} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formItem}>
        <label htmlFor="Description" className={styles.label}>Description</label>
        <input  {...register("description", {})} id='Description' type="text" className={styles.input} />
      </div>
      {errors.description && <p className={styles.error}>{errors.description.message}</p> }
      <div className={styles.formItem}>
        <label htmlFor="Amount" className={styles.label}>Amount</label>
        <input {...register("amount")} id='Amount' type="number" className={styles.input} />
      </div>
       {errors.amount && <p className={styles.error}>{errors.amount.message}</p> }
      <div className={styles.formItem}>
        <label htmlFor="Category" className={styles.label}>Category</label>
        <select {...register("category")} value={selectedValue} onChange={handleChange} className={styles.selectInput}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.btn} type="submit">Submit</button>

=======
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
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
    </form>
  )
}

export default Table
