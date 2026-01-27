
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
      <Table />
      <TableFilter />
      <TableResult data={data} />

    </div>
  );
}

export default App;
