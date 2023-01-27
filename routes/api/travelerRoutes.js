const router = require("express").Router();
const { Traveler, Trip, Location } = require("./../../models");

// GET ALL travelers
router.get("/", async (req, res) => {
  try {
    const travelerData = await Traveler.findAll({
      include: [Location],
      through: [Trip],
    });
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Traveler
router.delete("/:id", async (req, res) => {
  try {
    const travelerData = await Traveler.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travelerData) {
      res.status(404).json({ message: "No traveler found with that id!" });
      return;
    }

    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
