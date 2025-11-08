import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/perfumes')
      .then(res => {
        setPerfumes(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading perfumes...</p>;

  return (
    <main>
      <h1>Perfume Collection</h1>
      <ul>
        {perfumes.map(p => (<li key={p._id}>{p.name}</li>))}
      </ul>
    </main>
  );
}
