import { Router } from 'express';
import { createPosts, deletePosts, getPostDetail, getPosts, updatePosts } from '../controllers/posts.controllers.js';

const router = Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.put("/:id", updatePosts);
router.delete("/:id", deletePosts);

router.get("/:id", getPostDetail);

export default router;