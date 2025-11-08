import { useState } from 'react';
import axios from 'axios';

export default function Perfume() {
  const [form, setForm] = useState({ name: '', description: '', price: '', imageUrl: '' });
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/perfumes', form, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setForm({ name: '', description: '', price: '', imageUrl: '' });
    alert('Perfume added!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Perfume Name" onChange={handleChange} required />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
      <input name="imageUrl" placeholder="Image URL" onChange={handleChange} />
      <button>Add Perfume</button>
    </form>
  );
}
