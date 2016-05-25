import modelAddress from  '../models/addressModel';
import modelProject from '../models/projectModel';
import {cityListOTher1} from '../test1';

import cityListOTher2 from '../test2';
import cityListOTher3 from '../test3';
import cityListOTher4 from '../test4';

var datas = [];
datas.push(cityListOTher1);

datas.push(cityListOTher2);
datas.push(cityListOTher3);
datas.push(cityListOTher4);

function addCity (req, res) {
	let cityList = [];
	var errors = [];
	var ii = 0, jj = 0, zz = 0;
	datas.forEach(function(data) {

		data.forEach(function(val) {

			let arr = {
				id: val.code,
				name: val.name,
				type_id: 1
			};

			let newCity = modelAddress(arr);
			newCity.save(function(err) {
				if (err) errors.push(err)
				else {

					val.district.forEach(function(valdis) {
						let disarr = {
							id: valdis.id,
							name: valdis.name,
							type: valdis.pre,
							province_id: val.code,
							type_id: 2

						};
						let newDistrict = modelAddress(disarr);
						newDistrict.save(function(err) {
							if (err) {
								errors.push(err)
							} else {
								valdis.ward.forEach(function(valward) {
									let disward = {
										id: valward.id,
										name: valward.name,
										type: valward.pre,
										district_id: valdis.id,
										province_id: val.code,
										type_id: 3
									};
									let newWard = modelAddress(disward);
									newWard.save(function(err) {
										if (err) errors.push(err)
									})
								})


								valdis.street.forEach(function(valStreet) {
									let arrStreet = {
										id: valStreet.id,
										name: valStreet.name,
										type: valStreet.pre,
										district_id: valdis.id,
										province_id: val.code,
										type_id: 4
									};


									let newStreet = modelAddress(arrStreet);
									newStreet.save(function(err) {
										if (err) errors.push(err)
									})

								})

								valdis.project.forEach(function(valProject) {
									let arrProject = {
										id: valProject.id,
										name: valProject.name,
										address: {
											lat: valProject.lat,
											long: valProject.lng,
											district_id: valdis.id,
											province_id: val.code,
										},
										cats: valProject.cats,

									};
									let newProject = modelProject(arrProject);
									newProject.save(function(err) {
										if (err) errors.push(err)

									})
								})
							}
						})
					})
				}
			})

		});

	});

	res.json({
		data: false,
		error: errors
	});

}

//lay duong theo id va theo quan
function findStreetById (req, res) {
	let id = req.query.id,
		type_id = 4,
		district_id = req.query.district_id;
	modelAddress.findOne({ id: id, type_id: type_id, district_id: district_id }, function(err, result) {
		if (err) res.json({ data: false });
		else res.json({ data: result });
	})
}


//test promise
function findStreetAndUpdate (req, res) {
	modelAddress.findOne({ id: req.body.id, type_id: 4 }).exec()
		.then(function(rsAdd) {
			if (!rsAdd) {
				let newAdd = modelAddress({ id: req.body.id, type_id: 4 });
				return newAdd.save();
			} else {
				return false;
			}
		}).then(function(result) {
			res.json({
				data: result
			});
		})
		.then(undefined, function(err) {
			console.log(err);
			res.json({
				data: false
			});
		})

}

function findStreetAll(req, res) {
	let page = req.query.offset | 0,
		limit = req.query.limit ? req.query.limit | 0 : 10;
	modelAddress.find({ type_id: 4 }).limit(limit).skip(page * limit).exec(function(err, result) {
		if (err) { res.json({ data: false }); }
		res.json({ data: result });
	})

}


export {findStreetAll, findStreetAndUpdate, findStreetById, addCity}