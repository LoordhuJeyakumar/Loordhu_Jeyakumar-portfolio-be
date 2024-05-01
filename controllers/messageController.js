const MessageModel = require("../models/message");
const sendEmail = require("../utils/sendEmail");

const messageControler = {
  sendMessage: async function (request, responce) {
    try {
      const { name, message } = request.body;
      console.log(request.body);
      let email = request.body.email?.toLowerCase();

      let newMessage = await new MessageModel({ name, email, message });

      let savedMessage = await newMessage.save();

      if (savedMessage) {
        sendEmail(savedMessage);
        return responce
          .status(201)
          .json({ message: "Message succesfully sent" });
      }
    } catch (error) {
      return responce.status(500).json({ error: error.message });
    }
  },
};

module.exports = messageControler;
