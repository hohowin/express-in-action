import { Router } from 'express';
import { 
  getUsersController, 
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController } from "../controllers/user.controller";
import { validateUser } from "../validators/user.validator";
// New Router instance
const router = Router();

// Users routes
router.get('/', getUsersController);
router.get('/:id', getUserByIdController);
router.post('/', validateUser, createUserController);
router.put('/:id', validateUser, updateUserController);
router.delete('/:id', deleteUserController);

export default router;