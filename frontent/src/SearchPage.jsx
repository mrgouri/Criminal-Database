import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    name: '',
    location: '',
    date: '',
    crimeType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={searchParams.name} onChange={handleChange} />
      </label>
      <label>
      specification:
        <input type="text" name=" specification" value={searchParams.specification} onChange={handleChange} />
      </label>
      <label>
      specification:
        <input type="text" name="patientLocation" value={searchParams.patientLocation} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
