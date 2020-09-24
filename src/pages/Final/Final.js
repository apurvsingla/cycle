import React,{useState} from 'react';
import { ChromePicker } from 'react-color'
import './Final.scss';

const Final = () => {
    const [colorHexCode, setColorHexCode] = useState('#000000');
    return (
        <div>
            <h1>
                You have completed your design, now lets color the cycle:
            </h1>
            <p>Select the main Frame Color:</p>
            <ChromePicker
        color={colorHexCode}
        onChange={e => setColorHexCode(e.hex)} />
        <br/>
        <b>Selected Hex Color: </b>{colorHexCode}
        </div>
    );
}

export default Final;
