import { useState } from 'react';
const ColorPicker = ({ onColorChange }) => {
    return (
        <input
            type="color"
            onChange={(e) => onColorChange(e.target.value)}
        />
    );
};

function App() {
    const [bg, setBg] = useState("#ffffff");
    return (
        <div style={{ backgroundColor: bg, height: '100vh' }}>
            <ColorPicker
                style={{ backgroundColor: 'purple'}}
                onColorChange={setBg}
            />
        </div>
    );
}
export default App;
