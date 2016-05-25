
import modelRetype from '../models/reTypeModel';
import {cateList} from '../test1';

function add(req, res) {
	let cityList = [];
	var errors = [];
	cateList.forEach(function(val) {
		let arr = {
			id: val.id,
			name: val.name
		};

		let newRetype = modelRetype(arr);
		newRetype.save(function(err) {
			if (err) errors.push(err)
			else {
				val.children.forEach(function(valCat) {
					let disarr = {
						id: valCat.id,
						name: valCat.name,
						type_id: val.id

					};
					let newRetypeChild = modelRetype(disarr);
					newRetypeChild.save(function(err) {
						if (err) errors.push(err)
					})
				})
			}
		})

	})


	res.json({ rs: true, err: errors });

}

export {add};