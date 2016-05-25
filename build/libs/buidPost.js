"use strict";
const date_1 = require('../libs/date');
function buidObjectPost(results, type) {
    let datas = {
        'data': []
    };
    if (results.length == 0)
        return datas;
    results.forEach(function (result) {
        let date_create = '';
        let id = '';
        if (type == 1) {
            date_create = date_1.daysFormat(result._id.getTimestamp(), new Date());
            id = result._id;
        }
        if (type == 2) {
            result = result._source;
            date_create = date_1.daysFormat(new Date(result.date_created), new Date());
            id = result.id;
            ;
        }
        if (type == 3) {
            date_create = date_1.daysFormat(result._id.getTimestamp(), new Date());
            id = result._id;
        }
        let data = {
            _id: id,
            date_created: date_create,
            title: result.title,
            description: result.description,
            location: result.location,
            images: result.images,
            images_total: result.images.length,
            price: result.price,
            author: result.author,
            count_share: result.count_share,
            count_view: result.count_view,
            count_rate: result.rate.number == 0 ? 0 : Math.round((result.rate.total / result.rate.number) * 10),
            count_neo: result.count_neo
        };
        datas.data.push(data);
    });
    return datas;
}
exports.buidObjectPost = buidObjectPost;
