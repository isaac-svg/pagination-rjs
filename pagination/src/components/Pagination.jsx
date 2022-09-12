import React from "react";

const pagination = ({ postPerpage, lengthOfPost, paginate }) => {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(lengthOfPost / postPerpage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          border: "2px solid whitesmoke",
          padding: "0rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {pageNumber.map((number) => (
          <li
            key={number}
            style={{
              listStyle: "none",
              border: "2px solid blue",
              padding: "1rem",
              borderRadius: "0.3rem",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="!#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default pagination;
