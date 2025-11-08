import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "../App.css";

export default function Home() {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("http://localhost:5000/api/perfumes")
      .then(res => {
        setPerfumes(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Could not load perfumes. Check if backend is running.");
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (perfume) => {
    addToCart(perfume);
  };

  return (
    <div className="container">
      <header className="hero">
        <h1 className="title">Perfume Collection</h1>
        <p className="subtitle">Discover and shop top fragrances</p>
      </header>
      
      {loading && <div className="info">Loading perfumes...</div>}
      {error && <div className="error">{error}</div>}
      
      {!loading && !error && (
        perfumes.length ? (
          <section className="grid">
            {perfumes.map(p => (
              <div className="card" key={p._id}>
                <div className="card-content">
                  {p.imageUrl && (
                    <div className="perfume-image">
                      <img src={p.imageUrl} alt={p.name} />
                    </div>
                  )}
                  <h2 className="perfume-name">{p.name}</h2>
                  <div className="perfume-brand">{p.brand || 'Premium Brand'}</div>
                  {p.description && <p className="perfume-description">{p.description}</p>}
                  <div className="perfume-price">₹{p.price?.toLocaleString() || 'N/A'}</div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(p)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="info">No perfumes in store.</div>
        )
      )}
      
      <footer className="footer">© 2025 Perfume Collection</footer>
    </div>
  );
}

