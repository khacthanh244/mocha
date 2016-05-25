import {Router} from 'express';
import * as user from '../controller/userController';
import { verifyToken } from '../libs/verifyToken';
import { uploadUser } from '../libs/uploads';
const router: any = Router();
router.route('/create')
    .post(user.createUserPost)
    .put(verifyToken, user.createUserPut)
    .all((req, res, next) => {
        res.sendStatus(404);
    })

router.route('/reset/password')
    .post(user.addResetPassword)
    .put(verifyToken, user.checkKeyResetPassword)
    .all((req, res, next) => {
        res.sendStatus(404);
    })

router.get('/reset/key', verifyToken, user.resetSmsKey)

router.get('/notification/:data/key/:key', user.pushNotification)

router.put('/image',verifyToken,uploadUser,user.uploadImages)

router.route('/profile')
    .get(verifyToken, user.listProfile)
    .put(verifyToken,user.editProfile)
    .all((req, res, next) => {
        res.sendStatus(404);
    })
router.post('/login', user.userLoginPost)

router.post('/logout', verifyToken, user.userLogoutPost)

export default router;