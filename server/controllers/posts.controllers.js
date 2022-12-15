import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const createPosts = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { image } = req.files;

        const newPost = new Post({ title, description });
        await newPost.save();

        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const updatePosts = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndUpdate(id, req.body, { new: true });

        if (!post) return res.sendStatus(404);

        return res.status(201).json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const deletePosts = async (req, res) => {
    try {
        const { id } = req.params;
        const postRemoved = await Post.findByIdAndDelete(id);

        if (!postRemoved) return res.sendStatus(404);

        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const getPostDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        if (!post) return res.sendStatus(404);

        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};