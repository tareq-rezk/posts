import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { editPostAction } from "../../../redux/actions/posts-actions";
import NotFound from "../../not-found";
import "./edit-style.css";

export default function EditPost() {
  const navigate = useNavigate();
  const postEdit = useSelector((state) => state.posts.editPost);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    setPost(postEdit);
  }, [postEdit]);

  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };
  const submitEditPost = (event) => {
    event.preventDefault();
    // if()
    editPostAction(post);
    navigate("/posts");
  };
  const goBack = () => {
    navigate("/posts");
  };

  return (
    <>
      {post ? (
        <div className="info-container">
          <form onSubmit={submitEditPost}>
            <div className="input-group">
              <label htmlFor="title">post title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={post.title || ""}
                onChange={handleChange}
              />
              {!post.title && (
                <span className="error-text">you should fill title</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="body">Description</label>
              <textarea
                name="body"
                id="body"
                value={post.body || ""}
                onChange={handleChange}
              />
              {!post.body && (
                <span className="error-text">you should fill description</span>
              )}
            </div>
            <div className="btn-group">
              <button
                className="btn btn-submit"
                type="submit"
                disabled={!post.title || !post.body}
              >
                Confirm
              </button>
              <button type="button" className="btn btn-cancel" onClick={goBack}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
      <NotFound />
      )}
    </>
  );
}
