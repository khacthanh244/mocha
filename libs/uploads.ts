import * as multer from 'multer';

let storagePost:any = multer.diskStorage({
    destination:(req:any, file:any, callback:any)=>{
        callback(null, './public/uploads/post/'); //../www/public_html/minhmua/data/images/12gproduct/200x200/
    },
    filename:(req:any, file:any, callback:any)=> {
        callback(null, Date.now() + '_' + file.originalname);
    }
});

let storageUser: any = multer.diskStorage({
    destination: (req:any,file:any,cb:any)=>{
        cb(null,'./public/uploads/user/');
    },
    filename:(req:any, file:any, callback:any)=> {
        callback(null, `${Date.now()}_${file.originalname}`);
    }     
});

let uploadPost:any = multer({ storage: storagePost }).array('image', 10),
    uploadUser:any = multer({storage: storageUser}).fields([
        {name: 'avatar',maxCount: 1},
        {name: 'cover',maxCount: 1}]);

export {uploadPost, uploadUser};