import { useState, useContext, createContext, useEffect } from "react";
import { createPostRequests, getPostRequests, getPostDetailRequests, updatePostRequests, deletePostRequests } from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
    const context = useContext(postContext);
    return context;
};

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        const res = await getPostRequests();
        setPosts(res.data);
    };

    const createPost = async (post) => {
        const res = await createPostRequests(post);
        setPosts([...posts, res.data]);
    };

    const deletePost = async (id) => {
        const res = await deletePostRequests(id);
        
        if (res.status === 204) {
            setPosts(posts.filter(post => post._id !== id));
        }
    };

    const getPostDetail = async (id) => {
        const res = await getPostDetailRequests(id);
        return res.data;
    };

    const updatePost = async (id, post) => {
        const res = await updatePostRequests(id, post);
        setPosts(posts.map(post => post._id === id ? res.data : post));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <postContext.Provider value={{
            posts,
            getPosts,
            createPost,
            deletePost,
            getPostDetail,
            updatePost
        }}>
            {children}
        </postContext.Provider>
    );
};