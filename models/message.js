const mongoose = require("mongoose");

const validateEmail = (e) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(e);
};

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: validateEmail,
    },
    message: { type: String, required: [true, "Message is required"] },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", messageSchema, "messages");

module.exports = MessageModel;
