import express from 'express';
import {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
} from '../../controllers/card-controller.js';

const router = express.Router();

// GET /tickets - Get all cards
router.get('/', getAllCards);

// GET /tickets/:id - Get a card by id
router.get('/:id', getCardById);

// POST /tickets - Create a new card
router.post('/', createCard);

// PUT /tickets/:id - Update a card by id
router.put('/:id', updateCard);

// DELETE /tickets/:id - Delete a card by id
router.delete('/:id', deleteCard);

export { router as cardRouter };
