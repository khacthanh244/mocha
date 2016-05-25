import {createClient} from 'redis';


export default (config:any) => {

    let client:any = createClient(config.redis.port,config.redis.host);

    client.on("error", (err)=> {
        console.log(`Redis Error ${err}`);
    });
    return client;
};