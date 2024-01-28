'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        title: 'API com Express',
        description: 'Curso de API com Express e MongoDB',
        start_at: '2023-01-01',
        category_id: 1,
        teacher_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'SpringBoot',
        description: 'Curso de Java com Spring Framework',
        start_at: '2023-01-01',
        category_id: 2,
        teacher_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Python Web com Django',
        description: 'Curso de aplicações web com Django',
        start_at: '2023-01-01',
        category_id: 3,
        teacher_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Orientação a Objetos com C#',
        description: 'Curso de C#: coleções, arquivos e libs',
        start_at: '2023-01-01',
        category_id: 4,
        teacher_id: 4,
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