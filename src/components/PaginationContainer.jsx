import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  // Destructure the 'meta' object from the loader data.
  const { meta } = useLoaderData();
  // Extract pageCount and current page number from the meta.pagination object.
  const { pageCount, page } = meta.pagination;

  // Create an array of page numbers from 1 to pageCount.
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  // Get the current URL search parameters and pathname using useLocation hook.
  const { search, pathname } = useLocation();
  // Initialize navigate function to programmatically change the URL.
  const navigate = useNavigate();

  // Function to handle page change by updating the URL with the new page number.
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  // If there's only one page, don't render the pagination component.
  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        {/* Button to navigate to the previous page */}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {/* Render a button for each page number */}
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        {/* Button to navigate to the next page */}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
