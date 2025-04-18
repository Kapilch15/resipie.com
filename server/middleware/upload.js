const multer = require("multer");
const path = require("path");
const fs = require("fs");

//Ensure the uploads folder
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
console.log("Stiorgage: --> ", storage);

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const isValid = allowedTypes.test(
      path.extname(file.originalname).toLocaleLowerCase()
    );
    isValid ? cb(null, true) : cb(new Error("Only Image Files are allowed"));
  },
});

module.exports = upload;
