import React, { useState } from "react";
import ListItem from './ListItem';

const ToDoList = ()=> {
    const [additem ,setadditem] = useState("");
    const [items, setitems] = useState([]);

    const addData = (data) =>{
        setitems((oldData) => {
            return [...oldData, additem]
        })
        setadditem('');
    };

    const inputData = (event) =>{
        const inputDataValue = event.target.value;
        setadditem(inputDataValue);
        // console.log(inputDataValue);
    };

    const deleteItems = (id) =>{
        setitems((oldData)=>{
            return oldData.filter((arrElement,index)=>{
                return index!==id;
            })
        });
    }
    return(
        <>
        <div className="mainContainer">
            <h1 className="heading">Todo List</h1>
            <input type="text" onChange={inputData} placeholder="Add an item" value={additem}/>
            <button onClick={addData} className="add">+</button>
            
            <ol>
                {
                    items.map((currvalue, index) => {
                        return <ListItem
                            key={index}
                            id={index}
                            item={currvalue}
                            onCross={deleteItems}
                        />
                    })
                }
            </ol>
        </div>
        </>
    );
} 

export default ToDoList;