import React from 'react'
import styles from './tableResult.module.css'
type DataItem = {
  id: number;
  description: string;
  amount: string;
  category: string;
};
interface TableResultProps {
  data: DataItem[];
 
}

const index = ({ data }: TableResultProps) => {

  return (
    <table className={styles.table}>
      <tr>
        <th >Description</th>
        <th>Amount</th>
        <th>Category</th>
      </tr>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>

          </tr>

        ))}
        <tr>
          <td>Total</td>
          <td></td>
          <td>$25</td>

        </tr>
      </tbody>
    </table>
  )
}

export default index
