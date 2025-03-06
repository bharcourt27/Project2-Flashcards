import express from 'express';
import {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
} from '../../controllers/card-controller.js';

const router = express.Router();

// GET /tickets - Get all tickets
router.get('/', getAllCards);

// GET /tickets/:id - Get a ticket by id
router.get('/:id', getCardById);

// POST /tickets - Create a new ticket
router.post('/', createCard);

// PUT /tickets/:id - Update a ticket by id
router.put('/:id', updateCard);

// DELETE /tickets/:id - Delete a ticket by id
router.delete('/:id', deleteCard);

export { router as cardRouter };
