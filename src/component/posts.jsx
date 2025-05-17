import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/features/posts/postsSlice";

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, isLoading, isError, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error fetching posts: {error}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
