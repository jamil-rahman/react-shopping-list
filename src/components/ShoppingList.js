import React, {useState} from 'react'
import ListFrom from './ListForm'
import Items from './Items'

export default function ShoppingList() {
    const [items, setItems] = useState([]);
    
    const addItems = item => {
        if (!item.text || /^\s*$/.test(item.text)){
            return;
        }
        const newItems = [item, ...items];
        setItems(newItems);

        console.log(...items);
    }
    const updateItem = (itemId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.next)){
            return;
        }
        setItems(prev => prev.map(item => (item.id === itemId ? newValue : item)));
    }
    const removeItem = id =>{
        const removeRow = [...items].filter(item => item.id !== id)
        setItems(removeRow);
    }

    return (
        <div className="list-form">
            <h1>Groccery Bud 2.0</h1>
            <ListFrom onSubmit={addItems} />
            <Items 
            items={items} 
            removeItem={removeItem}
            updateItem={updateItem}/>
        </div>
    )
}
