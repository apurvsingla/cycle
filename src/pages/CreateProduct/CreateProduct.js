import React from 'react';
import Draggable from 'react-draggable';
import Create from '../../components/create/Create';
import {withRouter} from 'react-router-dom';
import CustomButton from '../../components/Button/Button';
import './CreateProduct.scss';

const CreateProduct = ({history}) => {
    return (
        <div className="create">
            <div className="link" onClick={() => history.push('/final')}>
                <CustomButton>Finalize</CustomButton>
            </div>
            <Create />
            <Draggable>
                <img src="https://www.iconfinder.com/data/icons/gears-wheels-blades/512/bike_wheel-512.png" width="180" alt="stand"/>
            </Draggable>
        </div>
    );
}

export default withRouter(CreateProduct);
