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
  
    return items.map((item) => (
        <div className='icons'>
          <RiCloseCircleLine onClick={() => removeItem(item.id)}/>
          <TiEdit onClick={() => setEdit({ 
                id: item.id,
                value: item.text })}
                />
        </div>
      
    ));
  };
  
  export default Items;