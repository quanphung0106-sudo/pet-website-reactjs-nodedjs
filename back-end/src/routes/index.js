const ItemRouter = require('./items');
const OrderRouter = require('./orders');

function route(app) {
  app.use('/api/items', ItemRouter);
  app.use('/api/orders', OrderRouter);
}

module.exports = route;
