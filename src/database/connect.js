const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://duduardogp:duduardogp@cluster0.vxusypx.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0"
      //, opções se precisar (por ex: family: 4)
    );
    console.log("conexão bem sucedida");
  } catch (error) {
    console.error("ocorreu um erro ao se conectar:", error);
  }
};

module.exports = connectToDataBase;
