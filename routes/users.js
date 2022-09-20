import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  createuser,
  deleteduser,
  getuser,
  updateuser,
  userid,
} from "../controllers/users.js";

const router = express.Router();

//GET METHOD
router.get("/", getuser);

// POST METHOD
router.post("/", createuser);

router.get("/:id", userid);

// DELETE METHOD
router.delete("/:id", deleteduser);

//UPDATE METHOD
router.patch("/:id", updateuser);

export default router;
