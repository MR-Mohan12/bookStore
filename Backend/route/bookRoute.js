import express from "express";
import {getBook} from "../controller/bookControler.js"

const router = express.Router();

router.get("/", getBook);

export default router;

