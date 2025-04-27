import express from "express";
import { getSimilarTvs, getTrendingTv, getTvDetailes, getTvsByCategory, getTvTrailers } from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);

router.get("/:id/trailers", getTvTrailers);

router.get("/:id/detailes", getTvDetailes);

router.get("/:id/similar", getSimilarTvs);

router.get("/:category", getTvsByCategory);

export default router;