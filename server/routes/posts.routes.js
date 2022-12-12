import { Router } from 'express';
import { createPosts, deletePosts, getPostDetail, getPosts, updatePosts } from '../controllers/posts.controllers.js';

const router = Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.put("/", updatePosts);
router.delete("/", deletePosts);

router.get("/:id", getPostDetail);

export default router;