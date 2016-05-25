import {Router} from 'express';
import {
	findStreetAll,
	findStreetAndUpdate,
	findStreetById,
	addCity} from '../controller/addressController';

const router:any = Router();

router.route('/')
	.get(addCity)
	.post(findStreetAndUpdate)
	.all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });
	
router.route('/getstreetall')
	.get(findStreetAll)
	.all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

router.route('/findstreetbyid')
	.get(findStreetById)
	.all((req: any, res: any, next: any) => {
        res.sendStatus(404);
    });

export default router;
