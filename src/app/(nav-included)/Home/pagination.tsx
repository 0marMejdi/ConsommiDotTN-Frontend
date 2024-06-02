"use client";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";

export default function PaginationComponent({ currentPage, setCurrentPage, totalPages }: any) {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // Prevent navigation to non-existent pages
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink isActive={i === currentPage} onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 ? (
            <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
          ) : (
            <PaginationPrevious className="disabled">Previous</PaginationPrevious>
          )}
        </PaginationItem>
        {renderPageNumbers()}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {totalPages > 5 && currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          {currentPage < totalPages ? (
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          ) : (
            <PaginationNext className="disabled">Next</PaginationNext>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
