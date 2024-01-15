//require("dotenv").config();
//const config = require("./src/config/config")

const app = require("./app");

//const PORT = config.app.port;
app.listen(2000, () => {
  console.log(`server is running at http://localhost:${2000}`);
});
