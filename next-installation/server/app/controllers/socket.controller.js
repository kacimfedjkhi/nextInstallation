module.exports = server => {
  const Card = require(`../models/card.model.js`);
  const io = require(`socket.io`).listen(server);
  const connections = [];

  io.serveClient(`origins`, `*:*`);
  io.on(`connection`, socket => {
    connections.push(socket);
    console.log(`connected: ${connections.length} sockets connected`);

    socket.on(`sendCard`, async data => {
      try {
        const card = new Card({
          //add card data
          theme: data.theme,
          text: data.text,
          locations: data.locations,
          answers: data.answers,
          uniqueId: data.uniqueId
        });

        //const r = await card.save();

        io.to(connections[1].id).emit(`getCard`, card);
      } catch (err) {
        return err;
      }
    });

    socket.on("disconnect", () => {
      connections.splice(connections.indexOf(socket), 1);
      console.log(`Disconnected: ${connections.length} sockets connected`);
    });
  });
};
