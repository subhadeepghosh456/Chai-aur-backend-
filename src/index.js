import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on ${process.env.PORT} !!`);
    });
  })
  .catch((e) => {
    console.log("MONGO_DB connection failed!!", e);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();

*/
