import React, {useState} from 'react';

function Table(props) {
    const {rows,setNewValues,deleteRow,addMode} = props;
    const [row,setRow] = useState({key:null,value:{}});
    const [editValue,setEditVaue] = useState({});
    const [eMode,seteMode] = useState(false)
    const onEdit = (e,data,i) => {
        setEditVaue(data);
        setRow({key:i,value:data})
        seteMode(true)

    }

    const onDelete = (e,data) => {
        deleteRow(data)
    }

    const onChange = (e,i,field) => {
        let val = row.value;
          let value = {...val,[field] :e.target.value};
           setRow({key:i,value});
          setEditVaue(row.value);
    }

    const onEnter = (e,i,field) => {
          setEditVaue(row.value);
        }

   const saveValue = (e) => {
            let rowsNew = rows;
            rowsNew.splice(row.key,1,row.value);
            setNewValues(rowsNew);
            setRow({key:null,value:{}})
            setEditVaue({});
            seteMode(false);
   }

   const cancel = (e,data,i) => {
    let rowsNew = rows;
    rowsNew.pop();
    setNewValues(rowsNew)
    setEditVaue({});
    setRow({key:null,value:{}})
    seteMode(false);
   }

  return (
    <>
       <table border="1" className="center">
           <tr>
               <th>Name</th>
               <th>Department</th>
               <th>Skills</th>
               <th>Action</th>
            </tr>
           <tbody>
                   {rows.map((r,i) =>
                    <>{(((!eMode &&   r.name!== ''))) ? <tr>
                        <td>{r.name === '' ?  <input placeholder="Name"  value={row.value.name}  onBlur={onEnter} onChange={(e) => onChange(e,i,'name')} /> : r.name}</td>
                   <td>{r.dept === '' ?  <input placeholder="Department" value={row.value.dept} onBlur={onEnter} onChange={(e) => onChange(e,i,'dept')} /> : r.dept}</td>
                   <td>{r.skills === '' ?  <input placeholder="Skills" value={row.value.skills} onBlur={onEnter} onChange={(e) => onChange(e,i,'skills')} /> : r.skills}</td>
                   {(r.name !== '') ?  (<td><a href="#" onClick={(e) => onEdit(e,r,i)}>Edit</a><br/>
                   <a href="#" onClick={( e) => onDelete(e,r)}>Delete</a></td>) : (    <td>
                    
                           <a href="#" onClick={() => saveValue(r,i)}>Save</a>
                           <br />
                             <a href="#" onClick={(e) => cancel(e,r,i)}>Cancel</a>
                           </td> 
                           )}
                   </tr> : <tr>
                       <td> <input value={row.value.name} placeholder="Name" onBlur={(e) =>onEnter(e,i,'name')} onChange={(e) => onChange(e,i,'name')} /></td>
                       <td> <input value={row.value.dept} placeholder="Department" onBlur={(e) =>onEnter(e,i,'dept')} onChange={(e) => onChange(e,i,'dept')} /></td>
                       <td> <input value={row.value.skills} placeholder="Skills" onBlur={(e) =>onEnter(e,i,'skills')} onChange={(e) => onChange(e,i,'skills')} /></td>
                       <td>
                           <a href="#" onClick={() => saveValue(r,i)}>Save</a>
                           <br />
                             <a href="#" onClick={(e) => cancel(e,r,i)}>Cancel</a>
                           </td> 
                       </tr>}
                   </>) 
                   }
               
           </tbody>
       </table>
    </>
  );
}

export default Table;