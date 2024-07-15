const mongoose = require("mongoose");
const { MONGODB_URL, PORT } = require("./utils/config");
const app = require("./app");

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("Error connecting to database:", err));
