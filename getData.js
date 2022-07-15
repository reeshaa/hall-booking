module.exports = async function (req, res, collection) {
  let result= await collection.find({ hall: req.query.hall }).toArray();
  console.log(result);
  return res.status(200).json(result);
};
