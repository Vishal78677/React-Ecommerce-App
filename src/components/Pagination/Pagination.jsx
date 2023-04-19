import React from 'react';
import './pagination.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationComp = ({ totalPages, handlePagination, setPage, page }) => {
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='pagination1' style={{ display: 'flex' }}>
        {/* <button>◀</button>{' '}
        {[...Array(totalPages)].map((x, i) => {
          return (
            <button onClick={() => handlePagination(i + 1)} key={i}>
              {i + 1}
            </button>
          );
        })}
        <button>▶</button> */}

        <Stack spacing={2}>
          <Pagination
            onChange={handleChange}
            page={page}
            count={totalPages}
            color='secondary'
          />
        </Stack>
      </div>
    </>
  );
};

export default PaginationComp;
