const mongoose = require("mongoose");

const connDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodb);
    console.log(`database connected at ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connDB };


