import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=YOUR_UNSPLASH_ACCESS_KEY`
      );
      setImages(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Image Search</h1>
      <input
        type="text"
        placeholder="Enter search text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="imageGrid">
        {images.map((image) => (
          <div className="imageItem" key={image.id}>
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
