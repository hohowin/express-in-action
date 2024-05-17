import { Router, Request, Response } from 'express';

// New Router instance
const router = Router();

// Users routes
router.get('/', (_, res: Response) => {
  res.status(200).send('Users route!');
});

router.get('/:id', (req: Request, res: Response) => {
  res.status(200).send(`User ${req.params.id} route!`);
});

export default router;