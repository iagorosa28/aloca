function getHealth(req, res) {
  return res.status(200).json({
    status: "ok",
    service: "aloca-api",
  });
}

module.exports = { getHealth };
