import React from 'react';
import { Pagination } from '@mui/material';

function CustomPagination({ page, setPage, totalPages }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      variant="outlined"
      shape="rounded"
      style={{ marginTop: '20px' }}
    />
  );
}

export default CustomPagination;
