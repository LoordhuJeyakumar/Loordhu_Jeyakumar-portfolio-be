const messageControler = require("../controllers/messageController");

const messageRouter = require("express").Router();

messageRouter.post("/sendMessage", messageControler.sendMessage);

module.exports = messageRouter;
