import express from "express";
import { addCommentsToPost, getFeedPosts, getUserPosts, likePost, createPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:postId/addComment", addCommentsToPost);

/* POST */
router.post("/", verifyToken, createPost);

export default router;
