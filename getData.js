module.exports = async function (req, res, collection) {
  collection.find({ hall: req.query.hall }).toArray((err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      return res;
    }
  });
};
