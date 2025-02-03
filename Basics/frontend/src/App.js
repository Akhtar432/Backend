import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/jokes')
      .then((response) => {
        setJokes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
        setError("Failed to load jokes.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Basics Learn Backend</h1>

      {loading && <p>Loading jokes...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {jokes.length > 0 ? (
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      ) : (
        !loading && <p>No jokes available.</p>
      )}
    </div>
  );
}

export default App;