import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function ImageCard({ image }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/details/${image.id}`)} style={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="140"
        image={image.urls.small}
        alt={image.description}
      />
      <CardContent>
        <Typography variant="h2">{image.description || 'No Description'}</Typography>
        <Typography variant="body1">{image.alt_description || 'No Alt Description'}</Typography>
      </CardContent>
    </Card>
  );
}

export default ImageCard;
