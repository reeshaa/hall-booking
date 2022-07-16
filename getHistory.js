module.exports = async function (req, res, collection) {
  var today = new Date().toLocaleDateString("en-US");
  console.log(today);
  let result = await collection
    .find({ date: { $gte: today } })
    .sort({ date: 1, startTime: 1 })
    .toArray();
  console.log("data fetched");
  return res.status(200).json(result);
};
