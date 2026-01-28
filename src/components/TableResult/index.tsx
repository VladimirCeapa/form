import React from 'react'
import styles from './tableResult.module.css'
type DataItem = {
<<<<<<< HEAD
  id: number;
=======
  id: string;
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
  description: string;
  amount: string;
  category: string;
};
interface TableResultProps {
  data: DataItem[];
}

const index = ({ data }: TableResultProps) => {

<<<<<<< HEAD

=======
  
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
  return (
    <table className={styles.table}>
      <tr>
        <th >Description</th>
        <th>Amount</th>
        <th>Category</th>
<<<<<<< HEAD

=======
       
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
      </tr>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
<<<<<<< HEAD

          </tr>

        ))}
        <tr>
=======
            
          </tr>
         
        ))}
         <tr>
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
          <td>Total</td>
          <td></td>
          <td>$25</td>

<<<<<<< HEAD
        </tr>
=======
          </tr>
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
      </tbody>
    </table>
  )
}

export default index
