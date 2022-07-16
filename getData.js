module.exports = async function (req, res, collection) {
  var today = new Date().toLocaleDateString("en-US");
  let result = await collection
    .find({ hall: req.query.hall, date: { $gte: today } })
    .toArray();
  console.log(result);
  return res.status(200).json(result);
};
