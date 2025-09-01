export const notFoundHandler = (req, res) => {
  res.status(404).send({ error: "Not Found" });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: "Internal Server Error" });
};
