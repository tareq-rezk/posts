import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPostsAction } from "../../../redux/actions/posts-actions";
import PostCard from "../post-card";
import "./posts-style.css";

const Posts = () => {
  useEffect(() => {
    (async () => await getAllPostsAction())();
  }, []);

  const { posts, loading, error } = useSelector((state) => state.posts);

  const [currentPosts, setCurrentPosts] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setCurrentPosts(posts);
  }, [posts]);

  const handleSearch = (event) => {
    let searchTerm = event.target.value.toLowerCase();
    setSearchValue(searchTerm);
    setCurrentPosts(
      posts.filter((value) => {
        return (
          value.title.toLowerCase().match(new RegExp(searchTerm, "g")) ||
          value.body.toLowerCase().match(new RegExp(searchTerm, "g"))
        );
      })
    );
  };
  return (
    <>
      {error ? <p className="center-Container">An error ocurred</p> : null}
      {loading ? <p className="center-Container">Loading...</p> : null}
      {currentPosts && (
        <div className="table-responsive">
          <div className="table-head">
            <h1 className="text-primary mn-3">Posts List</h1>
            <input
              className="input-search"
              type="text"
              value={searchValue}
              onChange={handleSearch}
              placeholder="Search in posts ..."
            />
          </div>
          {currentPosts.length ? (
            <table className="table responsive-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="table__title-body">Description</th>
                  <th className="table__title-action">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts?.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="center-Container">No Posts Founded</div>
          )}
        </div>
      )}
    </>
  );
};
export default Posts;
