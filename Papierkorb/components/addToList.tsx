import React, {useState} from "react";
import {IPerson as person} from "../../src/App"

interface IProbs {
    people : person[]
    setPeople: React.Dispatch<React.SetStateAction<person[]>>
}
const AddToList: React.FC<IProbs> = ({people,setPeople} ) => {

    const handleClick = () =>{
        setPeople([...people,{name:"neu", age:1}])
    }

    return <div> 
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
            Add to List
            </button>
         </div>
}

export default AddToList