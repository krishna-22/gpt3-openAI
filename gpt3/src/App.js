import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Response from './components/Response';
function App() {
  const [state,setState] =useState([]);
  return (
      <div className='container'>
    <Header/>
    <Form state={state} setState={setState}/>
    <Response state={state}/>
    </div>

    
  );
}

export default App;
