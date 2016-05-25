import {Router} from 'express';
import {verifyToken} from '../libs/verifyToken';
import {addPostAnchor, getAllPostAnchorUid, removePostAnchorById} from '../controller/postAnchorController';

const router:any = Router();


router.route('/')
	.post(verifyToken,addPostAnchor)
	.put(verifyToken,removePostAnchorById)
	.all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });



router.route('/limit/:limit/offset/:offset')
	.get(verifyToken,getAllPostAnchorUid)
	.all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

export default router;

