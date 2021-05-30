import React, {useState, useEffect} from 'react'


export default function ListFrom(props) {
    const [input, setInput] = useState(props.edit? props.edit.value : '');

    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input 
        });
        setInput('');
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input 
                type="text" 
                placeholder="e.g. eggs" 
                value={input} 
                name="text" 
                onChange={handleChange}>  
                </input>
                <button onClick={handleSubmit}>Update</button>
            </>
            ):(
                <>
                    <input 
                    type="text" 
                    placeholder="e.g. eggs" 
                    value={input} 
                    name="text" 
                    onChange={handleChange}>  
                    </input>
                    <button onClick={handleSubmit}>Add Item</button>
                </>
            )}
            </form>
        </div>
    )
}
