'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Node.js',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'C#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
