import {gzip} from 'zlib';

let urlUser: string = 'http://123.30.6.13:2600/public/uploads/avatar';

function randomString(len: number, charSet?: string) {
    charSet = charSet || '0123456789';
	//  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString: string = '';
    for (let i = 0; i < len; i++) {
		let randomPoz = Math.floor(Math.random() * charSet.length);
		randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}
function resJsonData(respond: any, addval: any, data: any, valdata?: any) {
	let result = {
		'respondCode': respond,
		'messager': data,
	};
	if (addval) {
		let items = Object.keys(addval);
		items.forEach((item) => {
			result[item] = addval[item];
		});
	}
	if (valdata) {
		let items = Object.keys(valdata);
		items.forEach((item) => {
			result[item] = valdata[item];
		});
	}
	return result;
}
function resGzip(res: any, data: any) {
	res.writeHead(200, { 'Content-Type': 'application/json', 'charset': 'utf-8', 'Content-Encoding': 'gzip' });
	
	gzip(JSON.stringify(data), (err: any, result: any) => {
		if (err) {
			console.log(err);
		}
		res.end(result);
	})
}
export {
randomString,
resJsonData,
resGzip,
urlUser,
};