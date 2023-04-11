const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
   "postgres://postgres:5jbUVfhrKFzqoWC@pawesome-care-db.flycast:5432",
  {
    logging: false,
    native: false,
  }
);

module.exports = { sequelize };
