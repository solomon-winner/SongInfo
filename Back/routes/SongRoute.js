import express from 'express';
import { saveSong, getAll, updateSong, deleteSong } from '../controller/songControl.js';

const router = express.Router();

router.post("/",saveSong);
router.get("/",getAll);
router.put("/:id",updateSong);
router.delete("/:id",deleteSong);

export default router;