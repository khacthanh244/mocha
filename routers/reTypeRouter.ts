import {Router} from 'express';
import {add} from '../controller/reTypeController';

const router: any = Router();
router.route('/')
	.get(add)
	.all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

export default router;