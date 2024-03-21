import express from "express";
import prisma from "./prisma";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  // const r = await prisma.user.create({
  //   data: { id: "6110389", name: "Jimboy Cantila", email: "jimcan@gmail.com" },
  // });
  const users = await prisma.user.findMany();

  res.json(users);
});

app.post("/users", async (req, res) => {
  res.json({ okay: "It s okay" });
});

app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});
