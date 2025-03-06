import sequelize from '../config/connection.js'
import { UserFactory } from './user.js';
import { FlashcardFactory } from './card.js';

const User = UserFactory(sequelize);
const Flashcard = FlashcardFactory(sequelize);

export { User, Flashcard };
