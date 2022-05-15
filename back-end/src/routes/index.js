const ItemRouter = require('./items');
const OrderRouter = require('./orders');
const UserRouter = require('./users');

function route(app) {
  app.use('/api/items', ItemRouter);
  app.use('/api/orders', OrderRouter);
  app.use('/api/users', UserRouter);
}

module.exports = route;
