import {Client} from 'elasticsearch';

function dbelasticsearch(config: any) {
	let client = new Client({
		host: config.elastic
	});

	return client;
}
export {dbelasticsearch};