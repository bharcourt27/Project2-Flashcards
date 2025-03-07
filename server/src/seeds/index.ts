import { seedUsers } from './user-seeds.js';

import { seedCards } from './card-seeds.js'; // ✅ Make sure this matches your actual function name

import { sequelize } from '../models/index.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true }); // ⚠️ Resets all tables (deletes existing data)
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    await seedCards();
    console.log('\n----- CARDS SEEDED -----\n');

    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();