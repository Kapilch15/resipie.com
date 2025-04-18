const menuItem = require("../models/menuItems");

exports.CreateMenu = async (req, res) => {
  try {
    const { itemName, price } = req.body;
   const image = req.file?.fileName;

    if (!itemName || !price || !image)
      return res
        .status(400)
        .json({ success: false, message: "All Fields are required" });

    const existMenu = await menuItem.findOne({ itemName });
    if (existMenu)
      return res.status(401).send({
        message: "Item is Already Available",
        success: false,
      });
    //Make New Entry into DB
    let menu = await new menuItem({
      itemName,
      price,
      image
    }).save();
    //Response
    res.status(200).send({
      success: true,
      message: "Menu Item is added successfully",
      data: menu,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
}; 
