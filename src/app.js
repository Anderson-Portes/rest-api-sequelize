const express = require("express");
const initRoutes = require('./routes');

const app = express();
initRoutes(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
