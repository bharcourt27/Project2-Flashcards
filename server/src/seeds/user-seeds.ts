import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'JollyGuru', password: 'password', email: 'jollyguru@example.com' },
    { username: 'SunnyScribe', password: 'password', email: 'sunnyscribe@example.com' },
    { username: 'RadiantComet', password: 'password', email: 'radiantcomet@example.com' },
  ], { individualHooks: true });
};
