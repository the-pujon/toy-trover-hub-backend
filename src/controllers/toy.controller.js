const toySchema = require("../model/toy.schema");

/**
 * (Create)
 * for creating new toy
 */
const createToy = async (req, res) => {
  try {
    const {
      name,
      sellerName,
      sellerEmail,
      sellerImage,
      toyImage,
      category,
      subCategory,
      inStock,
    } = req.body;
    const newToy = new toySchema({
      name: name,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      sellerImage: sellerImage,
      toyImage: toyImage,
      category: category,
      subcategory: subCategory,
      inStock: inStock,
    });
    await newToy.save();
    res.status(200).json(newToy);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * (read)
 * for getting all toys
 */
const getToys = async (req, res) => {
  try {
    const toys = await toySchema.find();
    res.status(200).json(toys);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * (read)
 * for getting single toy
 */
const getSingleToy = async (req, res) => {
  try {
    const toySingle = await toySchema.findOne({ _id: req.params.id });
    res.status(200).json(toySingle);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * (Update)
 * for updating single toy
 */
const updateToy = async (req, res) => {
  try {
    const toyUpdate = await User.findOne({ _id: req.params.id });
    (toyUpdate.name = req?.body?.name),
      (toyUpdate.sellerName = req?.body?.sellerName),
      (toyUpdate.sellerEmail = req?.body?.sellerEmail),
      (toyUpdate.sellerImage = req?.body?.sellerImage),
      (toyUpdate.toyImage = req?.body?.toyImage),
      (toyUpdate.category = req?.body?.category),
      (toyUpdate.subcategory = req?.body?.subCategory),
      (toyUpdate.inStock = req?.body?.inStock),
      userUpdate.save();
    res.status(200).json(toyUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * (delete)
 * for delete single toy
 */
const deleteToy = async (req, res) => {
  try {
    const toyDelete = await toySchema.deleteOne({ _id: req.params.id });
    res.status(200).json(toyDelete);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getToys,
  getSingleToy,
  updateToy,
  deleteToy,
  createToy,
};
