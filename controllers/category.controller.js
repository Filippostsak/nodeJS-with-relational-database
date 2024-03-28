const categoryService = require("../services/category.services");

exports.findAll = async (req, res) => {
  console.log("Find all categories");
  try {
    const result = await categoryService.findAll();
    res.status(200).json({ data: result });
    console.log("Success in reading all categories");
  } catch (err) {
    console.error("Problem in reading all categories", err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching categories." });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  console.log("Find category:", id);
  try {
    const result = await categoryService.findOne(id);
    if (!result) {
      return res.status(404).json({ message: "Category not found." });
    }
    res.status(200).json({ data: result });
    console.log("Success in reading category");
  } catch (err) {
    console.error("Problem in reading category", err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the category." });
  }
};

exports.create = async (req, res) => {
  const name = req.body.name;
  console.log("Insert category name", name);

  if (!name) {
    return res.status(400).json({ message: "Category name is required." });
  }

  try {
    const result = await categoryService.create(name);
    res.status(201).json({ data: result });
    console.log("Success in inserting category");
  } catch (err) {
    console.error("Problem in inserting category", err);

    res
      .status(500)
      .json({ message: "An error occurred while creating the category." });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  console.log("Update category with id:", id);
  try {
    const result = await categoryService.update({ id, name });
    res.status(200).json({ data: result });
    console.log("Success in updating category");
  } catch (err) {
    console.error("Problem in updating category", err);
    res
      .status(500)
      .json({ message: "An error occurred while updating the category." });
  }
};

exports.deleteCategory = async (req, res) => {
  const id = req.params.id;
  console.log("Delete category with id:", id);
  try {
    await categoryService.deleteCategory(id);
    res.status(204).send();
    console.log("Success in deleting category");
  } catch (err) {
    console.error("Problem in deleting category", err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the category." });
  }
};
