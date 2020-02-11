const express = require(`express`);
const path = require(`path`);
const bodyparser = require(`body-parser`);
const mongoose = require(`mongoose`);
const http = require(`http`);
require(`dotenv`).config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log(`db succesfully connected`))
  .catch(err => {
    console.log(`connection error`, err);
    process.exit();
  });

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build/")));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

require(`./app/routes/installation.routes.js`)(app);

app.get(`*`, (req, res) => {
  res.sendFile(path.resolve(__dirname, `../client/public`, `index.html`));
});

const server = http.createServer(app);

require(`./app/controllers/socket.controller.js`)(server);

server.listen(process.env.PORT, () => {
  console.log(`Sever listening on port ${process.env.PORT}`);
});
