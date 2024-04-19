import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import io from 'socket.io-client';


function App() {
  const socket = io.connect("http://localhost:4000")
  const[url,setUrl] = useState("");
  const[shortUrl,setShortUrl] = useState("");
  const handleSubmit=()=>{
    socket.emit("get_url",url)
  }
  return (
    <div className="outer">
      <form onSubmit={handleSubmit}>
      <div className="input-section">
        <input type="text" 
        onChange={(e)=>{
          setUrl(e.target.value
          )
        }}/>
        <button type='submit'>Submit</button>
      </div>
      </form>
      <div className="display-section">
        <div className="short-url">
          <h1>Short url:</h1>
          <div>{shortUrl}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
