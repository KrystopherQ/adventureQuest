const { Questmaster } = require("../models");

const qmDat = [
  {
    username: "sid",
    password: "sidsidsid",
    questMasterName: "Wizzy Wazooo",
  },
];

const seedQm = () => Questmaster.bulkCreate(qmDat);

module.exports = seedQm;
