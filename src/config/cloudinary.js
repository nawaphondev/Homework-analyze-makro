const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dvyuxujsv",
  api_key: "834745323243619",
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;
