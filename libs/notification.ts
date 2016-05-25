import { Message, Sender } from 'node-gcm';
import config from '../config/environment';
function pushAndroid(val: any, deviceToken: any) {
    let batchLimit: number = 1000;

    let message: any = new Message(),
        sender: any = new Sender(config.notificationKeyAndroid);

    message.contentAvailable = 'true';

    let data = {
        title: 'Oc Vang!',
        body: val
    };
    message.addData('data', data);
    for (let start = 0; start < deviceToken.length; start += batchLimit) {
        let slicedTokens = deviceToken.splice(start, start + batchLimit);

        sender.sendNoRetry(message, { registrationTokens: slicedTokens }, (err:any, response:any) => {
            console.log('Push notification Android \n');
            if (err) { console.error('Error :' + err); }
            else {
                console.log('Response :' + JSON.stringify(response));
            }
        });
    }
}
export {pushAndroid};