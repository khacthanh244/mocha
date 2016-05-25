
import modelAttr from   '../models/attributeModel';
import {areaLevel, roomLevel} from '../other';
import {priceLevel, directionList } from '../test1'

function addAtribute (req, res) {
	let cityList = [];
	var errors = [];
	let sqm_price = [], total_price = [], direction_all = [];

	priceLevel[1].forEach(function(valPrice) {
		sqm_price.push({ id: valPrice.Name, name: valPrice.Value });
	})

	priceLevel[0].forEach(function(valPrices) {
		total_price.push({ id: valPrices.Name, name: valPrices.Value });
	})

	directionList.forEach(function(valDirection) {
		direction_all.push({ id: valDirection.value, name: valDirection.name });
	})


	let arr = {
		square: areaLevel,
		sqm_price: sqm_price,
		total_price: total_price,
		direction: direction_all,
		bedroom: roomLevel,
	};

	let newAttr = modelAttr(arr);
	newAttr.save(function(err) {
		if (err) errors.push(err)
	})

	res.json({
		rs: true,
		err: errors
	});

}

export {addAtribute}