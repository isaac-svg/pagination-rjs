import React, { useEffect, useState } from "react";
import Page from "./components/Page";
import Pagination from "./components/Pagination";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [postPerPage, setPostPerpgae] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  fecting data
    const getPost = async () => {
      setLoading(true);
      const promisedPost = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const post = await promisedPost.json();
      setLoading(false);
      setPosts(post);
    };
    getPost();
  }, []);
  // the three lines of code below are are used
  const indexOflastPost = currentPage * postPerPage;
  //  indexOfLastPost is dependent on the value of the current page
  //  if the value of the current page changes the indexOfLastPage
  //  will also change say  indexOfLastPost =  2*10
  const indexOfFirstPost = indexOflastPost - postPerPage;
  //  indexOfFirstPost =  depents on  the indexOfLastPost only
  //  its value wil remain the same if indexOfLastPost remains the same.
  //    indexOfFirstPost  is used to get the index pf hte corect page
  const currentPost = posts.slice(indexOfFirstPost, indexOflastPost);
  const paginate = (currentNumber) => setCurrentPage(currentNumber);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        This is an amplimentation of Pagination
      </h1>
      <Page loading={loading} posts={currentPost} />
      <Pagination
        lengthOfPost={posts.length}
        postPerpage={postPerPage}
        paginate={paginate}
      />
      <p style={{ textAlign: "center" }}>
        you can impliment it in your project
      </p>
    </div>
  );
};

export default App;
