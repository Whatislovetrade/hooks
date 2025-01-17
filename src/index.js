import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div>
        <Hookswitcher />
    </div>
  )
}

const Hookswitcher = () => {

  const [color, setColor] = useState('grey')
  const [fontSize, setFontSize] = useState(14)

  return (
    <div style={{
      padding: '10px',
      backgroundColor: color,
      fontSize: `${fontSize}px`,
    }}>
      Hellow World
      <button
        onClick={() => setColor('grey')}>
        Dark
      </button>
      <button
        onClick={() => setColor('white')}>
        Light
      </button>
      <button
        onClick={() => setFontSize((s) => s + 2)}>
        +
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

