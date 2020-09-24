import React from 'react';
import Draggable from 'react-draggable';
import Create from '../../components/create/Create';
import './CreateProduct.scss';

const CreateProduct = () => {
    return (
        <div className="create">
            <Create />
            <Draggable>
            <img src="https://www.iconfinder.com/data/icons/gears-wheels-blades/512/bike_wheel-512.png" width="200" alt="stand"/>
            </Draggable>
        </div>
    );
}

export default CreateProduct;
