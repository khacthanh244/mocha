import {Router} from 'express';
import {addAtribute} from '../controller/attributeController';

const router: any = Router();

router.route('/')
	.get(addAtribute)
	.all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

export default router;
