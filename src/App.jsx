import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [joke, setJoke] = useState('');
  const [error, toggleError]  = useState(false);

  async function fetchJoke() {
      toggleError(false);

      try {
          const response = await axios.get("https://api.chucknorris.io/jokes/random?category=dev");
          setJoke(response.data.value);
      } catch (e) {
          console.error(e);
          toggleError(true);
      }
  }

  return (
    <>
      <div>
       <h1>Chuck Norris API</h1>
       <button type="button" onClick={fetchJoke}>Haal een grapje op!</button>
          {error && <p className="error-message">Er is iets misgegaan...</p>}
          <p>{joke}</p>
      </div>
    </>
  )
}

export default App
