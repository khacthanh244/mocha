import user from './userRouter';
import post from './postRouter';
import address from './addressRouter';
import attribute from './attributeRouter';
import reType from './reTypeRouter';
import postAnchor from './postAnchorRouter';

export default (app:any)=>{
   app.use('/api/user',user);
   app.use('/api/post', post);
   app.use('/api/address', address);
   app.use('/api/attribute', attribute);
   app.use('/api/retype', reType);
   app.use('/api/postanchor',postAnchor);
   app.route('/*')
    .all((req:any,res:any) =>{
        res.sendStatus(404);
    });
}