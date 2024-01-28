"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      });
      Person.hasMany(models.Registration, {
        foreignKey: 'student_id',
        as: 'registrations'
      });
    }
  }
  Person.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      document: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Person",
    }
  );
  return Person;
};
