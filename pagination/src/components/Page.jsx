import React from "react";

const Page = ({ posts, loading }) => {
  if (loading) {
    return;
  }
  return (
    <div style={{ margin: "2rem" }}>
      {posts.map((post) => (
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            padding: "0rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            listStyle: "none",
            borderBottom: "2px solid whitesmoke",
          }}
        >
          <li key={post.id}>{post.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Page;
