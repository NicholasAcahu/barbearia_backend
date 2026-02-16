import { Sequelize } from "sequelize";

import database from "../db/database.js";

const Estabelecimento = database.define("estabelçecimento", {
  idUsuario: {
    type: Sequelize.INTEGER,
  },
});
