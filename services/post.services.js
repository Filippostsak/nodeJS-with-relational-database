const postEntity = require("../model/Post").PostEntity;
const dataSource = require("../connect").dataSource;

async function findAll() {
  const result = await dataSource
    .getRepository(postEntity)
    .createQueryBuilder("post")
    .leftJoinAndSelect("post.categories", "category")
    .getMany();
  return result;
}

async function create(data) {
  console.log(data);
  const result = await dataSource
    .getRepository(postEntity)
    .save(data)
    .then(() => console.log("Post has been saved"))
    .catch((error) => console.log("Problem in saving post", error));

  return result;
}

module.exports = { create, findAll };
