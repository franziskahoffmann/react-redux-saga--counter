import React ,{useState} from 'react';
import './App.css';
import { SagaCounter } from './SagaCounter';



export interface IPerson {
  name: string,
  age : number
}

function App() {
  return (
    <div className="App">
      <SagaCounter/>
    </div>
  );
}

export default App