const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }  // Keep this if you want createdAt/updatedAt fields
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
