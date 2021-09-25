const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      const connection = await mongoose.connect(process.env.MONGO_URI, {
         useCreateIndex: true,
         useFindAndModify: false,
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: ${connection.connection.host}`);
   } catch (err) {
      console.log("database connection failed. exiting now...");
      console.error(err);
      process.exit(1);
   }
};

module.exports = connectDB;
