import express from 'express';
import { protectRoute } from '../middleware/protectRoutes.js';
const router = express.Router();

router.post("/" , protectRoute,createSession);
router.get("/Active" ,  protectRoute, getActiveSession);
router.get("/my-recent" ,  protectRoute, getMyRecentSession);
router.get("/:id" ,  protectRoute, getSessionById);
router.post("/:id/join" ,  protectRoute, joinSession);
router.post("/:id/end" ,  protectRoute, endSession);
export default router;
