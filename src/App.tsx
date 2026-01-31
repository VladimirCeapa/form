<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c89150b9bf66032a4da8e3f6f1c85232fd3c15be

import "./App.css";
import Table from "./components/Table";
import TableFilter from "./components/TableFilter";
import TableResult from "./components/TableResult";
import data from './components/data'
import { useState } from "react";

interface DataTable {
  id: number,
  description: string,
  amount: string,
  category: string
}


function App() {
  const [dataInfo, setData] = useState<DataTable[]>(data)
  return (
    <div className="App">
      <Table data={dataInfo} setData={setData} />
      <TableFilter />
      <TableResult data={dataInfo} setData={setData}   />

    </div>
  );
}

<<<<<<< HEAD
=======
=======
import React from "react";
import "./App.css";

import Table from "./components/Table";
import TableFilter from "./components/TableFilter";
import TableResult from "./components/TableResult";


function App() {
  const data = [
    
    { id:"1",description: "Milk", amount: "$5", category: 'Groceries' },
    { id:"2",description: "connection", amount: "$8", category: 'Utilities' },
    { id:"3",description: "zoo", amount: "$12", category: 'Entertainment' },
  ];
  return (
    <div className="App">
      <Table />
      <TableFilter />
      <TableResult data={data} />
    
    </div>
  );
}

>>>>>>> 93a18e5032144f3c41f4e3e426c652f2891879b8
>>>>>>> c89150b9bf66032a4da8e3f6f1c85232fd3c15be
export default App;
