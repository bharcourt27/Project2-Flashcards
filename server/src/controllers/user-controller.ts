import { Request, Response } from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

// GET /Users
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] } // ✅ Hides password field
    });
    return res.json(users);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// GET /Users/:id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] } // ✅ Hides password field
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /Users (Register a new user)
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body; // ✅ Ensure email is included
  try {
    // ✅ Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword, // ✅ Store hashed password
    });

    res.status(201).json({ id: newUser.id, username: newUser.username, email: newUser.email }); // ✅ Don't return password
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, email, password } = req.body; // ✅ Include email
  
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' }); // ✅ Explicit return
      }
  
      user.username = username;
      user.email = email;
  
      if (password) {
        user.password = await bcrypt.hash(password, 10); // ✅ Hash new password if provided
      }
  
      await user.save();
      return res.json({ id: user.id, username: user.username, email: user.email }); // ✅ Explicit return
    } catch (error: any) {
      return res.status(400).json({ message: error.message }); // ✅ Explicit return
    }
  };

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' }); // ✅ Explicit return
      }
  
      await user.destroy();
      return res.json({ message: 'User deleted' }); // ✅ Explicit return
    } catch (error: any) {
      return res.status(500).json({ message: error.message }); // ✅ Explicit return
    }
  };