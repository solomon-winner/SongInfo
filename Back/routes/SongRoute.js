import express from 'express';
import { saveSong, getAll, getStat, updateSong, deleteSong } from '../controller/songControl.js';

const router = express.Router();

router.post("/",saveSong);
router.get("/",getAll);
router.put("/:id",updateSong);
router.delete("/:id",deleteSong);
router.get("/",getStat);

export default router;