import {Router} from 'express';
import {addPost,searchPost, searchPostArea, pushElasticSearch, getAll,
     editPost,addView,getPostAllByUser}
from '../controller/postController';
import {addRate} from '../controller/rateController';
import {verifyToken} from '../libs/verifyToken';
const router: any = Router();
import { uploadPost as upload } from '../libs/uploads';

router.route('/post')
    .post(upload, verifyToken, addPost)
    .put(verifyToken, editPost)
    .all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });


router.route('/elastichpush')
    .get(pushElasticSearch)
    .all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

router.route('/search')
    .get(searchPost)
    .all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

router.route('/limit/:limit/offset/:offset')
    .get(getAll)
    .all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });


//lay post theo user
router.route('/byuser/limit/:limit/offset/:offset')
    .get(verifyToken,getPostAllByUser)
    .all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

router.route('/postarea')
    .get(searchPostArea)
    .all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

router.route('/view')
    .put(addView)
    .all((req:any,res:any,next:any)=>{
        res.sendStatus(404);
    })

router.route('/rate')
       .put(verifyToken,addRate)
       .all((req:any,res:any)=>{
           res.sendStatus(404);
       })
       



export default router;