import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [search, setSearch] = useState('');
  const [breed, setBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  const applyFilters = () => {
    const lowerCaseSearch = search.toLowerCase();
    const filtered = cats.filter(
      (cat) =>
        (lowerCaseSearch === '' || cat.name.toLowerCase().includes(lowerCaseSearch)) &&
        (breed === '' || cat.breed === breed)
    );
    setFilteredCats(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [search, breed]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="filters-container flex justify-center items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by cat name..."
          value={search}
          onChange={handleSearchChange}
          className="py-2 px-4 border rounded w-1/3"
        />
        <select
          value={breed}
          onChange={handleBreedChange}
          className="py-2 px-4 border rounded w-1/3"
        >
          <option value="">All Breeds</option>
          {Array.from(new Set(availableCats.map((cat) => cat.breed))).map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      {/* Cats Display */}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.length === 0 ? (
          <p>No cats found matching your criteria.</p>
        ) : (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
