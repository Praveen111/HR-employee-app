import React,{useState} from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';

function App() {
  const [rows,setRows] = useState([{
    name:'Praveen',
    dept:'Development',
    skills:'C# ,Javascript'
  }]);
  const [keyword,setKeyword] = useState('')
  const onSearch = (e) => {
    const filteredRows = rows.filter(row => row.name === e.target.value || row.dept === e.target.value);
    if(filteredRows.length > 0) {
      setRows([...filteredRows]);
    } else {
      const rowsold = JSON.parse(localStorage.getItem('rows'));
      setRows(rowsold);
    }
  }
  const onAdd =(e) => {
    const values = rows;
    setRows([...values,{name:'',dept:'',skills:[]}]);
  }

  const newValues = (rows) =>{
    const values = rows;
    setRows([...values]);
    localStorage.setItem('rows',JSON.stringify(values));
  }

  const deleteRow = data => {
    const rowsNew = [...rows];
    rowsNew.splice(data,1);
    localStorage.setItem('rows',rowsNew);
    setRows([...rowsNew]);
   
  }

  console.log("Parent",rows);
  return (
    <div className="App">
    <h3>Welcome To Replicon HR System</h3>
       <Search onSearch={onSearch} />
       <br/>
       <br/>
       {rows.length > 0 ?
       <Table rows={rows} setRows={setRows} setNewValues={newValues} deleteRow={deleteRow} />
      : <>No Values in the table, please add new employees</>
      }
       <br />
       <a href="#" onClick={onAdd}>Add Employee</a>
    </div>
  );
}

export default App;