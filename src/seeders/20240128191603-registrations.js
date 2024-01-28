'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Registrations', [
      {
        student_id: 1,
        course_id: 1,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        course_id: 2,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 3,
        course_id: 3,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 4,
        course_id: 4,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('matriculas', null, {});
  }
};
