import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './use-state';
import './index.css';


const MyContext = React.createContext()

const App2 = () => {
    return (
        <MyContext.Provider value={'Hellow'}>
            <Child />
        </MyContext.Provider>
    )
}

const Child = () => {

    const value = useContext(MyContext)
    return <p>{ value }</p>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <App2 />
    </React.StrictMode>
  );