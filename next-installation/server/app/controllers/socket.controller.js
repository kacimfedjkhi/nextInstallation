module.exports = server => {
  const Card = require(`../models/card.model.js`);
  const io = require(`socket.io`).listen(server);
  const connections = [];

  io.serveClient(`origins`, `*:*`);
  io.on(`connection`, socket => {
    connections.push(socket);
    console.log(`connected: ${connections.length} sockets connected`);

    socket.on(`sendCard`, async data => {
      console.log("hey testje");

      try {
        const card = new Card({
          //add card data
          theme: data.theme,
          text: data.message,
          locations: data.locations,
          answers: data.answers,
          uniqueId: data.uniqueId,
          pin: data.pin
        });

        const r = await card.save();
        console.log(`card send testing`);

        socket.emit(`getCard`, r);
      } catch (err) {
        return err;
      }
    });
  });
};
