const router = require("express").Router();
const { Traveler, Trip, Location } = require("./../../models");

// GET ALL travelers
router.get("/", async (req, res) => {
  try {
    const locationData = await Location.findAll({
      include: [Traveler],
      through: [Trip],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a Traveler
router.delete("/:id", async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
