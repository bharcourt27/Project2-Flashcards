import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user';


// Define attributes for Flashcard
interface FlashcardAttributes {
  id: number;
  front: string;
  back: string;
  userId: number;
  assignedUserId?: number;

}

// Define creation attributes (id is optional)
interface FlashcardCreationAttributes extends Optional<FlashcardAttributes, 'id'> {}

// Define the Flashcard model
export class Flashcard extends Model<FlashcardAttributes, FlashcardCreationAttributes> implements FlashcardAttributes {
  public id!: number;
  public front!: string;
  public back!: string;
  public userId!: number;
  public assignedUserId!: number;

  // associated User model
  public readonly assignedUser?: User;

  // Timestamp fields
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Define the factory function
export function FlashcardFactory(sequelize: Sequelize): typeof Flashcard {
  Flashcard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      front: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      back: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      assignedUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'flashcards',
      sequelize,
    }
  );

  return Flashcard;
}