const express = require("express");
const router = express.Router();
const { CreateMenu } = require("../controllers/menuController");
const upload = require("../middleware/upload");

router.post("/menu/upload",upload.single('image'), CreateMenu);

module.exports = router;
 