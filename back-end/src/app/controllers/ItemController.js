const Item = require('../models/Item');

//create an item
//[POST]: /api/item/
const createItem = async (req, res) => {
  try {
    const products = await Item.create(req.body);
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all items
//[GET]: /api/item/
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get an item
//[GET]: /api/item/:id
const getItem = async (req, res) => {
  try {
    const items = await Item.findById({ _id: req.params.id });
    if (!items) {
      res.status(404).json('Lỗi');
    } else {
      res.status(200).json(items);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete all items
//[DELETE]: /api/items
const deleteAllItems = async (req, res) => {
  try {
    const items = await Item.remove();
    res.status(200).json('All item are deleted');
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createItem,
  getItems,
  deleteAllItems,
  getItem,
};
