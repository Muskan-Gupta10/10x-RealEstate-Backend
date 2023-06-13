const mongoose = require("mongoose");
const CounterSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    required: true,
  },
});

const Counter = mongoose.model("Counter", CounterSchema);
const getSequenceNextValue = (seqName) => {
  return Counter.findByIdAndUpdate(
      { _id: seqName },
      { $inc: { seq: 1 } },
      { new: true, upsert: true } // `new: true` returns the updated document, `upsert: true` creates a new document if no documents match the filter
    )
    .then(counter => {
      if (counter) {
        return Promise.resolve(counter.seq);
      } else {
        return Promise.resolve(null);
      }
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

const insertCounter = (seqName) => {
  const newCounter = new Counter({ _id: seqName, seq: 100 });
  return newCounter
    .save()
    .then((data) => {
        return Promise.resolve(data.seq);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = {
  Counter,
  getSequenceNextValue,
  insertCounter,
};
