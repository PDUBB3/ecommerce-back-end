const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [Product],
    });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    if (!tags) {
      res.status(404).json({ error: "failed to get category" });
    }
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new tag
});

router.put("/:id", (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Tag updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Tag deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
