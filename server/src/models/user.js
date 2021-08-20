const mongoose = require("mongoose");

/**
 * Schema for storing user
 *  * First Name - user first name
 *  * Last Name - user last name
 *  * Email - user email
 *  * Password - user password
 */
const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
      default: "default.png",
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
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    lastDonation: {
      type: String,
    },
    password: {
      type: String,
      select: false,
    },
    bloodType: {
      type: "",
     
    },
    roles: {
      type: "",
     
    },
    totalDonations: {
      type: Number,
      default: 0,
    },
    appointed: {
      type: Boolean,
      default: false,
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


const User = mongoose.model("User", schema);

module.exports = User;