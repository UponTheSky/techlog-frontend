import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface PaginationProps {
  totalPagesCount: number;
  currentPage: number;
  handleSetCurrentPage: (pageNumber: number) => () => void;
}

export function CustomPagination({ 
  totalPagesCount, 
  currentPage,
  handleSetCurrentPage
}: PaginationProps) {
  return (
    <Pagination size="lg" className="col-md-3 mx-auto">
      <Pagination.Prev />
      {Array(totalPagesCount).fill(1).map((number, idx) => (
        <Pagination.Item 
          key={idx} 
          active={number + idx - 1 === currentPage} 
          onClick={handleSetCurrentPage(number + idx - 1)}
        >
          {number + idx}
        </Pagination.Item>
      ))}
      <Pagination.Next />
    </Pagination>
  );
}

