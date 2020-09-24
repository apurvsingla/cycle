import React, {useState} from 'react';
import Data from './AssemblerData';
import './Assembler.scss';
const Assembler = () => {
    const [select, setSelect] = useState([]);
    
    let toggleClass = (d) => {
        if(d.id in select){
            return;
        }else{ 
            setSelect([...select, d])
            console.log(select)
        } 
    }

    return (
        Data.src.map(d => (
            <div className={`image ${select ? "selected" : ""}`} 
            key={d.id} 
            onClick={() => 
            toggleClass(d)}
            >
                <img src={d.url} alt="part" width="200"/>
            </div>
        ))
    );
}

export default Assembler;
