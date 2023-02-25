import React from "react";

const Pagination = (props) => {
  const nPages = props.nPages;
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className={nPages === 0 ? "hidden" : "flex justify-center mt-6"}>
      <ul className="flex flex-row justify-between w-1/4">
        <li>
          <a onClick={prevPage} href="#">
            Prev
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`${
              currentPage === pgNumber ? "text-decoration-line: underline" : ""
            }`}
          >
            <a onClick={() => setCurrentPage(pgNumber)} href="#">
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
