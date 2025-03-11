import { Router, type Request, type Response } from 'express';
import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username, id: user.id }, secretKey, { expiresIn: '24h' });
  return res.json({ token });
};
export const register = async (req: Request, res: Response) => {
  // const { username, email, password } = req.body;
try {
  
  // console.log("================signup===============")
  // console.log(req.body)
  const newUser = await User.create(req.body)
  const secretKey = process.env.JWT_SECRET_KEY || '';
  
  const token = jwt.sign({ username:newUser.username }, secretKey, { expiresIn: '24h' });
  return res.json({ token });
} catch (err) {
  console.log(err)
  return res.status(500).json(err)
}
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);
router.post('/signup', register);

export default router;
