/* eslint-disable no-mixed-spaces-and-tabs */
import './App.css'
import React, { useState } from 'react';
import CodeEditor from './pages/editor';


function App() {
  const [code, setCode] = useState('');
  const handleCodeChange = (newCode : string) => {
    setCode(newCode);
  }
  return (
  <div>
    <h1>Web-based Code Editor</h1>
    <CodeEditor value={code} onChange={handleCodeChange} />
  </div>
)}

export default App;
