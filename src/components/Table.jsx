import React, {useState} from 'react';

function Table(props) {
    const {rows,setNewValues,deleteRow} = props;
    const [row,setRow] = useState({key:0,value:{}});
    const [editValue,setEditVaue] = useState({});
    const onEdit = (e,data) => {
        const eValue = {...data};
        setEditVaue(eValue);
    }

    const onDelete = (e,data) => {
        deleteRow(data)
    }

    const onChange = (e,i,field) => {
          let value = {...rows[i],[field] :e.target.value};
          setRow({key:i,value});
          setEditVaue({...rows[i],[field] :e.target.value});
    }

    const onEnter = (e) => {
            let rowsNew = rows;
            rowsNew.splice(row.key,1,row.value);
            setNewValues(rowsNew)
        }

//    const saveValue = (e) => {
//             let rowsNew = rows;
//             rowsNew.splice(row.key,1,row.value);
//             setNewValues(rowsNew)
//             setEditVaue({})
//    }

   const removeData = data => {
    // let rowsNew = rows;
    // rowsNew.splice(data,1);
    // setNewValues(rowsNew)
    setEditVaue({})
   }
console.log("Editvalue",editValue,row.value)
  return (
    <>
       <table border="1" className="center">
           <thead>
               <th>Name</th>
               <th>Department</th>
               <th>Skills</th>
               <th>Action</th>
            </thead>
           <tbody>
                   {rows.map((r,i) =>
                    <>{editValue.name !== r.name || editValue === {} ? <tr><td>{r.name === '' && row.value.name !== r.name ?  <input placeholder="Name" onBlur={onEnter} onKeyDown={onEnter} onChange={(e) => onChange(e,i,'name')} /> : r.name}</td>
                   <td>{r.dept === '' ?  <input placeholder="Department" onBlur={onEnter} onKeyDown={onEnter} onChange={(e) => onChange(e,i,'dept')} /> : r.dept}</td>
                   <td>{r.skills.length === 0 ?  <input placeholder="Skills" onBlur={onEnter} onKeyDown={onEnter} onChange={(e) => onChange(e,i,'skills')} /> : r.skills}</td>
                   {r.name !== '' && (<td><a href="#" onClick={(e) => onEdit(e,r)}>Edit</a><br/>
                   <a href="#" onClick={(e) => onDelete(e,r)}>Delete</a></td>)}
                   </tr> : <tr>
                       <td> <input value={editValue.name} placeholder="Name" onBlur={onEnter} onChange={(e) => onChange(e,i,'name')} /></td>
                       <td> <input value={editValue.dept} placeholder="Department" onBlur={onEnter} onChange={(e) => onChange(e,i,'dept')} /></td>
                       <td> <input value={editValue.skills} placeholder="Skills" onBlur={onEnter} onChange={(e) => onChange(e,i,'skills')} /></td>
                       <td>
                       {/* <a href="#" onClick={(e) => saveValue(e)}>Save</a> */}
                           <a href="#" onClick={() => removeData(r)}>Save</a></td>
                       </tr>}
                   </>) 
                   }
               
           </tbody>
       </table>
    </>
  );
}

export default Table;