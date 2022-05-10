const ItemRouter = require('./items');

function route(app) {
  app.use('/api/items', ItemRouter);
}

module.exports = route;
