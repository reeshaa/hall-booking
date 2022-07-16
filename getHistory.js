module.exports = async function (req, res, collection) {
  let result = await collection.find().toArray();
  console.log(result);
  return res.status(200).json(result);
};
