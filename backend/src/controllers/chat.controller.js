const chatModel = require("../models/chat.model");
const messageModel = require('../models/message.model')

async function createChat(req, res) {
  const { title } = req.body;
  const user = req.user;

  const chat = await chatModel.create({
    user: user._id,
    title,
  });

  res.status(201).json({
    message: "chat created successfully.",
    chat: {
      _id: chat._id,
      title: chat.title,
      lastActivity: chat.lastActivity,
      user: chat.user,
    },
  });
}

async function getChats(req, res) {
  const user = req.user;

  res.status(200).json({
    message: "chats retrieved successfully",
    chats: chats.map((chat) => ({
      _id: chat._id,
      title: chat.title,
      lastActivity: chat.lastActivity,
      user: chat.user,
    })),
  });
}

async function getMessages(req, res) {
  const chatId = req.params.id;

  const messages = await messageModel.find({chat : chatId}).sort({createdAt : 1})

  res.status(200).json({
    message: "messages retrived successfully",
    messages : messages
  })
}

module.exports = {
  createChat,
  getChats,
  getMessages,
};
