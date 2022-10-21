import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.b14zfgd.mongodb.net/flikart?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
