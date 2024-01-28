'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [
      {
        name: 'Solange Estudante',
        email: 'solange@email.com',
        document: '63058133022',
        active: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Igor Estudante',
        email: 'igor@email.com',
        document: '99018205028',
        active: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aline Estudante',
        email: 'aline@email.com',
        document: '92797497066',
        active: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fernando Estudante',
        email: 'fernando@email.com',
        document: '17195730000',
        active: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ricardo Docente',
        email: 'ricardo@email.com',
        document: '06946507061',
        active: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dine Docente',
        email: 'dine@email.com',
        document: '80941142078',
        active: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {}); 
  }
};
