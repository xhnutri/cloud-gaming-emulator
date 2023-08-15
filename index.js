// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
const runner = require("./puppeteer-linux");
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req, res) => res.send("Hello World!"));
// app.get("/scrape", async (req, res) => {
//   const { search } = req.body;
//   const data = await runner(search);
//   return res.json({ data });
// });

// app.listen(port, () =>
//   console.log(`Example app listening on port ${port}!`)
// );
async function init() {
  const data = await runner();
}

init()