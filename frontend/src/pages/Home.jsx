import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Home() {
  const [perfumes, setPerfumes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/perfumes').then(res => setPerfumes(res.data));
  }, []);
  return (
    <div>
      <h1>Perfume Collection</h1>
      <div className="perfume-list">
        {perfumes.map(p => (
          <div key={p._id} className="perfume-card">
            <img src={p.imageUrl} alt={p.name} />
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
