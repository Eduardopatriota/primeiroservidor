// const { Person } = require("./person");
const connectToDatabase = require("./src/database/connect");
const UserModel = require("./src/models/user.model");
const express = require("express");
require("./modules/http");



connectToDatabase();
