const events = require("../data/data.js");
 
const getEvents = (req, res) => {
  res.json(events);
};
 
const getEventById = (req, res) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) {
    return res.status(404).json({ error: "Event no trobat" });
  }
  res.json(event);
};
 
module.exports = { getEvents, getEventById };