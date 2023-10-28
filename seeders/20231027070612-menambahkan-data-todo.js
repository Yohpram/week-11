'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('todos', [{
      nama: 'John',
      hari: 'selasa',
      kegiatan: 'belajar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Doe',
      hari: 'Rabu',
      kegiatan: 'Ngoding',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Ridwan',
      hari: 'kamis',
      kegiatan: 'Kuliah',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Joko',
      hari: 'Senin',
      kegiatan: 'Olahraga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Allen',
      hari: 'Senin',
      kegiatan: 'Bersepeda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', null, {})
  }
};
