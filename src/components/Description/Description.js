import React, { Component } from 'react';
import CustomButton from '../Button/Button';
import {withRouter} from 'react-router-dom';
import './Description.scss';
class Description extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div className="description">
                <h1>Assembler</h1>
                <p>Create your own cycle with your design and creativity</p>
                <img src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2014/12/29/382951/97381/original_cycle_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1210868_o.jpg" alt="cycle" />
                <div className="button" onClick={() => console.log(this.props.history.push('/edit'))}>
                    <CustomButton>Continue</CustomButton>
                </div>
            </div>
        );
    }
}

export default withRouter(Description);
