import React, {useState} from 'react'
import ListFrom from './ListForm'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Items = ({ items, removeItem, updateItem }) => {
    
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
  
    const submitUpdate = value => {
      updateItem(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <ListFrom edit={edit} onSubmit={submitUpdate} />;
    }
  
    return items.map((item,index) => (
        <div className='li-items-container' key={index} style={{backgroundColor: "white"}}>
          <div className="li-items-left" >
          {item.text}
          </div>
          <div className="li-items-right">
           <RiCloseCircleLine onClick={() => removeItem(item.id)}/>
            <TiEdit onClick={() => setEdit({ 
                id: item.id,
                value: item.text })}
                />
          </div>
        </div>
      
    ));
  };
  
  export default Items;