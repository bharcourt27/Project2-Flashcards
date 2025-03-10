import sequelize from '../config/connection.js'
import { UserFactory } from './user.js';
import { FlashcardFactory } from './card.js';

const User = UserFactory(sequelize);
const Flashcard = FlashcardFactory(sequelize);

User.hasMany(Flashcard, { foreignKey: 'assignedUserId' });
Flashcard.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser'});

export { User, Flashcard, sequelize };
