import React from 'react';
import { TextField } from '@mui/material';

function SearchBar({ query, setQuery, onSearch }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search for images..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && onSearch()}
    />
  );
}

export default SearchBar;
