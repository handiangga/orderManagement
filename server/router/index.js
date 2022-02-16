"use strict";

const routers = require("express").Router();
const userRouters = require("./users");
// const moviesRouters = require('./movies')
// const genreRouters = require('./genres');
// const historiesRouters = require('./histories')
// const customersRouters = require('./customers')

routers.use("/users", userRouters);
// routers.use('/movies', moviesRouters);
// routers.use('/genres', genreRouters);
// routers.use('/histories', historiesRouters);
// routers.use('/customers', customersRouters);

module.exports = routers;
