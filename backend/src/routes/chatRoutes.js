import express from 'express';
import { getStreamToken } from '../controllers/chatController.js';

const router = express.router();

router.get("/token" , getStreamToken)
export default router;