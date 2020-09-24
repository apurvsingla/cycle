import React, { Component } from 'react';
import Data from '../Assembler/AssemblerData';
import Draggable from 'react-draggable';
import './Create.scss';

class Create extends Component {
    render() {
        return (
            Data.src.map(d => (
                <div
                key={d.id} 
                >
                    <Draggable>
                    <img src={d.url} alt="part" width="200"/>
                    </Draggable>
                </div>
            ))
        );
    }
}

export default Create;
