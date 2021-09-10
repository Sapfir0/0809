import 'App.css';
import React, { useState } from 'react';

const simpleProps = [
    'center',
    'start',
    'end',
    'normal',
    'stretch',
    'left',
    'right',
    'space-around',
    'space-between',
    'space-evenly',
    'baseline',
    'first baseline',
    'last baseline',
    'safe center',
    'unsafe center',
    'safe right',
    'unsafe right',
    'safe end',
    'unsafe end',
    'safe flex-end',
    'unsafe flex-end',
];

const properties = ['justify-content', 'align-content', 'place-content'];

const mappedValues: { [name: string]: string[] } = {
    'justify-content': simpleProps,
    'align-content': simpleProps,
    'place-content': simpleProps,
};

const colors = ['blue', 'yellow', 'lime', 'purple', 'tomato', 'black', '#FF7518', '#2D572C'];

function App() {
    const [aligner, setAligner] = useState(properties[0]);
    const [typeOfAlign, setTypeOfAlign] = useState(mappedValues[aligner][0]);
    return (
        <>
            <h2>Select align:</h2>
            <select onChange={(e) => setAligner(e.target.value)}>
                {properties.map((p) => (
                    <option>{p}</option>
                ))}
            </select>

            <h2>Select type of align:</h2>
            <select onChange={(e) => setTypeOfAlign(e.target.value)}>
                {mappedValues[aligner].map((p) => (
                    <option>{p}</option>
                ))}
            </select>
            <div
                className="container"
                style={{
                    [aligner]: typeOfAlign,
                }}
            >
                {colors.map((color) => (
                    <div style={{ backgroundColor: color }}> </div>
                ))}
            </div>
        </>
    );
}

export default App;
