import React from "react";

const ListItem = (props) =>{

   

    return(
        <>
            <div className="ListItem">
                <button className="cross" onClick={()=>{
                    props.onCross(props.id)
                }}
                >X</button>
                <li>{props.item}</li>
            </div>
        </>
    );
}

export default ListItem;