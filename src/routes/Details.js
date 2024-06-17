import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchImageDetails } from '../services/apiService';
import { Container, Typography, Button, CircularProgress } from '@mui/material';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImageDetails(id).then((response) => {
      setImage(response.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Button variant="contained" onClick={() => navigate('/')}>Back to Home</Button>
      {image && (
        <>
          <Typography variant="h1">{image.description || 'No Description'}</Typography>
          <img src={image.urls.regular} alt={image.description} style={{ width: '100%', marginTop: '20px' }} />
          <Typography variant="body1" style={{ marginTop: '20px' }}>{image.alt_description || 'No Alt Description'}</Typography>
        </>
      )}
    </Container>
  );
}

export default Details;
