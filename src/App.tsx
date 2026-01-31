
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

export default App;
