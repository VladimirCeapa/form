import React from 'react'
import styles from './tableResult.module.css'
type DataItem = {
<<<<<<< HEAD
  id: number;
=======
<<<<<<< HEAD
  id: number;
=======
  id: string;
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
>>>>>>> c89150b9bf66032a4da8e3f6f1c85232fd3c15be
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
<<<<<<< HEAD

=======
  
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
>>>>>>> c89150b9bf66032a4da8e3f6f1c85232fd3c15be
  return (
    <table className={styles.table}>
      <tr>
        <th >Description</th>
        <th>Amount</th>
        <th>Category</th>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
       
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
>>>>>>> c89150b9bf66032a4da8e3f6f1c85232fd3c15be
      </tr>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c89150b9bf66032a4da8e3f6f1c85232fd3c15be

          </tr>

        ))}
        <tr>
<<<<<<< HEAD
=======
=======
            
          </tr>
         
        ))}
         <tr>
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
>>>>>>> c89150b9bf66032a4da8e3f6f1c85232fd3c15be
          <td>Total</td>
          <td></td>
          <td>$25</td>

<<<<<<< HEAD
        </tr>
=======
<<<<<<< HEAD
        </tr>
=======
          </tr>
>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
>>>>>>> c89150b9bf66032a4da8e3f6f1c85232fd3c15be
      </tbody>
    </table>
  )
}

export default index
