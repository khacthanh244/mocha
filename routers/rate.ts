import {Router} from 'express';
import {addRate} from '../controller/rateController';
import {verifyToken} from '../libs/verifyToken';
const router=Router();

router.route('/')
       .put(verifyToken,addRate)
       .all((req:any,res:any)=>{
           res.sendStatus(404);
       })
       
export default router;