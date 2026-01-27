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

export default App;
