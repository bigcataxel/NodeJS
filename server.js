require('dotenv').config();
const express = require("express");
const securityRoutes = require("./routes/security");
const checkAuth = require("./middlewares/checkAuth");
const productsRoutes = require("./routes/products");
const categoriesRoutes = require("./routes/categories");
const commandsRoutes = require("./routes/commands");
const connection = require("./models/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world !!");
});

app.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.use("/security", securityRoutes);  

app.use("/products", checkAuth(), productsRoutes);
app.use("/categories", checkAuth(), categoriesRoutes);
app.use("/commands", checkAuth(), commandsRoutes);

connection.sync({ force: false }) 
  .then(() => {
    console.log("Tables synchronized successfully");
  })
  .catch((error) => {
    console.error("Error synchronizing tables:", error);
  });

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Une erreur est survenue' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
