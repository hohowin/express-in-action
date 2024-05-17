import { Router, Response } from "express";

const router = Router();

router.get('/', (_, res: Response) => {
    res.status(200).send('Hello World');
});

export default router;