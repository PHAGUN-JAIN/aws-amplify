const express = require("express");
const app = express();
PORT = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/public", express.static("public")); //specifying the path to the static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
