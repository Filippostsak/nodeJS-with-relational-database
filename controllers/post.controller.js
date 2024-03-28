const postService = require("../services/post.services");

exports.findAll = async (req, res) => {
  console.log("Find all Posts");
  try {
    const result = await postService.findAll();
    res.status(200).json({ data: result });
    console.log("Success in reading post");
  } catch (error) {
    console.error("Problem in reading post", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the posts." });
  }
};

exports.create = async (req, res) => {
  const data = req.body;
  console.log("Insert new post");
  try {
    const result = await postService.create(data);
    res.status(200).json({ data: result });
    console.log("Success in creating post");
  } catch (error) {
    res.status(404).json({ data: error });
    console.log("Problem in creating post");
  }
};
