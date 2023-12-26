import express from "express";
import userRoute from "./routes/User.js";

const app = express();

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("yeah node is working with ts");
});
app.listen(4000, () => {
  console.log("server is working");
});
