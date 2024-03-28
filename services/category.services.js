const { name } = require("nod/lib/access_error");

const categoryEntity = require("../model/Category").CategoryEntity;
const dataSource = require("../connect").dataSource;

async function findAll() {
  const result = await dataSource
    .getRepository(categoryEntity)
    .createQueryBuilder()
    .select("category")
    .from(categoryEntity, "category")
    .getMany();

  return result;
}

async function findOne(id) {
  const result = await dataSource
    .getRepository(categoryEntity)
    .createQueryBuilder("category")
    .select("category")
    .where("category.id = :id", { id })
    .getOne();

  return result;
}

async function create(name) {
  try {
    const result = await dataSource
      .getRepository(categoryEntity)
      .createQueryBuilder()
      .insert()
      .into(categoryEntity)
      .values([{ name: name }])
      .execute();

    return result;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
}

async function update(data) {
  try {
    const result = await dataSource
      .getRepository(categoryEntity)
      .createQueryBuilder()
      .update(categoryEntity)
      .set({ name: data.name })
      .where("id = :id", { id: data.id })
      .execute();

    return result;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
}
async function deleteCategory(id) {
  try {
    const result = await dataSource
      .getRepository(categoryEntity)
      .createQueryBuilder()
      .delete()
      .from(categoryEntity)
      .where("id = :id", { id: id })
      .execute();

    return result;
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
}

module.exports = { findAll, findOne, update, deleteCategory, create };
