const mongoose = require("mongoose");
const config = require("./utils/config");
const serverless = require("serverless-http");

//import app
const app = require("./app");

console.log("Connecting to database.....");

//connect to mongodb
mongoose
  .connect(`${config.MONGODB_URI}${config.DB_NAME}`)
  .then(() => {
    console.log("Connected to the MongoDB...");

    if (config.ENVIRONMENT === "DEVELOPMENT") {
      //start the server
      app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`);
      });
    } else {
      const handler = serverless(app, { provider: "azure" });
      module.exports.funcName = async (context, req) => {
        context.res = await handler(context, req);
      };
    }
  })
  .catch((error) => {
    console.log("Error connecting to the MongoDB", error.message);
  });
