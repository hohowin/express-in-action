import { Router, Request, Response } from 'express';
import { 
  getUsersController, 
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController } from "../controllers/user.controller"

// New Router instance
const router = Router();

// Users routes
router.get('/', (_, res: Response) => 
  getUsersController(res));

router.get('/:id', (req: Request, res: Response) => 
  getUserByIdController(req, res));

router.post('/', (req: Request, res: Response) => 
  createUserController(req, res));

router.put('/', (req: Request, res: Response) => 
  updateUserController(req, res));

router.delete('/', (req: Request, res: Response) => 
  deleteUserController(req, res));

export default router;