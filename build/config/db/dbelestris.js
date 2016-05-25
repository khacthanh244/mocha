"use strict";
const elasticsearch_1 = require('elasticsearch');
function dbelasticsearch(config) {
    let client = new elasticsearch_1.Client({
        host: config.elastic
    });
    return client;
}
exports.dbelasticsearch = dbelasticsearch;
