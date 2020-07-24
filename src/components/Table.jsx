import React, {useState} from 'react';

function Table(props) {
    const {rows,setNewValues,deleteRow,addMode} = props;
    const [row,setRow] = useState({key:null,value:{}});
    const [eMode,seteMode] = useState(false);

    const onEdit = (e,data,i) => {
        seteMode(true);
        setRow({key:i,value:data});  
    }

    const onDelete = (e,data) => {
        deleteRow(data)
    }

    const onChange = (e,i,field) => {
        let val = row.value;
          let value = {...val,[field] :e.target.value};
           setRow({key:i,value});
    }

   const saveValue = (e) => {
            let rowsNew = rows;
            rowsNew.splice(row.key,1,row.value);
            const {name,dept,skills} = row.value;
            if(name === '' || dept === '' || skills === '') {
              alert('Please add values to save');
              return;
            }
            setNewValues(rowsNew);
            setRow({key:null,value:{}})
            seteMode(false);
   }

   const cancel = () => {
    setRow({key:null,value:{}})
    seteMode(false);
   }

const inputElement = (placeHolder,i,field) => ( <input placeholder={placeHolder}  value={row['value'][field]} onChange={(e) => onChange(e,i,field)} />);
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
                    <>{(((!eMode || i !== row.key))) ? 
                    <tr>
                        <td>{r.name === '' ?  inputElement('Name',i,'name') : r.name}</td>
                        <td>{r.dept === '' ?  inputElement('Department',i,'dept') : r.dept}</td>
                        <td>{r.skills === '' ? inputElement('Skills',i,'skills')  : r.skills}</td>
                        {(r.name !== '') ?  (<td><a href="#" onClick={(e) => onEdit(e,r,i)}>Edit</a><br/>
                              <a href="#" onClick={( e) => onDelete(e,r)}>Delete</a></td>) : (    
                              
                              <td>
                    
                                     <a href="#" onClick={() => saveValue(r,i)}>Save</a>
                                        <br />
                                     <a href="#" onClick={(e) => cancel()}>Cancel</a>
                             </td> 
                           )}
                    </tr> : 
                    (<tr>
                       <td>{inputElement('Name',i,'name')}</td>
                       <td> {inputElement('Department',i,'dept')}</td>
                       <td>{inputElement('Skills',i,'skills')}</td>
                       <td>
                           <a href="#" onClick={() => saveValue(r,i)}>Save</a>
                           <br />
                             <a href="#" onClick={(e) => cancel()}>Cancel</a>
                           </td> 
                       </tr>)}
                   </>) 
                   }
               
           </tbody>
       </table>
    </>
  );
}

export default Table;