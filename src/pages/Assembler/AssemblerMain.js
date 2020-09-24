import React, { Component } from 'react';
import Assemble from '../../components/Assembler/Assembler';
import MainAssembler from '../../components/mainAssembler/MainAssembler';
import CustomButton from '../../components/Button/Button';
import {withRouter} from 'react-router-dom';
import './AssemblerMain.scss';

class AssemblerMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            parts: null
        }
    }
    render() {
        return (
            <div className="main-assembley">
                
                <div className="left-portion">
                    <Assemble />
                </div>
                <div className="right-portion">
                    <MainAssembler />
                    <div onClick={() => this.props.history.push('create')}>
                        <CustomButton>
                            Continue
                        </CustomButton>
                    </div>
                </div>   
            </div>
        );
    }
}

export default withRouter(AssemblerMain);
