import React, { useState, useEffect } from 'react';
import { fetchImages } from '../services/apiService';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import CustomPagination from '../components/Pagination';
import { Container, Typography } from '@mui/material';

function Home() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      fetchImages(query, page).then((response) => {
        setImages(response.data.results);
        setTotalPages(response.data.total_pages);
      });
    }
  }, [query, page]);

  const handleSearch = () => {
    setPage(1);
    fetchImages(query, 1).then((response) => {
      setImages(response.data.results);
      setTotalPages(response.data.total_pages);
    });
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>Image Search</Typography>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <ImageList images={images} />
      <CustomPagination page={page} setPage={setPage} totalPages={totalPages} />
    </Container>
  );
}

export default Home;
