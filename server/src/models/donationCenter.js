const mongoose = require("mongoose");

const donationCenterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: {
        state: {
          type: String,
        },
        city: {
          type: String,
        },
        woreda: {
          type: String,
        },
      },
    },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    location: {
      //GEO JSON Point
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
    },
    timeSlot: {
      type: "",
     
    },
    createdBy: {
      type: "",
      ref: "User",
    },
    updatedBy: {
      type: "type: mongoose.Schema.Types.ObjectId",
      ref: "User",
    },
    totalDonations: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


const DonationCenter = mongoose.model("DonationCenter", donationCenterSchema);

module.exports = DonationCenter;