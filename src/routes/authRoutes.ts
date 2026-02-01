import express from 'express';
import { registerUser } from '../controllers/authController.js';
import { validate } from '../middleware/validation.middleware.js';
import { registerValidation } from '../validation/auth.validation.js';
import { loginUser } from '../controllers/authController.js';


const authRoutes = express.Router({ mergeParams: true });

authRoutes.post('/register',validate(registerValidation),registerUser);


authRoutes.post('/login', loginUser);

export default authRoutes;