import { Request, Response } from 'express';
import { Flashcard } from '../models/card.js'; // ✅ Make sure this file exists and is correctly named
import { User } from '../models/user.js';

// GET /cards
export const getAllCards = async (_req: Request, res: Response) => {
  try {
    const cards = await Flashcard.findAll({ // ✅ Use Flashcard, not card
      include: [
        {
          model: User,
          as: 'assignedUser', // ✅ Make sure this alias is correctly defined in your Sequelize model
          attributes: ['username'], // Include only the username attribute
        },
      ],
    });
    res.json(cards);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /cards/:id
export const getCardById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const card = await Flashcard.findByPk(id, { // ✅ Use Flashcard, not Card
      include: [
        {
          model: User,
          as: 'assignedUser',
          attributes: ['username'],
        },
      ],
    });
    if (card) {
      res.json(card);
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /cards
export const createCard = async (req: Request, res: Response) => {
  const { front, back, userId } = req.body; // ✅ Changed to match Flashcard model
  try {
    const newCard = await Flashcard.create({ front, back, userId }); // ✅ Use Flashcard
    res.status(201).json(newCard);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /cards/:id (Update a flashcard)
export const updateCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { front, back, userId } = req.body; // ✅ Updated field names

  try {
    const card = await Flashcard.findByPk(id); // ✅ Use Flashcard, not card
    if (card) {
      card.front = front;
      card.back = back;
      card.userId = userId;
      await card.save();
      res.json(card);
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /cards/:id
export const deleteCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const card = await Flashcard.findByPk(id); // ✅ Use Flashcard
    if (card) {
      await card.destroy();
      res.json({ message: 'Card deleted' });
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};