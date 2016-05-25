var cateList: any = [{
	"id": 38,
	"name": "Nhà đất bán",
	"children": [{
		"id": 324,
		"name": "Bán căn hộ chung cư",
		"attrs": []
	}, {
		"id": 41,
		"name": "Bán nhà riêng",
		"attrs": [{
			"id": 1,
			"name": "Gần trường học",
			"values": [{
				"id": 1,
				"name": "gan truong doan thi diem"
			}, {
				"id": 7,
				"name": "Gần trường Bách Khoa"
			}, {
				"id": 8,
				"name": "Gần trường Ngoại Thương"
			}]
		}, {
			"id": 2,
			"name": "Gần chợ",
			"values": [{
				"id": 6,
				"name": "Gần chợ Mơ"
			}, {
				"id": 9,
				"name": "Gần chợ Đồng Tâm"
			}]
		}]
	}, {
		"id": 325,
		"name": "Bán nhà biệt thự, liền kề",
		"attrs": []
	}, {
		"id": 163,
		"name": "Bán nhà mặt phố",
		"attrs": []
	}, {
		"id": 40,
		"name": "Bán đất nền dự án",
		"attrs": []
	}, {
		"id": 283,
		"name": "Bán đất",
		"attrs": []
	}, {
		"id": 44,
		"name": "Bán trang trại, khu nghỉ dưỡng",
		"attrs": []
	}, {
		"id": 45,
		"name": "Bán kho, nhà xưởng",
		"attrs": []
	}, {
		"id": 48,
		"name": "Bán loại bất động sản khác",
		"attrs": []
	}],
	"prices": [{
		"name": "Thỏa thuận",
		"id": "0"
	}, {
		"name": "Triệu",
		"id": "1"
	}, {
		"name": "Tỷ",
		"id": "2"
	}, {
		"name": "Cây vàng",
		"id": "3"
	}, {
		"name": "USD",
		"id": "4"
	}, {
		"name": "USD/m2",
		"id": "5"
	}, {
		"name": "Trăm nghìn/m2",
		"id": "6"
	}, {
		"name": "Triệu/m2",
		"id": "7"
	}, {
		"name": "Chỉ vàng/m2",
		"id": "8"
	}, {
		"name": "Cây vàng/m2",
		"id": "9"
	}],
	"brokerdomain": [{
		"id": 8,
		"name": "Bán căn hộ chung cư"
	}, {
		"id": 7,
		"name": "Bán đất"
	}, {
		"id": 1,
		"name": "Bán đất nền dự án"
	}, {
		"id": 4,
		"name": "Bán kho, nhà xưởng"
	}, {
		"id": 5,
		"name": "Bán loại bất động sản khác"
	}, {
		"id": 9,
		"name": "Bán nhà biệt thự, liền kề"
	}, {
		"id": 6,
		"name": "Bán nhà mặt phố"
	}, {
		"id": 2,
		"name": "Bán nhà riêng"
	}, {
		"id": 3,
		"name": "Bán trang trại, khu nghỉ dưỡng"
	}]
}, {
	"id": 49,
	"name": "Nhà đất cho thuê",
	"children": [{
		"id": 326,
		"name": "Cho thuê căn hộ chung cư",
		"attrs": []
	}, {
		"id": 52,
		"name": "Cho thuê nhà riêng",
		"attrs": []
	}, {
		"id": 51,
		"name": "Cho thuê nhà mặt phố",
		"attrs": []
	}, {
		"id": 57,
		"name": "Cho thuê nhà trọ, phòng trọ",
		"attrs": []
	}, {
		"id": 50,
		"name": "Cho thuê văn phòng",
		"attrs": []
	}, {
		"id": 55,
		"name": "Cho thuê cửa hàng, ki ốt",
		"attrs": []
	}, {
		"id": 53,
		"name": "Cho thuê kho, nhà xưởng, đất",
		"attrs": []
	}, {
		"id": 59,
		"name": "Cho thuê loại bất động sản khác",
		"attrs": []
	}],
	"prices": [{
		"name": "Thỏa thuận",
		"id": "0"
	}, {
		"name": "Trăm nghìn/tháng",
		"id": "1"
	}, {
		"name": "Triệu/tháng",
		"id": "2"
	}, {
		"name": "USD/tháng",
		"id": "3"
	}, {
		"name": "USD/m2/tháng",
		"id": "4"
	}, {
		"name": "Trăm nghìn/m2/tháng",
		"id": "5"
	}, {
		"name": "Triệu/m2/tháng",
		"id": "6"
	}, {
		"name": "Nghìn/m2/tháng",
		"id": "7"
	}],
	"brokerdomain": [{
		"id": 10,
		"name": "Cho thuê căn hộ chung cư"
	}, {
		"id": 15,
		"name": "Cho thuê cửa hàng, ki ốt"
	}, {
		"id": 14,
		"name": "Cho thuê kho, nhà xưởng, đất"
	}, {
		"id": 16,
		"name": "Cho thuê loại bất động sản khác"
	}, {
		"id": 12,
		"name": "Cho thuê nhà mặt phố"
	}, {
		"id": 13,
		"name": "Cho thuê nhà riêng"
	}, {
		"id": 17,
		"name": "Cho thuê nhà trọ, phòng trọ"
	}, {
		"id": 11,
		"name": "Cho thuê văn phòng"
	}]
}];
var vipTypeList: any = [{
	"name": "Tin thường",
	"id": "5"
}, {
	"name": "Tin ưu đãi",
	"id": "4"
}, {
	"name": "Tin vip 3",
	"id": "3"
}, {
	"name": "Tin vip 2",
	"id": "2"
}, {
	"name": "Tin vip 1",
	"id": "1"
}, {
	"name": "Vip đặc biệt",
	"id": "0"
}];
var directionList: any = [{
	"name": "KXĐ",
	"value": "0"
}, {
	"name": "Đông",
	"value": "1"
}, {
	"name": "Tây",
	"value": "2"
}, {
	"name": "Nam",
	"value": "3"
}, {
	"name": "Bắc",
	"value": "4"
}, {
	"name": "Đông-Bắc",
	"value": "5"
}, {
	"name": "Tây-Bắc",
	"value": "6"
}, {
	"name": "Tây-Nam",
	"value": "7"
}, {
	"name": "Đông-Nam",
	"value": "8"
}];
var unitPriceList = [113.4, 33.4, 18, 14, 275, 1.2, 0];
var unitPriceListNew = [113.636, 47.273, 30, 14, 275, 1.2, 0];
var dateChangeCost = new Date('2014-01-01');
dateChangeCost.setHours(0);
dateChangeCost.setMinutes(0);
dateChangeCost.setSeconds(0);
dateChangeCost.setMilliseconds(0);
var priceLevel: any = [
	[{
		"Name": 0,
		"Value": "Thỏa thuận"
	}, {
		"Name": 1,
		"Value": "\u003c 500 triệu"
	}, {
		"Name": 2,
		"Value": "500 - 800 triệu"
	}, {
		"Name": 3,
		"Value": "800 triệu - 1 tỷ"
	}, {
		"Name": 4,
		"Value": "1 - 2 tỷ"
	}, {
		"Name": 5,
		"Value": "2 - 3 tỷ"
	}, {
		"Name": 6,
		"Value": "3 - 5 tỷ"
	}, {
		"Name": 7,
		"Value": "5 - 7 tỷ"
	}, {
		"Name": 8,
		"Value": "7 - 10 tỷ"
	}, {
		"Name": 9,
		"Value": "10 - 20 tỷ"
	}, {
		"Name": 10,
		"Value": "20 - 30 tỷ"
	}, {
		"Name": 11,
		"Value": "\u003e 30 tỷ"
	}],
	[{
		"Name": 0,
		"Value": "Thỏa thuận"
	}, {
		"Name": 1,
		"Value": "\u003c 1 triệu"
	}, {
		"Name": 2,
		"Value": "1 - 3 triệu"
	}, {
		"Name": 3,
		"Value": "3 - 5 triệu"
	}, {
		"Name": 4,
		"Value": "5 - 10 triệu"
	}, {
		"Name": 5,
		"Value": "10 - 40 triệu"
	}, {
		"Name": 6,
		"Value": "40 - 70 triệu"
	}, {
		"Name": 7,
		"Value": "70 - 100 triệu"
	}, {
		"Name": 8,
		"Value": "\u003e 100 triệu"
	}]
];
var priceLevelByType = [{
	"data": [{
		"Name": 0,
		"Value": "Thỏa thuận"
	}, {
		"Name": 1,
		"Value": "\u003c 500 triệu"
	}, {
		"Name": 2,
		"Value": "500 - 800 triệu"
	}, {
		"Name": 3,
		"Value": "800 triệu - 1 tỷ"
	}, {
		"Name": 4,
		"Value": "1 - 2 tỷ"
	}, {
		"Name": 5,
		"Value": "2 - 3 tỷ"
	}, {
		"Name": 6,
		"Value": "3 - 5 tỷ"
	}, {
		"Name": 7,
		"Value": "5 - 7 tỷ"
	}, {
		"Name": 8,
		"Value": "7 - 10 tỷ"
	}, {
		"Name": 9,
		"Value": "10 - 20 tỷ"
	}, {
		"Name": 10,
		"Value": "20 - 30 tỷ"
	}, {
		"Name": 11,
		"Value": "\u003e 30 tỷ"
	}],
	"code": 38
}, {
	"data": [{
		"Name": 0,
		"Value": "Thỏa thuận"
	}, {
		"Name": 1,
		"Value": "\u003c 1 triệu"
	}, {
		"Name": 2,
		"Value": "1 - 3 triệu"
	}, {
		"Name": 3,
		"Value": "3 - 5 triệu"
	}, {
		"Name": 4,
		"Value": "5 - 10 triệu"
	}, {
		"Name": 5,
		"Value": "10 - 40 triệu"
	}, {
		"Name": 6,
		"Value": "40 - 70 triệu"
	}, {
		"Name": 7,
		"Value": "70 - 100 triệu"
	}, {
		"Name": 8,
		"Value": "\u003e 100 triệu"
	}],
	"code": 49
}];


var cityListOTher1 = [{
	"code": "SG",
	"name": "Hồ Chí Minh",
	"district": [{
		"id": 72,
		"name": "Bình Chánh",
		"pre": "Huyện",
		"ward": [{
			"id": 11848,
			"name": "An Phú Tây",
			"pre": "Xã"
		}, {
			"id": 11849,
			"name": "Bình Chánh",
			"pre": "Xã"
		}, {
			"id": 11850,
			"name": "Bình Hưng",
			"pre": "Xã"
		}, {
			"id": 11851,
			"name": "Bình Lợi",
			"pre": "Xã"
		}, {
			"id": 11852,
			"name": "Đa Phước",
			"pre": "Xã"
		}, {
			"id": 11854,
			"name": "Hưng Long",
			"pre": "Xã"
		}, {
			"id": 11855,
			"name": "Lê Minh Xuân",
			"pre": "Xã"
		}, {
			"id": 11856,
			"name": "Phạm Văn Hai",
			"pre": "Xã"
		}, {
			"id": 11857,
			"name": "Phong Phú",
			"pre": "Xã"
		}, {
			"id": 11858,
			"name": "Quy Đức",
			"pre": "Xã"
		}, {
			"id": 11859,
			"name": "Tân Kiên",
			"pre": "Xã"
		}, {
			"id": 11860,
			"name": "Tân Nhựt",
			"pre": "Xã"
		}, {
			"id": 11861,
			"name": "Tân Quý Tây",
			"pre": "Xã"
		}, {
			"id": 11847,
			"name": "Tân Túc",
			"pre": "Thị trấn"
		}, {
			"id": 11862,
			"name": "Vĩnh Lộc A",
			"pre": "Xã"
		}, {
			"id": 11863,
			"name": "Vĩnh Lộc B",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 5864,
			"name": "10A",
			"pre": "Đường"
		}, {
			"id": 7408,
			"name": "10B",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 7755,
			"name": "1A",
			"pre": "Đường"
		}, {
			"id": 7702,
			"name": "1B",
			"pre": "Đường"
		}, {
			"id": 8007,
			"name": "1E",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 9820,
			"name": "234",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 10382,
			"name": "2B",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 4413,
			"name": "3A",
			"pre": "Đường"
		}, {
			"id": 8458,
			"name": "3B",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 9793,
			"name": "4C",
			"pre": "Đường"
		}, {
			"id": 10213,
			"name": "4E",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 4359,
			"name": "5A",
			"pre": "Đường"
		}, {
			"id": 7222,
			"name": "5B",
			"pre": "Đường"
		}, {
			"id": 7037,
			"name": "5C",
			"pre": "Đường"
		}, {
			"id": 7104,
			"name": "5D",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 2451,
			"name": "6A",
			"pre": "Đường"
		}, {
			"id": 6421,
			"name": "6B",
			"pre": "Đường"
		}, {
			"id": 7185,
			"name": "6C",
			"pre": "Đường"
		}, {
			"id": 7651,
			"name": "6D",
			"pre": "Đường"
		}, {
			"id": 10599,
			"name": "6T",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 10570,
			"name": "7 Tấn",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 10980,
			"name": "835B",
			"pre": "Đường"
		}, {
			"id": 8321,
			"name": "8A",
			"pre": "Đường"
		}, {
			"id": 5243,
			"name": "8B",
			"pre": "Đường"
		}, {
			"id": 6952,
			"name": "8C",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 5844,
			"name": "9A",
			"pre": "Đường"
		}, {
			"id": 5837,
			"name": "An Hạ",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 6476,
			"name": "An Phú Tây",
			"pre": "Đường"
		}, {
			"id": 8323,
			"name": "B10",
			"pre": "Đường"
		}, {
			"id": 6513,
			"name": "Bà Cả",
			"pre": "Đường"
		}, {
			"id": 1291,
			"name": "Bà Hom",
			"pre": "Đường"
		}, {
			"id": 9718,
			"name": "Bà Thau",
			"pre": "Đường"
		}, {
			"id": 7022,
			"name": "Bến Lội",
			"pre": "Đường"
		}, {
			"id": 6834,
			"name": "Bình Trường",
			"pre": "Đường"
		}, {
			"id": 7988,
			"name": "Bờ Huệ",
			"pre": "Đường"
		}, {
			"id": 5242,
			"name": "Bờ Nhà Thờ",
			"pre": "Đường"
		}, {
			"id": 9400,
			"name": "Bờ Xe Lam",
			"pre": "Đường"
		}, {
			"id": 6753,
			"name": "Bông Văn Dĩa",
			"pre": "Đường"
		}, {
			"id": 5257,
			"name": "Bùi Thanh Khiết",
			"pre": "Đường"
		}, {
			"id": 9427,
			"name": "Bùi Văn Sự",
			"pre": "Đường"
		}, {
			"id": 3072,
			"name": "C2",
			"pre": "Đường"
		}, {
			"id": 3073,
			"name": "C3",
			"pre": "Đường"
		}, {
			"id": 3219,
			"name": "C4",
			"pre": "Đường"
		}, {
			"id": 9752,
			"name": "C7",
			"pre": "Đường"
		}, {
			"id": 8549,
			"name": "C9",
			"pre": "Đường"
		}, {
			"id": 711,
			"name": "Cao Lỗ",
			"pre": "Đường"
		}, {
			"id": 10907,
			"name": "Cầu Suối",
			"pre": "Đường"
		}, {
			"id": 5656,
			"name": "Cây Bàn",
			"pre": "Đường"
		}, {
			"id": 7287,
			"name": "Cây Bàng",
			"pre": "Đường"
		}, {
			"id": 6292,
			"name": "Cây Cám",
			"pre": "Đường"
		}, {
			"id": 6325,
			"name": "Cây Dương",
			"pre": "Đường"
		}, {
			"id": 5256,
			"name": "Chánh Hưng",
			"pre": "Đường"
		}, {
			"id": 5747,
			"name": "Chiến Lược",
			"pre": "Đường"
		}, {
			"id": 6840,
			"name": "Chùa",
			"pre": "Đường"
		}, {
			"id": 9139,
			"name": "Công Nghệ Mới",
			"pre": "Đường"
		}, {
			"id": 2055,
			"name": "Đa Phước",
			"pre": "Đường"
		}, {
			"id": 5199,
			"name": "Đinh Đức Thiện",
			"pre": "Đường"
		}, {
			"id": 3970,
			"name": "Đoàn Nguyễn Tuấn",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 5258,
			"name": "Đường Đất",
			"pre": "Đường"
		}, {
			"id": 5982,
			"name": "Dương Đình Cúc",
			"pre": "Đường"
		}, {
			"id": 10911,
			"name": "G6",
			"pre": "Đường"
		}, {
			"id": 8354,
			"name": "G7",
			"pre": "Đường"
		}, {
			"id": 5244,
			"name": "Giao thông hào",
			"pre": "Đường"
		}, {
			"id": 6519,
			"name": "Hà Thanh",
			"pre": "Đường"
		}, {
			"id": 10831,
			"name": "Hàng Cọ",
			"pre": "Đường"
		}, {
			"id": 7122,
			"name": "Hàng Cọ 9A",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 6536,
			"name": "Hiệp Thành 7",
			"pre": "Đường"
		}, {
			"id": 2544,
			"name": "Hoàng Phan Thái",
			"pre": "Đường"
		}, {
			"id": 9243,
			"name": "Hóc Hữu",
			"pre": "Đường"
		}, {
			"id": 1113,
			"name": "Hưng Long",
			"pre": "Đường"
		}, {
			"id": 7146,
			"name": "Hưng Nhơn",
			"pre": "Đường"
		}, {
			"id": 7701,
			"name": "Hương lộ  80",
			"pre": "Đường"
		}, {
			"id": 7779,
			"name": "Hương Lộ 11",
			"pre": "Đường"
		}, {
			"id": 7628,
			"name": "Hương lộ 14",
			"pre": "Đường"
		}, {
			"id": 1894,
			"name": "Huỳnh Bá Chánh",
			"pre": "Đường"
		}, {
			"id": 8271,
			"name": "Huỳnh Hữu Trí",
			"pre": "Đường"
		}, {
			"id": 5232,
			"name": "Huỳnh Văn Trí",
			"pre": "Đường"
		}, {
			"id": 7607,
			"name": "Kênh",
			"pre": "Đường"
		}, {
			"id": 10349,
			"name": "Kênh 10",
			"pre": "Đường"
		}, {
			"id": 7299,
			"name": "Kênh 7",
			"pre": "Đường"
		}, {
			"id": 4441,
			"name": "Kênh 8",
			"pre": "Đường"
		}, {
			"id": 8297,
			"name": "Kênh 9",
			"pre": "Đường"
		}, {
			"id": 10531,
			"name": "Kênh A",
			"pre": "Đường"
		}, {
			"id": 10384,
			"name": "Kênh C",
			"pre": "Đường"
		}, {
			"id": 8158,
			"name": "Kênh Trung Ương",
			"pre": "Đường"
		}, {
			"id": 6660,
			"name": "Khuất Văn Bức",
			"pre": "Đường"
		}, {
			"id": 6896,
			"name": "Kinh A",
			"pre": "Đường"
		}, {
			"id": 10942,
			"name": "Kinh B12",
			"pre": "Đường"
		}, {
			"id": 7131,
			"name": "Kinh Rau Răm",
			"pre": "Đường"
		}, {
			"id": 6705,
			"name": "Kinh Trung Ương",
			"pre": "Đường"
		}, {
			"id": 6250,
			"name": "Lại Hùng Cường",
			"pre": "Đường"
		}, {
			"id": 7184,
			"name": "Láng Le Bàu Cò",
			"pre": "Đường"
		}, {
			"id": 3359,
			"name": "Lê Chân",
			"pre": "Đường"
		}, {
			"id": 10625,
			"name": "Lê Chính Đang",
			"pre": "Đường"
		}, {
			"id": 6666,
			"name": "Lê Đình Chi",
			"pre": "Đường"
		}, {
			"id": 3797,
			"name": "Lê Minh Xuân",
			"pre": "Đường"
		}, {
			"id": 10490,
			"name": "Liên Ấp",
			"pre": "Đường"
		}, {
			"id": 7655,
			"name": "Liên ấp 123",
			"pre": "Đường"
		}, {
			"id": 7327,
			"name": "Liên ấp 2-3",
			"pre": "Đường"
		}, {
			"id": 8259,
			"name": "Liên Ấp 2-3-4",
			"pre": "Đường"
		}, {
			"id": 6824,
			"name": "Liên ấp 2-6",
			"pre": "Đường"
		}, {
			"id": 8264,
			"name": "Liên ấp 3-4-5",
			"pre": "Đường"
		}, {
			"id": 10608,
			"name": "Liên ấp 4-5",
			"pre": "Đường"
		}, {
			"id": 10259,
			"name": "Liên ấp 5-6",
			"pre": "Đường"
		}, {
			"id": 8601,
			"name": "Liên Ấp 6",
			"pre": "Đường"
		}, {
			"id": 7606,
			"name": "Liên ấp 6-2",
			"pre": "Đường"
		}, {
			"id": 6947,
			"name": "Liên Khu 123",
			"pre": "Đường"
		}, {
			"id": 6243,
			"name": "Liên khu 4-5",
			"pre": "Đường"
		}, {
			"id": 5813,
			"name": "Liên Khu 5 - 6",
			"pre": "Đường"
		}, {
			"id": 10807,
			"name": "Liên thôn 1-2-3",
			"pre": "Đường"
		}, {
			"id": 8298,
			"name": "Linh Hòa",
			"pre": "Đường"
		}, {
			"id": 8305,
			"name": "Lô 2",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 396,
			"name": "Lương Định Của",
			"pre": "Phố"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 6400,
			"name": "Mai Bá Hương",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 5977,
			"name": "Nguyễn Cửu Phú",
			"pre": "Đường"
		}, {
			"id": 10172,
			"name": "Nguyễn Đình Kiên",
			"pre": "Đường"
		}, {
			"id": 2946,
			"name": "Nguyễn Hữu Trí",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 902,
			"name": "Nguyễn Thái Bình",
			"pre": "Đường"
		}, {
			"id": 10742,
			"name": "Nguyễn Thị Sưa",
			"pre": "Đường"
		}, {
			"id": 615,
			"name": "Nguyễn Thị Thập",
			"pre": "Đường"
		}, {
			"id": 4360,
			"name": "Nguyễn Thị Tú",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 5624,
			"name": "Nguyễn Văn Bứa",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 10609,
			"name": "Nguyễn Văn Long",
			"pre": "Đường"
		}, {
			"id": 6126,
			"name": "Nguyễn Văn Thời",
			"pre": "Đường"
		}, {
			"id": 5623,
			"name": "Nữ Dân Công",
			"pre": "Đường"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 8219,
			"name": "Phạm Tấn Mười",
			"pre": "Đường"
		}, {
			"id": 6095,
			"name": "Phạm Văn Sáng",
			"pre": "Đường"
		}, {
			"id": 3532,
			"name": "Phạm Văn Thuận",
			"pre": "Đường"
		}, {
			"id": 7810,
			"name": "Phan Văn Mảng",
			"pre": "Đường"
		}, {
			"id": 5884,
			"name": "Quách Điêu",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 7648,
			"name": "Quốc Lộ 50",
			"pre": "Đường"
		}, {
			"id": 1761,
			"name": "Quốc lộ 80",
			"pre": "Đường"
		}, {
			"id": 3391,
			"name": "Quốc lộ 8A",
			"pre": "Đường"
		}, {
			"id": 9191,
			"name": "Rạch Bà Lớn",
			"pre": "Đường"
		}, {
			"id": 8322,
			"name": "Rạch Bàu Gốc",
			"pre": "Đường"
		}, {
			"id": 10981,
			"name": "Rạch Cầu Suối",
			"pre": "Đường"
		}, {
			"id": 5245,
			"name": "Rạch Ông Đồ",
			"pre": "Đường"
		}, {
			"id": 10619,
			"name": "Sư Đoàn 9",
			"pre": "Đường"
		}, {
			"id": 9656,
			"name": "T10",
			"pre": "Đường"
		}, {
			"id": 9741,
			"name": "T11",
			"pre": "Đường"
		}, {
			"id": 7780,
			"name": "T12",
			"pre": "Đường"
		}, {
			"id": 10500,
			"name": "T14",
			"pre": "Đường"
		}, {
			"id": 8572,
			"name": "T4",
			"pre": "Đường"
		}, {
			"id": 3207,
			"name": "T6",
			"pre": "Đường"
		}, {
			"id": 7260,
			"name": "T9",
			"pre": "Đường"
		}, {
			"id": 10356,
			"name": "Tam Bửu Tự",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 3133,
			"name": "Tân Đức",
			"pre": "Đường"
		}, {
			"id": 6661,
			"name": "Tân Kiên",
			"pre": "Đường"
		}, {
			"id": 5745,
			"name": "Tân Liêm",
			"pre": "Đường"
		}, {
			"id": 6863,
			"name": "Tân Liễu",
			"pre": "Đường"
		}, {
			"id": 4973,
			"name": "Tân Long",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 9430,
			"name": "Tân Túc",
			"pre": "Đường"
		}, {
			"id": 4358,
			"name": "Tây Lân",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 2115,
			"name": "Thanh Niên",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 4090,
			"name": "Thế Lữ",
			"pre": "Đường"
		}, {
			"id": 7897,
			"name": "Thích Thiện Hòa",
			"pre": "Đường"
		}, {
			"id": 7238,
			"name": "Thiên Giang",
			"pre": "Đường"
		}, {
			"id": 6518,
			"name": "Thới Hòa",
			"pre": "Đường"
		}, {
			"id": 6745,
			"name": "Thủy Lợi",
			"pre": "Đường"
		}, {
			"id": 7649,
			"name": "Tỉnh Lộ 10",
			"pre": "Đường"
		}, {
			"id": 8650,
			"name": "Tỉnh lộ 10B",
			"pre": "Đường"
		}, {
			"id": 8817,
			"name": "Tỉnh lộ 6",
			"pre": "Đường"
		}, {
			"id": 2951,
			"name": "Tỉnh lộ 826",
			"pre": "Đường"
		}, {
			"id": 6959,
			"name": "Tỉnh lộ 835B",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 553,
			"name": "Trần Đại Nghĩa",
			"pre": "Phố"
		}, {
			"id": 10132,
			"name": "Trần Hải Phụng",
			"pre": "Đường"
		}, {
			"id": 4370,
			"name": "Trần Văn Giàu",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 5200,
			"name": "Trịnh Như Khuê",
			"pre": "Đường"
		}, {
			"id": 1298,
			"name": "Trịnh Quang Nghị",
			"pre": "Đường"
		}, {
			"id": 10186,
			"name": "Trung Chánh 1",
			"pre": "Đường"
		}, {
			"id": 6859,
			"name": "Trung Sơn",
			"pre": "Phố"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 8092,
			"name": "Vành Đai 2",
			"pre": "Đường"
		}, {
			"id": 7574,
			"name": "Vành Đai 4",
			"pre": "Đường"
		}, {
			"id": 1417,
			"name": "Vành Đai Trong",
			"pre": "Đường"
		}, {
			"id": 6864,
			"name": "Vĩnh Lộc",
			"pre": "Đường"
		}, {
			"id": 10304,
			"name": "Vĩnh Lộc A",
			"pre": "Đường"
		}, {
			"id": 9331,
			"name": "Vĩnh Lộc B",
			"pre": "Đường"
		}, {
			"id": 10679,
			"name": "Vĩnh Lộc H",
			"pre": "Đường"
		}, {
			"id": 6535,
			"name": "Võ Hữu Lợi",
			"pre": "Đường"
		}, {
			"id": 5255,
			"name": "Võ Văn Vân",
			"pre": "Đường"
		}, {
			"id": 5246,
			"name": "Vườn Thơm",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2324,
			"name": "13B Conic Phong Phú",
			"lat": 10.71240234375,
			"lng": 106.64177703857422,
			"cats": []
		}, {
			"id": 1890,
			"name": "13D Asia Phú Mỹ",
			"lat": 10.705533027648926,
			"lng": 106.64806365966797,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1359,
			"name": "13E Phong Phú",
			"lat": 10.704967498779297,
			"lng": 106.64633178710937,
			"cats": [40, 41, 48, 52, 325]
		}, {
			"id": 351,
			"name": "584 Tân Kiên",
			"lat": 10.708187103271484,
			"lng": 106.60097503662109,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1441,
			"name": "6B Intresco",
			"lat": 10.72019100189209,
			"lng": 106.686767578125,
			"cats": [40, 41, 52, 59, 325]
		}, {
			"id": 1888,
			"name": "A.View",
			"lat": 10.712925910949707,
			"lng": 106.64617919921875,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2480,
			"name": "An Hạ Lotus",
			"lat": 10.814822196960449,
			"lng": 106.51528167724609,
			"cats": []
		}, {
			"id": 2224,
			"name": "An Hạ Riverside",
			"lat": 10.814717292785645,
			"lng": 106.51764678955078,
			"cats": [40, 41, 48, 50, 51, 52, 55, 57, 283, 324, 325, 326]
		}, {
			"id": 1089,
			"name": "An Lạc Residence",
			"lat": 10.74085521697998,
			"lng": 106.54239654541016,
			"cats": [40, 48, 59, 325]
		}, {
			"id": 1480,
			"name": "An Phú Tây",
			"lat": 10.683333396911621,
			"lng": 106.59999847412109,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 2338,
			"name": "Camellia Garden",
			"lat": 10.717684745788574,
			"lng": 106.66599273681641,
			"cats": []
		}, {
			"id": 686,
			"name": "Conic Đình Khiêm",
			"lat": 10.70933723449707,
			"lng": 106.64176177978516,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 99,
			"name": "Conic Đông Nam Á",
			"lat": 10.709321022033691,
			"lng": 106.64177703857422,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 685,
			"name": "Conic Garden",
			"lat": 10.710923194885254,
			"lng": 106.64198303222656,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1565,
			"name": "Đại Phúc Green Villas",
			"lat": 10.716484069824219,
			"lng": 106.68434906005859,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1695,
			"name": "Dương Hồng Garden House",
			"lat": 10.720993041992187,
			"lng": 106.66110992431641,
			"cats": [40, 48, 59, 324, 325, 326]
		}, {
			"id": 1007,
			"name": "Greenlife 13C",
			"lat": 10.71314525604248,
			"lng": 106.64419555664062,
			"cats": [40, 48, 51, 55, 57, 163, 325]
		}, {
			"id": 766,
			"name": "Happy City",
			"lat": 10.713311195373535,
			"lng": 106.65032958984375,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1385,
			"name": "Him Lam 6A",
			"lat": 10.729124069213867,
			"lng": 106.68711853027344,
			"cats": [40, 41, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 316,
			"name": "Hoàng Tháp Plaza",
			"lat": 10.731473922729492,
			"lng": 106.68936920166016,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 112,
			"name": "Hồng Lĩnh Plaza",
			"lat": 10.729681015014648,
			"lng": 106.68875122070312,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1743,
			"name": "Hồng Quang 13A Nam Sài Gòn",
			"lat": 10.711993217468262,
			"lng": 106.63779449462891,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1069,
			"name": "Investco Green City",
			"lat": 10.728575706481934,
			"lng": 106.68389129638672,
			"cats": [41, 48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 520,
			"name": "KCN Phong Phú",
			"lat": 10.698356628417969,
			"lng": 106.64340209960937,
			"cats": [45, 53]
		}, {
			"id": 1827,
			"name": "KDC 6B T30",
			"lat": 10.714260101318359,
			"lng": 106.68594360351562,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 2000,
			"name": "KDC Ấp 5 Phong Phú",
			"lat": 10.725612640380859,
			"lng": 106.64627075195312,
			"cats": [40, 41, 48, 52, 55, 59, 325]
		}, {
			"id": 1972,
			"name": "KDC Bình Hưng",
			"lat": 10.727128028869629,
			"lng": 106.65199279785156,
			"cats": [40, 52, 59, 325]
		}, {
			"id": 2282,
			"name": "KDC Happy Home One",
			"lat": 10.828125953674316,
			"lng": 106.57223510742187,
			"cats": []
		}, {
			"id": 2134,
			"name": "KDC Rạng Đông",
			"lat": 10.660576820373535,
			"lng": 106.58161163330078,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1492,
			"name": "Khu Biệt Thự Sông Ông Lớn",
			"lat": 10.726951599121094,
			"lng": 106.68867492675781,
			"cats": [40, 52, 325]
		}, {
			"id": 2451,
			"name": "Khu dân cư Thuần Việt",
			"lat": 10.792361259460449,
			"lng": 106.55527496337891,
			"cats": []
		}, {
			"id": 1658,
			"name": "Mansion",
			"lat": 10.707159996032715,
			"lng": 106.64311981201172,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1708,
			"name": "Newlife Bình Chánh",
			"lat": 10.790541648864746,
			"lng": 106.51029968261719,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 1344,
			"name": "Ngọc Cung",
			"lat": 10.719694137573242,
			"lng": 106.65867614746094,
			"cats": [41, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 673,
			"name": "Nguyễn Văn Cừ",
			"lat": 10.730175971984863,
			"lng": 106.69509124755859,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1761,
			"name": "Phi Long 5",
			"lat": 10.721196174621582,
			"lng": 106.66104888916016,
			"cats": [40, 41, 48, 52, 55, 59]
		}, {
			"id": 2373,
			"name": "Sài Gòn Mia",
			"lat": 10.731168746948242,
			"lng": 106.68923950195312,
			"cats": []
		}, {
			"id": 1022,
			"name": "Saigonres",
			"lat": 10.708714485168457,
			"lng": 106.62640380859375,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1356,
			"name": "Sinh Thái Thanh Bình",
			"lat": 10.70353889465332,
			"lng": 106.66720581054687,
			"cats": [40, 44, 48, 53, 325]
		}, {
			"id": 2076,
			"name": "Skyway Residence",
			"lat": 10.710129737854004,
			"lng": 106.64253997802734,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 338,
			"name": "Tân Tạo Plaza 4-5-6",
			"lat": 10.728891372680664,
			"lng": 106.58412933349609,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2462,
			"name": "TĐV Phong Phú",
			"lat": 10.692061424255371,
			"lng": 106.65351104736328,
			"cats": []
		}, {
			"id": 469,
			"name": "Terra Rosa",
			"lat": 10.705985069274902,
			"lng": 106.64362335205078,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 724,
			"name": "Thảo Loan Plaza",
			"lat": 10.730552673339844,
			"lng": 106.68878936767578,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2046,
			"name": "The Easter City",
			"lat": 10.722816467285156,
			"lng": 106.68347930908203,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1830,
			"name": "The Hollywood Tower",
			"lat": 10.7088623046875,
			"lng": 106.6021728515625,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1083,
			"name": "Trung Sơn",
			"lat": 10.730053901672363,
			"lng": 106.68901824951172,
			"cats": [40, 55, 324, 325, 326]
		}, {
			"id": 1954,
			"name": "Việt Phú Garden",
			"lat": 10.694388389587402,
			"lng": 106.63993072509766,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1616,
			"name": "Vĩnh Lộc",
			"lat": 10.776156425476074,
			"lng": 106.56327056884766,
			"cats": [44, 48, 55, 59, 324, 326]
		}, {
			"id": 1596,
			"name": "Vĩnh Lộc A",
			"lat": 10.81915283203125,
			"lng": 106.58454132080078,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2278,
			"name": "Vĩnh Lộc Golden",
			"lat": 10.806092262268066,
			"lng": 106.56735992431641,
			"cats": []
		}]
	}, {
		"id": 65,
		"name": "Bình Tân",
		"pre": "Quận",
		"ward": [{
			"id": 8866,
			"name": "An Lạc",
			"pre": "Phường"
		}, {
			"id": 8867,
			"name": "An Lạc A",
			"pre": "Phường"
		}, {
			"id": 8868,
			"name": "Bình Hưng Hòa",
			"pre": "Phường"
		}, {
			"id": 8869,
			"name": "Bình Hưng Hòa A",
			"pre": "Phường"
		}, {
			"id": 8870,
			"name": "Bình Hưng Hòa B",
			"pre": "Phường"
		}, {
			"id": 8871,
			"name": "Bình Trị Đông",
			"pre": "Phường"
		}, {
			"id": 8872,
			"name": "Bình Trị Đông A",
			"pre": "Phường"
		}, {
			"id": 8873,
			"name": "Bình Trị Đông B",
			"pre": "Phường"
		}, {
			"id": 12010,
			"name": "Tân Tạo",
			"pre": "Phường"
		}, {
			"id": 8875,
			"name": "Tân Tạo A",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 5864,
			"name": "10A",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 7426,
			"name": "11A",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 8209,
			"name": "13A",
			"pre": "Đường"
		}, {
			"id": 8309,
			"name": "13B",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 5780,
			"name": "14A",
			"pre": "Đường"
		}, {
			"id": 6573,
			"name": "14B",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 6805,
			"name": "16A",
			"pre": "Đường"
		}, {
			"id": 10158,
			"name": "16B",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 8326,
			"name": "173",
			"pre": "Đường"
		}, {
			"id": 8169,
			"name": "17A",
			"pre": "Đường"
		}, {
			"id": 7978,
			"name": "17B",
			"pre": "Đường"
		}, {
			"id": 8052,
			"name": "17C",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 2852,
			"name": "18A",
			"pre": "Đường"
		}, {
			"id": 7111,
			"name": "18B",
			"pre": "Đường"
		}, {
			"id": 7612,
			"name": "18D",
			"pre": "Đường"
		}, {
			"id": 7102,
			"name": "18E",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 2171,
			"name": "19/5",
			"pre": "Đường"
		}, {
			"id": 7135,
			"name": "19A",
			"pre": "Đường"
		}, {
			"id": 9657,
			"name": "19B",
			"pre": "Đường"
		}, {
			"id": 7503,
			"name": "19C",
			"pre": "Đường"
		}, {
			"id": 10835,
			"name": "19D",
			"pre": "Đường"
		}, {
			"id": 6135,
			"name": "19E",
			"pre": "Đường"
		}, {
			"id": 7755,
			"name": "1A",
			"pre": "Đường"
		}, {
			"id": 7702,
			"name": "1B",
			"pre": "Đường"
		}, {
			"id": 7854,
			"name": "1C",
			"pre": "Đường"
		}, {
			"id": 10647,
			"name": "1D",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 7069,
			"name": "21A",
			"pre": "Đường"
		}, {
			"id": 772,
			"name": "21B",
			"pre": "Đường"
		}, {
			"id": 8655,
			"name": "21C",
			"pre": "Đường"
		}, {
			"id": 6453,
			"name": "21E",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 4350,
			"name": "23A",
			"pre": "Đường"
		}, {
			"id": 702,
			"name": "23B",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 6829,
			"name": "24A",
			"pre": "Đường"
		}, {
			"id": 8348,
			"name": "24B",
			"pre": "Đường"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 4281,
			"name": "25A",
			"pre": "Đường"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 3778,
			"name": "26/3",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 5632,
			"name": "27/3",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 10825,
			"name": "28A",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 4361,
			"name": "2A",
			"pre": "Đường"
		}, {
			"id": 10382,
			"name": "2B",
			"pre": "Đường"
		}, {
			"id": 9323,
			"name": "2C",
			"pre": "Đường"
		}, {
			"id": 8373,
			"name": "2D",
			"pre": "Đường"
		}, {
			"id": 9416,
			"name": "2E",
			"pre": "Đường"
		}, {
			"id": 9624,
			"name": "2F",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 4416,
			"name": "31",
			"pre": "Đường"
		}, {
			"id": 9322,
			"name": "31A",
			"pre": "Đường"
		}, {
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 9457,
			"name": "32A",
			"pre": "Đường"
		}, {
			"id": 8328,
			"name": "32B",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 7386,
			"name": "33A",
			"pre": "Đường"
		}, {
			"id": 10190,
			"name": "33B",
			"pre": "Đường"
		}, {
			"id": 2876,
			"name": "34",
			"pre": "Đường"
		}, {
			"id": 8120,
			"name": "34A",
			"pre": "Đường"
		}, {
			"id": 9064,
			"name": "34B",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 2167,
			"name": "38",
			"pre": "Đường"
		}, {
			"id": 2520,
			"name": "39",
			"pre": "Đường"
		}, {
			"id": 4413,
			"name": "3A",
			"pre": "Đường"
		}, {
			"id": 8458,
			"name": "3B",
			"pre": "Đường"
		}, {
			"id": 9520,
			"name": "3C",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4672,
			"name": "40",
			"pre": "Đường"
		}, {
			"id": 7979,
			"name": "40B",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 2885,
			"name": "42",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 3061,
			"name": "44",
			"pre": "Đường"
		}, {
			"id": 2262,
			"name": "46",
			"pre": "Đường"
		}, {
			"id": 7790,
			"name": "46A",
			"pre": "Đường"
		}, {
			"id": 7803,
			"name": "46B",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 2894,
			"name": "48",
			"pre": "Đường"
		}, {
			"id": 10136,
			"name": "48A",
			"pre": "Đường"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 7012,
			"name": "49A",
			"pre": "Đường"
		}, {
			"id": 6964,
			"name": "49B",
			"pre": "Đường"
		}, {
			"id": 5263,
			"name": "4A",
			"pre": "Đường"
		}, {
			"id": 2450,
			"name": "4B",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 10971,
			"name": "50A",
			"pre": "Đường"
		}, {
			"id": 8556,
			"name": "50B",
			"pre": "Đường"
		}, {
			"id": 10177,
			"name": "50C",
			"pre": "Đường"
		}, {
			"id": 9727,
			"name": "50D",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 2898,
			"name": "52",
			"pre": "Phố"
		}, {
			"id": 4472,
			"name": "53",
			"pre": "Đường"
		}, {
			"id": 9305,
			"name": "53A",
			"pre": "Đường"
		}, {
			"id": 10126,
			"name": "53C",
			"pre": "Đường"
		}, {
			"id": 2900,
			"name": "54",
			"pre": "Đường"
		}, {
			"id": 2572,
			"name": "55",
			"pre": "Đường"
		}, {
			"id": 9009,
			"name": "55A",
			"pre": "Đường"
		}, {
			"id": 6015,
			"name": "57",
			"pre": "Đường"
		}, {
			"id": 9367,
			"name": "57A",
			"pre": "Đường"
		}, {
			"id": 4359,
			"name": "5A",
			"pre": "Đường"
		}, {
			"id": 7222,
			"name": "5B",
			"pre": "Đường"
		}, {
			"id": 7037,
			"name": "5C",
			"pre": "Đường"
		}, {
			"id": 7104,
			"name": "5D",
			"pre": "Đường"
		}, {
			"id": 8779,
			"name": "5E",
			"pre": "Đường"
		}, {
			"id": 8651,
			"name": "5F",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 2252,
			"name": "61",
			"pre": "Đường"
		}, {
			"id": 2451,
			"name": "6A",
			"pre": "Đường"
		}, {
			"id": 6421,
			"name": "6B",
			"pre": "Đường"
		}, {
			"id": 7185,
			"name": "6C",
			"pre": "Đường"
		}, {
			"id": 7651,
			"name": "6D",
			"pre": "Đường"
		}, {
			"id": 7798,
			"name": "6E",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 8220,
			"name": "7A",
			"pre": "Đường"
		}, {
			"id": 2378,
			"name": "7B",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 10640,
			"name": "822",
			"pre": "Đường"
		}, {
			"id": 5243,
			"name": "8B",
			"pre": "Đường"
		}, {
			"id": 6952,
			"name": "8C",
			"pre": "Đường"
		}, {
			"id": 10590,
			"name": "8D",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 5844,
			"name": "9A",
			"pre": "Đường"
		}, {
			"id": 2770,
			"name": "A3",
			"pre": "Đường"
		}, {
			"id": 2772,
			"name": "A5",
			"pre": "Đường"
		}, {
			"id": 9352,
			"name": "A8",
			"pre": "Đường"
		}, {
			"id": 7945,
			"name": "A9",
			"pre": "Đường"
		}, {
			"id": 6000,
			"name": "An Dương Vương",
			"pre": "Đường"
		}, {
			"id": 6009,
			"name": "Ao Đôi",
			"pre": "Đường"
		}, {
			"id": 4369,
			"name": "Ấp Chiến Lược",
			"pre": "Đường"
		}, {
			"id": 778,
			"name": "Âu Cơ",
			"pre": "Đường"
		}, {
			"id": 1291,
			"name": "Bà Hom",
			"pre": "Đường"
		}, {
			"id": 7022,
			"name": "Bến Lội",
			"pre": "Đường"
		}, {
			"id": 8266,
			"name": "Bia Truyền Thống",
			"pre": "Đường"
		}, {
			"id": 7482,
			"name": "Bình Hưng Hòa",
			"pre": "Đường"
		}, {
			"id": 7487,
			"name": "Bình Hưng Hòa A",
			"pre": "Đường"
		}, {
			"id": 3203,
			"name": "Bình Long",
			"pre": "Đường"
		}, {
			"id": 5626,
			"name": "Bình Thành",
			"pre": "Đường"
		}, {
			"id": 9302,
			"name": "Bình Trị Đông",
			"pre": "Đường"
		}, {
			"id": 4371,
			"name": "Bờ Tuyến",
			"pre": "Đường"
		}, {
			"id": 1927,
			"name": "Bùi Dương Lịch",
			"pre": "Đường"
		}, {
			"id": 4376,
			"name": "Bùi Hữu Diện",
			"pre": "Đường"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 4380,
			"name": "Bùi Tư Toàn",
			"pre": "Đường"
		}, {
			"id": 3072,
			"name": "C2",
			"pre": "Đường"
		}, {
			"id": 3073,
			"name": "C3",
			"pre": "Đường"
		}, {
			"id": 6022,
			"name": "Cầu Kinh",
			"pre": "Đường"
		}, {
			"id": 6292,
			"name": "Cây Cám",
			"pre": "Đường"
		}, {
			"id": 5747,
			"name": "Chiến Lược",
			"pre": "Đường"
		}, {
			"id": 3192,
			"name": "CN11",
			"pre": "Đường"
		}, {
			"id": 5631,
			"name": "Cống Lở",
			"pre": "Đường"
		}, {
			"id": 1081,
			"name": "Cửu Long",
			"pre": "Đường"
		}, {
			"id": 3221,
			"name": "D13",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 6799,
			"name": "D7",
			"pre": "Đường"
		}, {
			"id": 5638,
			"name": "Đại Lộ Đông Tây",
			"pre": "Đường"
		}, {
			"id": 7652,
			"name": "Đại Phú",
			"pre": "Đường"
		}, {
			"id": 5556,
			"name": "Đất Mới",
			"pre": "Đường"
		}, {
			"id": 5657,
			"name": "Đình Nghi Xuân",
			"pre": "Đường"
		}, {
			"id": 5629,
			"name": "Đình Tân Khai",
			"pre": "Đường"
		}, {
			"id": 4378,
			"name": "Đỗ Năng Tế",
			"pre": "Đường"
		}, {
			"id": 8513,
			"name": "Đoàn Phú Tứ",
			"pre": "Đường"
		}, {
			"id": 4372,
			"name": "Dương Bá Cung",
			"pre": "Đường"
		}, {
			"id": 6258,
			"name": "Dương Tự Quán",
			"pre": "Đường"
		}, {
			"id": 7901,
			"name": "G1",
			"pre": "Đường"
		}, {
			"id": 9909,
			"name": "G10",
			"pre": "Đường"
		}, {
			"id": 9691,
			"name": "G14",
			"pre": "Đường"
		}, {
			"id": 8217,
			"name": "G3",
			"pre": "Đường"
		}, {
			"id": 2975,
			"name": "G5",
			"pre": "Đường"
		}, {
			"id": 8354,
			"name": "G7",
			"pre": "Đường"
		}, {
			"id": 8796,
			"name": "G8",
			"pre": "Đường"
		}, {
			"id": 10403,
			"name": "G9",
			"pre": "Đường"
		}, {
			"id": 6196,
			"name": "Gia Phú",
			"pre": "Đường"
		}, {
			"id": 6427,
			"name": "Gò Mây",
			"pre": "Đường"
		}, {
			"id": 5908,
			"name": "Gò Xoài",
			"pre": "Đường"
		}, {
			"id": 1302,
			"name": "Hồ Học Lãm",
			"pre": "Đường"
		}, {
			"id": 4357,
			"name": "Hồ Văn Long",
			"pre": "Đường"
		}, {
			"id": 965,
			"name": "Hòa Bình",
			"pre": "Đường"
		}, {
			"id": 4373,
			"name": "Hoàng Văn Hợp",
			"pre": "Đường"
		}, {
			"id": 7701,
			"name": "Hương lộ  80",
			"pre": "Đường"
		}, {
			"id": 4970,
			"name": "Hương lộ 17A",
			"pre": "Đường"
		}, {
			"id": 7647,
			"name": "Hương lộ 2",
			"pre": "Đường"
		}, {
			"id": 7726,
			"name": "Hương Lộ 3",
			"pre": "Đường"
		}, {
			"id": 7624,
			"name": "Hương lộ 5",
			"pre": "Đường"
		}, {
			"id": 4585,
			"name": "Huyện lộ 24B",
			"pre": "Đường"
		}, {
			"id": 4664,
			"name": "Huyện lộ 48B",
			"pre": "Đường"
		}, {
			"id": 1808,
			"name": "Huỳnh Văn Nghệ",
			"pre": "Đường"
		}, {
			"id": 10384,
			"name": "Kênh C",
			"pre": "Đường"
		}, {
			"id": 6044,
			"name": "Kênh Nước Đen",
			"pre": "Đường"
		}, {
			"id": 6547,
			"name": "Khiếu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 3676,
			"name": "Kinh Dương Vương",
			"pre": "Đường"
		}, {
			"id": 4379,
			"name": "Lâm Hoành",
			"pre": "Đường"
		}, {
			"id": 3415,
			"name": "Lê Cơ",
			"pre": "Đường"
		}, {
			"id": 6782,
			"name": "Lê Công Phép",
			"pre": "Đường"
		}, {
			"id": 3463,
			"name": "Lê Đình Cẩn",
			"pre": "Đường"
		}, {
			"id": 3445,
			"name": "Lê Đình Dương",
			"pre": "Đường"
		}, {
			"id": 4354,
			"name": "Lê Ngung",
			"pre": "Đường"
		}, {
			"id": 4383,
			"name": "Lê Tấn Bê",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 4367,
			"name": "Lê Văn Quới",
			"pre": "Đường"
		}, {
			"id": 7190,
			"name": "Lê Văn Tám",
			"pre": "Đường"
		}, {
			"id": 6335,
			"name": "Liên Khu 10",
			"pre": "Đường"
		}, {
			"id": 7703,
			"name": "Liên khu 10-11",
			"pre": "Đường"
		}, {
			"id": 7632,
			"name": "Liên khu 11",
			"pre": "Đường"
		}, {
			"id": 6921,
			"name": "Liên Khu 1-6",
			"pre": "Đường"
		}, {
			"id": 6960,
			"name": "Liên Khu 16-18",
			"pre": "Đường"
		}, {
			"id": 5630,
			"name": "Liên Khu 2-10",
			"pre": "Đường"
		}, {
			"id": 6070,
			"name": "Liên Khu 2-5",
			"pre": "Đường"
		}, {
			"id": 10309,
			"name": "Liên Khu 2-6",
			"pre": "Đường"
		}, {
			"id": 6243,
			"name": "Liên khu 4-5",
			"pre": "Đường"
		}, {
			"id": 5813,
			"name": "Liên Khu 5 - 6",
			"pre": "Đường"
		}, {
			"id": 8327,
			"name": "Liên Khu 5-11-12",
			"pre": "Đường"
		}, {
			"id": 7457,
			"name": "Liên khu 8-9",
			"pre": "Đường"
		}, {
			"id": 5641,
			"name": "Liên Khu 89",
			"pre": "Đường"
		}, {
			"id": 6021,
			"name": "Lộ Tẻ",
			"pre": "Đường"
		}, {
			"id": 6260,
			"name": "Lô Tư",
			"pre": "Đường"
		}, {
			"id": 3274,
			"name": "Lũy Bán Bích",
			"pre": "Đường"
		}, {
			"id": 4261,
			"name": "Lý Chiêu Hoàng",
			"pre": "Đường"
		}, {
			"id": 1449,
			"name": "Lý Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 4363,
			"name": "M1",
			"pre": "Đường"
		}, {
			"id": 10211,
			"name": "M10",
			"pre": "Đường"
		}, {
			"id": 4366,
			"name": "M12",
			"pre": "Đường"
		}, {
			"id": 4364,
			"name": "M3",
			"pre": "Đường"
		}, {
			"id": 4365,
			"name": "M4",
			"pre": "Đường"
		}, {
			"id": 10380,
			"name": "M5",
			"pre": "Đường"
		}, {
			"id": 10540,
			"name": "M6",
			"pre": "Đường"
		}, {
			"id": 8661,
			"name": "M8",
			"pre": "Đường"
		}, {
			"id": 897,
			"name": "Mã Lò",
			"pre": "Đường"
		}, {
			"id": 6097,
			"name": "Miếu Bình Đông",
			"pre": "Đường"
		}, {
			"id": 7991,
			"name": "Miếu Gò Đông",
			"pre": "Đường"
		}, {
			"id": 5899,
			"name": "Miếu Gò Xoài",
			"pre": "Đường"
		}, {
			"id": 3599,
			"name": "N1",
			"pre": "Đường"
		}, {
			"id": 1984,
			"name": "N2",
			"pre": "Đường"
		}, {
			"id": 3019,
			"name": "N3",
			"pre": "Đường"
		}, {
			"id": 5977,
			"name": "Nguyễn Cửu Phú",
			"pre": "Đường"
		}, {
			"id": 4943,
			"name": "Nguyễn Hiến Lê",
			"pre": "Đường"
		}, {
			"id": 2655,
			"name": "Nguyễn Hới",
			"pre": "Đường"
		}, {
			"id": 2946,
			"name": "Nguyễn Hữu Trí",
			"pre": "Đường"
		}, {
			"id": 4382,
			"name": "Nguyễn Quý Yêm",
			"pre": "Đường"
		}, {
			"id": 538,
			"name": "Nguyễn Quyền",
			"pre": "Đường"
		}, {
			"id": 9094,
			"name": "Nguyễn Thị Nhạn",
			"pre": "Đường"
		}, {
			"id": 4360,
			"name": "Nguyễn Thị Tú",
			"pre": "Đường"
		}, {
			"id": 4375,
			"name": "Nguyễn Thức Đường",
			"pre": "Đường"
		}, {
			"id": 4326,
			"name": "Nguyễn Thức Tự",
			"pre": "Đường"
		}, {
			"id": 5738,
			"name": "Nguyễn Triệu Luật",
			"pre": "Đường"
		}, {
			"id": 8046,
			"name": "Nguyễn Triệu Lực",
			"pre": "Đường"
		}, {
			"id": 4377,
			"name": "Nguyễn Trọng Trí",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 10646,
			"name": "Nguyễn Văn Cự",
			"pre": "Đường"
		}, {
			"id": 4374,
			"name": "Phạm Bành",
			"pre": "Đường"
		}, {
			"id": 6733,
			"name": "Phạm Đăng Giản",
			"pre": "Đường"
		}, {
			"id": 7545,
			"name": "Phạm Đăng Giảng",
			"pre": "Đường"
		}, {
			"id": 3364,
			"name": "Phạm Văn Hai",
			"pre": "Đường"
		}, {
			"id": 4127,
			"name": "Phan Anh",
			"pre": "Đường"
		}, {
			"id": 6428,
			"name": "Phan Cát Tựu",
			"pre": "Đường"
		}, {
			"id": 4362,
			"name": "Phan Đăng Giảng",
			"pre": "Đường"
		}, {
			"id": 1881,
			"name": "Phan Đình Thông",
			"pre": "Đường"
		}, {
			"id": 382,
			"name": "Phan Văn Trị",
			"pre": "Đường"
		}, {
			"id": 6030,
			"name": "Phùng Tá Chu",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 2358,
			"name": "Quốc lộ 1C",
			"pre": "Đường"
		}, {
			"id": 4948,
			"name": "Quốc lộ 2B",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 5978,
			"name": "Quốc lộ 46",
			"pre": "Đường"
		}, {
			"id": 1761,
			"name": "Quốc lộ 80",
			"pre": "Đường"
		}, {
			"id": 3391,
			"name": "Quốc lộ 8A",
			"pre": "Đường"
		}, {
			"id": 9007,
			"name": "Sinco",
			"pre": "Đường"
		}, {
			"id": 3229,
			"name": "Sơn Kỳ",
			"pre": "Đường"
		}, {
			"id": 8699,
			"name": "Sông Suối",
			"pre": "Đường"
		}, {
			"id": 6477,
			"name": "Tạ Mỹ Duật",
			"pre": "Đường"
		}, {
			"id": 4256,
			"name": "Tân Hòa Đông",
			"pre": "Đường"
		}, {
			"id": 3226,
			"name": "Tân Kỳ Tân Quý",
			"pre": "Đường"
		}, {
			"id": 7293,
			"name": "Tân Thọ",
			"pre": "Đường"
		}, {
			"id": 5960,
			"name": "Tập Đoàn 6B",
			"pre": "Đường"
		}, {
			"id": 4358,
			"name": "Tây Lân",
			"pre": "Đường"
		}, {
			"id": 5620,
			"name": "Tên Lửa",
			"pre": "Đường"
		}, {
			"id": 7649,
			"name": "Tỉnh Lộ 10",
			"pre": "Đường"
		}, {
			"id": 8650,
			"name": "Tỉnh lộ 10B",
			"pre": "Đường"
		}, {
			"id": 1903,
			"name": "Tỉnh lộ 7A",
			"pre": "Đường"
		}, {
			"id": 6951,
			"name": "Tỉnh lộ 830",
			"pre": "Đường"
		}, {
			"id": 553,
			"name": "Trần Đại Nghĩa",
			"pre": "Phố"
		}, {
			"id": 10711,
			"name": "Trần Hải Phụng",
			"pre": "Đường"
		}, {
			"id": 4085,
			"name": "Trần Thanh Mại",
			"pre": "Đường"
		}, {
			"id": 503,
			"name": "Trần Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 4370,
			"name": "Trần Văn Giàu",
			"pre": "Đường"
		}, {
			"id": 4368,
			"name": "Trương Phước Phan",
			"pre": "Đường"
		}, {
			"id": 8205,
			"name": "Trương Quốc Phan",
			"pre": "Đường"
		}, {
			"id": 1417,
			"name": "Vành Đai Trong",
			"pre": "Đường"
		}, {
			"id": 6864,
			"name": "Vĩnh Lộc",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 5255,
			"name": "Võ Văn Vân",
			"pre": "Đường"
		}, {
			"id": 329,
			"name": "Vũ Hữu",
			"pre": "Phố"
		}, {
			"id": 8386,
			"name": "Vương Văn Huống",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1685,
			"name": "8X Rainbow",
			"lat": 10.778969764709473,
			"lng": 106.61983489990234,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2384,
			"name": "Amazing City",
			"lat": 10.729963302612305,
			"lng": 106.55363464355469,
			"cats": []
		}, {
			"id": 1853,
			"name": "An Lạc Plaza",
			"lat": 10.751955032348633,
			"lng": 106.61994171142578,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2041,
			"name": "Angia Star",
			"lat": 10.763057708740234,
			"lng": 106.59181213378906,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 665,
			"name": "Bắc Lương Bèo",
			"lat": 10.750173568725586,
			"lng": 106.58804321289062,
			"cats": [40, 48, 55, 59, 324, 326]
		}, {
			"id": 682,
			"name": "Da Sà",
			"lat": 10.755867958068848,
			"lng": 106.61878967285156,
			"cats": [55, 324, 326]
		}, {
			"id": 785,
			"name": "Đất Việt",
			"lat": 10.805675506591797,
			"lng": 106.60506439208984,
			"cats": [40, 325]
		}, {
			"id": 1105,
			"name": "EHome 3",
			"lat": 10.714434623718262,
			"lng": 106.61582183837891,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 868,
			"name": "Everville",
			"lat": 10.754988670349121,
			"lng": 106.58432006835937,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1993,
			"name": "Full House",
			"lat": 10.752267837524414,
			"lng": 106.60643005371094,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2315,
			"name": "GoHome Dream Residence",
			"lat": 10.813213348388672,
			"lng": 106.59317016601562,
			"cats": []
		}, {
			"id": 317,
			"name": "Green Park Bình Tân",
			"lat": 10.807792663574219,
			"lng": 106.59342956542969,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 439,
			"name": "Hai Thành Tên Lửa",
			"lat": 10.740092277526855,
			"lng": 106.60467529296875,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 762,
			"name": "Hoàng Kim Thế Gia",
			"lat": 10.772710800170898,
			"lng": 106.61473846435547,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 709,
			"name": "Hồng Tân",
			"lat": 10.765216827392578,
			"lng": 106.59276580810547,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2283,
			"name": "HQC 35 Hồ Học Lãm",
			"lat": 10.735742568969727,
			"lng": 106.60289001464844,
			"cats": []
		}, {
			"id": 2024,
			"name": "KCN Tân Tạo",
			"lat": 10.737069129943848,
			"lng": 106.59568786621094,
			"cats": [45, 53]
		}, {
			"id": 356,
			"name": "Lê Thành",
			"lat": 10.718202590942383,
			"lng": 106.6180419921875,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1297,
			"name": "Lê Thành Tân Tạo",
			"lat": 10.763973236083984,
			"lng": 106.57930755615234,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1141,
			"name": "Lê Thành Twin Towers",
			"lat": 10.766373634338379,
			"lng": 106.60376739501953,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1405,
			"name": "Long Phụng Apartment",
			"lat": 10.753094673156738,
			"lng": 106.59164428710937,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1788,
			"name": "Long Phụng Residence",
			"lat": 10.748139381408691,
			"lng": 106.62113189697266,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1622,
			"name": "Lý Chiêu Hoàng",
			"lat": 10.736235618591309,
			"lng": 106.61863708496094,
			"cats": [55, 324, 326]
		}, {
			"id": 1093,
			"name": "Manhattan City",
			"lat": 10.719304084777832,
			"lng": 106.60790252685547,
			"cats": [40, 41, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 1389,
			"name": "Nam An Apartment",
			"lat": 10.808354377746582,
			"lng": 106.60463714599609,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1347,
			"name": "Nam Hùng Vương",
			"lat": 10.725476264953613,
			"lng": 106.61414337158203,
			"cats": [40, 52, 325]
		}, {
			"id": 1843,
			"name": "Nguyễn Quyền Plaza",
			"lat": 10.772012710571289,
			"lng": 106.62179565429687,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2011,
			"name": "Nhà phố Lê Thành An Lạc",
			"lat": 10.725152015686035,
			"lng": 106.60549163818359,
			"cats": [40, 51, 52, 163]
		}, {
			"id": 337,
			"name": "Nhất Lan",
			"lat": 10.754416465759277,
			"lng": 106.59355926513672,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1772,
			"name": "Nhất Lan 3",
			"lat": 10.750003814697266,
			"lng": 106.59193420410156,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 843,
			"name": "Saigon West Villas",
			"lat": 10.743564605712891,
			"lng": 106.61312866210937,
			"cats": [40, 44, 325]
		}, {
			"id": 1923,
			"name": "Smile Home",
			"lat": 10.82432746887207,
			"lng": 106.60120391845703,
			"cats": [40, 48, 325]
		}, {
			"id": 1098,
			"name": "Tân Mai",
			"lat": 10.762338638305664,
			"lng": 106.59103393554687,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1737,
			"name": "Tên Lửa Residence",
			"lat": 10.750124931335449,
			"lng": 106.58421325683594,
			"cats": [40, 48, 55, 59, 325]
		}, {
			"id": 1878,
			"name": "Tiên Sa Villas",
			"lat": 10.790324211120605,
			"lng": 106.59862518310547,
			"cats": [40, 44, 59, 325]
		}, {
			"id": 738,
			"name": "Triều An Tower",
			"lat": 10.731200218200684,
			"lng": 106.61310577392578,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1964,
			"name": "Vĩnh Tường - Tân Tạo",
			"lat": 10.750463485717773,
			"lng": 106.59058380126953,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1521,
			"name": "Welife City",
			"lat": 10.807835578918457,
			"lng": 106.5931396484375,
			"cats": [48, 50, 57, 59, 324, 325, 326]
		}, {
			"id": 2265,
			"name": "Western Dragon",
			"lat": 10.751804351806641,
			"lng": 106.62033843994141,
			"cats": []
		}]
	}, {
		"id": 66,
		"name": "Bình Thạnh",
		"pre": "Quận",
		"ward": [{
			"id": 8881,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8889,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8890,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8891,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8892,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8893,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 8894,
			"name": "17",
			"pre": "Phường"
		}, {
			"id": 8895,
			"name": "19",
			"pre": "Phường"
		}, {
			"id": 8883,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 8897,
			"name": "21",
			"pre": "Phường"
		}, {
			"id": 8898,
			"name": "22",
			"pre": "Phường"
		}, {
			"id": 8899,
			"name": "24",
			"pre": "Phường"
		}, {
			"id": 8900,
			"name": "25",
			"pre": "Phường"
		}, {
			"id": 8901,
			"name": "26",
			"pre": "Phường"
		}, {
			"id": 8902,
			"name": "27",
			"pre": "Phường"
		}, {
			"id": 8903,
			"name": "28",
			"pre": "Phường"
		}, {
			"id": 8884,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8885,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8886,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8887,
			"name": "7",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 10941,
			"name": "233",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 1718,
			"name": "30/4",
			"pre": "Đường"
		}, {
			"id": 8055,
			"name": "304",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 8599,
			"name": "82",
			"pre": "Đường"
		}, {
			"id": 5827,
			"name": "An Thượng 6",
			"pre": "Đường"
		}, {
			"id": 527,
			"name": "Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 5865,
			"name": "Bình Hòa",
			"pre": "Đường"
		}, {
			"id": 8415,
			"name": "Bình Lãnh",
			"pre": "Đường"
		}, {
			"id": 4463,
			"name": "Bình Lợi",
			"pre": "Đường"
		}, {
			"id": 4599,
			"name": "Bình Quới",
			"pre": "Đường"
		}, {
			"id": 4574,
			"name": "Bùi Đình Túy",
			"pre": "Đường"
		}, {
			"id": 1199,
			"name": "Bùi Hữu Nghĩa",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 7923,
			"name": "Cầu Ván",
			"pre": "Đường"
		}, {
			"id": 802,
			"name": "Chu Văn An",
			"pre": "Đường"
		}, {
			"id": 8421,
			"name": "Công Trường Tự Do",
			"pre": "Đường"
		}, {
			"id": 1081,
			"name": "Cửu Long",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 4601,
			"name": "D2",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 2600,
			"name": "D5",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 5854,
			"name": "Diên Hồng",
			"pre": "Đường"
		}, {
			"id": 2703,
			"name": "Đinh Bộ Lĩnh",
			"pre": "Đường"
		}, {
			"id": 5829,
			"name": "Đình Đông",
			"pre": "Đường"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 1652,
			"name": "Đống Đa",
			"pre": "Đường"
		}, {
			"id": 7676,
			"name": "Đống Đa 1",
			"pre": "Đường"
		}, {
			"id": 6747,
			"name": "Dương Vũ Tùng",
			"pre": "Đường"
		}, {
			"id": 8472,
			"name": "Hàng Xanh",
			"pre": "Đường"
		}, {
			"id": 522,
			"name": "Hồ Xuân Hương",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 337,
			"name": "Hoàng Văn Thụ",
			"pre": "Đường"
		}, {
			"id": 1053,
			"name": "Hồng Bàng",
			"pre": "Đường"
		}, {
			"id": 4569,
			"name": "Huỳnh Đình Hai",
			"pre": "Đường"
		}, {
			"id": 1283,
			"name": "Huỳnh Mẫn Đạt",
			"pre": "Đường"
		}, {
			"id": 1603,
			"name": "Huỳnh Tịnh Của",
			"pre": "Đường"
		}, {
			"id": 1600,
			"name": "Lam Sơn",
			"pre": "Đường"
		}, {
			"id": 1530,
			"name": "Lê Quang Định",
			"pre": "Đường"
		}, {
			"id": 379,
			"name": "Lê Trực",
			"pre": "Đường"
		}, {
			"id": 821,
			"name": "Lê Văn Sỹ",
			"pre": "Đường"
		}, {
			"id": 204,
			"name": "Lương Ngọc Quyến",
			"pre": "Đường"
		}, {
			"id": 5682,
			"name": "Lương Sử C",
			"pre": "Phố"
		}, {
			"id": 787,
			"name": "Mai Xuân Thưởng",
			"pre": "Đường"
		}, {
			"id": 4618,
			"name": "Mê Linh",
			"pre": "Đường"
		}, {
			"id": 5676,
			"name": "Miếu Nổi",
			"pre": "Đường"
		}, {
			"id": 977,
			"name": "Ngô Đức Kế",
			"pre": "Đường"
		}, {
			"id": 6669,
			"name": "Ngô Nhơn Tịnh",
			"pre": "Đường"
		}, {
			"id": 395,
			"name": "Ngô Tất Tố",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 560,
			"name": "Nguyễn Bỉnh Khiêm",
			"pre": "Đường"
		}, {
			"id": 756,
			"name": "Nguyễn Công Hoan",
			"pre": "Đường"
		}, {
			"id": 517,
			"name": "Nguyễn Công Trứ",
			"pre": "Đường"
		}, {
			"id": 1056,
			"name": "Nguyễn Cư Trinh",
			"pre": "Đường"
		}, {
			"id": 4638,
			"name": "Nguyễn Cửu Vân",
			"pre": "Đường"
		}, {
			"id": 4049,
			"name": "Nguyễn Duy",
			"pre": "Đường"
		}, {
			"id": 5826,
			"name": "Nguyễn Hành",
			"pre": "Đường"
		}, {
			"id": 433,
			"name": "Nguyên Hồng",
			"pre": "Đường"
		}, {
			"id": 2656,
			"name": "Nguyễn Hữu Cảnh",
			"pre": "Đường"
		}, {
			"id": 1054,
			"name": "Nguyễn Hữu Cầu",
			"pre": "Đường"
		}, {
			"id": 6935,
			"name": "Nguyễn Hữu Thoại",
			"pre": "Đường"
		}, {
			"id": 4047,
			"name": "Nguyễn Huy Lượng",
			"pre": "Đường"
		}, {
			"id": 315,
			"name": "Nguyễn Huy Tưởng",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 1131,
			"name": "Nguyễn Lâm",
			"pre": "Đường"
		}, {
			"id": 4635,
			"name": "Nguyễn Ngọc Phương",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 147,
			"name": "Nguyễn Thiện Thuật",
			"pre": "Phố"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 725,
			"name": "Nguyễn Trung Trực",
			"pre": "Đường"
		}, {
			"id": 841,
			"name": "Nguyễn Văn Đậu",
			"pre": "Đường"
		}, {
			"id": 4613,
			"name": "Nguyễn Văn Lạc",
			"pre": "Đường"
		}, {
			"id": 146,
			"name": "Nguyễn Xí",
			"pre": "Phố"
		}, {
			"id": 4111,
			"name": "Nguyễn Xuân Ôn",
			"pre": "Đường"
		}, {
			"id": 2659,
			"name": "Nơ Trang Long",
			"pre": "Đường"
		}, {
			"id": 212,
			"name": "Phạm Ngũ Lão",
			"pre": "Đường"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 987,
			"name": "Phạm Viết Chánh",
			"pre": "Đường"
		}, {
			"id": 4127,
			"name": "Phan Anh",
			"pre": "Đường"
		}, {
			"id": 126,
			"name": "Phan Bội Châu",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 741,
			"name": "Phan Đăng Lưu",
			"pre": "Phố"
		}, {
			"id": 6830,
			"name": "Phan Huy Ôn",
			"pre": "Đường"
		}, {
			"id": 4259,
			"name": "Phan Văn Hân",
			"pre": "Đường"
		}, {
			"id": 382,
			"name": "Phan Văn Trị",
			"pre": "Đường"
		}, {
			"id": 991,
			"name": "Phan Xích Long",
			"pre": "Đường"
		}, {
			"id": 576,
			"name": "Phó Đức Chính",
			"pre": "Phố"
		}, {
			"id": 4612,
			"name": "Phú Mỹ",
			"pre": "Đường"
		}, {
			"id": 5825,
			"name": "Quách Văn Tuấn",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 3811,
			"name": "Tầm Vu",
			"pre": "Đường"
		}, {
			"id": 1184,
			"name": "Tăng Bạt Hổ",
			"pre": "Đường"
		}, {
			"id": 4595,
			"name": "Thanh Đa",
			"pre": "Đường"
		}, {
			"id": 1745,
			"name": "Thích Quảng Đức",
			"pre": "Đường"
		}, {
			"id": 5828,
			"name": "Tiền Đức",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 4528,
			"name": "Trần Kế Xương",
			"pre": "Đường"
		}, {
			"id": 5945,
			"name": "Trần Quang Định",
			"pre": "Đường"
		}, {
			"id": 386,
			"name": "Trần Quý Cáp",
			"pre": "Đường"
		}, {
			"id": 4084,
			"name": "Trần Văn Kỷ",
			"pre": "Đường"
		}, {
			"id": 390,
			"name": "Trịnh Hoài Đức",
			"pre": "Đường"
		}, {
			"id": 6937,
			"name": "Trục",
			"pre": "Đường"
		}, {
			"id": 8087,
			"name": "Trục 13",
			"pre": "Đường"
		}, {
			"id": 7390,
			"name": "Trục 20",
			"pre": "Đường"
		}, {
			"id": 7391,
			"name": "Trục 30",
			"pre": "Đường"
		}, {
			"id": 2474,
			"name": "Trương Đăng Quế",
			"pre": "Đường"
		}, {
			"id": 1485,
			"name": "Trường Sa",
			"pre": "Đường"
		}, {
			"id": 2289,
			"name": "Ung Văn Khiêm",
			"pre": "Đường"
		}, {
			"id": 505,
			"name": "Vạn Kiếp",
			"pre": "Phố"
		}, {
			"id": 3940,
			"name": "Võ Duy Ninh",
			"pre": "Đường"
		}, {
			"id": 1234,
			"name": "Võ Trường Toản",
			"pre": "Đường"
		}, {
			"id": 4532,
			"name": "Vũ Huy Tấn",
			"pre": "Đường"
		}, {
			"id": 388,
			"name": "Vũ Ngọc Phan",
			"pre": "Phố"
		}, {
			"id": 4563,
			"name": "Vũ Tùng",
			"pre": "Đường"
		}, {
			"id": 2070,
			"name": "Xô Viết Nghệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 833,
			"name": "Xuân Hồng",
			"pre": "Đường"
		}, {
			"id": 2740,
			"name": "Yên Đỗ",
			"pre": "Đường"
		}],
		"project": [{
			"id": 454,
			"name": "283 Lê Quang Định",
			"lat": 10.810608863830566,
			"lng": 106.69203186035156,
			"cats": [55, 324, 326]
		}, {
			"id": 1973,
			"name": "41Bis Điện Biên Phủ",
			"lat": 10.801949501037598,
			"lng": 106.72135925292969,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1064,
			"name": "B1 Trường Sa",
			"lat": 10.793082237243652,
			"lng": 106.70569610595703,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 708,
			"name": "Bắc Bình",
			"lat": 10.801276206970215,
			"lng": 106.72154998779297,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1263,
			"name": "Bình Hòa",
			"lat": 10.833158493041992,
			"lng": 106.69987487792969,
			"cats": [40, 41, 52, 325]
		}, {
			"id": 97,
			"name": "Cantavil Hoàn Cầu",
			"lat": 10.798961639404297,
			"lng": 106.71706390380859,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 840,
			"name": "Cape Pearl - Petrosetco Tower",
			"lat": 10.812224388122559,
			"lng": 106.72047424316406,
			"cats": [48, 50, 55, 324, 325, 326]
		}, {
			"id": 1294,
			"name": "Chung cư Mỹ Đức",
			"lat": 10.798354148864746,
			"lng": 106.71351623535156,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2294,
			"name": "Chung cư Nguyễn Huy Lượng",
			"lat": 10.805686950683594,
			"lng": 106.69606018066406,
			"cats": []
		}, {
			"id": 1526,
			"name": "Chung cư Nguyễn Ngọc Phương",
			"lat": 10.78919792175293,
			"lng": 106.70844268798828,
			"cats": [55, 324, 326]
		}, {
			"id": 1928,
			"name": "Chung cư Phạm Viết Chánh",
			"lat": 10.790844917297363,
			"lng": 106.71070098876953,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 700,
			"name": "Chung cư Phú Đạt",
			"lat": 10.80739688873291,
			"lng": 106.71458435058594,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1279,
			"name": "Chung cư Thế Kỷ 21",
			"lat": 10.801628112792969,
			"lng": 106.72208404541016,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 341,
			"name": "City Garden",
			"lat": 10.793858528137207,
			"lng": 106.71142578125,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1625,
			"name": "Compa Tower",
			"lat": 10.801268577575684,
			"lng": 106.70848083496094,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1644,
			"name": "Cửu Long",
			"lat": 10.821617126464844,
			"lng": 106.70127868652344,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 498,
			"name": "Đại An - Saigon Riverside",
			"lat": 10.818114280700684,
			"lng": 106.72048187255859,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1511,
			"name": "Đại Phúc River View",
			"lat": 10.833653450012207,
			"lng": 106.70095062255859,
			"cats": [40, 41, 48, 52, 55, 59, 325]
		}, {
			"id": 101,
			"name": "Đất Phương Nam",
			"lat": 10.810602188110352,
			"lng": 106.70317077636719,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1624,
			"name": "EBM Building",
			"lat": 10.799454689025879,
			"lng": 106.72257232666016,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1640,
			"name": "HUD Building",
			"lat": 10.797924041748047,
			"lng": 106.70382690429687,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2464,
			"name": "La Bonita",
			"lat": 10.807316780090332,
			"lng": 106.7159423828125,
			"cats": []
		}, {
			"id": 1801,
			"name": "Melody Tower",
			"lat": 10.798782348632813,
			"lng": 106.72125244140625,
			"cats": [41, 50, 163]
		}, {
			"id": 1381,
			"name": "Miếu Nổi",
			"lat": 10.79563045501709,
			"lng": 106.69366455078125,
			"cats": [55, 324, 326]
		}, {
			"id": 118,
			"name": "Mỹ Phước",
			"lat": 10.800145149230957,
			"lng": 106.70169830322266,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1764,
			"name": "Peace Building",
			"lat": 10.800400733947754,
			"lng": 106.72100067138672,
			"cats": [41, 50, 163]
		}, {
			"id": 1287,
			"name": "Pearl Plaza",
			"lat": 10.799614906311035,
			"lng": 106.71884155273437,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1628,
			"name": "Qmobile Tower",
			"lat": 10.803630828857422,
			"lng": 106.68909454345703,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 84,
			"name": "Saigon Pearl",
			"lat": 10.789402961730957,
			"lng": 106.71945190429687,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1654,
			"name": "Saigonland Apartment",
			"lat": 10.803030014038086,
			"lng": 106.71403503417969,
			"cats": [55, 324, 326]
		}, {
			"id": 2101,
			"name": "Saigonres Nguyễn Xí",
			"lat": 10.816153526306152,
			"lng": 106.70734405517578,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 982,
			"name": "Samland Building",
			"lat": 10.802707672119141,
			"lng": 106.72121429443359,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2388,
			"name": "Samland Riverside",
			"lat": 10.807195663452148,
			"lng": 106.71953582763672,
			"cats": []
		}, {
			"id": 1216,
			"name": "SGC Nguyễn Cửu Vân",
			"lat": 10.797319412231445,
			"lng": 106.70643615722656,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2425,
			"name": "Shophouse Vinhomes Central Park",
			"lat": 10.788967132568359,
			"lng": 106.7147216796875,
			"cats": []
		}, {
			"id": 2493,
			"name": "Sky Dream Tower",
			"lat": 10.815850257873535,
			"lng": 106.70588684082031,
			"cats": []
		}, {
			"id": 2400,
			"name": "Soho Premier",
			"lat": 10.811855316162109,
			"lng": 106.71673583984375,
			"cats": []
		}, {
			"id": 2013,
			"name": "Soho Riverview",
			"lat": 10.809793472290039,
			"lng": 106.71208190917969,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2312,
			"name": "Tecco Central Home",
			"lat": 10.805542945861816,
			"lng": 106.69916534423828,
			"cats": []
		}, {
			"id": 1029,
			"name": "Thanh Đa View",
			"lat": 10.815892219543457,
			"lng": 106.72001647949219,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1967,
			"name": "Thanh Niên",
			"lat": 10.798255920410156,
			"lng": 106.70669555664062,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1636,
			"name": "Thảo Điền Building",
			"lat": 10.805362701416016,
			"lng": 106.69104766845703,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 984,
			"name": "The Hyco4 Tower",
			"lat": 10.815370559692383,
			"lng": 106.70691680908203,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 85,
			"name": "The Manor HCM",
			"lat": 10.79380989074707,
			"lng": 106.71783447265625,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 460,
			"name": "The Morning Star Plaza",
			"lat": 10.812188148498535,
			"lng": 106.71183776855469,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 916,
			"name": "TTTM Hàng Xanh",
			"lat": 10.800068855285645,
			"lng": 106.71122741699219,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1631,
			"name": "V Building",
			"lat": 10.800415992736816,
			"lng": 106.72231292724609,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1330,
			"name": "V_Center",
			"lat": 10.819754600524902,
			"lng": 106.70332336425781,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1328,
			"name": "V_ikon",
			"lat": 10.800932884216309,
			"lng": 106.70845031738281,
			"cats": [48, 50, 55, 163]
		}, {
			"id": 1883,
			"name": "Vinhomes Central Park",
			"lat": 10.794485092163086,
			"lng": 106.72261810302734,
			"cats": [48, 50, 59, 324, 325, 326]
		}, {
			"id": 2091,
			"name": "Wilton Tower",
			"lat": 10.801501274108887,
			"lng": 106.71762084960937,
			"cats": [48, 55, 59, 324, 326]
		}]
	}, {
		"id": 73,
		"name": "Cần Giờ",
		"pre": "Huyện",
		"ward": [{
			"id": 146,
			"name": "An Thới Đông",
			"pre": "Xã"
		}, {
			"id": 145,
			"name": "Bình Khánh",
			"pre": "Xã"
		}, {
			"id": 144,
			"name": "Cần Thạnh ",
			"pre": "Phường"
		}, {
			"id": 149,
			"name": "Long Hòa",
			"pre": "Xã"
		}, {
			"id": 147,
			"name": "Lý Nhơn",
			"pre": "Xã"
		}, {
			"id": 148,
			"name": "Tam Thôn Hiệp",
			"pre": "Xã"
		}, {
			"id": 150,
			"name": "Thạnh An",
			"pre": "Xã"
		}],
		"street": [{
			"id": 6540,
			"name": "23/10",
			"pre": "Đường"
		}, {
			"id": 1718,
			"name": "30/4",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 7851,
			"name": "Bà Xán",
			"pre": "Đường"
		}, {
			"id": 1935,
			"name": "Bùi Lâm",
			"pre": "Đường"
		}, {
			"id": 5597,
			"name": "Cần Thạnh",
			"pre": "Đường"
		}, {
			"id": 6542,
			"name": "Cửu Việt 2",
			"pre": "Đường"
		}, {
			"id": 5601,
			"name": "Đặng Văn Kiều",
			"pre": "Đường"
		}, {
			"id": 5599,
			"name": "Đào Cử",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 6539,
			"name": "Dương Vạn Hạnh",
			"pre": "Đường"
		}, {
			"id": 5607,
			"name": "Duyên Hải",
			"pre": "Đường"
		}, {
			"id": 5604,
			"name": "Giống Ao",
			"pre": "Đường"
		}, {
			"id": 7873,
			"name": "Hà Quang Vóc",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 6545,
			"name": "Khiêu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 6547,
			"name": "Khiếu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 6551,
			"name": "Lê Công Miễn",
			"pre": "Đường"
		}, {
			"id": 5606,
			"name": "Lê Hùng Yên",
			"pre": "Đường"
		}, {
			"id": 5600,
			"name": "Lê Thương",
			"pre": "Đường"
		}, {
			"id": 5598,
			"name": "Lê Trọng Mân",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 3551,
			"name": "Lương Văn Nho",
			"pre": "Đường"
		}, {
			"id": 5612,
			"name": "Lý Nhơn",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 2400,
			"name": "Nguyễn Phan Vinh",
			"pre": "Đường"
		}, {
			"id": 7531,
			"name": "Nguyễn Văn Mạnh",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 5610,
			"name": "Phan Đức",
			"pre": "Đường"
		}, {
			"id": 718,
			"name": "Phan Trọng Tuệ",
			"pre": "Đường"
		}, {
			"id": 5602,
			"name": "Phong Thạnh",
			"pre": "Đường"
		}, {
			"id": 8424,
			"name": "Rần Chác",
			"pre": "Đường"
		}, {
			"id": 5611,
			"name": "Rừng Sác",
			"pre": "Đường"
		}, {
			"id": 6215,
			"name": "Tắc Xuất",
			"pre": "Đường"
		}, {
			"id": 8635,
			"name": "Tam Thôn Hiệp",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 5609,
			"name": "Thạnh Thới",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 6546,
			"name": "Trương Tấn Sang",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 6550,
			"name": "Võ Đình Tú",
			"pre": "Đường"
		}, {
			"id": 6549,
			"name": "Võ Trung Thành",
			"pre": "Đường"
		}, {
			"id": 6541,
			"name": "Vườn Thuốc",
			"pre": "Đường"
		}],
		"project": []
	}, {
		"id": 74,
		"name": "Củ Chi",
		"pre": "Huyện",
		"ward": [{
			"id": 159,
			"name": "An Nhơn Tây",
			"pre": "Xã"
		}, {
			"id": 156,
			"name": "An Phú",
			"pre": "Xã"
		}, {
			"id": 12015,
			"name": "An Phú Trung",
			"pre": "Xã"
		}, {
			"id": 153,
			"name": "Bình Mỹ",
			"pre": "Xã"
		}, {
			"id": 12122,
			"name": "Củ Chi",
			"pre": "Thị trấn"
		}, {
			"id": 162,
			"name": "Hòa Phú",
			"pre": "Xã"
		}, {
			"id": 155,
			"name": "Nhuận Đức",
			"pre": "Xã"
		}, {
			"id": 154,
			"name": "Phạm Văn Cội",
			"pre": "Xã"
		}, {
			"id": 170,
			"name": "Phú Hòa Đông",
			"pre": "Xã"
		}, {
			"id": 157,
			"name": "Phú Mỹ Hưng",
			"pre": "Xã"
		}, {
			"id": 152,
			"name": "Phước Hiệp",
			"pre": "Xã"
		}, {
			"id": 160,
			"name": "Phước Thạnh",
			"pre": "Xã"
		}, {
			"id": 163,
			"name": "Phước Vĩnh An",
			"pre": "Xã"
		}, {
			"id": 167,
			"name": "Tân An Hội",
			"pre": "Xã"
		}, {
			"id": 165,
			"name": "Tân Phú Trung",
			"pre": "Xã"
		}, {
			"id": 169,
			"name": "Tân Thạnh Đông",
			"pre": "Xã"
		}, {
			"id": 168,
			"name": "Tân Thạnh Tây",
			"pre": "Xã"
		}, {
			"id": 11894,
			"name": "Tân Thông Hội",
			"pre": "Xã"
		}, {
			"id": 161,
			"name": "Thái Mỹ",
			"pre": "Xã"
		}, {
			"id": 164,
			"name": "Trung An",
			"pre": "Xã"
		}, {
			"id": 151,
			"name": "Trung Lập Hạ",
			"pre": "Xã"
		}, {
			"id": 12155,
			"name": "Trung Lập Hạ",
			"pre": "Xã"
		}, {
			"id": 158,
			"name": "Trung Lập Thượng",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 10660,
			"name": "101",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 6506,
			"name": "110",
			"pre": "Đường"
		}, {
			"id": 5419,
			"name": "112",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 10497,
			"name": "131",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 2171,
			"name": "19/5",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 7361,
			"name": "212",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 6954,
			"name": "363",
			"pre": "Đường"
		}, {
			"id": 8049,
			"name": "365",
			"pre": "Đường"
		}, {
			"id": 6344,
			"name": "367",
			"pre": "Đường"
		}, {
			"id": 2520,
			"name": "39",
			"pre": "Đường"
		}, {
			"id": 4672,
			"name": "40",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 6282,
			"name": "441",
			"pre": "Đường"
		}, {
			"id": 7101,
			"name": "458",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 10559,
			"name": "489",
			"pre": "Đường"
		}, {
			"id": 10767,
			"name": "490",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 4472,
			"name": "53",
			"pre": "Đường"
		}, {
			"id": 8270,
			"name": "572",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 2918,
			"name": "68",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 7972,
			"name": "702",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 7074,
			"name": "94",
			"pre": "Đường"
		}, {
			"id": 7103,
			"name": "96",
			"pre": "Đường"
		}, {
			"id": 10290,
			"name": "97",
			"pre": "Đường"
		}, {
			"id": 7989,
			"name": "98",
			"pre": "Đường"
		}, {
			"id": 4406,
			"name": "An Hòa",
			"pre": "Đường"
		}, {
			"id": 7367,
			"name": "Ba Lăng",
			"pre": "Đường"
		}, {
			"id": 7082,
			"name": "Ba Sa",
			"pre": "Đường"
		}, {
			"id": 9239,
			"name": "Bà Thiên",
			"pre": "Đường"
		}, {
			"id": 6016,
			"name": "Bàu Giã",
			"pre": "Đường"
		}, {
			"id": 6656,
			"name": "Bàu Lách",
			"pre": "Phố"
		}, {
			"id": 8709,
			"name": "Bầu Trâm",
			"pre": "Đường"
		}, {
			"id": 7714,
			"name": "Bến Đình",
			"pre": "Đường"
		}, {
			"id": 7882,
			"name": "Bến Đò 1",
			"pre": "Đường"
		}, {
			"id": 5744,
			"name": "Bến Đò 2",
			"pre": "Đường"
		}, {
			"id": 6246,
			"name": "Bến Súc",
			"pre": "Đường"
		}, {
			"id": 6501,
			"name": "Bến Than",
			"pre": "Đường"
		}, {
			"id": 6875,
			"name": "Bình Mỹ",
			"pre": "Đường"
		}, {
			"id": 7492,
			"name": "Bờ Kênh",
			"pre": "Đường"
		}, {
			"id": 6498,
			"name": "Bùi Thị Điệt",
			"pre": "Đường"
		}, {
			"id": 5594,
			"name": "Bùi Thị Me",
			"pre": "Đường"
		}, {
			"id": 7829,
			"name": "Cá Lăng",
			"pre": "Đường"
		}, {
			"id": 5575,
			"name": "Can Trường",
			"pre": "Đường"
		}, {
			"id": 6897,
			"name": "Cây Bày",
			"pre": "Đường"
		}, {
			"id": 2110,
			"name": "Cây Da",
			"pre": "Đường"
		}, {
			"id": 6005,
			"name": "Cây Gõ",
			"pre": "Đường"
		}, {
			"id": 8434,
			"name": "Cây Sộp",
			"pre": "Đường"
		}, {
			"id": 4510,
			"name": "Cây Trâm",
			"pre": "Đường"
		}, {
			"id": 6542,
			"name": "Cửu Việt 2",
			"pre": "Đường"
		}, {
			"id": 7283,
			"name": "Đào Văn Thử",
			"pre": "Đường"
		}, {
			"id": 5588,
			"name": "Đình Thôn",
			"pre": "Đường"
		}, {
			"id": 7109,
			"name": "Đỗ Đăng Tuyển",
			"pre": "Đường"
		}, {
			"id": 5595,
			"name": "Đỗ Đình Nhân",
			"pre": "Đường"
		}, {
			"id": 567,
			"name": "Đỗ Ngọc Du",
			"pre": "Đường"
		}, {
			"id": 9818,
			"name": "Đoàn Minh Triết",
			"pre": "Đường"
		}, {
			"id": 2179,
			"name": "Giáp Hải",
			"pre": "Đường"
		}, {
			"id": 10659,
			"name": "Giồng Cát",
			"pre": "Đường"
		}, {
			"id": 9294,
			"name": "Gót Chàng",
			"pre": "Đường"
		}, {
			"id": 2395,
			"name": "Hà Duy Phiên",
			"pre": "Đường"
		}, {
			"id": 6719,
			"name": "Hà Văn Lao",
			"pre": "Đường"
		}, {
			"id": 7494,
			"name": "Hố Bò",
			"pre": "Đường"
		}, {
			"id": 5803,
			"name": "Hồ Văn Tắng",
			"pre": "Đường"
		}, {
			"id": 5582,
			"name": "Hoàng Bá Huân",
			"pre": "Đường"
		}, {
			"id": 9668,
			"name": "Hoàng Đình Nghĩa",
			"pre": "Đường"
		}, {
			"id": 9663,
			"name": "Hu Go",
			"pre": "Đường"
		}, {
			"id": 7647,
			"name": "Hương lộ 2",
			"pre": "Đường"
		}, {
			"id": 8150,
			"name": "Hương Lộ 6",
			"pre": "Đường"
		}, {
			"id": 8474,
			"name": "Huyện Đức",
			"pre": "Đường"
		}, {
			"id": 6762,
			"name": "Huỳnh Minh Mương",
			"pre": "Đường"
		}, {
			"id": 10748,
			"name": "Huỳnh Thị Bằng",
			"pre": "Đường"
		}, {
			"id": 5581,
			"name": "Huỳnh Văn Cọ",
			"pre": "Đường"
		}, {
			"id": 5801,
			"name": "Kênh Đông",
			"pre": "Đường"
		}, {
			"id": 6545,
			"name": "Khiêu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 6547,
			"name": "Khiếu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 5965,
			"name": "Kim Cương",
			"pre": "Đường"
		}, {
			"id": 7747,
			"name": "Láng The",
			"pre": "Đường"
		}, {
			"id": 9677,
			"name": "Lê Cẩn",
			"pre": "Đường"
		}, {
			"id": 6551,
			"name": "Lê Công Miễn",
			"pre": "Đường"
		}, {
			"id": 7132,
			"name": "Lê Minh Nhất",
			"pre": "Đường"
		}, {
			"id": 7301,
			"name": "Lê Minh Nhựt",
			"pre": "Đường"
		}, {
			"id": 6504,
			"name": "Lê Thị Siêng",
			"pre": "Đường"
		}, {
			"id": 5579,
			"name": "Lê Thọ Xuân",
			"pre": "Đường"
		}, {
			"id": 3427,
			"name": "Lê Vĩnh Huy",
			"pre": "Đường"
		}, {
			"id": 8476,
			"name": "Liễu Bình Hưng",
			"pre": "Đường"
		}, {
			"id": 5573,
			"name": "Liêu Bình Hương",
			"pre": "Đường"
		}, {
			"id": 5580,
			"name": "Lưu Khai Hồng",
			"pre": "Đường"
		}, {
			"id": 7231,
			"name": "Mỹ Khánh",
			"pre": "Đường"
		}, {
			"id": 3737,
			"name": "Nguyễn Đại Năng",
			"pre": "Đường"
		}, {
			"id": 5591,
			"name": "Nguyễn Đình Huân",
			"pre": "Đường"
		}, {
			"id": 5585,
			"name": "Nguyễn Giao",
			"pre": "Đường"
		}, {
			"id": 979,
			"name": "Nguyễn Huệ",
			"pre": "Đường"
		}, {
			"id": 6247,
			"name": "Nguyễn Kim Cương",
			"pre": "Đường"
		}, {
			"id": 681,
			"name": "Nguyễn Phong Sắc",
			"pre": "Đường"
		}, {
			"id": 5590,
			"name": "Nguyễn Phú Trú",
			"pre": "Đường"
		}, {
			"id": 6359,
			"name": "Nguyễn Thị Lắng",
			"pre": "Đường"
		}, {
			"id": 5596,
			"name": "Nguyễn Thị Lừa",
			"pre": "Đường"
		}, {
			"id": 7015,
			"name": "Nguyễn Thị Nê",
			"pre": "Đường"
		}, {
			"id": 5948,
			"name": "Nguyễn Thị Rành",
			"pre": "Đường"
		}, {
			"id": 5568,
			"name": "Nguyễn Thị Rư",
			"pre": "Đường"
		}, {
			"id": 5584,
			"name": "Nguyễn Thị Triệu",
			"pre": "Đường"
		}, {
			"id": 3527,
			"name": "Nguyễn Văn Hoài",
			"pre": "Đường"
		}, {
			"id": 4113,
			"name": "Nguyễn Văn Khạ",
			"pre": "Đường"
		}, {
			"id": 5571,
			"name": "Nguyễn Văn Nì",
			"pre": "Đường"
		}, {
			"id": 5586,
			"name": "Nguyễn Văn On",
			"pre": "Đường"
		}, {
			"id": 5587,
			"name": "Nguyễn Văn Tỷ",
			"pre": "Đường"
		}, {
			"id": 5589,
			"name": "Nguyễn Văn Xơ",
			"pre": "Đường"
		}, {
			"id": 351,
			"name": "Nguyễn Viết Xuân",
			"pre": "Đường"
		}, {
			"id": 5578,
			"name": "Nhữ Tiến Hiến",
			"pre": "Đường"
		}, {
			"id": 6328,
			"name": "Ninh Tốn",
			"pre": "Đường"
		}, {
			"id": 3416,
			"name": "Ông Ích Đường",
			"pre": "Đường"
		}, {
			"id": 10797,
			"name": "Ông Năm Đèn",
			"pre": "Đường"
		}, {
			"id": 9461,
			"name": "Ông Tư Rõ",
			"pre": "Đường"
		}, {
			"id": 5569,
			"name": "Phạm Hữu Tâm",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 2397,
			"name": "Phạm Phú Tiết",
			"pre": "Đường"
		}, {
			"id": 5572,
			"name": "Phạm Văn Chèo",
			"pre": "Đường"
		}, {
			"id": 5593,
			"name": "Phan Thị Hối",
			"pre": "Đường"
		}, {
			"id": 7660,
			"name": "Quốc Lộ 22",
			"pre": "Đường"
		}, {
			"id": 7495,
			"name": "Sông Lu",
			"pre": "Đường"
		}, {
			"id": 7484,
			"name": "Suối Lội",
			"pre": "Đường"
		}, {
			"id": 3131,
			"name": "Tân Bình",
			"pre": "Đường"
		}, {
			"id": 7826,
			"name": "Tỉnh lộ 15",
			"pre": "Đường"
		}, {
			"id": 4625,
			"name": "Tỉnh lộ 15B",
			"pre": "Đường"
		}, {
			"id": 750,
			"name": "Tỉnh lộ 181",
			"pre": "Đường"
		}, {
			"id": 8165,
			"name": "Tỉnh Lộ 2",
			"pre": "Đường"
		}, {
			"id": 8817,
			"name": "Tỉnh lộ 6",
			"pre": "Đường"
		}, {
			"id": 7713,
			"name": "Tỉnh Lộ 7",
			"pre": "Đường"
		}, {
			"id": 7635,
			"name": "Tỉnh lộ 8",
			"pre": "Đường"
		}, {
			"id": 7939,
			"name": "Tỉnh lộ 9",
			"pre": "Đường"
		}, {
			"id": 5570,
			"name": "Trần Thị Ngần",
			"pre": "Đường"
		}, {
			"id": 654,
			"name": "Trần Tử Bình",
			"pre": "Phố"
		}, {
			"id": 5688,
			"name": "Trần Văn Chẩm",
			"pre": "Đường"
		}, {
			"id": 7027,
			"name": "Trung An",
			"pre": "Đường"
		}, {
			"id": 8976,
			"name": "Trung Lập",
			"pre": "Đường"
		}, {
			"id": 7493,
			"name": "Trung Viết",
			"pre": "Đường"
		}, {
			"id": 6546,
			"name": "Trương Tấn Sang",
			"pre": "Đường"
		}, {
			"id": 7574,
			"name": "Vành Đai 4",
			"pre": "Đường"
		}, {
			"id": 6550,
			"name": "Võ Đình Tú",
			"pre": "Đường"
		}, {
			"id": 8045,
			"name": "Võ Thị Hồng",
			"pre": "Đường"
		}, {
			"id": 6549,
			"name": "Võ Trung Thành",
			"pre": "Đường"
		}, {
			"id": 6497,
			"name": "Võ Văn Bích",
			"pre": "Đường"
		}, {
			"id": 5704,
			"name": "Võ Văn Điều",
			"pre": "Đường"
		}, {
			"id": 3716,
			"name": "Vũ Duy Chí",
			"pre": "Đường"
		}, {
			"id": 3694,
			"name": "Vũ Tụ",
			"pre": "Đường"
		}, {
			"id": 6541,
			"name": "Vườn Thuốc",
			"pre": "Đường"
		}, {
			"id": 4795,
			"name": "Xuyên Á",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2514,
			"name": "Bella Vista City",
			"lat": 10.974437713623047,
			"lng": 106.49700164794922,
			"cats": []
		}, {
			"id": 1333,
			"name": "Biệt thự Củ Chi",
			"lat": 11.074751853942871,
			"lng": 106.47609710693359,
			"cats": [44, 48, 57, 59, 325]
		}, {
			"id": 1491,
			"name": "C.T Sphinx",
			"lat": 10.92631721496582,
			"lng": 106.50376129150391,
			"cats": [44, 48, 55, 59, 325]
		}, {
			"id": 2216,
			"name": "KDC Little Sài Gòn",
			"lat": 10.965323448181152,
			"lng": 106.49444580078125,
			"cats": [40, 41, 45, 48, 50, 51, 52, 53, 55, 57, 59, 163, 283, 325]
		}]
	}, {
		"id": 67,
		"name": "Gò Vấp",
		"pre": "Quận",
		"ward": [{
			"id": 8934,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8942,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8943,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8945,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8946,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8947,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8948,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 8950,
			"name": "16",
			"pre": "Phường"
		}, {
			"id": 8949,
			"name": "17",
			"pre": "Phường"
		}, {
			"id": 8935,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8936,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8938,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8937,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8939,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8940,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8941,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 10338,
			"name": "111",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 4416,
			"name": "31",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 6346,
			"name": "35",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4672,
			"name": "40",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 3061,
			"name": "44",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 2262,
			"name": "46",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 2894,
			"name": "48",
			"pre": "Đường"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 2898,
			"name": "52",
			"pre": "Phố"
		}, {
			"id": 4472,
			"name": "53",
			"pre": "Đường"
		}, {
			"id": 2572,
			"name": "55",
			"pre": "Đường"
		}, {
			"id": 2904,
			"name": "56",
			"pre": "Phố"
		}, {
			"id": 6015,
			"name": "57",
			"pre": "Đường"
		}, {
			"id": 2908,
			"name": "59",
			"pre": "Phố"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 4407,
			"name": "60",
			"pre": "Đường"
		}, {
			"id": 2252,
			"name": "61",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 4764,
			"name": "An Hội",
			"pre": "Đường"
		}, {
			"id": 7207,
			"name": "An Lộc",
			"pre": "Đường"
		}, {
			"id": 2111,
			"name": "An Nhơn",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 3145,
			"name": "B2",
			"pre": "Đường"
		}, {
			"id": 3147,
			"name": "B4",
			"pre": "Đường"
		}, {
			"id": 527,
			"name": "Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 4761,
			"name": "Bùi Quang Là",
			"pre": "Đường"
		}, {
			"id": 10473,
			"name": "Cây Thị",
			"pre": "Đường"
		}, {
			"id": 4510,
			"name": "Cây Trâm",
			"pre": "Đường"
		}, {
			"id": 2599,
			"name": "D4",
			"pre": "Đường"
		}, {
			"id": 7011,
			"name": "Đỗ Phúc Thịnh",
			"pre": "Đường"
		}, {
			"id": 7800,
			"name": "Đỗ Phúc Tịnh",
			"pre": "Đường"
		}, {
			"id": 4762,
			"name": "Đỗ Thúc Tịnh",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 2023,
			"name": "Dương Quảng Hàm",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 4708,
			"name": "Hạnh Thông",
			"pre": "Đường"
		}, {
			"id": 10601,
			"name": "Hạnh Thông Tây",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 322,
			"name": "Hoàng Minh Giám",
			"pre": "Đường"
		}, {
			"id": 2636,
			"name": "Huỳnh Khương An",
			"pre": "Đường"
		}, {
			"id": 1808,
			"name": "Huỳnh Văn Nghệ",
			"pre": "Đường"
		}, {
			"id": 1600,
			"name": "Lam Sơn",
			"pre": "Đường"
		}, {
			"id": 650,
			"name": "Lê Đức Thọ",
			"pre": "Đường"
		}, {
			"id": 4791,
			"name": "Lê Hoàng Phái",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 1530,
			"name": "Lê Quang Định",
			"pre": "Đường"
		}, {
			"id": 4788,
			"name": "Lê Thị Hồng",
			"pre": "Đường"
		}, {
			"id": 7294,
			"name": "Lê Văn Đậu",
			"pre": "Đường"
		}, {
			"id": 4713,
			"name": "Lê Văn Thọ",
			"pre": "Đường"
		}, {
			"id": 5928,
			"name": "Lê Văn Trị",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 204,
			"name": "Lương Ngọc Quyến",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 395,
			"name": "Ngô Tất Tố",
			"pre": "Đường"
		}, {
			"id": 4712,
			"name": "Nguyễn Bá Tuân",
			"pre": "Đường"
		}, {
			"id": 560,
			"name": "Nguyễn Bỉnh Khiêm",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 3922,
			"name": "Nguyễn Duy Cung",
			"pre": "Đường"
		}, {
			"id": 433,
			"name": "Nguyên Hồng",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 5557,
			"name": "Nguyễn Huy Điển",
			"pre": "Đường"
		}, {
			"id": 3996,
			"name": "Nguyễn Huy Thông",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 4705,
			"name": "Nguyễn Kiệm",
			"pre": "Đường"
		}, {
			"id": 836,
			"name": "Nguyễn Oanh",
			"pre": "Đường"
		}, {
			"id": 4706,
			"name": "Nguyễn Thái Sơn",
			"pre": "Đường"
		}, {
			"id": 7039,
			"name": "Nguyễn Thị Hồng",
			"pre": "Đường"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 232,
			"name": "Nguyễn Tư Giản",
			"pre": "Đường"
		}, {
			"id": 326,
			"name": "Nguyễn Tuân",
			"pre": "Đường"
		}, {
			"id": 4784,
			"name": "Nguyễn Văn Bảo",
			"pre": "Đường"
		}, {
			"id": 4707,
			"name": "Nguyễn Văn Công",
			"pre": "Đường"
		}, {
			"id": 841,
			"name": "Nguyễn Văn Đậu",
			"pre": "Đường"
		}, {
			"id": 6938,
			"name": "Nguyễn Văn Dung",
			"pre": "Đường"
		}, {
			"id": 1189,
			"name": "Nguyễn Văn Đừng",
			"pre": "Đường"
		}, {
			"id": 4274,
			"name": "Nguyễn Văn Luông",
			"pre": "Đường"
		}, {
			"id": 6940,
			"name": "Nguyễn Văn Lượng",
			"pre": "Đường"
		}, {
			"id": 4709,
			"name": "Nguyễn Văn Nghi",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 3917,
			"name": "Phạm Huy Thông",
			"pre": "Phố"
		}, {
			"id": 212,
			"name": "Phạm Ngũ Lão",
			"pre": "Đường"
		}, {
			"id": 1664,
			"name": "Phạm Phú Thứ",
			"pre": "Đường"
		}, {
			"id": 827,
			"name": "Phạm Văn Bạch",
			"pre": "Đường"
		}, {
			"id": 837,
			"name": "Phạm Văn Chiêu",
			"pre": "Đường"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 727,
			"name": "Phan Huy Ích",
			"pre": "Đường"
		}, {
			"id": 382,
			"name": "Phan Văn Trị",
			"pre": "Đường"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 6029,
			"name": "Quân Sự",
			"pre": "Đường"
		}, {
			"id": 9040,
			"name": "Quảng Hàm",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 4544,
			"name": "Quốc lộ 54",
			"pre": "Đường"
		}, {
			"id": 7605,
			"name": "Rạch Bà Miên",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 4714,
			"name": "Tân Sơn",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 7672,
			"name": "Thái An 6",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 4783,
			"name": "Thích Bửu Quang",
			"pre": "Đường"
		}, {
			"id": 1723,
			"name": "Thiên Hộ Dương",
			"pre": "Đường"
		}, {
			"id": 2097,
			"name": "Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 7795,
			"name": "Thông Tây Hội",
			"pre": "Đường"
		}, {
			"id": 795,
			"name": "Tô Ngọc Vân",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 4773,
			"name": "Trần Bá Giao",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 5874,
			"name": "Trần Phú Cương",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 219,
			"name": "Trần Quốc Toản",
			"pre": "Đường"
		}, {
			"id": 4143,
			"name": "Trần Quốc Tuấn",
			"pre": "Đường"
		}, {
			"id": 503,
			"name": "Trần Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 4710,
			"name": "Trần Thị Nghĩ",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 3939,
			"name": "Trưng Nữ Vương",
			"pre": "Đường"
		}, {
			"id": 2474,
			"name": "Trương Đăng Quế",
			"pre": "Đường"
		}, {
			"id": 5903,
			"name": "Trương Minh Giảng",
			"pre": "Đường"
		}, {
			"id": 4765,
			"name": "Trường Minh Ký",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 5143,
			"name": "Tú Mỡ",
			"pre": "Đường"
		}, {
			"id": 4711,
			"name": "Vũ Thanh Tùng",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}, {
			"id": 6314,
			"name": "Yên Hoa",
			"pre": "Phố"
		}],
		"project": [{
			"id": 1912,
			"name": "26 Nguyễn Thượng Hiền",
			"lat": 10.81468677520752,
			"lng": 106.68722534179687,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1675,
			"name": "8X Thái An",
			"lat": 10.833864212036133,
			"lng": 106.63392639160156,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1303,
			"name": "An Lộc",
			"lat": 10.847134590148926,
			"lng": 106.6768798828125,
			"cats": [55, 324, 326]
		}, {
			"id": 1295,
			"name": "Bee Home 2",
			"lat": 10.853917121887207,
			"lng": 106.66494750976562,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1325,
			"name": "Cityland Garden Hills",
			"lat": 10.824227333068848,
			"lng": 106.69188690185547,
			"cats": [40, 41, 48, 52, 325]
		}, {
			"id": 2409,
			"name": "Cityland Park Hills",
			"lat": 10.834345817565918,
			"lng": 106.66839599609375,
			"cats": []
		}, {
			"id": 1828,
			"name": "Cityland Z751",
			"lat": 10.828784942626953,
			"lng": 106.67973327636719,
			"cats": [48, 50, 51, 55, 59, 163, 325, 326]
		}, {
			"id": 462,
			"name": "Công Viên Văn Hóa Gò Vấp",
			"lat": 10.843012809753418,
			"lng": 106.68661499023437,
			"cats": [41, 44, 48, 55, 57, 59, 163]
		}, {
			"id": 1220,
			"name": "Dream Home",
			"lat": 10.854777336120605,
			"lng": 106.64982604980469,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2094,
			"name": "Dream Home Residence",
			"lat": 10.854559898376465,
			"lng": 106.64808654785156,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2186,
			"name": "Easy Home Tân Mai",
			"lat": 10.851682662963867,
			"lng": 106.66880035400391,
			"cats": [40, 41, 45, 48, 50, 51, 52, 53, 55, 57, 59, 163, 283, 325]
		}, {
			"id": 2374,
			"name": "Gia Phát Apartment",
			"lat": 10.842354774475098,
			"lng": 106.66929626464844,
			"cats": []
		}, {
			"id": 710,
			"name": "Gia Tuệ Central Square",
			"lat": 10.834369659423828,
			"lng": 106.67226409912109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2130,
			"name": "Green Home Residence",
			"lat": 10.84791088104248,
			"lng": 106.67025756835937,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1126,
			"name": "Green Park Residences",
			"lat": 10.819437980651855,
			"lng": 106.67284393310547,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1109,
			"name": "Hà Đô Nguyễn Văn Công",
			"lat": 10.816434860229492,
			"lng": 106.67630004882812,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1304,
			"name": "Hà Kiều",
			"lat": 10.835840225219727,
			"lng": 106.68850708007812,
			"cats": [55, 324, 326]
		}, {
			"id": 1293,
			"name": "I-Home 1",
			"lat": 10.850742340087891,
			"lng": 106.65377044677734,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 357,
			"name": "Khang Gia Gò Vấp",
			"lat": 10.843390464782715,
			"lng": 106.63543701171875,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 478,
			"name": "Phú Gia Hưng Apartment",
			"lat": 10.850607872009277,
			"lng": 106.67350006103516,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1336,
			"name": "Plaza Nguyên Hồng",
			"lat": 10.817841529846191,
			"lng": 106.69097137451172,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2256,
			"name": "Samland Airport",
			"lat": 10.818264961242676,
			"lng": 106.69192504882812,
			"cats": []
		}, {
			"id": 1299,
			"name": "Sunny Plaza",
			"lat": 10.814727783203125,
			"lng": 106.68227386474609,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1171,
			"name": "Sunview 3",
			"lat": 10.848922729492188,
			"lng": 106.64950561523437,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1245,
			"name": "The Splendor",
			"lat": 10.850205421447754,
			"lng": 106.68074035644531,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 733,
			"name": "Thiên Lộc Tower",
			"lat": 10.851188659667969,
			"lng": 106.65518188476562,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1823,
			"name": "Unik Home",
			"lat": 10.853189468383789,
			"lng": 106.65170288085937,
			"cats": [48, 51, 55, 57, 59, 163]
		}, {
			"id": 1825,
			"name": "Z751 Hà Đô",
			"lat": 10.836288452148438,
			"lng": 106.66637420654297,
			"cats": [55, 324, 326]
		}, {
			"id": 1826,
			"name": "Z751B Hà Đô",
			"lat": 10.830677032470703,
			"lng": 106.67843627929688,
			"cats": [325]
		}]
	}, {
		"id": 75,
		"name": "Hóc Môn",
		"pre": "Huyện",
		"ward": [{
			"id": 176,
			"name": " Đông Thạnh",
			"pre": "Xã"
		}, {
			"id": 182,
			"name": " Hóc Môn",
			"pre": "Phường"
		}, {
			"id": 175,
			"name": "Bà Điểm",
			"pre": "Phường"
		}, {
			"id": 171,
			"name": "Nhị Bình",
			"pre": "Xã"
		}, {
			"id": 177,
			"name": "Tân Hiệp",
			"pre": "Xã"
		}, {
			"id": 181,
			"name": "Tân Thới Nhì",
			"pre": "Xã"
		}, {
			"id": 11908,
			"name": "Tân Xuân",
			"pre": "Xã"
		}, {
			"id": 178,
			"name": "Thới Tam Thôn",
			"pre": "Xã"
		}, {
			"id": 179,
			"name": "Trung Chánh",
			"pre": "Xã"
		}, {
			"id": 172,
			"name": "Xuân Thới Đông",
			"pre": "Xã"
		}, {
			"id": 174,
			"name": "Xuân Thới Sơn",
			"pre": "Xã"
		}, {
			"id": 173,
			"name": "Xuân Thới Thượng",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 3919,
			"name": "2/9",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 4407,
			"name": "60",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 6191,
			"name": "719",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 6199,
			"name": "80B",
			"pre": "Đường"
		}, {
			"id": 5837,
			"name": "An Hạ",
			"pre": "Đường"
		}, {
			"id": 5651,
			"name": "An Sương",
			"pre": "Đường"
		}, {
			"id": 10785,
			"name": "Ấp Chánh 16",
			"pre": "Đường"
		}, {
			"id": 10838,
			"name": "Ấp Đình 4",
			"pre": "Đường"
		}, {
			"id": 3148,
			"name": "B5",
			"pre": "Đường"
		}, {
			"id": 7419,
			"name": "Bà Điểm",
			"pre": "Đường"
		}, {
			"id": 9041,
			"name": "Bà Điểm 10",
			"pre": "Đường"
		}, {
			"id": 9831,
			"name": "Bà Điểm 11",
			"pre": "Đường"
		}, {
			"id": 7252,
			"name": "Bà Điềm 12",
			"pre": "Đường"
		}, {
			"id": 8301,
			"name": "Bà Điểm 2",
			"pre": "Đường"
		}, {
			"id": 7048,
			"name": "Bà Điểm 3",
			"pre": "Đường"
		}, {
			"id": 10499,
			"name": "Bà Điểm 4",
			"pre": "Đường"
		}, {
			"id": 7313,
			"name": "Bà Điểm 5",
			"pre": "Đường"
		}, {
			"id": 9969,
			"name": "Bà Điểm 6",
			"pre": "Đường"
		}, {
			"id": 9815,
			"name": "Bà Điểm 7",
			"pre": "Đường"
		}, {
			"id": 7532,
			"name": "Bà Điểm 8",
			"pre": "Đường"
		}, {
			"id": 9821,
			"name": "Bà Điểm 9",
			"pre": "Đường"
		}, {
			"id": 179,
			"name": "Bà Triệu",
			"pre": "Phố"
		}, {
			"id": 1333,
			"name": "Bùi Công Trừng",
			"pre": "Đường"
		}, {
			"id": 1344,
			"name": "Bùi Văn Ngữ",
			"pre": "Đường"
		}, {
			"id": 3073,
			"name": "C3",
			"pre": "Đường"
		}, {
			"id": 3222,
			"name": "D11",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 7121,
			"name": "Dân Thắng 1",
			"pre": "Đường"
		}, {
			"id": 5786,
			"name": "Đặng Công Bỉnh",
			"pre": "Đường"
		}, {
			"id": 6692,
			"name": "Đặng Quốc Vĩnh",
			"pre": "Đường"
		}, {
			"id": 5654,
			"name": "Đặng Thúc Vịnh",
			"pre": "Đường"
		}, {
			"id": 10691,
			"name": "DK4",
			"pre": "Đường"
		}, {
			"id": 6414,
			"name": "Đỗ Văn Dậy",
			"pre": "Đường"
		}, {
			"id": 5122,
			"name": "Đông Lân",
			"pre": "Đường"
		}, {
			"id": 10705,
			"name": "Đông Lân 1",
			"pre": "Đường"
		}, {
			"id": 5065,
			"name": "Đồng Tâm",
			"pre": "Đường"
		}, {
			"id": 2380,
			"name": "Đông Thạnh 1",
			"pre": "Đường"
		}, {
			"id": 2387,
			"name": "Đông Thạnh 2",
			"pre": "Đường"
		}, {
			"id": 10950,
			"name": "Đông Thạnh 2-2",
			"pre": "Đường"
		}, {
			"id": 9632,
			"name": "Đông Thạnh 2-5",
			"pre": "Đường"
		}, {
			"id": 9633,
			"name": "Đông Thạnh 2-7",
			"pre": "Đường"
		}, {
			"id": 2389,
			"name": "Đông Thạnh 3",
			"pre": "Đường"
		}, {
			"id": 9630,
			"name": "Đông Thạnh 3-4",
			"pre": "Đường"
		}, {
			"id": 9631,
			"name": "Đông Thạnh 3-4A",
			"pre": "Đường"
		}, {
			"id": 9628,
			"name": "Đông Thạnh 4",
			"pre": "Đường"
		}, {
			"id": 9629,
			"name": "Đông Thạnh 4-2",
			"pre": "Đường"
		}, {
			"id": 9627,
			"name": "Đông Thạnh 5",
			"pre": "Đường"
		}, {
			"id": 9968,
			"name": "Đông Thạnh 6",
			"pre": "Đường"
		}, {
			"id": 9425,
			"name": "Đông Thạnh 8",
			"pre": "Đường"
		}, {
			"id": 10855,
			"name": "ĐT 7-5",
			"pre": "Đường"
		}, {
			"id": 5783,
			"name": "Dương Công Khi",
			"pre": "Đường"
		}, {
			"id": 5867,
			"name": "Dương Khả Trạc",
			"pre": "Đường"
		}, {
			"id": 9131,
			"name": "Giác Đạo",
			"pre": "Đường"
		}, {
			"id": 7992,
			"name": "Gò Hưu",
			"pre": "Đường"
		}, {
			"id": 10877,
			"name": "Hàn Quốc",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 6563,
			"name": "Hòa An 8",
			"pre": "Đường"
		}, {
			"id": 10477,
			"name": "Hoàng Gia",
			"pre": "Đường"
		}, {
			"id": 10173,
			"name": "Hưng Lân 6",
			"pre": "Đường"
		}, {
			"id": 7626,
			"name": "Hương lộ 60",
			"pre": "Đường"
		}, {
			"id": 8001,
			"name": "Hương lộ 60B",
			"pre": "Đường"
		}, {
			"id": 10721,
			"name": "Hương Lộ 65",
			"pre": "Đường"
		}, {
			"id": 7880,
			"name": "Hương Lộ 80B",
			"pre": "Đường"
		}, {
			"id": 632,
			"name": "K3",
			"pre": "Đường"
		}, {
			"id": 10418,
			"name": "KT 11",
			"pre": "Đường"
		}, {
			"id": 2618,
			"name": "Lê Hoàn",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 5562,
			"name": "Lê Thị Hà",
			"pre": "Đường"
		}, {
			"id": 6342,
			"name": "Lê Thị Hà Tân Xuân",
			"pre": "Đường"
		}, {
			"id": 935,
			"name": "Lê Thị Hồng Gấm",
			"pre": "Đường"
		}, {
			"id": 1334,
			"name": "Lê Văn Khương",
			"pre": "Đường"
		}, {
			"id": 7906,
			"name": "Liên Ấp 2-6-7",
			"pre": "Đường"
		}, {
			"id": 8362,
			"name": "Liên Xã",
			"pre": "Đường"
		}, {
			"id": 152,
			"name": "Lý Nam Đế",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 10478,
			"name": "Mỹ Hòa",
			"pre": "Đường"
		}, {
			"id": 6023,
			"name": "Mỹ Hòa 1",
			"pre": "Đường"
		}, {
			"id": 10571,
			"name": "Mỹ Hoà 2",
			"pre": "Đường"
		}, {
			"id": 6920,
			"name": "Mỹ Hoà 3",
			"pre": "Đường"
		}, {
			"id": 6882,
			"name": "Mỹ Huề",
			"pre": "Đường"
		}, {
			"id": 10458,
			"name": "Nam Kinh",
			"pre": "Đường"
		}, {
			"id": 8445,
			"name": "Nam Lân",
			"pre": "Đường"
		}, {
			"id": 10600,
			"name": "Nam Lân 4",
			"pre": "Đường"
		}, {
			"id": 7000,
			"name": "Nam Lân 5",
			"pre": "Đường"
		}, {
			"id": 10464,
			"name": "Nam Thới",
			"pre": "Đường"
		}, {
			"id": 9762,
			"name": "Nam Thới 1",
			"pre": "Đường"
		}, {
			"id": 5561,
			"name": "Nam Thới 2",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 1343,
			"name": "Nguyễn Ảnh Thủ",
			"pre": "Đường"
		}, {
			"id": 6559,
			"name": "Nguyễn Công Trung",
			"pre": "Đường"
		}, {
			"id": 5831,
			"name": "Nguyễn Hữu Tuệ",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 6560,
			"name": "Nguyễn Ngọc Sanh",
			"pre": "Đường"
		}, {
			"id": 2967,
			"name": "Nguyễn Thị Hạnh",
			"pre": "Đường"
		}, {
			"id": 9523,
			"name": "Nguyễn Thị Lụa",
			"pre": "Đường"
		}, {
			"id": 10966,
			"name": "Nguyễn Thị Ngâu",
			"pre": "Đường"
		}, {
			"id": 5560,
			"name": "Nguyễn Thị Sóc",
			"pre": "Đường"
		}, {
			"id": 5970,
			"name": "Nguyễn Thị Thử",
			"pre": "Đường"
		}, {
			"id": 5624,
			"name": "Nguyễn Văn Bứa",
			"pre": "Đường"
		}, {
			"id": 10906,
			"name": "Nhà Vuông",
			"pre": "Đường"
		}, {
			"id": 6555,
			"name": "Nhị Bình",
			"pre": "Đường"
		}, {
			"id": 10522,
			"name": "Nhị Bình 10A",
			"pre": "Đường"
		}, {
			"id": 10813,
			"name": "Nhị Bình 11",
			"pre": "Đường"
		}, {
			"id": 10206,
			"name": "Nhị Bình 15",
			"pre": "Đường"
		}, {
			"id": 10633,
			"name": "Nhị Bình 16",
			"pre": "Đường"
		}, {
			"id": 9482,
			"name": "Nhị Bình 17",
			"pre": "Đường"
		}, {
			"id": 9483,
			"name": "Nhị Bình 18",
			"pre": "Đường"
		}, {
			"id": 10871,
			"name": "Nhị Bình 20A",
			"pre": "Đường"
		}, {
			"id": 10618,
			"name": "Nhị Bình 6",
			"pre": "Đường"
		}, {
			"id": 6730,
			"name": "Nhị Bình 7",
			"pre": "Đường"
		}, {
			"id": 10207,
			"name": "Nhị Bình 9",
			"pre": "Đường"
		}, {
			"id": 10508,
			"name": "Nhị Bình 9A",
			"pre": "Đường"
		}, {
			"id": 10610,
			"name": "Nhị Tân 1",
			"pre": "Đường"
		}, {
			"id": 6095,
			"name": "Phạm Văn Sáng",
			"pre": "Đường"
		}, {
			"id": 9090,
			"name": "Phan Công Hớn",
			"pre": "Đường"
		}, {
			"id": 6562,
			"name": "Phần Lăng 8",
			"pre": "Đường"
		}, {
			"id": 6301,
			"name": "Phan Văn Đối",
			"pre": "Đường"
		}, {
			"id": 1341,
			"name": "Phan Văn Hớn",
			"pre": "Đường"
		}, {
			"id": 5884,
			"name": "Quách Điêu",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 7660,
			"name": "Quốc Lộ 22",
			"pre": "Đường"
		}, {
			"id": 4851,
			"name": "Quốc lộ 22A",
			"pre": "Đường"
		}, {
			"id": 7970,
			"name": "Quốc lộ 22B",
			"pre": "Đường"
		}, {
			"id": 5650,
			"name": "Rỗng Bàng",
			"pre": "Đường"
		}, {
			"id": 1339,
			"name": "Song Hành",
			"pre": "Đường"
		}, {
			"id": 7681,
			"name": "T2",
			"pre": "Đường"
		}, {
			"id": 8572,
			"name": "T4",
			"pre": "Đường"
		}, {
			"id": 7719,
			"name": "Tam Đông",
			"pre": "Đường"
		}, {
			"id": 6778,
			"name": "Tam Đông 11A",
			"pre": "Đường"
		}, {
			"id": 10874,
			"name": "Tam Đông 15",
			"pre": "Đường"
		}, {
			"id": 10398,
			"name": "Tam Đông 25",
			"pre": "Đường"
		}, {
			"id": 10416,
			"name": "Tam Đông 28",
			"pre": "Đường"
		}, {
			"id": 10525,
			"name": "Tam Đông 3",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 10856,
			"name": "Tân Hiệp 11",
			"pre": "Đường"
		}, {
			"id": 10548,
			"name": "Tân Hiệp 12",
			"pre": "Đường"
		}, {
			"id": 6837,
			"name": "Tân Hiệp 14",
			"pre": "Đường"
		}, {
			"id": 8798,
			"name": "Tân Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 7656,
			"name": "Tân Hiệp 17",
			"pre": "Đường"
		}, {
			"id": 10692,
			"name": "Tân Hiệp 18",
			"pre": "Đường"
		}, {
			"id": 10878,
			"name": "Tân Hiệp 18A",
			"pre": "Đường"
		}, {
			"id": 8695,
			"name": "Tân Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 7182,
			"name": "Tân Hiệp 3",
			"pre": "Đường"
		}, {
			"id": 10524,
			"name": "Tân Hiệp 30",
			"pre": "Đường"
		}, {
			"id": 6527,
			"name": "Tân Hiệp 31",
			"pre": "Đường"
		}, {
			"id": 8395,
			"name": "Tân Hiệp 32",
			"pre": "Đường"
		}, {
			"id": 10760,
			"name": "Tân Hiệp 34",
			"pre": "Đường"
		}, {
			"id": 7166,
			"name": "Tân Hiệp 35",
			"pre": "Đường"
		}, {
			"id": 10759,
			"name": "Tân Hiệp 37",
			"pre": "Đường"
		}, {
			"id": 9812,
			"name": "Tân Hiệp 39",
			"pre": "Đường"
		}, {
			"id": 6616,
			"name": "Tân Hiệp 4",
			"pre": "Đường"
		}, {
			"id": 9813,
			"name": "Tân Hiệp 40",
			"pre": "Đường"
		}, {
			"id": 9811,
			"name": "Tân Hiệp 44",
			"pre": "Đường"
		}, {
			"id": 10786,
			"name": "Tân Hiệp 46",
			"pre": "Đường"
		}, {
			"id": 9814,
			"name": "Tân Hiệp 5",
			"pre": "Đường"
		}, {
			"id": 9147,
			"name": "Tân Hiệp 8",
			"pre": "Đường"
		}, {
			"id": 10987,
			"name": "Tân Hiệp 8-1",
			"pre": "Đường"
		}, {
			"id": 6046,
			"name": "Tân Kiểng",
			"pre": "Đường"
		}, {
			"id": 10655,
			"name": "Tân Sơn 1",
			"pre": "Đường"
		}, {
			"id": 10358,
			"name": "Tân Sơn 5",
			"pre": "Đường"
		}, {
			"id": 8473,
			"name": "Tân Thới 1",
			"pre": "Đường"
		}, {
			"id": 10232,
			"name": "Tân Thới 2",
			"pre": "Đường"
		}, {
			"id": 9034,
			"name": "Tân Thới 3",
			"pre": "Đường"
		}, {
			"id": 6561,
			"name": "Tân Thới Hiệp 1",
			"pre": "Đường"
		}, {
			"id": 10757,
			"name": "Tân Thới Nhì",
			"pre": "Đường"
		}, {
			"id": 10282,
			"name": "Tân Thới Nhì 1",
			"pre": "Đường"
		}, {
			"id": 10283,
			"name": "Tân Thới Nhì 33",
			"pre": "Đường"
		}, {
			"id": 672,
			"name": "Tân Xuân",
			"pre": "Đường"
		}, {
			"id": 6887,
			"name": "Tân Xuân 1",
			"pre": "Đường"
		}, {
			"id": 10281,
			"name": "Tân Xuân 13",
			"pre": "Đường"
		}, {
			"id": 7416,
			"name": "Tân Xuân 2",
			"pre": "Đường"
		}, {
			"id": 10252,
			"name": "Tân Xuân 3",
			"pre": "Đường"
		}, {
			"id": 9185,
			"name": "Tân Xuân 4",
			"pre": "Đường"
		}, {
			"id": 9204,
			"name": "Tân Xuân 5",
			"pre": "Đường"
		}, {
			"id": 5866,
			"name": "Tân Xuân 6",
			"pre": "Đường"
		}, {
			"id": 10133,
			"name": "Tân Xuân 7",
			"pre": "Đường"
		}, {
			"id": 10997,
			"name": "Tân Xuân 8",
			"pre": "Đường"
		}, {
			"id": 6558,
			"name": "Tây Hào",
			"pre": "Đường"
		}, {
			"id": 4358,
			"name": "Tây Lân",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 2115,
			"name": "Thanh Niên",
			"pre": "Đường"
		}, {
			"id": 7995,
			"name": "Thảo Nhi",
			"pre": "Đường"
		}, {
			"id": 9409,
			"name": "Thị Trấn Tân Hiệp",
			"pre": "Đường"
		}, {
			"id": 8293,
			"name": "Thới Tam Thôn",
			"pre": "Đường"
		}, {
			"id": 10589,
			"name": "Thới Tam Thôn 1",
			"pre": "Đường"
		}, {
			"id": 9459,
			"name": "Thới Tam Thôn 10",
			"pre": "Đường"
		}, {
			"id": 10998,
			"name": "Thới Tam Thôn 11A",
			"pre": "Đường"
		}, {
			"id": 10187,
			"name": "Thới Tam Thôn 12",
			"pre": "Đường"
		}, {
			"id": 7107,
			"name": "Thới Tam Thôn 13",
			"pre": "Đường"
		}, {
			"id": 10202,
			"name": "Thới Tam Thôn 14",
			"pre": "Đường"
		}, {
			"id": 10305,
			"name": "Thới Tam Thôn 15",
			"pre": "Đường"
		}, {
			"id": 10345,
			"name": "Thới Tam Thôn 16",
			"pre": "Đường"
		}, {
			"id": 9910,
			"name": "Thới Tam Thôn 18",
			"pre": "Đường"
		}, {
			"id": 9460,
			"name": "Thới Tam Thôn 4",
			"pre": "Đường"
		}, {
			"id": 7881,
			"name": "Thới Tam Thôn 5",
			"pre": "Đường"
		}, {
			"id": 7960,
			"name": "Thới Tam Thôn 6",
			"pre": "Đường"
		}, {
			"id": 9675,
			"name": "Thới Tam Thôn 7",
			"pre": "Đường"
		}, {
			"id": 8674,
			"name": "Thới Tam Thôn 8",
			"pre": "Đường"
		}, {
			"id": 7251,
			"name": "Thới Tây Tân Hiệp",
			"pre": "Đường"
		}, {
			"id": 7031,
			"name": "Thới Tứ",
			"pre": "Đường"
		}, {
			"id": 10291,
			"name": "Thống Nhất 1",
			"pre": "Đường"
		}, {
			"id": 7175,
			"name": "Thống Nhất 2",
			"pre": "Đường"
		}, {
			"id": 10888,
			"name": "Thương Mại 1",
			"pre": "Đường"
		}, {
			"id": 10824,
			"name": "Tiền Lân",
			"pre": "Đường"
		}, {
			"id": 10587,
			"name": "Tiền Lân 15",
			"pre": "Đường"
		}, {
			"id": 7649,
			"name": "Tỉnh Lộ 10",
			"pre": "Đường"
		}, {
			"id": 2945,
			"name": "Tỉnh lộ 824",
			"pre": "Đường"
		}, {
			"id": 7939,
			"name": "Tỉnh lộ 9",
			"pre": "Đường"
		}, {
			"id": 10930,
			"name": "TK1",
			"pre": "Đường"
		}, {
			"id": 10836,
			"name": "TK11",
			"pre": "Đường"
		}, {
			"id": 10696,
			"name": "TK4",
			"pre": "Đường"
		}, {
			"id": 11006,
			"name": "TK8",
			"pre": "Đường"
		}, {
			"id": 10538,
			"name": "Tô Châu",
			"pre": "Đường"
		}, {
			"id": 5653,
			"name": "Tô Ký",
			"pre": "Đường"
		}, {
			"id": 10203,
			"name": "Tô Ký 12",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 7097,
			"name": "Trần Anh",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 997,
			"name": "Trần Khắc Chân",
			"pre": "Đường"
		}, {
			"id": 6556,
			"name": "Trần Lãm",
			"pre": "Đường"
		}, {
			"id": 5661,
			"name": "Trần Văn Mười",
			"pre": "Đường"
		}, {
			"id": 10872,
			"name": "Trịnh Thị Đối",
			"pre": "Đường"
		}, {
			"id": 6626,
			"name": "Trịnh Thị Miễn",
			"pre": "Đường"
		}, {
			"id": 5882,
			"name": "Trịnh Thị Miếng",
			"pre": "Đường"
		}, {
			"id": 10186,
			"name": "Trung Chánh 1",
			"pre": "Đường"
		}, {
			"id": 10185,
			"name": "Trung Chánh 2",
			"pre": "Đường"
		}, {
			"id": 9069,
			"name": "Trung Đông",
			"pre": "Đường"
		}, {
			"id": 10951,
			"name": "Trung Lân",
			"pre": "Đường"
		}, {
			"id": 10952,
			"name": "Trung Lân 4",
			"pre": "Đường"
		}, {
			"id": 8785,
			"name": "Trung Mỹ",
			"pre": "Đường"
		}, {
			"id": 6724,
			"name": "Trung Mỹ Tây",
			"pre": "Đường"
		}, {
			"id": 3939,
			"name": "Trưng Nữ Vương",
			"pre": "Đường"
		}, {
			"id": 8005,
			"name": "Vành Đai 3",
			"pre": "Đường"
		}, {
			"id": 7574,
			"name": "Vành Đai 4",
			"pre": "Đường"
		}, {
			"id": 6190,
			"name": "Võ Thị Hồi",
			"pre": "Đường"
		}, {
			"id": 7439,
			"name": "Xuân Hòa 2",
			"pre": "Đường"
		}, {
			"id": 8215,
			"name": "Xuân Thái 2",
			"pre": "Đường"
		}, {
			"id": 10641,
			"name": "Xuân Thới",
			"pre": "Đường"
		}, {
			"id": 9889,
			"name": "Xuân Thới 14",
			"pre": "Đường"
		}, {
			"id": 8953,
			"name": "Xuân Thới 15",
			"pre": "Đường"
		}, {
			"id": 10837,
			"name": "Xuân Thới 18",
			"pre": "Đường"
		}, {
			"id": 9886,
			"name": "Xuân Thới 2",
			"pre": "Đường"
		}, {
			"id": 9890,
			"name": "Xuân Thới 23",
			"pre": "Đường"
		}, {
			"id": 9887,
			"name": "Xuân Thới 3",
			"pre": "Đường"
		}, {
			"id": 10902,
			"name": "Xuân Thới 4",
			"pre": "Đường"
		}, {
			"id": 9888,
			"name": "Xuân Thới 7",
			"pre": "Đường"
		}, {
			"id": 9133,
			"name": "Xuân Thới Đông 2",
			"pre": "Đường"
		}, {
			"id": 8912,
			"name": "Xuân Thới Đông 3",
			"pre": "Đường"
		}, {
			"id": 10812,
			"name": "Xuân Thới Đông 7",
			"pre": "Đường"
		}, {
			"id": 10722,
			"name": "Xuân Thới Sơn",
			"pre": "Đường"
		}, {
			"id": 10263,
			"name": "Xuân Thới Sơn 12",
			"pre": "Đường"
		}, {
			"id": 10780,
			"name": "Xuân Thới Sơn 13",
			"pre": "Đường"
		}, {
			"id": 8471,
			"name": "Xuân Thới Sơn 16",
			"pre": "Đường"
		}, {
			"id": 10732,
			"name": "Xuân Thới Sơn 16B",
			"pre": "Đường"
		}, {
			"id": 10515,
			"name": "Xuân Thới Sơn 17",
			"pre": "Đường"
		}, {
			"id": 10798,
			"name": "Xuân Thới Sơn 18",
			"pre": "Đường"
		}, {
			"id": 10373,
			"name": "Xuân Thới Sơn 19",
			"pre": "Đường"
		}, {
			"id": 10475,
			"name": "Xuân Thới Sơn 2",
			"pre": "Đường"
		}, {
			"id": 9844,
			"name": "Xuân Thới Sơn 20",
			"pre": "Đường"
		}, {
			"id": 10284,
			"name": "Xuân Thới Sơn 22",
			"pre": "Đường"
		}, {
			"id": 10573,
			"name": "Xuân Thới Sơn 3",
			"pre": "Đường"
		}, {
			"id": 10436,
			"name": "Xuân Thới Sơn 4",
			"pre": "Đường"
		}, {
			"id": 10779,
			"name": "Xuân Thới Sơn 6",
			"pre": "Đường"
		}, {
			"id": 10546,
			"name": "Xuân Thới Sơn 9",
			"pre": "Đường"
		}, {
			"id": 8257,
			"name": "Xuân Thới Sơn C",
			"pre": "Đường"
		}, {
			"id": 6415,
			"name": "Xuân Thới Thượng",
			"pre": "Đường"
		}, {
			"id": 10804,
			"name": "Xuân Thới Thượng 12",
			"pre": "Đường"
		}, {
			"id": 8444,
			"name": "Xuân Thới Thượng 13",
			"pre": "Đường"
		}, {
			"id": 10189,
			"name": "Xuân Thới Thượng 14",
			"pre": "Đường"
		}, {
			"id": 10334,
			"name": "Xuân Thới Thượng 16",
			"pre": "Đường"
		}, {
			"id": 9756,
			"name": "Xuân Thới Thượng 17",
			"pre": "Đường"
		}, {
			"id": 8365,
			"name": "Xuân Thới Thượng 19",
			"pre": "Đường"
		}, {
			"id": 9494,
			"name": "Xuân Thới Thượng 2",
			"pre": "Đường"
		}, {
			"id": 10658,
			"name": "Xuân Thới Thượng 20",
			"pre": "Đường"
		}, {
			"id": 7075,
			"name": "Xuân Thới Thượng 21",
			"pre": "Đường"
		}, {
			"id": 9867,
			"name": "Xuân Thới Thượng 22",
			"pre": "Đường"
		}, {
			"id": 10900,
			"name": "Xuân Thới Thượng 25",
			"pre": "Đường"
		}, {
			"id": 7023,
			"name": "Xuân Thới Thượng 27",
			"pre": "Đường"
		}, {
			"id": 9717,
			"name": "Xuân Thới Thượng 28",
			"pre": "Đường"
		}, {
			"id": 10374,
			"name": "Xuân Thới Thượng 30",
			"pre": "Đường"
		}, {
			"id": 7462,
			"name": "Xuân Thới Thượng 31",
			"pre": "Đường"
		}, {
			"id": 10350,
			"name": "Xuân Thới Thượng 31-4",
			"pre": "Đường"
		}, {
			"id": 6781,
			"name": "Xuân Thới Thượng 32",
			"pre": "Đường"
		}, {
			"id": 6574,
			"name": "Xuân Thới Thượng 4",
			"pre": "Đường"
		}, {
			"id": 7434,
			"name": "Xuân Thới Thượng 5",
			"pre": "Đường"
		}, {
			"id": 8156,
			"name": "Xuân Thới Thượng 53",
			"pre": "Đường"
		}, {
			"id": 8085,
			"name": "Xuân Thới Thượng 58C",
			"pre": "Đường"
		}, {
			"id": 7601,
			"name": "Xuân Thới Thượng 59",
			"pre": "Đường"
		}, {
			"id": 8904,
			"name": "Xuân Thới Thượng 6",
			"pre": "Đường"
		}, {
			"id": 10399,
			"name": "Xuân Thới Thượng 64",
			"pre": "Đường"
		}, {
			"id": 6831,
			"name": "Xuân Thới Thượng 7",
			"pre": "Đường"
		}, {
			"id": 10146,
			"name": "Xuân Thới Thượng 73",
			"pre": "Đường"
		}, {
			"id": 6955,
			"name": "Xuân Thới Thượng 84",
			"pre": "Đường"
		}, {
			"id": 10690,
			"name": "Xuân Thới Thượng 87",
			"pre": "Đường"
		}, {
			"id": 8774,
			"name": "Xuân Thới Thượng 9",
			"pre": "Đường"
		}, {
			"id": 4795,
			"name": "Xuyên Á",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1127,
			"name": "Cheery 3 Apartment",
			"lat": 10.860601425170898,
			"lng": 106.60184478759766,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1270,
			"name": "Eco Town",
			"lat": 10.870338439941406,
			"lng": 106.57121276855469,
			"cats": [40, 44, 48, 55, 59, 325]
		}, {
			"id": 2124,
			"name": "HQC Hóc Môn",
			"lat": 10.860785484313965,
			"lng": 106.60185241699219,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1699,
			"name": "KDC Hoàng Hải",
			"lat": 10.836780548095703,
			"lng": 106.59461212158203,
			"cats": [40, 55, 324, 325, 326]
		}, {
			"id": 2486,
			"name": "Sophia Garden",
			"lat": 10.875514030456543,
			"lng": 106.56523895263672,
			"cats": []
		}, {
			"id": 1269,
			"name": "Xuân Thới Sơn",
			"lat": 10.870985984802246,
			"lng": 106.57145690917969,
			"cats": [40, 48, 55, 324, 325, 326]
		}]
	}, {
		"id": 76,
		"name": "Nhà Bè",
		"pre": "Huyện",
		"ward": [{
			"id": 11917,
			"name": "Hiệp Phước",
			"pre": "Phường"
		}, {
			"id": 189,
			"name": "Long Thới",
			"pre": "Xã"
		}, {
			"id": 191,
			"name": "Nhà Bè",
			"pre": "Thị trấn"
		}, {
			"id": 188,
			"name": "Nhơn Đức",
			"pre": "Xã"
		}, {
			"id": 190,
			"name": "Phú Xuân",
			"pre": "Xã"
		}, {
			"id": 187,
			"name": "Phước Kiển",
			"pre": "Xã"
		}, {
			"id": 11974,
			"name": "Phước Lộc",
			"pre": "Xã"
		}],
		"street": [{
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 5565,
			"name": "Bác Ba Niệm",
			"pre": "Đường"
		}, {
			"id": 6999,
			"name": "Bờ Tây",
			"pre": "Đường"
		}, {
			"id": 4601,
			"name": "D2",
			"pre": "Đường"
		}, {
			"id": 5564,
			"name": "Đặng Nhữ Lâm",
			"pre": "Đường"
		}, {
			"id": 2320,
			"name": "Đào Sư Tích",
			"pre": "Đường"
		}, {
			"id": 6503,
			"name": "Đào Tông Nguyên",
			"pre": "Đường"
		}, {
			"id": 890,
			"name": "Đông Du",
			"pre": "Đường"
		}, {
			"id": 5552,
			"name": "Dương Cát Lợi",
			"pre": "Đường"
		}, {
			"id": 5563,
			"name": "Gia Binh",
			"pre": "Đường"
		}, {
			"id": 7869,
			"name": "Hương lộ 39",
			"pre": "Đường"
		}, {
			"id": 3010,
			"name": "Huỳnh Tấn Phát",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 7785,
			"name": "Long Thới",
			"pre": "Đường"
		}, {
			"id": 5566,
			"name": "Mười Cung",
			"pre": "Đường"
		}, {
			"id": 740,
			"name": "Nguyễn Bình",
			"pre": "Đường"
		}, {
			"id": 458,
			"name": "Nguyễn Hữu Thọ",
			"pre": "Đường"
		}, {
			"id": 394,
			"name": "Nguyễn Lương Bằng",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 5761,
			"name": "Nguyễn Văn Tạo",
			"pre": "Đường"
		}, {
			"id": 8290,
			"name": "Nhà Bè",
			"pre": "Đường"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 3505,
			"name": "Phạm Hữu Lầu",
			"pre": "Đường"
		}, {
			"id": 7403,
			"name": "Phan Văn Bảy",
			"pre": "Đường"
		}, {
			"id": 6403,
			"name": "Phước Lộc",
			"pre": "Đường"
		}, {
			"id": 6046,
			"name": "Tân Kiểng",
			"pre": "Đường"
		}, {
			"id": 6404,
			"name": "Võ Tiên Sư",
			"pre": "Đường"
		}, {
			"id": 8574,
			"name": "Xương Cá",
			"pre": "Đường"
		}, {
			"id": 10886,
			"name": "Xương Cá 1",
			"pre": "Đường"
		}, {
			"id": 9706,
			"name": "Xương Cá 2",
			"pre": "Đường"
		}],
		"project": [{
			"id": 362,
			"name": "Anh Tuấn Apartment",
			"lat": 10.679749488830566,
			"lng": 106.75086975097656,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 941,
			"name": "Anh Tuấn Garden",
			"lat": 10.674652099609375,
			"lng": 106.69783782958984,
			"cats": [40, 41, 48, 52, 55, 325]
		}, {
			"id": 2007,
			"name": "Biệt thự Galleria",
			"lat": 10.70445728302002,
			"lng": 106.71314239501953,
			"cats": [48, 50, 55, 59, 325]
		}, {
			"id": 801,
			"name": "Biệt thự Kim Long",
			"lat": 10.722208976745605,
			"lng": 106.70191192626953,
			"cats": [44, 325]
		}, {
			"id": 802,
			"name": "Biệt thự Ngân Long",
			"lat": 10.719393730163574,
			"lng": 106.70273590087891,
			"cats": [41, 48, 52, 55, 325]
		}, {
			"id": 537,
			"name": "Blue Diamond Tower",
			"lat": 10.691372871398926,
			"lng": 106.70640563964844,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1769,
			"name": "Blue Star",
			"lat": 10.678610801696777,
			"lng": 106.75015258789062,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 800,
			"name": "Dragon City",
			"lat": 10.710577964782715,
			"lng": 106.70890808105469,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 799,
			"name": "Dragon Hill Residence and Suites 2",
			"lat": 10.710086822509766,
			"lng": 106.70885467529297,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1608,
			"name": "Dragon Parc",
			"lat": 10.702569007873535,
			"lng": 106.71464538574219,
			"cats": [40, 48, 51, 55, 59, 163, 325]
		}, {
			"id": 2477,
			"name": "Exim Pearl Tower",
			"lat": 10.698514938354492,
			"lng": 106.70444488525391,
			"cats": []
		}, {
			"id": 2156,
			"name": "Garden Riverside Villas",
			"lat": 10.718894958496094,
			"lng": 106.68061065673828,
			"cats": [40, 325]
		}, {
			"id": 2057,
			"name": "GS Metrocity Nhà Bè",
			"lat": 10.682552337646484,
			"lng": 106.71489715576172,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 521,
			"name": "Hiệp Phước",
			"lat": 10.640799522399902,
			"lng": 106.74985504150391,
			"cats": [45, 53]
		}, {
			"id": 443,
			"name": "Hoàng Anh An Tiến - Gold House",
			"lat": 10.711324691772461,
			"lng": 106.70458984375,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1195,
			"name": "Hưng Phát",
			"lat": 10.713678359985352,
			"lng": 106.70024871826172,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2225,
			"name": "Hưng Phát Silver Star",
			"lat": 10.717429161071777,
			"lng": 106.70176696777344,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 543,
			"name": "Kenton Residences",
			"lat": 10.722134590148926,
			"lng": 106.69951629638672,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 954,
			"name": "Khải Hoàn Paradise",
			"lat": 10.683977127075195,
			"lng": 106.70271301269531,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 828,
			"name": "Louis Tower",
			"lat": 10.722640991210937,
			"lng": 106.70543670654297,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1282,
			"name": "Nam Sài Gòn Riverside",
			"lat": 10.658900260925293,
			"lng": 106.69170379638672,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 110,
			"name": "New Saigon Hoàng Anh 3",
			"lat": 10.7196626663208,
			"lng": 106.70148468017578,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2207,
			"name": "Nine South Estates",
			"lat": 10.703664779663086,
			"lng": 106.71210479736328,
			"cats": [325, 362]
		}, {
			"id": 2337,
			"name": "Park Vista",
			"lat": 10.716203689575195,
			"lng": 106.703125,
			"cats": []
		}, {
			"id": 1253,
			"name": "Phú Gia Cotec",
			"lat": 10.679718017578125,
			"lng": 106.73994445800781,
			"cats": [40, 48, 324, 325, 326]
		}, {
			"id": 123,
			"name": "Phú Hoàng Anh",
			"lat": 10.716768264770508,
			"lng": 106.70431518554687,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 124,
			"name": "Phú Mỹ Thuận",
			"lat": 10.677675247192383,
			"lng": 106.75109100341797,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1600,
			"name": "Phú Xuân 2",
			"lat": 10.675395965576172,
			"lng": 106.73622894287109,
			"cats": [41, 48, 51, 52, 55, 59, 163, 325]
		}, {
			"id": 1741,
			"name": "Phú Xuân 3",
			"lat": 10.685827255249023,
			"lng": 106.74138641357422,
			"cats": [48, 51, 55, 163, 325]
		}, {
			"id": 1893,
			"name": "Phú Xuân 4",
			"lat": 10.685405731201172,
			"lng": 106.74662017822266,
			"cats": [48, 51, 55, 59, 325]
		}, {
			"id": 2012,
			"name": "Phú Xuân 5",
			"lat": 10.691005706787109,
			"lng": 106.74281311035156,
			"cats": [40, 41, 52]
		}, {
			"id": 1778,
			"name": "Phú Xuân Cảng Sài Gòn",
			"lat": 10.680965423583984,
			"lng": 106.73515319824219,
			"cats": [40, 48, 55, 59, 325]
		}, {
			"id": 126,
			"name": "Phú Xuân Cotec",
			"lat": 10.676533699035645,
			"lng": 106.75074005126953,
			"cats": [40, 59, 325]
		}, {
			"id": 1776,
			"name": "Phú Xuân Hồng Lĩnh",
			"lat": 10.694009780883789,
			"lng": 106.72843170166016,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 1777,
			"name": "Phú Xuân Vạn Hưng Phú",
			"lat": 10.6799955368042,
			"lng": 106.73163604736328,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 1775,
			"name": "Phú Xuân Vạn Phát Hưng",
			"lat": 10.685426712036133,
			"lng": 106.73825073242187,
			"cats": [40, 48, 51, 55, 163, 325]
		}, {
			"id": 1276,
			"name": "Sadeco Phước Kiển",
			"lat": 10.720563888549805,
			"lng": 106.69620513916016,
			"cats": [40, 41, 52, 325]
		}, {
			"id": 926,
			"name": "Sài Gòn Mới",
			"lat": 10.684909820556641,
			"lng": 106.74679565429687,
			"cats": [40, 48, 55, 324, 325, 326]
		}, {
			"id": 2233,
			"name": "Sunrise Riverside",
			"lat": 10.722105026245117,
			"lng": 106.70535278320313,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 1726,
			"name": "Tân An Huy - Trần Thái",
			"lat": 10.722261428833008,
			"lng": 106.70400238037109,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 2272,
			"name": "Thái Sơn 1",
			"lat": 10.708233833312988,
			"lng": 106.70797729492187,
			"cats": []
		}, {
			"id": 617,
			"name": "The Headquarters",
			"lat": 10.705120086669922,
			"lng": 106.712890625,
			"cats": [41, 48, 50, 52, 55, 59, 325]
		}, {
			"id": 1366,
			"name": "The Park Residence",
			"lat": 10.712343215942383,
			"lng": 106.70735931396484,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2185,
			"name": "The Stars Village",
			"lat": 10.660825729370117,
			"lng": 106.70754241943359,
			"cats": [40, 41, 44, 45, 48, 50, 51, 52, 53, 55, 57, 59, 163, 283, 324, 325, 326]
		}, {
			"id": 1760,
			"name": "The Sun City Phước Kiển",
			"lat": 10.692140579223633,
			"lng": 106.70416259765625,
			"cats": [48, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 68,
		"name": "Phú Nhuận",
		"pre": "Quận",
		"ward": [{
			"id": 8955,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8965,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8967,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8968,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8969,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8970,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8971,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 8972,
			"name": "17",
			"pre": "Phường"
		}, {
			"id": 8956,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 12151,
			"name": "25",
			"pre": "Phường"
		}, {
			"id": 8958,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8959,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8960,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 12237,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8962,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8963,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8964,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 1958,
			"name": "Cầm Bá Thước",
			"pre": "Đường"
		}, {
			"id": 346,
			"name": "Cao Thắng",
			"pre": "Đường"
		}, {
			"id": 183,
			"name": "Chiến Thắng",
			"pre": "Đường"
		}, {
			"id": 2013,
			"name": "Cô Bắc",
			"pre": "Đường"
		}, {
			"id": 2014,
			"name": "Cô Giang",
			"pre": "Đường"
		}, {
			"id": 4845,
			"name": "Cù Lao",
			"pre": "Đường"
		}, {
			"id": 782,
			"name": "Đặng Thai Mai",
			"pre": "Đường"
		}, {
			"id": 2273,
			"name": "Đặng Văn Ngữ",
			"pre": "Đường"
		}, {
			"id": 402,
			"name": "Đào Duy Anh",
			"pre": "Đường"
		}, {
			"id": 1096,
			"name": "Đào Duy Từ",
			"pre": "Đường"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 2156,
			"name": "Đỗ Tấn Phong",
			"pre": "Đường"
		}, {
			"id": 439,
			"name": "Đoàn Thị Điểm",
			"pre": "Đường"
		}, {
			"id": 573,
			"name": "Duy Tân",
			"pre": "Đường"
		}, {
			"id": 3361,
			"name": "Hồ Biểu Chánh",
			"pre": "Đường"
		}, {
			"id": 4862,
			"name": "Hồ Văn Huê",
			"pre": "Đường"
		}, {
			"id": 4837,
			"name": "Hoa Cau",
			"pre": "Đường"
		}, {
			"id": 5936,
			"name": "Hoa Cúc",
			"pre": "Đường"
		}, {
			"id": 4846,
			"name": "Hoa Đào",
			"pre": "Đường"
		}, {
			"id": 9397,
			"name": "Hoa Giấy",
			"pre": "Đường"
		}, {
			"id": 4843,
			"name": "Hoa Hồng",
			"pre": "Đường"
		}, {
			"id": 4839,
			"name": "Hoa Huệ",
			"pre": "Đường"
		}, {
			"id": 6187,
			"name": "Hoa Lài",
			"pre": "Đường"
		}, {
			"id": 4842,
			"name": "Hoa Lan",
			"pre": "Đường"
		}, {
			"id": 4844,
			"name": "Hoa Mai",
			"pre": "Đường"
		}, {
			"id": 4847,
			"name": "Hoa Phượng",
			"pre": "Đường"
		}, {
			"id": 4840,
			"name": "Hoa Sứ",
			"pre": "Đường"
		}, {
			"id": 4838,
			"name": "Hoa Sữa",
			"pre": "Đường"
		}, {
			"id": 6658,
			"name": "Hoa Thị",
			"pre": "Đường"
		}, {
			"id": 5937,
			"name": "Hoa Trà",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 322,
			"name": "Hoàng Minh Giám",
			"pre": "Đường"
		}, {
			"id": 938,
			"name": "Hoàng Sa",
			"pre": "Đường"
		}, {
			"id": 337,
			"name": "Hoàng Văn Thụ",
			"pre": "Đường"
		}, {
			"id": 114,
			"name": "Hồng Hà",
			"pre": "Đường"
		}, {
			"id": 4826,
			"name": "Huỳnh Văn Bánh",
			"pre": "Đường"
		}, {
			"id": 963,
			"name": "Ký Con",
			"pre": "Đường"
		}, {
			"id": 1600,
			"name": "Lam Sơn",
			"pre": "Đường"
		}, {
			"id": 348,
			"name": "Lê Quý Đôn",
			"pre": "Đường"
		}, {
			"id": 4834,
			"name": "Lê Tự Tài",
			"pre": "Đường"
		}, {
			"id": 821,
			"name": "Lê Văn Sỹ",
			"pre": "Đường"
		}, {
			"id": 4825,
			"name": "Mai Văn Ngọc",
			"pre": "Đường"
		}, {
			"id": 8834,
			"name": "Man Thu",
			"pre": "Đường"
		}, {
			"id": 5676,
			"name": "Miếu Nổi",
			"pre": "Đường"
		}, {
			"id": 898,
			"name": "Nam Kỳ Khởi Nghĩa",
			"pre": "Đường"
		}, {
			"id": 3331,
			"name": "Ngô Thời Nhiệm",
			"pre": "Đường"
		}, {
			"id": 756,
			"name": "Nguyễn Công Hoan",
			"pre": "Đường"
		}, {
			"id": 537,
			"name": "Nguyễn Đình Chiểu",
			"pre": "Đường"
		}, {
			"id": 4298,
			"name": "Nguyễn Đình Chính",
			"pre": "Đường"
		}, {
			"id": 7371,
			"name": "Nguyễn Hoa Hồng",
			"pre": "Đường"
		}, {
			"id": 315,
			"name": "Nguyễn Huy Tưởng",
			"pre": "Đường"
		}, {
			"id": 4705,
			"name": "Nguyễn Kiệm",
			"pre": "Đường"
		}, {
			"id": 1131,
			"name": "Nguyễn Lâm",
			"pre": "Đường"
		}, {
			"id": 4859,
			"name": "Nguyễn Thị Huỳnh",
			"pre": "Đường"
		}, {
			"id": 8761,
			"name": "Nguyễn Thị Quỳnh",
			"pre": "Đường"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 4830,
			"name": "Nguyễn Trọng Tuyển",
			"pre": "Đường"
		}, {
			"id": 752,
			"name": "Nguyễn Trường Tộ",
			"pre": "Đường"
		}, {
			"id": 4784,
			"name": "Nguyễn Văn Bảo",
			"pre": "Đường"
		}, {
			"id": 841,
			"name": "Nguyễn Văn Đậu",
			"pre": "Đường"
		}, {
			"id": 341,
			"name": "Nguyễn Văn Trỗi",
			"pre": "Đường"
		}, {
			"id": 5938,
			"name": "Nhiêu Tứ",
			"pre": "Đường"
		}, {
			"id": 987,
			"name": "Phạm Viết Chánh",
			"pre": "Đường"
		}, {
			"id": 741,
			"name": "Phan Đăng Lưu",
			"pre": "Phố"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 4835,
			"name": "Phan Tây Hồ",
			"pre": "Đường"
		}, {
			"id": 991,
			"name": "Phan Xích Long",
			"pre": "Đường"
		}, {
			"id": 4831,
			"name": "Phổ Quang",
			"pre": "Đường"
		}, {
			"id": 4833,
			"name": "Phùng Văn Cung",
			"pre": "Đường"
		}, {
			"id": 6966,
			"name": "Phùng Văn Khang",
			"pre": "Đường"
		}, {
			"id": 7399,
			"name": "Rạch Miễu",
			"pre": "Đường"
		}, {
			"id": 4829,
			"name": "Tân Canh",
			"pre": "Đường"
		}, {
			"id": 1745,
			"name": "Thích Quảng Đức",
			"pre": "Đường"
		}, {
			"id": 544,
			"name": "Trần Cao Vân",
			"pre": "Đường"
		}, {
			"id": 1618,
			"name": "Trần Hữu Trang",
			"pre": "Đường"
		}, {
			"id": 743,
			"name": "Trần Huy Liệu",
			"pre": "Đường"
		}, {
			"id": 4528,
			"name": "Trần Kế Xương",
			"pre": "Đường"
		}, {
			"id": 997,
			"name": "Trần Khắc Chân",
			"pre": "Đường"
		}, {
			"id": 420,
			"name": "Trần Quang Diệu",
			"pre": "Đường"
		}, {
			"id": 7402,
			"name": "Trần Quý Đức",
			"pre": "Đường"
		}, {
			"id": 3035,
			"name": "Trần Tế Xương",
			"pre": "Đường"
		}, {
			"id": 2234,
			"name": "Trương Quốc Dung",
			"pre": "Đường"
		}, {
			"id": 1485,
			"name": "Trường Sa",
			"pre": "Đường"
		}, {
			"id": 505,
			"name": "Vạn Kiếp",
			"pre": "Phố"
		}, {
			"id": 4532,
			"name": "Vũ Huy Tấn",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1750,
			"name": "Arirang Building",
			"lat": 10.798830986022949,
			"lng": 106.67757415771484,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 701,
			"name": "BMC Hưng Long",
			"lat": 10.715867042541504,
			"lng": 106.73725891113281,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 96,
			"name": "Botanic Towers",
			"lat": 10.805459022521973,
			"lng": 106.68531799316406,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1911,
			"name": "Cao ốc Phú Nhuận",
			"lat": 10.808441162109375,
			"lng": 106.67300415039062,
			"cats": [55, 324, 326]
		}, {
			"id": 261,
			"name": "Centrepoint",
			"lat": 10.797017097473145,
			"lng": 106.67342376708984,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2005,
			"name": "Chung cư Phan Xích Long",
			"lat": 10.798846244812012,
			"lng": 106.68712615966797,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1963,
			"name": "Garden Gate",
			"lat": 10.809511184692383,
			"lng": 106.6744384765625,
			"cats": [48, 50, 59, 324, 326]
		}, {
			"id": 1621,
			"name": "Gia Thy Building",
			"lat": 10.806868553161621,
			"lng": 106.67586517333984,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2122,
			"name": "Golden Mansion",
			"lat": 10.808427810668945,
			"lng": 106.67012786865234,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 881,
			"name": "Intresco Tower",
			"lat": 10.799659729003906,
			"lng": 106.67012786865234,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2123,
			"name": "Kingston Residence",
			"lat": 10.798852920532227,
			"lng": 106.67050933837891,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1752,
			"name": "Lucky House",
			"lat": 10.791814804077148,
			"lng": 106.67424011230469,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1618,
			"name": "Lutaco Tower",
			"lat": 10.796021461486816,
			"lng": 106.67472839355469,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2366,
			"name": "Newton Residence",
			"lat": 10.798723220825195,
			"lng": 106.67306518554687,
			"cats": []
		}, {
			"id": 2002,
			"name": "Orchard Garden",
			"lat": 10.809760093688965,
			"lng": 106.67060852050781,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2343,
			"name": "Orchard Park View",
			"lat": 10.809781074523926,
			"lng": 106.67258453369141,
			"cats": []
		}, {
			"id": 129,
			"name": "PN-Techcons",
			"lat": 10.79872989654541,
			"lng": 106.68898010253906,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 347,
			"name": "Satra Citiland Plaza",
			"lat": 10.800759315490723,
			"lng": 106.68247222900391,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1042,
			"name": "Satra Eximland",
			"lat": 10.800753593444824,
			"lng": 106.68247985839844,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1183,
			"name": "The Prince Residence",
			"lat": 10.7919921875,
			"lng": 106.680908203125,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1673,
			"name": "VMG Building",
			"lat": 10.807344436645508,
			"lng": 106.67514038085937,
			"cats": [41, 48, 50, 163]
		}]
	}, {
		"id": 53,
		"name": "Quận 1",
		"pre": "",
		"ward": [{
			"id": 8633,
			"name": "Bến Nghé",
			"pre": "Phường"
		}, {
			"id": 8635,
			"name": "Bến Thành",
			"pre": "Phường"
		}, {
			"id": 8637,
			"name": "Cầu Kho",
			"pre": "Phường"
		}, {
			"id": 8638,
			"name": "Cầu Ông Lãnh",
			"pre": "Phường"
		}, {
			"id": 8636,
			"name": "Cô Giang",
			"pre": "Phường"
		}, {
			"id": 8640,
			"name": "Đa Kao",
			"pre": "Phường"
		}, {
			"id": 8642,
			"name": "Nguyễn Cư Trinh",
			"pre": "Phường"
		}, {
			"id": 8641,
			"name": "Nguyễn Thái Bình",
			"pre": "Phường"
		}, {
			"id": 8644,
			"name": "Phạm Ngũ Lão",
			"pre": "Phường"
		}, {
			"id": 8646,
			"name": "Tân Định",
			"pre": "Phường"
		}],
		"street": [{
			"id": 842,
			"name": "Alexandre",
			"pre": "Đường"
		}, {
			"id": 800,
			"name": "Bà Huyện Thanh Quan",
			"pre": "Phố"
		}, {
			"id": 947,
			"name": "Bà Lê Chân",
			"pre": "Đường"
		}, {
			"id": 948,
			"name": "Bến Chương Dương",
			"pre": "Đường"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 844,
			"name": "Bùi Viện",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 949,
			"name": "Calmette",
			"pre": "Đường"
		}, {
			"id": 6998,
			"name": "Camex",
			"pre": "Đường"
		}, {
			"id": 1076,
			"name": "Cao Bá Nhạ",
			"pre": "Đường"
		}, {
			"id": 845,
			"name": "Cao Bá Quát",
			"pre": "Đường"
		}, {
			"id": 945,
			"name": "Cây Điệp",
			"pre": "Đường"
		}, {
			"id": 2011,
			"name": "Chu Mạnh Trinh",
			"pre": "Đường"
		}, {
			"id": 2013,
			"name": "Cô Bắc",
			"pre": "Đường"
		}, {
			"id": 2014,
			"name": "Cô Giang",
			"pre": "Đường"
		}, {
			"id": 1075,
			"name": "Cống Quỳnh",
			"pre": "Đường"
		}, {
			"id": 846,
			"name": "Công Trường Lam Sơn",
			"pre": "Đường"
		}, {
			"id": 943,
			"name": "Công Trường Mê Linh",
			"pre": "Đường"
		}, {
			"id": 8019,
			"name": "Công Trường Quốc Tế",
			"pre": "Đường"
		}, {
			"id": 952,
			"name": "Công Xã Paris",
			"pre": "Đường"
		}, {
			"id": 5638,
			"name": "Đại Lộ Đông Tây",
			"pre": "Đường"
		}, {
			"id": 798,
			"name": "Đặng Dung",
			"pre": "Phố"
		}, {
			"id": 91,
			"name": "Đặng Tất",
			"pre": "Phố"
		}, {
			"id": 942,
			"name": "Đặng Thị Nhu",
			"pre": "Đường"
		}, {
			"id": 440,
			"name": "Đặng Trần Côn",
			"pre": "Phố"
		}, {
			"id": 1073,
			"name": "Đề Thám",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 99,
			"name": "Đinh Công Tráng",
			"pre": "Đường"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 1072,
			"name": "Đỗ Quang Đẩu",
			"pre": "Đường"
		}, {
			"id": 890,
			"name": "Đông Du",
			"pre": "Đường"
		}, {
			"id": 940,
			"name": "Đồng Khởi",
			"pre": "Đường"
		}, {
			"id": 102,
			"name": "Hai Bà Trưng",
			"pre": "Phố"
		}, {
			"id": 1071,
			"name": "Hải Triều",
			"pre": "Đường"
		}, {
			"id": 891,
			"name": "Hàm Nghi",
			"pre": "Đường"
		}, {
			"id": 939,
			"name": "Hàn Thuyên",
			"pre": "Đường"
		}, {
			"id": 957,
			"name": "Hồ Hảo Hớn",
			"pre": "Đường"
		}, {
			"id": 1070,
			"name": "Hồ Huấn Nghiệp",
			"pre": "Đường"
		}, {
			"id": 626,
			"name": "Hồ Tùng Mậu",
			"pre": "Đường"
		}, {
			"id": 1157,
			"name": "Hòa Hưng",
			"pre": "Đường"
		}, {
			"id": 3982,
			"name": "Hòa Mỹ",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 938,
			"name": "Hoàng Sa",
			"pre": "Đường"
		}, {
			"id": 958,
			"name": "Huyền Quang",
			"pre": "Đường"
		}, {
			"id": 1895,
			"name": "Huyền Trân Công Chúa",
			"pre": "Đường"
		}, {
			"id": 2636,
			"name": "Huỳnh Khương An",
			"pre": "Đường"
		}, {
			"id": 893,
			"name": "Huỳnh Khương Ninh",
			"pre": "Đường"
		}, {
			"id": 78,
			"name": "Huỳnh Thúc Kháng",
			"pre": "Đường"
		}, {
			"id": 963,
			"name": "Ký Con",
			"pre": "Đường"
		}, {
			"id": 5678,
			"name": "Lãnh Binh Thăng",
			"pre": "Đường"
		}, {
			"id": 1068,
			"name": "Lê Anh Xuân",
			"pre": "Đường"
		}, {
			"id": 894,
			"name": "Lê Công Kiều",
			"pre": "Đường"
		}, {
			"id": 89,
			"name": "Lê Duẩn",
			"pre": "Đường"
		}, {
			"id": 650,
			"name": "Lê Đức Thọ",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 348,
			"name": "Lê Quý Đôn",
			"pre": "Đường"
		}, {
			"id": 895,
			"name": "Lê Thánh Tôn",
			"pre": "Đường"
		}, {
			"id": 935,
			"name": "Lê Thị Hồng Gấm",
			"pre": "Đường"
		}, {
			"id": 973,
			"name": "Lê Thị Riêng",
			"pre": "Đường"
		}, {
			"id": 154,
			"name": "Lê Văn Hưu",
			"pre": "Phố"
		}, {
			"id": 896,
			"name": "Lương Hữu Khánh",
			"pre": "Đường"
		}, {
			"id": 934,
			"name": "Lưu Văn Lang",
			"pre": "Đường"
		}, {
			"id": 2333,
			"name": "Lý Chính Thắng",
			"pre": "Đường"
		}, {
			"id": 362,
			"name": "Lý Tự Trọng",
			"pre": "Đường"
		}, {
			"id": 414,
			"name": "Lý Văn Phúc",
			"pre": "Đường"
		}, {
			"id": 6716,
			"name": "Lý Văn Phức",
			"pre": "Đường"
		}, {
			"id": 8008,
			"name": "Mã Lộ",
			"pre": "Đường"
		}, {
			"id": 933,
			"name": "Mạc Đĩnh Chi",
			"pre": "Đường"
		}, {
			"id": 536,
			"name": "Mạc Thị Bưởi",
			"pre": "Phố"
		}, {
			"id": 1060,
			"name": "Mai Thị Lựu",
			"pre": "Đường"
		}, {
			"id": 898,
			"name": "Nam Kỳ Khởi Nghĩa",
			"pre": "Đường"
		}, {
			"id": 932,
			"name": "Nam Quốc Cang",
			"pre": "Đường"
		}, {
			"id": 977,
			"name": "Ngô Đức Kế",
			"pre": "Đường"
		}, {
			"id": 5551,
			"name": "Ngô Văn Năm",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 560,
			"name": "Nguyễn Bỉnh Khiêm",
			"pre": "Đường"
		}, {
			"id": 931,
			"name": "Nguyễn Cảnh Chân",
			"pre": "Đường"
		}, {
			"id": 517,
			"name": "Nguyễn Công Trứ",
			"pre": "Đường"
		}, {
			"id": 1056,
			"name": "Nguyễn Cư Trinh",
			"pre": "Đường"
		}, {
			"id": 537,
			"name": "Nguyễn Đình Chiểu",
			"pre": "Đường"
		}, {
			"id": 7144,
			"name": "Nguyễn Doãn Khanh",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 979,
			"name": "Nguyễn Huệ",
			"pre": "Đường"
		}, {
			"id": 2656,
			"name": "Nguyễn Hữu Cảnh",
			"pre": "Đường"
		}, {
			"id": 1054,
			"name": "Nguyễn Hữu Cầu",
			"pre": "Đường"
		}, {
			"id": 357,
			"name": "Nguyễn Hữu Nghĩa",
			"pre": "Đường"
		}, {
			"id": 495,
			"name": "Nguyễn Huy Tự",
			"pre": "Phố"
		}, {
			"id": 724,
			"name": "Nguyễn Khắc Nhu",
			"pre": "Phố"
		}, {
			"id": 980,
			"name": "Nguyễn Phi Khanh",
			"pre": "Đường"
		}, {
			"id": 233,
			"name": "Nguyễn Siêu",
			"pre": "Phố"
		}, {
			"id": 902,
			"name": "Nguyễn Thái Bình",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 981,
			"name": "Nguyễn Thành Ý",
			"pre": "Đường"
		}, {
			"id": 3325,
			"name": "Nguyễn Thị Diệu",
			"pre": "Đường"
		}, {
			"id": 6359,
			"name": "Nguyễn Thị Lắng",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 903,
			"name": "Nguyễn Thị Nghĩa",
			"pre": "Đường"
		}, {
			"id": 927,
			"name": "Nguyễn Thiệp",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 1048,
			"name": "Nguyễn Trung Ngạn",
			"pre": "Đường"
		}, {
			"id": 725,
			"name": "Nguyễn Trung Trực",
			"pre": "Đường"
		}, {
			"id": 926,
			"name": "Nguyễn Văn Bình",
			"pre": "Đường"
		}, {
			"id": 984,
			"name": "Nguyễn Văn Chiêm",
			"pre": "Đường"
		}, {
			"id": 87,
			"name": "Nguyễn Văn Côn",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 8835,
			"name": "Nguyễn Văn Đại",
			"pre": "Đường"
		}, {
			"id": 905,
			"name": "Nguyễn Văn Giai",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 3326,
			"name": "Nguyễn Văn Mai",
			"pre": "Đường"
		}, {
			"id": 925,
			"name": "Nguyễn Văn Nguyễn",
			"pre": "Đường"
		}, {
			"id": 985,
			"name": "Nguyễn Văn Thủ",
			"pre": "Đường"
		}, {
			"id": 6245,
			"name": "Nguyễn Văn Tráng",
			"pre": "Đường"
		}, {
			"id": 341,
			"name": "Nguyễn Văn Trỗi",
			"pre": "Đường"
		}, {
			"id": 3815,
			"name": "Nguyễn Văn Trường",
			"pre": "Đường"
		}, {
			"id": 1045,
			"name": "Pasteur",
			"pre": "Đường"
		}, {
			"id": 751,
			"name": "Phạm Hồng Thái",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 212,
			"name": "Phạm Ngũ Lão",
			"pre": "Đường"
		}, {
			"id": 987,
			"name": "Phạm Viết Chánh",
			"pre": "Đường"
		}, {
			"id": 126,
			"name": "Phan Bội Châu",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 749,
			"name": "Phan Kế Bính",
			"pre": "Đường"
		}, {
			"id": 989,
			"name": "Phan Liêm",
			"pre": "Đường"
		}, {
			"id": 1037,
			"name": "Phan Ngữ",
			"pre": "Đường"
		}, {
			"id": 908,
			"name": "Phan Tôn",
			"pre": "Đường"
		}, {
			"id": 922,
			"name": "Phan Văn Đạt",
			"pre": "Đường"
		}, {
			"id": 677,
			"name": "Phan Văn Trường",
			"pre": "Phố"
		}, {
			"id": 576,
			"name": "Phó Đức Chính",
			"pre": "Phố"
		}, {
			"id": 497,
			"name": "Phùng Khắc Khoan",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 921,
			"name": "Sương Nguyệt Ánh",
			"pre": "Đường"
		}, {
			"id": 992,
			"name": "Thạch Thị Thanh",
			"pre": "Đường"
		}, {
			"id": 6490,
			"name": "Thái Bình",
			"pre": "Đường"
		}, {
			"id": 1028,
			"name": "Thái Văn Lung",
			"pre": "Đường"
		}, {
			"id": 500,
			"name": "Thi Sách",
			"pre": "Phố"
		}, {
			"id": 920,
			"name": "Thủ Khoa Huân",
			"pre": "Đường"
		}, {
			"id": 428,
			"name": "Tôn Đức Thắng",
			"pre": "Phố"
		}, {
			"id": 1009,
			"name": "Tôn Thất Đạm",
			"pre": "Đường"
		}, {
			"id": 730,
			"name": "Tôn Thất Thiệp",
			"pre": "Phố"
		}, {
			"id": 385,
			"name": "Tôn Thất Tùng",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 544,
			"name": "Trần Cao Vân",
			"pre": "Đường"
		}, {
			"id": 1007,
			"name": "Trần Đình Xu",
			"pre": "Đường"
		}, {
			"id": 912,
			"name": "Trần Doãn Khanh",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 997,
			"name": "Trần Khắc Chân",
			"pre": "Đường"
		}, {
			"id": 139,
			"name": "Trần Khánh Dư",
			"pre": "Đường"
		}, {
			"id": 913,
			"name": "Trần Nhật Duật",
			"pre": "Đường"
		}, {
			"id": 138,
			"name": "Trần Quang Khải",
			"pre": "Đường"
		}, {
			"id": 3086,
			"name": "Trần Quốc Thảo",
			"pre": "Đường"
		}, {
			"id": 999,
			"name": "Trần Quý Khoách",
			"pre": "Đường"
		}, {
			"id": 1244,
			"name": "Trần Tuấn Khải",
			"pre": "Đường"
		}, {
			"id": 4084,
			"name": "Trần Văn Kỷ",
			"pre": "Đường"
		}, {
			"id": 1003,
			"name": "Trịnh Văn Cấn",
			"pre": "Đường"
		}, {
			"id": 461,
			"name": "Trương Định",
			"pre": "Đường"
		}, {
			"id": 220,
			"name": "Trương Hán Siêu",
			"pre": "Đường"
		}, {
			"id": 1485,
			"name": "Trường Sa",
			"pre": "Đường"
		}, {
			"id": 1534,
			"name": "Tú Xương",
			"pre": "Đường"
		}, {
			"id": 505,
			"name": "Vạn Kiếp",
			"pre": "Phố"
		}, {
			"id": 2724,
			"name": "Võ Thị Sáu",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 2070,
			"name": "Xô Viết Nghệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 1002,
			"name": "Yersin",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1903,
			"name": "10A Trần Nhật Duật",
			"lat": 10.79472827911377,
			"lng": 106.68875885009766,
			"cats": [55, 324, 326]
		}, {
			"id": 1564,
			"name": "203 Nguyễn Trãi",
			"lat": 10.766036987304688,
			"lng": 106.68797302246094,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1992,
			"name": "Abacus Tower",
			"lat": 10.789052963256836,
			"lng": 106.69992828369141,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2335,
			"name": "Ascott Waterfront Saigon",
			"lat": 10.782614707946777,
			"lng": 106.70549011230469,
			"cats": []
		}, {
			"id": 1800,
			"name": "Avalon Saigon Apartments",
			"lat": 10.779690742492676,
			"lng": 106.69541168212891,
			"cats": [55, 324, 326]
		}, {
			"id": 1566,
			"name": "Ben Thanh Times Square",
			"lat": 10.767124176025391,
			"lng": 106.69852447509766,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 453,
			"name": "Bitexco Financial",
			"lat": 10.771620750427246,
			"lng": 106.70449066162109,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 263,
			"name": "BMC Bến Chương Dương",
			"lat": 10.759797096252441,
			"lng": 106.69319915771484,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 98,
			"name": "Central Garden",
			"lat": 10.761264801025391,
			"lng": 106.69563293457031,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 319,
			"name": "Chung cư Thế Hệ Mới",
			"lat": 10.760112762451172,
			"lng": 106.69343566894531,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1483,
			"name": "Citilight Tower",
			"lat": 10.790254592895508,
			"lng": 106.69476318359375,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1898,
			"name": "Compass Living Park View",
			"lat": 10.772612571716309,
			"lng": 106.69321441650391,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1104,
			"name": "Cống Quỳnh Plaza",
			"lat": 10.76667308807373,
			"lng": 106.68806457519531,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 254,
			"name": "Empire Tower",
			"lat": 10.770987510681152,
			"lng": 106.70484161376953,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 260,
			"name": "HMTC Building",
			"lat": 10.784470558166504,
			"lng": 106.69650268554687,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 646,
			"name": "Horizon",
			"lat": 10.791884422302246,
			"lng": 106.687744140625,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1709,
			"name": "IBC Building",
			"lat": 10.776081085205078,
			"lng": 106.70647430419922,
			"cats": [41, 50, 55, 163]
		}, {
			"id": 1572,
			"name": "IMG Building",
			"lat": 10.787869453430176,
			"lng": 106.69890594482422,
			"cats": [41, 50, 59, 163]
		}, {
			"id": 113,
			"name": "Indochina",
			"lat": 10.791642189025879,
			"lng": 106.70240020751953,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 114,
			"name": "International Plaza",
			"lat": 10.767263412475586,
			"lng": 106.69010162353516,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1094,
			"name": "Lancaster Nguyễn Trãi",
			"lat": 10.764755249023437,
			"lng": 106.68629455566406,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1502,
			"name": "Lim Tower",
			"lat": 10.774352073669434,
			"lng": 106.70654296875,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 2460,
			"name": "Madison 15 Thi Sách",
			"lat": 10.778396606445313,
			"lng": 106.70409393310547,
			"cats": []
		}, {
			"id": 1982,
			"name": "Mai Hồng Quế Building",
			"lat": 10.790431976318359,
			"lng": 106.69095611572266,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2125,
			"name": "Mê Linh Point Tower",
			"lat": 10.774513244628906,
			"lng": 106.70600891113281,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1619,
			"name": "Parksimex Building",
			"lat": 10.776617050170898,
			"lng": 106.70511627197266,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1705,
			"name": "Resco Building",
			"lat": 10.777509689331055,
			"lng": 106.69822692871094,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 813,
			"name": "Sacomreal Generalimex",
			"lat": 10.76988410949707,
			"lng": 106.69982147216797,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2469,
			"name": "Sài Gòn Mê Linh Tower",
			"lat": 10.776460647583008,
			"lng": 106.70565032958984,
			"cats": []
		}, {
			"id": 2025,
			"name": "Saigon Centre",
			"lat": 10.773184776306152,
			"lng": 106.70055389404297,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1707,
			"name": "Saigon Land Building",
			"lat": 10.782467842102051,
			"lng": 106.70519256591797,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1107,
			"name": "Saigon One Tower",
			"lat": 10.770014762878418,
			"lng": 106.70554351806641,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1704,
			"name": "Saigon Trade Center",
			"lat": 10.784090995788574,
			"lng": 106.70365905761719,
			"cats": [41, 50, 55, 163]
		}, {
			"id": 892,
			"name": "Sailing Tower",
			"lat": 10.779865264892578,
			"lng": 106.69586944580078,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1994,
			"name": "Smart View",
			"lat": 10.766300201416016,
			"lng": 106.69400024414062,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1710,
			"name": "Star Building",
			"lat": 10.78474235534668,
			"lng": 106.69902038574219,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1677,
			"name": "Sunwah Tower",
			"lat": 10.773791313171387,
			"lng": 106.70344543457031,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 1984,
			"name": "Thái Sơn Building",
			"lat": 10.762587547302246,
			"lng": 106.68736267089844,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 526,
			"name": "The Lancaster HCM",
			"lat": 10.781082153320313,
			"lng": 106.70478057861328,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 790,
			"name": "The ONE Ho Chi Minh City",
			"lat": 10.770162582397461,
			"lng": 106.69828796386719,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1868,
			"name": "TKT Office Building",
			"lat": 10.756773948669434,
			"lng": 106.68589019775391,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1979,
			"name": "V\u0026D Building",
			"lat": 10.761585235595703,
			"lng": 106.69002532958984,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 334,
			"name": "Valentina Court",
			"lat": 10.788854598999023,
			"lng": 106.69651794433594,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1867,
			"name": "Viet Dragon Tower",
			"lat": 10.772839546203613,
			"lng": 106.69344329833984,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1438,
			"name": "Vietcombank Tower HCM",
			"lat": 10.775577545166016,
			"lng": 106.70532989501953,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 1559,
			"name": "Vinaconex Building",
			"lat": 10.790928840637207,
			"lng": 106.69839477539062,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 447,
			"name": "Vincom Center TP HCM",
			"lat": 10.778331756591797,
			"lng": 106.701904296875,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 451,
			"name": "Vincom Financial Tower",
			"lat": 10.768757820129395,
			"lng": 106.70114898681641,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2393,
			"name": "Vinhomes Golden River Ba Son",
			"lat": 10.782538414001465,
			"lng": 106.70750427246094,
			"cats": []
		}, {
			"id": 258,
			"name": "VP Tower",
			"lat": 10.770682334899902,
			"lng": 106.70230865478516,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2114,
			"name": "VRG River View",
			"lat": 10.754638671875,
			"lng": 106.68699645996094,
			"cats": [48, 55, 59, 324, 326]
		}]
	}, {
		"id": 62,
		"name": "Quận 10",
		"pre": "",
		"ward": [{
			"id": 8803,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8813,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8814,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8815,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8816,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8817,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8818,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 8804,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 8805,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8806,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8807,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8808,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8809,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8810,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8811,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 1000,
			"name": "3/2",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 1209,
			"name": "Âu Dương Lân",
			"pre": "Đường"
		}, {
			"id": 1218,
			"name": "Ba Đình",
			"pre": "Đường"
		}, {
			"id": 1077,
			"name": "Bà Hạt",
			"pre": "Đường"
		}, {
			"id": 1105,
			"name": "Ba Vì",
			"pre": "Đường"
		}, {
			"id": 824,
			"name": "Bắc Hải",
			"pre": "Đường"
		}, {
			"id": 1078,
			"name": "Bạch Mã",
			"pre": "Đường"
		}, {
			"id": 3322,
			"name": "Bàn Cờ",
			"pre": "Đường"
		}, {
			"id": 1251,
			"name": "Bến Bình Đông",
			"pre": "Đường"
		}, {
			"id": 1243,
			"name": "Bến Nguyễn Duy",
			"pre": "Đường"
		}, {
			"id": 1032,
			"name": "Bình Thới",
			"pre": "Đường"
		}, {
			"id": 1267,
			"name": "Bùi Huy Bích",
			"pre": "Đường"
		}, {
			"id": 1095,
			"name": "Bửu Long",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 711,
			"name": "Cao Lỗ",
			"pre": "Đường"
		}, {
			"id": 346,
			"name": "Cao Thắng",
			"pre": "Đường"
		}, {
			"id": 4904,
			"name": "Chấn Hưng",
			"pre": "Đường"
		}, {
			"id": 1079,
			"name": "Châu Thới",
			"pre": "Đường"
		}, {
			"id": 9042,
			"name": "Cư Xá Bắc Hải",
			"pre": "Đường"
		}, {
			"id": 8960,
			"name": "Cư Xá Đồng Tiến",
			"pre": "Đường"
		}, {
			"id": 9144,
			"name": "Cư Xá Nguyễn Trung Trực",
			"pre": "Đường"
		}, {
			"id": 1081,
			"name": "Cửu Long",
			"pre": "Đường"
		}, {
			"id": 1214,
			"name": "Dạ Nam",
			"pre": "Đường"
		}, {
			"id": 1213,
			"name": "Đặng Chất",
			"pre": "Đường"
		}, {
			"id": 402,
			"name": "Đào Duy Anh",
			"pre": "Đường"
		}, {
			"id": 1096,
			"name": "Đào Duy Từ",
			"pre": "Đường"
		}, {
			"id": 1983,
			"name": "Đất Thánh",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 1260,
			"name": "Đinh Hòa",
			"pre": "Đường"
		}, {
			"id": 1239,
			"name": "Đông Hồ",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 1156,
			"name": "Đồng Nai",
			"pre": "Đường"
		}, {
			"id": 3005,
			"name": "Đồng Tiến",
			"pre": "Đường"
		}, {
			"id": 6196,
			"name": "Gia Phú",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 1082,
			"name": "Hồ Bá Kiện",
			"pre": "Đường"
		}, {
			"id": 1098,
			"name": "Hồ Thị Kỷ",
			"pre": "Đường"
		}, {
			"id": 1008,
			"name": "Hòa Hảo",
			"pre": "Đường"
		}, {
			"id": 1157,
			"name": "Hòa Hưng",
			"pre": "Đường"
		}, {
			"id": 5720,
			"name": "Hoàng Dư Khương",
			"pre": "Đường"
		}, {
			"id": 1053,
			"name": "Hồng Bàng",
			"pre": "Đường"
		}, {
			"id": 1099,
			"name": "Hồng Lĩnh",
			"pre": "Đường"
		}, {
			"id": 1113,
			"name": "Hưng Long",
			"pre": "Đường"
		}, {
			"id": 1220,
			"name": "Hưng Phú",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 1083,
			"name": "Hương Giang",
			"pre": "Đường"
		}, {
			"id": 1229,
			"name": "Huỳnh Thị Phụng",
			"pre": "Đường"
		}, {
			"id": 621,
			"name": "Lạc Long Quân",
			"pre": "Đường"
		}, {
			"id": 1055,
			"name": "Lê Đại Hành",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 1233,
			"name": "Lê Quang Kim",
			"pre": "Đường"
		}, {
			"id": 973,
			"name": "Lê Thị Riêng",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 204,
			"name": "Lương Ngọc Quyến",
			"pre": "Đường"
		}, {
			"id": 1258,
			"name": "Lưu Quý Kỳ",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 237,
			"name": "Lý Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 1265,
			"name": "Mạc Vân",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 285,
			"name": "Ngô Gia Tự",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 121,
			"name": "Nguyễn Chế Nghĩa",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 1191,
			"name": "Nguyễn Duy Dương",
			"pre": "Đường"
		}, {
			"id": 1087,
			"name": "Nguyễn Giản Thanh",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 1219,
			"name": "Nguyễn Kim",
			"pre": "Đường"
		}, {
			"id": 1131,
			"name": "Nguyễn Lâm",
			"pre": "Đường"
		}, {
			"id": 1162,
			"name": "Nguyễn Ngọc Lộc",
			"pre": "Đường"
		}, {
			"id": 1206,
			"name": "Nguyễn Thị Tần",
			"pre": "Đường"
		}, {
			"id": 147,
			"name": "Nguyễn Thiện Thuật",
			"pre": "Phố"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 1101,
			"name": "Nguyễn Tiểu La",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 725,
			"name": "Nguyễn Trung Trực",
			"pre": "Đường"
		}, {
			"id": 1263,
			"name": "Nguyễn Văn Của",
			"pre": "Đường"
		}, {
			"id": 1041,
			"name": "Nhật Tảo",
			"pre": "Đường"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 1216,
			"name": "Phạm Thế Hiển",
			"pre": "Đường"
		}, {
			"id": 1200,
			"name": "Rạch Ông",
			"pre": "Đường"
		}, {
			"id": 1091,
			"name": "Sư Vạn Hạnh",
			"pre": "Đường"
		}, {
			"id": 498,
			"name": "Tạ Quang Bửu",
			"pre": "Phố"
		}, {
			"id": 1102,
			"name": "Tam Đảo",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 1227,
			"name": "Tản Đà",
			"pre": "Đường"
		}, {
			"id": 1029,
			"name": "Tân Phước",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 514,
			"name": "Thái Phiên",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 1171,
			"name": "Thành Thái",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 1093,
			"name": "Thất Sơn",
			"pre": "Đường"
		}, {
			"id": 1723,
			"name": "Thiên Hộ Dương",
			"pre": "Đường"
		}, {
			"id": 355,
			"name": "Tô Hiến Thành",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 4250,
			"name": "Trần Minh Quyền",
			"pre": "Đường"
		}, {
			"id": 218,
			"name": "Trần Nguyên Hãn",
			"pre": "Phố"
		}, {
			"id": 1173,
			"name": "Trần Nhân Tôn",
			"pre": "Đường"
		}, {
			"id": 5652,
			"name": "Trần Thiện Chánh",
			"pre": "Đường"
		}, {
			"id": 4873,
			"name": "Trần Văn Hoàng",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 1094,
			"name": "Trường Sơn",
			"pre": "Đường"
		}, {
			"id": 1264,
			"name": "Tuy Lý Vương",
			"pre": "Đường"
		}, {
			"id": 1253,
			"name": "Vĩnh Nam",
			"pre": "Đường"
		}, {
			"id": 1046,
			"name": "Vĩnh Viễn",
			"pre": "Đường"
		}, {
			"id": 1235,
			"name": "Võ Trứ",
			"pre": "Đường"
		}, {
			"id": 1247,
			"name": "Xóm Củi",
			"pre": "Đường"
		}],
		"project": [{
			"id": 670,
			"name": "Ấn Quang",
			"lat": 10.765694618225098,
			"lng": 106.67097473144531,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2266,
			"name": "Charmington La Pointe",
			"lat": 10.774449348449707,
			"lng": 106.67457580566406,
			"cats": [57, 324, 326]
		}, {
			"id": 1527,
			"name": "Chung cư Ngô Gia Tự",
			"lat": 10.762373924255371,
			"lng": 106.67213439941406,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1873,
			"name": "Đào Duy Từ",
			"lat": 10.770593643188477,
			"lng": 106.66315460205078,
			"cats": [55, 324, 326]
		}, {
			"id": 2419,
			"name": "Hà Đô 756 Sài Gòn",
			"lat": 10.776251792907715,
			"lng": 106.67926788330078,
			"cats": []
		}, {
			"id": 1739,
			"name": "Hà Đô Villas",
			"lat": 10.773082733154297,
			"lng": 106.66995239257812,
			"cats": [40, 48, 50, 59, 325]
		}, {
			"id": 655,
			"name": "Nguyễn Kim",
			"lat": 10.761591911315918,
			"lng": 106.6617431640625,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1570,
			"name": "Samco Building",
			"lat": 10.759072303771973,
			"lng": 106.66465759277344,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 256,
			"name": "Tenimex Office",
			"lat": 10.765415191650391,
			"lng": 106.67314147949219,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 671,
			"name": "Thành Thái - King Center",
			"lat": 10.769742012023926,
			"lng": 106.66360473632812,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 343,
			"name": "Thiên Nam Apartment",
			"lat": 10.771642684936523,
			"lng": 106.66178131103516,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 645,
			"name": "Tô Hiến Thành",
			"lat": 10.775464057922363,
			"lng": 106.66561126708984,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1043,
			"name": "Toplife Tower",
			"lat": 10.77430534362793,
			"lng": 106.68035888671875,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1891,
			"name": "Trần Văn Kiểu",
			"lat": 10.766778945922852,
			"lng": 106.66036224365234,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2026,
			"name": "Viettel Complex",
			"lat": 10.777587890625,
			"lng": 106.6800537109375,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 2175,
			"name": "Xi Grand Court",
			"lat": 10.767601013183594,
			"lng": 106.65940856933594,
			"cats": [50, 57, 324, 326]
		}]
	}, {
		"id": 63,
		"name": "Quận 11",
		"pre": "",
		"ward": [{
			"id": 8833,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8842,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8843,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8844,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8845,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8846,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8847,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 8848,
			"name": "16",
			"pre": "Phường"
		}, {
			"id": 8834,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 8835,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8836,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8837,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8838,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8839,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8840,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8841,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 8492,
			"name": "1 Cư xá Lữ Gia",
			"pre": "Đường"
		}, {
			"id": 9714,
			"name": "100",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 8728,
			"name": "2 Cư Xá Lữ Gia",
			"pre": "Đường"
		}, {
			"id": 10923,
			"name": "281",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 6925,
			"name": "3 Cư xá Lữ Gia",
			"pre": "Đường"
		}, {
			"id": 1000,
			"name": "3/2",
			"pre": "Đường"
		}, {
			"id": 2876,
			"name": "34",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 4359,
			"name": "5A",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 8220,
			"name": "7A",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 778,
			"name": "Âu Cơ",
			"pre": "Đường"
		}, {
			"id": 1032,
			"name": "Bình Thới",
			"pre": "Đường"
		}, {
			"id": 1049,
			"name": "Công Chúa Ngọc Hân",
			"pre": "Đường"
		}, {
			"id": 8380,
			"name": "Cư Xá Lữ Gia",
			"pre": "Đường"
		}, {
			"id": 9201,
			"name": "Cư Xá Phú Bình",
			"pre": "Đường"
		}, {
			"id": 2072,
			"name": "Đặng Minh Khiêm",
			"pre": "Đường"
		}, {
			"id": 1004,
			"name": "Đào Nguyên Phổ",
			"pre": "Đường"
		}, {
			"id": 1034,
			"name": "Đỗ Ngọc Thạnh",
			"pre": "Đường"
		}, {
			"id": 1050,
			"name": "Đội Cung",
			"pre": "Đường"
		}, {
			"id": 964,
			"name": "Dương Đình Nghệ",
			"pre": "Đường"
		}, {
			"id": 1006,
			"name": "Dương Tử Giang",
			"pre": "Đường"
		}, {
			"id": 1036,
			"name": "Hà Tôn Quyền",
			"pre": "Đường"
		}, {
			"id": 5701,
			"name": "Hàn Hải Nguyên",
			"pre": "Đường"
		}, {
			"id": 965,
			"name": "Hòa Bình",
			"pre": "Đường"
		}, {
			"id": 1008,
			"name": "Hòa Hảo",
			"pre": "Đường"
		}, {
			"id": 6847,
			"name": "Hoàng Đức Tương",
			"pre": "Phố"
		}, {
			"id": 1053,
			"name": "Hồng Bàng",
			"pre": "Đường"
		}, {
			"id": 974,
			"name": "Huyện Toại",
			"pre": "Đường"
		}, {
			"id": 6416,
			"name": "Kênh Tân Hóa",
			"pre": "Đường"
		}, {
			"id": 3281,
			"name": "Khuông Việt",
			"pre": "Đường"
		}, {
			"id": 621,
			"name": "Lạc Long Quân",
			"pre": "Đường"
		}, {
			"id": 5678,
			"name": "Lãnh Binh Thăng",
			"pre": "Đường"
		}, {
			"id": 1055,
			"name": "Lê Đại Hành",
			"pre": "Đường"
		}, {
			"id": 983,
			"name": "Lê Thị Bạch Cát",
			"pre": "Đường"
		}, {
			"id": 1024,
			"name": "Lê Tung",
			"pre": "Đường"
		}, {
			"id": 1039,
			"name": "Lò Siêu",
			"pre": "Đường"
		}, {
			"id": 3620,
			"name": "Lữ Gia",
			"pre": "Đường"
		}, {
			"id": 152,
			"name": "Lý Nam Đế",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 1025,
			"name": "Minh Phụng",
			"pre": "Đường"
		}, {
			"id": 1040,
			"name": "Nguyễn Bá Học",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 988,
			"name": "Nguyễn Thị Nhỏ",
			"pre": "Đường"
		}, {
			"id": 1026,
			"name": "Nguyễn Văn Phú",
			"pre": "Đường"
		}, {
			"id": 1041,
			"name": "Nhật Tảo",
			"pre": "Đường"
		}, {
			"id": 9038,
			"name": "Ông Bích Khiêm",
			"pre": "Đường"
		}, {
			"id": 726,
			"name": "Ông Ích Khiêm",
			"pre": "Đường"
		}, {
			"id": 991,
			"name": "Phan Xích Long",
			"pre": "Đường"
		}, {
			"id": 1027,
			"name": "Phó Cơ Điều",
			"pre": "Đường"
		}, {
			"id": 1042,
			"name": "Phú Thọ",
			"pre": "Đường"
		}, {
			"id": 6029,
			"name": "Quân Sự",
			"pre": "Đường"
		}, {
			"id": 1061,
			"name": "Tạ Uyên",
			"pre": "Đường"
		}, {
			"id": 4258,
			"name": "Tân Hóa",
			"pre": "Đường"
		}, {
			"id": 993,
			"name": "Tân Khai",
			"pre": "Đường"
		}, {
			"id": 1029,
			"name": "Tân Phước",
			"pre": "Đường"
		}, {
			"id": 1043,
			"name": "Tân Thành",
			"pre": "Đường"
		}, {
			"id": 6381,
			"name": "Tân Thới Hiệp 07",
			"pre": "Đường"
		}, {
			"id": 514,
			"name": "Thái Phiên",
			"pre": "Đường"
		}, {
			"id": 4877,
			"name": "Thiên Phước",
			"pre": "Đường"
		}, {
			"id": 7024,
			"name": "Thới An 11",
			"pre": "Đường"
		}, {
			"id": 996,
			"name": "Thuận Kiều",
			"pre": "Đường"
		}, {
			"id": 8289,
			"name": "Thuận Việt",
			"pre": "Đường"
		}, {
			"id": 368,
			"name": "Tô Hiệu",
			"pre": "Đường"
		}, {
			"id": 1030,
			"name": "Tôn Thất Hiệp",
			"pre": "Đường"
		}, {
			"id": 1044,
			"name": "Tổng Lung",
			"pre": "Đường"
		}, {
			"id": 3032,
			"name": "Tống Văn Trân",
			"pre": "Đường"
		}, {
			"id": 998,
			"name": "Trần Quý",
			"pre": "Đường"
		}, {
			"id": 2393,
			"name": "Trịnh Đình Thảo",
			"pre": "Đường"
		}, {
			"id": 3279,
			"name": "Trịnh Đình Trọng",
			"pre": "Đường"
		}, {
			"id": 504,
			"name": "Tuệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 1046,
			"name": "Vĩnh Viễn",
			"pre": "Đường"
		}, {
			"id": 8230,
			"name": "Xa Lộ Đại Hàn",
			"pre": "Đường"
		}, {
			"id": 1066,
			"name": "Xóm Đất",
			"pre": "Đường"
		}, {
			"id": 4795,
			"name": "Xuyên Á",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1523,
			"name": "Bigemco",
			"lat": 10.77534294128418,
			"lng": 106.65589904785156,
			"cats": [55, 324, 326]
		}, {
			"id": 1606,
			"name": "Căn hộ Khải Hoàn",
			"lat": 10.773556709289551,
			"lng": 106.64756011962891,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1866,
			"name": "Cây Mai",
			"lat": 10.755464553833008,
			"lng": 106.65080261230469,
			"cats": [55, 324, 326]
		}, {
			"id": 2063,
			"name": "Chung cư 312 Lạc Long Quân",
			"lat": 10.76789379119873,
			"lng": 106.64366149902344,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1537,
			"name": "Chung cư Phú Thọ",
			"lat": 10.77130126953125,
			"lng": 106.65332794189453,
			"cats": [55, 324, 326]
		}, {
			"id": 513,
			"name": "Đầm Sen",
			"lat": 10.762916564941406,
			"lng": 106.63658142089844,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1221,
			"name": "Lotus Apartment",
			"lat": 10.766078948974609,
			"lng": 106.64296722412109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 345,
			"name": "Lữ Gia Plaza",
			"lat": 10.771562576293945,
			"lng": 106.65316772460937,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1368,
			"name": "Tân Phước Plaza",
			"lat": 10.761079788208008,
			"lng": 106.65992736816406,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 89,
			"name": "The EverRich I",
			"lat": 10.763243675231934,
			"lng": 106.65711975097656,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 830,
			"name": "The Flemington",
			"lat": 10.764791488647461,
			"lng": 106.65550231933594,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2217,
			"name": "The Park Avenue",
			"lat": 10.763023376464844,
			"lng": 106.65801239013672,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 143,
			"name": "Thuận Việt",
			"lat": 10.776687622070312,
			"lng": 106.65457916259766,
			"cats": [48, 55, 57, 59, 324, 326]
		}, {
			"id": 1999,
			"name": "Tuệ Tĩnh",
			"lat": 10.762060165405273,
			"lng": 106.65449523925781,
			"cats": [48, 55, 324, 326]
		}]
	}, {
		"id": 64,
		"name": "Quận 12",
		"pre": "",
		"ward": [{
			"id": 8857,
			"name": "An Phú Đông",
			"pre": "Phường"
		}, {
			"id": 8861,
			"name": "Đông Hưng Thuận",
			"pre": "Phường"
		}, {
			"id": 8851,
			"name": "Hiệp Thành",
			"pre": "Phường"
		}, {
			"id": 8855,
			"name": "Tân Chánh Hiệp",
			"pre": "Phường"
		}, {
			"id": 8862,
			"name": "Tân Hưng Thuận",
			"pre": "Phường"
		}, {
			"id": 8856,
			"name": "Tân Thới Hiệp",
			"pre": "Phường"
		}, {
			"id": 8859,
			"name": "Tân Thới Nhất",
			"pre": "Phường"
		}, {
			"id": 8854,
			"name": "Thạnh Lộc",
			"pre": "Phường"
		}, {
			"id": 205,
			"name": "Thạnh Xuân",
			"pre": "Phường"
		}, {
			"id": 8853,
			"name": "Thới An",
			"pre": "Phường"
		}, {
			"id": 8858,
			"name": "Trung Mỹ Tây",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 10745,
			"name": "25B",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 2520,
			"name": "39",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 2894,
			"name": "48",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 5844,
			"name": "9A",
			"pre": "Đường"
		}, {
			"id": 7207,
			"name": "An Lộc",
			"pre": "Đường"
		}, {
			"id": 1323,
			"name": "An Phú Đông",
			"pre": "Đường"
		}, {
			"id": 9086,
			"name": "An Phú Đông 1",
			"pre": "Đường"
		}, {
			"id": 8612,
			"name": "An Phú Đông 10",
			"pre": "Đường"
		}, {
			"id": 7599,
			"name": "An Phú Đông 12",
			"pre": "Đường"
		}, {
			"id": 7159,
			"name": "An Phú Đông 13",
			"pre": "Đường"
		}, {
			"id": 9384,
			"name": "An Phú Đông 17",
			"pre": "Đường"
		}, {
			"id": 10280,
			"name": "An Phú Đông 22",
			"pre": "Đường"
		}, {
			"id": 8023,
			"name": "An Phú Đông 25",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 9822,
			"name": "An Phú Đông 3",
			"pre": "Đường"
		}, {
			"id": 10279,
			"name": "An Phú Đông 31",
			"pre": "Đường"
		}, {
			"id": 6358,
			"name": "An Phú Đông 9",
			"pre": "Đường"
		}, {
			"id": 179,
			"name": "Bà Triệu",
			"pre": "Phố"
		}, {
			"id": 1333,
			"name": "Bùi Công Trừng",
			"pre": "Đường"
		}, {
			"id": 1344,
			"name": "Bùi Văn Ngữ",
			"pre": "Đường"
		}, {
			"id": 3071,
			"name": "C1",
			"pre": "Đường"
		}, {
			"id": 3073,
			"name": "C3",
			"pre": "Đường"
		}, {
			"id": 1330,
			"name": "Cây Sao",
			"pre": "Đường"
		}, {
			"id": 1326,
			"name": "Chiến Khu",
			"pre": "Đường"
		}, {
			"id": 6579,
			"name": "Cù Lao Thượng",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 8159,
			"name": "D6",
			"pre": "Đường"
		}, {
			"id": 10327,
			"name": "DD10",
			"pre": "Đường"
		}, {
			"id": 10312,
			"name": "DD11",
			"pre": "Đường"
		}, {
			"id": 9014,
			"name": "DD12",
			"pre": "Đường"
		}, {
			"id": 10313,
			"name": "DD2",
			"pre": "Đường"
		}, {
			"id": 10321,
			"name": "DD4",
			"pre": "Đường"
		}, {
			"id": 10316,
			"name": "DD4-1",
			"pre": "Đường"
		}, {
			"id": 10317,
			"name": "DD4-2",
			"pre": "Đường"
		}, {
			"id": 8895,
			"name": "DD5",
			"pre": "Đường"
		}, {
			"id": 10315,
			"name": "DD6",
			"pre": "Đường"
		}, {
			"id": 10314,
			"name": "DD6-1",
			"pre": "Đường"
		}, {
			"id": 10323,
			"name": "DD7",
			"pre": "Đường"
		}, {
			"id": 10311,
			"name": "DD7-1",
			"pre": "Đường"
		}, {
			"id": 10319,
			"name": "DD9",
			"pre": "Đường"
		}, {
			"id": 6623,
			"name": "Đình Giao Khẩu",
			"pre": "Đường"
		}, {
			"id": 7725,
			"name": "DN10",
			"pre": "Đường"
		}, {
			"id": 10324,
			"name": "DN11",
			"pre": "Đường"
		}, {
			"id": 10322,
			"name": "DN12",
			"pre": "Đường"
		}, {
			"id": 9882,
			"name": "DN13",
			"pre": "Đường"
		}, {
			"id": 10325,
			"name": "DN4",
			"pre": "Đường"
		}, {
			"id": 7745,
			"name": "DN5",
			"pre": "Đường"
		}, {
			"id": 10320,
			"name": "DN6",
			"pre": "Đường"
		}, {
			"id": 6855,
			"name": "DN7",
			"pre": "Đường"
		}, {
			"id": 10326,
			"name": "DN8",
			"pre": "Đường"
		}, {
			"id": 10328,
			"name": "DN9",
			"pre": "Đường"
		}, {
			"id": 9665,
			"name": "Đỗ Quyên",
			"pre": "Đường"
		}, {
			"id": 6385,
			"name": "Đông Bắc",
			"pre": "Đường"
		}, {
			"id": 6768,
			"name": "Đông Hưng Thuận",
			"pre": "Đường"
		}, {
			"id": 8177,
			"name": "Đông Hưng Thuận 10",
			"pre": "Đường"
		}, {
			"id": 9275,
			"name": "Đông Hưng Thuận 11",
			"pre": "Đường"
		}, {
			"id": 9824,
			"name": "Đông Hưng Thuận 12",
			"pre": "Đường"
		}, {
			"id": 8979,
			"name": "Đông Hưng Thuận 13",
			"pre": "Đường"
		}, {
			"id": 9796,
			"name": "Đông Hưng Thuận 14B",
			"pre": "Đường"
		}, {
			"id": 10471,
			"name": "Đông Hưng Thuận 15",
			"pre": "Đường"
		}, {
			"id": 9202,
			"name": "Đông Hưng Thuận 16",
			"pre": "Đường"
		}, {
			"id": 9192,
			"name": "Đông Hưng Thuận 17",
			"pre": "Đường"
		}, {
			"id": 10506,
			"name": "Đông Hưng Thuận 19",
			"pre": "Đường"
		}, {
			"id": 6338,
			"name": "Đông Hưng Thuận 2",
			"pre": "Đường"
		}, {
			"id": 7792,
			"name": "Đông Hưng Thuận 21",
			"pre": "Đường"
		}, {
			"id": 9326,
			"name": "Đông Hưng Thuận 22",
			"pre": "Đường"
		}, {
			"id": 7119,
			"name": "Đông Hưng Thuận 23",
			"pre": "Đường"
		}, {
			"id": 8171,
			"name": "Đông Hưng Thuận 27",
			"pre": "Đường"
		}, {
			"id": 10250,
			"name": "Đông Hưng Thuận 29",
			"pre": "Đường"
		}, {
			"id": 6871,
			"name": "Đông Hưng Thuận 3",
			"pre": "Đường"
		}, {
			"id": 7843,
			"name": "Đông Hưng Thuận 30",
			"pre": "Đường"
		}, {
			"id": 7095,
			"name": "Đông Hưng Thuận 31",
			"pre": "Đường"
		}, {
			"id": 10220,
			"name": "Đông Hưng Thuận 33",
			"pre": "Đường"
		}, {
			"id": 10688,
			"name": "Đông Hưng Thuận 39",
			"pre": "Đường"
		}, {
			"id": 9253,
			"name": "Đông Hưng Thuận 40",
			"pre": "Đường"
		}, {
			"id": 10753,
			"name": "Đông Hưng Thuận 41",
			"pre": "Đường"
		}, {
			"id": 6271,
			"name": "Đông Hưng Thuận 42",
			"pre": "Đường"
		}, {
			"id": 7318,
			"name": "Đông Hưng Thuận 45",
			"pre": "Đường"
		}, {
			"id": 6856,
			"name": "Đông Hưng Thuận 5",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 10989,
			"name": "Đông Hưng Thuận 7",
			"pre": "Đường"
		}, {
			"id": 6835,
			"name": "Đông Hưng Thuận 8",
			"pre": "Đường"
		}, {
			"id": 10710,
			"name": "Đông Hưng Thuận 9",
			"pre": "Đường"
		}, {
			"id": 8480,
			"name": "Dòng Sông Xanh",
			"pre": "Đường"
		}, {
			"id": 5065,
			"name": "Đồng Tâm",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 6580,
			"name": "ĐT 747",
			"pre": "Đường"
		}, {
			"id": 10318,
			"name": "DTC 2",
			"pre": "Đường"
		}, {
			"id": 9885,
			"name": "Dương Thị Giang",
			"pre": "Đường"
		}, {
			"id": 10411,
			"name": "Dương Thị Mười",
			"pre": "Đường"
		}, {
			"id": 7475,
			"name": "Giang Cự Vọng",
			"pre": "Đường"
		}, {
			"id": 8611,
			"name": "Gò Sao",
			"pre": "Đường"
		}, {
			"id": 2134,
			"name": "Hà Chương",
			"pre": "Đường"
		}, {
			"id": 4305,
			"name": "Hà Đặc",
			"pre": "Phố"
		}, {
			"id": 1324,
			"name": "Hà Huy Giáp",
			"pre": "Đường"
		}, {
			"id": 755,
			"name": "Hà Huy Tập",
			"pre": "Đường"
		}, {
			"id": 9903,
			"name": "Hà Thị Khéo",
			"pre": "Đường"
		}, {
			"id": 10462,
			"name": "Hà Thị Khiêm",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6108,
			"name": "Hiệp Thành",
			"pre": "Đường"
		}, {
			"id": 10873,
			"name": "Hiệp Thành 1",
			"pre": "Đường"
		}, {
			"id": 8966,
			"name": "Hiệp Thành 11",
			"pre": "Đường"
		}, {
			"id": 8814,
			"name": "Hiệp Thành 12",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 6200,
			"name": "Hiệp Thành 16",
			"pre": "Đường"
		}, {
			"id": 6345,
			"name": "Hiệp Thành 17",
			"pre": "Đường"
		}, {
			"id": 6576,
			"name": "Hiệp Thành 18",
			"pre": "Đường"
		}, {
			"id": 6902,
			"name": "Hiệp Thành 19",
			"pre": "Đường"
		}, {
			"id": 7125,
			"name": "Hiệp Thành 2",
			"pre": "Đường"
		}, {
			"id": 6276,
			"name": "Hiệp Thành 22",
			"pre": "Đường"
		}, {
			"id": 6622,
			"name": "Hiệp Thành 23",
			"pre": "Đường"
		}, {
			"id": 7974,
			"name": "Hiệp Thành 25",
			"pre": "Đường"
		}, {
			"id": 8070,
			"name": "Hiệp Thành 26",
			"pre": "Đường"
		}, {
			"id": 7560,
			"name": "Hiệp Thành 27",
			"pre": "Đường"
		}, {
			"id": 7084,
			"name": "Hiệp Thành 31",
			"pre": "Đường"
		}, {
			"id": 10130,
			"name": "Hiệp Thành 33",
			"pre": "Đường"
		}, {
			"id": 6274,
			"name": "Hiệp Thành 35",
			"pre": "Đường"
		}, {
			"id": 6275,
			"name": "Hiệp Thành 37",
			"pre": "Đường"
		}, {
			"id": 8137,
			"name": "Hiệp Thành 39",
			"pre": "Đường"
		}, {
			"id": 7544,
			"name": "Hiệp Thành 42",
			"pre": "Đường"
		}, {
			"id": 8764,
			"name": "Hiệp Thành 43",
			"pre": "Đường"
		}, {
			"id": 8255,
			"name": "Hiệp Thành 44",
			"pre": "Đường"
		}, {
			"id": 6728,
			"name": "Hiệp Thành 45",
			"pre": "Đường"
		}, {
			"id": 6932,
			"name": "Hiệp Thành 48",
			"pre": "Đường"
		}, {
			"id": 6683,
			"name": "Hiệp Thành 49",
			"pre": "Phố"
		}, {
			"id": 7511,
			"name": "Hiệp Thành 5",
			"pre": "Đường"
		}, {
			"id": 7124,
			"name": "Hiệp Thành 6",
			"pre": "Đường"
		}, {
			"id": 6536,
			"name": "Hiệp Thành 7",
			"pre": "Đường"
		}, {
			"id": 3361,
			"name": "Hồ Biểu Chánh",
			"pre": "Đường"
		}, {
			"id": 6563,
			"name": "Hòa An 8",
			"pre": "Đường"
		}, {
			"id": 8221,
			"name": "Họa Mi",
			"pre": "Đường"
		}, {
			"id": 6035,
			"name": "Hoàng Tăng Bí",
			"pre": "Đường"
		}, {
			"id": 1345,
			"name": "Hương Lộ",
			"pre": "Đường"
		}, {
			"id": 7701,
			"name": "Hương lộ  80",
			"pre": "Đường"
		}, {
			"id": 4970,
			"name": "Hương lộ 17A",
			"pre": "Đường"
		}, {
			"id": 7880,
			"name": "Hương Lộ 80B",
			"pre": "Đường"
		}, {
			"id": 7413,
			"name": "Hương lộ 84B",
			"pre": "Đường"
		}, {
			"id": 9446,
			"name": "Huỳnh Thị Hai",
			"pre": "Đường"
		}, {
			"id": 6583,
			"name": "Khởi Nghĩa Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 9693,
			"name": "Lâm Thị Hố",
			"pre": "Đường"
		}, {
			"id": 650,
			"name": "Lê Đức Thọ",
			"pre": "Đường"
		}, {
			"id": 973,
			"name": "Lê Thị Riêng",
			"pre": "Đường"
		}, {
			"id": 1334,
			"name": "Lê Văn Khương",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 1343,
			"name": "Nguyễn Ảnh Thủ",
			"pre": "Đường"
		}, {
			"id": 1054,
			"name": "Nguyễn Hữu Cầu",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 6448,
			"name": "Nguyễn Thành Vĩnh",
			"pre": "Đường"
		}, {
			"id": 10138,
			"name": "Nguyễn Thị Búp",
			"pre": "Đường"
		}, {
			"id": 10908,
			"name": "Nguyễn Thị Căn",
			"pre": "Đường"
		}, {
			"id": 9313,
			"name": "Nguyễn Thị Đặng",
			"pre": "Đường"
		}, {
			"id": 9709,
			"name": "Nguyễn Thị Kiểu",
			"pre": "Đường"
		}, {
			"id": 10725,
			"name": "Nguyễn Thị Sáu",
			"pre": "Đường"
		}, {
			"id": 10221,
			"name": "Nguyễn Thị Thơi",
			"pre": "Đường"
		}, {
			"id": 1340,
			"name": "Nguyễn Văn Quá",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 6562,
			"name": "Phần Lăng 8",
			"pre": "Đường"
		}, {
			"id": 1341,
			"name": "Phan Văn Hớn",
			"pre": "Đường"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 7465,
			"name": "Quán Tre",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 7660,
			"name": "Quốc Lộ 22",
			"pre": "Đường"
		}, {
			"id": 1761,
			"name": "Quốc lộ 80",
			"pre": "Đường"
		}, {
			"id": 10175,
			"name": "Rạch Ông Học",
			"pre": "Đường"
		}, {
			"id": 6963,
			"name": "Sơn Ca",
			"pre": "Đường"
		}, {
			"id": 10578,
			"name": "Sơn Ca 8",
			"pre": "Đường"
		}, {
			"id": 6532,
			"name": "Sơn Cang",
			"pre": "Đường"
		}, {
			"id": 9158,
			"name": "Sơn Hưng",
			"pre": "Đường"
		}, {
			"id": 1339,
			"name": "Song Hành",
			"pre": "Đường"
		}, {
			"id": 10816,
			"name": "T15",
			"pre": "Đường"
		}, {
			"id": 6019,
			"name": "Tân Chánh Hiệp",
			"pre": "Đường"
		}, {
			"id": 6748,
			"name": "Tân Chánh Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 6994,
			"name": "Tân Chánh Hiệp 12",
			"pre": "Đường"
		}, {
			"id": 6473,
			"name": "Tân Chánh Hiệp 13",
			"pre": "Đường"
		}, {
			"id": 10289,
			"name": "Tân Chánh Hiệp 15",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6735,
			"name": "Tân Chánh Hiệp 17",
			"pre": "Đường"
		}, {
			"id": 6825,
			"name": "Tân Chánh Hiệp 18",
			"pre": "Đường"
		}, {
			"id": 6584,
			"name": "Tân Chánh Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 6734,
			"name": "Tân Chánh Hiệp 21",
			"pre": "Đường"
		}, {
			"id": 6512,
			"name": "Tân Chánh Hiệp 24",
			"pre": "Đường"
		}, {
			"id": 7304,
			"name": "Tân Chánh Hiệp 25",
			"pre": "Đường"
		}, {
			"id": 8404,
			"name": "Tân Chánh Hiệp 26",
			"pre": "Đường"
		}, {
			"id": 6749,
			"name": "Tân Chánh Hiệp 3",
			"pre": "Đường"
		}, {
			"id": 6846,
			"name": "Tân Chánh Hiệp 33",
			"pre": "Đường"
		}, {
			"id": 7520,
			"name": "Tân Chánh Hiệp 34",
			"pre": "Đường"
		}, {
			"id": 7141,
			"name": "Tân Chánh Hiệp 35",
			"pre": "Đường"
		}, {
			"id": 6386,
			"name": "Tân Chánh Hiệp 36",
			"pre": "Đường"
		}, {
			"id": 8099,
			"name": "Tân Chánh Hiệp 4",
			"pre": "Đường"
		}, {
			"id": 6277,
			"name": "Tân Chánh Hiệp 5",
			"pre": "Đường"
		}, {
			"id": 7045,
			"name": "Tân Chánh Hiệp 7",
			"pre": "Đường"
		}, {
			"id": 6906,
			"name": "Tân Chánh Hiệp 8",
			"pre": "Đường"
		}, {
			"id": 10635,
			"name": "Tân Hưng Thuận 10",
			"pre": "Đường"
		}, {
			"id": 8582,
			"name": "Tân Hưng Thuận 2",
			"pre": "Đường"
		}, {
			"id": 7020,
			"name": "Tân Thới Hiệp",
			"pre": "Đường"
		}, {
			"id": 6561,
			"name": "Tân Thới Hiệp 1",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 6750,
			"name": "Tân Thới Hiệp 13",
			"pre": "Đường"
		}, {
			"id": 6917,
			"name": "Tân Thới Hiệp 14",
			"pre": "Đường"
		}, {
			"id": 6784,
			"name": "Tân Thới Hiệp 15",
			"pre": "Đường"
		}, {
			"id": 8440,
			"name": "Tân Thới Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 10409,
			"name": "Tân Thới Hiệp 19",
			"pre": "Đường"
		}, {
			"id": 7821,
			"name": "Tân Thới Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 6531,
			"name": "Tân Thới Hiệp 20",
			"pre": "Đường"
		}, {
			"id": 6337,
			"name": "Tân Thới Hiệp 21",
			"pre": "Đường"
		}, {
			"id": 6256,
			"name": "Tân Thới Hiệp 22",
			"pre": "Đường"
		}, {
			"id": 7872,
			"name": "Tân Thới Hiệp 27",
			"pre": "Đường"
		}, {
			"id": 10408,
			"name": "Tân Thới Hiệp 29",
			"pre": "Đường"
		}, {
			"id": 8654,
			"name": "Tân Thới Hiệp 37",
			"pre": "Đường"
		}, {
			"id": 9745,
			"name": "Tân Thới Hiệp 5",
			"pre": "Đường"
		}, {
			"id": 6827,
			"name": "Tân Thới Hiệp 6",
			"pre": "Đường"
		}, {
			"id": 6717,
			"name": "Tân Thới Hiệp 7",
			"pre": "Đường"
		}, {
			"id": 7558,
			"name": "Tân Thới Hiệp 8",
			"pre": "Đường"
		}, {
			"id": 10657,
			"name": "Tân Thới Hiệp 9",
			"pre": "Đường"
		}, {
			"id": 6038,
			"name": "Tân Thới Nhất",
			"pre": "Đường"
		}, {
			"id": 9066,
			"name": "Tân Thới Nhất 05",
			"pre": "Đường"
		}, {
			"id": 7128,
			"name": "Tân Thới Nhất 1",
			"pre": "Đường"
		}, {
			"id": 9242,
			"name": "Tân Thới Nhất 12",
			"pre": "Đường"
		}, {
			"id": 7266,
			"name": "Tân Thới Nhất 13",
			"pre": "Đường"
		}, {
			"id": 7376,
			"name": "Tân Thới Nhất 15",
			"pre": "Đường"
		}, {
			"id": 6861,
			"name": "Tân Thới Nhất 17",
			"pre": "Đường"
		}, {
			"id": 8486,
			"name": "Tân Thới Nhất 18",
			"pre": "Đường"
		}, {
			"id": 6841,
			"name": "Tân Thới Nhất 2",
			"pre": "Đường"
		}, {
			"id": 9957,
			"name": "Tân Thới Nhất 20",
			"pre": "Đường"
		}, {
			"id": 9270,
			"name": "Tân Thới Nhất 21",
			"pre": "Đường"
		}, {
			"id": 8645,
			"name": "Tân Thới Nhất 22",
			"pre": "Đường"
		}, {
			"id": 8879,
			"name": "Tân Thới Nhất 3",
			"pre": "Đường"
		}, {
			"id": 9085,
			"name": "Tân Thới Nhất 4",
			"pre": "Đường"
		}, {
			"id": 10727,
			"name": "Tân Thới Nhất 5",
			"pre": "Đường"
		}, {
			"id": 8583,
			"name": "Tân Thới Nhất 6",
			"pre": "Đường"
		}, {
			"id": 7822,
			"name": "Tân Thới Nhất 7",
			"pre": "Đường"
		}, {
			"id": 6899,
			"name": "Tân Thới Nhất 8",
			"pre": "Đường"
		}, {
			"id": 8077,
			"name": "Tân Thới Nhất 9",
			"pre": "Đường"
		}, {
			"id": 1331,
			"name": "Thạch Xuân",
			"pre": "Đường"
		}, {
			"id": 1329,
			"name": "Thạnh Lộc",
			"pre": "Đường"
		}, {
			"id": 9445,
			"name": "Thạnh Lộc 12",
			"pre": "Đường"
		}, {
			"id": 8828,
			"name": "Thạnh Lộc 13",
			"pre": "Đường"
		}, {
			"id": 6615,
			"name": "Thạnh Lộc 14",
			"pre": "Đường"
		}, {
			"id": 6668,
			"name": "Thạnh Lộc 15",
			"pre": "Đường"
		}, {
			"id": 6746,
			"name": "Thạnh Lộc 16",
			"pre": "Đường"
		}, {
			"id": 9143,
			"name": "Thạnh Lộc 17",
			"pre": "Đường"
		}, {
			"id": 7443,
			"name": "Thạnh Lộc 18",
			"pre": "Đường"
		}, {
			"id": 6621,
			"name": "Thạnh Lộc 19",
			"pre": "Đường"
		}, {
			"id": 10332,
			"name": "Thạnh Lộc 22",
			"pre": "Đường"
		}, {
			"id": 9361,
			"name": "Thạnh Lộc 25",
			"pre": "Đường"
		}, {
			"id": 9456,
			"name": "Thạnh Lộc 26",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 6788,
			"name": "Thạnh Lộc 28",
			"pre": "Đường"
		}, {
			"id": 6357,
			"name": "Thạnh Lộc 29",
			"pre": "Đường"
		}, {
			"id": 10614,
			"name": "Thạnh Lộc 3",
			"pre": "Đường"
		}, {
			"id": 6974,
			"name": "Thạnh Lộc 30",
			"pre": "Đường"
		}, {
			"id": 6739,
			"name": "Thạnh Lộc 31",
			"pre": "Đường"
		}, {
			"id": 10228,
			"name": "Thạnh Lộc 33",
			"pre": "Đường"
		}, {
			"id": 7269,
			"name": "Thạnh Lộc 37",
			"pre": "Đường"
		}, {
			"id": 9797,
			"name": "Thạnh Lộc 38",
			"pre": "Đường"
		}, {
			"id": 7592,
			"name": "Thạnh Lộc 39",
			"pre": "Đường"
		}, {
			"id": 8686,
			"name": "Thạnh Lộc 4",
			"pre": "Đường"
		}, {
			"id": 8813,
			"name": "Thạnh Lộc 40",
			"pre": "Đường"
		}, {
			"id": 7502,
			"name": "Thạnh Lộc 41",
			"pre": "Đường"
		}, {
			"id": 10574,
			"name": "Thạnh Lộc 43",
			"pre": "Đường"
		}, {
			"id": 7510,
			"name": "Thạnh Lộc 44",
			"pre": "Đường"
		}, {
			"id": 6785,
			"name": "Thạnh Lộc 47",
			"pre": "Đường"
		}, {
			"id": 7059,
			"name": "Thạnh Lộc 48",
			"pre": "Đường"
		}, {
			"id": 9122,
			"name": "Thạnh Lộc 49",
			"pre": "Đường"
		}, {
			"id": 9000,
			"name": "Thạnh Lộc 50",
			"pre": "Đường"
		}, {
			"id": 8227,
			"name": "Thạnh Lộc 51",
			"pre": "Đường"
		}, {
			"id": 8865,
			"name": "Thạnh Lộc 53",
			"pre": "Đường"
		}, {
			"id": 7521,
			"name": "Thạnh Lộc 56",
			"pre": "Đường"
		}, {
			"id": 7105,
			"name": "Thạnh Lộc 8",
			"pre": "Đường"
		}, {
			"id": 1332,
			"name": "Thanh Xuân",
			"pre": "Đường"
		}, {
			"id": 10348,
			"name": "Thạnh Xuân",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 7347,
			"name": "Thạnh Xuân 14",
			"pre": "Đường"
		}, {
			"id": 7212,
			"name": "Thạnh Xuân 18",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6514,
			"name": "Thạnh Xuân 22",
			"pre": "Đường"
		}, {
			"id": 8341,
			"name": "Thạnh Xuân 23",
			"pre": "Đường"
		}, {
			"id": 8381,
			"name": "Thạnh Xuân 24",
			"pre": "Đường"
		}, {
			"id": 6718,
			"name": "Thạnh Xuân 25",
			"pre": "Đường"
		}, {
			"id": 8587,
			"name": "Thạnh Xuân 26",
			"pre": "Đường"
		}, {
			"id": 9719,
			"name": "Thạnh Xuân 29",
			"pre": "Đường"
		}, {
			"id": 6694,
			"name": "Thạnh Xuân 31",
			"pre": "Đường"
		}, {
			"id": 9823,
			"name": "Thạnh Xuân 33",
			"pre": "Đường"
		}, {
			"id": 10938,
			"name": "Thạnh Xuân 36",
			"pre": "Đường"
		}, {
			"id": 6425,
			"name": "Thạnh Xuân 38",
			"pre": "Đường"
		}, {
			"id": 8901,
			"name": "Thạnh Xuân 39",
			"pre": "Đường"
		}, {
			"id": 7909,
			"name": "Thạnh Xuân 40",
			"pre": "Đường"
		}, {
			"id": 9832,
			"name": "Thạnh Xuân 42",
			"pre": "Đường"
		}, {
			"id": 6786,
			"name": "Thạnh Xuân 43",
			"pre": "Đường"
		}, {
			"id": 7046,
			"name": "Thạnh Xuân 47",
			"pre": "Đường"
		}, {
			"id": 7549,
			"name": "Thạnh Xuân 48",
			"pre": "Đường"
		}, {
			"id": 6533,
			"name": "Thạnh Xuân 52",
			"pre": "Đường"
		}, {
			"id": 10638,
			"name": "Thạnh Xuân 64",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 6054,
			"name": "Thới An",
			"pre": "Đường"
		}, {
			"id": 6534,
			"name": "Thới An 06",
			"pre": "Đường"
		}, {
			"id": 8999,
			"name": "Thới An 07",
			"pre": "Đường"
		}, {
			"id": 9098,
			"name": "Thới An 09",
			"pre": "Đường"
		}, {
			"id": 7261,
			"name": "Thới An 10",
			"pre": "Đường"
		}, {
			"id": 7024,
			"name": "Thới An 11",
			"pre": "Đường"
		}, {
			"id": 6736,
			"name": "Thới An 12",
			"pre": "Đường"
		}, {
			"id": 6885,
			"name": "Thới An 13",
			"pre": "Đường"
		}, {
			"id": 7049,
			"name": "Thới An 15",
			"pre": "Đường"
		}, {
			"id": 6695,
			"name": "Thới An 16",
			"pre": "Đường"
		}, {
			"id": 10920,
			"name": "Thới An 17",
			"pre": "Đường"
		}, {
			"id": 6905,
			"name": "Thới An 18",
			"pre": "Đường"
		}, {
			"id": 6193,
			"name": "Thới An 19",
			"pre": "Đường"
		}, {
			"id": 10963,
			"name": "Thới An 19A",
			"pre": "Đường"
		}, {
			"id": 6064,
			"name": "Thới An 20",
			"pre": "Đường"
		}, {
			"id": 6817,
			"name": "Thới An 21",
			"pre": "Đường"
		}, {
			"id": 6502,
			"name": "Thới An 22",
			"pre": "Đường"
		}, {
			"id": 8439,
			"name": "Thới An 24",
			"pre": "Đường"
		}, {
			"id": 7904,
			"name": "Thới An 28",
			"pre": "Đường"
		}, {
			"id": 9336,
			"name": "Thới An 29",
			"pre": "Đường"
		}, {
			"id": 9279,
			"name": "Thới An 3",
			"pre": "Đường"
		}, {
			"id": 6249,
			"name": "Thới An 32",
			"pre": "Đường"
		}, {
			"id": 10424,
			"name": "Thới An 35",
			"pre": "Đường"
		}, {
			"id": 10265,
			"name": "Thới An 36",
			"pre": "Đường"
		}, {
			"id": 8721,
			"name": "Thới An 4",
			"pre": "Đường"
		}, {
			"id": 6820,
			"name": "Thới An 5",
			"pre": "Đường"
		}, {
			"id": 8344,
			"name": "Thới An 8",
			"pre": "Đường"
		}, {
			"id": 6676,
			"name": "Thới An 9",
			"pre": "Đường"
		}, {
			"id": 2097,
			"name": "Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 8900,
			"name": "Tỉnh Lộ  43",
			"pre": "Đường"
		}, {
			"id": 7826,
			"name": "Tỉnh lộ 15",
			"pre": "Đường"
		}, {
			"id": 8412,
			"name": "Tỉnh lộ 16",
			"pre": "Đường"
		}, {
			"id": 7857,
			"name": "Tỉnh Lộ 19",
			"pre": "Đường"
		}, {
			"id": 9001,
			"name": "Tỉnh Lộ 21",
			"pre": "Đường"
		}, {
			"id": 10435,
			"name": "Tỉnh Lộ 26",
			"pre": "Đường"
		}, {
			"id": 10817,
			"name": "Tỉnh Lộ 29",
			"pre": "Đường"
		}, {
			"id": 9033,
			"name": "Tỉnh Lộ 40",
			"pre": "Đường"
		}, {
			"id": 7939,
			"name": "Tỉnh lộ 9",
			"pre": "Đường"
		}, {
			"id": 8562,
			"name": "TN02",
			"pre": "Đường"
		}, {
			"id": 5653,
			"name": "Tô Ký",
			"pre": "Đường"
		}, {
			"id": 795,
			"name": "Tô Ngọc Vân",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 6073,
			"name": "Trần Quang Cơ",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 10927,
			"name": "Trần Thị Bảy",
			"pre": "Đường"
		}, {
			"id": 9971,
			"name": "Trần Thị Có",
			"pre": "Đường"
		}, {
			"id": 10128,
			"name": "Trần Thị Cờ",
			"pre": "Đường"
		}, {
			"id": 10229,
			"name": "Trần Thị Do",
			"pre": "Đường"
		}, {
			"id": 10307,
			"name": "Trần Thị Hè",
			"pre": "Đường"
		}, {
			"id": 10758,
			"name": "Trần Thị Hòe",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 7257,
			"name": "Trung Chánh",
			"pre": "Đường"
		}, {
			"id": 6724,
			"name": "Trung Mỹ Tây",
			"pre": "Đường"
		}, {
			"id": 9088,
			"name": "Trung Mỹ Tây 03",
			"pre": "Đường"
		}, {
			"id": 7356,
			"name": "Trung Mỹ Tây 1",
			"pre": "Đường"
		}, {
			"id": 8172,
			"name": "Trung Mỹ Tây 12",
			"pre": "Đường"
		}, {
			"id": 6957,
			"name": "Trung Mỹ Tây 13",
			"pre": "Đường"
		}, {
			"id": 7133,
			"name": "Trung Mỹ Tây 17",
			"pre": "Đường"
		}, {
			"id": 7270,
			"name": "Trung Mỹ Tây 18",
			"pre": "Đường"
		}, {
			"id": 10413,
			"name": "Trung Mỹ Tây 2",
			"pre": "Đường"
		}, {
			"id": 8462,
			"name": "Trung Mỹ Tây 2A",
			"pre": "Đường"
		}, {
			"id": 9045,
			"name": "Trung Mỹ Tây 3",
			"pre": "Đường"
		}, {
			"id": 8441,
			"name": "Trung Mỹ Tây 4",
			"pre": "Đường"
		}, {
			"id": 7342,
			"name": "Trung Mỹ Tây 5",
			"pre": "Đường"
		}, {
			"id": 9165,
			"name": "Trung Mỹ Tây 6A",
			"pre": "Đường"
		}, {
			"id": 8044,
			"name": "Trung Mỹ Tây 9",
			"pre": "Đường"
		}, {
			"id": 10420,
			"name": "Trung Mỹ Tây 9A",
			"pre": "Đường"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 6577,
			"name": "Võ Quảng",
			"pre": "Đường"
		}, {
			"id": 10984,
			"name": "Võ Thị Liễu",
			"pre": "Đường"
		}, {
			"id": 10502,
			"name": "Võ Thị Phải",
			"pre": "Đường"
		}, {
			"id": 9654,
			"name": "Võ Thị Thừa",
			"pre": "Đường"
		}, {
			"id": 1322,
			"name": "Vườn Lài",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}, {
			"id": 6931,
			"name": "Xô Ngọc Oanh",
			"pre": "Đường"
		}, {
			"id": 10263,
			"name": "Xuân Thới Sơn 12",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1862,
			"name": "12 View",
			"lat": 10.82463264465332,
			"lng": 106.61088562011719,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1817,
			"name": "8X Plus Trường Chinh",
			"lat": 10.831156730651855,
			"lng": 106.62126922607422,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1522,
			"name": "An Sương Besco",
			"lat": 10.845525741577148,
			"lng": 106.61757659912109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1100,
			"name": "Cheery 2 Apartment",
			"lat": 10.881290435791016,
			"lng": 106.64916229248047,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1918,
			"name": "Chung cư Đông Hưng",
			"lat": 10.843232154846191,
			"lng": 106.62596893310547,
			"cats": [55, 324, 326]
		}, {
			"id": 350,
			"name": "Đạt Gia Residence (CC Võ Đình)",
			"lat": 10.880495071411133,
			"lng": 106.64888763427734,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2103,
			"name": "Depot Metro Tham Lương",
			"lat": 10.822860717773438,
			"lng": 106.62487030029297,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1228,
			"name": "First Home Thạnh Lộc",
			"lat": 10.867024421691895,
			"lng": 106.68698883056641,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 822,
			"name": "Gia Định Plaza",
			"lat": 10.826372146606445,
			"lng": 106.62794494628906,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 651,
			"name": "Gò Sao",
			"lat": 10.884408950805664,
			"lng": 106.68391418457031,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1629,
			"name": "Hà Đô Thới An",
			"lat": 10.8719482421875,
			"lng": 106.65922546386719,
			"cats": [40, 48, 55, 324, 325, 326]
		}, {
			"id": 2195,
			"name": "Hiệp Thành City",
			"lat": 10.875553131103516,
			"lng": 106.62873840332031,
			"cats": [40, 41, 44, 45, 48, 50, 51, 52, 53, 55, 57, 59, 163, 283, 324, 325, 326]
		}, {
			"id": 1413,
			"name": "Hưng Ngân Garden",
			"lat": 10.858521461486816,
			"lng": 106.63079833984375,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1945,
			"name": "KDC An Sương",
			"lat": 10.842578887939453,
			"lng": 106.62628173828125,
			"cats": [40, 48, 55, 59, 324, 326]
		}, {
			"id": 2311,
			"name": "Khang Thịnh Town",
			"lat": 10.898487091064453,
			"lng": 106.68820953369141,
			"cats": []
		}, {
			"id": 899,
			"name": "Kim Tâm Hải Apartment",
			"lat": 10.830249786376953,
			"lng": 106.6229248046875,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 706,
			"name": "Lori Plaza",
			"lat": 10.851154327392578,
			"lng": 106.62438201904297,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2304,
			"name": "Nhà ở quân khu 7",
			"lat": 10.848454475402832,
			"lng": 106.61420440673828,
			"cats": []
		}, {
			"id": 2277,
			"name": "Nhà ở Vạn Xuân Bắc Sài Gòn",
			"lat": 10.8800687789917,
			"lng": 106.6788330078125,
			"cats": []
		}, {
			"id": 2246,
			"name": "Phú An Center",
			"lat": 10.863424301147461,
			"lng": 106.65578460693359,
			"cats": [48, 50, 55, 57, 59, 324, 326, 362]
		}, {
			"id": 2459,
			"name": "Phú Long Riverside",
			"lat": 10.893929481506348,
			"lng": 106.67505645751953,
			"cats": []
		}, {
			"id": 1305,
			"name": "Tecco Green Nest",
			"lat": 10.829746246337891,
			"lng": 106.60997009277344,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 900,
			"name": "Thái An Apartment",
			"lat": 10.828607559204102,
			"lng": 106.62830352783203,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 649,
			"name": "Thiên Quý",
			"lat": 10.873269081115723,
			"lng": 106.65859985351562,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 692,
			"name": "Thọ Nam Sang",
			"lat": 10.838113784790039,
			"lng": 106.61801910400391,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2491,
			"name": "Thới An City",
			"lat": 10.858932495117188,
			"lng": 106.66040802001953,
			"cats": []
		}]
	}, {
		"id": 54,
		"name": "Quận 2",
		"pre": "",
		"ward": [{
			"id": 121,
			"name": " Thạnh Mỹ Lợi",
			"pre": "Phường"
		}, {
			"id": 116,
			"name": "An Khánh",
			"pre": "Phường"
		}, {
			"id": 119,
			"name": "An Lợi Đông",
			"pre": "Phường"
		}, {
			"id": 118,
			"name": "An Phú",
			"pre": "Phường"
		}, {
			"id": 112,
			"name": "Bình An",
			"pre": "Phường"
		}, {
			"id": 113,
			"name": "Bình Khánh",
			"pre": "Phường"
		}, {
			"id": 115,
			"name": "Bình Trưng Đông",
			"pre": "Phường"
		}, {
			"id": 114,
			"name": "Bình Trưng Tây",
			"pre": "Phường"
		}, {
			"id": 120,
			"name": "Cát Lái",
			"pre": "Phường"
		}, {
			"id": 111,
			"name": "Thảo Điền",
			"pre": "Phường"
		}, {
			"id": 117,
			"name": "Thủ Thiêm",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 5864,
			"name": "10A",
			"pre": "Đường"
		}, {
			"id": 8152,
			"name": "10F",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 10866,
			"name": "2.5A",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 8579,
			"name": "215",
			"pre": "Đường"
		}, {
			"id": 7069,
			"name": "21A",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 8348,
			"name": "24B",
			"pre": "Đường"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 9827,
			"name": "30B",
			"pre": "Đường"
		}, {
			"id": 4416,
			"name": "31",
			"pre": "Đường"
		}, {
			"id": 9322,
			"name": "31A",
			"pre": "Đường"
		}, {
			"id": 8065,
			"name": "31B",
			"pre": "Đường"
		}, {
			"id": 7903,
			"name": "31C",
			"pre": "Đường"
		}, {
			"id": 8668,
			"name": "31D",
			"pre": "Đường"
		}, {
			"id": 7698,
			"name": "31E",
			"pre": "Đường"
		}, {
			"id": 7902,
			"name": "31F",
			"pre": "Đường"
		}, {
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 2876,
			"name": "34",
			"pre": "Đường"
		}, {
			"id": 6346,
			"name": "35",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 8578,
			"name": "37A",
			"pre": "Đường"
		}, {
			"id": 2167,
			"name": "38",
			"pre": "Đường"
		}, {
			"id": 2520,
			"name": "39",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4672,
			"name": "40",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 10593,
			"name": "41B",
			"pre": "Đường"
		}, {
			"id": 2885,
			"name": "42",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 3061,
			"name": "44",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 2262,
			"name": "46",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 2894,
			"name": "48",
			"pre": "Đường"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 2898,
			"name": "52",
			"pre": "Phố"
		}, {
			"id": 4472,
			"name": "53",
			"pre": "Đường"
		}, {
			"id": 2900,
			"name": "54",
			"pre": "Đường"
		}, {
			"id": 2572,
			"name": "55",
			"pre": "Đường"
		}, {
			"id": 2904,
			"name": "56",
			"pre": "Phố"
		}, {
			"id": 2906,
			"name": "58",
			"pre": "Đường"
		}, {
			"id": 2908,
			"name": "59",
			"pre": "Phố"
		}, {
			"id": 7222,
			"name": "5B",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 4407,
			"name": "60",
			"pre": "Đường"
		}, {
			"id": 2252,
			"name": "61",
			"pre": "Đường"
		}, {
			"id": 8036,
			"name": "62",
			"pre": "Đường"
		}, {
			"id": 8689,
			"name": "63",
			"pre": "Đường"
		}, {
			"id": 2914,
			"name": "64",
			"pre": "Phố"
		}, {
			"id": 2915,
			"name": "65",
			"pre": "Phố"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 2918,
			"name": "68",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 8797,
			"name": "76",
			"pre": "Đường"
		}, {
			"id": 7118,
			"name": "78",
			"pre": "Đường"
		}, {
			"id": 8220,
			"name": "7A",
			"pre": "Đường"
		}, {
			"id": 10201,
			"name": "7C",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 8820,
			"name": "80",
			"pre": "Đường"
		}, {
			"id": 4299,
			"name": "83",
			"pre": "Đường"
		}, {
			"id": 8321,
			"name": "8A",
			"pre": "Đường"
		}, {
			"id": 9467,
			"name": "8G",
			"pre": "Đường"
		}, {
			"id": 10160,
			"name": "8K",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 7074,
			"name": "94",
			"pre": "Đường"
		}, {
			"id": 10620,
			"name": "95",
			"pre": "Đường"
		}, {
			"id": 2769,
			"name": "A2",
			"pre": "Đường"
		}, {
			"id": 4160,
			"name": "An Phú",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 6268,
			"name": "An Trang",
			"pre": "Đường"
		}, {
			"id": 4135,
			"name": "B",
			"pre": "Đường"
		}, {
			"id": 4192,
			"name": "Bát Nàn",
			"pre": "Đường"
		}, {
			"id": 8701,
			"name": "Bình An",
			"pre": "Đường"
		}, {
			"id": 4178,
			"name": "Bình Trưng",
			"pre": "Đường"
		}, {
			"id": 1483,
			"name": "Bùi Tá Hán",
			"pre": "Đường"
		}, {
			"id": 4170,
			"name": "Cao Đức Lân",
			"pre": "Đường"
		}, {
			"id": 5638,
			"name": "Đại Lộ Đông Tây",
			"pre": "Đường"
		}, {
			"id": 2065,
			"name": "Đàm Văn Lễ",
			"pre": "Đường"
		}, {
			"id": 4140,
			"name": "Đặng Hữu Phổ",
			"pre": "Đường"
		}, {
			"id": 2074,
			"name": "Đặng Như Mai",
			"pre": "Đường"
		}, {
			"id": 408,
			"name": "Đặng Tiến Đông",
			"pre": "Đường"
		}, {
			"id": 4249,
			"name": "Đỗ Pháp Thuận",
			"pre": "Đường"
		}, {
			"id": 5615,
			"name": "Đỗ Quang",
			"pre": "Phố"
		}, {
			"id": 1416,
			"name": "Đỗ Xuân Hợp",
			"pre": "Đường"
		}, {
			"id": 3383,
			"name": "Đoàn Hữu Trưng",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 6267,
			"name": "Đồng Quốc Bình",
			"pre": "Đường"
		}, {
			"id": 4190,
			"name": "Đồng Văn Cống",
			"pre": "Đường"
		}, {
			"id": 6266,
			"name": "Dư Hàng Kênh",
			"pre": "Đường"
		}, {
			"id": 4134,
			"name": "Đường A",
			"pre": "Đường"
		}, {
			"id": 4128,
			"name": "Đường C",
			"pre": "Đường"
		}, {
			"id": 2031,
			"name": "Dương Văn An",
			"pre": "Đường"
		}, {
			"id": 7901,
			"name": "G1",
			"pre": "Đường"
		}, {
			"id": 776,
			"name": "Giang Văn Minh",
			"pre": "Đường"
		}, {
			"id": 4130,
			"name": "H",
			"pre": "Đường"
		}, {
			"id": 8390,
			"name": "Hà Quang",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 2524,
			"name": "Hương lộ 62",
			"pre": "Đường"
		}, {
			"id": 6743,
			"name": "K",
			"pre": "Đường"
		}, {
			"id": 9011,
			"name": "KP3",
			"pre": "Đường"
		}, {
			"id": 1612,
			"name": "Lâm Quang Ký",
			"pre": "Đường"
		}, {
			"id": 5706,
			"name": "Lê Đình Quản",
			"pre": "Đường"
		}, {
			"id": 650,
			"name": "Lê Đức Thọ",
			"pre": "Đường"
		}, {
			"id": 4209,
			"name": "Lê Hiến Mai",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 2229,
			"name": "Lê Hữu Kiều",
			"pre": "Đường"
		}, {
			"id": 155,
			"name": "Lê Phụng Hiểu",
			"pre": "Phố"
		}, {
			"id": 4146,
			"name": "Lê Thước",
			"pre": "Đường"
		}, {
			"id": 4039,
			"name": "Lê Văn Miến",
			"pre": "Đường"
		}, {
			"id": 4181,
			"name": "Lê Văn Thịnh",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 396,
			"name": "Lương Định Của",
			"pre": "Phố"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 4163,
			"name": "Mai Chí Thọ",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 4137,
			"name": "Ngô Quang Huy",
			"pre": "Đường"
		}, {
			"id": 1192,
			"name": "Nguyễn Án",
			"pre": "Đường"
		}, {
			"id": 3621,
			"name": "Nguyễn Bá Huân",
			"pre": "Đường"
		}, {
			"id": 2296,
			"name": "Nguyễn Bá Lân",
			"pre": "Đường"
		}, {
			"id": 3722,
			"name": "Nguyễn Cừ",
			"pre": "Phố"
		}, {
			"id": 2398,
			"name": "Nguyễn Đăng Đạo",
			"pre": "Đường"
		}, {
			"id": 2257,
			"name": "Nguyễn Đăng Giai",
			"pre": "Đường"
		}, {
			"id": 4230,
			"name": "Nguyễn Địa Lô",
			"pre": "Đường"
		}, {
			"id": 6354,
			"name": "Nguyễn Đôn Tiết",
			"pre": "Đường"
		}, {
			"id": 3450,
			"name": "Nguyễn Duy Hiệu",
			"pre": "Đường"
		}, {
			"id": 449,
			"name": "Nguyễn Duy Trinh",
			"pre": "Đường"
		}, {
			"id": 3476,
			"name": "Nguyễn Hoàng",
			"pre": "Đường"
		}, {
			"id": 7736,
			"name": "Nguyễn Hương",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 3052,
			"name": "Nguyễn Khoa Đăng",
			"pre": "Đường"
		}, {
			"id": 6227,
			"name": "Nguyễn Lương Dĩ",
			"pre": "Đường"
		}, {
			"id": 4241,
			"name": "Nguyễn Quang Bật",
			"pre": "Đường"
		}, {
			"id": 4166,
			"name": "Nguyễn Quý Cảnh",
			"pre": "Đường"
		}, {
			"id": 4048,
			"name": "Nguyễn Quý Đức",
			"pre": "Đường"
		}, {
			"id": 4219,
			"name": "Nguyễn Thanh Sơn",
			"pre": "Đường"
		}, {
			"id": 304,
			"name": "Nguyễn Thị Định",
			"pre": "Đường"
		}, {
			"id": 3140,
			"name": "Nguyễn Trọng Quân",
			"pre": "Đường"
		}, {
			"id": 4184,
			"name": "Nguyễn Trung Nguyệt",
			"pre": "Đường"
		}, {
			"id": 4177,
			"name": "Nguyễn Tư Nghiêm",
			"pre": "Đường"
		}, {
			"id": 3720,
			"name": "Nguyễn Tuyển",
			"pre": "Đường"
		}, {
			"id": 3729,
			"name": "Nguyễn Ư Dĩ",
			"pre": "Phố"
		}, {
			"id": 7139,
			"name": "Nguyễn Văn Giáp",
			"pre": "Đường"
		}, {
			"id": 3057,
			"name": "Nguyễn Văn Hưởng",
			"pre": "Đường"
		}, {
			"id": 4215,
			"name": "Nguyễn Văn Kỉnh",
			"pre": "Đường"
		}, {
			"id": 4232,
			"name": "Phạm Công Trứ",
			"pre": "Đường"
		}, {
			"id": 4233,
			"name": "Phạm Đôn Lễ",
			"pre": "Đường"
		}, {
			"id": 4234,
			"name": "Phạm Hy Lượng",
			"pre": "Đường"
		}, {
			"id": 579,
			"name": "Phạm Thận Duật",
			"pre": "Đường"
		}, {
			"id": 3377,
			"name": "Phan Bá Vành",
			"pre": "Đường"
		}, {
			"id": 3584,
			"name": "Phan Văn Đáng",
			"pre": "Đường"
		}, {
			"id": 10967,
			"name": "Phượng Vỹ",
			"pre": "Đường"
		}, {
			"id": 4247,
			"name": "Quách Giai",
			"pre": "Đường"
		}, {
			"id": 4136,
			"name": "Quốc Hương",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 1339,
			"name": "Song Hành",
			"pre": "Đường"
		}, {
			"id": 4248,
			"name": "Sử Hy Nhan",
			"pre": "Đường"
		}, {
			"id": 227,
			"name": "Tạ Hiện",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6895,
			"name": "Tân Lập 2",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 3955,
			"name": "Thái Thuận",
			"pre": "Đường"
		}, {
			"id": 4094,
			"name": "Thân Văn Nhiếp",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 7806,
			"name": "Thạnh Mỹ Bắc",
			"pre": "Đường"
		}, {
			"id": 4188,
			"name": "Thạnh Mỹ Lợi",
			"pre": "Đường"
		}, {
			"id": 4235,
			"name": "Thạnh Mỹ Nam",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 4138,
			"name": "Thảo Điền",
			"pre": "Đường"
		}, {
			"id": 6265,
			"name": "Thích Mật Thể",
			"pre": "Đường"
		}, {
			"id": 7649,
			"name": "Tỉnh Lộ 10",
			"pre": "Đường"
		}, {
			"id": 4582,
			"name": "Tỉnh lộ 25B",
			"pre": "Đường"
		}, {
			"id": 7174,
			"name": "Tống Hữu Định",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 4169,
			"name": "Trần Lưu",
			"pre": "Đường"
		}, {
			"id": 10520,
			"name": "Trần Lựu",
			"pre": "Đường"
		}, {
			"id": 4173,
			"name": "Trần Não",
			"pre": "Đường"
		}, {
			"id": 4162,
			"name": "Trần Ngọc Diện",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 2345,
			"name": "Trịnh Khắc Lập",
			"pre": "Đường"
		}, {
			"id": 6466,
			"name": "Trúc Đường",
			"pre": "Đường"
		}, {
			"id": 4083,
			"name": "Trương Gia Mô",
			"pre": "Đường"
		}, {
			"id": 2736,
			"name": "Trương Văn Bang",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 505,
			"name": "Vạn Kiếp",
			"pre": "Phố"
		}, {
			"id": 8092,
			"name": "Vành Đai 2",
			"pre": "Đường"
		}, {
			"id": 6331,
			"name": "Vành Đai Đông",
			"pre": "Đường"
		}, {
			"id": 1234,
			"name": "Võ Trường Toản",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 4236,
			"name": "Vũ Phương Đế",
			"pre": "Đường"
		}, {
			"id": 3696,
			"name": "Vũ Tông Phan",
			"pre": "Phố"
		}, {
			"id": 5820,
			"name": "Xa Lộ Hà Nội",
			"pre": "Đường"
		}, {
			"id": 602,
			"name": "Xuân Thủy",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1744,
			"name": "An Cư",
			"lat": 10.797977447509766,
			"lng": 106.73903656005859,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 680,
			"name": "An Hòa",
			"lat": 10.793073654174805,
			"lng": 106.73958587646484,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 528,
			"name": "An Khang",
			"lat": 10.797328948974609,
			"lng": 106.73980712890625,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1746,
			"name": "An Lộc  - An Phúc",
			"lat": 10.798492431640625,
			"lng": 106.74355316162109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 83,
			"name": "An Phú An Khánh",
			"lat": 10.797435760498047,
			"lng": 106.73783111572266,
			"cats": [41, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1864,
			"name": "An Thịnh",
			"lat": 10.797847747802734,
			"lng": 106.73830413818359,
			"cats": [55, 324, 326]
		}, {
			"id": 1748,
			"name": "Biệt thự Hà Đô",
			"lat": 10.777432441711426,
			"lng": 106.75151824951172,
			"cats": [40, 325]
		}, {
			"id": 2097,
			"name": "Bình An Pearl",
			"lat": 10.789085388183594,
			"lng": 106.73013305664062,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 328,
			"name": "Bình An Riverside",
			"lat": 10.795217514038086,
			"lng": 106.73085784912109,
			"cats": [40, 325]
		}, {
			"id": 94,
			"name": "Bình Minh",
			"lat": 10.789348602294922,
			"lng": 106.73516845703125,
			"cats": [55, 324, 326]
		}, {
			"id": 2412,
			"name": "C3 PARCSpring",
			"lat": 10.788918495178223,
			"lng": 106.76667785644531,
			"cats": []
		}, {
			"id": 713,
			"name": "Cantavil An Phú",
			"lat": 10.800490379333496,
			"lng": 106.7474365234375,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1314,
			"name": "Cao ốc Thịnh Vượng",
			"lat": 10.78840446472168,
			"lng": 106.77090454101562,
			"cats": [55, 324, 326]
		}, {
			"id": 1023,
			"name": "Cát Lái Invesco",
			"lat": 10.772298812866211,
			"lng": 106.787841796875,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 2485,
			"name": "Centara Thủ Thiêm",
			"lat": 10.791224479675293,
			"lng": 106.75289154052734,
			"cats": []
		}, {
			"id": 366,
			"name": "Cheery Apartment",
			"lat": 10.774020195007324,
			"lng": 106.76710510253906,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2099,
			"name": "Chung cư Bộ Công An",
			"lat": 10.794454574584961,
			"lng": 106.73692321777344,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2238,
			"name": "Citi Bella",
			"lat": 10.76671028137207,
			"lng": 106.78633117675781,
			"cats": [40, 41, 48, 50, 51, 52, 55, 57, 59, 163, 283, 325]
		}, {
			"id": 2381,
			"name": "Citi Bella 2",
			"lat": 10.770320892333984,
			"lng": 106.77800750732422,
			"cats": []
		}, {
			"id": 1959,
			"name": "Citi Home",
			"lat": 10.767316818237305,
			"lng": 106.78410339355469,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1547,
			"name": "City Horse",
			"lat": 10.797859191894531,
			"lng": 106.74847412109375,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1946,
			"name": "Cityland Bình Trưng Đông",
			"lat": 10.776086807250977,
			"lng": 106.77824401855469,
			"cats": [40, 44, 48, 55, 59, 325]
		}, {
			"id": 1583,
			"name": "Đại Quang Minh",
			"lat": 10.774360656738281,
			"lng": 106.72677612304688,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 2345,
			"name": "De Capella",
			"lat": 10.790854454040527,
			"lng": 106.74472808837891,
			"cats": []
		}, {
			"id": 1540,
			"name": "Detesco",
			"lat": 10.785972595214844,
			"lng": 106.73140716552734,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 547,
			"name": "Diamond Island",
			"lat": 10.779201507568359,
			"lng": 106.7467041015625,
			"cats": [55, 59, 324, 325, 326]
		}, {
			"id": 1046,
			"name": "Đông Thủ Thiêm",
			"lat": 10.79206371307373,
			"lng": 106.77829742431641,
			"cats": [40, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 1747,
			"name": "Dự án Huy Hoàng",
			"lat": 10.778581619262695,
			"lng": 106.75447845458984,
			"cats": [40, 51, 163, 325]
		}, {
			"id": 2517,
			"name": "Empire City Thủ Thiêm",
			"lat": 10.76982593536377,
			"lng": 106.71620941162109,
			"cats": []
		}, {
			"id": 1316,
			"name": "Era Bình Khánh",
			"lat": 10.787758827209473,
			"lng": 106.74254608154297,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2214,
			"name": "Estella Heights",
			"lat": 10.801277160644531,
			"lng": 106.74858856201172,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 88,
			"name": "Fideco Riverview",
			"lat": 10.802902221679687,
			"lng": 106.73804473876953,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2131,
			"name": "Gateway Thảo Điền",
			"lat": 10.80494213104248,
			"lng": 106.73342132568359,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 111,
			"name": "Hoàng Anh River View",
			"lat": 10.804823875427246,
			"lng": 106.72715759277344,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2154,
			"name": "Holm Villas Thảo Điền",
			"lat": 10.810733795166016,
			"lng": 106.72447204589844,
			"cats": [40, 325]
		}, {
			"id": 1082,
			"name": "Homyland",
			"lat": 10.787727355957031,
			"lng": 106.76243591308594,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1266,
			"name": "Homyland 2",
			"lat": 10.788649559020996,
			"lng": 106.76541900634766,
			"cats": [44, 48, 55, 324, 326]
		}, {
			"id": 2488,
			"name": "Homyland 3",
			"lat": 10.789340019226074,
			"lng": 106.76852416992187,
			"cats": []
		}, {
			"id": 787,
			"name": "Imperia An Phú",
			"lat": 10.798466682434082,
			"lng": 106.75054931640625,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1969,
			"name": "KDC Ninh Giang",
			"lat": 10.769392967224121,
			"lng": 106.78084564208984,
			"cats": [40, 48, 55, 325]
		}, {
			"id": 142,
			"name": "KDC Thế kỉ 21",
			"lat": 10.781676292419434,
			"lng": 106.75209045410156,
			"cats": [48, 55, 57, 59, 324, 326]
		}, {
			"id": 1593,
			"name": "KDC Văn Minh",
			"lat": 10.783132553100586,
			"lng": 106.74753570556641,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 1951,
			"name": "La Astoria",
			"lat": 10.788718223571777,
			"lng": 106.7679443359375,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2361,
			"name": "Lakeview City",
			"lat": 10.794195175170898,
			"lng": 106.77547454833984,
			"cats": []
		}, {
			"id": 1548,
			"name": "Lan Anh Village",
			"lat": 10.785685539245605,
			"lng": 106.72257232666016,
			"cats": [41, 44, 52, 55, 325]
		}, {
			"id": 1020,
			"name": "Lexington Residence",
			"lat": 10.798354148864746,
			"lng": 106.75190734863281,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1740,
			"name": "Masteri Thảo Điền",
			"lat": 10.80312442779541,
			"lng": 106.74181365966797,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 684,
			"name": "May Apartments",
			"lat": 10.810273170471191,
			"lng": 106.73084259033203,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2115,
			"name": "Midpoint Villas Thảo Điền",
			"lat": 10.809926986694336,
			"lng": 106.73220825195312,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1119,
			"name": "PARCSpring",
			"lat": 10.790256500244141,
			"lng": 106.77143096923828,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1315,
			"name": "Parkland Apartments",
			"lat": 10.804164886474609,
			"lng": 106.74938201904297,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 998,
			"name": "Petroland Quận 2",
			"lat": 10.791753768920898,
			"lng": 106.77695465087891,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 838,
			"name": "PetroVietnam Landmark",
			"lat": 10.796918869018555,
			"lng": 106.75061798095703,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1870,
			"name": "Phố Đông Village",
			"lat": 10.769062042236328,
			"lng": 106.78083038330078,
			"cats": [41, 48, 51, 52, 55, 59, 163, 324, 325, 326]
		}, {
			"id": 831,
			"name": "Preche",
			"lat": 10.803859710693359,
			"lng": 106.74678039550781,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 777,
			"name": "Regency Park",
			"lat": 10.793998718261719,
			"lng": 106.75092315673828,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 131,
			"name": "River Garden",
			"lat": 10.815117835998535,
			"lng": 106.72711181640625,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2267,
			"name": "Saigon Mia",
			"lat": 10.794303894042969,
			"lng": 106.7381591796875,
			"cats": []
		}, {
			"id": 2518,
			"name": "Sarah Thảo Điền",
			"lat": 10.815693855285645,
			"lng": 106.73316192626953,
			"cats": []
		}, {
			"id": 1177,
			"name": "Screc II Tower",
			"lat": 10.791568756103516,
			"lng": 106.74050903320312,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 751,
			"name": "Spring Life",
			"lat": 10.789809226989746,
			"lng": 106.77127075195312,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 797,
			"name": "Sunny Thủ Thiêm",
			"lat": 10.774942398071289,
			"lng": 106.72224426269531,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 137,
			"name": "Thạnh Mỹ Lợi",
			"lat": 10.769866943359375,
			"lng": 106.76713562011719,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1839,
			"name": "Thạnh Mỹ Lợi - Phú Nhuận 1,2",
			"lat": 10.768471717834473,
			"lng": 106.76087951660156,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 466,
			"name": "Thảo Điền Pearl",
			"lat": 10.801422119140625,
			"lng": 106.73316955566406,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1953,
			"name": "The Ascent",
			"lat": 10.80711841583252,
			"lng": 106.73142242431641,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1575,
			"name": "The CBD Premium Home",
			"lat": 10.774202346801758,
			"lng": 106.76191711425781,
			"cats": [55, 324, 326]
		}, {
			"id": 138,
			"name": "The Estella",
			"lat": 10.800268173217773,
			"lng": 106.74884796142578,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2100,
			"name": "The Krista",
			"lat": 10.790443420410156,
			"lng": 106.77030944824219,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2252,
			"name": "The Nassim",
			"lat": 10.804910659790039,
			"lng": 106.744384765625,
			"cats": []
		}, {
			"id": 2065,
			"name": "The Sun Avenue",
			"lat": 10.784899711608887,
			"lng": 106.74744415283203,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 141,
			"name": "The Vista",
			"lat": 10.805335998535156,
			"lng": 106.75173187255859,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1765,
			"name": "Thủ Thiêm Sky",
			"lat": 10.814663887023926,
			"lng": 106.73025512695312,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 786,
			"name": "Thủ Thiêm Star",
			"lat": 10.792109489440918,
			"lng": 106.77737426757812,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1086,
			"name": "Thủ Thiêm Villa",
			"lat": 10.764524459838867,
			"lng": 106.75836181640625,
			"cats": [40, 41, 48, 52, 59, 325]
		}, {
			"id": 1106,
			"name": "Thủ Thiêm Xanh",
			"lat": 10.789509773254395,
			"lng": 106.77629852294922,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 765,
			"name": "Tropic Garden",
			"lat": 10.813526153564453,
			"lng": 106.72837066650391,
			"cats": [48, 55, 57, 59, 324, 326]
		}, {
			"id": 993,
			"name": "Ventura",
			"lat": 10.770401954650879,
			"lng": 106.78965759277344,
			"cats": [41, 48, 55, 59, 163]
		}, {
			"id": 675,
			"name": "Veronica Apartments",
			"lat": 10.813142776489258,
			"lng": 106.73081970214844,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1880,
			"name": "Villa Riviera",
			"lat": 10.80756950378418,
			"lng": 106.74929046630859,
			"cats": [40, 44, 325]
		}, {
			"id": 359,
			"name": "Vinaconex Thảo Điền",
			"lat": 10.807326316833496,
			"lng": 106.73126983642578,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1819,
			"name": "Vista Verde",
			"lat": 10.777677536010742,
			"lng": 106.75783538818359,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 331,
			"name": "Waterfront Residences",
			"lat": 10.804924011230469,
			"lng": 106.72632598876953,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 697,
			"name": "Xi Riverview Palace",
			"lat": 10.816993713378906,
			"lng": 106.73073577880859,
			"cats": [48, 55, 59, 324, 326]
		}]
	}, {
		"id": 55,
		"name": "Quận 3",
		"pre": "",
		"ward": [{
			"id": 8656,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8666,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8668,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8669,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8670,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8671,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8657,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 8658,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8659,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8660,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8661,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8662,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8663,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8664,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3332,
			"name": "1 Cư xá Đô Thành",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 3333,
			"name": "2 Cư xá Đô Thành",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 3334,
			"name": "3 Cư xá Đô Thành",
			"pre": "Đường"
		}, {
			"id": 3335,
			"name": "4 Cư xá Đô Thành",
			"pre": "Đường"
		}, {
			"id": 8542,
			"name": "5 Cư Xá Đô Thành",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 8632,
			"name": "7 Cư xá Đô Thành",
			"pre": "Đường"
		}, {
			"id": 800,
			"name": "Bà Huyện Thanh Quan",
			"pre": "Phố"
		}, {
			"id": 947,
			"name": "Bà Lê Chân",
			"pre": "Đường"
		}, {
			"id": 3322,
			"name": "Bàn Cờ",
			"pre": "Đường"
		}, {
			"id": 3318,
			"name": "Bờ Bắc Kênh Nhiêu Lộc",
			"pre": "Đường"
		}, {
			"id": 3317,
			"name": "Bờ Nam Kênh Nhiêu Lộc",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 346,
			"name": "Cao Thắng",
			"pre": "Đường"
		}, {
			"id": 3315,
			"name": "CT. Chiến sỹ",
			"pre": "Đường"
		}, {
			"id": 3316,
			"name": "CT. Dân Chủ",
			"pre": "Đường"
		}, {
			"id": 7043,
			"name": "Cư xá Đô Thành",
			"pre": "Đường"
		}, {
			"id": 2273,
			"name": "Đặng Văn Ngữ",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 2156,
			"name": "Đỗ Tấn Phong",
			"pre": "Đường"
		}, {
			"id": 3336,
			"name": "Đoàn Công Bửu",
			"pre": "Đường"
		}, {
			"id": 102,
			"name": "Hai Bà Trưng",
			"pre": "Phố"
		}, {
			"id": 522,
			"name": "Hồ Xuân Hương",
			"pre": "Đường"
		}, {
			"id": 1157,
			"name": "Hòa Hưng",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 938,
			"name": "Hoàng Sa",
			"pre": "Đường"
		}, {
			"id": 1603,
			"name": "Huỳnh Tịnh Của",
			"pre": "Đường"
		}, {
			"id": 4826,
			"name": "Huỳnh Văn Bánh",
			"pre": "Đường"
		}, {
			"id": 7769,
			"name": "Kênh Nhiêu Lộc",
			"pre": "Đường"
		}, {
			"id": 1684,
			"name": "Kỳ Đồng",
			"pre": "Phố"
		}, {
			"id": 3323,
			"name": "Lê Ngô Cát",
			"pre": "Đường"
		}, {
			"id": 348,
			"name": "Lê Quý Đôn",
			"pre": "Đường"
		}, {
			"id": 973,
			"name": "Lê Thị Riêng",
			"pre": "Đường"
		}, {
			"id": 821,
			"name": "Lê Văn Sỹ",
			"pre": "Đường"
		}, {
			"id": 6114,
			"name": "Liên Phường",
			"pre": "Đường"
		}, {
			"id": 2333,
			"name": "Lý Chính Thắng",
			"pre": "Đường"
		}, {
			"id": 237,
			"name": "Lý Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 898,
			"name": "Nam Kỳ Khởi Nghĩa",
			"pre": "Đường"
		}, {
			"id": 3331,
			"name": "Ngô Thời Nhiệm",
			"pre": "Đường"
		}, {
			"id": 1277,
			"name": "Nguyễn Biểu",
			"pre": "Đường"
		}, {
			"id": 537,
			"name": "Nguyễn Đình Chiểu",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 208,
			"name": "Nguyễn Gia Thiều",
			"pre": "Đường"
		}, {
			"id": 2654,
			"name": "Nguyễn Hiền",
			"pre": "Đường"
		}, {
			"id": 4635,
			"name": "Nguyễn Ngọc Phương",
			"pre": "Đường"
		}, {
			"id": 3321,
			"name": "Nguyễn Phúc Nguyên",
			"pre": "Đường"
		}, {
			"id": 3324,
			"name": "Nguyễn Sơn Hà",
			"pre": "Đường"
		}, {
			"id": 3325,
			"name": "Nguyễn Thị Diệu",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 5939,
			"name": "Nguyễn Thị Nhiệm",
			"pre": "Đường"
		}, {
			"id": 147,
			"name": "Nguyễn Thiện Thuật",
			"pre": "Phố"
		}, {
			"id": 2454,
			"name": "Nguyễn Thông",
			"pre": "Đường"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 8800,
			"name": "Nguyễn Văn Khai",
			"pre": "Đường"
		}, {
			"id": 3326,
			"name": "Nguyễn Văn Mai",
			"pre": "Đường"
		}, {
			"id": 341,
			"name": "Nguyễn Văn Trỗi",
			"pre": "Đường"
		}, {
			"id": 1045,
			"name": "Pasteur",
			"pre": "Đường"
		}, {
			"id": 3327,
			"name": "Phạm Đình Toái",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 3319,
			"name": "Rạch Bùng Binh",
			"pre": "Đường"
		}, {
			"id": 3328,
			"name": "Sư Thiện Chiếu",
			"pre": "Đường"
		}, {
			"id": 1091,
			"name": "Sư Vạn Hạnh",
			"pre": "Đường"
		}, {
			"id": 544,
			"name": "Trần Cao Vân",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 743,
			"name": "Trần Huy Liệu",
			"pre": "Đường"
		}, {
			"id": 4250,
			"name": "Trần Minh Quyền",
			"pre": "Đường"
		}, {
			"id": 420,
			"name": "Trần Quang Diệu",
			"pre": "Đường"
		}, {
			"id": 3086,
			"name": "Trần Quốc Thảo",
			"pre": "Đường"
		}, {
			"id": 219,
			"name": "Trần Quốc Toản",
			"pre": "Đường"
		}, {
			"id": 3320,
			"name": "Trần Văn Đang",
			"pre": "Đường"
		}, {
			"id": 1003,
			"name": "Trịnh Văn Cấn",
			"pre": "Đường"
		}, {
			"id": 461,
			"name": "Trương Định",
			"pre": "Đường"
		}, {
			"id": 3329,
			"name": "Trương Quyền",
			"pre": "Đường"
		}, {
			"id": 1485,
			"name": "Trường Sa",
			"pre": "Đường"
		}, {
			"id": 1534,
			"name": "Tú Xương",
			"pre": "Đường"
		}, {
			"id": 2724,
			"name": "Võ Thị Sáu",
			"pre": "Đường"
		}, {
			"id": 2739,
			"name": "Võ Văn Tần",
			"pre": "Đường"
		}, {
			"id": 3330,
			"name": "Vườn Chuối",
			"pre": "Đường"
		}],
		"project": [{
			"id": 662,
			"name": "107 Trương Định",
			"lat": 10.77835750579834,
			"lng": 106.6885986328125,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1690,
			"name": "Alpha Tower",
			"lat": 10.775826454162598,
			"lng": 106.6881103515625,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 775,
			"name": "An Phú Plaza",
			"lat": 10.787470817565918,
			"lng": 106.68486022949219,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1874,
			"name": "Bitexco Nam Long",
			"lat": 10.777240753173828,
			"lng": 106.69137573242187,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1339,
			"name": "C.T Plaza Minh Châu",
			"lat": 10.78840160369873,
			"lng": 106.67618560791016,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1917,
			"name": "Cao ốc Pax Sky",
			"lat": 10.777493476867676,
			"lng": 106.68930053710937,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 1840,
			"name": "Crec Building Trương Định",
			"lat": 10.77651309967041,
			"lng": 106.69117736816406,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1226,
			"name": "DB Court",
			"lat": 10.782584190368652,
			"lng": 106.68971252441406,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1872,
			"name": "DC Tower",
			"lat": 10.787826538085938,
			"lng": 106.68524932861328,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 500,
			"name": "Green Building",
			"lat": 10.786206245422363,
			"lng": 106.66705322265625,
			"cats": [55, 324, 326]
		}, {
			"id": 1991,
			"name": "IDC Building",
			"lat": 10.784394264221191,
			"lng": 106.69625854492187,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 763,
			"name": "Intresco Plaza",
			"lat": 10.788804054260254,
			"lng": 106.68537902832031,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1865,
			"name": "Jabes 2 Building",
			"lat": 10.776410102844238,
			"lng": 106.68479919433594,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 795,
			"name": "Léman Luxury Apartments",
			"lat": 10.778017044067383,
			"lng": 106.68978118896484,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1686,
			"name": "Lien Hoa Building",
			"lat": 10.772247314453125,
			"lng": 106.69233703613281,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1916,
			"name": "MB Bank Tower",
			"lat": 10.785419464111328,
			"lng": 106.66730499267578,
			"cats": [41, 50, 55, 163]
		}, {
			"id": 1520,
			"name": "Minh Long Tower",
			"lat": 10.775221824645996,
			"lng": 106.69015502929687,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 255,
			"name": "New Pearl - Viên Ngọc Mới",
			"lat": 10.782331466674805,
			"lng": 106.69258880615234,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 908,
			"name": "New Pearl Residence",
			"lat": 10.782257080078125,
			"lng": 106.69229888916016,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1683,
			"name": "Ngọc Đông Dương",
			"lat": 10.775370597839355,
			"lng": 106.68601989746094,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 92,
			"name": "Nguyễn Phúc Nguyên",
			"lat": 10.780747413635254,
			"lng": 106.67889404296875,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1957,
			"name": "Pasteur Tower",
			"lat": 10.783495903015137,
			"lng": 106.69197845458984,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1730,
			"name": "Pjico Building",
			"lat": 10.78391170501709,
			"lng": 106.69126892089844,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1738,
			"name": "PMC Building",
			"lat": 10.78193187713623,
			"lng": 106.69428253173828,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 683,
			"name": "PNT Court",
			"lat": 10.785945892333984,
			"lng": 106.69237518310547,
			"cats": [55, 324, 326]
		}, {
			"id": 1688,
			"name": "PVC Building",
			"lat": 10.779047012329102,
			"lng": 106.68955993652344,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1267,
			"name": "Saigon Mansion",
			"lat": 10.780792236328125,
			"lng": 106.69461822509766,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 689,
			"name": "Saigon Pavillon",
			"lat": 10.776280403137207,
			"lng": 106.68864440917969,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1871,
			"name": "Saigon Software Park",
			"lat": 10.780818939208984,
			"lng": 106.6861572265625,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 134,
			"name": "Screc Tower",
			"lat": 10.786576271057129,
			"lng": 106.67573547363281,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 711,
			"name": "Sherwood Residence",
			"lat": 10.782806396484375,
			"lng": 106.69316101074219,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 663,
			"name": "Sông Đà Tower",
			"lat": 10.783598899841309,
			"lng": 106.68277740478516,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1913,
			"name": "Tài Lộc Office Building",
			"lat": 10.786842346191406,
			"lng": 106.69309234619141,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1914,
			"name": "Thiên Hồng Building",
			"lat": 10.768797874450684,
			"lng": 106.68324279785156,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1915,
			"name": "Tín nghĩa Building",
			"lat": 10.786697387695313,
			"lng": 106.67978668212891,
			"cats": [41, 48, 50, 55, 163]
		}]
	}, {
		"id": 56,
		"name": "Quận 4",
		"pre": "",
		"ward": [{
			"id": 95,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 102,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 103,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 104,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 106,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 107,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 108,
			"name": "16",
			"pre": "Phường"
		}, {
			"id": 110,
			"name": "18",
			"pre": "Phường"
		}, {
			"id": 96,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 97,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 98,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 99,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 100,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 101,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 11937,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 7478,
			"name": "10C",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4167,
			"name": "12A",
			"pre": "Đường"
		}, {
			"id": 4168,
			"name": "12C",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 1000,
			"name": "3/2",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 2876,
			"name": "34",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 2167,
			"name": "38",
			"pre": "Đường"
		}, {
			"id": 2520,
			"name": "39",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4672,
			"name": "40",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 2885,
			"name": "42",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 3061,
			"name": "44",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 2262,
			"name": "46",
			"pre": "Đường"
		}, {
			"id": 2894,
			"name": "48",
			"pre": "Đường"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 800,
			"name": "Bà Huyện Thanh Quan",
			"pre": "Phố"
		}, {
			"id": 1319,
			"name": "Bến Vân Đồn",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 711,
			"name": "Cao Lỗ",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 3965,
			"name": "Đoàn Nhữ Hài",
			"pre": "Đường"
		}, {
			"id": 1321,
			"name": "Đoàn Văn Bơ",
			"pre": "Đường"
		}, {
			"id": 6031,
			"name": "Dương Khánh Hội",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 938,
			"name": "Hoàng Sa",
			"pre": "Đường"
		}, {
			"id": 1317,
			"name": "Khánh Hội",
			"pre": "Đường"
		}, {
			"id": 3323,
			"name": "Lê Ngô Cát",
			"pre": "Đường"
		}, {
			"id": 4255,
			"name": "Lê Quốc Hưng",
			"pre": "Đường"
		}, {
			"id": 202,
			"name": "Lê Thạch",
			"pre": "Đường"
		}, {
			"id": 203,
			"name": "Lê Văn Linh",
			"pre": "Đường"
		}, {
			"id": 2333,
			"name": "Lý Chính Thắng",
			"pre": "Đường"
		}, {
			"id": 898,
			"name": "Nam Kỳ Khởi Nghĩa",
			"pre": "Đường"
		}, {
			"id": 3331,
			"name": "Ngô Thời Nhiệm",
			"pre": "Đường"
		}, {
			"id": 1738,
			"name": "Ngô Văn Sở",
			"pre": "Đường"
		}, {
			"id": 3386,
			"name": "Nguyễn Hữu Hãn",
			"pre": "Đường"
		}, {
			"id": 3358,
			"name": "Nguyễn Hữu Hào",
			"pre": "Đường"
		}, {
			"id": 468,
			"name": "Nguyễn Khoái",
			"pre": "Đường"
		}, {
			"id": 1310,
			"name": "Nguyễn Tất Thành",
			"pre": "Đường"
		}, {
			"id": 1884,
			"name": "Nguyễn Thần Hiến",
			"pre": "Đường"
		}, {
			"id": 2454,
			"name": "Nguyễn Thông",
			"pre": "Đường"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 752,
			"name": "Nguyễn Trường Tộ",
			"pre": "Đường"
		}, {
			"id": 4259,
			"name": "Phan Văn Hân",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 4172,
			"name": "Tân Vĩnh",
			"pre": "Đường"
		}, {
			"id": 1320,
			"name": "Tôn Đản",
			"pre": "Đường"
		}, {
			"id": 675,
			"name": "Tôn Thất Thuyết",
			"pre": "Đường"
		}, {
			"id": 4250,
			"name": "Trần Minh Quyền",
			"pre": "Đường"
		}, {
			"id": 1305,
			"name": "Trương Đình Hội",
			"pre": "Đường"
		}, {
			"id": 1534,
			"name": "Tú Xương",
			"pre": "Đường"
		}, {
			"id": 509,
			"name": "Vân Đồn",
			"pre": "Đường"
		}, {
			"id": 4251,
			"name": "Vạn Quốc Tự",
			"pre": "Đường"
		}, {
			"id": 6125,
			"name": "Vĩnh Hội",
			"pre": "Đường"
		}, {
			"id": 4244,
			"name": "Vĩnh Khánh",
			"pre": "Đường"
		}, {
			"id": 5935,
			"name": "Xóm Chiếu",
			"pre": "Đường"
		}],
		"project": [{
			"id": 100,
			"name": "Constrexim Copac Square",
			"lat": 10.762310981750488,
			"lng": 106.70772552490234,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1429,
			"name": "Galaxy 9",
			"lat": 10.755117416381836,
			"lng": 106.69390869140625,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2069,
			"name": "Grand Riverside",
			"lat": 10.768187522888184,
			"lng": 106.70532989501953,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 107,
			"name": "H2 Hoàng Diệu",
			"lat": 10.762415885925293,
			"lng": 106.70224761962891,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 489,
			"name": "H3 Hoàng Diệu",
			"lat": 10.760313034057617,
			"lng": 106.69893646240234,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1387,
			"name": "ICON 56",
			"lat": 10.76612377166748,
			"lng": 106.70275115966797,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 904,
			"name": "Khahomex Savico",
			"lat": 10.766205787658691,
			"lng": 106.70265960693359,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1306,
			"name": "Khánh Hội 1",
			"lat": 10.754400253295898,
			"lng": 106.69049072265625,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 91,
			"name": "Khánh Hội 2",
			"lat": 10.755631446838379,
			"lng": 106.69100952148437,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 903,
			"name": "Khánh Hội 3",
			"lat": 10.755112648010254,
			"lng": 106.68975067138672,
			"cats": [55, 324, 326]
		}, {
			"id": 1097,
			"name": "Lancaster Residences D4",
			"lat": 10.753288269042969,
			"lng": 106.70529937744141,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 793,
			"name": "Moon Garden",
			"lat": 10.755306243896484,
			"lng": 106.69383239746094,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 122,
			"name": "Orient Apartment",
			"lat": 10.757339477539062,
			"lng": 106.69225311279297,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2274,
			"name": "Riva Park",
			"lat": 10.757594108581543,
			"lng": 106.71690368652344,
			"cats": []
		}, {
			"id": 1887,
			"name": "River Gate",
			"lat": 10.762548446655273,
			"lng": 106.69866943359375,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2489,
			"name": "Saigon Royal Residence",
			"lat": 10.767429351806641,
			"lng": 106.70413208007812,
			"cats": []
		}, {
			"id": 2141,
			"name": "The Gold View",
			"lat": 10.756248474121094,
			"lng": 106.69184875488281,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2044,
			"name": "The Tresor",
			"lat": 10.766646385192871,
			"lng": 106.70347595214844,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1307,
			"name": "Tôn Thất Thuyết",
			"lat": 10.754854202270508,
			"lng": 106.69194793701172,
			"cats": [55, 324, 326]
		}, {
			"id": 145,
			"name": "Vạn Đô",
			"lat": 10.75570011138916,
			"lng": 106.69148254394531,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 512,
			"name": "VietCas Tower",
			"lat": 10.755802154541016,
			"lng": 106.71842193603516,
			"cats": [48, 50, 55, 59, 324, 326]
		}]
	}, {
		"id": 57,
		"name": "Quận 5",
		"pre": "",
		"ward": [{
			"id": 8693,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 11970,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8704,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8706,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8707,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8708,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8709,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 8694,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 8695,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8697,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8698,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8699,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8701,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8702,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8703,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 1084,
			"name": "An Bình",
			"pre": "Đường"
		}, {
			"id": 1201,
			"name": "An Điềm",
			"pre": "Đường"
		}, {
			"id": 6000,
			"name": "An Dương Vương",
			"pre": "Đường"
		}, {
			"id": 179,
			"name": "Bà Triệu",
			"pre": "Phố"
		}, {
			"id": 1085,
			"name": "Bạch Vân",
			"pre": "Đường"
		}, {
			"id": 2204,
			"name": "Bãi Sậy",
			"pre": "Đường"
		}, {
			"id": 1199,
			"name": "Bùi Hữu Nghĩa",
			"pre": "Đường"
		}, {
			"id": 529,
			"name": "Cao Đạt",
			"pre": "Đường"
		}, {
			"id": 1646,
			"name": "Châu Văn Liêm",
			"pre": "Đường"
		}, {
			"id": 1088,
			"name": "Chiêu Anh Các",
			"pre": "Đường"
		}, {
			"id": 172,
			"name": "Đặng Thái Thân",
			"pre": "Phố"
		}, {
			"id": 1198,
			"name": "Đào Tấn",
			"pre": "Đường"
		}, {
			"id": 1034,
			"name": "Đỗ Ngọc Thạnh",
			"pre": "Đường"
		}, {
			"id": 1287,
			"name": "Đỗ Văn Sửu",
			"pre": "Đường"
		}, {
			"id": 1006,
			"name": "Dương Tử Giang",
			"pre": "Đường"
		}, {
			"id": 6196,
			"name": "Gia Phú",
			"pre": "Đường"
		}, {
			"id": 1197,
			"name": "Gò Công",
			"pre": "Đường"
		}, {
			"id": 1036,
			"name": "Hà Tôn Quyền",
			"pre": "Đường"
		}, {
			"id": 1285,
			"name": "Hải Thượng Lãn Ông",
			"pre": "Đường"
		}, {
			"id": 1525,
			"name": "Hàm Tử",
			"pre": "Đường"
		}, {
			"id": 965,
			"name": "Hòa Bình",
			"pre": "Đường"
		}, {
			"id": 1097,
			"name": "Học Lạc",
			"pre": "Đường"
		}, {
			"id": 1053,
			"name": "Hồng Bàng",
			"pre": "Đường"
		}, {
			"id": 5718,
			"name": "Hưng Phước",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 1283,
			"name": "Huỳnh Mẫn Đạt",
			"pre": "Đường"
		}, {
			"id": 1152,
			"name": "Kim Biên",
			"pre": "Đường"
		}, {
			"id": 1195,
			"name": "Ký Hòa",
			"pre": "Đường"
		}, {
			"id": 1210,
			"name": "Lão Tử",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 1154,
			"name": "Lương Nhữ Học",
			"pre": "Đường"
		}, {
			"id": 1194,
			"name": "Lưu Xuân Tín",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 1280,
			"name": "Mạc Cửu",
			"pre": "Đường"
		}, {
			"id": 1155,
			"name": "Mạc Thiên Tích",
			"pre": "Phố"
		}, {
			"id": 1193,
			"name": "Nghĩa Thục",
			"pre": "Đường"
		}, {
			"id": 285,
			"name": "Ngô Gia Tự",
			"pre": "Đường"
		}, {
			"id": 1279,
			"name": "Ngô Nhân Tịnh",
			"pre": "Đường"
		}, {
			"id": 6669,
			"name": "Ngô Nhơn Tịnh",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 1192,
			"name": "Nguyễn Án",
			"pre": "Đường"
		}, {
			"id": 1217,
			"name": "Nguyễn An Khương",
			"pre": "Đường"
		}, {
			"id": 1277,
			"name": "Nguyễn Biểu",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 1191,
			"name": "Nguyễn Duy Dương",
			"pre": "Đường"
		}, {
			"id": 1219,
			"name": "Nguyễn Kim",
			"pre": "Đường"
		}, {
			"id": 1275,
			"name": "Nguyễn Thi",
			"pre": "Đường"
		}, {
			"id": 988,
			"name": "Nguyễn Thị Nhỏ",
			"pre": "Đường"
		}, {
			"id": 1190,
			"name": "Nguyễn Thời Trung",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 87,
			"name": "Nguyễn Văn Côn",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 1189,
			"name": "Nguyễn Văn Đừng",
			"pre": "Đường"
		}, {
			"id": 1222,
			"name": "Nhiêu Tâm",
			"pre": "Đường"
		}, {
			"id": 1259,
			"name": "Phạm Bân",
			"pre": "Đường"
		}, {
			"id": 1168,
			"name": "Phạm Đôn",
			"pre": "Đường"
		}, {
			"id": 1188,
			"name": "Phạm Hữu Chí",
			"pre": "Đường"
		}, {
			"id": 229,
			"name": "Phan Huy Chú",
			"pre": "Đường"
		}, {
			"id": 1257,
			"name": "Phan Phú Tiên",
			"pre": "Đường"
		}, {
			"id": 4279,
			"name": "Phan Văn Khỏe",
			"pre": "Đường"
		}, {
			"id": 382,
			"name": "Phan Văn Trị",
			"pre": "Đường"
		}, {
			"id": 1027,
			"name": "Phó Cơ Điều",
			"pre": "Đường"
		}, {
			"id": 1224,
			"name": "Phú Định",
			"pre": "Đường"
		}, {
			"id": 1255,
			"name": "Phù Đổng Thiên Vương",
			"pre": "Đường"
		}, {
			"id": 1170,
			"name": "Phú Giáo",
			"pre": "Đường"
		}, {
			"id": 1186,
			"name": "Phú Hữu",
			"pre": "Đường"
		}, {
			"id": 128,
			"name": "Phùng Hưng",
			"pre": "Phố"
		}, {
			"id": 1254,
			"name": "Phước Hưng",
			"pre": "Đường"
		}, {
			"id": 1091,
			"name": "Sư Vạn Hạnh",
			"pre": "Đường"
		}, {
			"id": 498,
			"name": "Tạ Quang Bửu",
			"pre": "Phố"
		}, {
			"id": 1061,
			"name": "Tạ Uyên",
			"pre": "Đường"
		}, {
			"id": 1227,
			"name": "Tản Đà",
			"pre": "Đường"
		}, {
			"id": 9817,
			"name": "Tân Hàng",
			"pre": "Đường"
		}, {
			"id": 1252,
			"name": "Tân Hưng",
			"pre": "Đường"
		}, {
			"id": 1043,
			"name": "Tân Thành",
			"pre": "Đường"
		}, {
			"id": 1184,
			"name": "Tăng Bạt Hổ",
			"pre": "Đường"
		}, {
			"id": 1228,
			"name": "Thuận Kiều",
			"pre": "Đường"
		}, {
			"id": 217,
			"name": "Tống Duy Tân",
			"pre": "Đường"
		}, {
			"id": 5698,
			"name": "Tống Văn Hên",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 1183,
			"name": "Trần Chánh Chiếu",
			"pre": "Đường"
		}, {
			"id": 482,
			"name": "Trần Điền",
			"pre": "Phố"
		}, {
			"id": 1248,
			"name": "Trần Hòa",
			"pre": "Đường"
		}, {
			"id": 1249,
			"name": "Trần Hòa",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 1173,
			"name": "Trần Nhân Tôn",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 1244,
			"name": "Trần Tuấn Khải",
			"pre": "Đường"
		}, {
			"id": 1176,
			"name": "Trần Tướng Công",
			"pre": "Đường"
		}, {
			"id": 6332,
			"name": "Trần Văn Kiểu",
			"pre": "Đường"
		}, {
			"id": 6306,
			"name": "Trần Văn Tôn",
			"pre": "Đường"
		}, {
			"id": 1181,
			"name": "Trần Xuân Hòa",
			"pre": "Đường"
		}, {
			"id": 1232,
			"name": "Trang Tử",
			"pre": "Đường"
		}, {
			"id": 1242,
			"name": "Triệu Quang Phục",
			"pre": "Đường"
		}, {
			"id": 390,
			"name": "Trịnh Hoài Đức",
			"pre": "Đường"
		}, {
			"id": 505,
			"name": "Vạn Kiếp",
			"pre": "Phố"
		}, {
			"id": 1180,
			"name": "Vạn Tượng",
			"pre": "Đường"
		}, {
			"id": 1234,
			"name": "Võ Trường Toản",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 1178,
			"name": "Vũ Chí Hiếu",
			"pre": "Đường"
		}, {
			"id": 1179,
			"name": "Vũ Chí Hiếu",
			"pre": "Đường"
		}, {
			"id": 9176,
			"name": "Xóm Chỉ",
			"pre": "Đường"
		}, {
			"id": 1236,
			"name": "Xóm Vôi",
			"pre": "Đường"
		}, {
			"id": 135,
			"name": "Yết Kiêu",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1829,
			"name": "155 Nguyễn Chí Thanh",
			"lat": 10.759018898010254,
			"lng": 106.66495513916016,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 897,
			"name": "Cao ốc Cinco",
			"lat": 10.753073692321777,
			"lng": 106.65475463867187,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2329,
			"name": "Charmington",
			"lat": 10.750589370727539,
			"lng": 106.66368103027344,
			"cats": []
		}, {
			"id": 2212,
			"name": "Golden Plaza",
			"lat": 10.753300666809082,
			"lng": 106.65481567382812,
			"cats": [50, 55, 324, 326, 362]
		}, {
			"id": 1696,
			"name": "Hà Phan",
			"lat": 10.753090858459473,
			"lng": 106.67324829101562,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1786,
			"name": "HCMC Lottery Tower",
			"lat": 10.760750770568848,
			"lng": 106.67484283447266,
			"cats": [41, 50, 55, 163]
		}, {
			"id": 440,
			"name": "Hùng Vương Plaza",
			"lat": 10.755990028381348,
			"lng": 106.66268920898437,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 117,
			"name": "Lakai",
			"lat": 10.754042625427246,
			"lng": 106.66982269287109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1657,
			"name": "Ngọc Khánh Tower",
			"lat": 10.753630638122559,
			"lng": 106.68415832519531,
			"cats": []
		}, {
			"id": 127,
			"name": "Phúc Thịnh",
			"lat": 10.753411293029785,
			"lng": 106.68025970458984,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1665,
			"name": "Sao Mai",
			"lat": 10.752693176269531,
			"lng": 106.65977478027344,
			"cats": [55, 324, 325, 326]
		}, {
			"id": 136,
			"name": "Tản Đà Court",
			"lat": 10.753204345703125,
			"lng": 106.66454315185547,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2096,
			"name": "The Everrich Infinity",
			"lat": 10.760364532470703,
			"lng": 106.68082427978516,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1701,
			"name": "Thuận Kiều Plaza",
			"lat": 10.754392623901367,
			"lng": 106.65578460693359,
			"cats": [48, 55, 59, 324, 326]
		}]
	}, {
		"id": 58,
		"name": "Quận 6",
		"pre": "",
		"ward": [{
			"id": 8729,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8742,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8743,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8745,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8746,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8747,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8730,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 8732,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8734,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8735,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8737,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8739,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8740,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8741,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 7755,
			"name": "1A",
			"pre": "Đường"
		}, {
			"id": 7702,
			"name": "1B",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 6797,
			"name": "26A",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 4416,
			"name": "31",
			"pre": "Đường"
		}, {
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 9457,
			"name": "32A",
			"pre": "Đường"
		}, {
			"id": 7813,
			"name": "32C",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 2876,
			"name": "34",
			"pre": "Đường"
		}, {
			"id": 6346,
			"name": "35",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 2879,
			"name": "37",
			"pre": "Phố"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 2885,
			"name": "42",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 3061,
			"name": "44",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 4472,
			"name": "53",
			"pre": "Đường"
		}, {
			"id": 2900,
			"name": "54",
			"pre": "Đường"
		}, {
			"id": 2572,
			"name": "55",
			"pre": "Đường"
		}, {
			"id": 6015,
			"name": "57",
			"pre": "Đường"
		}, {
			"id": 2906,
			"name": "58",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 4407,
			"name": "60",
			"pre": "Đường"
		}, {
			"id": 2252,
			"name": "61",
			"pre": "Đường"
		}, {
			"id": 2914,
			"name": "64",
			"pre": "Phố"
		}, {
			"id": 2918,
			"name": "68",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 631,
			"name": "70",
			"pre": "Đường"
		}, {
			"id": 2924,
			"name": "74",
			"pre": "Phố"
		}, {
			"id": 8797,
			"name": "76",
			"pre": "Đường"
		}, {
			"id": 7118,
			"name": "78",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 8599,
			"name": "82",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 6000,
			"name": "An Dương Vương",
			"pre": "Đường"
		}, {
			"id": 1291,
			"name": "Bà Hom",
			"pre": "Đường"
		}, {
			"id": 7473,
			"name": "Bà Ký",
			"pre": "Đường"
		}, {
			"id": 8157,
			"name": "Bà Lài",
			"pre": "Đường"
		}, {
			"id": 2204,
			"name": "Bãi Sậy",
			"pre": "Đường"
		}, {
			"id": 6039,
			"name": "Bến Phú Lâm",
			"pre": "Đường"
		}, {
			"id": 4272,
			"name": "Bình Phú",
			"pre": "Đường"
		}, {
			"id": 8347,
			"name": "Bình Phú 1",
			"pre": "Đường"
		}, {
			"id": 7504,
			"name": "Bình Phú 2",
			"pre": "Đường"
		}, {
			"id": 5576,
			"name": "Bình Tây",
			"pre": "Đường"
		}, {
			"id": 1032,
			"name": "Bình Thới",
			"pre": "Đường"
		}, {
			"id": 4277,
			"name": "Bình Tiên",
			"pre": "Đường"
		}, {
			"id": 3868,
			"name": "Bửu Đình",
			"pre": "Đường"
		}, {
			"id": 2698,
			"name": "Cao Văn Lầu",
			"pre": "Đường"
		}, {
			"id": 6017,
			"name": "Chợ Lớn",
			"pre": "Đường"
		}, {
			"id": 802,
			"name": "Chu Văn An",
			"pre": "Đường"
		}, {
			"id": 9121,
			"name": "Cư Xá Phú Lâm A",
			"pre": "Đường"
		}, {
			"id": 9095,
			"name": "Cư Xá Phú Lâm B",
			"pre": "Đường"
		}, {
			"id": 9053,
			"name": "Cư Xá Phú Lâm D",
			"pre": "Đường"
		}, {
			"id": 5638,
			"name": "Đại Lộ Đông Tây",
			"pre": "Đường"
		}, {
			"id": 2073,
			"name": "Đặng Nguyên Cẩn",
			"pre": "Đường"
		}, {
			"id": 6196,
			"name": "Gia Phú",
			"pre": "Đường"
		}, {
			"id": 5574,
			"name": "Hậu Giang",
			"pre": "Đường"
		}, {
			"id": 4287,
			"name": "Hoàng Lê Kha",
			"pre": "Đường"
		}, {
			"id": 1053,
			"name": "Hồng Bàng",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 6545,
			"name": "Khiêu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 6547,
			"name": "Khiếu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 3676,
			"name": "Kinh Dương Vương",
			"pre": "Đường"
		}, {
			"id": 6551,
			"name": "Lê Công Miễn",
			"pre": "Đường"
		}, {
			"id": 4284,
			"name": "Lê Quang Sung",
			"pre": "Đường"
		}, {
			"id": 4280,
			"name": "Lê Tấn Kế",
			"pre": "Đường"
		}, {
			"id": 379,
			"name": "Lê Trực",
			"pre": "Đường"
		}, {
			"id": 1293,
			"name": "Lê Tuấn Mậu",
			"pre": "Đường"
		}, {
			"id": 5973,
			"name": "Lò Gốm",
			"pre": "Đường"
		}, {
			"id": 4261,
			"name": "Lý Chiêu Hoàng",
			"pre": "Đường"
		}, {
			"id": 787,
			"name": "Mai Xuân Thưởng",
			"pre": "Đường"
		}, {
			"id": 1025,
			"name": "Minh Phụng",
			"pre": "Đường"
		}, {
			"id": 9847,
			"name": "N77",
			"pre": "Đường"
		}, {
			"id": 1279,
			"name": "Ngô Nhân Tịnh",
			"pre": "Đường"
		}, {
			"id": 4285,
			"name": "Nguyễn Đình Chi",
			"pre": "Đường"
		}, {
			"id": 1883,
			"name": "Nguyễn Phạm Tuân",
			"pre": "Đường"
		}, {
			"id": 988,
			"name": "Nguyễn Thị Nhỏ",
			"pre": "Đường"
		}, {
			"id": 4274,
			"name": "Nguyễn Văn Luông",
			"pre": "Đường"
		}, {
			"id": 9354,
			"name": "Nguyễn Xuân Phụng",
			"pre": "Đường"
		}, {
			"id": 496,
			"name": "Phạm Đình Hổ",
			"pre": "Phố"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 1664,
			"name": "Phạm Phú Thứ",
			"pre": "Đường"
		}, {
			"id": 4275,
			"name": "Phạm Văn Chí",
			"pre": "Đường"
		}, {
			"id": 4127,
			"name": "Phan Anh",
			"pre": "Đường"
		}, {
			"id": 4279,
			"name": "Phan Văn Khỏe",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 1339,
			"name": "Song Hành",
			"pre": "Đường"
		}, {
			"id": 4258,
			"name": "Tân Hóa",
			"pre": "Đường"
		}, {
			"id": 4256,
			"name": "Tân Hòa Đông",
			"pre": "Đường"
		}, {
			"id": 514,
			"name": "Thái Phiên",
			"pre": "Đường"
		}, {
			"id": 3501,
			"name": "Tháp Mười",
			"pre": "Đường"
		}, {
			"id": 7649,
			"name": "Tỉnh Lộ 10",
			"pre": "Đường"
		}, {
			"id": 225,
			"name": "Trần Bình",
			"pre": "Phố"
		}, {
			"id": 7727,
			"name": "Trần Trung Lập",
			"pre": "Đường"
		}, {
			"id": 6332,
			"name": "Trần Văn Kiểu",
			"pre": "Đường"
		}, {
			"id": 1232,
			"name": "Trang Tử",
			"pre": "Đường"
		}, {
			"id": 6546,
			"name": "Trương Tấn Sang",
			"pre": "Đường"
		}, {
			"id": 4276,
			"name": "Văn Thân",
			"pre": "Đường"
		}, {
			"id": 1944,
			"name": "Vành Đai",
			"pre": "Đường"
		}, {
			"id": 6525,
			"name": "Vệ Định",
			"pre": "Đường"
		}, {
			"id": 6550,
			"name": "Võ Đình Tú",
			"pre": "Đường"
		}, {
			"id": 6549,
			"name": "Võ Trung Thành",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 2739,
			"name": "Võ Văn Tần",
			"pre": "Đường"
		}],
		"project": [{
			"id": 703,
			"name": "An Phú Apartment",
			"lat": 10.745414733886719,
			"lng": 106.62638854980469,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 353,
			"name": "Blue Sapphire Bình Phú",
			"lat": 10.73983097076416,
			"lng": 106.62884521484375,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2113,
			"name": "Goldland Plaza",
			"lat": 10.736006736755371,
			"lng": 106.63619995117187,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2356,
			"name": "Gotec Apartmen",
			"lat": 10.755214691162109,
			"lng": 106.63359069824219,
			"cats": []
		}, {
			"id": 1296,
			"name": "Him Lam Chợ Lớn",
			"lat": 10.746484756469727,
			"lng": 106.6376953125,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 661,
			"name": "Khu căn hộ Bình Phú",
			"lat": 10.745272636413574,
			"lng": 106.62660980224609,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1850,
			"name": "Lucky Palace",
			"lat": 10.748857498168945,
			"lng": 106.65341949462891,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1041,
			"name": "OPC Eximland",
			"lat": 10.753125190734863,
			"lng": 106.63592529296875,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 812,
			"name": "Sacomreal Hùng Vương",
			"lat": 10.746000289916992,
			"lng": 106.62400054931641,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 702,
			"name": "Tân Thịnh Lợi",
			"lat": 10.752339363098145,
			"lng": 106.62880706787109,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2390,
			"name": "Viva Riverside",
			"lat": 10.742403984069824,
			"lng": 106.64767456054687,
			"cats": []
		}]
	}, {
		"id": 59,
		"name": "Quận 7",
		"pre": "",
		"ward": [{
			"id": 8753,
			"name": "Bình Thuận",
			"pre": "Phường"
		}, {
			"id": 8754,
			"name": "Phú Mỹ",
			"pre": "Phường"
		}, {
			"id": 8755,
			"name": "Phú Thuận",
			"pre": "Phường"
		}, {
			"id": 8759,
			"name": "Tân Hưng",
			"pre": "Phường"
		}, {
			"id": 8761,
			"name": "Tân Kiểng",
			"pre": "Phường"
		}, {
			"id": 8773,
			"name": "Tân Phong",
			"pre": "Phường"
		}, {
			"id": 8774,
			"name": "Tân Phú",
			"pre": "Phường"
		}, {
			"id": 11902,
			"name": "Tân Quy",
			"pre": "Phường"
		}, {
			"id": 8776,
			"name": "Tân Thuận Đông",
			"pre": "Phường"
		}, {
			"id": 8778,
			"name": "Tân Thuận Tây",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 4311,
			"name": "11N",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 2647,
			"name": "12B",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 5780,
			"name": "14A",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 8244,
			"name": "15B",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 4281,
			"name": "25A",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 4416,
			"name": "31",
			"pre": "Đường"
		}, {
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 2876,
			"name": "34",
			"pre": "Đường"
		}, {
			"id": 6346,
			"name": "35",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 2879,
			"name": "37",
			"pre": "Phố"
		}, {
			"id": 2167,
			"name": "38",
			"pre": "Đường"
		}, {
			"id": 2520,
			"name": "39",
			"pre": "Đường"
		}, {
			"id": 4413,
			"name": "3A",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4672,
			"name": "40",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 2885,
			"name": "42",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 3061,
			"name": "44",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 2894,
			"name": "48",
			"pre": "Đường"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 5263,
			"name": "4A",
			"pre": "Đường"
		}, {
			"id": 9763,
			"name": "4F",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 2898,
			"name": "52",
			"pre": "Phố"
		}, {
			"id": 4472,
			"name": "53",
			"pre": "Đường"
		}, {
			"id": 2904,
			"name": "56",
			"pre": "Phố"
		}, {
			"id": 2908,
			"name": "59",
			"pre": "Phố"
		}, {
			"id": 10127,
			"name": "5K",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 2252,
			"name": "61",
			"pre": "Đường"
		}, {
			"id": 8036,
			"name": "62",
			"pre": "Đường"
		}, {
			"id": 8689,
			"name": "63",
			"pre": "Đường"
		}, {
			"id": 2915,
			"name": "65",
			"pre": "Phố"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 2917,
			"name": "67",
			"pre": "Đường"
		}, {
			"id": 2918,
			"name": "68",
			"pre": "Đường"
		}, {
			"id": 4291,
			"name": "69",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 631,
			"name": "70",
			"pre": "Đường"
		}, {
			"id": 7957,
			"name": "71",
			"pre": "Đường"
		}, {
			"id": 8680,
			"name": "73",
			"pre": "Đường"
		}, {
			"id": 2925,
			"name": "75",
			"pre": "Phố"
		}, {
			"id": 8797,
			"name": "76",
			"pre": "Đường"
		}, {
			"id": 4294,
			"name": "77",
			"pre": "Đường"
		}, {
			"id": 7118,
			"name": "78",
			"pre": "Đường"
		}, {
			"id": 4295,
			"name": "79",
			"pre": "Đường"
		}, {
			"id": 4309,
			"name": "7L",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 4297,
			"name": "81",
			"pre": "Đường"
		}, {
			"id": 4299,
			"name": "83",
			"pre": "Đường"
		}, {
			"id": 4300,
			"name": "85",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 4310,
			"name": "9M",
			"pre": "Đường"
		}, {
			"id": 4273,
			"name": "Bế Văn Cấm",
			"pre": "Đường"
		}, {
			"id": 3858,
			"name": "Bến Nghé",
			"pre": "Đường"
		}, {
			"id": 335,
			"name": "Bùi Bằng Đoàn",
			"pre": "Đường"
		}, {
			"id": 5592,
			"name": "Bùi Văn Ba",
			"pre": "Đường"
		}, {
			"id": 3070,
			"name": "Cao Triều Phát",
			"pre": "Đường"
		}, {
			"id": 7192,
			"name": "Chuyên Dùng",
			"pre": "Đường"
		}, {
			"id": 7431,
			"name": "Chuyên Dùng 9",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 2599,
			"name": "D4",
			"pre": "Đường"
		}, {
			"id": 3526,
			"name": "Đặng Đại Độ",
			"pre": "Đường"
		}, {
			"id": 5722,
			"name": "Đặng Đức Thuật",
			"pre": "Đường"
		}, {
			"id": 6503,
			"name": "Đào Tông Nguyên",
			"pre": "Đường"
		}, {
			"id": 5715,
			"name": "Đào Trí",
			"pre": "Đường"
		}, {
			"id": 7458,
			"name": "Đô Đốc Tuyết",
			"pre": "Đường"
		}, {
			"id": 310,
			"name": "Giải Phóng",
			"pre": "Đường"
		}, {
			"id": 5685,
			"name": "Gò Lu",
			"pre": "Đường"
		}, {
			"id": 6202,
			"name": "Gò Ô Môi",
			"pre": "Đường"
		}, {
			"id": 755,
			"name": "Hà Huy Tập",
			"pre": "Đường"
		}, {
			"id": 7708,
			"name": "Him Lam",
			"pre": "Đường"
		}, {
			"id": 616,
			"name": "Hoàng Quốc Việt",
			"pre": "Đường"
		}, {
			"id": 300,
			"name": "Hoàng Văn Thái",
			"pre": "Đường"
		}, {
			"id": 9749,
			"name": "Hưng Gia 2",
			"pre": "Đường"
		}, {
			"id": 7552,
			"name": "Hưng Gia 5",
			"pre": "Đường"
		}, {
			"id": 5718,
			"name": "Hưng Phước",
			"pre": "Đường"
		}, {
			"id": 7926,
			"name": "Hưng Thái",
			"pre": "Đường"
		}, {
			"id": 3010,
			"name": "Huỳnh Tấn Phát",
			"pre": "Đường"
		}, {
			"id": 6789,
			"name": "Kiều Đàm",
			"pre": "Đường"
		}, {
			"id": 4266,
			"name": "Lâm Văn Bền",
			"pre": "Đường"
		}, {
			"id": 5678,
			"name": "Lãnh Binh Thăng",
			"pre": "Đường"
		}, {
			"id": 10154,
			"name": "Lê Đăng Lương",
			"pre": "Đường"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 5679,
			"name": "Lê Văn Thêm",
			"pre": "Đường"
		}, {
			"id": 325,
			"name": "Lê Văn Thiêm",
			"pre": "Phố"
		}, {
			"id": 3026,
			"name": "Lưu Trọng Lư",
			"pre": "Đường"
		}, {
			"id": 7349,
			"name": "Lý Long Tường",
			"pre": "Đường"
		}, {
			"id": 4262,
			"name": "Lý Phục Man",
			"pre": "Đường"
		}, {
			"id": 4163,
			"name": "Mai Chí Thọ",
			"pre": "Đường"
		}, {
			"id": 5713,
			"name": "Mai Văn Vĩnh",
			"pre": "Đường"
		}, {
			"id": 7622,
			"name": "Mỹ Hưng",
			"pre": "Đường"
		}, {
			"id": 7650,
			"name": "Mỹ Phú 1",
			"pre": "Đường"
		}, {
			"id": 8590,
			"name": "Mỹ Tú Cảnh Quan",
			"pre": "Đường"
		}, {
			"id": 2251,
			"name": "Nguyễn Bính",
			"pre": "Đường"
		}, {
			"id": 8905,
			"name": "Nguyễn Cao Nam",
			"pre": "Đường"
		}, {
			"id": 479,
			"name": "Nguyễn Đức Cảnh",
			"pre": "Đường"
		}, {
			"id": 458,
			"name": "Nguyễn Hữu Thọ",
			"pre": "Đường"
		}, {
			"id": 1476,
			"name": "Nguyễn Khắc Viện",
			"pre": "Đường"
		}, {
			"id": 394,
			"name": "Nguyễn Lương Bằng",
			"pre": "Đường"
		}, {
			"id": 615,
			"name": "Nguyễn Thị Thập",
			"pre": "Đường"
		}, {
			"id": 8383,
			"name": "Nguyễn Văn Bính",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 4274,
			"name": "Nguyễn Văn Luông",
			"pre": "Đường"
		}, {
			"id": 5680,
			"name": "Nguyễn Văn Quỳ",
			"pre": "Đường"
		}, {
			"id": 10905,
			"name": "P",
			"pre": "Đường"
		}, {
			"id": 3505,
			"name": "Phạm Hữu Lầu",
			"pre": "Đường"
		}, {
			"id": 3586,
			"name": "Phạm Thái Bường",
			"pre": "Đường"
		}, {
			"id": 2664,
			"name": "Phạm Văn Nghị",
			"pre": "Đường"
		}, {
			"id": 2233,
			"name": "Phan Huy Thực.",
			"pre": "Đường"
		}, {
			"id": 6463,
			"name": "Phan Khiêm Ích",
			"pre": "Đường"
		}, {
			"id": 5693,
			"name": "Phú Thuận",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 597,
			"name": "Quốc lộ 71",
			"pre": "Đường"
		}, {
			"id": 7981,
			"name": "Tân An Huy",
			"pre": "Đường"
		}, {
			"id": 2968,
			"name": "Tân Mỹ",
			"pre": "Đường"
		}, {
			"id": 8676,
			"name": "Tân Phú",
			"pre": "Đường"
		}, {
			"id": 6989,
			"name": "Tân Quy",
			"pre": "Đường"
		}, {
			"id": 5714,
			"name": "Tân Quý",
			"pre": "Đường"
		}, {
			"id": 6813,
			"name": "Tân Quy Đông",
			"pre": "Đường"
		}, {
			"id": 6713,
			"name": "Tân Thuận Tây",
			"pre": "Đường"
		}, {
			"id": 2427,
			"name": "Tân Trào",
			"pre": "Đường"
		}, {
			"id": 7640,
			"name": "Tân Văn Khánh",
			"pre": "Đường"
		}, {
			"id": 7935,
			"name": "Thái Văn Bương",
			"pre": "Đường"
		}, {
			"id": 6502,
			"name": "Thới An 22",
			"pre": "Đường"
		}, {
			"id": 10859,
			"name": "Tiểu Nam",
			"pre": "Đường"
		}, {
			"id": 4625,
			"name": "Tỉnh lộ 15B",
			"pre": "Đường"
		}, {
			"id": 599,
			"name": "Tỉnh lộ 73",
			"pre": "Đường"
		}, {
			"id": 5784,
			"name": "Tôn Dật Tiên",
			"pre": "Đường"
		}, {
			"id": 5694,
			"name": "Trần Đức Lương",
			"pre": "Đường"
		}, {
			"id": 219,
			"name": "Trần Quốc Toản",
			"pre": "Đường"
		}, {
			"id": 5754,
			"name": "Trần Trọng Cung",
			"pre": "Đường"
		}, {
			"id": 6883,
			"name": "Trần Văn Khánh",
			"pre": "Đường"
		}, {
			"id": 2468,
			"name": "Trần Văn Trà",
			"pre": "Đường"
		}, {
			"id": 510,
			"name": "Trần Xuân Soạn",
			"pre": "Phố"
		}, {
			"id": 6758,
			"name": "Vườn Điều",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2157,
			"name": "An Gia Riverside",
			"lat": 10.714860916137695,
			"lng": 106.74143981933594,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2244,
			"name": "An Gia Skyline",
			"lat": 10.715290069580078,
			"lng": 106.7403564453125,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 1546,
			"name": "An Hòa - Nam Long",
			"lat": 10.741001129150391,
			"lng": 106.73278045654297,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1676,
			"name": "An Viên",
			"lat": 10.741514205932617,
			"lng": 106.73325347900391,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 320,
			"name": "Belleza Apartment",
			"lat": 10.706584930419922,
			"lng": 106.72768402099609,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1078,
			"name": "Biệt thự Chateau",
			"lat": 10.714929580688477,
			"lng": 106.72568511962891,
			"cats": [40, 48, 55, 325]
		}, {
			"id": 847,
			"name": "Bình An Apartment",
			"lat": 10.741367340087891,
			"lng": 106.70882415771484,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 90,
			"name": "Căn hộ Phú Mỹ Vạn Phát Hưng",
			"lat": 10.713397979736328,
			"lng": 106.73195648193359,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1646,
			"name": "Cảnh Viên 1",
			"lat": 10.72223949432373,
			"lng": 106.72968292236328,
			"cats": [40, 48, 59, 324, 326]
		}, {
			"id": 1648,
			"name": "Cảnh Viên 2",
			"lat": 10.722710609436035,
			"lng": 106.72817993164062,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 485,
			"name": "Cảnh Viên 3",
			"lat": 10.721760749816895,
			"lng": 106.72884368896484,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1326,
			"name": "CityLand Riverside",
			"lat": 10.737704277038574,
			"lng": 106.72602844238281,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 2490,
			"name": "Diamond City",
			"lat": 10.751041412353516,
			"lng": 106.72482299804687,
			"cats": []
		}, {
			"id": 1881,
			"name": "Docklands Sài Gòn",
			"lat": 10.735711097717285,
			"lng": 106.72557067871094,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 2472,
			"name": "Đức Long Golden Land",
			"lat": 10.756855964660645,
			"lng": 106.72222137451172,
			"cats": []
		}, {
			"id": 1320,
			"name": "Ehome 5-The Bridgeview",
			"lat": 10.743432998657227,
			"lng": 106.73622131347656,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2126,
			"name": "Florita Đức Khải",
			"lat": 10.744828224182129,
			"lng": 106.69515228271484,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1308,
			"name": "Garden Court 1",
			"lat": 10.722641944885254,
			"lng": 106.71482086181641,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1642,
			"name": "Garden Court 2",
			"lat": 10.723184585571289,
			"lng": 106.71578979492187,
			"cats": [55, 324, 326]
		}, {
			"id": 1310,
			"name": "Garden Plaza 1",
			"lat": 10.722661972045898,
			"lng": 106.71318054199219,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1783,
			"name": "Garden Plaza 2",
			"lat": 10.723395347595215,
			"lng": 106.71466064453125,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1117,
			"name": "Grand View",
			"lat": 10.721883773803711,
			"lng": 106.71209716796875,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1464,
			"name": "Green Valley",
			"lat": 10.733027458190918,
			"lng": 106.71590423583984,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1655,
			"name": "Green View",
			"lat": 10.722028732299805,
			"lng": 106.72663116455078,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2213,
			"name": "Happy Residence",
			"lat": 10.717362403869629,
			"lng": 106.72834014892578,
			"cats": [50, 55, 324, 326, 362]
		}, {
			"id": 1194,
			"name": "Happy Valley",
			"lat": 10.730194091796875,
			"lng": 106.713134765625,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1597,
			"name": "Hemera Building",
			"lat": 10.730772972106934,
			"lng": 106.73199462890625,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 493,
			"name": "Him Lam Kênh Tẻ",
			"lat": 10.74123477935791,
			"lng": 106.69842529296875,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 360,
			"name": "Him Lam Riverside",
			"lat": 10.743911743164063,
			"lng": 106.69530487060547,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 108,
			"name": "Hoàng Anh Gia Lai 1",
			"lat": 10.740623474121094,
			"lng": 106.70416259765625,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 109,
			"name": "Hoàng Anh Gia Lai 2",
			"lat": 10.751216888427734,
			"lng": 106.7017822265625,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1324,
			"name": "Hoàng Anh Thanh Bình",
			"lat": 10.745340347290039,
			"lng": 106.69947814941406,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1533,
			"name": "Hoàng Kim",
			"lat": 10.741436004638672,
			"lng": 106.72992706298828,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1681,
			"name": "Hưng Gia",
			"lat": 10.732464790344238,
			"lng": 106.70937347412109,
			"cats": [41, 50, 51, 52, 55, 59, 163, 325]
		}, {
			"id": 1309,
			"name": "Hưng Gia 3",
			"lat": 10.732464790344238,
			"lng": 106.70954132080078,
			"cats": [40, 41, 50, 51, 52, 55, 163]
		}, {
			"id": 2402,
			"name": "Hưng Phát Golden Star",
			"lat": 10.73830509185791,
			"lng": 106.72611999511719,
			"cats": []
		}, {
			"id": 1679,
			"name": "Hưng Phước",
			"lat": 10.72990608215332,
			"lng": 106.70790100097656,
			"cats": [41, 51, 52, 163, 283, 325]
		}, {
			"id": 1632,
			"name": "Hưng Thái 1 \u0026 2",
			"lat": 10.734411239624023,
			"lng": 106.70862579345703,
			"cats": [40, 52, 325]
		}, {
			"id": 1633,
			"name": "Hưng Vượng 1",
			"lat": 10.729572296142578,
			"lng": 106.70986938476562,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1635,
			"name": "Hưng Vượng 2",
			"lat": 10.730611801147461,
			"lng": 106.70964050292969,
			"cats": [55, 324, 326]
		}, {
			"id": 1637,
			"name": "Hưng Vượng 3",
			"lat": 10.729727745056152,
			"lng": 106.70899963378906,
			"cats": [55, 324, 326]
		}, {
			"id": 672,
			"name": "Incomex",
			"lat": 10.751443862915039,
			"lng": 106.70908355712891,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1028,
			"name": "Jamona City",
			"lat": 10.736345291137695,
			"lng": 106.73973846435547,
			"cats": [48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 2159,
			"name": "Jamona Golden Silk",
			"lat": 10.74995231628418,
			"lng": 106.73540496826172,
			"cats": [40, 48, 55, 324, 325, 326]
		}, {
			"id": 1174,
			"name": "KDC Phú Mỹ",
			"lat": 10.714698791503906,
			"lng": 106.73355865478516,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1669,
			"name": "Kim Sơn",
			"lat": 10.734874725341797,
			"lng": 106.70135498046875,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1045,
			"name": "La Casa",
			"lat": 10.714390754699707,
			"lng": 106.74217987060547,
			"cats": [40, 48, 50, 55, 59, 324, 326]
		}, {
			"id": 1909,
			"name": "Lam Thiên Lục Địa",
			"lat": 10.722814559936523,
			"lng": 106.71273803710937,
			"cats": [40, 52, 325]
		}, {
			"id": 2066,
			"name": "Lotus Residence",
			"lat": 10.716377258300781,
			"lng": 106.74079132080078,
			"cats": [40, 48, 52, 55, 59, 325]
		}, {
			"id": 2199,
			"name": "Luxcity",
			"lat": 10.738631248474121,
			"lng": 106.72940063476562,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 2347,
			"name": "Luxury Home",
			"lat": 10.73628044128418,
			"lng": 106.73976898193359,
			"cats": []
		}, {
			"id": 1382,
			"name": "Minh Thành",
			"lat": 10.744465827941895,
			"lng": 106.70449066162109,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2371,
			"name": "M-One Nam Sài Gòn",
			"lat": 10.751205444335938,
			"lng": 106.71007537841797,
			"cats": []
		}, {
			"id": 1905,
			"name": "Mỹ Cảnh",
			"lat": 10.7268705368042,
			"lng": 106.71382141113281,
			"cats": [55, 324, 326]
		}, {
			"id": 336,
			"name": "Mỹ Đức",
			"lat": 10.724942207336426,
			"lng": 106.70899200439453,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1694,
			"name": "Mỹ Gia 1",
			"lat": 10.7206392288208,
			"lng": 106.73181915283203,
			"cats": [41, 51, 52, 325]
		}, {
			"id": 1719,
			"name": "Mỹ Gia 2",
			"lat": 10.722556114196777,
			"lng": 106.730224609375,
			"cats": [40, 325]
		}, {
			"id": 1718,
			"name": "Mỹ Giang 1\u00262",
			"lat": 10.722883224487305,
			"lng": 106.71720886230469,
			"cats": [40, 51, 52, 325]
		}, {
			"id": 1652,
			"name": "Mỹ Hào",
			"lat": 10.726888656616211,
			"lng": 106.71505737304687,
			"cats": [40, 52, 325]
		}, {
			"id": 1768,
			"name": "Mỹ Hoàng",
			"lat": 10.727696418762207,
			"lng": 106.70973968505859,
			"cats": [40, 48, 52, 55, 59, 325]
		}, {
			"id": 1660,
			"name": "Mỹ Hưng",
			"lat": 10.728044509887695,
			"lng": 106.71294403076172,
			"cats": [51, 52, 325]
		}, {
			"id": 1641,
			"name": "Mỹ Khang",
			"lat": 10.715998649597168,
			"lng": 106.73012542724609,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1715,
			"name": "Mỹ Khánh 1",
			"lat": 10.727849006652832,
			"lng": 106.70902252197266,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1714,
			"name": "Mỹ Khánh 2",
			"lat": 10.727892875671387,
			"lng": 106.7083740234375,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1717,
			"name": "Mỹ Khánh 3",
			"lat": 10.726886749267578,
			"lng": 106.70827484130859,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1454,
			"name": "Mỹ Khánh 4",
			"lat": 10.726899147033691,
			"lng": 106.70903778076172,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1313,
			"name": "Mỹ Kim 1,2",
			"lat": 10.724832534790039,
			"lng": 106.70964813232422,
			"cats": [40, 52, 325]
		}, {
			"id": 1899,
			"name": "Mỹ Kim 3",
			"lat": 10.723878860473633,
			"lng": 106.71535491943359,
			"cats": [51, 52, 163, 325]
		}, {
			"id": 1630,
			"name": "Mỹ Phát",
			"lat": 10.724047660827637,
			"lng": 106.70913696289062,
			"cats": [55, 324, 326]
		}, {
			"id": 1697,
			"name": "Mỹ Phú 1",
			"lat": 10.717904090881348,
			"lng": 106.72719573974609,
			"cats": [40, 52, 325]
		}, {
			"id": 1698,
			"name": "Mỹ Phú 2",
			"lat": 10.717672348022461,
			"lng": 106.72721862792969,
			"cats": [40, 51, 52, 325]
		}, {
			"id": 1175,
			"name": "Mỹ Phú 3",
			"lat": 10.715778350830078,
			"lng": 106.72807312011719,
			"cats": [40, 44, 52, 325]
		}, {
			"id": 639,
			"name": "Mỹ Phú Apartment Petroland",
			"lat": 10.748022079467773,
			"lng": 106.71352386474609,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1611,
			"name": "Mỹ Phúc",
			"lat": 10.723380088806152,
			"lng": 106.70973205566406,
			"cats": [55, 324, 326]
		}, {
			"id": 1617,
			"name": "Mỹ Phước",
			"lat": 10.727827072143555,
			"lng": 106.71077728271484,
			"cats": [55, 324, 326]
		}, {
			"id": 1831,
			"name": "Mỹ Quang",
			"lat": 10.723925590515137,
			"lng": 106.71131896972656,
			"cats": [40, 325]
		}, {
			"id": 1667,
			"name": "Mỹ Thái 1",
			"lat": 10.71886157989502,
			"lng": 106.73143005371094,
			"cats": [40, 51, 52, 325]
		}, {
			"id": 1692,
			"name": "Mỹ Thái 2",
			"lat": 10.7214937210083,
			"lng": 106.72817230224609,
			"cats": [40, 52, 325]
		}, {
			"id": 1693,
			"name": "Mỹ Thái 3",
			"lat": 10.714923858642578,
			"lng": 106.72922515869141,
			"cats": [40, 52, 325]
		}, {
			"id": 1664,
			"name": "Mỹ Toàn 1",
			"lat": 10.727749824523926,
			"lng": 106.70594787597656,
			"cats": [48, 50, 51, 52, 55, 163, 325]
		}, {
			"id": 1311,
			"name": "Mỹ Toàn 2",
			"lat": 10.727668762207031,
			"lng": 106.70748901367188,
			"cats": [41, 48, 52, 55, 57, 325]
		}, {
			"id": 1858,
			"name": "Mỹ Toàn 3",
			"lat": 10.729408264160156,
			"lng": 106.70780944824219,
			"cats": [48, 50, 51, 55, 163]
		}, {
			"id": 1722,
			"name": "Mỹ Tú 1",
			"lat": 10.723573684692383,
			"lng": 106.71393585205078,
			"cats": [324, 325, 326]
		}, {
			"id": 1723,
			"name": "Mỹ Tú 2",
			"lat": 10.723214149475098,
			"lng": 106.71332550048828,
			"cats": [40, 325]
		}, {
			"id": 1810,
			"name": "Mỹ Tú 3",
			"lat": 10.722677230834961,
			"lng": 106.71216583251953,
			"cats": [40, 51, 52, 325]
		}, {
			"id": 1569,
			"name": "Mỹ Văn 1\u00262",
			"lat": 10.722471237182617,
			"lng": 106.72734832763672,
			"cats": [40, 52, 325]
		}, {
			"id": 1668,
			"name": "Mỹ Viên",
			"lat": 10.717802047729492,
			"lng": 106.72941589355469,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1784,
			"name": "Nam Đô Phú Mỹ Hưng",
			"lat": 10.721673965454102,
			"lng": 106.73124694824219,
			"cats": [40, 51, 52, 325]
		}, {
			"id": 1639,
			"name": "Nam Khang",
			"lat": 10.715161323547363,
			"lng": 106.72978210449219,
			"cats": [55, 324, 326]
		}, {
			"id": 1682,
			"name": "Nam Long 1",
			"lat": 10.726933479309082,
			"lng": 106.70944976806641,
			"cats": [51, 52, 55, 163, 325]
		}, {
			"id": 1663,
			"name": "Nam Long 2",
			"lat": 10.725917816162109,
			"lng": 106.70980072021484,
			"cats": [51, 52, 325]
		}, {
			"id": 1684,
			"name": "Nam Long 3",
			"lat": 10.726530075073242,
			"lng": 106.70967102050781,
			"cats": [51, 52, 55, 163, 325]
		}, {
			"id": 1877,
			"name": "Nam Long Phú Thuận",
			"lat": 10.730423927307129,
			"lng": 106.73532104492187,
			"cats": [40, 41, 51, 52, 163, 325]
		}, {
			"id": 1291,
			"name": "Nam Long Trần Trọng Cung",
			"lat": 10.743823051452637,
			"lng": 106.73310089111328,
			"cats": [41, 48, 51, 52, 55, 59, 163, 324, 325, 326]
		}, {
			"id": 1136,
			"name": "Nam Phu Villas",
			"lat": 10.744510650634766,
			"lng": 106.73680114746094,
			"cats": [40, 52, 325]
		}, {
			"id": 2501,
			"name": "Nam Phúc - Le Jardin",
			"lat": 10.723278045654297,
			"lng": 106.73001861572266,
			"cats": []
		}, {
			"id": 1670,
			"name": "Nam Quang",
			"lat": 10.723917007446289,
			"lng": 106.70973205566406,
			"cats": [40, 51, 52, 163, 325]
		}, {
			"id": 1751,
			"name": "Nam Quang 2",
			"lat": 10.723345756530762,
			"lng": 106.71132659912109,
			"cats": [40, 325]
		}, {
			"id": 1578,
			"name": "Nam Thiên 1,2,3",
			"lat": 10.726922988891602,
			"lng": 106.71109771728516,
			"cats": [40, 41, 52, 325]
		}, {
			"id": 1312,
			"name": "Nam Thông 1 - Phú Mỹ Hưng",
			"lat": 10.719794273376465,
			"lng": 106.73275756835937,
			"cats": [40, 52, 325]
		}, {
			"id": 1364,
			"name": "Nam Thông 2",
			"lat": 10.716694831848145,
			"lng": 106.73054504394531,
			"cats": [40, 52, 325]
		}, {
			"id": 1703,
			"name": "Nam Thông 3",
			"lat": 10.719520568847656,
			"lng": 106.73251342773438,
			"cats": [40, 325]
		}, {
			"id": 1120,
			"name": "Nam Thông-KDC Nam Long",
			"lat": 10.743593215942383,
			"lng": 106.73544311523437,
			"cats": [41, 48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1341,
			"name": "Nam Viên",
			"lat": 10.721550941467285,
			"lng": 106.72699737548828,
			"cats": [44, 48, 325]
		}, {
			"id": 598,
			"name": "Ngọc Lan Savimex",
			"lat": 10.732104301452637,
			"lng": 106.73751068115234,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1662,
			"name": "Park View",
			"lat": 10.725860595703125,
			"lng": 106.70876312255859,
			"cats": [55, 324, 326]
		}, {
			"id": 1163,
			"name": "PetroLand Tower",
			"lat": 10.729439735412598,
			"lng": 106.72329711914062,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 1720,
			"name": "Phú Gia",
			"lat": 10.725512504577637,
			"lng": 106.71377563476562,
			"cats": [40, 325]
		}, {
			"id": 1452,
			"name": "Phú Mỹ 2",
			"lat": 10.708225250244141,
			"lng": 106.73336791992187,
			"cats": [40, 48, 55, 59, 324, 326]
		}, {
			"id": 1895,
			"name": "Phú Mỹ An",
			"lat": 10.738979339599609,
			"lng": 106.72814178466797,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1894,
			"name": "Phú Mỹ Chợ Lớn",
			"lat": 10.706418991088867,
			"lng": 106.72917175292969,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 82,
			"name": "Phú Mỹ Hưng",
			"lat": 10.727806091308594,
			"lng": 106.71489715576172,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 472,
			"name": "Quốc Cường Gia Lai 1",
			"lat": 10.751481056213379,
			"lng": 106.70912933349609,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 949,
			"name": "Res III",
			"lat": 10.734942436218262,
			"lng": 106.71835327148437,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2422,
			"name": "River City",
			"lat": 10.73956298828125,
			"lng": 106.73869323730469,
			"cats": []
		}, {
			"id": 487,
			"name": "Riverpark Residence",
			"lat": 10.72612190246582,
			"lng": 106.70742034912109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 991,
			"name": "Riverside Residence",
			"lat": 10.719149589538574,
			"lng": 106.72641754150391,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 837,
			"name": "Riviera Point",
			"lat": 10.732545852661133,
			"lng": 106.72899627685547,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 619,
			"name": "Royal Tower",
			"lat": 10.725286483764648,
			"lng": 106.72633361816406,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1261,
			"name": "Sadeco ven sông",
			"lat": 10.726566314697266,
			"lng": 106.69413757324219,
			"cats": [40, 41, 52, 57, 325]
		}, {
			"id": 541,
			"name": "Sài Gòn Paragon",
			"lat": 10.729515075683594,
			"lng": 106.72190093994141,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 2164,
			"name": "Saigon Plaza Tower",
			"lat": 10.729743003845215,
			"lng": 106.73236083984375,
			"cats": [50, 57, 324, 326]
		}, {
			"id": 1809,
			"name": "Savimex Phú Thuận",
			"lat": 10.7280855178833,
			"lng": 106.73552703857422,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 538,
			"name": "SC VivoCity",
			"lat": 10.730116844177246,
			"lng": 106.7034912109375,
			"cats": [48, 55, 59]
		}, {
			"id": 1860,
			"name": "Scenic Valley",
			"lat": 10.730989456176758,
			"lng": 106.71733856201172,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2415,
			"name": "Scenic Valley 2",
			"lat": 10.731369018554688,
			"lng": 106.71810150146484,
			"cats": []
		}, {
			"id": 842,
			"name": "Seven Diamond",
			"lat": 10.74167537689209,
			"lng": 106.70803070068359,
			"cats": [44, 48, 55, 59, 325]
		}, {
			"id": 488,
			"name": "Sky Garden 3",
			"lat": 10.733366012573242,
			"lng": 106.70539093017578,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1340,
			"name": "Sky Garden I",
			"lat": 10.730779647827148,
			"lng": 106.70592498779297,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1342,
			"name": "Sky Garden II",
			"lat": 10.72920036315918,
			"lng": 106.70616912841797,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 712,
			"name": "Southern Palace",
			"lat": 10.734457015991211,
			"lng": 106.72267913818359,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 365,
			"name": "Star Hill",
			"lat": 10.728997230529785,
			"lng": 106.72576141357422,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 527,
			"name": "Sunrise City",
			"lat": 10.739171981811523,
			"lng": 106.70012664794922,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2136,
			"name": "Sunrise City View",
			"lat": 10.745414733886719,
			"lng": 106.70118713378906,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2245,
			"name": "Sunriver",
			"lat": 10.741206169128418,
			"lng": 106.705810546875,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 1724,
			"name": "Tân An Huy",
			"lat": 10.735085487365723,
			"lng": 106.70343780517578,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 1585,
			"name": "Tân Mỹ",
			"lat": 10.735304832458496,
			"lng": 106.71876525878906,
			"cats": [55, 324, 326]
		}, {
			"id": 1525,
			"name": "Tân Thành lập",
			"lat": 10.703401565551758,
			"lng": 106.72997283935547,
			"cats": [40, 55, 324, 325, 326]
		}, {
			"id": 1584,
			"name": "Tấn Trường",
			"lat": 10.73246955871582,
			"lng": 106.73853302001953,
			"cats": [40, 41, 325]
		}, {
			"id": 103,
			"name": "The Era Town",
			"lat": 10.699416160583496,
			"lng": 106.73012542724609,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 958,
			"name": "The EverRich III",
			"lat": 10.728132247924805,
			"lng": 106.72913360595703,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 705,
			"name": "The Mark",
			"lat": 10.735365867614746,
			"lng": 106.71587371826172,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 992,
			"name": "The Panorama",
			"lat": 10.721817970275879,
			"lng": 106.71401977539062,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1822,
			"name": "Thiên Phú Gia",
			"lat": 10.750263214111328,
			"lng": 106.70088195800781,
			"cats": [40, 52, 324, 325, 326]
		}, {
			"id": 622,
			"name": "Thiên Sơn Plaza",
			"lat": 10.731790542602539,
			"lng": 106.71922302246094,
			"cats": [41, 48, 55, 59, 163]
		}, {
			"id": 2423,
			"name": "Tulip Tower",
			"lat": 10.714390754699707,
			"lng": 106.73749542236328,
			"cats": []
		}, {
			"id": 1379,
			"name": "USilk Apartment",
			"lat": 10.741176605224609,
			"lng": 106.70559692382812,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 144,
			"name": "V-Star",
			"lat": 10.732625007629395,
			"lng": 106.73900604248047,
			"cats": [48, 55, 324, 326]
		}]
	}, {
		"id": 60,
		"name": "Quận 8",
		"pre": "",
		"ward": [{
			"id": 8780,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8790,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8791,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8792,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8793,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8794,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8795,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 8796,
			"name": "16",
			"pre": "Phường"
		}, {
			"id": 8781,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 8782,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8783,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8784,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8785,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8786,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8788,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8789,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 6383,
			"name": "1011",
			"pre": "Đường"
		}, {
			"id": 5850,
			"name": "102",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 7924,
			"name": "1107",
			"pre": "Đường"
		}, {
			"id": 10338,
			"name": "111",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 8197,
			"name": "172",
			"pre": "Đường"
		}, {
			"id": 4723,
			"name": "19/8",
			"pre": "Đường"
		}, {
			"id": 10965,
			"name": "192",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 8615,
			"name": "239",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 10726,
			"name": "270",
			"pre": "Đường"
		}, {
			"id": 10150,
			"name": "284",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4416,
			"name": "31",
			"pre": "Đường"
		}, {
			"id": 6424,
			"name": "318",
			"pre": "Đường"
		}, {
			"id": 8199,
			"name": "332",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 2885,
			"name": "42",
			"pre": "Đường"
		}, {
			"id": 3061,
			"name": "44",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 7925,
			"name": "715",
			"pre": "Đường"
		}, {
			"id": 2924,
			"name": "74",
			"pre": "Phố"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 8551,
			"name": "92",
			"pre": "Đường"
		}, {
			"id": 5844,
			"name": "9A",
			"pre": "Đường"
		}, {
			"id": 6000,
			"name": "An Dương Vương",
			"pre": "Đường"
		}, {
			"id": 6037,
			"name": "An Hải 4",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 6476,
			"name": "An Phú Tây",
			"pre": "Đường"
		}, {
			"id": 1209,
			"name": "Âu Dương Lân",
			"pre": "Đường"
		}, {
			"id": 1218,
			"name": "Ba Đình",
			"pre": "Đường"
		}, {
			"id": 6010,
			"name": "Ba Tơ",
			"pre": "Đường"
		}, {
			"id": 6398,
			"name": "Bàu Hạt 2",
			"pre": "Đường"
		}, {
			"id": 6475,
			"name": "Bàu Trảng 5",
			"pre": "Đường"
		}, {
			"id": 6286,
			"name": "Bến Bình Đăng",
			"pre": "Đường"
		}, {
			"id": 1251,
			"name": "Bến Bình Đông",
			"pre": "Đường"
		}, {
			"id": 1243,
			"name": "Bến Nguyễn Duy",
			"pre": "Đường"
		}, {
			"id": 5605,
			"name": "Bến Phú Định",
			"pre": "Đường"
		}, {
			"id": 5642,
			"name": "Bình Đông",
			"pre": "Đường"
		}, {
			"id": 6139,
			"name": "Bình Đức",
			"pre": "Đường"
		}, {
			"id": 5839,
			"name": "Bông Sao",
			"pre": "Đường"
		}, {
			"id": 1267,
			"name": "Bùi Huy Bích",
			"pre": "Đường"
		}, {
			"id": 1270,
			"name": "Bùi Minh Trực",
			"pre": "Đường"
		}, {
			"id": 3072,
			"name": "C2",
			"pre": "Đường"
		}, {
			"id": 5787,
			"name": "Cần Giuộc",
			"pre": "Đường"
		}, {
			"id": 711,
			"name": "Cao Lỗ",
			"pre": "Đường"
		}, {
			"id": 2005,
			"name": "Cao Xuân Dục",
			"pre": "Đường"
		}, {
			"id": 1278,
			"name": "Cây Sung",
			"pre": "Đường"
		}, {
			"id": 5256,
			"name": "Chánh Hưng",
			"pre": "Đường"
		}, {
			"id": 6579,
			"name": "Cù Lao Thượng",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 2599,
			"name": "D4",
			"pre": "Đường"
		}, {
			"id": 1214,
			"name": "Dạ Nam",
			"pre": "Đường"
		}, {
			"id": 98,
			"name": "Dã Tượng",
			"pre": "Đường"
		}, {
			"id": 5638,
			"name": "Đại Lộ Đông Tây",
			"pre": "Đường"
		}, {
			"id": 1213,
			"name": "Đặng Chất",
			"pre": "Đường"
		}, {
			"id": 2112,
			"name": "Đào Cam Mộc",
			"pre": "Đường"
		}, {
			"id": 6433,
			"name": "Đình An Tài",
			"pre": "Đường"
		}, {
			"id": 1260,
			"name": "Đinh Hòa",
			"pre": "Đường"
		}, {
			"id": 7812,
			"name": "Đồng Diều",
			"pre": "Đường"
		}, {
			"id": 1239,
			"name": "Đông Hồ",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 6580,
			"name": "ĐT 747",
			"pre": "Đường"
		}, {
			"id": 1203,
			"name": "Dương Bá Trạc",
			"pre": "Đường"
		}, {
			"id": 5618,
			"name": "Dương Đình Hội",
			"pre": "Đường"
		}, {
			"id": 5867,
			"name": "Dương Khả Trạc",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 3361,
			"name": "Hồ Biểu Chánh",
			"pre": "Đường"
		}, {
			"id": 1302,
			"name": "Hồ Học Lãm",
			"pre": "Đường"
		}, {
			"id": 1274,
			"name": "Hoài Thanh",
			"pre": "Đường"
		}, {
			"id": 311,
			"name": "Hoàng Đạo Thúy",
			"pre": "Phố"
		}, {
			"id": 1271,
			"name": "Hoàng Minh Đạo",
			"pre": "Đường"
		}, {
			"id": 1276,
			"name": "Hoàng Sĩ Khải",
			"pre": "Đường"
		}, {
			"id": 1113,
			"name": "Hưng Long",
			"pre": "Đường"
		}, {
			"id": 1220,
			"name": "Hưng Phú",
			"pre": "Đường"
		}, {
			"id": 1894,
			"name": "Huỳnh Bá Chánh",
			"pre": "Đường"
		}, {
			"id": 1229,
			"name": "Huỳnh Thị Phụng",
			"pre": "Đường"
		}, {
			"id": 6583,
			"name": "Khởi Nghĩa Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 1233,
			"name": "Lê Quang Kim",
			"pre": "Đường"
		}, {
			"id": 3605,
			"name": "Lê Thành Phương",
			"pre": "Đường"
		}, {
			"id": 6059,
			"name": "Liên Tỉnh 5",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 204,
			"name": "Lương Ngọc Quyến",
			"pre": "Đường"
		}, {
			"id": 339,
			"name": "Lương Văn Can",
			"pre": "Đường"
		}, {
			"id": 1284,
			"name": "Lưu Hữu Phước",
			"pre": "Đường"
		}, {
			"id": 1258,
			"name": "Lưu Quý Kỳ",
			"pre": "Đường"
		}, {
			"id": 118,
			"name": "Lý Đạo Thành",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 1265,
			"name": "Mạc Vân",
			"pre": "Đường"
		}, {
			"id": 7006,
			"name": "Mai Am",
			"pre": "Đường"
		}, {
			"id": 561,
			"name": "Mai Hắc Đế",
			"pre": "Phố"
		}, {
			"id": 6067,
			"name": "Mễ Cốc",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 1273,
			"name": "Ngô Sỹ Liên",
			"pre": "Phố"
		}, {
			"id": 121,
			"name": "Nguyễn Chế Nghĩa",
			"pre": "Đường"
		}, {
			"id": 4049,
			"name": "Nguyễn Duy",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 1288,
			"name": "Nguyễn Ngọc Cung",
			"pre": "Đường"
		}, {
			"id": 1316,
			"name": "Nguyễn Nhược Thi",
			"pre": "Đường"
		}, {
			"id": 538,
			"name": "Nguyễn Quyền",
			"pre": "Đường"
		}, {
			"id": 3725,
			"name": "Nguyễn Sỹ Cố",
			"pre": "Đường"
		}, {
			"id": 1206,
			"name": "Nguyễn Thị Tần",
			"pre": "Đường"
		}, {
			"id": 615,
			"name": "Nguyễn Thị Thập",
			"pre": "Đường"
		}, {
			"id": 1048,
			"name": "Nguyễn Trung Ngạn",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 1263,
			"name": "Nguyễn Văn Của",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 6794,
			"name": "P4",
			"pre": "Đường"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 1216,
			"name": "Phạm Thế Hiển",
			"pre": "Đường"
		}, {
			"id": 5716,
			"name": "Phong Phú",
			"pre": "Đường"
		}, {
			"id": 1224,
			"name": "Phú Định",
			"pre": "Đường"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 7648,
			"name": "Quốc Lộ 50",
			"pre": "Đường"
		}, {
			"id": 5843,
			"name": "Quy Đức",
			"pre": "Đường"
		}, {
			"id": 1296,
			"name": "Rạch Cát",
			"pre": "Đường"
		}, {
			"id": 6675,
			"name": "Rạch Năng",
			"pre": "Đường"
		}, {
			"id": 1200,
			"name": "Rạch Ông",
			"pre": "Đường"
		}, {
			"id": 498,
			"name": "Tạ Quang Bửu",
			"pre": "Phố"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6584,
			"name": "Tân Chánh Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 218,
			"name": "Trần Nguyên Hãn",
			"pre": "Phố"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 4430,
			"name": "Trần Văn Thành",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 1298,
			"name": "Trịnh Quang Nghị",
			"pre": "Đường"
		}, {
			"id": 1305,
			"name": "Trương Đình Hội",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 4082,
			"name": "Tùng Thiện Vương",
			"pre": "Đường"
		}, {
			"id": 1264,
			"name": "Tuy Lý Vương",
			"pre": "Đường"
		}, {
			"id": 9300,
			"name": "Ụ Cây",
			"pre": "Đường"
		}, {
			"id": 6397,
			"name": "Ưu Long",
			"pre": "Đường"
		}, {
			"id": 8092,
			"name": "Vành Đai 2",
			"pre": "Đường"
		}, {
			"id": 1253,
			"name": "Vĩnh Nam",
			"pre": "Đường"
		}, {
			"id": 1235,
			"name": "Võ Trứ",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}, {
			"id": 1247,
			"name": "Xóm Củi",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1948,
			"name": "51 Chánh Hưng",
			"lat": 10.738349914550781,
			"lng": 106.66819763183594,
			"cats": [55, 324, 326]
		}, {
			"id": 2307,
			"name": "Auris City",
			"lat": 10.726998329162598,
			"lng": 106.62299346923828,
			"cats": []
		}, {
			"id": 1040,
			"name": "Bella Vista",
			"lat": 10.744780540466309,
			"lng": 106.66519165039062,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1966,
			"name": "Bình Đăng",
			"lat": 10.733424186706543,
			"lng": 106.65528869628906,
			"cats": [41, 55, 163, 324, 326]
		}, {
			"id": 2085,
			"name": "Bình Đông Xanh",
			"lat": 10.745994567871094,
			"lng": 106.65669250488281,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1374,
			"name": "Bông Sao",
			"lat": 10.73680305480957,
			"lng": 106.66087341308594,
			"cats": [55, 324, 326]
		}, {
			"id": 2258,
			"name": "Cara Riverview",
			"lat": 10.720841407775879,
			"lng": 106.61875152587891,
			"cats": []
		}, {
			"id": 473,
			"name": "Carina Plaza",
			"lat": 10.729211807250977,
			"lng": 106.62342071533203,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2062,
			"name": "Chánh Hưng Apartment",
			"lat": 10.73686408996582,
			"lng": 106.66070556640625,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 106,
			"name": "Chánh Hưng Giai Việt",
			"lat": 10.736420631408691,
			"lng": 106.66817474365234,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1902,
			"name": "Chung cư Mỹ Thuận",
			"lat": 10.731193542480469,
			"lng": 106.62295532226562,
			"cats": [55, 324, 326]
		}, {
			"id": 339,
			"name": "Chung cư Thanh Nhựt",
			"lat": 10.706722259521484,
			"lng": 106.62332153320312,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 470,
			"name": "City Gate Towers",
			"lat": 10.727749824523926,
			"lng": 106.62387084960937,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 788,
			"name": "City Gate Towers 2",
			"lat": 10.729846954345703,
			"lng": 106.62406921386719,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2036,
			"name": "City Mall",
			"lat": 10.697193145751953,
			"lng": 106.607666015625,
			"cats": [40, 48, 51, 53, 55, 59, 163, 325]
		}, {
			"id": 1538,
			"name": "Conic Lộc Phát",
			"lat": 10.722766876220703,
			"lng": 106.63654327392578,
			"cats": [48, 51, 55, 59, 163, 325]
		}, {
			"id": 2231,
			"name": "Diamond Lotus",
			"lat": 10.745689392089844,
			"lng": 106.6737060546875,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 1592,
			"name": "Đồng Diều",
			"lat": 10.738950729370117,
			"lng": 106.67727661132812,
			"cats": [55, 324, 326]
		}, {
			"id": 2325,
			"name": "Dream Home Palace",
			"lat": 10.705910682678223,
			"lng": 106.62441253662109,
			"cats": []
		}, {
			"id": 1197,
			"name": "Good House Apartment",
			"lat": 10.718138694763184,
			"lng": 106.62168121337891,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2512,
			"name": "Harbor City",
			"lat": 10.710288047790527,
			"lng": 106.611083984375,
			"cats": []
		}, {
			"id": 2497,
			"name": "Heaven Riverview",
			"lat": 10.755528450012207,
			"lng": 106.65758514404297,
			"cats": []
		}, {
			"id": 86,
			"name": "Him Lam Nam Khánh",
			"lat": 10.734689712524414,
			"lng": 106.66825866699219,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1319,
			"name": "HQC Plaza",
			"lat": 10.694282531738281,
			"lng": 106.60797882080078,
			"cats": [55, 324, 326]
		}, {
			"id": 1995,
			"name": "KDC Chợ Bình Điền",
			"lat": 10.697911262512207,
			"lng": 106.6116943359375,
			"cats": [48, 52, 55, 324, 325, 326]
		}, {
			"id": 1529,
			"name": "Khang Gia",
			"lat": 10.740729331970215,
			"lng": 106.66923522949219,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2342,
			"name": "Nam Phát Riverside",
			"lat": 10.69927978515625,
			"lng": 106.62261199951172,
			"cats": []
		}, {
			"id": 789,
			"name": "NBB Garden III",
			"lat": 10.71540355682373,
			"lng": 106.62250518798828,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 119,
			"name": "Ngọc Phương Nam",
			"lat": 10.743633270263672,
			"lng": 106.68511199951172,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1264,
			"name": "Osaka Garden",
			"lat": 10.699507713317871,
			"lng": 106.62257385253906,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 2052,
			"name": "Peridot Building",
			"lat": 10.731771469116211,
			"lng": 106.622802734375,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 455,
			"name": "Phú Lợi",
			"lat": 10.7027587890625,
			"lng": 106.62162780761719,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1205,
			"name": "Phú Thịnh Riverside",
			"lat": 10.702631950378418,
			"lng": 106.61897277832031,
			"cats": [40, 41, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 1832,
			"name": "Rạch Lào",
			"lat": 10.731200218200684,
			"lng": 106.63472747802734,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1033,
			"name": "RCL Bình Đông",
			"lat": 10.749927520751953,
			"lng": 106.66559600830078,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1032,
			"name": "RCL Tạ Quang Bửu",
			"lat": 10.734902381896973,
			"lng": 106.66755676269531,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1659,
			"name": "Samland Giai Việt",
			"lat": 10.737387657165527,
			"lng": 106.67010498046875,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1557,
			"name": "Sao Mai",
			"lat": 10.725149154663086,
			"lng": 106.62618255615234,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 846,
			"name": "Sovrano Plaza",
			"lat": 10.698369026184082,
			"lng": 106.62442016601562,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2318,
			"name": "The Avila",
			"lat": 10.72115421295166,
			"lng": 106.61985778808594,
			"cats": []
		}, {
			"id": 1391,
			"name": "The Sun City Ba Tơ",
			"lat": 10.704745292663574,
			"lng": 106.62694549560547,
			"cats": [40, 41, 52, 53, 325]
		}, {
			"id": 611,
			"name": "Topaz City",
			"lat": 10.739453315734863,
			"lng": 106.67981719970703,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1317,
			"name": "Trương Đình Hội 2",
			"lat": 10.721086502075195,
			"lng": 106.62126922607422,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2093,
			"name": "Trương Đình Hội 3",
			"lat": 10.720627784729004,
			"lng": 106.62493896484375,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 2079,
			"name": "VHome",
			"lat": 10.7205171585083,
			"lng": 106.62300872802734,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 61,
		"name": "Quận 9",
		"pre": "",
		"ward": [{
			"id": 5848,
			"name": "Hiệp Phú",
			"pre": "Phường"
		}, {
			"id": 5850,
			"name": "Long Bình",
			"pre": "Phường"
		}, {
			"id": 5852,
			"name": "Long Phước",
			"pre": "Phường"
		}, {
			"id": 5849,
			"name": "Long Thạnh Mỹ",
			"pre": "Phường"
		}, {
			"id": 5842,
			"name": "Long Trường",
			"pre": "Phường"
		}, {
			"id": 5853,
			"name": "Phú Hữu",
			"pre": "Phường"
		}, {
			"id": 5845,
			"name": "Phước Bình",
			"pre": "Phường"
		}, {
			"id": 5837,
			"name": "Phước Long A",
			"pre": "Phường"
		}, {
			"id": 5838,
			"name": "Phước Long B",
			"pre": "Phường"
		}, {
			"id": 5846,
			"name": "Tân Phú",
			"pre": "Phường"
		}, {
			"id": 5840,
			"name": "Tăng Nhơn Phú A",
			"pre": "Phường"
		}, {
			"id": 5841,
			"name": "Tăng Nhơn Phú B",
			"pre": "Phường"
		}, {
			"id": 5844,
			"name": "Trường Thạnh",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 7344,
			"name": "100A",
			"pre": "Đường"
		}, {
			"id": 5850,
			"name": "102",
			"pre": "Đường"
		}, {
			"id": 9087,
			"name": "104",
			"pre": "Đường"
		}, {
			"id": 8460,
			"name": "106",
			"pre": "Đường"
		}, {
			"id": 6575,
			"name": "109",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 7314,
			"name": "120",
			"pre": "Đường"
		}, {
			"id": 8896,
			"name": "128",
			"pre": "Đường"
		}, {
			"id": 7381,
			"name": "129",
			"pre": "Đường"
		}, {
			"id": 4167,
			"name": "12A",
			"pre": "Đường"
		}, {
			"id": 4168,
			"name": "12C",
			"pre": "Đường"
		}, {
			"id": 7766,
			"name": "12E",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 8033,
			"name": "132",
			"pre": "Đường"
		}, {
			"id": 7083,
			"name": "138",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 10684,
			"name": "141",
			"pre": "Đường"
		}, {
			"id": 8597,
			"name": "144",
			"pre": "Đường"
		}, {
			"id": 8237,
			"name": "145",
			"pre": "Đường"
		}, {
			"id": 6405,
			"name": "147",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 7236,
			"name": "154",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 5717,
			"name": "160",
			"pre": "Đường"
		}, {
			"id": 7233,
			"name": "168",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 10381,
			"name": "175",
			"pre": "Đường"
		}, {
			"id": 4931,
			"name": "176",
			"pre": "Đường"
		}, {
			"id": 8675,
			"name": "179",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 3591,
			"name": "182",
			"pre": "Đường"
		}, {
			"id": 4915,
			"name": "185",
			"pre": "Đường"
		}, {
			"id": 2852,
			"name": "18A",
			"pre": "Đường"
		}, {
			"id": 7111,
			"name": "18B",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 9712,
			"name": "197",
			"pre": "Đường"
		}, {
			"id": 7317,
			"name": "198",
			"pre": "Đường"
		}, {
			"id": 7755,
			"name": "1A",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 7914,
			"name": "207",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 8006,
			"name": "210",
			"pre": "Đường"
		}, {
			"id": 10241,
			"name": "211",
			"pre": "Đường"
		}, {
			"id": 7361,
			"name": "212",
			"pre": "Đường"
		}, {
			"id": 8579,
			"name": "215",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 7112,
			"name": "236",
			"pre": "Đường"
		}, {
			"id": 8615,
			"name": "239",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 8962,
			"name": "244",
			"pre": "Đường"
		}, {
			"id": 9219,
			"name": "245",
			"pre": "Đường"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 8447,
			"name": "265",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 6231,
			"name": "275",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 8102,
			"name": "295",
			"pre": "Đường"
		}, {
			"id": 6229,
			"name": "297",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4416,
			"name": "31",
			"pre": "Đường"
		}, {
			"id": 9800,
			"name": "311",
			"pre": "Đường"
		}, {
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 5809,
			"name": "339",
			"pre": "Đường"
		}, {
			"id": 6346,
			"name": "35",
			"pre": "Đường"
		}, {
			"id": 7861,
			"name": "359",
			"pre": "Đường"
		}, {
			"id": 10451,
			"name": "360",
			"pre": "Đường"
		}, {
			"id": 6804,
			"name": "379",
			"pre": "Đường"
		}, {
			"id": 6158,
			"name": "385",
			"pre": "Đường"
		}, {
			"id": 2520,
			"name": "39",
			"pre": "Đường"
		}, {
			"id": 10919,
			"name": "397",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 10205,
			"name": "400",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 6282,
			"name": "441",
			"pre": "Đường"
		}, {
			"id": 6115,
			"name": "442",
			"pre": "Đường"
		}, {
			"id": 6842,
			"name": "447",
			"pre": "Đường"
		}, {
			"id": 8091,
			"name": "449",
			"pre": "Đường"
		}, {
			"id": 7255,
			"name": "455",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 5819,
			"name": "475",
			"pre": "Đường"
		}, {
			"id": 2894,
			"name": "48",
			"pre": "Đường"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 2665,
			"name": "494",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 2898,
			"name": "52",
			"pre": "Phố"
		}, {
			"id": 8873,
			"name": "539",
			"pre": "Đường"
		}, {
			"id": 7153,
			"name": "546",
			"pre": "Đường"
		}, {
			"id": 2906,
			"name": "58",
			"pre": "Đường"
		}, {
			"id": 7050,
			"name": "588",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 4407,
			"name": "60",
			"pre": "Đường"
		}, {
			"id": 2252,
			"name": "61",
			"pre": "Đường"
		}, {
			"id": 2915,
			"name": "65",
			"pre": "Phố"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 8569,
			"name": "671",
			"pre": "Đường"
		}, {
			"id": 8183,
			"name": "672",
			"pre": "Đường"
		}, {
			"id": 2918,
			"name": "68",
			"pre": "Đường"
		}, {
			"id": 10884,
			"name": "680",
			"pre": "Đường"
		}, {
			"id": 2451,
			"name": "6A",
			"pre": "Đường"
		}, {
			"id": 6421,
			"name": "6B",
			"pre": "Đường"
		}, {
			"id": 7185,
			"name": "6C",
			"pre": "Đường"
		}, {
			"id": 7651,
			"name": "6D",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 8680,
			"name": "73",
			"pre": "Đường"
		}, {
			"id": 2924,
			"name": "74",
			"pre": "Phố"
		}, {
			"id": 4294,
			"name": "77",
			"pre": "Đường"
		}, {
			"id": 4295,
			"name": "79",
			"pre": "Đường"
		}, {
			"id": 8220,
			"name": "7A",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 7217,
			"name": "816",
			"pre": "Đường"
		}, {
			"id": 10344,
			"name": "835",
			"pre": "Đường"
		}, {
			"id": 7949,
			"name": "836",
			"pre": "Đường"
		}, {
			"id": 8349,
			"name": "882",
			"pre": "Đường"
		}, {
			"id": 8998,
			"name": "89",
			"pre": "Đường"
		}, {
			"id": 8802,
			"name": "898",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 7055,
			"name": "904",
			"pre": "Đường"
		}, {
			"id": 7074,
			"name": "94",
			"pre": "Đường"
		}, {
			"id": 7103,
			"name": "96",
			"pre": "Đường"
		}, {
			"id": 9123,
			"name": "963",
			"pre": "Đường"
		}, {
			"id": 8112,
			"name": "970",
			"pre": "Đường"
		}, {
			"id": 7989,
			"name": "98",
			"pre": "Đường"
		}, {
			"id": 10260,
			"name": "980",
			"pre": "Đường"
		}, {
			"id": 7346,
			"name": "99",
			"pre": "Đường"
		}, {
			"id": 7033,
			"name": "990",
			"pre": "Đường"
		}, {
			"id": 5844,
			"name": "9A",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 8566,
			"name": "Bắc Rạch Chiếc",
			"pre": "Đường"
		}, {
			"id": 6066,
			"name": "Bàu Cát",
			"pre": "Đường"
		}, {
			"id": 309,
			"name": "Bùi Xương Trạch",
			"pre": "Đường"
		}, {
			"id": 1418,
			"name": "Bưng Ông Thoàn",
			"pre": "Đường"
		}, {
			"id": 4684,
			"name": "Cầu Đình",
			"pre": "Đường"
		}, {
			"id": 6744,
			"name": "Cầu Xây",
			"pre": "Đường"
		}, {
			"id": 6731,
			"name": "Cầu Xây 1",
			"pre": "Đường"
		}, {
			"id": 6923,
			"name": "Cầu Xây 2",
			"pre": "Đường"
		}, {
			"id": 802,
			"name": "Chu Văn An",
			"pre": "Đường"
		}, {
			"id": 6579,
			"name": "Cù Lao Thượng",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 3222,
			"name": "D11",
			"pre": "Đường"
		}, {
			"id": 3221,
			"name": "D13",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 3223,
			"name": "D16",
			"pre": "Đường"
		}, {
			"id": 8996,
			"name": "D17",
			"pre": "Đường"
		}, {
			"id": 4601,
			"name": "D2",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 2599,
			"name": "D4",
			"pre": "Đường"
		}, {
			"id": 2600,
			"name": "D5",
			"pre": "Đường"
		}, {
			"id": 8159,
			"name": "D6",
			"pre": "Đường"
		}, {
			"id": 6799,
			"name": "D7",
			"pre": "Đường"
		}, {
			"id": 1775,
			"name": "D8",
			"pre": "Đường"
		}, {
			"id": 5889,
			"name": "D9",
			"pre": "Đường"
		}, {
			"id": 8385,
			"name": "Đại lộ 2",
			"pre": "Đường"
		}, {
			"id": 8450,
			"name": "Đại lộ 3",
			"pre": "Đường"
		}, {
			"id": 8878,
			"name": "Đại lộ 61",
			"pre": "Đường"
		}, {
			"id": 5638,
			"name": "Đại Lộ Đông Tây",
			"pre": "Đường"
		}, {
			"id": 2944,
			"name": "Dân Chủ",
			"pre": "Đường"
		}, {
			"id": 1405,
			"name": "Đặng Nghiêm",
			"pre": "Đường"
		}, {
			"id": 6740,
			"name": "Đinh Củng Viên",
			"pre": "Đường"
		}, {
			"id": 7305,
			"name": "Đình Phong Phú",
			"pre": "Đường"
		}, {
			"id": 10389,
			"name": "Đỗ Thế Diên",
			"pre": "Đường"
		}, {
			"id": 1416,
			"name": "Đỗ Xuân Hợp",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 6580,
			"name": "ĐT 747",
			"pre": "Đường"
		}, {
			"id": 5618,
			"name": "Dương Đình Hội",
			"pre": "Đường"
		}, {
			"id": 1413,
			"name": "Gò Cát",
			"pre": "Đường"
		}, {
			"id": 1197,
			"name": "Gò Công",
			"pre": "Đường"
		}, {
			"id": 1415,
			"name": "Gò Đồi",
			"pre": "Đường"
		}, {
			"id": 5685,
			"name": "Gò Lu",
			"pre": "Đường"
		}, {
			"id": 102,
			"name": "Hai Bà Trưng",
			"pre": "Phố"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 199,
			"name": "Hàng Tre",
			"pre": "Phố"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 1424,
			"name": "Hi - Tech Park",
			"pre": "Đường"
		}, {
			"id": 3246,
			"name": "Hiền Vương",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 6576,
			"name": "Hiệp Thành 18",
			"pre": "Đường"
		}, {
			"id": 5559,
			"name": "Hồ Bá Phấn",
			"pre": "Đường"
		}, {
			"id": 3361,
			"name": "Hồ Biểu Chánh",
			"pre": "Đường"
		}, {
			"id": 6484,
			"name": "Hồ Ngọc Lãm",
			"pre": "Đường"
		}, {
			"id": 1398,
			"name": "Hoàng Hữu Nam",
			"pre": "Đường"
		}, {
			"id": 8517,
			"name": "Hồng Sến",
			"pre": "Đường"
		}, {
			"id": 6491,
			"name": "Huy Cận",
			"pre": "Đường"
		}, {
			"id": 78,
			"name": "Huỳnh Thúc Kháng",
			"pre": "Đường"
		}, {
			"id": 1422,
			"name": "Ích Thạnh",
			"pre": "Đường"
		}, {
			"id": 6583,
			"name": "Khởi Nghĩa Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 3583,
			"name": "Khổng Tử",
			"pre": "Đường"
		}, {
			"id": 7385,
			"name": "Khổng Tử",
			"pre": "Đường"
		}, {
			"id": 5686,
			"name": "Lã Xuân Oai",
			"pre": "Đường"
		}, {
			"id": 1399,
			"name": "Lâm Viên",
			"pre": "Đường"
		}, {
			"id": 5834,
			"name": "Làng Tăng Phú",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 895,
			"name": "Lê Thánh Tôn",
			"pre": "Đường"
		}, {
			"id": 5923,
			"name": "Lê Văn Thứ",
			"pre": "Đường"
		}, {
			"id": 1423,
			"name": "Lê Văn Việt",
			"pre": "Đường"
		}, {
			"id": 1421,
			"name": "Lê Xuân Oai",
			"pre": "Đường"
		}, {
			"id": 6114,
			"name": "Liên Phường",
			"pre": "Đường"
		}, {
			"id": 1420,
			"name": "Lò Lu",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 1408,
			"name": "Long Phước",
			"pre": "Đường"
		}, {
			"id": 1401,
			"name": "Long Sơn",
			"pre": "Đường"
		}, {
			"id": 1412,
			"name": "Long Thành - Dầu Giây",
			"pre": "Đường"
		}, {
			"id": 1409,
			"name": "Long Thuận",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 237,
			"name": "Lý Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 897,
			"name": "Mã Lò",
			"pre": "Đường"
		}, {
			"id": 1400,
			"name": "Mạc Hiền Tích",
			"pre": "Đường"
		}, {
			"id": 5950,
			"name": "Man Thiện",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 3599,
			"name": "N1",
			"pre": "Đường"
		}, {
			"id": 7258,
			"name": "N7",
			"pre": "Đường"
		}, {
			"id": 722,
			"name": "Nam Cao",
			"pre": "Phố"
		}, {
			"id": 1760,
			"name": "Nam Hòa",
			"pre": "Phố"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 517,
			"name": "Nguyễn Công Trứ",
			"pre": "Đường"
		}, {
			"id": 3348,
			"name": "Nguyễn Đình Thi",
			"pre": "Đường"
		}, {
			"id": 449,
			"name": "Nguyễn Duy Trinh",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 5560,
			"name": "Nguyễn Thị Sóc",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 1407,
			"name": "Nguyễn Văn Tăng",
			"pre": "Đường"
		}, {
			"id": 1406,
			"name": "Nguyễn Văn Thành",
			"pre": "Đường"
		}, {
			"id": 316,
			"name": "Nguyễn Xiển",
			"pre": "Đường"
		}, {
			"id": 1397,
			"name": "Nguyễn Xiểu",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 751,
			"name": "Phạm Hồng Thái",
			"pre": "Đường"
		}, {
			"id": 10184,
			"name": "Phạm Trọng Cầu",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 1404,
			"name": "Phan Đặng Đức",
			"pre": "Đường"
		}, {
			"id": 7316,
			"name": "Phan Đạt Đức",
			"pre": "Đường"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 5716,
			"name": "Phong Phú",
			"pre": "Đường"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 7791,
			"name": "Phước Bình",
			"pre": "Đường"
		}, {
			"id": 5138,
			"name": "Phước Hậu",
			"pre": "Đường"
		}, {
			"id": 5558,
			"name": "Phước Thiện",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 5438,
			"name": "Quốc lộ 106",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 5849,
			"name": "Tam Đa",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6584,
			"name": "Tân Chánh Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 4258,
			"name": "Tân Hóa",
			"pre": "Đường"
		}, {
			"id": 6816,
			"name": "Tân Hòa",
			"pre": "Đường"
		}, {
			"id": 7009,
			"name": "Tân Hòa 2",
			"pre": "Đường"
		}, {
			"id": 5845,
			"name": "Tân Lập 1",
			"pre": "Đường"
		}, {
			"id": 6895,
			"name": "Tân Lập 2",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 6409,
			"name": "Tăng Nhơn Phú",
			"pre": "Đường"
		}, {
			"id": 5906,
			"name": "Tây Hòa",
			"pre": "Đường"
		}, {
			"id": 7825,
			"name": "Tây Hòa 2",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 6745,
			"name": "Thủy Lợi",
			"pre": "Đường"
		}, {
			"id": 742,
			"name": "Tỉnh lộ 179",
			"pre": "Đường"
		}, {
			"id": 7062,
			"name": "Tỉnh lộ 359",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 4528,
			"name": "Trần Kế Xương",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 138,
			"name": "Trần Quang Khải",
			"pre": "Đường"
		}, {
			"id": 1402,
			"name": "Trần Trọng Khiêm",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 390,
			"name": "Trịnh Hoài Đức",
			"pre": "Đường"
		}, {
			"id": 1410,
			"name": "Trường Khánh",
			"pre": "Đường"
		}, {
			"id": 1425,
			"name": "Trường Lưu",
			"pre": "Đường"
		}, {
			"id": 1411,
			"name": "Trường Thạnh",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 5940,
			"name": "Trương Văn Hải",
			"pre": "Đường"
		}, {
			"id": 5922,
			"name": "Trương Văn Thành",
			"pre": "Đường"
		}, {
			"id": 1972,
			"name": "Tự Do",
			"pre": "Đường"
		}, {
			"id": 1534,
			"name": "Tú Xương",
			"pre": "Đường"
		}, {
			"id": 10784,
			"name": "Út Trà Ôn",
			"pre": "Đường"
		}, {
			"id": 8092,
			"name": "Vành Đai 2",
			"pre": "Đường"
		}, {
			"id": 8005,
			"name": "Vành Đai 3",
			"pre": "Đường"
		}, {
			"id": 6331,
			"name": "Vành Đai Đông",
			"pre": "Đường"
		}, {
			"id": 1417,
			"name": "Vành Đai Trong",
			"pre": "Đường"
		}, {
			"id": 6577,
			"name": "Võ Quảng",
			"pre": "Đường"
		}, {
			"id": 1419,
			"name": "Võ Văn Hát",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}, {
			"id": 5820,
			"name": "Xa Lộ Hà Nội",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2377,
			"name": "9 View Apartment",
			"lat": 10.829195976257324,
			"lng": 106.77359008789063,
			"cats": []
		}, {
			"id": 130,
			"name": "Bắc Rạch Chiếc",
			"lat": 10.813199996948242,
			"lng": 106.76558685302734,
			"cats": [41, 48, 52, 55, 59, 283, 324, 325, 326]
		}, {
			"id": 2001,
			"name": "Bách khoa",
			"lat": 10.791261672973633,
			"lng": 106.79693603515625,
			"cats": [40, 52, 53, 325]
		}, {
			"id": 2368,
			"name": "Biệt thự Cielo Island",
			"lat": 10.793597221374512,
			"lng": 106.78208923339844,
			"cats": []
		}, {
			"id": 1371,
			"name": "Bình Minh",
			"lat": 10.84494686126709,
			"lng": 106.77276611328125,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 891,
			"name": "Centermark",
			"lat": 10.789060592651367,
			"lng": 106.80014038085937,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 647,
			"name": "Điền Phúc Thành",
			"lat": 10.808594703674316,
			"lng": 106.78546905517578,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 989,
			"name": "Đông Tăng Long",
			"lat": 10.809152603149414,
			"lng": 106.82122802734375,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1329,
			"name": "Ehome 2",
			"lat": 10.810630798339844,
			"lng": 106.78650665283203,
			"cats": [55, 324, 326]
		}, {
			"id": 102,
			"name": "EHome Đông Sài Gòn 1",
			"lat": 10.820073127746582,
			"lng": 106.77940368652344,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1044,
			"name": "Exim Garden",
			"lat": 10.809194564819336,
			"lng": 106.80206298828125,
			"cats": [40, 48, 55, 324, 325, 326]
		}, {
			"id": 1998,
			"name": "First Home Khang Việt",
			"lat": 10.80457878112793,
			"lng": 106.79141235351563,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2092,
			"name": "Flora Anh Đào",
			"lat": 10.807303428649902,
			"lng": 106.7777099609375,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 105,
			"name": "Gia Hòa",
			"lat": 10.817047119140625,
			"lng": 106.77870941162109,
			"cats": [40, 41, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 2064,
			"name": "Golf Park",
			"lat": 10.866006851196289,
			"lng": 106.81510925292969,
			"cats": [40, 44, 52, 59, 325]
		}, {
			"id": 895,
			"name": "Green Building",
			"lat": 10.827895164489746,
			"lng": 106.76384735107422,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2203,
			"name": "Green Home Riverside",
			"lat": 10.795251846313477,
			"lng": 106.81333923339844,
			"cats": [40, 41, 48, 50, 51, 52, 55, 57, 59, 163, 283, 324, 325, 326]
		}, {
			"id": 1580,
			"name": "Hoàng Anh Minh Tuấn",
			"lat": 10.801095962524414,
			"lng": 106.77999114990234,
			"cats": [40, 41, 48, 51, 52, 55, 59, 163, 325]
		}, {
			"id": 1035,
			"name": "Hoja Villa",
			"lat": 10.817252159118652,
			"lng": 106.78575134277344,
			"cats": [40, 325]
		}, {
			"id": 2406,
			"name": "HTReal 898",
			"lat": 10.788628578186035,
			"lng": 106.79831695556641,
			"cats": []
		}, {
			"id": 1354,
			"name": "Hưng Phú 1",
			"lat": 10.810185432434082,
			"lng": 106.78964996337891,
			"cats": [40, 41, 52, 324, 325, 326]
		}, {
			"id": 1353,
			"name": "Hưng Phú 2",
			"lat": 10.810669898986816,
			"lng": 106.78900146484375,
			"cats": [40, 41, 52, 324, 325, 326]
		}, {
			"id": 648,
			"name": "Hùng Việt",
			"lat": 10.797760009765625,
			"lng": 106.79106903076172,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2458,
			"name": "I-Home Xa Lộ Hà Nội",
			"lat": 10.832167625427246,
			"lng": 106.76616668701172,
			"cats": []
		}, {
			"id": 1588,
			"name": "KDC C.T.C",
			"lat": 10.79722785949707,
			"lng": 106.82037353515625,
			"cats": [40, 55, 324, 325, 326]
		}, {
			"id": 2308,
			"name": "KDC Chợ Long Trường Mới",
			"lat": 10.806194305419922,
			"lng": 106.82228088378906,
			"cats": []
		}, {
			"id": 1352,
			"name": "KDC Kiến Á",
			"lat": 10.80609130859375,
			"lng": 106.78285217285156,
			"cats": [40, 41, 52, 325]
		}, {
			"id": 1350,
			"name": "KDC Mỹ Long",
			"lat": 10.841936111450195,
			"lng": 106.830810546875,
			"cats": [40, 48, 55, 59, 325]
		}, {
			"id": 120,
			"name": "KDC Nam Long",
			"lat": 10.80924129486084,
			"lng": 106.78060150146484,
			"cats": [40, 48, 55, 324, 325, 326]
		}, {
			"id": 1349,
			"name": "KDC Phú Nhuận - Phước Long B",
			"lat": 10.818068504333496,
			"lng": 106.78639984130859,
			"cats": [40, 48, 324, 325, 326]
		}, {
			"id": 2135,
			"name": "KDC Phước Thiện",
			"lat": 10.848958969116211,
			"lng": 106.83767700195312,
			"cats": [40, 325]
		}, {
			"id": 1656,
			"name": "KDC Thanh Trúc",
			"lat": 10.81961727142334,
			"lng": 106.80724334716797,
			"cats": [40, 55, 324, 325, 326]
		}, {
			"id": 2139,
			"name": "KDC Trường Lưu",
			"lat": 10.804048538208008,
			"lng": 106.82344055175781,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 115,
			"name": "Khang An",
			"lat": 10.79918384552002,
			"lng": 106.79067230224609,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1820,
			"name": "Khang Điền Intresco",
			"lat": 10.818636894226074,
			"lng": 106.78219604492187,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 1348,
			"name": "Khang Điền Long Trường",
			"lat": 10.793491363525391,
			"lng": 106.82695770263672,
			"cats": [40, 48, 324, 325, 326]
		}, {
			"id": 2450,
			"name": "Khu dân cư Long Thạnh Mỹ",
			"lat": 10.835906028747559,
			"lng": 106.83002471923828,
			"cats": []
		}, {
			"id": 1975,
			"name": "Long Phước Điền - Long Trường",
			"lat": 10.793239593505859,
			"lng": 106.82614135742187,
			"cats": [40, 325]
		}, {
			"id": 750,
			"name": "Lucasta Villa",
			"lat": 10.803651809692383,
			"lng": 106.79628753662109,
			"cats": [44, 59, 325]
		}, {
			"id": 1582,
			"name": "Lucky Dragon",
			"lat": 10.821514129638672,
			"lng": 106.77268218994141,
			"cats": [41, 51, 52, 55, 59, 163, 324, 325, 326]
		}, {
			"id": 1249,
			"name": "Man Thiện",
			"lat": 10.853242874145508,
			"lng": 106.78842163085937,
			"cats": [55, 324, 326]
		}, {
			"id": 1388,
			"name": "Mega Residence",
			"lat": 10.799418449401855,
			"lng": 106.79365539550781,
			"cats": [40, 325]
		}, {
			"id": 1956,
			"name": "Mega Ruby",
			"lat": 10.799203872680664,
			"lng": 106.79740905761719,
			"cats": [40, 41, 48, 52, 55, 325]
		}, {
			"id": 2090,
			"name": "Mega Sapphire",
			"lat": 10.799094200134277,
			"lng": 106.79458618164062,
			"cats": [40, 48, 52, 55, 59, 325]
		}, {
			"id": 2105,
			"name": "Mega Village",
			"lat": 10.789108276367188,
			"lng": 106.7950439453125,
			"cats": [48, 52, 55, 59, 325]
		}, {
			"id": 2261,
			"name": "Melosa Garden",
			"lat": 10.78057861328125,
			"lng": 106.79177093505859,
			"cats": []
		}, {
			"id": 2301,
			"name": "Nam Khang Residence",
			"lat": 10.805932998657227,
			"lng": 106.82167816162109,
			"cats": []
		}, {
			"id": 1128,
			"name": "Nhân Phú",
			"lat": 10.833818435668945,
			"lng": 106.78170776367187,
			"cats": [40, 48, 55, 324, 325, 326]
		}, {
			"id": 2107,
			"name": "Park Riverside Tân Cảng",
			"lat": 10.807719230651855,
			"lng": 106.80046844482422,
			"cats": [40, 41, 51, 52, 163, 325]
		}, {
			"id": 1897,
			"name": "Peach Garden",
			"lat": 10.80283260345459,
			"lng": 106.79010009765625,
			"cats": [40, 41, 52, 325]
		}, {
			"id": 324,
			"name": "Phố Đông - Hoa Sen",
			"lat": 10.809042930603027,
			"lng": 106.78527069091797,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1327,
			"name": "Phúc An Viên",
			"lat": 10.854552268981934,
			"lng": 106.83196258544922,
			"cats": [40]
		}, {
			"id": 978,
			"name": "Phuoc Long Spring Town",
			"lat": 10.82880973815918,
			"lng": 106.77368927001953,
			"cats": [40, 48, 50, 52, 55, 324, 325, 326]
		}, {
			"id": 1019,
			"name": "River Park",
			"lat": 10.808573722839355,
			"lng": 106.7911376953125,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1005,
			"name": "River Valley",
			"lat": 10.81415843963623,
			"lng": 106.78473663330078,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1268,
			"name": "Riviera Cove",
			"lat": 10.813036918640137,
			"lng": 106.78732299804687,
			"cats": [40, 44, 52, 325]
		}, {
			"id": 2475,
			"name": "Samsung Village",
			"lat": 10.819733619689941,
			"lng": 106.7996826171875,
			"cats": []
		}, {
			"id": 1215,
			"name": "Sun City Minh Sơn",
			"lat": 10.804204940795898,
			"lng": 106.79380798339844,
			"cats": [40, 48, 52, 55, 59, 325]
		}, {
			"id": 2376,
			"name": "Tăng Long River View",
			"lat": 10.816813468933105,
			"lng": 106.81936645507812,
			"cats": []
		}, {
			"id": 1225,
			"name": "Tăng Phú House",
			"lat": 10.825181007385254,
			"lng": 106.77071380615234,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 911,
			"name": "TDH - Phúc Thịnh Đức",
			"lat": 10.82609748840332,
			"lng": 106.763427734375,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1793,
			"name": "TDH – Phước Bình",
			"lat": 10.815683364868164,
			"lng": 106.76960754394531,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2128,
			"name": "TDH - Phước Long",
			"lat": 10.838793754577637,
			"lng": 106.76932525634766,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 363,
			"name": "TDH Hiệp Phú",
			"lat": 10.843758583068848,
			"lng": 106.77165985107422,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2271,
			"name": "Thái Dương Luxury",
			"lat": 10.801081657409668,
			"lng": 106.81719207763672,
			"cats": []
		}, {
			"id": 2310,
			"name": "Thái Dương Xanh",
			"lat": 10.85904598236084,
			"lng": 106.84060668945312,
			"cats": []
		}, {
			"id": 1067,
			"name": "Thảo Nguyên Sài Gòn",
			"lat": 10.866487503051758,
			"lng": 106.81713104248047,
			"cats": [40, 44, 48, 59, 325]
		}, {
			"id": 2158,
			"name": "The Art",
			"lat": 10.813985824584961,
			"lng": 106.77523040771484,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1179,
			"name": "The Boat Club Residences",
			"lat": 10.80352783203125,
			"lng": 106.83853149414062,
			"cats": [41, 44, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 1077,
			"name": "The Eastern",
			"lat": 10.805453300476074,
			"lng": 106.79660797119141,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1958,
			"name": "The Garland",
			"lat": 10.815953254699707,
			"lng": 106.78585052490234,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 905,
			"name": "Thiên Lý",
			"lat": 10.821120262145996,
			"lng": 106.78306579589844,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 753,
			"name": "Topia Garden",
			"lat": 10.798740386962891,
			"lng": 106.79906463623047,
			"cats": [40, 325]
		}, {
			"id": 1974,
			"name": "Trí Kiệt Long Trường",
			"lat": 10.818901062011719,
			"lng": 106.80438995361328,
			"cats": [40, 52, 324, 325, 326]
		}, {
			"id": 1976,
			"name": "Trí Minh",
			"lat": 10.785165786743164,
			"lng": 106.79210662841797,
			"cats": [40, 325]
		}, {
			"id": 816,
			"name": "Trường Thạnh 1",
			"lat": 10.804729461669922,
			"lng": 106.84111022949219,
			"cats": [40, 48, 52, 325]
		}, {
			"id": 2365,
			"name": "Valencia Riverside",
			"lat": 10.791232109069824,
			"lng": 106.79698181152344,
			"cats": []
		}, {
			"id": 2502,
			"name": "Valora Fuji Nam Long",
			"lat": 10.816287040710449,
			"lng": 106.77916717529297,
			"cats": []
		}, {
			"id": 2416,
			"name": "Việt Nhân Villa Riverside",
			"lat": 10.817142486572266,
			"lng": 106.82978820800781,
			"cats": []
		}, {
			"id": 615,
			"name": "Villa Park",
			"lat": 10.803483009338379,
			"lng": 106.80074310302734,
			"cats": [40, 48, 55, 59, 325]
		}]
	}, {
		"id": 69,
		"name": "Tân Bình",
		"pre": "Quận",
		"ward": [{
			"id": 8975,
			"name": "1",
			"pre": "Phường"
		}, {
			"id": 8985,
			"name": "10",
			"pre": "Phường"
		}, {
			"id": 8986,
			"name": "11",
			"pre": "Phường"
		}, {
			"id": 8987,
			"name": "12",
			"pre": "Phường"
		}, {
			"id": 8989,
			"name": "13",
			"pre": "Phường"
		}, {
			"id": 8990,
			"name": "14",
			"pre": "Phường"
		}, {
			"id": 8991,
			"name": "15",
			"pre": "Phường"
		}, {
			"id": 8976,
			"name": "2",
			"pre": "Phường"
		}, {
			"id": 8977,
			"name": "3",
			"pre": "Phường"
		}, {
			"id": 8978,
			"name": "4",
			"pre": "Phường"
		}, {
			"id": 8979,
			"name": "5",
			"pre": "Phường"
		}, {
			"id": 8980,
			"name": "6",
			"pre": "Phường"
		}, {
			"id": 8982,
			"name": "7",
			"pre": "Phường"
		}, {
			"id": 8983,
			"name": "8",
			"pre": "Phường"
		}, {
			"id": 8984,
			"name": "9",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 6093,
			"name": "124",
			"pre": "Đường"
		}, {
			"id": 7978,
			"name": "17B",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4281,
			"name": "25A",
			"pre": "Đường"
		}, {
			"id": 5632,
			"name": "27/3",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 2898,
			"name": "52",
			"pre": "Phố"
		}, {
			"id": 6015,
			"name": "57",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 2771,
			"name": "A4",
			"pre": "Đường"
		}, {
			"id": 9156,
			"name": "An Tôn",
			"pre": "Đường"
		}, {
			"id": 1916,
			"name": "Ấp Bắc",
			"pre": "Đường"
		}, {
			"id": 778,
			"name": "Âu Cơ",
			"pre": "Đường"
		}, {
			"id": 3801,
			"name": "B1",
			"pre": "Đường"
		}, {
			"id": 3146,
			"name": "B3",
			"pre": "Đường"
		}, {
			"id": 3149,
			"name": "B6",
			"pre": "Đường"
		}, {
			"id": 6654,
			"name": "Ba Gia",
			"pre": "Đường"
		}, {
			"id": 5821,
			"name": "Ba Vân",
			"pre": "Đường"
		}, {
			"id": 1105,
			"name": "Ba Vì",
			"pre": "Đường"
		}, {
			"id": 824,
			"name": "Bắc Hải",
			"pre": "Đường"
		}, {
			"id": 527,
			"name": "Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 4907,
			"name": "Bành Văn Trân",
			"pre": "Đường"
		}, {
			"id": 1769,
			"name": "Bàu Bàng",
			"pre": "Đường"
		}, {
			"id": 6066,
			"name": "Bàu Cát",
			"pre": "Đường"
		}, {
			"id": 4960,
			"name": "Bàu Cát 1",
			"pre": "Đường"
		}, {
			"id": 4961,
			"name": "Bàu Cát 2",
			"pre": "Đường"
		}, {
			"id": 4962,
			"name": "Bàu Cát 3",
			"pre": "Đường"
		}, {
			"id": 4963,
			"name": "Bàu Cát 4",
			"pre": "Đường"
		}, {
			"id": 4965,
			"name": "Bàu Cát 5",
			"pre": "Đường"
		}, {
			"id": 4966,
			"name": "Bàu Cát 6",
			"pre": "Đường"
		}, {
			"id": 4967,
			"name": "Bàu Cát 7",
			"pre": "Đường"
		}, {
			"id": 5548,
			"name": "Bàu Cát 8",
			"pre": "Đường"
		}, {
			"id": 5549,
			"name": "Bàu Cát 9",
			"pre": "Đường"
		}, {
			"id": 5672,
			"name": "Bàu Cát Đôi",
			"pre": "Đường"
		}, {
			"id": 6004,
			"name": "Bảy Hiền",
			"pre": "Đường"
		}, {
			"id": 1659,
			"name": "Bế Văn Đàn",
			"pre": "Đường"
		}, {
			"id": 4471,
			"name": "Bến Cát",
			"pre": "Đường"
		}, {
			"id": 4874,
			"name": "Bích Phượng",
			"pre": "Đường"
		}, {
			"id": 1913,
			"name": "Bình Giã",
			"pre": "Đường"
		}, {
			"id": 1902,
			"name": "Bùi Thế Mỹ",
			"pre": "Đường"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 3071,
			"name": "C1",
			"pre": "Đường"
		}, {
			"id": 4937,
			"name": "C12",
			"pre": "Đường"
		}, {
			"id": 6612,
			"name": "C18",
			"pre": "Đường"
		}, {
			"id": 9234,
			"name": "C22",
			"pre": "Đường"
		}, {
			"id": 6844,
			"name": "C27",
			"pre": "Đường"
		}, {
			"id": 3073,
			"name": "C3",
			"pre": "Đường"
		}, {
			"id": 3219,
			"name": "C4",
			"pre": "Đường"
		}, {
			"id": 1956,
			"name": "Ca Văn Thỉnh",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 4904,
			"name": "Chấn Hưng",
			"pre": "Đường"
		}, {
			"id": 4978,
			"name": "Châu Vĩnh Tế",
			"pre": "Đường"
		}, {
			"id": 2441,
			"name": "Chí Linh",
			"pre": "Đường"
		}, {
			"id": 4901,
			"name": "Chử Đồng Tử",
			"pre": "Đường"
		}, {
			"id": 3775,
			"name": "Cộng Hòa",
			"pre": "Đường"
		}, {
			"id": 5631,
			"name": "Cống Lở",
			"pre": "Đường"
		}, {
			"id": 320,
			"name": "Cù Chính Lan",
			"pre": "Đường"
		}, {
			"id": 8994,
			"name": "Cư Xá Tự Do",
			"pre": "Đường"
		}, {
			"id": 1081,
			"name": "Cửu Long",
			"pre": "Đường"
		}, {
			"id": 7506,
			"name": "D52",
			"pre": "Đường"
		}, {
			"id": 5687,
			"name": "Đại lộ Thăng Long",
			"pre": "Đường"
		}, {
			"id": 5972,
			"name": "Đại Nghĩa",
			"pre": "Đường"
		}, {
			"id": 4893,
			"name": "Dân Trí",
			"pre": "Đường"
		}, {
			"id": 2471,
			"name": "Đặng Lộ",
			"pre": "Đường"
		}, {
			"id": 6630,
			"name": "Đặng Minh Trứ",
			"pre": "Đường"
		}, {
			"id": 1983,
			"name": "Đất Thánh",
			"pre": "Đường"
		}, {
			"id": 2176,
			"name": "Đinh Điền",
			"pre": "Đường"
		}, {
			"id": 5985,
			"name": "Đồ Sơn",
			"pre": "Đường"
		}, {
			"id": 1652,
			"name": "Đống Đa",
			"pre": "Đường"
		}, {
			"id": 4969,
			"name": "Đồng Đen",
			"pre": "Đường"
		}, {
			"id": 1239,
			"name": "Đông Hồ",
			"pre": "Đường"
		}, {
			"id": 940,
			"name": "Đồng Khởi",
			"pre": "Đường"
		}, {
			"id": 1156,
			"name": "Đồng Nai",
			"pre": "Đường"
		}, {
			"id": 3117,
			"name": "Đông Sơn",
			"pre": "Đường"
		}, {
			"id": 4949,
			"name": "Đồng Xoài",
			"pre": "Đường"
		}, {
			"id": 5943,
			"name": "Đường Hồng Việt",
			"pre": "Đường"
		}, {
			"id": 2032,
			"name": "Dương Vân Nga",
			"pre": "Đường"
		}, {
			"id": 573,
			"name": "Duy Tân",
			"pre": "Đường"
		}, {
			"id": 310,
			"name": "Giải Phóng",
			"pre": "Đường"
		}, {
			"id": 6643,
			"name": "Gò Cẩm Đệm",
			"pre": "Đường"
		}, {
			"id": 6613,
			"name": "Hà Bá Tường",
			"pre": "Đường"
		}, {
			"id": 2444,
			"name": "Hát Giang",
			"pre": "Đường"
		}, {
			"id": 5574,
			"name": "Hậu Giang",
			"pre": "Đường"
		}, {
			"id": 4909,
			"name": "Hiệp Nhất",
			"pre": "Đường"
		}, {
			"id": 411,
			"name": "Hồ Đắc Di",
			"pre": "Đường"
		}, {
			"id": 5961,
			"name": "Hồ Ngọc Cẩn",
			"pre": "Đường"
		}, {
			"id": 5803,
			"name": "Hồ Văn Tắng",
			"pre": "Đường"
		}, {
			"id": 965,
			"name": "Hòa Bình",
			"pre": "Đường"
		}, {
			"id": 9314,
			"name": "Hoà Hiệp",
			"pre": "Đường"
		}, {
			"id": 1157,
			"name": "Hòa Hưng",
			"pre": "Đường"
		}, {
			"id": 6024,
			"name": "Hoàng Bật Đạt",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 1520,
			"name": "Hoàng Kế Viêm",
			"pre": "Đường"
		}, {
			"id": 8093,
			"name": "Hoàng Kế Viên",
			"pre": "Đường"
		}, {
			"id": 938,
			"name": "Hoàng Sa",
			"pre": "Đường"
		}, {
			"id": 337,
			"name": "Hoàng Văn Thụ",
			"pre": "Đường"
		}, {
			"id": 2564,
			"name": "Hoàng Việt",
			"pre": "Đường"
		}, {
			"id": 3283,
			"name": "Hoàng Xuân Nhị",
			"pre": "Đường"
		}, {
			"id": 114,
			"name": "Hồng Hà",
			"pre": "Đường"
		}, {
			"id": 10863,
			"name": "Hồng Hạc",
			"pre": "Đường"
		}, {
			"id": 825,
			"name": "Hồng Lạc",
			"pre": "Đường"
		}, {
			"id": 4903,
			"name": "Hưng Hóa",
			"pre": "Đường"
		}, {
			"id": 6244,
			"name": "Huỳnh Lan Khanh",
			"pre": "Đường"
		}, {
			"id": 1603,
			"name": "Huỳnh Tịnh Của",
			"pre": "Đường"
		}, {
			"id": 1808,
			"name": "Huỳnh Văn Nghệ",
			"pre": "Đường"
		}, {
			"id": 10606,
			"name": "K22",
			"pre": "Đường"
		}, {
			"id": 7977,
			"name": "K300",
			"pre": "Đường"
		}, {
			"id": 6868,
			"name": "Khai Trí",
			"pre": "Đường"
		}, {
			"id": 6545,
			"name": "Khiêu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 6547,
			"name": "Khiếu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 3281,
			"name": "Khuông Việt",
			"pre": "Đường"
		}, {
			"id": 5759,
			"name": "Kim Hải",
			"pre": "Đường"
		}, {
			"id": 621,
			"name": "Lạc Long Quân",
			"pre": "Đường"
		}, {
			"id": 1600,
			"name": "Lam Sơn",
			"pre": "Đường"
		}, {
			"id": 830,
			"name": "Lê Bình",
			"pre": "Đường"
		}, {
			"id": 6551,
			"name": "Lê Công Miễn",
			"pre": "Đường"
		}, {
			"id": 5758,
			"name": "Lê Độ",
			"pre": "Đường"
		}, {
			"id": 6878,
			"name": "Lê Duy Nhuận",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 3797,
			"name": "Lê Minh Xuân",
			"pre": "Đường"
		}, {
			"id": 7345,
			"name": "Lê Ngân",
			"pre": "Đường"
		}, {
			"id": 10357,
			"name": "Lê Phát Đạt",
			"pre": "Đường"
		}, {
			"id": 4939,
			"name": "Lê Tấn Quốc",
			"pre": "Đường"
		}, {
			"id": 4950,
			"name": "Lê Trung Nghĩa",
			"pre": "Đường"
		}, {
			"id": 2272,
			"name": "Lê Văn Huân",
			"pre": "Đường"
		}, {
			"id": 821,
			"name": "Lê Văn Sỹ",
			"pre": "Đường"
		}, {
			"id": 8339,
			"name": "Lô D",
			"pre": "Đường"
		}, {
			"id": 6689,
			"name": "Lộc Hưng",
			"pre": "Đường"
		}, {
			"id": 4301,
			"name": "Long Hưng",
			"pre": "Đường"
		}, {
			"id": 88,
			"name": "Lương Thế Vinh",
			"pre": "Đường"
		}, {
			"id": 4129,
			"name": "Lưu Nhân Chú",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 4022,
			"name": "Mai Lão Bạng",
			"pre": "Đường"
		}, {
			"id": 5724,
			"name": "Năm Châu",
			"pre": "Đường"
		}, {
			"id": 6819,
			"name": "Nam Sơn",
			"pre": "Đường"
		}, {
			"id": 4895,
			"name": "Nghĩa Hòa",
			"pre": "Đường"
		}, {
			"id": 6751,
			"name": "Nghĩa Hưng",
			"pre": "Đường"
		}, {
			"id": 4883,
			"name": "Nghĩa Phát",
			"pre": "Đường"
		}, {
			"id": 5702,
			"name": "Ngô Bệ",
			"pre": "Đường"
		}, {
			"id": 285,
			"name": "Ngô Gia Tự",
			"pre": "Đường"
		}, {
			"id": 4921,
			"name": "Ngô Thị Thu Minh",
			"pre": "Đường"
		}, {
			"id": 10545,
			"name": "Ngọc Phú",
			"pre": "Đường"
		}, {
			"id": 3307,
			"name": "Nguyễn Bá Tòng",
			"pre": "Đường"
		}, {
			"id": 4952,
			"name": "Nguyễn Bá Tuyển",
			"pre": "Đường"
		}, {
			"id": 4916,
			"name": "Nguyễn Bậc",
			"pre": "Đường"
		}, {
			"id": 2718,
			"name": "Nguyễn Bặc",
			"pre": "Đường"
		}, {
			"id": 5700,
			"name": "Nguyễn Biểu B2",
			"pre": "Đường"
		}, {
			"id": 5027,
			"name": "Nguyễn Cảnh Dị",
			"pre": "Đường"
		}, {
			"id": 4942,
			"name": "Nguyễn Chánh Sắt",
			"pre": "Đường"
		}, {
			"id": 4912,
			"name": "Nguyễn Đình Khơi",
			"pre": "Đường"
		}, {
			"id": 286,
			"name": "Nguyễn Đức Thuận",
			"pre": "Đường"
		}, {
			"id": 4943,
			"name": "Nguyễn Hiến Lê",
			"pre": "Đường"
		}, {
			"id": 4957,
			"name": "Nguyễn Hồng Đào",
			"pre": "Đường"
		}, {
			"id": 3907,
			"name": "Nguyễn Minh Châu",
			"pre": "Đường"
		}, {
			"id": 4951,
			"name": "Nguyễn Minh Hoàng",
			"pre": "Đường"
		}, {
			"id": 3139,
			"name": "Nguyễn Phúc Chu",
			"pre": "Đường"
		}, {
			"id": 209,
			"name": "Nguyễn Quang Bích",
			"pre": "Đường"
		}, {
			"id": 831,
			"name": "Nguyễn Sỹ Sách",
			"pre": "Đường"
		}, {
			"id": 902,
			"name": "Nguyễn Thái Bình",
			"pre": "Đường"
		}, {
			"id": 6221,
			"name": "Nguyễn Thanh Tuyền",
			"pre": "Đường"
		}, {
			"id": 8358,
			"name": "Nguyễn Thế Lộc",
			"pre": "Đường"
		}, {
			"id": 988,
			"name": "Nguyễn Thị Nhỏ",
			"pre": "Đường"
		}, {
			"id": 9893,
			"name": "Nguyễn Thị Thu Minh",
			"pre": "Đường"
		}, {
			"id": 6312,
			"name": "Nguyễn Trọng Lội",
			"pre": "Đường"
		}, {
			"id": 4830,
			"name": "Nguyễn Trọng Tuyển",
			"pre": "Đường"
		}, {
			"id": 232,
			"name": "Nguyễn Tư Giản",
			"pre": "Đường"
		}, {
			"id": 6419,
			"name": "Nguyễn Tử Nha",
			"pre": "Đường"
		}, {
			"id": 3326,
			"name": "Nguyễn Văn Mai",
			"pre": "Đường"
		}, {
			"id": 9830,
			"name": "Nguyễn Văn Mại",
			"pre": "Đường"
		}, {
			"id": 341,
			"name": "Nguyễn Văn Trỗi",
			"pre": "Đường"
		}, {
			"id": 6979,
			"name": "Nguyễn Văn Vĩnh",
			"pre": "Đường"
		}, {
			"id": 3181,
			"name": "Nguyễn Văn Vịnh",
			"pre": "Đường"
		}, {
			"id": 4976,
			"name": "Nguyễn Văn Vỹ",
			"pre": "Đường"
		}, {
			"id": 4938,
			"name": "Nhất Chi Mai",
			"pre": "Đường"
		}, {
			"id": 4981,
			"name": "Ni Sư Huỳnh Liên",
			"pre": "Đường"
		}, {
			"id": 4947,
			"name": "Núi Thành",
			"pre": "Đường"
		}, {
			"id": 2119,
			"name": "Phạm Cự Lượng",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 1664,
			"name": "Phạm Phú Thứ",
			"pre": "Đường"
		}, {
			"id": 827,
			"name": "Phạm Văn Bạch",
			"pre": "Đường"
		}, {
			"id": 3364,
			"name": "Phạm Văn Hai",
			"pre": "Đường"
		}, {
			"id": 6095,
			"name": "Phạm Văn Sáng",
			"pre": "Đường"
		}, {
			"id": 832,
			"name": "Phan Bá Phiến",
			"pre": "Đường"
		}, {
			"id": 352,
			"name": "Phan Đình Giót",
			"pre": "Đường"
		}, {
			"id": 727,
			"name": "Phan Huy Ích",
			"pre": "Đường"
		}, {
			"id": 4156,
			"name": "Phan Sào Nam",
			"pre": "Đường"
		}, {
			"id": 6922,
			"name": "Phan Thăng Long",
			"pre": "Đường"
		}, {
			"id": 1490,
			"name": "Phan Thúc Duyện",
			"pre": "Đường"
		}, {
			"id": 4936,
			"name": "Phan Văn Sửu",
			"pre": "Đường"
		}, {
			"id": 4831,
			"name": "Phổ Quang",
			"pre": "Đường"
		}, {
			"id": 4876,
			"name": "Phù Dung",
			"pre": "Phố"
		}, {
			"id": 4428,
			"name": "Phú Hòa",
			"pre": "Đường"
		}, {
			"id": 6018,
			"name": "Phú Lộc",
			"pre": "Đường"
		}, {
			"id": 5825,
			"name": "Quách Văn Tuấn",
			"pre": "Đường"
		}, {
			"id": 8991,
			"name": "Quảng Hiền",
			"pre": "Đường"
		}, {
			"id": 6522,
			"name": "Sầm Sơn",
			"pre": "Đường"
		}, {
			"id": 6020,
			"name": "Sao Mai",
			"pre": "Đường"
		}, {
			"id": 6532,
			"name": "Sơn Cang",
			"pre": "Đường"
		}, {
			"id": 4975,
			"name": "Sơn Hùng",
			"pre": "Đường"
		}, {
			"id": 9158,
			"name": "Sơn Hưng",
			"pre": "Đường"
		}, {
			"id": 6949,
			"name": "Sông Đà",
			"pre": "Đường"
		}, {
			"id": 8063,
			"name": "Sông Đáy",
			"pre": "Đường"
		}, {
			"id": 7094,
			"name": "Sông Nhuệ",
			"pre": "Đường"
		}, {
			"id": 5756,
			"name": "Sông Thao",
			"pre": "Đường"
		}, {
			"id": 6632,
			"name": "Sông Thương",
			"pre": "Đường"
		}, {
			"id": 3209,
			"name": "T4A",
			"pre": "Đường"
		}, {
			"id": 5840,
			"name": "Tái Thiết",
			"pre": "Đường"
		}, {
			"id": 4829,
			"name": "Tân Canh",
			"pre": "Đường"
		}, {
			"id": 4946,
			"name": "Tân Hải",
			"pre": "Đường"
		}, {
			"id": 993,
			"name": "Tân Khai",
			"pre": "Đường"
		}, {
			"id": 3226,
			"name": "Tân Kỳ Tân Quý",
			"pre": "Đường"
		}, {
			"id": 2927,
			"name": "Tân Lập",
			"pre": "Đường"
		}, {
			"id": 1029,
			"name": "Tân Phước",
			"pre": "Đường"
		}, {
			"id": 4714,
			"name": "Tân Sơn",
			"pre": "Đường"
		}, {
			"id": 4919,
			"name": "Tân Sơn Hòa",
			"pre": "Đường"
		}, {
			"id": 3310,
			"name": "Tân Sơn Nhì",
			"pre": "Đường"
		}, {
			"id": 1043,
			"name": "Tân Thành",
			"pre": "Đường"
		}, {
			"id": 7293,
			"name": "Tân Thọ",
			"pre": "Đường"
		}, {
			"id": 2632,
			"name": "Tân Tiến",
			"pre": "Đường"
		}, {
			"id": 4878,
			"name": "Tân Trang",
			"pre": "Đường"
		}, {
			"id": 6570,
			"name": "Tân Trụ",
			"pre": "Đường"
		}, {
			"id": 3123,
			"name": "Tản Viên",
			"pre": "Đường"
		}, {
			"id": 672,
			"name": "Tân Xuân",
			"pre": "Đường"
		}, {
			"id": 4980,
			"name": "Thái Thị Nhạn",
			"pre": "Đường"
		}, {
			"id": 693,
			"name": "Thân Nhân Trung",
			"pre": "Đường"
		}, {
			"id": 7743,
			"name": "Thăng  Long",
			"pre": "Đường"
		}, {
			"id": 5703,
			"name": "Thành Mỹ",
			"pre": "Đường"
		}, {
			"id": 5942,
			"name": "Thép Mới",
			"pre": "Đường"
		}, {
			"id": 5757,
			"name": "Thích Minh Nguyệt",
			"pre": "Đường"
		}, {
			"id": 4877,
			"name": "Thiên Phước",
			"pre": "Đường"
		}, {
			"id": 5660,
			"name": "Thúy Lĩnh",
			"pre": "Đường"
		}, {
			"id": 3644,
			"name": "Tiền Giang",
			"pre": "Đường"
		}, {
			"id": 5698,
			"name": "Tống Văn Hên",
			"pre": "Đường"
		}, {
			"id": 5659,
			"name": "Trà Khúc",
			"pre": "Đường"
		}, {
			"id": 4974,
			"name": "Trần Mai Ninh",
			"pre": "Đường"
		}, {
			"id": 552,
			"name": "Trần Nhân Tông",
			"pre": "Đường"
		}, {
			"id": 674,
			"name": "Trần Quốc Hoàn",
			"pre": "Phố"
		}, {
			"id": 2565,
			"name": "Trần Tấn",
			"pre": "Đường"
		}, {
			"id": 4282,
			"name": "Trần Thái Tông",
			"pre": "Đường"
		}, {
			"id": 503,
			"name": "Trần Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 6264,
			"name": "Trần Triệu Luật",
			"pre": "Đường"
		}, {
			"id": 7523,
			"name": "Trần Văn Danh",
			"pre": "Đường"
		}, {
			"id": 1486,
			"name": "Trần Văn Dư",
			"pre": "Đường"
		}, {
			"id": 4873,
			"name": "Trần Văn Hoàng",
			"pre": "Đường"
		}, {
			"id": 5603,
			"name": "Trần Văn Quang",
			"pre": "Đường"
		}, {
			"id": 3279,
			"name": "Trịnh Đình Trọng",
			"pre": "Đường"
		}, {
			"id": 6754,
			"name": "Trung Lang",
			"pre": "Đường"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 369,
			"name": "Trương Công Định",
			"pre": "Đường"
		}, {
			"id": 4953,
			"name": "Trương Hoàng Thanh",
			"pre": "Đường"
		}, {
			"id": 2234,
			"name": "Trương Quốc Dung",
			"pre": "Đường"
		}, {
			"id": 6828,
			"name": "Trương Quốc Hoàng",
			"pre": "Đường"
		}, {
			"id": 1485,
			"name": "Trường Sa",
			"pre": "Đường"
		}, {
			"id": 1094,
			"name": "Trường Sơn",
			"pre": "Đường"
		}, {
			"id": 6546,
			"name": "Trương Tấn Sang",
			"pre": "Đường"
		}, {
			"id": 8154,
			"name": "Tự Cường",
			"pre": "Đường"
		}, {
			"id": 4886,
			"name": "Tứ Hải",
			"pre": "Đường"
		}, {
			"id": 6688,
			"name": "Tự Lập",
			"pre": "Đường"
		}, {
			"id": 3529,
			"name": "Út Tịch",
			"pre": "Đường"
		}, {
			"id": 5764,
			"name": "Văn Chung",
			"pre": "Đường"
		}, {
			"id": 4891,
			"name": "Vân Côi",
			"pre": "Đường"
		}, {
			"id": 6550,
			"name": "Võ Đình Tú",
			"pre": "Đường"
		}, {
			"id": 828,
			"name": "Võ Thành Trang",
			"pre": "Đường"
		}, {
			"id": 6549,
			"name": "Võ Trung Thành",
			"pre": "Đường"
		}, {
			"id": 5639,
			"name": "Vườn Lan",
			"pre": "Đường"
		}, {
			"id": 796,
			"name": "Xuân Diệu",
			"pre": "Đường"
		}, {
			"id": 833,
			"name": "Xuân Hồng",
			"pre": "Đường"
		}, {
			"id": 736,
			"name": "Yên Thế",
			"pre": "Đường"
		}],
		"project": [{
			"id": 251,
			"name": "ACBR Office Building",
			"lat": 10.80172061920166,
			"lng": 106.64601135253906,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2014,
			"name": "Airport Tower",
			"lat": 10.835982322692871,
			"lng": 106.64627075195312,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1286,
			"name": "Bàu Cát II",
			"lat": 10.786868095397949,
			"lng": 106.6446533203125,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1075,
			"name": "Bảy Hiền Tower",
			"lat": 10.788576126098633,
			"lng": 106.65021514892578,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1070,
			"name": "Bee Home",
			"lat": 10.806868553161621,
			"lng": 106.64110565185547,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2396,
			"name": "Botanica Premier",
			"lat": 10.811334609985352,
			"lng": 106.66958618164062,
			"cats": []
		}, {
			"id": 1678,
			"name": "C.T Plaza",
			"lat": 10.813024520874023,
			"lng": 106.66564178466797,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 2165,
			"name": "Carillon 3",
			"lat": 10.806277275085449,
			"lng": 106.64698791503906,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 887,
			"name": "Carillon Apartment",
			"lat": 10.804841041564941,
			"lng": 106.64766693115234,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2367,
			"name": "Centa Park Tân Bình",
			"lat": 10.786901473999023,
			"lng": 106.64265441894531,
			"cats": []
		}, {
			"id": 1076,
			"name": "Central Plaza",
			"lat": 10.794235229492187,
			"lng": 106.66318511962891,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 128,
			"name": "Chung cư Phúc Yên",
			"lat": 10.825569152832031,
			"lng": 106.62985229492187,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1274,
			"name": "Cộng Hòa Plaza",
			"lat": 10.80095386505127,
			"lng": 106.6510009765625,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1072,
			"name": "Era Lạc Long Quân",
			"lat": 10.775128364562988,
			"lng": 106.64926910400391,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1773,
			"name": "Etown Building",
			"lat": 10.80194091796875,
			"lng": 106.64748382568359,
			"cats": [41, 50, 55, 59, 163]
		}, {
			"id": 352,
			"name": "Nam Minh Long",
			"lat": 10.825534820556641,
			"lng": 106.62957000732422,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 704,
			"name": "Ruby Garden",
			"lat": 10.817695617675781,
			"lng": 106.63272094726562,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 913,
			"name": "Sài Gòn Airport",
			"lat": 10.815109252929687,
			"lng": 106.66687774658203,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1571,
			"name": "Scetpa Building",
			"lat": 10.800856590270996,
			"lng": 106.65029144287109,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2047,
			"name": "Sky Center",
			"lat": 10.806015968322754,
			"lng": 106.66645812988281,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2184,
			"name": "Tân Bình Apartment",
			"lat": 10.824196815490723,
			"lng": 106.63576507568359,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1399,
			"name": "Thái Sơn Apartment",
			"lat": 10.80312442779541,
			"lng": 106.65206909179687,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 265,
			"name": "Thành Công Tower 2",
			"lat": 10.819122314453125,
			"lng": 106.62982940673828,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2059,
			"name": "The Botanica",
			"lat": 10.80839729309082,
			"lng": 106.66910552978516,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 361,
			"name": "The Harmona",
			"lat": 10.796930313110352,
			"lng": 106.64209747314453,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1938,
			"name": "TPA Building",
			"lat": 10.808499336242676,
			"lng": 106.66484069824219,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 315,
			"name": "Waseco Building",
			"lat": 10.80532169342041,
			"lng": 106.66578674316406,
			"cats": [48, 55, 59, 324, 326]
		}]
	}, {
		"id": 70,
		"name": "Tân Phú",
		"pre": "Quận",
		"ward": [{
			"id": 201,
			"name": "Hiệp Tân",
			"pre": "Phường"
		}, {
			"id": 200,
			"name": "Hòa Thạnh",
			"pre": "Phường"
		}, {
			"id": 198,
			"name": "Phú Thạnh",
			"pre": "Phường"
		}, {
			"id": 197,
			"name": "Phú Thọ Hòa",
			"pre": "Phường"
		}, {
			"id": 199,
			"name": "Phú Trung",
			"pre": "Phường"
		}, {
			"id": 194,
			"name": "Sơn Kỳ",
			"pre": "Phường"
		}, {
			"id": 195,
			"name": "Tân Quý",
			"pre": "Phường"
		}, {
			"id": 192,
			"name": "Tân Sơn Nhì",
			"pre": "Phường"
		}, {
			"id": 196,
			"name": "Tân Thành",
			"pre": "Phường"
		}, {
			"id": 203,
			"name": "Tân Thới Hòa",
			"pre": "Phường"
		}, {
			"id": 193,
			"name": "Tây Thạnh",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 4311,
			"name": "11N",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 6573,
			"name": "14B",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 2171,
			"name": "19/5",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 2058,
			"name": "26-3",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 1718,
			"name": "30/4",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 4413,
			"name": "3A",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 4359,
			"name": "5A",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 4295,
			"name": "79",
			"pre": "Đường"
		}, {
			"id": 7073,
			"name": "A",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 778,
			"name": "Âu Cơ",
			"pre": "Đường"
		}, {
			"id": 4135,
			"name": "B",
			"pre": "Đường"
		}, {
			"id": 3801,
			"name": "B1",
			"pre": "Đường"
		}, {
			"id": 3145,
			"name": "B2",
			"pre": "Đường"
		}, {
			"id": 3146,
			"name": "B3",
			"pre": "Đường"
		}, {
			"id": 3147,
			"name": "B4",
			"pre": "Đường"
		}, {
			"id": 9366,
			"name": "Bác Ái",
			"pre": "Đường"
		}, {
			"id": 3065,
			"name": "Bắc Ái",
			"pre": "Đường"
		}, {
			"id": 6066,
			"name": "Bàu Cát",
			"pre": "Đường"
		}, {
			"id": 4963,
			"name": "Bàu Cát 4",
			"pre": "Đường"
		}, {
			"id": 3203,
			"name": "Bình Long",
			"pre": "Đường"
		}, {
			"id": 5644,
			"name": "Bờ Bao Tân Thắng",
			"pre": "Đường"
		}, {
			"id": 2082,
			"name": "Bùi Cẩm Hổ",
			"pre": "Đường"
		}, {
			"id": 1902,
			"name": "Bùi Thế Mỹ",
			"pre": "Đường"
		}, {
			"id": 1955,
			"name": "Bùi Xuân Phái",
			"pre": "Đường"
		}, {
			"id": 7134,
			"name": "C13",
			"pre": "Đường"
		}, {
			"id": 3072,
			"name": "C2",
			"pre": "Đường"
		}, {
			"id": 3219,
			"name": "C4",
			"pre": "Đường"
		}, {
			"id": 3218,
			"name": "C6",
			"pre": "Đường"
		}, {
			"id": 3217,
			"name": "C8",
			"pre": "Đường"
		}, {
			"id": 3303,
			"name": "Cách Mạng",
			"pre": "Đường"
		}, {
			"id": 3173,
			"name": "Cao Văn Ngọc",
			"pre": "Đường"
		}, {
			"id": 6298,
			"name": "Cầu Niệm",
			"pre": "Đường"
		}, {
			"id": 6923,
			"name": "Cầu Xây 2",
			"pre": "Đường"
		}, {
			"id": 6130,
			"name": "Cầu Xéo",
			"pre": "Đường"
		}, {
			"id": 2132,
			"name": "Cây Keo",
			"pre": "Đường"
		}, {
			"id": 3197,
			"name": "CC2",
			"pre": "Đường"
		}, {
			"id": 8018,
			"name": "CC3",
			"pre": "Đường"
		}, {
			"id": 3198,
			"name": "CC5",
			"pre": "Đường"
		}, {
			"id": 5009,
			"name": "Chân Lý",
			"pre": "Đường"
		}, {
			"id": 1531,
			"name": "Chế Lan Viên",
			"pre": "Đường"
		}, {
			"id": 3271,
			"name": "Chu Thiện",
			"pre": "Đường"
		}, {
			"id": 802,
			"name": "Chu Văn An",
			"pre": "Đường"
		}, {
			"id": 3190,
			"name": "CN1",
			"pre": "Đường"
		}, {
			"id": 3194,
			"name": "CN10",
			"pre": "Đường"
		}, {
			"id": 3192,
			"name": "CN11",
			"pre": "Đường"
		}, {
			"id": 3191,
			"name": "CN12",
			"pre": "Đường"
		}, {
			"id": 3193,
			"name": "CN13",
			"pre": "Đường"
		}, {
			"id": 3188,
			"name": "CN3",
			"pre": "Đường"
		}, {
			"id": 3187,
			"name": "CN4",
			"pre": "Đường"
		}, {
			"id": 3189,
			"name": "CN5",
			"pre": "Đường"
		}, {
			"id": 3196,
			"name": "CN6",
			"pre": "Đường"
		}, {
			"id": 3195,
			"name": "CN8",
			"pre": "Đường"
		}, {
			"id": 4056,
			"name": "CN9",
			"pre": "Đường"
		}, {
			"id": 3775,
			"name": "Cộng Hòa",
			"pre": "Đường"
		}, {
			"id": 9669,
			"name": "Cộng Hòa 3",
			"pre": "Đường"
		}, {
			"id": 3220,
			"name": "D10",
			"pre": "Đường"
		}, {
			"id": 3222,
			"name": "D11",
			"pre": "Đường"
		}, {
			"id": 6872,
			"name": "D12",
			"pre": "Đường"
		}, {
			"id": 3221,
			"name": "D13",
			"pre": "Đường"
		}, {
			"id": 7425,
			"name": "D14",
			"pre": "Đường"
		}, {
			"id": 10426,
			"name": "D14A",
			"pre": "Đường"
		}, {
			"id": 10375,
			"name": "D14B",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 3223,
			"name": "D16",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 2599,
			"name": "D4",
			"pre": "Đường"
		}, {
			"id": 5889,
			"name": "D9",
			"pre": "Đường"
		}, {
			"id": 7952,
			"name": "Đại Thành",
			"pre": "Đường"
		}, {
			"id": 6339,
			"name": "Đàm Thận Huy",
			"pre": "Đường"
		}, {
			"id": 2944,
			"name": "Dân Chủ",
			"pre": "Đường"
		}, {
			"id": 3308,
			"name": "Dân Tộc",
			"pre": "Đường"
		}, {
			"id": 3162,
			"name": "Đặng Thế Phong",
			"pre": "Đường"
		}, {
			"id": 6662,
			"name": "Đào Nguyên Cẩn",
			"pre": "Đường"
		}, {
			"id": 5715,
			"name": "Đào Trí",
			"pre": "Đường"
		}, {
			"id": 6296,
			"name": "Đẩu Vũ",
			"pre": "Đường"
		}, {
			"id": 8550,
			"name": "DC1",
			"pre": "Đường"
		}, {
			"id": 3200,
			"name": "DC11",
			"pre": "Đường"
		}, {
			"id": 6909,
			"name": "DC13",
			"pre": "Đường"
		}, {
			"id": 5962,
			"name": "DC3",
			"pre": "Đường"
		}, {
			"id": 3201,
			"name": "DC4",
			"pre": "Đường"
		}, {
			"id": 9344,
			"name": "DC5",
			"pre": "Đường"
		}, {
			"id": 6908,
			"name": "DC6",
			"pre": "Đường"
		}, {
			"id": 7453,
			"name": "DC7",
			"pre": "Đường"
		}, {
			"id": 3202,
			"name": "DC8",
			"pre": "Đường"
		}, {
			"id": 3199,
			"name": "DC9",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 5833,
			"name": "Điện Cao Thế",
			"pre": "Đường"
		}, {
			"id": 3163,
			"name": "Diệp Minh Châu",
			"pre": "Đường"
		}, {
			"id": 186,
			"name": "Đinh Liệt",
			"pre": "Phố"
		}, {
			"id": 3251,
			"name": "Đỗ Bí",
			"pre": "Đường"
		}, {
			"id": 5968,
			"name": "Đỗ Công Tường",
			"pre": "Đường"
		}, {
			"id": 3228,
			"name": "Đô Đốc Chân",
			"pre": "Đường"
		}, {
			"id": 3292,
			"name": "Đô Đốc Lộc",
			"pre": "Đường"
		}, {
			"id": 3297,
			"name": "Đô Đốc Long",
			"pre": "Đường"
		}, {
			"id": 8493,
			"name": "Đô Đốc Thành",
			"pre": "Đường"
		}, {
			"id": 7867,
			"name": "Đô Đốc Thủ",
			"pre": "Đường"
		}, {
			"id": 630,
			"name": "Đỗ Đức Dục",
			"pre": "Đường"
		}, {
			"id": 2764,
			"name": "Đỗ Nhuận",
			"pre": "Phố"
		}, {
			"id": 3290,
			"name": "Đỗ Thị Tám",
			"pre": "Đường"
		}, {
			"id": 9426,
			"name": "Đỗ Thị Tâm",
			"pre": "Đường"
		}, {
			"id": 3233,
			"name": "Đỗ Thừa Luông",
			"pre": "Đường"
		}, {
			"id": 3234,
			"name": "Đỗ Thừa Tự",
			"pre": "Đường"
		}, {
			"id": 10422,
			"name": "Đỗ Văn Nam",
			"pre": "Đường"
		}, {
			"id": 3231,
			"name": "Đoàn Giỏi",
			"pre": "Đường"
		}, {
			"id": 6889,
			"name": "Đoàn Hồng Phúc",
			"pre": "Đường"
		}, {
			"id": 3174,
			"name": "Đoàn Hồng Phước",
			"pre": "Đường"
		}, {
			"id": 474,
			"name": "Đoàn Kết",
			"pre": "Đường"
		}, {
			"id": 797,
			"name": "Độc Lập",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 5982,
			"name": "Dương Đình Cúc",
			"pre": "Đường"
		}, {
			"id": 2020,
			"name": "Dương Đức Hiền",
			"pre": "Đường"
		}, {
			"id": 3268,
			"name": "Dương Khê",
			"pre": "Đường"
		}, {
			"id": 1527,
			"name": "Dương Khuê",
			"pre": "Đường"
		}, {
			"id": 3211,
			"name": "Đường S3",
			"pre": "Đường"
		}, {
			"id": 3213,
			"name": "Đường S7",
			"pre": "Đường"
		}, {
			"id": 3171,
			"name": "Dương Thiệu Tước",
			"pre": "Đường"
		}, {
			"id": 3230,
			"name": "Dương Văn Dương",
			"pre": "Đường"
		}, {
			"id": 3232,
			"name": "Gò Dầu",
			"pre": "Đường"
		}, {
			"id": 5908,
			"name": "Gò Xoài",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 2589,
			"name": "Hàn Mặc Tử",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 3246,
			"name": "Hiền Vương",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 411,
			"name": "Hồ Đắc Di",
			"pre": "Đường"
		}, {
			"id": 5961,
			"name": "Hồ Ngọc Cẩn",
			"pre": "Đường"
		}, {
			"id": 637,
			"name": "Hoa Bằng",
			"pre": "Đường"
		}, {
			"id": 965,
			"name": "Hòa Bình",
			"pre": "Đường"
		}, {
			"id": 412,
			"name": "Hoàng Ngọc Phách",
			"pre": "Phố"
		}, {
			"id": 2319,
			"name": "Hoàng Thiều Hoa",
			"pre": "Đường"
		}, {
			"id": 1482,
			"name": "Hoàng Văn Hòe",
			"pre": "Đường"
		}, {
			"id": 2564,
			"name": "Hoàng Việt",
			"pre": "Đường"
		}, {
			"id": 3176,
			"name": "Hoàng Xuân Hoành",
			"pre": "Đường"
		}, {
			"id": 3283,
			"name": "Hoàng Xuân Nhị",
			"pre": "Đường"
		}, {
			"id": 7647,
			"name": "Hương lộ 2",
			"pre": "Đường"
		}, {
			"id": 7726,
			"name": "Hương Lộ 3",
			"pre": "Đường"
		}, {
			"id": 3277,
			"name": "Huỳnh Thiên Lộc",
			"pre": "Đường"
		}, {
			"id": 3264,
			"name": "Huỳnh Thiệu Hoa",
			"pre": "Đường"
		}, {
			"id": 3278,
			"name": "Huỳnh Văn Chính",
			"pre": "Đường"
		}, {
			"id": 3166,
			"name": "Huỳnh Văn Gấm",
			"pre": "Đường"
		}, {
			"id": 3182,
			"name": "Huỳnh Văn Một",
			"pre": "Đường"
		}, {
			"id": 1808,
			"name": "Huỳnh Văn Nghệ",
			"pre": "Đường"
		}, {
			"id": 6063,
			"name": "Ích Thiên",
			"pre": "Đường"
		}, {
			"id": 3306,
			"name": "Ích Thiện",
			"pre": "Phố"
		}, {
			"id": 6416,
			"name": "Kênh Tân Hóa",
			"pre": "Đường"
		}, {
			"id": 6583,
			"name": "Khởi Nghĩa Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 3281,
			"name": "Khuông Việt",
			"pre": "Đường"
		}, {
			"id": 6297,
			"name": "Kiều Sơn",
			"pre": "Đường"
		}, {
			"id": 2216,
			"name": "Lê Cảnh Tuân",
			"pre": "Đường"
		}, {
			"id": 3253,
			"name": "Lê Cao Lãng",
			"pre": "Đường"
		}, {
			"id": 3293,
			"name": "Lê Đình Thám",
			"pre": "Đường"
		}, {
			"id": 3172,
			"name": "Lê Đình Thụ",
			"pre": "Đường"
		}, {
			"id": 4341,
			"name": "Lê Khôi",
			"pre": "Đường"
		}, {
			"id": 3248,
			"name": "Lê Lâm",
			"pre": "Đường"
		}, {
			"id": 5967,
			"name": "Lê Lăng",
			"pre": "Đường"
		}, {
			"id": 6283,
			"name": "Lê Liễu",
			"pre": "Đường"
		}, {
			"id": 3250,
			"name": "Lê Lộ",
			"pre": "Đường"
		}, {
			"id": 3239,
			"name": "Lê Lư",
			"pre": "Đường"
		}, {
			"id": 3282,
			"name": "Lê Ngã",
			"pre": "Đường"
		}, {
			"id": 3249,
			"name": "Lê Niệm",
			"pre": "Đường"
		}, {
			"id": 3260,
			"name": "Lê Quang Chiểu",
			"pre": "Đường"
		}, {
			"id": 3184,
			"name": "Lê Quát",
			"pre": "Đường"
		}, {
			"id": 5617,
			"name": "Lê Quốc Trinh",
			"pre": "Đường"
		}, {
			"id": 3240,
			"name": "Lê Sao",
			"pre": "Đường"
		}, {
			"id": 2821,
			"name": "Lê Sát",
			"pre": "Đường"
		}, {
			"id": 3180,
			"name": "Lê Thận",
			"pre": "Đường"
		}, {
			"id": 3238,
			"name": "Lê Thiệt",
			"pre": "Đường"
		}, {
			"id": 3236,
			"name": "Lê Thúc Hoạch",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 3227,
			"name": "Lê Trung Đình",
			"pre": "Đường"
		}, {
			"id": 6680,
			"name": "Lê Văn Phan",
			"pre": "Phố"
		}, {
			"id": 3924,
			"name": "Lê Văn Phấn",
			"pre": "Đường"
		}, {
			"id": 5923,
			"name": "Lê Văn Thứ",
			"pre": "Đường"
		}, {
			"id": 1645,
			"name": "Lê Vĩnh Hòa",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 5292,
			"name": "Lương Đắc Bằng",
			"pre": "Đường"
		}, {
			"id": 3285,
			"name": "Lương Minh Nguyệt",
			"pre": "Đường"
		}, {
			"id": 88,
			"name": "Lương Thế Vinh",
			"pre": "Đường"
		}, {
			"id": 3269,
			"name": "Lương Trúc Đàm",
			"pre": "Đường"
		}, {
			"id": 2646,
			"name": "Lưu Chí Hiếu",
			"pre": "Đường"
		}, {
			"id": 3274,
			"name": "Lũy Bán Bích",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 4147,
			"name": "Lý Thái Tông",
			"pre": "Đường"
		}, {
			"id": 1449,
			"name": "Lý Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 5640,
			"name": "Lý Tuệ",
			"pre": "Đường"
		}, {
			"id": 897,
			"name": "Mã Lò",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 3175,
			"name": "Nghiêm Toản",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 303,
			"name": "Ngụy Như Kon Tum",
			"pre": "Phố"
		}, {
			"id": 3177,
			"name": "Ngụy Như KonTum",
			"pre": "Đường"
		}, {
			"id": 3307,
			"name": "Nguyễn Bá Tòng",
			"pre": "Đường"
		}, {
			"id": 3254,
			"name": "Nguyễn Chích",
			"pre": "Đường"
		}, {
			"id": 3311,
			"name": "Nguyễn Cửu Đàm",
			"pre": "Đường"
		}, {
			"id": 3165,
			"name": "Nguyễn Đỗ Cung",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 6347,
			"name": "Nguyễn Dữ",
			"pre": "Đường"
		}, {
			"id": 3170,
			"name": "Nguyễn Háo Vĩnh",
			"pre": "Đường"
		}, {
			"id": 3301,
			"name": "Nguyễn Hậu",
			"pre": "Đường"
		}, {
			"id": 3225,
			"name": "Nguyễn Hữu Dật",
			"pre": "Đường"
		}, {
			"id": 3138,
			"name": "Nguyễn Hữu Tiến",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 3291,
			"name": "Nguyễn Lộ Trạch",
			"pre": "Đường"
		}, {
			"id": 3259,
			"name": "Nguyễn Lý",
			"pre": "Đường"
		}, {
			"id": 3907,
			"name": "Nguyễn Minh Châu",
			"pre": "Đường"
		}, {
			"id": 3272,
			"name": "Nguyễn Mỹ Ca",
			"pre": "Đường"
		}, {
			"id": 2083,
			"name": "Nguyễn Nghiêm",
			"pre": "Đường"
		}, {
			"id": 5909,
			"name": "Nguyễn Ngọc Nhựt",
			"pre": "Đường"
		}, {
			"id": 5921,
			"name": "Nguyễn Nhữ Lãm",
			"pre": "Đường"
		}, {
			"id": 3168,
			"name": "Nguyễn Quang Diêu",
			"pre": "Đường"
		}, {
			"id": 8465,
			"name": "Nguyễn Quế Anh",
			"pre": "Đường"
		}, {
			"id": 3160,
			"name": "Nguyễn Quý Anh",
			"pre": "Đường"
		}, {
			"id": 3164,
			"name": "Nguyễn Sáng",
			"pre": "Đường"
		}, {
			"id": 294,
			"name": "Nguyễn Sơn",
			"pre": "Đường"
		}, {
			"id": 3288,
			"name": "Nguyễn Súy",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 3161,
			"name": "Nguyễn Thế Truyện",
			"pre": "Đường"
		}, {
			"id": 3178,
			"name": "Nguyễn Thiệu Lâu",
			"pre": "Đường"
		}, {
			"id": 8261,
			"name": "Nguyễn Trọng Phụng",
			"pre": "Đường"
		}, {
			"id": 3185,
			"name": "Nguyễn Trọng Quyền",
			"pre": "Đường"
		}, {
			"id": 752,
			"name": "Nguyễn Trường Tộ",
			"pre": "Đường"
		}, {
			"id": 6079,
			"name": "Nguyễn Văn Dưỡng",
			"pre": "Đường"
		}, {
			"id": 648,
			"name": "Nguyễn Văn Huyên",
			"pre": "Đường"
		}, {
			"id": 3994,
			"name": "Nguyễn Văn Ngọc",
			"pre": "Phố"
		}, {
			"id": 1026,
			"name": "Nguyễn Văn Phú",
			"pre": "Đường"
		}, {
			"id": 5643,
			"name": "Nguyễn Văn Săng",
			"pre": "Đường"
		}, {
			"id": 124,
			"name": "Nguyễn Văn Tố",
			"pre": "Phố"
		}, {
			"id": 3181,
			"name": "Nguyễn Văn Vịnh",
			"pre": "Đường"
		}, {
			"id": 8406,
			"name": "Nguyễn Văn Xảo",
			"pre": "Đường"
		}, {
			"id": 3186,
			"name": "Nguyễn Văn Yến",
			"pre": "Đường"
		}, {
			"id": 3299,
			"name": "Nguyễn Xuân Khoát",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 726,
			"name": "Ông Ích Khiêm",
			"pre": "Đường"
		}, {
			"id": 1460,
			"name": "Phạm Ngọc",
			"pre": "Đường"
		}, {
			"id": 6368,
			"name": "Phạm Ngọc Nhật",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 3167,
			"name": "Phạm Ngọc Thảo",
			"pre": "Đường"
		}, {
			"id": 5871,
			"name": "Phạm Qúy Thích",
			"pre": "Đường"
		}, {
			"id": 7168,
			"name": "Phạm Vấn",
			"pre": "Đường"
		}, {
			"id": 3256,
			"name": "Phạm Văn Nam",
			"pre": "Đường"
		}, {
			"id": 2148,
			"name": "Phạm Văn Xảo",
			"pre": "Đường"
		}, {
			"id": 4127,
			"name": "Phan Anh",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 5092,
			"name": "Phan Văn Năm",
			"pre": "Đường"
		}, {
			"id": 3305,
			"name": "Phố Chợ",
			"pre": "Đường"
		}, {
			"id": 3237,
			"name": "Phú Thọ Hòa",
			"pre": "Đường"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 581,
			"name": "Phùng Chí Kiên",
			"pre": "Phố"
		}, {
			"id": 3247,
			"name": "Quách Đỉnh Bảo",
			"pre": "Đường"
		}, {
			"id": 6295,
			"name": "Quách Hữu Nghiêm",
			"pre": "Đường"
		}, {
			"id": 3270,
			"name": "Quách Vũ",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 3210,
			"name": "S1",
			"pre": "Đường"
		}, {
			"id": 3215,
			"name": "S11",
			"pre": "Đường"
		}, {
			"id": 3216,
			"name": "S2",
			"pre": "Đường"
		}, {
			"id": 9343,
			"name": "S3",
			"pre": "Đường"
		}, {
			"id": 8877,
			"name": "S4",
			"pre": "Đường"
		}, {
			"id": 3212,
			"name": "S5",
			"pre": "Đường"
		}, {
			"id": 7366,
			"name": "S8",
			"pre": "Đường"
		}, {
			"id": 3214,
			"name": "S9",
			"pre": "Đường"
		}, {
			"id": 3229,
			"name": "Sơn Kỳ",
			"pre": "Đường"
		}, {
			"id": 7845,
			"name": "Sơn Kỳ 2",
			"pre": "Đường"
		}, {
			"id": 3204,
			"name": "T1",
			"pre": "Đường"
		}, {
			"id": 3206,
			"name": "T3",
			"pre": "Đường"
		}, {
			"id": 8572,
			"name": "T4",
			"pre": "Đường"
		}, {
			"id": 3209,
			"name": "T4A",
			"pre": "Đường"
		}, {
			"id": 7500,
			"name": "T4B",
			"pre": "Đường"
		}, {
			"id": 3208,
			"name": "T5",
			"pre": "Đường"
		}, {
			"id": 3207,
			"name": "T6",
			"pre": "Đường"
		}, {
			"id": 3205,
			"name": "T8",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6584,
			"name": "Tân Chánh Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 3235,
			"name": "Tân Hương",
			"pre": "Đường"
		}, {
			"id": 3226,
			"name": "Tân Kỳ Tân Quý",
			"pre": "Đường"
		}, {
			"id": 5714,
			"name": "Tân Quý",
			"pre": "Đường"
		}, {
			"id": 3310,
			"name": "Tân Sơn Nhì",
			"pre": "Đường"
		}, {
			"id": 7993,
			"name": "Tân Thắng",
			"pre": "Đường"
		}, {
			"id": 1043,
			"name": "Tân Thành",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 354,
			"name": "Tây Sơn",
			"pre": "Đường"
		}, {
			"id": 2730,
			"name": "Tây Thạnh",
			"pre": "Đường"
		}, {
			"id": 3262,
			"name": "Thạch Lam",
			"pre": "Phố"
		}, {
			"id": 9010,
			"name": "Thẩm Mỹ",
			"pre": "Đường"
		}, {
			"id": 2732,
			"name": "Thành Công",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 3257,
			"name": "Thoại Ngọc Hầu",
			"pre": "Đường"
		}, {
			"id": 2097,
			"name": "Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 368,
			"name": "Tô Hiệu",
			"pre": "Đường"
		}, {
			"id": 3032,
			"name": "Tống Văn Trân",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 7362,
			"name": "Trần Huy Giáp",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 6073,
			"name": "Trần Quang Cơ",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 3179,
			"name": "Trần Quang Quá",
			"pre": "Đường"
		}, {
			"id": 2565,
			"name": "Trần Tấn",
			"pre": "Đường"
		}, {
			"id": 452,
			"name": "Trần Thủ Độ",
			"pre": "Đường"
		}, {
			"id": 3183,
			"name": "Trần Văn Cẩn",
			"pre": "Đường"
		}, {
			"id": 3263,
			"name": "Trần Văn Giáp",
			"pre": "Đường"
		}, {
			"id": 7268,
			"name": "Trần Văn Ngọc",
			"pre": "Đường"
		}, {
			"id": 1788,
			"name": "Trần Văn Ơn",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 2393,
			"name": "Trịnh Đình Thảo",
			"pre": "Đường"
		}, {
			"id": 3279,
			"name": "Trịnh Đình Trọng",
			"pre": "Đường"
		}, {
			"id": 5981,
			"name": "Trịnh Lỗi",
			"pre": "Đường"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 7375,
			"name": "Trương Hảo Vĩnh",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 7357,
			"name": "Trương Vân Lĩnh",
			"pre": "Đường"
		}, {
			"id": 5922,
			"name": "Trương Văn Thành",
			"pre": "Đường"
		}, {
			"id": 1764,
			"name": "Trương Vĩnh Ký",
			"pre": "Đường"
		}, {
			"id": 1972,
			"name": "Tự Do",
			"pre": "Đường"
		}, {
			"id": 5910,
			"name": "Tự Quyết",
			"pre": "Đường"
		}, {
			"id": 733,
			"name": "Văn Cao",
			"pre": "Đường"
		}, {
			"id": 297,
			"name": "Vạn Hạnh",
			"pre": "Đường"
		}, {
			"id": 3169,
			"name": "Võ Công Tồn",
			"pre": "Đường"
		}, {
			"id": 5069,
			"name": "Võ Hoành",
			"pre": "Đường"
		}, {
			"id": 133,
			"name": "Võ Văn Dũng",
			"pre": "Đường"
		}, {
			"id": 2227,
			"name": "Vũ Trọng Phụng",
			"pre": "Đường"
		}, {
			"id": 1322,
			"name": "Vườn Lài",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}, {
			"id": 744,
			"name": "Ỷ Lan",
			"pre": "Đường"
		}, {
			"id": 2740,
			"name": "Yên Đỗ",
			"pre": "Đường"
		}],
		"project": [{
			"id": 253,
			"name": "584 Lilama SHB plaza",
			"lat": 10.776358604431152,
			"lng": 106.63574981689453,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1355,
			"name": "8X Đầm Sen",
			"lat": 10.76988410949707,
			"lng": 106.62624359130859,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 792,
			"name": "An Bình",
			"lat": 10.779189109802246,
			"lng": 106.63515472412109,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1054,
			"name": "An Gia Garden",
			"lat": 10.801912307739258,
			"lng": 106.62579345703125,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 535,
			"name": "Âu Cơ Tower",
			"lat": 10.787341117858887,
			"lng": 106.64099884033203,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1799,
			"name": "Carillon 2",
			"lat": 10.775704383850098,
			"lng": 106.63441467285156,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2353,
			"name": "Carillon 4",
			"lat": 10.778666496276855,
			"lng": 106.635498046875,
			"cats": []
		}, {
			"id": 807,
			"name": "Celadon City",
			"lat": 10.803641319274902,
			"lng": 106.6160888671875,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 483,
			"name": "Đại Thành",
			"lat": 10.774460792541504,
			"lng": 106.63997650146484,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2499,
			"name": "Diamond Lotus Lake View",
			"lat": 10.768801689147949,
			"lng": 106.63234710693359,
			"cats": []
		}, {
			"id": 104,
			"name": "Fortuna - Vườn Lài",
			"lat": 10.788467407226562,
			"lng": 106.62443542480469,
			"cats": [40, 41, 48, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 484,
			"name": "Hiệp Tân Apartment",
			"lat": 10.766552925109863,
			"lng": 106.62686157226562,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2138,
			"name": "IDICO Tân Phú",
			"lat": 10.772834777832031,
			"lng": 106.63404083251953,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 841,
			"name": "Investco Babylon",
			"lat": 10.788970947265625,
			"lng": 106.64048767089844,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1794,
			"name": "KCN Tân Bình",
			"lat": 10.813568115234375,
			"lng": 106.62290191650391,
			"cats": [45, 48, 50, 53, 55, 57, 59]
		}, {
			"id": 572,
			"name": "Khang Gia Tân Hương",
			"lat": 10.789830207824707,
			"lng": 106.61887359619141,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 116,
			"name": "Khang Phú",
			"lat": 10.780019760131836,
			"lng": 106.63719940185547,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 468,
			"name": "Lotus Garden",
			"lat": 10.77422046661377,
			"lng": 106.63590240478516,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2042,
			"name": "Melody Residences 16 Âu Cơ",
			"lat": 10.796043395996094,
			"lng": 106.63746643066406,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 125,
			"name": "Phú Thạnh Apartment",
			"lat": 10.780529022216797,
			"lng": 106.63152313232422,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 690,
			"name": "Quang Thái",
			"lat": 10.766347885131836,
			"lng": 106.62797546386719,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2298,
			"name": "RichStar",
			"lat": 10.771873474121094,
			"lng": 106.6270751953125,
			"cats": []
		}, {
			"id": 133,
			"name": "Ruby Land",
			"lat": 10.763757705688477,
			"lng": 106.63397216796875,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 811,
			"name": "Sacomreal Hòa Bình",
			"lat": 10.769156455993652,
			"lng": 106.63436889648437,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1807,
			"name": "Sacomreal-584",
			"lat": 10.784090042114258,
			"lng": 106.63568115234375,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1952,
			"name": "Sài Gòn Apartment",
			"lat": 10.781603813171387,
			"lng": 106.63746643066406,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2112,
			"name": "Southern Dragon",
			"lat": 10.78961181640625,
			"lng": 106.63997650146484,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1248,
			"name": "Tân Hương Tower",
			"lat": 10.789471626281738,
			"lng": 106.62654113769531,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1516,
			"name": "TaniBuilding Sơn Kỳ 1",
			"lat": 10.809252738952637,
			"lng": 106.60848999023437,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1653,
			"name": "TaniBuilding Sơn Kỳ 2",
			"lat": 10.809303283691406,
			"lng": 106.60848999023437,
			"cats": [55, 324, 326]
		}, {
			"id": 264,
			"name": "Thành Công Tower 1",
			"lat": 10.818291664123535,
			"lng": 106.62880706787109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 140,
			"name": "The Montana",
			"lat": 10.775012016296387,
			"lng": 106.62358093261719,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1397,
			"name": "Topaz Garden",
			"lat": 10.775417327880859,
			"lng": 106.63367462158203,
			"cats": [55, 324, 326]
		}, {
			"id": 1289,
			"name": "Trung Đông Plaza",
			"lat": 10.77448844909668,
			"lng": 106.63519287109375,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2498,
			"name": "Valeo Đầm Sen",
			"lat": 10.781245231628418,
			"lng": 106.64067840576172,
			"cats": []
		}]
	}, {
		"id": 71,
		"name": "Thủ Đức",
		"pre": "Quận",
		"ward": [{
			"id": 11895,
			"name": "Bình Chiểu",
			"pre": "Phường"
		}, {
			"id": 11953,
			"name": "Bình Thọ",
			"pre": "Phường"
		}, {
			"id": 133,
			"name": "Hiệp Bình Chánh",
			"pre": "Phường"
		}, {
			"id": 134,
			"name": "Hiệp Bình Phước",
			"pre": "Phường"
		}, {
			"id": 11916,
			"name": "Linh Chiểu",
			"pre": "Phường"
		}, {
			"id": 135,
			"name": "Linh Đông",
			"pre": "Phường"
		}, {
			"id": 11915,
			"name": "Linh Tây",
			"pre": "Phường"
		}, {
			"id": 136,
			"name": "Linh Trung",
			"pre": "Phường"
		}, {
			"id": 137,
			"name": "Linh Xuân",
			"pre": "Phường"
		}, {
			"id": 138,
			"name": "Tam Bình",
			"pre": "Phường"
		}, {
			"id": 139,
			"name": "Tam Phú",
			"pre": "Phường"
		}, {
			"id": 11845,
			"name": "Trường Thọ",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 3591,
			"name": "182",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 2870,
			"name": "25",
			"pre": "Đường"
		}, {
			"id": 2354,
			"name": "26",
			"pre": "Đường"
		}, {
			"id": 4766,
			"name": "27",
			"pre": "Đường"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 1000,
			"name": "3/2",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 4416,
			"name": "31",
			"pre": "Đường"
		}, {
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 2876,
			"name": "34",
			"pre": "Đường"
		}, {
			"id": 6346,
			"name": "35",
			"pre": "Đường"
		}, {
			"id": 2878,
			"name": "36",
			"pre": "Phố"
		}, {
			"id": 2879,
			"name": "37",
			"pre": "Phố"
		}, {
			"id": 2167,
			"name": "38",
			"pre": "Đường"
		}, {
			"id": 2520,
			"name": "39",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4672,
			"name": "40",
			"pre": "Đường"
		}, {
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 2885,
			"name": "42",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 3061,
			"name": "44",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 2262,
			"name": "46",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 2894,
			"name": "48",
			"pre": "Đường"
		}, {
			"id": 2895,
			"name": "49",
			"pre": "Phố"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 10630,
			"name": "50/27",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 2898,
			"name": "52",
			"pre": "Phố"
		}, {
			"id": 4472,
			"name": "53",
			"pre": "Đường"
		}, {
			"id": 2900,
			"name": "54",
			"pre": "Đường"
		}, {
			"id": 6015,
			"name": "57",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 10331,
			"name": "606",
			"pre": "Đường"
		}, {
			"id": 8689,
			"name": "63",
			"pre": "Đường"
		}, {
			"id": 11002,
			"name": "635",
			"pre": "Đường"
		}, {
			"id": 10719,
			"name": "652",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 4309,
			"name": "7L",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 9845,
			"name": "808",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 4135,
			"name": "B",
			"pre": "Đường"
		}, {
			"id": 3145,
			"name": "B2",
			"pre": "Đường"
		}, {
			"id": 3065,
			"name": "Bắc Ái",
			"pre": "Đường"
		}, {
			"id": 6760,
			"name": "Bình Chiểu",
			"pre": "Đường"
		}, {
			"id": 2090,
			"name": "Bình Đường",
			"pre": "Đường"
		}, {
			"id": 7165,
			"name": "Bình Đường 2",
			"pre": "Đường"
		}, {
			"id": 6380,
			"name": "Bình Đường 3",
			"pre": "Đường"
		}, {
			"id": 4272,
			"name": "Bình Phú",
			"pre": "Đường"
		}, {
			"id": 10643,
			"name": "Bình Triệu",
			"pre": "Đường"
		}, {
			"id": 6759,
			"name": "Cân Nhơn Hòa",
			"pre": "Đường"
		}, {
			"id": 8468,
			"name": "Cao tốc Bình Lợi - Linh Tây",
			"pre": "Đường"
		}, {
			"id": 2132,
			"name": "Cây Keo",
			"pre": "Đường"
		}, {
			"id": 5009,
			"name": "Chân Lý",
			"pre": "Đường"
		}, {
			"id": 2011,
			"name": "Chu Mạnh Trinh",
			"pre": "Đường"
		}, {
			"id": 802,
			"name": "Chu Văn An",
			"pre": "Đường"
		}, {
			"id": 184,
			"name": "Chương Dương",
			"pre": "Đường"
		}, {
			"id": 2350,
			"name": "Công Lý",
			"pre": "Đường"
		}, {
			"id": 6579,
			"name": "Cù Lao Thượng",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 3222,
			"name": "D11",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 4601,
			"name": "D2",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 7506,
			"name": "D52",
			"pre": "Đường"
		}, {
			"id": 7337,
			"name": "D5B",
			"pre": "Đường"
		}, {
			"id": 8159,
			"name": "D6",
			"pre": "Đường"
		}, {
			"id": 5889,
			"name": "D9",
			"pre": "Đường"
		}, {
			"id": 2944,
			"name": "Dân Chủ",
			"pre": "Đường"
		}, {
			"id": 9410,
			"name": "Đặng Thị Rành",
			"pre": "Đường"
		}, {
			"id": 4996,
			"name": "Đặng Văn Bi",
			"pre": "Đường"
		}, {
			"id": 2089,
			"name": "Đào Trinh Nhất",
			"pre": "Đường"
		}, {
			"id": 9286,
			"name": "Đoàn Công Hớn",
			"pre": "Đường"
		}, {
			"id": 474,
			"name": "Đoàn Kết",
			"pre": "Đường"
		}, {
			"id": 797,
			"name": "Độc Lập",
			"pre": "Đường"
		}, {
			"id": 6013,
			"name": "Đồng Bông",
			"pre": "Đường"
		}, {
			"id": 6271,
			"name": "Đông Hưng Thuận 42",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 6580,
			"name": "ĐT 747",
			"pre": "Đường"
		}, {
			"id": 6879,
			"name": "Dương Văn Cam",
			"pre": "Đường"
		}, {
			"id": 5004,
			"name": "Einstein",
			"pre": "Đường"
		}, {
			"id": 6699,
			"name": "Gò Dưa",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 939,
			"name": "Hàn Thuyên",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6198,
			"name": "Hiệp Bình",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 6576,
			"name": "Hiệp Thành 18",
			"pre": "Đường"
		}, {
			"id": 3361,
			"name": "Hồ Biểu Chánh",
			"pre": "Đường"
		}, {
			"id": 4150,
			"name": "Hồ Văn Tư",
			"pre": "Đường"
		}, {
			"id": 965,
			"name": "Hòa Bình",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 5015,
			"name": "Hoàng Diệu 2",
			"pre": "Đường"
		}, {
			"id": 5001,
			"name": "Hồng Đức",
			"pre": "Đường"
		}, {
			"id": 1973,
			"name": "Hữu Nghị",
			"pre": "Đường"
		}, {
			"id": 2638,
			"name": "Kha Vạn Cân",
			"pre": "Đường"
		}, {
			"id": 6583,
			"name": "Khởi Nghĩa Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 3583,
			"name": "Khổng Tử",
			"pre": "Đường"
		}, {
			"id": 1600,
			"name": "Lam Sơn",
			"pre": "Đường"
		}, {
			"id": 348,
			"name": "Lê Quý Đôn",
			"pre": "Đường"
		}, {
			"id": 5119,
			"name": "Lê Thị Hoa",
			"pre": "Đường"
		}, {
			"id": 5013,
			"name": "Lê Văn Chí",
			"pre": "Đường"
		}, {
			"id": 8822,
			"name": "Lê Văn Ninh",
			"pre": "Đường"
		}, {
			"id": 7038,
			"name": "Lê Văn Tách",
			"pre": "Đường"
		}, {
			"id": 5705,
			"name": "Linh Chiểu",
			"pre": "Đường"
		}, {
			"id": 5971,
			"name": "Linh Đông",
			"pre": "Đường"
		}, {
			"id": 5736,
			"name": "Linh Tây",
			"pre": "Đường"
		}, {
			"id": 5014,
			"name": "Linh Trung",
			"pre": "Đường"
		}, {
			"id": 6993,
			"name": "Linh Xuân",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 5005,
			"name": "Lương Khải Siêu",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 5554,
			"name": "Lý Tế Xuyên",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 6455,
			"name": "Nam Thọ 1",
			"pre": "Đường"
		}, {
			"id": 1836,
			"name": "Ngô Chí Quốc",
			"pre": "Đường"
		}, {
			"id": 7814,
			"name": "Ngọc Lan",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 5010,
			"name": "Nguyễn Bá Luật",
			"pre": "Đường"
		}, {
			"id": 560,
			"name": "Nguyễn Bỉnh Khiêm",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 4993,
			"name": "Nguyễn Văn Bá",
			"pre": "Đường"
		}, {
			"id": 7997,
			"name": "Nguyễn Văn Lịch",
			"pre": "Đường"
		}, {
			"id": 351,
			"name": "Nguyễn Viết Xuân",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 1045,
			"name": "Pasteur",
			"pre": "Đường"
		}, {
			"id": 837,
			"name": "Phạm Văn Chiêu",
			"pre": "Đường"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 6095,
			"name": "Phạm Văn Sáng",
			"pre": "Đường"
		}, {
			"id": 229,
			"name": "Phan Huy Chú",
			"pre": "Đường"
		}, {
			"id": 6962,
			"name": "Phú Châu",
			"pre": "Đường"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 2145,
			"name": "Quốc lộ 1K",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 10480,
			"name": "Rạch Lùng",
			"pre": "Đường"
		}, {
			"id": 6949,
			"name": "Sông Đà",
			"pre": "Đường"
		}, {
			"id": 5667,
			"name": "Tam Bình",
			"pre": "Đường"
		}, {
			"id": 7158,
			"name": "Tam Châu",
			"pre": "Đường"
		}, {
			"id": 7008,
			"name": "Tam Hà",
			"pre": "Đường"
		}, {
			"id": 6865,
			"name": "Tâm Tâm Xã",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6584,
			"name": "Tân Chánh Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 2927,
			"name": "Tân Lập",
			"pre": "Đường"
		}, {
			"id": 7081,
			"name": "Tân Sơn Nhất",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 2097,
			"name": "Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 7815,
			"name": "Tỉnh lộ 43",
			"pre": "Đường"
		}, {
			"id": 795,
			"name": "Tô Ngọc Vân",
			"pre": "Đường"
		}, {
			"id": 328,
			"name": "Tô Vĩnh Diện",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 6707,
			"name": "Trần Văn Nữa",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 2091,
			"name": "Trịnh Phong Đáng",
			"pre": "Đường"
		}, {
			"id": 2225,
			"name": "Trưng Nhị",
			"pre": "Đường"
		}, {
			"id": 356,
			"name": "Trưng Trắc",
			"pre": "Đường"
		}, {
			"id": 10675,
			"name": "Trưng Trắc B",
			"pre": "Đường"
		}, {
			"id": 1094,
			"name": "Trường Sơn",
			"pre": "Đường"
		}, {
			"id": 8575,
			"name": "Trường Thọ",
			"pre": "Đường"
		}, {
			"id": 2098,
			"name": "Truông Tre",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 9754,
			"name": "Trương Văn Ngư",
			"pre": "Đường"
		}, {
			"id": 5737,
			"name": "Ụ Ghe",
			"pre": "Đường"
		}, {
			"id": 8092,
			"name": "Vành Đai 2",
			"pre": "Đường"
		}, {
			"id": 6331,
			"name": "Vành Đai Đông",
			"pre": "Đường"
		}, {
			"id": 7209,
			"name": "Võ Nguyên Giáp",
			"pre": "Đường"
		}, {
			"id": 6577,
			"name": "Võ Quảng",
			"pre": "Đường"
		}, {
			"id": 6404,
			"name": "Võ Tiên Sư",
			"pre": "Đường"
		}, {
			"id": 5011,
			"name": "Võ Văn Ngân",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}, {
			"id": 8136,
			"name": "Xa lộ Đại Hàn",
			"pre": "Đường"
		}, {
			"id": 5820,
			"name": "Xa Lộ Hà Nội",
			"pre": "Đường"
		}, {
			"id": 4795,
			"name": "Xuyên Á",
			"pre": "Đường"
		}],
		"project": [{
			"id": 314,
			"name": "4S Linh Đông",
			"lat": 10.844369888305664,
			"lng": 106.740478515625,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 132,
			"name": "4S Riverside Garden",
			"lat": 10.822030067443848,
			"lng": 106.71848297119141,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 910,
			"name": "Aquila Plaza",
			"lat": 10.844707489013672,
			"lng": 106.76338195800781,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2281,
			"name": "Bình Chiểu Riverside City",
			"lat": 10.880406379699707,
			"lng": 106.73389434814453,
			"cats": []
		}, {
			"id": 1187,
			"name": "Cheery 4 Complex",
			"lat": 10.861504554748535,
			"lng": 106.73915863037109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2043,
			"name": "Chương Dương Golden Land",
			"lat": 10.837179183959961,
			"lng": 106.75639343261719,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1239,
			"name": "Đạt Gia Residence",
			"lat": 10.85980224609375,
			"lng": 106.73918914794922,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1145,
			"name": "Depot Metro Tower",
			"lat": 10.856234550476074,
			"lng": 106.77384948730469,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1942,
			"name": "First Home Thủ Đức",
			"lat": 10.838191032409668,
			"lng": 106.75347137451172,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2058,
			"name": "Fortune Apartment",
			"lat": 10.865657806396484,
			"lng": 106.75960540771484,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 884,
			"name": "Gia Phú Hưng",
			"lat": 10.86403751373291,
			"lng": 106.78116607666016,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 552,
			"name": "Green House",
			"lat": 10.861849784851074,
			"lng": 106.75863647460937,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1503,
			"name": "Greenview Garden",
			"lat": 10.844460487365723,
			"lng": 106.71942901611328,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 848,
			"name": "Jamona Home Resort",
			"lat": 10.870881080627441,
			"lng": 106.71728515625,
			"cats": [40, 44, 57, 59, 325]
		}, {
			"id": 2279,
			"name": "KDC Bình Chiểu 2",
			"lat": 10.876730918884277,
			"lng": 106.72614288330078,
			"cats": []
		}, {
			"id": 2015,
			"name": "KDC Hồng Long",
			"lat": 10.848804473876953,
			"lng": 106.72303009033203,
			"cats": [40, 41, 52, 53, 325]
		}, {
			"id": 1742,
			"name": "KĐT Bình Chiểu",
			"lat": 10.874020576477051,
			"lng": 106.72344207763672,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 318,
			"name": "Lan Phương MHBR",
			"lat": 10.847046852111816,
			"lng": 106.75447082519531,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2285,
			"name": "Lavita Garden",
			"lat": 10.833784103393555,
			"lng": 106.76066589355469,
			"cats": []
		}, {
			"id": 1383,
			"name": "Linh Tây",
			"lat": 10.862103462219238,
			"lng": 106.75846862792969,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1512,
			"name": "Linh Trung",
			"lat": 10.860907554626465,
			"lng": 106.78052520751953,
			"cats": [48, 59, 324, 326]
		}, {
			"id": 1607,
			"name": "Lotus Apartment",
			"lat": 10.871048927307129,
			"lng": 106.75885772705078,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1254,
			"name": "Mỹ An 3G",
			"lat": 10.825702667236328,
			"lng": 106.72133636474609,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1599,
			"name": "Mỹ Kim",
			"lat": 10.825518608093262,
			"lng": 106.71983337402344,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 693,
			"name": "Mỹ Long",
			"lat": 10.825508117675781,
			"lng": 106.71920013427734,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 342,
			"name": "Newtown Apartment",
			"lat": 10.824013710021973,
			"lng": 106.71964263916016,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2129,
			"name": "Opal Riverside",
			"lat": 10.826943397521973,
			"lng": 106.72802734375,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2414,
			"name": "Opal Tower",
			"lat": 10.833154678344727,
			"lng": 106.72740936279297,
			"cats": []
		}, {
			"id": 2505,
			"name": "Phú Đông 2",
			"lat": 10.861220359802246,
			"lng": 106.74376678466797,
			"cats": []
		}, {
			"id": 1169,
			"name": "Savico Hiệp Bình Phước Tam Bình",
			"lat": 10.864169120788574,
			"lng": 106.72797393798828,
			"cats": [40, 48, 324, 325, 326]
		}, {
			"id": 783,
			"name": "Sông Đà Riverside",
			"lat": 10.85432243347168,
			"lng": 106.72010040283203,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2330,
			"name": "Spring House",
			"lat": 10.825255393981934,
			"lng": 106.71565246582031,
			"cats": []
		}, {
			"id": 135,
			"name": "Sunview I, II",
			"lat": 10.861505508422852,
			"lng": 106.73935699462891,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1257,
			"name": "Sunview Town",
			"lat": 10.865708351135254,
			"lng": 106.72743225097656,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 479,
			"name": "T.N.T Building",
			"lat": 10.85752010345459,
			"lng": 106.74083709716797,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 699,
			"name": "Tam Bình",
			"lat": 10.867647171020508,
			"lng": 106.73378753662109,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 326,
			"name": "TDH Bình Chiểu",
			"lat": 10.876738548278809,
			"lng": 106.72492218017578,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 492,
			"name": "TDH Trường Thọ",
			"lat": 10.839807510375977,
			"lng": 106.76273345947266,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2504,
			"name": "TĐV Linh Đông",
			"lat": 10.844245910644531,
			"lng": 106.74092864990234,
			"cats": []
		}, {
			"id": 2483,
			"name": "TĐV Tam Phú",
			"lat": 10.861220359802246,
			"lng": 106.73960113525391,
			"cats": []
		}, {
			"id": 358,
			"name": "Tecco Linh Đông",
			"lat": 10.849214553833008,
			"lng": 106.74643707275391,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1728,
			"name": "The Navita",
			"lat": 10.864215850830078,
			"lng": 106.73346710205078,
			"cats": [48, 55, 59, 283, 324, 326]
		}, {
			"id": 1587,
			"name": "The Sun City Lan Phương",
			"lat": 10.870701789855957,
			"lng": 106.71963500976562,
			"cats": [40]
		}, {
			"id": 2010,
			"name": "The Sun City Riverview",
			"lat": 10.84968090057373,
			"lng": 106.71417236328125,
			"cats": [40, 41, 52, 325]
		}, {
			"id": 1010,
			"name": "Thu Duc Garden Homes",
			"lat": 10.838390350341797,
			"lng": 106.71282196044922,
			"cats": [40, 48, 52, 55, 59, 325]
		}, {
			"id": 2034,
			"name": "Vạn Phúc Riverside City",
			"lat": 10.83814525604248,
			"lng": 106.71215057373047,
			"cats": [41, 48, 52, 55, 59, 324, 325, 326]
		}]
	}]
}, {
	"code": "HN",
	"name": "Hà Nội",
	"district": [{
		"id": 2,
		"name": "Ba Đình",
		"pre": "Quận",
		"ward": [{
			"id": 59,
			"name": "Cống Vị",
			"pre": "Phường"
		}, {
			"id": 60,
			"name": "Điện Biên",
			"pre": "Phường"
		}, {
			"id": 61,
			"name": "Đội Cấn",
			"pre": "Phường"
		}, {
			"id": 62,
			"name": "Giảng Võ",
			"pre": "Phường"
		}, {
			"id": 63,
			"name": "Kim Mã",
			"pre": "Phường"
		}, {
			"id": 64,
			"name": "Liễu Giai",
			"pre": "Phường"
		}, {
			"id": 65,
			"name": "Ngọc Hà",
			"pre": "Phường"
		}, {
			"id": 66,
			"name": "Ngọc Khánh",
			"pre": "Phường"
		}, {
			"id": 67,
			"name": "Nguyễn Trung Trực",
			"pre": "Phường"
		}, {
			"id": 68,
			"name": "Phúc Xá",
			"pre": "Phường"
		}, {
			"id": 69,
			"name": "Quán Thánh",
			"pre": "Phường"
		}, {
			"id": 70,
			"name": "Thành Công",
			"pre": "Phường"
		}, {
			"id": 71,
			"name": "Trúc Bạch",
			"pre": "Phường"
		}, {
			"id": 72,
			"name": "Vĩnh Phúc",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 92,
			"name": "An Xá",
			"pre": "Phố"
		}, {
			"id": 800,
			"name": "Bà Huyện Thanh Quan",
			"pre": "Phố"
		}, {
			"id": 801,
			"name": "Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 3980,
			"name": "Bưởi",
			"pre": "Đường"
		}, {
			"id": 845,
			"name": "Cao Bá Quát",
			"pre": "Đường"
		}, {
			"id": 3981,
			"name": "Cầu Giấy",
			"pre": "Đường"
		}, {
			"id": 799,
			"name": "Châu Long",
			"pre": "Phố"
		}, {
			"id": 802,
			"name": "Chu Văn An",
			"pre": "Đường"
		}, {
			"id": 3984,
			"name": "Chùa Một Cột",
			"pre": "Đường"
		}, {
			"id": 803,
			"name": "Cơ Xá",
			"pre": "Đường"
		}, {
			"id": 3985,
			"name": "Cửa Bắc",
			"pre": "Đường"
		}, {
			"id": 185,
			"name": "Cửa Đông",
			"pre": "Phố"
		}, {
			"id": 257,
			"name": "Cửa Nam",
			"pre": "Phố"
		}, {
			"id": 7894,
			"name": "Đại Yên",
			"pre": "Phố"
		}, {
			"id": 798,
			"name": "Đặng Dung",
			"pre": "Phố"
		}, {
			"id": 91,
			"name": "Đặng Tất",
			"pre": "Phố"
		}, {
			"id": 1198,
			"name": "Đào Tấn",
			"pre": "Đường"
		}, {
			"id": 397,
			"name": "Đê La Thành",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 797,
			"name": "Độc Lập",
			"pre": "Đường"
		}, {
			"id": 805,
			"name": "Đốc Ngữ",
			"pre": "Phố"
		}, {
			"id": 72,
			"name": "Đội Cấn",
			"pre": "Đường"
		}, {
			"id": 715,
			"name": "Đội Nhân",
			"pre": "Đường"
		}, {
			"id": 2020,
			"name": "Dương Đức Hiền",
			"pre": "Đường"
		}, {
			"id": 776,
			"name": "Giang Văn Minh",
			"pre": "Đường"
		}, {
			"id": 438,
			"name": "Giảng Võ",
			"pre": "Phố"
		}, {
			"id": 3986,
			"name": "Hàng Bún",
			"pre": "Phố"
		}, {
			"id": 193,
			"name": "Hàng Dầu",
			"pre": "Phố"
		}, {
			"id": 716,
			"name": "Hàng Than",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 337,
			"name": "Hoàng Văn Thụ",
			"pre": "Đường"
		}, {
			"id": 717,
			"name": "Hòe Nhai",
			"pre": "Phố"
		}, {
			"id": 114,
			"name": "Hồng Hà",
			"pre": "Đường"
		}, {
			"id": 156,
			"name": "Hồng Phúc",
			"pre": "Phố"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 90,
			"name": "Huyện Thanh Quan",
			"pre": "Phố"
		}, {
			"id": 78,
			"name": "Huỳnh Thúc Kháng",
			"pre": "Đường"
		}, {
			"id": 765,
			"name": "Khu tập thể Thành Công",
			"pre": "Đường"
		}, {
			"id": 2146,
			"name": "Khúc Hạo",
			"pre": "Đường"
		}, {
			"id": 5741,
			"name": "Kim Mã",
			"pre": "Phố"
		}, {
			"id": 720,
			"name": "Kim Mã Thượng",
			"pre": "Phố"
		}, {
			"id": 3999,
			"name": "Lạc Chính",
			"pre": "Đường"
		}, {
			"id": 69,
			"name": "Láng Hạ",
			"pre": "Phố"
		}, {
			"id": 89,
			"name": "Lê Duẩn",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 379,
			"name": "Lê Trực",
			"pre": "Đường"
		}, {
			"id": 721,
			"name": "Liễu Giai",
			"pre": "Phố"
		}, {
			"id": 762,
			"name": "Linh Lang",
			"pre": "Phố"
		}, {
			"id": 933,
			"name": "Mạc Đĩnh Chi",
			"pre": "Đường"
		}, {
			"id": 722,
			"name": "Nam Cao",
			"pre": "Phố"
		}, {
			"id": 760,
			"name": "Nam Tràng",
			"pre": "Phố"
		}, {
			"id": 3998,
			"name": "Nghĩa Dũng",
			"pre": "Đường"
		}, {
			"id": 285,
			"name": "Ngô Gia Tự",
			"pre": "Đường"
		}, {
			"id": 3997,
			"name": "Ngọc Hà",
			"pre": "Đường"
		}, {
			"id": 723,
			"name": "Ngọc Khánh",
			"pre": "Phố"
		}, {
			"id": 757,
			"name": "Ngũ Xã",
			"pre": "Phố"
		}, {
			"id": 1277,
			"name": "Nguyễn Biểu",
			"pre": "Đường"
		}, {
			"id": 931,
			"name": "Nguyễn Cảnh Chân",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 756,
			"name": "Nguyễn Công Hoan",
			"pre": "Đường"
		}, {
			"id": 433,
			"name": "Nguyên Hồng",
			"pre": "Đường"
		}, {
			"id": 3996,
			"name": "Nguyễn Huy Thông",
			"pre": "Đường"
		}, {
			"id": 3995,
			"name": "Nguyễn Khắc Hiếu",
			"pre": "Đường"
		}, {
			"id": 724,
			"name": "Nguyễn Khắc Nhu",
			"pre": "Phố"
		}, {
			"id": 1883,
			"name": "Nguyễn Phạm Tuân",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 927,
			"name": "Nguyễn Thiệp",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 725,
			"name": "Nguyễn Trung Trực",
			"pre": "Đường"
		}, {
			"id": 752,
			"name": "Nguyễn Trường Tộ",
			"pre": "Đường"
		}, {
			"id": 3994,
			"name": "Nguyễn Văn Ngọc",
			"pre": "Phố"
		}, {
			"id": 3993,
			"name": "Núi Trúc",
			"pre": "Đường"
		}, {
			"id": 726,
			"name": "Ông Ích Khiêm",
			"pre": "Đường"
		}, {
			"id": 751,
			"name": "Phạm Hồng Thái",
			"pre": "Đường"
		}, {
			"id": 3917,
			"name": "Phạm Huy Thông",
			"pre": "Phố"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 727,
			"name": "Phan Huy Ích",
			"pre": "Đường"
		}, {
			"id": 749,
			"name": "Phan Kế Bính",
			"pre": "Đường"
		}, {
			"id": 576,
			"name": "Phó Đức Chính",
			"pre": "Phố"
		}, {
			"id": 3992,
			"name": "Phúc Xá",
			"pre": "Đường"
		}, {
			"id": 8256,
			"name": "Quần Ngựa",
			"pre": "Đường"
		}, {
			"id": 728,
			"name": "Quán Thánh",
			"pre": "Đường"
		}, {
			"id": 748,
			"name": "Sơn Tây",
			"pre": "Phố"
		}, {
			"id": 3991,
			"name": "Tân Ấp",
			"pre": "Đường"
		}, {
			"id": 729,
			"name": "Thanh Bảo",
			"pre": "Phố"
		}, {
			"id": 2732,
			"name": "Thành Công",
			"pre": "Đường"
		}, {
			"id": 6119,
			"name": "Thành Công Bắc",
			"pre": "Phố"
		}, {
			"id": 2115,
			"name": "Thanh Niên",
			"pre": "Đường"
		}, {
			"id": 1009,
			"name": "Tôn Thất Đạm",
			"pre": "Đường"
		}, {
			"id": 730,
			"name": "Tôn Thất Thiệp",
			"pre": "Phố"
		}, {
			"id": 743,
			"name": "Trần Huy Liệu",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 3035,
			"name": "Trần Tế Xương",
			"pre": "Đường"
		}, {
			"id": 731,
			"name": "Trấn Vũ",
			"pre": "Phố"
		}, {
			"id": 390,
			"name": "Trịnh Hoài Đức",
			"pre": "Đường"
		}, {
			"id": 3989,
			"name": "Trúc Bạch",
			"pre": "Đường"
		}, {
			"id": 3988,
			"name": "Vạn Bảo",
			"pre": "Đường"
		}, {
			"id": 733,
			"name": "Văn Cao",
			"pre": "Đường"
		}, {
			"id": 737,
			"name": "Vạn Phúc",
			"pre": "Phố"
		}, {
			"id": 5726,
			"name": "Vĩnh Phúc",
			"pre": "Đường"
		}, {
			"id": 86,
			"name": "Vũ Thạnh",
			"pre": "Đường"
		}, {
			"id": 3084,
			"name": "Yên Ninh",
			"pre": "Đường"
		}, {
			"id": 735,
			"name": "Yên Phụ",
			"pre": "Phố"
		}, {
			"id": 736,
			"name": "Yên Thế",
			"pre": "Đường"
		}],
		"project": [{
			"id": 660,
			"name": "134 Quán Thánh",
			"lat": 21.042512893676758,
			"lng": 105.84234619140625,
			"cats": [55, 324, 326]
		}, {
			"id": 1272,
			"name": "15-17 Ngọc Khánh",
			"lat": 21.026773452758789,
			"lng": 105.81558990478516,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 245,
			"name": "16 Liễu Giai",
			"lat": 21.034103393554687,
			"lng": 105.81442260742187,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 666,
			"name": "222 Đội Cấn",
			"lat": 21.035457611083984,
			"lng": 105.81873321533203,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1401,
			"name": "6 Đội Nhân",
			"lat": 21.041635513305664,
			"lng": 105.81187438964844,
			"cats": [55, 324, 326]
		}, {
			"id": 302,
			"name": "671 Hoàng Hoa Thám",
			"lat": 21.047056198120117,
			"lng": 105.80774688720703,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 197,
			"name": "Artex Building 172 Ngọc Khánh",
			"lat": 21.024168014526367,
			"lng": 105.81959533691406,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 640,
			"name": "B1 Giảng Võ",
			"lat": 21.028631210327148,
			"lng": 105.82160186767578,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1833,
			"name": "B6 Giảng Võ",
			"lat": 21.029693603515625,
			"lng": 105.82151031494141,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1671,
			"name": "Biển Bắc",
			"lat": 21.02751350402832,
			"lng": 105.80941772460937,
			"cats": [50, 55, 324, 326]
		}, {
			"id": 1021,
			"name": "Candeo Hotels Hà Nội",
			"lat": 21.035575866699219,
			"lng": 105.81836700439453,
			"cats": [48, 55, 57, 59, 324, 326]
		}, {
			"id": 2031,
			"name": "CC Đường Sắt - 35 Láng Hạ",
			"lat": 21.0196475982666,
			"lng": 105.81826019287109,
			"cats": [55, 324, 326]
		}, {
			"id": 2506,
			"name": "Chung cư 31 Láng Hạ",
			"lat": 21.020389556884766,
			"lng": 105.81776428222656,
			"cats": []
		}, {
			"id": 2264,
			"name": "Chung cư 379 Đội Cấn",
			"lat": 21.038848876953125,
			"lng": 105.81421661376953,
			"cats": []
		}, {
			"id": 641,
			"name": "D2 Giảng Võ",
			"lat": 21.025936126708984,
			"lng": 105.82218933105469,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1808,
			"name": "Discovery Complex 2",
			"lat": 21.032218933105469,
			"lng": 105.83313751220703,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1411,
			"name": "DMC Tower",
			"lat": 21.029407501220703,
			"lng": 105.81020355224609,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 212,
			"name": "Flamingo Tower",
			"lat": 21.0352783203125,
			"lng": 105.82131195068359,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 1980,
			"name": "Giảng Võ Lake View Building",
			"lat": 21.026834487915039,
			"lng": 105.82060241699219,
			"cats": [41, 48, 50]
		}, {
			"id": 435,
			"name": "Hanoi Daewoo Hotel",
			"lat": 21.030689239501953,
			"lng": 105.81179046630859,
			"cats": [41, 48, 55, 57, 59, 163]
		}, {
			"id": 1472,
			"name": "HAREC Building",
			"lat": 21.022069931030273,
			"lng": 105.81874084472656,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1474,
			"name": "HITTC Building",
			"lat": 21.03080940246582,
			"lng": 105.821533203125,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 295,
			"name": "Hòa Bình Green",
			"lat": 21.041240692138672,
			"lng": 105.80784606933594,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 243,
			"name": "ITT Building",
			"lat": 21.036609649658203,
			"lng": 105.81565856933594,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1398,
			"name": "Lotte Center Hà Nội",
			"lat": 21.031654357910156,
			"lng": 105.81290435791016,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 237,
			"name": "Newtatco 21 Láng Hạ",
			"lat": 21.021005630493164,
			"lng": 105.81826782226562,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1792,
			"name": "Newtatco Vĩnh Phúc",
			"lat": 21.042627334594727,
			"lng": 105.80751800537109,
			"cats": [55, 324, 326]
		}, {
			"id": 39,
			"name": "Ngọc Khánh Plaza",
			"lat": 21.026321411132813,
			"lng": 105.81111907958984,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 206,
			"name": "NIKKO",
			"lat": 21.041913986206055,
			"lng": 105.8468017578125,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1189,
			"name": "Platinum Residences",
			"lat": 21.027637481689453,
			"lng": 105.81667327880859,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 187,
			"name": "Resco Tower",
			"lat": 21.0295467376709,
			"lng": 105.81145477294922,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 246,
			"name": "Rose Garden",
			"lat": 21.024799346923828,
			"lng": 105.81883239746094,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 153,
			"name": "Skyline Tower",
			"lat": 21.043102264404297,
			"lng": 105.84161376953125,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 57,
			"name": "Thành Công Tower 57 Láng Hạ",
			"lat": 21.019260406494141,
			"lng": 105.81726837158203,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1481,
			"name": "Thành Đông",
			"lat": 21.031955718994141,
			"lng": 105.82638549804687,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 546,
			"name": "Thanh Niên Plaza",
			"lat": 21.037805557250977,
			"lng": 105.81545257568359,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 289,
			"name": "The Lancaster Hà Nội",
			"lat": 21.028713226318359,
			"lng": 105.82358551025391,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1479,
			"name": "TID Tower",
			"lat": 21.036886215209961,
			"lng": 105.81446075439453,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1478,
			"name": "Toserco Building",
			"lat": 21.030817031860352,
			"lng": 105.82013702392578,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1461,
			"name": "Trúc Bạch",
			"lat": 21.040447235107422,
			"lng": 105.82469177246094,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2292,
			"name": "Vinhomes Metropolis - Liễu Giai",
			"lat": 21.035015106201172,
			"lng": 105.81455230712891,
			"cats": []
		}, {
			"id": 211,
			"name": "VIT Tower",
			"lat": 21.029567718505859,
			"lng": 105.81179809570312,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2089,
			"name": "X1-26 Liễu Giai",
			"lat": 21.035438537597656,
			"lng": 105.81414031982422,
			"cats": [48, 50, 55, 59, 324, 326]
		}]
	}, {
		"id": 18,
		"name": "Ba Vì",
		"pre": "Huyện",
		"ward": [{
			"id": 9650,
			"name": "Ba Trại",
			"pre": "Xã"
		}, {
			"id": 9654,
			"name": "Ba Vì",
			"pre": "Xã"
		}, {
			"id": 9658,
			"name": "Cẩm Lĩnh",
			"pre": "Xã"
		}, {
			"id": 9659,
			"name": "Cam Thượng",
			"pre": "Xã"
		}, {
			"id": 9660,
			"name": "Châu Sơn",
			"pre": "Xã"
		}, {
			"id": 9662,
			"name": "Chu Minh",
			"pre": "Xã"
		}, {
			"id": 9665,
			"name": "Cổ Đô",
			"pre": "Xã"
		}, {
			"id": 9668,
			"name": "Đông Quang",
			"pre": "Xã"
		}, {
			"id": 9670,
			"name": "Đồng Thái",
			"pre": "Xã"
		}, {
			"id": 9672,
			"name": "Khánh Thượng",
			"pre": "Xã"
		}, {
			"id": 9678,
			"name": "Minh Châu",
			"pre": "Xã"
		}, {
			"id": 9681,
			"name": "Minh Quang",
			"pre": "Xã"
		}, {
			"id": 9684,
			"name": "Phong Vân",
			"pre": "Xã"
		}, {
			"id": 9687,
			"name": "Phú Châu",
			"pre": "Xã"
		}, {
			"id": 9690,
			"name": "Phú Cường",
			"pre": "Xã"
		}, {
			"id": 9693,
			"name": "Phú Đông",
			"pre": "Xã"
		}, {
			"id": 9694,
			"name": "Phú Phương",
			"pre": "Xã"
		}, {
			"id": 9696,
			"name": "Phú Sơn",
			"pre": "Xã"
		}, {
			"id": 9699,
			"name": "Sơn Đà",
			"pre": "Xã"
		}, {
			"id": 9703,
			"name": "Tản Hồng",
			"pre": "Xã"
		}, {
			"id": 9706,
			"name": "Tản Lĩnh",
			"pre": "Xã"
		}, {
			"id": 9646,
			"name": "Tây Đằng",
			"pre": "Thị trấn"
		}, {
			"id": 9707,
			"name": "Thái Hòa",
			"pre": "Xã"
		}, {
			"id": 9709,
			"name": "Thuần Mỹ",
			"pre": "Xã"
		}, {
			"id": 9710,
			"name": "Thụy An",
			"pre": "Xã"
		}, {
			"id": 9711,
			"name": "Tiên Phong",
			"pre": "Xã"
		}, {
			"id": 9712,
			"name": "Tòng Bạt",
			"pre": "Xã"
		}, {
			"id": 9713,
			"name": "Vân Hòa",
			"pre": "Xã"
		}, {
			"id": 9714,
			"name": "Vạn Thắng",
			"pre": "Xã"
		}, {
			"id": 9715,
			"name": "Vật Lại",
			"pre": "Xã"
		}, {
			"id": 9716,
			"name": "Yên Bài",
			"pre": "Xã"
		}],
		"street": [{
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 7432,
			"name": "Tản Lĩnh",
			"pre": "Đường"
		}, {
			"id": 9166,
			"name": "Tỉnh Lộ 411C",
			"pre": "Đường"
		}, {
			"id": 8671,
			"name": "Tỉnh lộ 414",
			"pre": "Đường"
		}, {
			"id": 768,
			"name": "Tỉnh lộ 84",
			"pre": "Đường"
		}, {
			"id": 8995,
			"name": "Tỉnh Lộ 87A",
			"pre": "Đường"
		}, {
			"id": 10654,
			"name": "Tỉnh lộ 88",
			"pre": "Đường"
		}, {
			"id": 7912,
			"name": "Vĩnh Hằng",
			"pre": "Đường"
		}],
		"project": [{
			"id": 973,
			"name": "Country House",
			"lat": 20.997102737426758,
			"lng": 105.63552856445312,
			"cats": [40, 44, 48, 55, 325]
		}, {
			"id": 562,
			"name": "Green Villas 4",
			"lat": 21.018815994262695,
			"lng": 105.44033813476562,
			"cats": [40, 44, 325]
		}, {
			"id": 957,
			"name": "Ngọc Viên Islands",
			"lat": 21.073888778686523,
			"lng": 105.45497131347656,
			"cats": [44, 48, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 966,
			"name": "Nine Ivory Eco",
			"lat": 21.034170150756836,
			"lng": 105.44195556640625,
			"cats": [40, 44, 48, 55, 59, 325]
		}, {
			"id": 457,
			"name": "Suối Hai Villa",
			"lat": 21.150575637817383,
			"lng": 105.37836456298828,
			"cats": [44, 48, 52, 55, 57, 59, 325]
		}, {
			"id": 501,
			"name": "Tản Viên Villas",
			"lat": 21.0748291015625,
			"lng": 105.41476440429687,
			"cats": [40, 44, 52, 55, 57, 325]
		}, {
			"id": 459,
			"name": "The Grand Arena Hill",
			"lat": 21.056848526000977,
			"lng": 105.32900238037109,
			"cats": [41, 44, 48, 55, 57, 59, 325]
		}, {
			"id": 505,
			"name": "The Queen Villas",
			"lat": 21.034278869628906,
			"lng": 105.43471527099609,
			"cats": [44, 59, 325]
		}, {
			"id": 888,
			"name": "Yên Bài Top Hills",
			"lat": 21.034170150756836,
			"lng": 105.44195556640625,
			"cats": [44, 48, 55, 57, 59, 325]
		}, {
			"id": 504,
			"name": "Yên Bài Villas 2",
			"lat": 21.036722183227539,
			"lng": 105.43798065185547,
			"cats": [44, 48, 55, 59, 325]
		}]
	}, {
		"id": 718,
		"name": "Bắc Từ Liêm",
		"pre": "Quận",
		"ward": [{
			"id": 11369,
			"name": "Cổ Nhuế 1",
			"pre": "Phường"
		}, {
			"id": 12112,
			"name": "Cổ Nhuế 2",
			"pre": "Phường"
		}, {
			"id": 11371,
			"name": "Đông Ngạc",
			"pre": "Xã"
		}, {
			"id": 12097,
			"name": "Đức Thắng",
			"pre": "Phường"
		}, {
			"id": 11372,
			"name": "Liên Mạc",
			"pre": "Xã"
		}, {
			"id": 11374,
			"name": "Minh Khai",
			"pre": "Xã"
		}, {
			"id": 11376,
			"name": "Phú Diễn",
			"pre": "Phường"
		}, {
			"id": 12113,
			"name": "Phúc Diễn",
			"pre": "Phường"
		}, {
			"id": 11378,
			"name": "Tây Tựu",
			"pre": "Xã"
		}, {
			"id": 11379,
			"name": "Thượng Cát",
			"pre": "Xã"
		}, {
			"id": 11380,
			"name": "Thụy Phương",
			"pre": "Xã"
		}, {
			"id": 11382,
			"name": "Xuân Đỉnh",
			"pre": "Xã"
		}, {
			"id": 12114,
			"name": "Xuân Tảo",
			"pre": "Phường"
		}],
		"street": [{
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 4291,
			"name": "69",
			"pre": "Đường"
		}, {
			"id": 6000,
			"name": "An Dương Vương",
			"pre": "Đường"
		}, {
			"id": 629,
			"name": "Cầu Diễn",
			"pre": "Đường"
		}, {
			"id": 6122,
			"name": "Cầu Vồng",
			"pre": "Đường"
		}, {
			"id": 612,
			"name": "Cổ Nhuế",
			"pre": "Đường"
		}, {
			"id": 2100,
			"name": "Đặng Thùy Trâm",
			"pre": "Đường"
		}, {
			"id": 8969,
			"name": "Điện Cơ",
			"pre": "Đường"
		}, {
			"id": 7642,
			"name": "Đình Quán",
			"pre": "Đường"
		}, {
			"id": 2764,
			"name": "Đỗ Nhuận",
			"pre": "Phố"
		}, {
			"id": 660,
			"name": "Đông Ngạc",
			"pre": "đường"
		}, {
			"id": 7831,
			"name": "Đức Diễn",
			"pre": "Đường"
		}, {
			"id": 626,
			"name": "Hồ Tùng Mậu",
			"pre": "Đường"
		}, {
			"id": 3748,
			"name": "Hoàng Công Chất",
			"pre": "Đường"
		}, {
			"id": 6953,
			"name": "Hoàng Liên",
			"pre": "Đường"
		}, {
			"id": 616,
			"name": "Hoàng Quốc Việt",
			"pre": "Đường"
		}, {
			"id": 6035,
			"name": "Hoàng Tăng Bí",
			"pre": "Đường"
		}, {
			"id": 661,
			"name": "K1B",
			"pre": "Đường"
		}, {
			"id": 6132,
			"name": "K4",
			"pre": "Đường"
		}, {
			"id": 6432,
			"name": "Kẻ Vẽ",
			"pre": "Phố"
		}, {
			"id": 8086,
			"name": "Kiều Mai",
			"pre": "Đường"
		}, {
			"id": 1480,
			"name": "Lê Văn Hiến",
			"pre": "Đường"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 618,
			"name": "Liên Mạc",
			"pre": "đường"
		}, {
			"id": 8061,
			"name": "Ngọa Long",
			"pre": "Đường"
		}, {
			"id": 653,
			"name": "Nguyễn Hoàng Tôn",
			"pre": "đường"
		}, {
			"id": 648,
			"name": "Nguyễn Văn Huyên",
			"pre": "Đường"
		}, {
			"id": 7774,
			"name": "Nguyên Xá",
			"pre": "Đường"
		}, {
			"id": 1041,
			"name": "Nhật Tảo",
			"pre": "Đường"
		}, {
			"id": 613,
			"name": "Phạm Tuấn Tài",
			"pre": "Phố"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 3377,
			"name": "Phan Bá Vành",
			"pre": "Đường"
		}, {
			"id": 9653,
			"name": "Phố Đăm",
			"pre": "Đường"
		}, {
			"id": 10236,
			"name": "Phố Viên",
			"pre": "Đường"
		}, {
			"id": 6772,
			"name": "Phú Diễn",
			"pre": "Đường"
		}, {
			"id": 9291,
			"name": "Phú Kiều",
			"pre": "Đường"
		}, {
			"id": 10360,
			"name": "Phú Minh",
			"pre": "Đường"
		}, {
			"id": 5699,
			"name": "Phúc Diễn",
			"pre": "Đường"
		}, {
			"id": 10632,
			"name": "Phúc Lý",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 7654,
			"name": "Quốc lộ 70",
			"pre": "Đường"
		}, {
			"id": 7094,
			"name": "Sông Nhuệ",
			"pre": "Đường"
		}, {
			"id": 6384,
			"name": "Tân Nhuệ",
			"pre": "Đường"
		}, {
			"id": 10278,
			"name": "Tân Nhuệ 2",
			"pre": "Đường"
		}, {
			"id": 3835,
			"name": "Tân Phong",
			"pre": "Đường"
		}, {
			"id": 672,
			"name": "Tân Xuân",
			"pre": "Đường"
		}, {
			"id": 6629,
			"name": "Tăng Thiết Giáp",
			"pre": "Đường"
		}, {
			"id": 8100,
			"name": "Tây Tựu",
			"pre": "Đường"
		}, {
			"id": 641,
			"name": "Thượng Cát",
			"pre": "Phố"
		}, {
			"id": 6389,
			"name": "Thụy Phương",
			"pre": "Đường"
		}, {
			"id": 582,
			"name": "Trần Cung",
			"pre": "Phố"
		}, {
			"id": 3245,
			"name": "Văn Tiến Dũng",
			"pre": "Đường"
		}, {
			"id": 710,
			"name": "Vân Trì",
			"pre": "Đường"
		}, {
			"id": 8095,
			"name": "Văn Trì",
			"pre": "Đường"
		}, {
			"id": 7608,
			"name": "Võ Qúy Huân",
			"pre": "Đường"
		}, {
			"id": 628,
			"name": "Xuân Đỉnh",
			"pre": "Đường"
		}, {
			"id": 781,
			"name": "Xuân La",
			"pre": "Đường"
		}, {
			"id": 8094,
			"name": "Yên Nội",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1885,
			"name": "120 Hoàng Quốc Việt BQP",
			"lat": 21.049116134643555,
			"lng": 105.79246520996094,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2494,
			"name": "An Bình City",
			"lat": 21.0495662689209,
			"lng": 105.77859497070312,
			"cats": []
		}, {
			"id": 1758,
			"name": "An Bình Tower",
			"lat": 21.062240600585938,
			"lng": 105.78049468994141,
			"cats": [48, 59, 324, 326]
		}, {
			"id": 287,
			"name": "B5 Cầu Diễn",
			"lat": 21.049613952636719,
			"lng": 105.77079772949219,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 288,
			"name": "CT2A Nghĩa Đô",
			"lat": 21.050569534301758,
			"lng": 105.79224395751953,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 273,
			"name": "CT3 Cổ Nhuế",
			"lat": 21.050870895385742,
			"lng": 105.78612518310547,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2073,
			"name": "Ecohome 1",
			"lat": 21.086338043212891,
			"lng": 105.78287506103516,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2111,
			"name": "Ecohome 2",
			"lat": 21.083633422851563,
			"lng": 105.78407287597656,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1404,
			"name": "Goldmark City",
			"lat": 21.046224594116211,
			"lng": 105.76752471923828,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1030,
			"name": "Green Stars",
			"lat": 21.052398681640625,
			"lng": 105.78018188476562,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 184,
			"name": "Habico Tower",
			"lat": 21.053640365600586,
			"lng": 105.78202056884766,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 244,
			"name": "Intracom 2 Cầu Diễn",
			"lat": 21.0419864654541,
			"lng": 105.75904083251953,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1603,
			"name": "Intracom 3",
			"lat": 21.065158843994141,
			"lng": 105.76840972900391,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 76,
			"name": "KĐT Cổ Nhuế",
			"lat": 21.052017211914063,
			"lng": 105.78415679931641,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 369,
			"name": "Khu Ngoại Giao Đoàn",
			"lat": 21.065511703491211,
			"lng": 105.79527282714844,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1229,
			"name": "Kim Cương Xuân Đỉnh",
			"lat": 21.071130752563477,
			"lng": 105.79109191894531,
			"cats": [55, 324, 326]
		}, {
			"id": 2421,
			"name": "Lakeside Risidences - Goldmark City",
			"lat": 21.040225982666016,
			"lng": 105.76752471923828,
			"cats": []
		}, {
			"id": 849,
			"name": "Long Giang Tower",
			"lat": 21.071636199951172,
			"lng": 105.78974151611328,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 292,
			"name": "Megastar Dominium C2",
			"lat": 21.068620681762695,
			"lng": 105.78630828857422,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2433,
			"name": "N01-T1 Ngoại Giao Đoàn",
			"lat": 21.063302993774414,
			"lng": 105.79435729980469,
			"cats": []
		}, {
			"id": 2434,
			"name": "N01-T2 Ngoại Giao Đoàn",
			"lat": 21.063022613525391,
			"lng": 105.79432678222656,
			"cats": []
		}, {
			"id": 2436,
			"name": "N01-T3 Ngoại Giao Đoàn",
			"lat": 21.063085556030273,
			"lng": 105.79482269287109,
			"cats": []
		}, {
			"id": 2437,
			"name": "N01-T4 Ngoại Giao Đoàn",
			"lat": 21.06303596496582,
			"lng": 105.79541778564453,
			"cats": []
		}, {
			"id": 2440,
			"name": "N01-T5 Ngoại Giao Đoàn",
			"lat": 21.06303596496582,
			"lng": 105.79597473144531,
			"cats": []
		}, {
			"id": 2441,
			"name": "N01-T6 Ngoại Giao Đoàn",
			"lat": 21.063056945800781,
			"lng": 105.79627227783203,
			"cats": []
		}, {
			"id": 2442,
			"name": "N01-T8 Ngoại Giao Đoàn",
			"lat": 21.063655853271484,
			"lng": 105.79613494873047,
			"cats": []
		}, {
			"id": 2443,
			"name": "N02-T1 Ngoại Giao Đoàn",
			"lat": 21.067001342773437,
			"lng": 105.79808807373047,
			"cats": []
		}, {
			"id": 2445,
			"name": "N02-T2 Ngoại Giao Đoàn",
			"lat": 21.066650390625,
			"lng": 105.79803466796875,
			"cats": []
		}, {
			"id": 2446,
			"name": "N02-T3 Ngoại Giao Đoàn",
			"lat": 21.066110610961914,
			"lng": 105.79805755615234,
			"cats": []
		}, {
			"id": 2448,
			"name": "N03-T1 Ngoại Giao Đoàn",
			"lat": 21.065336227416992,
			"lng": 105.79802703857422,
			"cats": []
		}, {
			"id": 2449,
			"name": "N03-T2 Ngoại Giao Đoàn",
			"lat": 21.065017700195313,
			"lng": 105.79893493652344,
			"cats": []
		}, {
			"id": 2453,
			"name": "N03-T3\u0026T4 Ngoại Giao Đoàn",
			"lat": 21.064430236816406,
			"lng": 105.79842376708984,
			"cats": []
		}, {
			"id": 2454,
			"name": "N03-T5 Ngoại Giao Đoàn",
			"lat": 21.064184188842773,
			"lng": 105.79916381835938,
			"cats": []
		}, {
			"id": 2455,
			"name": "N03-T8 Ngoại Giao Đoàn",
			"lat": 21.064998626708984,
			"lng": 105.80028533935547,
			"cats": []
		}, {
			"id": 2456,
			"name": "N04A Ngoại Giao Đoàn",
			"lat": 21.066186904907227,
			"lng": 105.80116271972656,
			"cats": []
		}, {
			"id": 2457,
			"name": "N04B Ngoại Giao Đoàn",
			"lat": 21.065879821777344,
			"lng": 105.80138397216797,
			"cats": []
		}, {
			"id": 995,
			"name": "Nghĩa Đô",
			"lat": 21.050580978393555,
			"lng": 105.79224395751953,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1812,
			"name": "Resco Cổ Nhuế",
			"lat": 21.0681209564209,
			"lng": 105.78330230712891,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2074,
			"name": "Scitech Tower",
			"lat": 21.041013717651367,
			"lng": 105.76511383056641,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1255,
			"name": "Thành phố Giao lưu",
			"lat": 21.052183151245117,
			"lng": 105.77771759033203,
			"cats": [40, 48, 50, 55, 324, 325, 326]
		}, {
			"id": 575,
			"name": "Tổng cục 5 Bộ Công An",
			"lat": 21.050596237182617,
			"lng": 105.78292083740234,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1203,
			"name": "VC7 Housing Complex - 136 Hồ Tùng Mậu",
			"lat": 21.045133590698242,
			"lng": 105.76779174804688,
			"cats": [48, 50, 55, 324, 325, 326]
		}, {
			"id": 1535,
			"name": "Vibex Từ Liêm",
			"lat": 21.087102890014648,
			"lng": 105.77709197998047,
			"cats": [40, 324, 325, 326]
		}]
	}, {
		"id": 7,
		"name": "Cầu Giấy",
		"pre": "Quận",
		"ward": [{
			"id": 17,
			"name": "Dịch Vọng",
			"pre": "Phường"
		}, {
			"id": 9446,
			"name": "Dịch Vọng Hậu",
			"pre": "Phường"
		}, {
			"id": 9453,
			"name": "Mai Dịch",
			"pre": "Phường"
		}, {
			"id": 9437,
			"name": "Nghĩa Đô",
			"pre": "Phường"
		}, {
			"id": 9451,
			"name": "Nghĩa Tân",
			"pre": "Phường"
		}, {
			"id": 9440,
			"name": "Quan Hoa",
			"pre": "Phường"
		}, {
			"id": 9448,
			"name": "Trung Hòa",
			"pre": "Phường"
		}, {
			"id": 9455,
			"name": "Yên Hòa",
			"pre": "Phường"
		}],
		"street": [{
			"id": 8731,
			"name": "Bảo Tháp",
			"pre": "Đường"
		}, {
			"id": 571,
			"name": "Bờ Sông",
			"pre": "Đường"
		}, {
			"id": 3980,
			"name": "Bưởi",
			"pre": "Đường"
		}, {
			"id": 3219,
			"name": "C4",
			"pre": "Đường"
		}, {
			"id": 3981,
			"name": "Cầu Giấy",
			"pre": "Đường"
		}, {
			"id": 634,
			"name": "Cầu vượt Mai Dịch",
			"pre": "Đường"
		}, {
			"id": 10644,
			"name": "CD2",
			"pre": "Đường"
		}, {
			"id": 694,
			"name": "Chùa Hà",
			"pre": "Phố"
		}, {
			"id": 6431,
			"name": "Cốm Vòng",
			"pre": "Đường"
		}, {
			"id": 2100,
			"name": "Đặng Thùy Trâm",
			"pre": "Đường"
		}, {
			"id": 572,
			"name": "Dịch Vọng",
			"pre": "Đường"
		}, {
			"id": 6284,
			"name": "Dịch Vọng Hậu",
			"pre": "Phố"
		}, {
			"id": 885,
			"name": "Điện Biên 1",
			"pre": "Đường"
		}, {
			"id": 5615,
			"name": "Đỗ Quang",
			"pre": "Phố"
		}, {
			"id": 627,
			"name": "Doãn Kế Thiện",
			"pre": "Phố"
		}, {
			"id": 6013,
			"name": "Đồng Bông",
			"pre": "Đường"
		}, {
			"id": 635,
			"name": "Đông Quan",
			"pre": "Đường"
		}, {
			"id": 964,
			"name": "Dương Đình Nghệ",
			"pre": "Đường"
		}, {
			"id": 2023,
			"name": "Dương Quảng Hàm",
			"pre": "Đường"
		}, {
			"id": 573,
			"name": "Duy Tân",
			"pre": "Đường"
		}, {
			"id": 891,
			"name": "Hàm Nghi",
			"pre": "Đường"
		}, {
			"id": 626,
			"name": "Hồ Tùng Mậu",
			"pre": "Đường"
		}, {
			"id": 637,
			"name": "Hoa Bằng",
			"pre": "Đường"
		}, {
			"id": 311,
			"name": "Hoàng Đạo Thúy",
			"pre": "Phố"
		}, {
			"id": 322,
			"name": "Hoàng Minh Giám",
			"pre": "Đường"
		}, {
			"id": 332,
			"name": "Hoàng Ngân",
			"pre": "Đường"
		}, {
			"id": 616,
			"name": "Hoàng Quốc Việt",
			"pre": "Đường"
		}, {
			"id": 688,
			"name": "Hoàng Sâm",
			"pre": "Phố"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 575,
			"name": "K800A",
			"pre": "Đường"
		}, {
			"id": 323,
			"name": "Khuất Duy Tiến",
			"pre": "Đường"
		}, {
			"id": 621,
			"name": "Lạc Long Quân",
			"pre": "Đường"
		}, {
			"id": 5655,
			"name": "Láng",
			"pre": "Đường"
		}, {
			"id": 595,
			"name": "Láng Hòa Lạc",
			"pre": "Đường"
		}, {
			"id": 650,
			"name": "Lê Đức Thọ",
			"pre": "Đường"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 10253,
			"name": "Mạc Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 9597,
			"name": "Mạc Thái Tông",
			"pre": "Đường"
		}, {
			"id": 619,
			"name": "Mai Dịch",
			"pre": "Phố"
		}, {
			"id": 6982,
			"name": "Nam Trung Yên",
			"pre": "Đường"
		}, {
			"id": 642,
			"name": "Nghĩa Tân",
			"pre": "Phố"
		}, {
			"id": 2408,
			"name": "Nguyễn Chánh",
			"pre": "Đường"
		}, {
			"id": 636,
			"name": "Nguyễn Cơ Thạch",
			"pre": "Đường"
		}, {
			"id": 7430,
			"name": "Nguyễn Đình Hoàn",
			"pre": "Đường"
		}, {
			"id": 3700,
			"name": "Nguyễn Đổng Chi",
			"pre": "Phố"
		}, {
			"id": 685,
			"name": "Nguyễn Khả Trạc",
			"pre": "Đường"
		}, {
			"id": 577,
			"name": "Nguyễn Khang",
			"pre": "Đường"
		}, {
			"id": 617,
			"name": "Nguyễn Khánh Toàn",
			"pre": "Đường"
		}, {
			"id": 646,
			"name": "Nguyễn Ngọc Vũ",
			"pre": "Phố"
		}, {
			"id": 681,
			"name": "Nguyễn Phong Sắc",
			"pre": "Đường"
		}, {
			"id": 304,
			"name": "Nguyễn Thị Định",
			"pre": "Đường"
		}, {
			"id": 615,
			"name": "Nguyễn Thị Thập",
			"pre": "Đường"
		}, {
			"id": 648,
			"name": "Nguyễn Văn Huyên",
			"pre": "Đường"
		}, {
			"id": 3705,
			"name": "Nhật Tân",
			"pre": "Phố"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 6995,
			"name": "Phạm Nhật Duật",
			"pre": "Đường"
		}, {
			"id": 579,
			"name": "Phạm Thận Duật",
			"pre": "Đường"
		}, {
			"id": 613,
			"name": "Phạm Tuấn Tài",
			"pre": "Phố"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 677,
			"name": "Phan Văn Trường",
			"pre": "Phố"
		}, {
			"id": 581,
			"name": "Phùng Chí Kiên",
			"pre": "Phố"
		}, {
			"id": 5868,
			"name": "Quan Hoa",
			"pre": "Đường"
		}, {
			"id": 317,
			"name": "Quan Nhân",
			"pre": "Phố"
		}, {
			"id": 1171,
			"name": "Thành Thái",
			"pre": "Đường"
		}, {
			"id": 10178,
			"name": "Thọ Tháp",
			"pre": "Đường"
		}, {
			"id": 368,
			"name": "Tô Hiệu",
			"pre": "Đường"
		}, {
			"id": 675,
			"name": "Tôn Thất Thuyết",
			"pre": "Đường"
		}, {
			"id": 225,
			"name": "Trần Bình",
			"pre": "Phố"
		}, {
			"id": 582,
			"name": "Trần Cung",
			"pre": "Phố"
		}, {
			"id": 611,
			"name": "Trần Đăng Ninh",
			"pre": "Đường"
		}, {
			"id": 651,
			"name": "Trần Duy Hưng",
			"pre": "Đường"
		}, {
			"id": 7210,
			"name": "Trần Kim Xuyến",
			"pre": "Đường"
		}, {
			"id": 674,
			"name": "Trần Quốc Hoàn",
			"pre": "Phố"
		}, {
			"id": 583,
			"name": "Trần Quý Kiên",
			"pre": "Phố"
		}, {
			"id": 4282,
			"name": "Trần Thái Tông",
			"pre": "Đường"
		}, {
			"id": 654,
			"name": "Trần Tử Bình",
			"pre": "Phố"
		}, {
			"id": 9077,
			"name": "Trần Vĩ",
			"pre": "Đường"
		}, {
			"id": 9091,
			"name": "Trần Vỹ",
			"pre": "Phố"
		}, {
			"id": 8815,
			"name": "Tràng Hào",
			"pre": "Đường"
		}, {
			"id": 8829,
			"name": "Tràng Hòa",
			"pre": "Đường"
		}, {
			"id": 676,
			"name": "Trung Hòa",
			"pre": "Phố"
		}, {
			"id": 585,
			"name": "Trung Kính",
			"pre": "Phố"
		}, {
			"id": 5712,
			"name": "Trung Yên",
			"pre": "Đường"
		}, {
			"id": 608,
			"name": "Trung Yên 1",
			"pre": "Đường"
		}, {
			"id": 655,
			"name": "Trung Yên 10",
			"pre": "Đường"
		}, {
			"id": 673,
			"name": "Trung Yên 10A",
			"pre": "Đường"
		}, {
			"id": 587,
			"name": "Trung Yên 10B",
			"pre": "Đường"
		}, {
			"id": 10901,
			"name": "Trung Yên 10D",
			"pre": "Đường"
		}, {
			"id": 607,
			"name": "Trung Yên 11",
			"pre": "Đường"
		}, {
			"id": 657,
			"name": "Trung Yên 11A",
			"pre": "Phố"
		}, {
			"id": 7273,
			"name": "Trung Yên 11B",
			"pre": "Đường"
		}, {
			"id": 9141,
			"name": "Trung Yên 11C",
			"pre": "Đường"
		}, {
			"id": 5883,
			"name": "Trung Yên 12",
			"pre": "Đường"
		}, {
			"id": 592,
			"name": "Trung Yên 13",
			"pre": "Đường"
		}, {
			"id": 5851,
			"name": "Trung Yên 14",
			"pre": "Đường"
		}, {
			"id": 9055,
			"name": "Trung Yên 14A",
			"pre": "Đường"
		}, {
			"id": 9151,
			"name": "Trung Yên 14B",
			"pre": "Đường"
		}, {
			"id": 8069,
			"name": "Trung Yên 15",
			"pre": "Đường"
		}, {
			"id": 606,
			"name": "Trung Yên 15A",
			"pre": "Đường"
		}, {
			"id": 659,
			"name": "Trung Yên 15B",
			"pre": "Đường"
		}, {
			"id": 670,
			"name": "Trung Yên 15C",
			"pre": "Đường"
		}, {
			"id": 593,
			"name": "Trung Yên 15D",
			"pre": "Đường"
		}, {
			"id": 10945,
			"name": "Trung Yên 17",
			"pre": "Đường"
		}, {
			"id": 604,
			"name": "Trung Yên 2",
			"pre": "Đường"
		}, {
			"id": 662,
			"name": "Trung Yên 3",
			"pre": "Đường"
		}, {
			"id": 667,
			"name": "Trung Yên 4",
			"pre": "Đường"
		}, {
			"id": 600,
			"name": "Trung Yên 5",
			"pre": "Đường"
		}, {
			"id": 603,
			"name": "Trung Yên 6",
			"pre": "Đường"
		}, {
			"id": 663,
			"name": "Trung Yên 7",
			"pre": "Đường"
		}, {
			"id": 665,
			"name": "Trung Yên 8",
			"pre": "Đường"
		}, {
			"id": 601,
			"name": "Trung Yên 9",
			"pre": "Đường"
		}, {
			"id": 9145,
			"name": "Trung Yên 9A",
			"pre": "Đường"
		}, {
			"id": 5859,
			"name": "Tuổi Trẻ",
			"pre": "Đường"
		}, {
			"id": 7021,
			"name": "Võ Chí Công",
			"pre": "Đường"
		}, {
			"id": 7608,
			"name": "Võ Qúy Huân",
			"pre": "Đường"
		}, {
			"id": 5755,
			"name": "Vũ Phạm Hàm",
			"pre": "Đường"
		}, {
			"id": 10523,
			"name": "X4",
			"pre": "Đường"
		}, {
			"id": 602,
			"name": "Xuân Thủy",
			"pre": "Đường"
		}, {
			"id": 664,
			"name": "Yên Hòa",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1803,
			"name": "113 Trung Kính",
			"lat": 21.020910263061523,
			"lng": 105.79001617431641,
			"cats": [55, 324, 326]
		}, {
			"id": 2102,
			"name": "125 Hoàng Ngân",
			"lat": 21.009384155273438,
			"lng": 105.80545806884766,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 308,
			"name": "151 Hoàng Quốc Việt",
			"lat": 21.045936584472656,
			"lng": 105.79936981201172,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1419,
			"name": "169 Nguyễn Ngọc Vũ",
			"lat": 21.012062072753906,
			"lng": 105.80797576904297,
			"cats": [48, 50, 55, 163]
		}, {
			"id": 61,
			"name": "173 Xuân Thủy",
			"lat": 21.036239624023438,
			"lng": 105.78537750244141,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2119,
			"name": "219 Trung Kính",
			"lat": 21.021633148193359,
			"lng": 105.79073333740234,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1435,
			"name": "2T Corporation",
			"lat": 21.038515090942383,
			"lng": 105.78017425537109,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1922,
			"name": "30 Phạm Văn Đồng",
			"lat": 21.043857574462891,
			"lng": 105.78136444091797,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 60,
			"name": "335 Cầu Giấy",
			"lat": 21.035289764404297,
			"lng": 105.79185485839844,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 824,
			"name": "789 Bộ Quốc Phòng - 147 Hoàng Quốc Việt",
			"lat": 21.045589447021484,
			"lng": 105.79972076416016,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1426,
			"name": "95 Cầu Giấy",
			"lat": 21.03138542175293,
			"lng": 105.79999542236328,
			"cats": [48, 50]
		}, {
			"id": 1433,
			"name": "98 Hoàng Ngân",
			"lat": 21.009975433349609,
			"lng": 105.80380249023437,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1422,
			"name": "AC Building",
			"lat": 21.032266616821289,
			"lng": 105.78335571289062,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1700,
			"name": "An Lạc – Hoàng Ngân",
			"lat": 21.007539749145508,
			"lng": 105.81053924560547,
			"cats": [55, 324, 326]
		}, {
			"id": 1384,
			"name": "An Sinh",
			"lat": 21.050689697265625,
			"lng": 105.79093170166016,
			"cats": [41, 52, 325]
		}, {
			"id": 228,
			"name": "ATS",
			"lat": 21.046337127685547,
			"lng": 105.78240203857422,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1424,
			"name": "Âu Việt Building",
			"lat": 21.03681755065918,
			"lng": 105.77175140380859,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 269,
			"name": "AZ Lâm Viên Complex",
			"lat": 21.040990829467773,
			"lng": 105.79005432128906,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1421,
			"name": "Bảo Anh Building",
			"lat": 21.0319766998291,
			"lng": 105.78861236572266,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2355,
			"name": "CC1 Hà Đô Parkside",
			"lat": 21.034706115722656,
			"lng": 105.79234313964844,
			"cats": []
		}, {
			"id": 278,
			"name": "Chelsea Park",
			"lat": 21.019016265869141,
			"lng": 105.79320526123047,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 195,
			"name": "CMC Tower",
			"lat": 21.030727386474609,
			"lng": 105.78433227539062,
			"cats": [48, 50, 55]
		}, {
			"id": 1541,
			"name": "Constrexim Complex",
			"lat": 21.035444259643555,
			"lng": 105.78131103515625,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2427,
			"name": "CT4 Vimeco II",
			"lat": 21.008962631225586,
			"lng": 105.79312896728516,
			"cats": []
		}, {
			"id": 1886,
			"name": "CT6 Constrexim Yên Hòa",
			"lat": 21.023576736450195,
			"lng": 105.78856658935547,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2137,
			"name": "CTM 299 Cầu Giấy",
			"lat": 21.03462028503418,
			"lng": 105.79354095458984,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1214,
			"name": "CTM Building 139 Cầu Giấy",
			"lat": 21.031925201416016,
			"lng": 105.79920196533203,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1036,
			"name": "D’. Palais De Louis - Nguyễn Văn Huyên",
			"lat": 21.041427612304688,
			"lng": 105.79787445068359,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 277,
			"name": "D11 Sunrise Building",
			"lat": 21.030603408813477,
			"lng": 105.7879638671875,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1581,
			"name": "D22 Bộ Tư Lệnh Biên Phòng",
			"lat": 21.033130645751953,
			"lng": 105.77578735351562,
			"cats": [55, 59, 324, 326]
		}, {
			"id": 1425,
			"name": "Đại Phát Building",
			"lat": 21.031734466552734,
			"lng": 105.7828369140625,
			"cats": [48, 50, 163]
		}, {
			"id": 225,
			"name": "Diamond Building",
			"lat": 21.031093597412109,
			"lng": 105.78078460693359,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 773,
			"name": "Discovery Complex",
			"lat": 21.035051345825195,
			"lng": 105.79497528076172,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1798,
			"name": "Đông Đô",
			"lat": 21.049934387207031,
			"lng": 105.79525756835937,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 25,
			"name": "Đông Nam Trần Duy Hưng",
			"lat": 21.005596160888672,
			"lng": 105.79886627197266,
			"cats": [41, 48, 50, 52, 55, 59, 324, 326]
		}, {
			"id": 23,
			"name": "ĐTM Dịch Vọng",
			"lat": 21.029237747192383,
			"lng": 105.79385375976562,
			"cats": [48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 2463,
			"name": "E4 Tower",
			"lat": 21.015848159790039,
			"lng": 105.797607421875,
			"cats": []
		}, {
			"id": 178,
			"name": "Elinco",
			"lat": 21.030088424682617,
			"lng": 105.78333282470703,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 510,
			"name": "Eurowindow Multi Complex",
			"lat": 21.013393402099609,
			"lng": 105.80317687988281,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 238,
			"name": "FLC Twin Towers",
			"lat": 21.03449821472168,
			"lng": 105.79551696777344,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 233,
			"name": "FPT Cầu Giấy",
			"lat": 21.03074836730957,
			"lng": 105.78260803222656,
			"cats": [41, 48, 50, 59, 163]
		}, {
			"id": 384,
			"name": "Grand Plaza",
			"lat": 21.007749557495117,
			"lng": 105.79705810546875,
			"cats": [48, 50, 55, 57, 59]
		}, {
			"id": 1096,
			"name": "Green Park Tower",
			"lat": 21.02239990234375,
			"lng": 105.78666687011719,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1018,
			"name": "Ha Do Park View",
			"lat": 21.027078628540039,
			"lng": 105.79344940185547,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 210,
			"name": "Hoa Binh International",
			"lat": 21.046566009521484,
			"lng": 105.79515838623047,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1418,
			"name": "Hoàng Linh Building",
			"lat": 21.031942367553711,
			"lng": 105.78289031982422,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2048,
			"name": "Học Viện Quốc Phòng",
			"lat": 21.049873352050781,
			"lng": 105.7996826171875,
			"cats": [40, 48, 55, 324, 325, 326]
		}, {
			"id": 1037,
			"name": "Home City - Trung Kính Complex",
			"lat": 21.016098022460937,
			"lng": 105.79248809814453,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1416,
			"name": "Housing",
			"lat": 21.021160125732422,
			"lng": 105.79067993164062,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 186,
			"name": "Indochina Plaza",
			"lat": 21.036001205444336,
			"lng": 105.78246307373047,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 216,
			"name": "Intracom",
			"lat": 21.029634475708008,
			"lng": 105.78565216064453,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 560,
			"name": "KĐT mới Cầu Giấy",
			"lat": 21.024765014648438,
			"lng": 105.7857666015625,
			"cats": [40, 48, 50, 55, 59, 324, 326]
		}, {
			"id": 2104,
			"name": "Khu nhà ở HV Tư pháp",
			"lat": 21.008228302001953,
			"lng": 105.80918884277344,
			"cats": [325]
		}, {
			"id": 668,
			"name": "Khu Nhà ở KD Dịch Vọng",
			"lat": 21.03361701965332,
			"lng": 105.79091644287109,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 31,
			"name": "Làng Quốc tế Thăng Long",
			"lat": 21.040250778198242,
			"lng": 105.79108428955078,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1436,
			"name": "LOD Building",
			"lat": 21.031229019165039,
			"lng": 105.787841796875,
			"cats": [48, 50, 55, 163]
		}, {
			"id": 918,
			"name": "Mai Trang Complex",
			"lat": 21.032352447509766,
			"lng": 105.77965545654297,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 612,
			"name": "Mandarin Garden",
			"lat": 21.004484176635742,
			"lng": 105.79862976074219,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1417,
			"name": "Maple Tower",
			"lat": 21.03013801574707,
			"lng": 105.78422546386719,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2507,
			"name": "MB Grand Tower",
			"lat": 21.007514953613281,
			"lng": 105.80690765380859,
			"cats": []
		}, {
			"id": 2468,
			"name": "MBLand Central Point Trung Kính",
			"lat": 21.020978927612305,
			"lng": 105.79106140136719,
			"cats": []
		}, {
			"id": 1431,
			"name": "Mitec Tower",
			"lat": 21.0197811126709,
			"lng": 105.78430938720703,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 312,
			"name": "N04 Trần Duy Hưng",
			"lat": 21.008878707885742,
			"lng": 105.80025482177734,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 311,
			"name": "N05 Trần Duy Hưng",
			"lat": 21.0069580078125,
			"lng": 105.80107879638672,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1281,
			"name": "N105 Nguyễn Phong Sắc",
			"lat": 21.039976119995117,
			"lng": 105.78977203369141,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 37,
			"name": "Nam Trung Yên",
			"lat": 21.014148712158203,
			"lng": 105.78872680664062,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2322,
			"name": "Paragon Tower",
			"lat": 21.031339645385742,
			"lng": 105.78209686279297,
			"cats": []
		}, {
			"id": 2075,
			"name": "PV Oil 148 Hoàng Quốc Việt",
			"lat": 21.046619415283203,
			"lng": 105.79055786132812,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 242,
			"name": "PVI Tower",
			"lat": 21.024009704589844,
			"lng": 105.78898620605469,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 290,
			"name": "Richland Southern",
			"lat": 21.036092758178711,
			"lng": 105.78330230712891,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 192,
			"name": "San Nam",
			"lat": 21.031383514404297,
			"lng": 105.78311157226562,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1365,
			"name": "Sky Park Residence",
			"lat": 21.027273178100586,
			"lng": 105.7860107421875,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1185,
			"name": "SkyView Trần Thái Tông",
			"lat": 21.03331184387207,
			"lng": 105.78974914550781,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1180,
			"name": "Somerset Hòa Bình",
			"lat": 21.046663284301758,
			"lng": 105.79512023925781,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1370,
			"name": "Sông Đà 7",
			"lat": 21.011241912841797,
			"lng": 105.79534149169922,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1091,
			"name": "Star Tower",
			"lat": 21.02497673034668,
			"lng": 105.79122924804687,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1936,
			"name": "Tây Nam Đại học Thương Mại",
			"lat": 21.035680770874023,
			"lng": 105.77120208740234,
			"cats": [55, 324, 326]
		}, {
			"id": 1849,
			"name": "The Premier Hà Nội",
			"lat": 21.029111862182617,
			"lng": 105.78462982177734,
			"cats": [48, 50, 51, 55, 59, 163, 324, 325, 326]
		}, {
			"id": 912,
			"name": "TIG Tower (ThangLong Royal Plaza)",
			"lat": 21.028127670288086,
			"lng": 105.77920532226562,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1432,
			"name": "Tòa nhà 3A",
			"lat": 21.032144546508789,
			"lng": 105.78260040283203,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1932,
			"name": "Tràng An GP - Complex",
			"lat": 21.04437255859375,
			"lng": 105.80323028564453,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1,
			"name": "Trung Hòa Nhân Chính",
			"lat": 21.008365631103516,
			"lng": 105.80290985107422,
			"cats": [40, 50, 51, 57, 324, 325, 326]
		}, {
			"id": 47,
			"name": "Trung Yên",
			"lat": 21.015531539916992,
			"lng": 105.79941558837891,
			"cats": [50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 164,
			"name": "Trung Yên I",
			"lat": 21.014348983764648,
			"lng": 105.79640960693359,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 154,
			"name": "Trung Yên Plaza",
			"lat": 21.014102935791016,
			"lng": 105.80178833007812,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1393,
			"name": "TTC Tower",
			"lat": 21.030759811401367,
			"lng": 105.78192901611328,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 221,
			"name": "VA Tower",
			"lat": 21.030353546142578,
			"lng": 105.78502655029297,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 754,
			"name": "Vicem Tower",
			"lat": 21.015066146850586,
			"lng": 105.78534698486328,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 620,
			"name": "Vietracimex Tower",
			"lat": 21.030166625976562,
			"lng": 105.78488922119141,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 1423,
			"name": "Viglacera – Exim Building",
			"lat": 21.046535491943359,
			"lng": 105.80443572998047,
			"cats": [48, 50]
		}, {
			"id": 988,
			"name": "Vimeco I - Phạm Hùng",
			"lat": 21.008733749389648,
			"lng": 105.79022979736328,
			"cats": [48, 50, 55, 324, 325, 326]
		}, {
			"id": 509,
			"name": "Vimeco II - Nguyễn Chánh",
			"lat": 21.009376525878906,
			"lng": 105.79402160644531,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1277,
			"name": "Vinaconex 1",
			"lat": 20.995365142822266,
			"lng": 105.79940032958984,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1434,
			"name": "Vinahud",
			"lat": 21.016054153442383,
			"lng": 105.80220031738281,
			"cats": [48, 50, 55, 59, 163]
		}, {
			"id": 2255,
			"name": "Vinata Tower",
			"lat": 20.996593475341797,
			"lng": 105.79893493652344,
			"cats": []
		}, {
			"id": 2191,
			"name": "Vinhomes Trần Duy Hưng",
			"lat": 21.005805969238281,
			"lng": 105.79437255859375,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1420,
			"name": "VMT Building",
			"lat": 21.031944274902344,
			"lng": 105.78181457519531,
			"cats": [48, 50]
		}, {
			"id": 1252,
			"name": "Watermark Tây Hồ",
			"lat": 21.0555477142334,
			"lng": 105.80859375,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 54,
			"name": "Yên Hòa",
			"lat": 21.018758773803711,
			"lng": 105.79477691650391,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2220,
			"name": "Yên Hòa Condominium",
			"lat": 21.021400451660156,
			"lng": 105.79205322265625,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1367,
			"name": "Yên Hòa Thăng Long",
			"lat": 21.017549514770508,
			"lng": 105.79067230224609,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1430,
			"name": "Zodiac Building",
			"lat": 21.030832290649414,
			"lng": 105.78211212158203,
			"cats": [41, 48, 50, 55, 163]
		}]
	}, {
		"id": 24,
		"name": "Chương Mỹ",
		"pre": "Huyện",
		"ward": [{
			"id": 9717,
			"name": "Chúc Sơn",
			"pre": "Thị trấn"
		}, {
			"id": 9733,
			"name": "Đại Yên",
			"pre": "Xã"
		}, {
			"id": 9813,
			"name": "Đồng Lạc",
			"pre": "Xã"
		}, {
			"id": 9800,
			"name": "Đồng Phú",
			"pre": "Xã"
		}, {
			"id": 9723,
			"name": "Đông Phương Yên",
			"pre": "Xã"
		}, {
			"id": 9721,
			"name": "Đông Sơn",
			"pre": "Xã"
		}, {
			"id": 9817,
			"name": "Hoà Chính",
			"pre": "Xã"
		}, {
			"id": 9760,
			"name": "Hoàng Diệu",
			"pre": "Xã"
		}, {
			"id": 9759,
			"name": "Hoàng Văn Thụ",
			"pre": "Xã"
		}, {
			"id": 9797,
			"name": "Hồng Phong",
			"pre": "Xã"
		}, {
			"id": 9758,
			"name": "Hợp Đồng",
			"pre": "Xã"
		}, {
			"id": 9766,
			"name": "Hữu Văn",
			"pre": "Xã"
		}, {
			"id": 9737,
			"name": "Lam Điền",
			"pre": "Xã"
		}, {
			"id": 9775,
			"name": "Mỹ Lương",
			"pre": "Xã"
		}, {
			"id": 9755,
			"name": "Nam Phương Tiến",
			"pre": "Xã"
		}, {
			"id": 9726,
			"name": "Ngọc Hòa",
			"pre": "Xã"
		}, {
			"id": 9821,
			"name": "Phú Nam An",
			"pre": "Xã"
		}, {
			"id": 9724,
			"name": "Phú Nghĩa",
			"pre": "Xã"
		}, {
			"id": 9719,
			"name": "Phụng Châu",
			"pre": "Xã"
		}, {
			"id": 9771,
			"name": "Quảng Bị",
			"pre": "Xã"
		}, {
			"id": 9741,
			"name": "Tân Tiến",
			"pre": "Xã"
		}, {
			"id": 9729,
			"name": "Thanh Bình",
			"pre": "Xã"
		}, {
			"id": 9779,
			"name": "Thượng Vực",
			"pre": "Xã"
		}, {
			"id": 9734,
			"name": "Thụy Hương",
			"pre": "Xã"
		}, {
			"id": 9728,
			"name": "Thuỷ Xuân Tiên",
			"pre": "Xã"
		}, {
			"id": 9720,
			"name": "Tiên Phương",
			"pre": "Xã"
		}, {
			"id": 9735,
			"name": "Tốt Động",
			"pre": "Xã"
		}, {
			"id": 9803,
			"name": "Trần Phú",
			"pre": "Xã"
		}, {
			"id": 9730,
			"name": "Trung Hòa",
			"pre": "Xã"
		}, {
			"id": 9725,
			"name": "Trường Yên",
			"pre": "Xã"
		}, {
			"id": 9808,
			"name": "Văn Võ",
			"pre": "Xã"
		}, {
			"id": 9718,
			"name": "Xuân Mai",
			"pre": "Thị trấn"
		}],
		"street": [{
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 10149,
			"name": "479",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 801,
			"name": "Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 183,
			"name": "Chiến Thắng",
			"pre": "Đường"
		}, {
			"id": 10597,
			"name": "Cu Ba",
			"pre": "Đường"
		}, {
			"id": 2364,
			"name": "Hồ Chí Minh",
			"pre": "Đường"
		}, {
			"id": 6151,
			"name": "Nguyễn Anh Trỗi",
			"pre": "Đường"
		}, {
			"id": 7865,
			"name": "Quốc lộ 21",
			"pre": "Đường"
		}, {
			"id": 7670,
			"name": "Quốc lộ 6",
			"pre": "Đường"
		}, {
			"id": 8442,
			"name": "Quốc Lộ 6A",
			"pre": "Đường"
		}, {
			"id": 769,
			"name": "Tỉnh lộ 419",
			"pre": "Đường"
		}, {
			"id": 770,
			"name": "Tỉnh lộ 424",
			"pre": "Đường"
		}, {
			"id": 8791,
			"name": "Tỉnh Lộ 80",
			"pre": "Đường"
		}],
		"project": [{
			"id": 555,
			"name": "Làng Thời Đại",
			"lat": 20.978729248046875,
			"lng": 105.85665893554687,
			"cats": [40, 48, 50, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 1755,
			"name": "Lộc Ninh Singashine",
			"lat": 20.926460266113281,
			"lng": 105.71282958984375,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 519,
			"name": "Phú Nghĩa",
			"lat": 20.933313369750977,
			"lng": 105.67115783691406,
			"cats": [45, 50, 53, 57, 59, 324, 326]
		}]
	}, {
		"id": 20,
		"name": "Đan Phượng",
		"pre": "Huyện",
		"ward": [{
			"id": 9852,
			"name": "Đan Phượng",
			"pre": "Xã"
		}, {
			"id": 9853,
			"name": "Đồng Tháp",
			"pre": "Xã"
		}, {
			"id": 9854,
			"name": "Hạ Mỗ",
			"pre": "Xã"
		}, {
			"id": 9855,
			"name": "Hồng Hà",
			"pre": "Xã"
		}, {
			"id": 9856,
			"name": "Liên Hà",
			"pre": "Xã"
		}, {
			"id": 9857,
			"name": "Liên Hồng",
			"pre": "Xã"
		}, {
			"id": 9860,
			"name": "Liên Trung",
			"pre": "Xã"
		}, {
			"id": 9851,
			"name": "Phùng",
			"pre": "Thị trấn"
		}, {
			"id": 9865,
			"name": "Phương Đình",
			"pre": "Xã"
		}, {
			"id": 9869,
			"name": "Song Phượng",
			"pre": "Xã"
		}, {
			"id": 9875,
			"name": "Tân Hội",
			"pre": "Xã"
		}, {
			"id": 9879,
			"name": "Tân Lập",
			"pre": "Xã"
		}, {
			"id": 9884,
			"name": "Thọ An",
			"pre": "Xã"
		}, {
			"id": 9890,
			"name": "Thọ Xuân",
			"pre": "Xã"
		}, {
			"id": 9897,
			"name": "Thượng Mỗ",
			"pre": "Xã"
		}, {
			"id": 9905,
			"name": "Trung Châu",
			"pre": "Xã"
		}],
		"street": [{
			"id": 4295,
			"name": "79",
			"pre": "Đường"
		}, {
			"id": 7240,
			"name": "Gò Mèo",
			"pre": "Đường"
		}, {
			"id": 616,
			"name": "Hoàng Quốc Việt",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 128,
			"name": "Phùng Hưng",
			"pre": "Phố"
		}, {
			"id": 8622,
			"name": "Phượng Trì",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 7241,
			"name": "Thụy Ứng",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1148,
			"name": "Phúc Thịnh Tower",
			"lat": 21.074918746948242,
			"lng": 105.69923400878906,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 475,
			"name": "Tân lập",
			"lat": 21.073427200317383,
			"lng": 105.71274566650391,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 19,
			"name": "Tân Lập Cienco 5",
			"lat": 21.073583602905273,
			"lng": 105.71309661865234,
			"cats": [48, 52, 55, 324, 325, 326]
		}, {
			"id": 44,
			"name": "Tân Tây Đô",
			"lat": 21.074520111083984,
			"lng": 105.70022583007812,
			"cats": [48, 50, 55, 324, 325, 326]
		}, {
			"id": 553,
			"name": "The Phoenix Garden",
			"lat": 21.092809677124023,
			"lng": 105.68113708496094,
			"cats": [44, 48, 55, 57, 59, 325]
		}, {
			"id": 1346,
			"name": "xpHOMES",
			"lat": 21.074464797973633,
			"lng": 105.70079803466797,
			"cats": [48, 55, 324, 326]
		}]
	}, {
		"id": 10,
		"name": "Đông Anh",
		"pre": "Huyện",
		"ward": [{
			"id": 9913,
			"name": "Bắc Hồng",
			"pre": "Xã"
		}, {
			"id": 9914,
			"name": "Cổ Loa",
			"pre": "Xã"
		}, {
			"id": 9927,
			"name": "Đại Mạch",
			"pre": "Xã"
		}, {
			"id": 9912,
			"name": "Đông Anh",
			"pre": "Thị trấn"
		}, {
			"id": 9934,
			"name": "Đông Hội",
			"pre": "Xã"
		}, {
			"id": 9916,
			"name": "Dục Tú",
			"pre": "Xã"
		}, {
			"id": 9936,
			"name": "Hải Bối",
			"pre": "Xã"
		}, {
			"id": 9937,
			"name": "Kim Chung",
			"pre": "Xã"
		}, {
			"id": 9938,
			"name": "Kim Nỗ",
			"pre": "Xã"
		}, {
			"id": 9940,
			"name": "Liên Hà",
			"pre": "Xã"
		}, {
			"id": 9941,
			"name": "Mai Lâm",
			"pre": "Xã"
		}, {
			"id": 9942,
			"name": "Nam Hồng",
			"pre": "Xã"
		}, {
			"id": 9943,
			"name": "Nguyên Khê",
			"pre": "Xã"
		}, {
			"id": 12234,
			"name": "Tàm Xá",
			"pre": "Xã"
		}, {
			"id": 9944,
			"name": "Tầm Xá",
			"pre": "Xã"
		}, {
			"id": 9945,
			"name": "Thụy Lâm",
			"pre": "Xã"
		}, {
			"id": 9946,
			"name": "Tiên Dương",
			"pre": "Xã"
		}, {
			"id": 9947,
			"name": "Uy Nỗ",
			"pre": "Xã"
		}, {
			"id": 9948,
			"name": "Vân Hà",
			"pre": "Xã"
		}, {
			"id": 9949,
			"name": "Vân Nội",
			"pre": "Xã"
		}, {
			"id": 9950,
			"name": "Việt Hùng",
			"pre": "Xã"
		}, {
			"id": 9965,
			"name": "Vĩnh Ngọc",
			"pre": "Xã"
		}, {
			"id": 9951,
			"name": "Võng La",
			"pre": "Xã"
		}, {
			"id": 9954,
			"name": "Xuân Canh",
			"pre": "Xã"
		}, {
			"id": 9961,
			"name": "Xuân Nộn",
			"pre": "Xã"
		}],
		"street": [{
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 702,
			"name": "23B",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 2922,
			"name": "72",
			"pre": "Phố"
		}, {
			"id": 10883,
			"name": "Ấp Tó",
			"pre": "Đường"
		}, {
			"id": 699,
			"name": "Bắc Hà",
			"pre": "đường"
		}, {
			"id": 8888,
			"name": "Bắc Hồng",
			"pre": "Đường"
		}, {
			"id": 679,
			"name": "Bắc Thăng Long",
			"pre": "Đường"
		}, {
			"id": 4874,
			"name": "Bích Phượng",
			"pre": "Đường"
		}, {
			"id": 711,
			"name": "Cao Lỗ",
			"pre": "Đường"
		}, {
			"id": 7920,
			"name": "Cao tốc Nhật Tân Nội Bài",
			"pre": "Đường"
		}, {
			"id": 8372,
			"name": "Cao tốc Thăng Long Nội Bài",
			"pre": "Đường"
		}, {
			"id": 701,
			"name": "Cầu Lớn-Nam Hồng",
			"pre": "đường"
		}, {
			"id": 705,
			"name": "Cổ Loa",
			"pre": "Đường"
		}, {
			"id": 612,
			"name": "Cổ Nhuế",
			"pre": "Đường"
		}, {
			"id": 8417,
			"name": "Cửa Hàng Mới",
			"pre": "Đường"
		}, {
			"id": 8420,
			"name": "Đa Lộc",
			"pre": "Đường"
		}, {
			"id": 8258,
			"name": "Đài Bi",
			"pre": "Đường"
		}, {
			"id": 7296,
			"name": "Đản Dị",
			"pre": "Đường"
		}, {
			"id": 2112,
			"name": "Đào Cam Mộc",
			"pre": "Đường"
		}, {
			"id": 1096,
			"name": "Đào Duy Từ",
			"pre": "Đường"
		}, {
			"id": 708,
			"name": "Đào Duy Tùng",
			"pre": "đường"
		}, {
			"id": 712,
			"name": "Đông Hội",
			"pre": "đường"
		}, {
			"id": 706,
			"name": "Ga Đông Anh",
			"pre": "đường"
		}, {
			"id": 7089,
			"name": "Giầy Da",
			"pre": "Đường"
		}, {
			"id": 6444,
			"name": "Hải Bối",
			"pre": "Đường"
		}, {
			"id": 10898,
			"name": "Hội Phụ",
			"pre": "Đường"
		}, {
			"id": 6445,
			"name": "Kinh Bắc 1",
			"pre": "Đường"
		}, {
			"id": 10629,
			"name": "Lại Đà",
			"pre": "Đường"
		}, {
			"id": 6619,
			"name": "Lâm Tiên",
			"pre": "Đường"
		}, {
			"id": 8419,
			"name": "Lê Hữu Tựu",
			"pre": "Đường"
		}, {
			"id": 8362,
			"name": "Liên Xã",
			"pre": "Đường"
		}, {
			"id": 7489,
			"name": "Lò Vôi",
			"pre": "Đường"
		}, {
			"id": 7415,
			"name": "Lộc Hà",
			"pre": "Đường"
		}, {
			"id": 7358,
			"name": "Ngọc Chi",
			"pre": "Đường"
		}, {
			"id": 9289,
			"name": "Ngọc Giang",
			"pre": "Đường"
		}, {
			"id": 7440,
			"name": "Phan Xá",
			"pre": "Đường"
		}, {
			"id": 450,
			"name": "Pháp Vân",
			"pre": "Đường"
		}, {
			"id": 4876,
			"name": "Phù Dung",
			"pre": "Phố"
		}, {
			"id": 1515,
			"name": "Phúc Lộc",
			"pre": "Phố"
		}, {
			"id": 7784,
			"name": "Phương Trạch",
			"pre": "Đường"
		}, {
			"id": 7919,
			"name": "Quốc lộ 23B",
			"pre": "Đường"
		}, {
			"id": 7677,
			"name": "Quốc lộ 3",
			"pre": "Đường"
		}, {
			"id": 7378,
			"name": "Sáp Mai",
			"pre": "Đường"
		}, {
			"id": 4878,
			"name": "Tân Trang",
			"pre": "Đường"
		}, {
			"id": 8604,
			"name": "Thiên Biều",
			"pre": "Đường"
		}, {
			"id": 4877,
			"name": "Thiên Phước",
			"pre": "Đường"
		}, {
			"id": 7799,
			"name": "Thiết Bị Điện",
			"pre": "Đường"
		}, {
			"id": 707,
			"name": "Thôn Đìa-Nam Hồng",
			"pre": "đường"
		}, {
			"id": 5742,
			"name": "Thụy Lâm",
			"pre": "Đường"
		}, {
			"id": 10857,
			"name": "Tiên Kha",
			"pre": "Đường"
		}, {
			"id": 10931,
			"name": "Uy Nỗ",
			"pre": "Đường"
		}, {
			"id": 710,
			"name": "Vân Trì",
			"pre": "Đường"
		}, {
			"id": 7209,
			"name": "Võ Nguyên Giáp",
			"pre": "Đường"
		}, {
			"id": 8833,
			"name": "Vườn Đào",
			"pre": "Đường"
		}],
		"project": [{
			"id": 669,
			"name": "Đông Anh",
			"lat": 21.123674392700195,
			"lng": 105.77121734619141,
			"cats": [48, 50, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 240,
			"name": "Intracom 8",
			"lat": 21.125017166137695,
			"lng": 105.83688354492187,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 599,
			"name": "Nam Hồng",
			"lat": 21.157918930053711,
			"lng": 105.7882080078125,
			"cats": [40, 41, 48, 52, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 3,
		"name": "Đống Đa",
		"pre": "Quận",
		"ward": [{
			"id": 21,
			"name": "Cát Linh",
			"pre": "Phường"
		}, {
			"id": 23,
			"name": "Hàng Bột",
			"pre": "Phường"
		}, {
			"id": 24,
			"name": "Khâm Thiên",
			"pre": "Phường"
		}, {
			"id": 27,
			"name": "Khương Thượng",
			"pre": "Phường"
		}, {
			"id": 25,
			"name": "Kim Liên",
			"pre": "Phường"
		}, {
			"id": 26,
			"name": "Láng Hạ",
			"pre": "Phường"
		}, {
			"id": 28,
			"name": "Láng Thượng",
			"pre": "Phường"
		}, {
			"id": 29,
			"name": "Nam Đồng",
			"pre": "Phường"
		}, {
			"id": 30,
			"name": "Ngã Tư Sở",
			"pre": "Phường"
		}, {
			"id": 22,
			"name": "Ô Chợ Dừa",
			"pre": "Phường"
		}, {
			"id": 31,
			"name": "Phương Liên",
			"pre": "Phường"
		}, {
			"id": 32,
			"name": "Phương Mai",
			"pre": "Phường"
		}, {
			"id": 33,
			"name": "Quang Trung",
			"pre": "Phường"
		}, {
			"id": 34,
			"name": "Quốc Tử Giám",
			"pre": "Phường"
		}, {
			"id": 7,
			"name": "Thịnh Quang",
			"pre": "Phường"
		}, {
			"id": 35,
			"name": "Thổ Quan",
			"pre": "Phường"
		}, {
			"id": 36,
			"name": "Trung Liệt",
			"pre": "Phường"
		}, {
			"id": 37,
			"name": "Trung Phụng",
			"pre": "Phường"
		}, {
			"id": 38,
			"name": "Trung Tự",
			"pre": "Phường"
		}, {
			"id": 40,
			"name": "Văn Chương",
			"pre": "Phường"
		}, {
			"id": 39,
			"name": "Văn Miếu",
			"pre": "Phường"
		}],
		"street": [{
			"id": 5719,
			"name": "An Trạch",
			"pre": "Phố"
		}, {
			"id": 371,
			"name": "Bích Câu",
			"pre": "Phố"
		}, {
			"id": 405,
			"name": "Cát Linh",
			"pre": "Đường"
		}, {
			"id": 372,
			"name": "Cầu Mới",
			"pre": "Phố"
		}, {
			"id": 5656,
			"name": "Cây Bàn",
			"pre": "Đường"
		}, {
			"id": 5671,
			"name": "Chợ Khâm Thiên",
			"pre": "Phố"
		}, {
			"id": 404,
			"name": "Chùa Bộc",
			"pre": "Phố"
		}, {
			"id": 407,
			"name": "Chùa Láng",
			"pre": "Phố"
		}, {
			"id": 441,
			"name": "Chùa Nền",
			"pre": "Đường"
		}, {
			"id": 403,
			"name": "Đại La",
			"pre": "Phố"
		}, {
			"id": 408,
			"name": "Đặng Tiến Đông",
			"pre": "Đường"
		}, {
			"id": 440,
			"name": "Đặng Trần Côn",
			"pre": "Phố"
		}, {
			"id": 2273,
			"name": "Đặng Văn Ngữ",
			"pre": "Đường"
		}, {
			"id": 402,
			"name": "Đào Duy Anh",
			"pre": "Đường"
		}, {
			"id": 397,
			"name": "Đê La Thành",
			"pre": "Đường"
		}, {
			"id": 439,
			"name": "Đoàn Thị Điểm",
			"pre": "Đường"
		}, {
			"id": 374,
			"name": "Đông Các",
			"pre": "Phố"
		}, {
			"id": 401,
			"name": "Đông Tác",
			"pre": "Đường"
		}, {
			"id": 3458,
			"name": "Đường Láng",
			"pre": "Đường"
		}, {
			"id": 310,
			"name": "Giải Phóng",
			"pre": "Đường"
		}, {
			"id": 438,
			"name": "Giảng Võ",
			"pre": "Phố"
		}, {
			"id": 8129,
			"name": "Hàng Bột",
			"pre": "Đường"
		}, {
			"id": 375,
			"name": "Hàng Cháo",
			"pre": "Phố"
		}, {
			"id": 8516,
			"name": "Hàng Đẫy",
			"pre": "Đường"
		}, {
			"id": 400,
			"name": "Hào Nam",
			"pre": "Phố"
		}, {
			"id": 5765,
			"name": "Hồ Ba Mẫu",
			"pre": "Đường"
		}, {
			"id": 411,
			"name": "Hồ Đắc Di",
			"pre": "Đường"
		}, {
			"id": 437,
			"name": "Hồ Giám",
			"pre": "Phố"
		}, {
			"id": 376,
			"name": "Hồ Văn Chương",
			"pre": "Đường"
		}, {
			"id": 399,
			"name": "Hoàng Cầu",
			"pre": "Phố"
		}, {
			"id": 445,
			"name": "Hoàng Mai",
			"pre": "Đường"
		}, {
			"id": 412,
			"name": "Hoàng Ngọc Phách",
			"pre": "Phố"
		}, {
			"id": 436,
			"name": "Hoàng Tích Trí",
			"pre": "Phố"
		}, {
			"id": 78,
			"name": "Huỳnh Thúc Kháng",
			"pre": "Đường"
		}, {
			"id": 398,
			"name": "Khâm Thiên",
			"pre": "Phố"
		}, {
			"id": 413,
			"name": "Khương Thượng",
			"pre": "Phố"
		}, {
			"id": 435,
			"name": "Kim Hoa",
			"pre": "Phố"
		}, {
			"id": 2981,
			"name": "Kim Liên",
			"pre": "Đường"
		}, {
			"id": 378,
			"name": "Kim Liên Mới",
			"pre": "Đường"
		}, {
			"id": 9413,
			"name": "La Thành",
			"pre": "Đường"
		}, {
			"id": 5655,
			"name": "Láng",
			"pre": "Đường"
		}, {
			"id": 69,
			"name": "Láng Hạ",
			"pre": "Phố"
		}, {
			"id": 68,
			"name": "Láng Thượng",
			"pre": "Đường"
		}, {
			"id": 89,
			"name": "Lê Duẩn",
			"pre": "Đường"
		}, {
			"id": 379,
			"name": "Lê Trực",
			"pre": "Đường"
		}, {
			"id": 7922,
			"name": "Linh Quang",
			"pre": "Đường"
		}, {
			"id": 5670,
			"name": "Linh Quang A",
			"pre": "Đường"
		}, {
			"id": 5669,
			"name": "Linh Quang B",
			"pre": "Đường"
		}, {
			"id": 396,
			"name": "Lương Định Của",
			"pre": "Phố"
		}, {
			"id": 9256,
			"name": "Lương Sử A",
			"pre": "Đường"
		}, {
			"id": 7944,
			"name": "Lương Sử B",
			"pre": "Đường"
		}, {
			"id": 5682,
			"name": "Lương Sử C",
			"pre": "Phố"
		}, {
			"id": 414,
			"name": "Lý Văn Phúc",
			"pre": "Đường"
		}, {
			"id": 434,
			"name": "Mai Anh Tuấn",
			"pre": "Phố"
		}, {
			"id": 7377,
			"name": "Nam Đồng",
			"pre": "Đường"
		}, {
			"id": 380,
			"name": "Ngô Sĩ Liên",
			"pre": "Đường"
		}, {
			"id": 395,
			"name": "Ngô Tất Tố",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 756,
			"name": "Nguyễn Công Hoan",
			"pre": "Đường"
		}, {
			"id": 433,
			"name": "Nguyên Hồng",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 394,
			"name": "Nguyễn Lương Bằng",
			"pre": "Đường"
		}, {
			"id": 71,
			"name": "Nguyễn Ngọc Nại",
			"pre": "Đường"
		}, {
			"id": 415,
			"name": "Nguyễn Như Đổ",
			"pre": "Đường"
		}, {
			"id": 432,
			"name": "Nguyễn Phúc Lai",
			"pre": "Phố"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 10257,
			"name": "Ô Chợ Dừa",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 6934,
			"name": "Phan Huy Thông",
			"pre": "Đường"
		}, {
			"id": 1257,
			"name": "Phan Phú Tiên",
			"pre": "Đường"
		}, {
			"id": 431,
			"name": "Phan Phù Tiên",
			"pre": "Phố"
		}, {
			"id": 382,
			"name": "Phan Văn Trị",
			"pre": "Đường"
		}, {
			"id": 393,
			"name": "Pháo Đài Láng",
			"pre": "Phố"
		}, {
			"id": 417,
			"name": "Phố 224",
			"pre": "Phố"
		}, {
			"id": 430,
			"name": "Phương Mai",
			"pre": "Phố"
		}, {
			"id": 383,
			"name": "Quốc Tử Giám",
			"pre": "Phố"
		}, {
			"id": 354,
			"name": "Tây Sơn",
			"pre": "Đường"
		}, {
			"id": 418,
			"name": "Thái Hà",
			"pre": "Phố"
		}, {
			"id": 429,
			"name": "Thái Thịnh",
			"pre": "Phố"
		}, {
			"id": 6698,
			"name": "Thái Thịnh 2",
			"pre": "Phố"
		}, {
			"id": 2732,
			"name": "Thành Công",
			"pre": "Đường"
		}, {
			"id": 6061,
			"name": "Thanh Miến",
			"pre": "Đường"
		}, {
			"id": 384,
			"name": "Thanh Miếu",
			"pre": "Đường"
		}, {
			"id": 392,
			"name": "Thịnh Hào",
			"pre": "Đường"
		}, {
			"id": 419,
			"name": "Thịnh Quang",
			"pre": "Đường"
		}, {
			"id": 6062,
			"name": "Thổ Quan",
			"pre": "Đường"
		}, {
			"id": 9218,
			"name": "Thông Phong",
			"pre": "Phố"
		}, {
			"id": 6745,
			"name": "Thủy Lợi",
			"pre": "Đường"
		}, {
			"id": 428,
			"name": "Tôn Đức Thắng",
			"pre": "Phố"
		}, {
			"id": 385,
			"name": "Tôn Thất Tùng",
			"pre": "Đường"
		}, {
			"id": 391,
			"name": "Trần Hữu Tước",
			"pre": "Đường"
		}, {
			"id": 420,
			"name": "Trần Quang Diệu",
			"pre": "Đường"
		}, {
			"id": 427,
			"name": "Trần Quí Cáp",
			"pre": "Đường"
		}, {
			"id": 386,
			"name": "Trần Quý Cáp",
			"pre": "Đường"
		}, {
			"id": 390,
			"name": "Trịnh Hoài Đức",
			"pre": "Đường"
		}, {
			"id": 421,
			"name": "Trúc Khê",
			"pre": "Phố"
		}, {
			"id": 426,
			"name": "Trung Liệt",
			"pre": "Phố"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 5577,
			"name": "Văn Chương",
			"pre": "Đường"
		}, {
			"id": 389,
			"name": "Văn Hương",
			"pre": "Đường"
		}, {
			"id": 422,
			"name": "Văn Miếu",
			"pre": "Phố"
		}, {
			"id": 425,
			"name": "Vĩnh Hồ",
			"pre": "Đường"
		}, {
			"id": 133,
			"name": "Võ Văn Dũng",
			"pre": "Đường"
		}, {
			"id": 388,
			"name": "Vũ Ngọc Phan",
			"pre": "Phố"
		}, {
			"id": 86,
			"name": "Vũ Thạnh",
			"pre": "Đường"
		}, {
			"id": 424,
			"name": "Xã Đàn",
			"pre": "Phố"
		}, {
			"id": 6420,
			"name": "Xã Đàn 2",
			"pre": "Đường"
		}, {
			"id": 10634,
			"name": "Y Miếu",
			"pre": "Đường"
		}, {
			"id": 7519,
			"name": "Yên Lãng",
			"pre": "Đường"
		}, {
			"id": 736,
			"name": "Yên Thế",
			"pre": "Đường"
		}],
		"project": [{
			"id": 464,
			"name": "101 Láng Hạ",
			"lat": 21.013721466064453,
			"lng": 105.8134765625,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1490,
			"name": "101A Nguyễn Khuyến",
			"lat": 21.028409957885742,
			"lng": 105.83773803710937,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 731,
			"name": "102 Trường Chinh Meco",
			"lat": 20.99993896484375,
			"lng": 105.83637237548828,
			"cats": [48, 50, 55, 324, 325, 326]
		}, {
			"id": 296,
			"name": "131 Phố Thái Hà",
			"lat": 21.013097763061523,
			"lng": 105.81949615478516,
			"cats": [55, 324, 326]
		}, {
			"id": 152,
			"name": "170 Đê La Thành - GP Building",
			"lat": 21.021224975585937,
			"lng": 105.82806396484375,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 196,
			"name": "183 Nguyễn Lương Bằng",
			"lat": 21.014120101928711,
			"lng": 105.82740020751953,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 652,
			"name": "187 Tây Sơn",
			"lat": 21.013336181640625,
			"lng": 105.82765197753906,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 679,
			"name": "25 Vũ Ngọc Phan",
			"lat": 21.013647079467773,
			"lng": 105.81111145019531,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 605,
			"name": "257 Giải Phóng",
			"lat": 20.998628616333008,
			"lng": 105.84197998046875,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 11,
			"name": "27 Huỳnh Thúc Kháng",
			"lat": 21.018184661865234,
			"lng": 105.81126403808594,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 209,
			"name": "360 Tây Sơn",
			"lat": 21.007078170776367,
			"lng": 105.82301330566406,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 239,
			"name": "59-63 Huỳnh Thúc Kháng",
			"lat": 21.018119812011719,
			"lng": 105.81182861328125,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 14,
			"name": "B4 và B14 Kim Liên",
			"lat": 21.010158538818359,
			"lng": 105.83633422851562,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1950,
			"name": "B7 - B10 Kim Liên",
			"lat": 21.009407043457031,
			"lng": 105.83549499511719,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 774,
			"name": "Capital Garden 102 Trường Chinh Kinh Đô",
			"lat": 21.000572204589844,
			"lng": 105.83708190917969,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 241,
			"name": "C\u0027land Tower",
			"lat": 21.01728630065918,
			"lng": 105.83079528808594,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1190,
			"name": "D’. Le Pont D’or - Hoàng Cầu",
			"lat": 21.019493103027344,
			"lng": 105.82234191894531,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 185,
			"name": "Đào Duy Anh Tower - 9 Đào Duy Anh",
			"lat": 21.008693695068359,
			"lng": 105.83807373046875,
			"cats": [48, 50, 55, 163]
		}, {
			"id": 1545,
			"name": "Ford Thăng Long",
			"lat": 21.013093948364258,
			"lng": 105.81308746337891,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 180,
			"name": "Geleximco 36 Hoàng Cầu",
			"lat": 21.018486022949219,
			"lng": 105.82427978515625,
			"cats": [48, 50, 55]
		}, {
			"id": 524,
			"name": "Giảng Võ Complex",
			"lat": 21.025989532470703,
			"lng": 105.8231201171875,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 28,
			"name": "Hà Thành Plaza",
			"lat": 21.008867263793945,
			"lng": 105.82034301757813,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 869,
			"name": "HACO Complex Tower",
			"lat": 21.0068302154541,
			"lng": 105.8336181640625,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2496,
			"name": "Hải Đăng Tower",
			"lat": 21.021099090576172,
			"lng": 105.81923675537109,
			"cats": []
		}, {
			"id": 623,
			"name": "Hapro Building",
			"lat": 21.028144836425781,
			"lng": 105.83322906494141,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 29,
			"name": "Hong Kong Tower",
			"lat": 21.027790069580078,
			"lng": 105.80200958251953,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 213,
			"name": "Hợp Nhất Building",
			"lat": 21.015050888061523,
			"lng": 105.83484649658203,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 297,
			"name": "ICC Commercial Center",
			"lat": 21.022102355957031,
			"lng": 105.8089599609375,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1209,
			"name": "Icon4 Tower",
			"lat": 21.028160095214844,
			"lng": 105.80431365966797,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 203,
			"name": "Khâm Thiên Building",
			"lat": 21.018865585327148,
			"lng": 105.83438873291016,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 236,
			"name": "Kinh Do Building",
			"lat": 21.0069637298584,
			"lng": 105.82285308837891,
			"cats": [41, 48, 50, 59, 163]
		}, {
			"id": 32,
			"name": "M3 - M4 Nguyễn Chí Thanh",
			"lat": 21.020200729370117,
			"lng": 105.80887603759766,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 33,
			"name": "M5 Nguyễn Chí Thanh",
			"lat": 21.021142959594727,
			"lng": 105.80934906005859,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 534,
			"name": "MBLand Tower",
			"lat": 21.00648307800293,
			"lng": 105.83078002929687,
			"cats": [48, 50, 55, 57, 59]
		}, {
			"id": 1493,
			"name": "Mecanimex",
			"lat": 21.013874053955078,
			"lng": 105.81150817871094,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 383,
			"name": "MIPEC Towers",
			"lat": 21.005880355834961,
			"lng": 105.82328033447266,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1941,
			"name": "Ocean Park",
			"lat": 21.007434844970703,
			"lng": 105.84014892578125,
			"cats": [41, 48, 50, 55, 59, 163]
		}, {
			"id": 2180,
			"name": "Oriental Tower - 324 Tây Sơn",
			"lat": 21.005504608154297,
			"lng": 105.82211303710937,
			"cats": [48, 50, 55, 57, 59, 326]
		}, {
			"id": 307,
			"name": "Petrowaco 97 Láng Hạ",
			"lat": 21.016979217529297,
			"lng": 105.81491088867187,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 309,
			"name": "Sky City Towers-88 Láng Hạ",
			"lat": 21.012050628662109,
			"lng": 105.81182861328125,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 606,
			"name": "Sông Hồng Park View",
			"lat": 21.014835357666016,
			"lng": 105.81726837158203,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1499,
			"name": "Tân Á Đại Thành",
			"lat": 21.026477813720703,
			"lng": 105.83326721191406,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 499,
			"name": "Tập thể Hào Nam",
			"lat": 21.026437759399414,
			"lng": 105.82570648193359,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2248,
			"name": "TĐC Hoàng Cầu",
			"lat": 21.0197696685791,
			"lng": 105.82317352294922,
			"cats": []
		}, {
			"id": 191,
			"name": "TĐL Building",
			"lat": 21.015607833862305,
			"lng": 105.81392669677734,
			"cats": [48, 50, 55]
		}, {
			"id": 1003,
			"name": "Twin Towers",
			"lat": 21.025880813598633,
			"lng": 105.79917144775391,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2192,
			"name": "VCCI Tower - số 9 Đào Duy Anh",
			"lat": 21.008779525756836,
			"lng": 105.83858489990234,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 229,
			"name": "Viễn Đông Building 36 Hoàng Cầu",
			"lat": 21.019750595092773,
			"lng": 105.82315826416016,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 222,
			"name": "Viet Tower",
			"lat": 21.009660720825195,
			"lng": 105.82355499267578,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1476,
			"name": "Vinaconex Tower",
			"lat": 21.014728546142578,
			"lng": 105.81343841552734,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1919,
			"name": "Vinhomes Nguyễn Chí Thanh",
			"lat": 21.023513793945312,
			"lng": 105.80998229980469,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1256,
			"name": "Vườn Xuân - 71 Nguyễn Chí Thanh",
			"lat": 21.024124145507813,
			"lng": 105.81119537353516,
			"cats": [50, 55, 324, 326]
		}]
	}, {
		"id": 11,
		"name": "Gia Lâm",
		"pre": "Huyện",
		"ward": [{
			"id": 9992,
			"name": "Bát Tràng",
			"pre": "Xã"
		}, {
			"id": 9994,
			"name": "Cổ Bi",
			"pre": "Xã"
		}, {
			"id": 9997,
			"name": "Đa Tốn",
			"pre": "Xã"
		}, {
			"id": 9999,
			"name": "Đặng Xá",
			"pre": "Xã"
		}, {
			"id": 9989,
			"name": "Đình Xuyên",
			"pre": "Xã"
		}, {
			"id": 10003,
			"name": "Đông Dư",
			"pre": "Xã"
		}, {
			"id": 9990,
			"name": "Dương Hà",
			"pre": "Xã"
		}, {
			"id": 9996,
			"name": "Dương Quang",
			"pre": "Xã"
		}, {
			"id": 9995,
			"name": "Dương Xá",
			"pre": "Xã"
		}, {
			"id": 9988,
			"name": "Kiêu Kỵ",
			"pre": "Xã"
		}, {
			"id": 10000,
			"name": "Kim Lan",
			"pre": "Thị trấn"
		}, {
			"id": 9993,
			"name": "Kim Sơn",
			"pre": "Xã"
		}, {
			"id": 9987,
			"name": "Lệ Chi",
			"pre": "Xã"
		}, {
			"id": 9991,
			"name": "Ninh Hiệp",
			"pre": "Xã"
		}, {
			"id": 10005,
			"name": "Phù Đổng",
			"pre": "Xã"
		}, {
			"id": 9998,
			"name": "Phú Thị",
			"pre": "Xã"
		}, {
			"id": 9986,
			"name": "Trâu Quỳ",
			"pre": "Thị trấn"
		}, {
			"id": 10006,
			"name": "Trung Mầu",
			"pre": "Xã"
		}, {
			"id": 10001,
			"name": "Văn Đức",
			"pre": "Xã"
		}, {
			"id": 10004,
			"name": "Yên Thường",
			"pre": "Xã"
		}, {
			"id": 9985,
			"name": "Yên Viên",
			"pre": "Thị trấn"
		}],
		"street": [{
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 7073,
			"name": "A",
			"pre": "Đường"
		}, {
			"id": 6340,
			"name": "Ái Mộ",
			"pre": "Đường"
		}, {
			"id": 8717,
			"name": "An Đào",
			"pre": "Đường"
		}, {
			"id": 10301,
			"name": "An Đào A",
			"pre": "Đường"
		}, {
			"id": 10302,
			"name": "An Đào B",
			"pre": "Đường"
		}, {
			"id": 6849,
			"name": "An Lạc",
			"pre": "Đường"
		}, {
			"id": 4135,
			"name": "B",
			"pre": "Đường"
		}, {
			"id": 7276,
			"name": "Bát Tràng",
			"pre": "Đường"
		}, {
			"id": 738,
			"name": "Cầu Đuống",
			"pre": "đường"
		}, {
			"id": 745,
			"name": "Cầu Vượt Phú Thị",
			"pre": "đường"
		}, {
			"id": 8602,
			"name": "Chính Trung",
			"pre": "Đường"
		}, {
			"id": 753,
			"name": "Cổ Bi",
			"pre": "đường"
		}, {
			"id": 6869,
			"name": "Cửu Việt",
			"pre": "Đường"
		}, {
			"id": 6726,
			"name": "Cửu Việt 1",
			"pre": "Đường"
		}, {
			"id": 6542,
			"name": "Cửu Việt 2",
			"pre": "Đường"
		}, {
			"id": 8770,
			"name": "Đa Tốn",
			"pre": "Đường"
		}, {
			"id": 761,
			"name": "Đặng Phúc Thông",
			"pre": "Đường"
		}, {
			"id": 8752,
			"name": "Đào Nguyên",
			"pre": "Đường"
		}, {
			"id": 739,
			"name": "Đình Xuyên",
			"pre": "đường"
		}, {
			"id": 3713,
			"name": "Dương Quang",
			"pre": "Phố"
		}, {
			"id": 9265,
			"name": "Đường Y",
			"pre": "Đường"
		}, {
			"id": 4889,
			"name": "E",
			"pre": "Đường"
		}, {
			"id": 10298,
			"name": "G",
			"pre": "Đường"
		}, {
			"id": 746,
			"name": "Giang Cao",
			"pre": "đường"
		}, {
			"id": 755,
			"name": "Hà Huy Tập",
			"pre": "Đường"
		}, {
			"id": 6545,
			"name": "Khiêu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 6547,
			"name": "Khiếu Năng Tĩnh",
			"pre": "Đường"
		}, {
			"id": 1779,
			"name": "Kiên Thành",
			"pre": "Đường"
		}, {
			"id": 8410,
			"name": "Kiêu Kỵ",
			"pre": "Đường"
		}, {
			"id": 8847,
			"name": "Kim Âu",
			"pre": "Đường"
		}, {
			"id": 7441,
			"name": "Kim Hồ",
			"pre": "Đường"
		}, {
			"id": 6551,
			"name": "Lê Công Miễn",
			"pre": "Đường"
		}, {
			"id": 275,
			"name": "Lệ Mật",
			"pre": "Phố"
		}, {
			"id": 4006,
			"name": "Mai Phúc",
			"pre": "Phố"
		}, {
			"id": 6553,
			"name": "Ngô Xuân Quảng",
			"pre": "Đường"
		}, {
			"id": 5763,
			"name": "Ngọc Động",
			"pre": "Đường"
		}, {
			"id": 293,
			"name": "Ngọc Lâm",
			"pre": "Đường"
		}, {
			"id": 269,
			"name": "Ngọc Thụy",
			"pre": "Đường"
		}, {
			"id": 740,
			"name": "Nguyễn Bình",
			"pre": "Đường"
		}, {
			"id": 286,
			"name": "Nguyễn Đức Thuận",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 8496,
			"name": "Nha",
			"pre": "Phố"
		}, {
			"id": 764,
			"name": "Ninh Hiệp",
			"pre": "đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 741,
			"name": "Phan Đăng Lưu",
			"pre": "Phố"
		}, {
			"id": 788,
			"name": "Phú Gia",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 7677,
			"name": "Quốc lộ 3",
			"pre": "Đường"
		}, {
			"id": 8603,
			"name": "Quốc lộ 39B",
			"pre": "Đường"
		}, {
			"id": 7877,
			"name": "Quốc Lộ 5",
			"pre": "Đường"
		}, {
			"id": 10310,
			"name": "R",
			"pre": "Đường"
		}, {
			"id": 7956,
			"name": "S",
			"pre": "Đường"
		}, {
			"id": 7662,
			"name": "T",
			"pre": "Đường"
		}, {
			"id": 766,
			"name": "Thiên Đức",
			"pre": "Đường"
		}, {
			"id": 4018,
			"name": "Thượng Thanh",
			"pre": "Đường"
		}, {
			"id": 742,
			"name": "Tỉnh lộ 179",
			"pre": "Đường"
		}, {
			"id": 750,
			"name": "Tỉnh lộ 181",
			"pre": "Đường"
		}, {
			"id": 690,
			"name": "Tỉnh lộ 270",
			"pre": "Đường"
		}, {
			"id": 770,
			"name": "Tỉnh lộ 424",
			"pre": "Đường"
		}, {
			"id": 768,
			"name": "Tỉnh lộ 84",
			"pre": "Đường"
		}, {
			"id": 6546,
			"name": "Trương Tấn Sang",
			"pre": "Đường"
		}, {
			"id": 10299,
			"name": "V",
			"pre": "Đường"
		}, {
			"id": 6550,
			"name": "Võ Đình Tú",
			"pre": "Đường"
		}, {
			"id": 6549,
			"name": "Võ Trung Thành",
			"pre": "Đường"
		}, {
			"id": 10300,
			"name": "Y",
			"pre": "Đường"
		}, {
			"id": 744,
			"name": "Ỷ Lan",
			"pre": "Đường"
		}, {
			"id": 7548,
			"name": "Yên Khê",
			"pre": "Đường"
		}, {
			"id": 8482,
			"name": "Yên Tân",
			"pre": "Đường"
		}],
		"project": [{
			"id": 471,
			"name": "Đặng Xá 1",
			"lat": 21.016773223876953,
			"lng": 105.95018768310547,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1851,
			"name": "Đặng Xá 2",
			"lat": 21.0156192779541,
			"lng": 105.9486083984375,
			"cats": [51, 55, 163, 324, 325, 326]
		}, {
			"id": 2098,
			"name": "Lâm Viên Villas",
			"lat": 21.019399642944336,
			"lng": 105.94985198974609,
			"cats": [40, 59, 325]
		}]
	}, {
		"id": 15,
		"name": "Hà Đông",
		"pre": "Quận",
		"ward": [{
			"id": 9583,
			"name": "Biên Giang",
			"pre": "Phường"
		}, {
			"id": 9586,
			"name": "Đồng Mai",
			"pre": "Phường"
		}, {
			"id": 9579,
			"name": "Dương Nội",
			"pre": "Phường"
		}, {
			"id": 9555,
			"name": "Hà Cầu",
			"pre": "Phường"
		}, {
			"id": 9569,
			"name": "Kiến Hưng",
			"pre": "Phường"
		}, {
			"id": 9566,
			"name": "La Khê",
			"pre": "Phường"
		}, {
			"id": 9564,
			"name": "Mỗ Lao",
			"pre": "Phường"
		}, {
			"id": 9551,
			"name": "Nguyễn Trãi",
			"pre": "Phường"
		}, {
			"id": 9567,
			"name": "Phú La",
			"pre": "Phường"
		}, {
			"id": 9577,
			"name": "Phú Lãm",
			"pre": "Phường"
		}, {
			"id": 9574,
			"name": "Phú Lương",
			"pre": "Phường"
		}, {
			"id": 9561,
			"name": "Phúc La",
			"pre": "Phường"
		}, {
			"id": 9547,
			"name": "Quang Trung",
			"pre": "Phường"
		}, {
			"id": 9557,
			"name": "Vạn Phúc",
			"pre": "Phường"
		}, {
			"id": 9565,
			"name": "Văn Quán",
			"pre": "Phường"
		}, {
			"id": 9571,
			"name": "Yên Nghĩa",
			"pre": "Phường"
		}, {
			"id": 9562,
			"name": "Yết Kiêu",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 2171,
			"name": "19/5",
			"pre": "Đường"
		}, {
			"id": 772,
			"name": "21B",
			"pre": "Đường"
		}, {
			"id": 9660,
			"name": "430",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 631,
			"name": "70",
			"pre": "Đường"
		}, {
			"id": 2922,
			"name": "72",
			"pre": "Phố"
		}, {
			"id": 4406,
			"name": "An Hòa",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 8082,
			"name": "An Thắng",
			"pre": "Đường"
		}, {
			"id": 4815,
			"name": "Ao Sen",
			"pre": "Đường"
		}, {
			"id": 345,
			"name": "Ba La",
			"pre": "Đường"
		}, {
			"id": 179,
			"name": "Bà Triệu",
			"pre": "Phố"
		}, {
			"id": 527,
			"name": "Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 7517,
			"name": "Bạch Thái Bưởi",
			"pre": "Đường"
		}, {
			"id": 1659,
			"name": "Bế Văn Đàn",
			"pre": "Đường"
		}, {
			"id": 371,
			"name": "Bích Câu",
			"pre": "Phố"
		}, {
			"id": 335,
			"name": "Bùi Bằng Đoàn",
			"pre": "Đường"
		}, {
			"id": 8098,
			"name": "Bùi Thị Cúc",
			"pre": "Đường"
		}, {
			"id": 346,
			"name": "Cao Thắng",
			"pre": "Đường"
		}, {
			"id": 5976,
			"name": "Cầu Am",
			"pre": "Phố"
		}, {
			"id": 6189,
			"name": "Cầu Bươu",
			"pre": "Đường"
		}, {
			"id": 6894,
			"name": "Cầu Đơ",
			"pre": "Đường"
		}, {
			"id": 9026,
			"name": "Cầu Đơ 4",
			"pre": "Đường"
		}, {
			"id": 183,
			"name": "Chiến Thắng",
			"pre": "Đường"
		}, {
			"id": 802,
			"name": "Chu Văn An",
			"pre": "Đường"
		}, {
			"id": 7591,
			"name": "Cửa Phủ",
			"pre": "Đường"
		}, {
			"id": 5723,
			"name": "Đa Sĩ",
			"pre": "Đường"
		}, {
			"id": 359,
			"name": "Đại An",
			"pre": "Đường"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 336,
			"name": "Do Lộ",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 7712,
			"name": "Giang Chính",
			"pre": "Đường"
		}, {
			"id": 8929,
			"name": "Giếng Sen",
			"pre": "Đường"
		}, {
			"id": 7898,
			"name": "Hà Cầu",
			"pre": "Đường"
		}, {
			"id": 347,
			"name": "Hà Trì",
			"pre": "Đường"
		}, {
			"id": 7730,
			"name": "Hà Trì 1",
			"pre": "Đường"
		}, {
			"id": 10536,
			"name": "Hà Trì 2",
			"pre": "Đường"
		}, {
			"id": 8009,
			"name": "Hà Trì 3",
			"pre": "Đường"
		}, {
			"id": 7438,
			"name": "Hà Trì 4",
			"pre": "Đường"
		}, {
			"id": 7460,
			"name": "Hà Trì 5",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 8249,
			"name": "Hạnh Phúc",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 337,
			"name": "Hoàng Văn Thụ",
			"pre": "Đường"
		}, {
			"id": 6783,
			"name": "Huyền Kỳ",
			"pre": "Đường"
		}, {
			"id": 78,
			"name": "Huỳnh Thúc Kháng",
			"pre": "Đường"
		}, {
			"id": 8454,
			"name": "Kiến Hưng",
			"pre": "Đường"
		}, {
			"id": 8003,
			"name": "La Dương",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 348,
			"name": "Lê Quý Đôn",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 204,
			"name": "Lương Ngọc Quyến",
			"pre": "Đường"
		}, {
			"id": 339,
			"name": "Lương Văn Can",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 362,
			"name": "Lý Tự Trọng",
			"pre": "Đường"
		}, {
			"id": 6464,
			"name": "Mậu Lương",
			"pre": "Đường"
		}, {
			"id": 340,
			"name": "Minh Khai",
			"pre": "Đường"
		}, {
			"id": 6144,
			"name": "Mỗ Lao",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 6376,
			"name": "Nam Cường",
			"pre": "Đường"
		}, {
			"id": 276,
			"name": "Ngô Gia Khảm",
			"pre": "Đường"
		}, {
			"id": 285,
			"name": "Ngô Gia Tự",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 150,
			"name": "Ngô Thì Nhậm",
			"pre": "Đường"
		}, {
			"id": 5947,
			"name": "Ngô Thì Sỹ",
			"pre": "Đường"
		}, {
			"id": 2408,
			"name": "Nguyễn Chánh",
			"pre": "Đường"
		}, {
			"id": 517,
			"name": "Nguyễn Công Trứ",
			"pre": "Đường"
		}, {
			"id": 357,
			"name": "Nguyễn Hữu Nghĩa",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 2259,
			"name": "Nguyễn Trực",
			"pre": "Đường"
		}, {
			"id": 4494,
			"name": "Nguyễn Văn Lộc",
			"pre": "Đường"
		}, {
			"id": 341,
			"name": "Nguyễn Văn Trỗi",
			"pre": "Đường"
		}, {
			"id": 351,
			"name": "Nguyễn Viết Xuân",
			"pre": "Đường"
		}, {
			"id": 7078,
			"name": "Nhơn Trạch",
			"pre": "Đường"
		}, {
			"id": 364,
			"name": "Nhuệ Giang",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 352,
			"name": "Phan Đình Giót",
			"pre": "Đường"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 229,
			"name": "Phan Huy Chú",
			"pre": "Đường"
		}, {
			"id": 718,
			"name": "Phan Trọng Tuệ",
			"pre": "Đường"
		}, {
			"id": 10144,
			"name": "Phú Lãm",
			"pre": "Đường"
		}, {
			"id": 9584,
			"name": "Phú Lương",
			"pre": "Phố"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 6832,
			"name": "Phúc Thịnh",
			"pre": "Đường"
		}, {
			"id": 128,
			"name": "Phùng Hưng",
			"pre": "Phố"
		}, {
			"id": 8037,
			"name": "Phượng Bãi",
			"pre": "Đường"
		}, {
			"id": 5743,
			"name": "Quan Thôn",
			"pre": "Đường"
		}, {
			"id": 8826,
			"name": "Quang Lãm",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 7820,
			"name": "Quốc lộ 21B",
			"pre": "Đường"
		}, {
			"id": 7670,
			"name": "Quốc lộ 6",
			"pre": "Đường"
		}, {
			"id": 7654,
			"name": "Quốc lộ 70",
			"pre": "Đường"
		}, {
			"id": 4148,
			"name": "Quyết Tiến",
			"pre": "Đường"
		}, {
			"id": 7094,
			"name": "Sông Nhuệ",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 1227,
			"name": "Tản Đà",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 354,
			"name": "Tây Sơn",
			"pre": "Đường"
		}, {
			"id": 367,
			"name": "Thanh Bình",
			"pre": "Đường"
		}, {
			"id": 2732,
			"name": "Thành Công",
			"pre": "Đường"
		}, {
			"id": 3741,
			"name": "Thanh Lâm",
			"pre": "Đường"
		}, {
			"id": 7711,
			"name": "Thanh Lãm",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 355,
			"name": "Tô Hiến Thành",
			"pre": "Đường"
		}, {
			"id": 368,
			"name": "Tô Hiệu",
			"pre": "Đường"
		}, {
			"id": 3151,
			"name": "Tố Hữu",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 611,
			"name": "Trần Đăng Ninh",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 913,
			"name": "Trần Nhật Duật",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 1665,
			"name": "Trần Văn Chuông",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 7030,
			"name": "Trinh Lương",
			"pre": "Đường"
		}, {
			"id": 8273,
			"name": "Trung Kiên",
			"pre": "Đường"
		}, {
			"id": 2225,
			"name": "Trưng Nhị",
			"pre": "Đường"
		}, {
			"id": 356,
			"name": "Trưng Trắc",
			"pre": "Đường"
		}, {
			"id": 369,
			"name": "Trương Công Định",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 7041,
			"name": "Văn La",
			"pre": "Đường"
		}, {
			"id": 7961,
			"name": "Văn Nội",
			"pre": "Đường"
		}, {
			"id": 8097,
			"name": "Văn Phú",
			"pre": "Đường"
		}, {
			"id": 737,
			"name": "Vạn Phúc",
			"pre": "Phố"
		}, {
			"id": 5806,
			"name": "Văn Quán",
			"pre": "Đường"
		}, {
			"id": 7479,
			"name": "Văn Yên",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}, {
			"id": 7561,
			"name": "Xốm",
			"pre": "Phố"
		}, {
			"id": 8239,
			"name": "Ỷ La",
			"pre": "Đường"
		}, {
			"id": 7042,
			"name": "Y Sơn",
			"pre": "Đường"
		}, {
			"id": 6773,
			"name": "Yên Bình",
			"pre": "Đường"
		}, {
			"id": 8164,
			"name": "Yên Lộ",
			"pre": "Đường"
		}, {
			"id": 370,
			"name": "Yên Phúc",
			"pre": "Đường"
		}, {
			"id": 5836,
			"name": "Yên Xá",
			"pre": "Đường"
		}, {
			"id": 135,
			"name": "Yết Kiêu",
			"pre": "Đường"
		}],
		"project": [{
			"id": 717,
			"name": "16B Nguyễn Thái Học",
			"lat": 20.972915649414063,
			"lng": 105.77559661865234,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 893,
			"name": "7 Trần Phú",
			"lat": 20.979232788085938,
			"lng": 105.786865234375,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1085,
			"name": "89 Phùng Hưng",
			"lat": 20.968816757202148,
			"lng": 105.7869873046875,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 559,
			"name": "An Hưng",
			"lat": 20.974203109741211,
			"lng": 105.75543212890625,
			"cats": [40, 48, 50, 52, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 1321,
			"name": "An Lạc Nam La Khê",
			"lat": 20.964876174926758,
			"lng": 105.76445007324219,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 15,
			"name": "Bắc Hà Fodacon",
			"lat": 20.982532501220703,
			"lng": 105.78964233398437,
			"cats": [48, 52, 55, 324, 325, 326]
		}, {
			"id": 1847,
			"name": "Bình Vượng 200 Quang Trung",
			"lat": 20.966875076293945,
			"lng": 105.76963806152344,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1497,
			"name": "Booyoung",
			"lat": 20.982448577880859,
			"lng": 105.78227996826172,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 304,
			"name": "Cleve",
			"lat": 20.958673477172852,
			"lng": 105.76674652099609,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2358,
			"name": "CT3 Yên Nghĩa",
			"lat": 20.959508895874023,
			"lng": 105.75789642333984,
			"cats": []
		}, {
			"id": 280,
			"name": "CT5 Văn Khê",
			"lat": 20.9730224609375,
			"lng": 105.76327514648437,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1392,
			"name": "Đô Nghĩa",
			"lat": 20.957902908325195,
			"lng": 105.73589324951172,
			"cats": [41, 48, 52, 55, 59, 325]
		}, {
			"id": 22,
			"name": "Dương Nội",
			"lat": 20.963850021362305,
			"lng": 105.74872589111328,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1375,
			"name": "Ellipse Tower",
			"lat": 20.977693557739258,
			"lng": 105.78349304199219,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2465,
			"name": "Evelyne Gardens - ParkCity Hà Nội",
			"lat": 20.964075088500977,
			"lng": 105.75616455078125,
			"cats": []
		}, {
			"id": 2407,
			"name": "FLC Star Tower",
			"lat": 20.962234497070313,
			"lng": 105.76490783691406,
			"cats": []
		}, {
			"id": 26,
			"name": "Geleximco Lê Trọng Tấn",
			"lat": 21.006153106689453,
			"lng": 105.73284912109375,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 2162,
			"name": "GoldSilk Complex",
			"lat": 20.978359222412109,
			"lng": 105.772216796875,
			"cats": [41, 48, 50, 51, 52, 55, 57, 59, 163, 324, 325, 326]
		}, {
			"id": 1063,
			"name": "Hà Đông Sunflower",
			"lat": 20.973217010498047,
			"lng": 105.77885437011719,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2183,
			"name": "Hà Nội Landmark 51 Tower",
			"lat": 20.981533050537109,
			"lng": 105.77078247070312,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 587,
			"name": "Hà Nội Time Towers",
			"lat": 20.97418212890625,
			"lng": 105.77597808837891,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 58,
			"name": "Hattoco",
			"lat": 20.9779052734375,
			"lng": 105.78373718261719,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 298,
			"name": "Hemisco Xa La",
			"lat": 20.961841583251953,
			"lng": 105.79552459716797,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 310,
			"name": "Hesco",
			"lat": 20.97857666015625,
			"lng": 105.78734588623047,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1059,
			"name": "Hồ Gươm Plaza",
			"lat": 20.979290008544922,
			"lng": 105.78546142578125,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 157,
			"name": "HP Landmark Tower",
			"lat": 20.972354888916016,
			"lng": 105.75798034667969,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2470,
			"name": "HPC Landmark 105",
			"lat": 20.972332000732422,
			"lng": 105.75783538818359,
			"cats": []
		}, {
			"id": 268,
			"name": "HUD3 Tower",
			"lat": 20.966337203979492,
			"lng": 105.77752685546875,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 291,
			"name": "Hyundai Hillstate",
			"lat": 20.963682174682617,
			"lng": 105.77370452880859,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1515,
			"name": "KĐT Đồng Mai",
			"lat": 20.930871963500977,
			"lng": 105.74098205566406,
			"cats": [40, 44, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 71,
			"name": "KĐT La Khê",
			"lat": 20.965642929077148,
			"lng": 105.75942993164062,
			"cats": [48, 51, 52, 55, 324, 325, 326]
		}, {
			"id": 1372,
			"name": "KĐT Phú Lương",
			"lat": 20.95088005065918,
			"lng": 105.76871490478516,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 9,
			"name": "KĐT Văn Phú",
			"lat": 20.958282470703125,
			"lng": 105.76719665527344,
			"cats": [48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 50,
			"name": "KĐT Văn Quán",
			"lat": 20.973962783813477,
			"lng": 105.78907012939453,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 53,
			"name": "KĐT Xa La",
			"lat": 20.962467193603516,
			"lng": 105.79236602783203,
			"cats": [40, 55, 59, 324, 325, 326]
		}, {
			"id": 2413,
			"name": "Khu nhà ở Phú Mỹ",
			"lat": 20.97599983215332,
			"lng": 105.77692413330078,
			"cats": []
		}, {
			"id": 764,
			"name": "Kiến Hưng",
			"lat": 20.952150344848633,
			"lng": 105.78538513183594,
			"cats": [40, 48, 55, 324, 325, 326]
		}, {
			"id": 10,
			"name": "Làng Việt Kiều Châu Âu Euroland",
			"lat": 20.983457565307617,
			"lng": 105.78564453125,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 610,
			"name": "Lê Văn Lương Residentials",
			"lat": 20.976511001586914,
			"lng": 105.75966644287109,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 55,
			"name": "Mỗ Lao",
			"lat": 20.982686996459961,
			"lng": 105.7816162109375,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 577,
			"name": "Mulberry Lane",
			"lat": 20.986820220947266,
			"lng": 105.78516387939453,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 179,
			"name": "Nacimex",
			"lat": 20.993196487426758,
			"lng": 105.78787231445312,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 1468,
			"name": "Nam Cường Building",
			"lat": 20.976673126220703,
			"lng": 105.76158142089844,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1322,
			"name": "Nam La Khê",
			"lat": 20.964221954345703,
			"lng": 105.76487731933594,
			"cats": [52, 57, 324, 325, 326]
		}, {
			"id": 279,
			"name": "Nam Xa la",
			"lat": 20.960514068603516,
			"lng": 105.79452514648437,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 38,
			"name": "Nàng Hương",
			"lat": 20.984960556030273,
			"lng": 105.7955322265625,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1358,
			"name": "New Skyline",
			"lat": 20.976692199707031,
			"lng": 105.78955841064453,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2369,
			"name": "Newhouse Xa La",
			"lat": 20.959903717041016,
			"lng": 105.79249572753906,
			"cats": []
		}, {
			"id": 578,
			"name": "Ngô Thì Nhậm",
			"lat": 20.969335556030273,
			"lng": 105.76816558837891,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 894,
			"name": "Nguyễn Chánh Hà Đông",
			"lat": 20.970293045043945,
			"lng": 105.78443145751953,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2117,
			"name": "Park View Residence",
			"lat": 20.964326858520508,
			"lng": 105.74954986572266,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 601,
			"name": "ParkCity Hà Nội",
			"lat": 20.964179992675781,
			"lng": 105.75600433349609,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 2033,
			"name": "PCC1 Complex",
			"lat": 20.952579498291016,
			"lng": 105.75757598876953,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 589,
			"name": "Phú Lãm",
			"lat": 20.946918487548828,
			"lng": 105.7545166015625,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 533,
			"name": "Rainbow Building",
			"lat": 20.974458694458008,
			"lng": 105.78774261474609,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 883,
			"name": "Sails Tower",
			"lat": 20.959997177124023,
			"lng": 105.79855346679687,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1824,
			"name": "SDU 143 Trần Phú",
			"lat": 20.977668762207031,
			"lng": 105.78533935546875,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2147,
			"name": "Seasons Avenue",
			"lat": 20.987026214599609,
			"lng": 105.78683471679687,
			"cats": [48, 55, 57, 324, 326]
		}, {
			"id": 79,
			"name": "SME Hoàng Gia",
			"lat": 20.966142654418945,
			"lng": 105.77204895019531,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 580,
			"name": "Sông Đà Hà Đông Tower",
			"lat": 20.980344772338867,
			"lng": 105.78862762451172,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1852,
			"name": "Thanh Bình Village",
			"lat": 20.977252960205078,
			"lng": 105.78018188476562,
			"cats": [40, 51, 52, 325]
		}, {
			"id": 72,
			"name": "Thanh Hà Cienco 5",
			"lat": 20.9397029876709,
			"lng": 105.78725433349609,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 2405,
			"name": "Tháp doanh nhân Tower",
			"lat": 20.980747222900391,
			"lng": 105.77880859375,
			"cats": []
		}, {
			"id": 2452,
			"name": "The Green Daisy",
			"lat": 21.002592086791992,
			"lng": 105.73249816894531,
			"cats": []
		}, {
			"id": 2171,
			"name": "The Pride",
			"lat": 20.972740173339844,
			"lng": 105.75789642333984,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 2152,
			"name": "The Vesta",
			"lat": 20.946331024169922,
			"lng": 105.75578308105469,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 593,
			"name": "Thiên Niên Kỷ",
			"lat": 20.974008560180664,
			"lng": 105.77889251708984,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1176,
			"name": "Thủy Lợi Tower",
			"lat": 20.96333122253418,
			"lng": 105.763916015625,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 596,
			"name": "TSQ Galaxy",
			"lat": 20.984521865844727,
			"lng": 105.77553558349609,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 594,
			"name": "TTTM TSQ",
			"lat": 20.978330612182617,
			"lng": 105.78334045410156,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1139,
			"name": "Unimax Twin Tower",
			"lat": 20.96607780456543,
			"lng": 105.76943969726562,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 495,
			"name": "Usilk City",
			"lat": 20.976255416870117,
			"lng": 105.76264953613281,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 49,
			"name": "Văn Khê",
			"lat": 20.974569320678711,
			"lng": 105.76432800292969,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1536,
			"name": "Văn La - Văn Khê",
			"lat": 20.955642700195313,
			"lng": 105.76055908203125,
			"cats": [41, 48, 50, 52, 59, 324, 325, 326]
		}, {
			"id": 173,
			"name": "Văn Phú Victoria",
			"lat": 20.959907531738281,
			"lng": 105.76819610595703,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1351,
			"name": "Vạn Phúc - Simco Sông Đà",
			"lat": 20.981897354125977,
			"lng": 105.76677703857422,
			"cats": [48, 50, 55, 59, 325]
		}, {
			"id": 1539,
			"name": "Vinaconex 21",
			"lat": 20.957181930541992,
			"lng": 105.75644683837891,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 823,
			"name": "Westa",
			"lat": 20.978328704833984,
			"lng": 105.78472900390625,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1073,
			"name": "Xuân Mai Park State",
			"lat": 20.962711334228516,
			"lng": 105.77342987060547,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2297,
			"name": "Xuân Mai Riverside",
			"lat": 20.980579376220703,
			"lng": 105.779052734375,
			"cats": []
		}, {
			"id": 2500,
			"name": "Xuân Mai Sparks Tower",
			"lat": 20.960502624511719,
			"lng": 105.74285125732422,
			"cats": []
		}]
	}, {
		"id": 4,
		"name": "Hai Bà Trưng",
		"pre": "Quận",
		"ward": [{
			"id": 73,
			"name": "Bạch Đằng",
			"pre": "Phường"
		}, {
			"id": 74,
			"name": "Bách Khoa",
			"pre": "Phường"
		}, {
			"id": 75,
			"name": "Bạch Mai",
			"pre": "Phường"
		}, {
			"id": 76,
			"name": "Bùi Thị Xuân",
			"pre": "Phường"
		}, {
			"id": 77,
			"name": "Cầu Dền",
			"pre": "Phường"
		}, {
			"id": 78,
			"name": "Đống Mác",
			"pre": "Phường"
		}, {
			"id": 79,
			"name": "Đồng Nhân",
			"pre": "Phường"
		}, {
			"id": 80,
			"name": "Đồng Tâm",
			"pre": "Phường"
		}, {
			"id": 81,
			"name": "Lê Đại Hành",
			"pre": "Phường"
		}, {
			"id": 82,
			"name": "Minh Khai",
			"pre": "Phường"
		}, {
			"id": 83,
			"name": "Ngô Thì Nhậm",
			"pre": "Phường"
		}, {
			"id": 84,
			"name": "Nguyễn Du",
			"pre": "Phường"
		}, {
			"id": 85,
			"name": "Phạm Đình Hổ",
			"pre": "Phường"
		}, {
			"id": 86,
			"name": "Phố Huế",
			"pre": "Phường"
		}, {
			"id": 87,
			"name": "Quỳnh Lôi",
			"pre": "Phường"
		}, {
			"id": 88,
			"name": "Quỳnh Mai",
			"pre": "Phường"
		}, {
			"id": 89,
			"name": "Thanh Lương",
			"pre": "Phường"
		}, {
			"id": 90,
			"name": "Thanh Nhàn",
			"pre": "Phường"
		}, {
			"id": 12142,
			"name": "Trương Định",
			"pre": "Phường"
		}, {
			"id": 91,
			"name": "Vĩnh Tuy",
			"pre": "Phường"
		}],
		"street": [{
			"id": 6214,
			"name": "8/3",
			"pre": "Phố"
		}, {
			"id": 8243,
			"name": "Ao Dài",
			"pre": "Đường"
		}, {
			"id": 179,
			"name": "Bà Triệu",
			"pre": "Phố"
		}, {
			"id": 527,
			"name": "Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 528,
			"name": "Bạch Mai",
			"pre": "Phố"
		}, {
			"id": 570,
			"name": "Bùi Ngọc Dương",
			"pre": "Phố"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 526,
			"name": "Cảm Hội",
			"pre": "Phố"
		}, {
			"id": 529,
			"name": "Cao Đạt",
			"pre": "Đường"
		}, {
			"id": 569,
			"name": "Cầu Lạc Trung",
			"pre": "Đường"
		}, {
			"id": 485,
			"name": "Cầu Vĩnh Tuy",
			"pre": "Đường"
		}, {
			"id": 525,
			"name": "Chùa Vua",
			"pre": "Phố"
		}, {
			"id": 530,
			"name": "Đại Cồ Việt",
			"pre": "Đường"
		}, {
			"id": 403,
			"name": "Đại La",
			"pre": "Phố"
		}, {
			"id": 486,
			"name": "Đầm Trấu",
			"pre": "Đường"
		}, {
			"id": 5895,
			"name": "Đê Tô Hoàng",
			"pre": "Đường"
		}, {
			"id": 524,
			"name": "Đê Trần Khát Chân",
			"pre": "Đường"
		}, {
			"id": 531,
			"name": "Đỗ Hành",
			"pre": "Đường"
		}, {
			"id": 567,
			"name": "Đỗ Ngọc Du",
			"pre": "Đường"
		}, {
			"id": 9249,
			"name": "Đỗ Thuận",
			"pre": "Đường"
		}, {
			"id": 487,
			"name": "Đoàn Trần Nghiệp",
			"pre": "Đường"
		}, {
			"id": 8405,
			"name": "Dốc Thọ Lão",
			"pre": "Đường"
		}, {
			"id": 7706,
			"name": "Dốc Vạn Kiếp",
			"pre": "Đường"
		}, {
			"id": 1050,
			"name": "Đội Cung",
			"pre": "Đường"
		}, {
			"id": 532,
			"name": "Đông Mác",
			"pre": "Phố"
		}, {
			"id": 566,
			"name": "Đồng Nhân",
			"pre": "Phố"
		}, {
			"id": 310,
			"name": "Giải Phóng",
			"pre": "Đường"
		}, {
			"id": 5628,
			"name": "Gốc Đề",
			"pre": "Đường"
		}, {
			"id": 168,
			"name": "Hàm Long",
			"pre": "Phố"
		}, {
			"id": 939,
			"name": "Hàn Thuyên",
			"pre": "Đường"
		}, {
			"id": 103,
			"name": "Hàng Bài",
			"pre": "Phố"
		}, {
			"id": 488,
			"name": "Hàng Chuối",
			"pre": "Phố"
		}, {
			"id": 5765,
			"name": "Hồ Ba Mẫu",
			"pre": "Đường"
		}, {
			"id": 8456,
			"name": "Hồ Đình",
			"pre": "Đường"
		}, {
			"id": 6933,
			"name": "Hồ Đình B",
			"pre": "Đường"
		}, {
			"id": 522,
			"name": "Hồ Xuân Hương",
			"pre": "Đường"
		}, {
			"id": 9398,
			"name": "Hoà Bình 4",
			"pre": "Phố"
		}, {
			"id": 9381,
			"name": "Hoà Bình 6",
			"pre": "Phố"
		}, {
			"id": 9373,
			"name": "Hoà Bình 7",
			"pre": "Đường"
		}, {
			"id": 533,
			"name": "Hoa Lư",
			"pre": "Phố"
		}, {
			"id": 564,
			"name": "Hòa Mã",
			"pre": "Phố"
		}, {
			"id": 445,
			"name": "Hoàng Mai",
			"pre": "Đường"
		}, {
			"id": 489,
			"name": "Hồng Mai",
			"pre": "Phố"
		}, {
			"id": 521,
			"name": "Hương Viên",
			"pre": "Phố"
		}, {
			"id": 454,
			"name": "Kim Đồng",
			"pre": "Đường"
		}, {
			"id": 476,
			"name": "Kim Ngưu",
			"pre": "Đường"
		}, {
			"id": 563,
			"name": "Lạc Trung",
			"pre": "Phố"
		}, {
			"id": 491,
			"name": "Lãng Yên",
			"pre": "Đường"
		}, {
			"id": 1055,
			"name": "Lê Đại Hành",
			"pre": "Đường"
		}, {
			"id": 89,
			"name": "Lê Duẩn",
			"pre": "Đường"
		}, {
			"id": 562,
			"name": "Lê Gia Định",
			"pre": "Phố"
		}, {
			"id": 492,
			"name": "Lê Ngọc Hân",
			"pre": "Đường"
		}, {
			"id": 155,
			"name": "Lê Phụng Hiểu",
			"pre": "Phố"
		}, {
			"id": 348,
			"name": "Lê Quý Đôn",
			"pre": "Đường"
		}, {
			"id": 535,
			"name": "Lê Thanh Nghị",
			"pre": "Phố"
		}, {
			"id": 154,
			"name": "Lê Văn Hưu",
			"pre": "Phố"
		}, {
			"id": 493,
			"name": "Lò Đúc",
			"pre": "Phố"
		}, {
			"id": 518,
			"name": "Lương Yên",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 536,
			"name": "Mạc Thị Bưởi",
			"pre": "Phố"
		}, {
			"id": 561,
			"name": "Mai Hắc Đế",
			"pre": "Phố"
		}, {
			"id": 9301,
			"name": "Mai Hương",
			"pre": "Phố"
		}, {
			"id": 340,
			"name": "Minh Khai",
			"pre": "Đường"
		}, {
			"id": 466,
			"name": "Nam Dư",
			"pre": "Đường"
		}, {
			"id": 150,
			"name": "Ngô Thì Nhậm",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 560,
			"name": "Nguyễn Bỉnh Khiêm",
			"pre": "Đường"
		}, {
			"id": 494,
			"name": "Nguyễn Cao",
			"pre": "Đường"
		}, {
			"id": 517,
			"name": "Nguyễn Công Trứ",
			"pre": "Đường"
		}, {
			"id": 537,
			"name": "Nguyễn Đình Chiểu",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 2654,
			"name": "Nguyễn Hiền",
			"pre": "Đường"
		}, {
			"id": 357,
			"name": "Nguyễn Hữu Nghĩa",
			"pre": "Đường"
		}, {
			"id": 495,
			"name": "Nguyễn Huy Tự",
			"pre": "Phố"
		}, {
			"id": 468,
			"name": "Nguyễn Khoái",
			"pre": "Đường"
		}, {
			"id": 538,
			"name": "Nguyễn Quyền",
			"pre": "Đường"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 496,
			"name": "Phạm Đình Hổ",
			"pre": "Phố"
		}, {
			"id": 212,
			"name": "Phạm Ngũ Lão",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 5862,
			"name": "Phố Huế",
			"pre": "Phố"
		}, {
			"id": 3878,
			"name": "Phố Vọng",
			"pre": "Phố"
		}, {
			"id": 558,
			"name": "Phù Đổng Thiên Vương",
			"pre": "Phố"
		}, {
			"id": 1255,
			"name": "Phù Đổng Thiên Vương",
			"pre": "Đường"
		}, {
			"id": 497,
			"name": "Phùng Khắc Khoan",
			"pre": "Đường"
		}, {
			"id": 430,
			"name": "Phương Mai",
			"pre": "Phố"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 540,
			"name": "Quỳnh Lôi",
			"pre": "Đường"
		}, {
			"id": 557,
			"name": "Quỳnh Mai",
			"pre": "Phố"
		}, {
			"id": 498,
			"name": "Tạ Quang Bửu",
			"pre": "Phố"
		}, {
			"id": 459,
			"name": "Tam Trinh",
			"pre": "Đường"
		}, {
			"id": 541,
			"name": "Tân Lạc",
			"pre": "Đường"
		}, {
			"id": 2927,
			"name": "Tân Lập",
			"pre": "Đường"
		}, {
			"id": 1184,
			"name": "Tăng Bạt Hổ",
			"pre": "Đường"
		}, {
			"id": 499,
			"name": "Tây Kết",
			"pre": "Đường"
		}, {
			"id": 514,
			"name": "Thái Phiên",
			"pre": "Đường"
		}, {
			"id": 542,
			"name": "Thanh Nhàn",
			"pre": "Đường"
		}, {
			"id": 555,
			"name": "Thể Giao",
			"pre": "Phố"
		}, {
			"id": 500,
			"name": "Thi Sách",
			"pre": "Phố"
		}, {
			"id": 513,
			"name": "Thiền Quang",
			"pre": "Phố"
		}, {
			"id": 543,
			"name": "Thịnh Yên",
			"pre": "Phố"
		}, {
			"id": 554,
			"name": "Thọ Lão",
			"pre": "Đường"
		}, {
			"id": 355,
			"name": "Tô Hiến Thành",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 544,
			"name": "Trần Cao Vân",
			"pre": "Đường"
		}, {
			"id": 553,
			"name": "Trần Đại Nghĩa",
			"pre": "Phố"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 139,
			"name": "Trần Khánh Dư",
			"pre": "Đường"
		}, {
			"id": 545,
			"name": "Trần Khát Chân",
			"pre": "Đường"
		}, {
			"id": 552,
			"name": "Trần Nhân Tông",
			"pre": "Đường"
		}, {
			"id": 503,
			"name": "Trần Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 510,
			"name": "Trần Xuân Soạn",
			"pre": "Phố"
		}, {
			"id": 546,
			"name": "Triệu Việt Vương",
			"pre": "Đường"
		}, {
			"id": 461,
			"name": "Trương Định",
			"pre": "Đường"
		}, {
			"id": 504,
			"name": "Tuệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 5822,
			"name": "Tương Mai",
			"pre": "Phố"
		}, {
			"id": 509,
			"name": "Vân Đồn",
			"pre": "Đường"
		}, {
			"id": 6807,
			"name": "Vân Hồ",
			"pre": "Đường"
		}, {
			"id": 6149,
			"name": "Vân Hồ 2",
			"pre": "Đường"
		}, {
			"id": 547,
			"name": "Vân Hồ I",
			"pre": "Đường"
		}, {
			"id": 551,
			"name": "Vân Hồ III",
			"pre": "Đường"
		}, {
			"id": 505,
			"name": "Vạn Kiếp",
			"pre": "Phố"
		}, {
			"id": 508,
			"name": "Vĩnh Tuy",
			"pre": "Đường"
		}, {
			"id": 2724,
			"name": "Võ Thị Sáu",
			"pre": "Đường"
		}, {
			"id": 550,
			"name": "Vũ Hữu Lợi",
			"pre": "Phố"
		}, {
			"id": 506,
			"name": "Y.E.C Xanh",
			"pre": "Phố"
		}, {
			"id": 2556,
			"name": "Yên Bái",
			"pre": "Đường"
		}, {
			"id": 507,
			"name": "Yên Bái 1",
			"pre": "Phố"
		}, {
			"id": 548,
			"name": "Yên Bái 2",
			"pre": "Phố"
		}, {
			"id": 549,
			"name": "Yên Lạc",
			"pre": "Phố"
		}, {
			"id": 135,
			"name": "Yết Kiêu",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1875,
			"name": "10 Hoa Lư",
			"lat": 21.009401321411133,
			"lng": 105.84746551513672,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 678,
			"name": "141 Trương Định",
			"lat": 20.991165161132812,
			"lng": 105.84956359863281,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 722,
			"name": "229 Phố Vọng",
			"lat": 20.995378494262695,
			"lng": 105.84432220458984,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 603,
			"name": "25 Lạc Trung",
			"lat": 21.002326965332031,
			"lng": 105.86479949951172,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 62,
			"name": "310 Minh Khai",
			"lat": 20.993867874145508,
			"lng": 105.86184692382812,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 13,
			"name": "93 Lò Đúc - Kinh Đô Tower",
			"lat": 21.015636444091797,
			"lng": 105.85718536376953,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1451,
			"name": "CDC Building",
			"lat": 21.010469436645508,
			"lng": 105.84915924072266,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2291,
			"name": "Chung cư 122 Vĩnh Tuy",
			"lat": 20.999267578125,
			"lng": 105.87572479248047,
			"cats": []
		}, {
			"id": 2404,
			"name": "Chung cư 129D Trương Định",
			"lat": 20.992298126220703,
			"lng": 105.84944915771484,
			"cats": []
		}, {
			"id": 2428,
			"name": "Chung cư 622 Minh Khai",
			"lat": 20.998010635375977,
			"lng": 105.86836242675781,
			"cats": []
		}, {
			"id": 1458,
			"name": "Coma Building",
			"lat": 20.996467590332031,
			"lng": 105.85452270507812,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 148,
			"name": "Crystal Tower",
			"lat": 21.009895324707031,
			"lng": 105.85102081298828,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 205,
			"name": "Grand Building",
			"lat": 21.015350341796875,
			"lng": 105.85402679443359,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 621,
			"name": "Green Park",
			"lat": 21.014717102050781,
			"lng": 105.84711456298828,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2197,
			"name": "Green Pearl 378 Minh Khai",
			"lat": 20.996538162231445,
			"lng": 105.86338806152344,
			"cats": [40, 41, 48, 50, 51, 52, 55, 57, 59, 163, 324, 325, 326]
		}, {
			"id": 1519,
			"name": "Hàn Việt Tower",
			"lat": 20.997060775756836,
			"lng": 105.861572265625,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 947,
			"name": "Hòa Bình Green City",
			"lat": 21.000265121459961,
			"lng": 105.86993408203125,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1275,
			"name": "Hoàng Thành Tower",
			"lat": 21.011362075805664,
			"lng": 105.85061645507812,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2383,
			"name": "Liền kề 622 Minh Khai",
			"lat": 20.999074935913086,
			"lng": 105.87060546875,
			"cats": []
		}, {
			"id": 1638,
			"name": "Lilama 124 Minh Khai",
			"lat": 20.994712829589844,
			"lng": 105.85306549072266,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1103,
			"name": "Minh Khai City Plaza",
			"lat": 20.996129989624023,
			"lng": 105.86162567138672,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2418,
			"name": "Park 12 Park Hill - Times City",
			"lat": 20.996578216552734,
			"lng": 105.86519622802734,
			"cats": []
		}, {
			"id": 1111,
			"name": "Platinum Complex",
			"lat": 21.011674880981445,
			"lng": 105.86267852783203,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1456,
			"name": "Prime Centre",
			"lat": 21.018344879150391,
			"lng": 105.84762573242187,
			"cats": [41, 50, 55, 163]
		}, {
			"id": 162,
			"name": "Ruby Plaza Hanoi",
			"lat": 21.015846252441406,
			"lng": 105.85507202148437,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 176,
			"name": "Sky Light",
			"lat": 20.996883392333984,
			"lng": 105.85457611083984,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 204,
			"name": "Tài Tâm",
			"lat": 21.01335334777832,
			"lng": 105.85785675048828,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1065,
			"name": "Thăng Long Garden 250 Minh Khai",
			"lat": 20.993942260742188,
			"lng": 105.85710906982422,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 736,
			"name": "Times City",
			"lat": 20.994922637939453,
			"lng": 105.86794281005859,
			"cats": [48, 55, 57, 59, 324, 326]
		}, {
			"id": 2226,
			"name": "Times City - Park Hill",
			"lat": 20.994333267211914,
			"lng": 105.86756134033203,
			"cats": [48, 50, 55, 57, 59, 324, 326, 362]
		}, {
			"id": 728,
			"name": "TMC Thăng Long - 01 Lương Yên",
			"lat": 21.012016296386719,
			"lng": 105.8629150390625,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1453,
			"name": "Tòa nhà Cty CPXD số 1 HN",
			"lat": 21.017902374267578,
			"lng": 105.84747314453125,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1450,
			"name": "Tòa nhà Thái Bình",
			"lat": 21.009044647216797,
			"lng": 105.85118103027344,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 387,
			"name": "TTTM Chợ Mơ",
			"lat": 20.996904373168945,
			"lng": 105.85028839111328,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1448,
			"name": "V Building",
			"lat": 21.01917839050293,
			"lng": 105.84946441650391,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1459,
			"name": "Vinafor",
			"lat": 21.013250350952148,
			"lng": 105.85842895507812,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 66,
			"name": "Vincom Center Bà Triệu",
			"lat": 21.011552810668945,
			"lng": 105.84925842285156,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1457,
			"name": "VTC Online building",
			"lat": 20.995391845703125,
			"lng": 105.86201477050781,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 200,
			"name": "Zodi Building",
			"lat": 21.013322830200195,
			"lng": 105.85054779052734,
			"cats": [41, 48, 50, 163]
		}]
	}, {
		"id": 21,
		"name": "Hoài Đức",
		"pre": "Huyện",
		"ward": [{
			"id": 10008,
			"name": "An Khánh",
			"pre": "Xã"
		}, {
			"id": 10009,
			"name": "An Thượng",
			"pre": "Xã"
		}, {
			"id": 10031,
			"name": "Cát Quế",
			"pre": "Xã"
		}, {
			"id": 10047,
			"name": "Đắc Sở",
			"pre": "Xã"
		}, {
			"id": 10035,
			"name": "Di Trạch",
			"pre": "Xã"
		}, {
			"id": 10054,
			"name": "Đông La",
			"pre": "Xã"
		}, {
			"id": 10059,
			"name": "Đức Giang",
			"pre": "Xã"
		}, {
			"id": 10060,
			"name": "Đức Thượng",
			"pre": "Xã"
		}, {
			"id": 10041,
			"name": "Dương Liễu",
			"pre": "Xã"
		}, {
			"id": 10065,
			"name": "Kim Chung",
			"pre": "Xã"
		}, {
			"id": 10071,
			"name": "La Phù",
			"pre": "Xã"
		}, {
			"id": 10075,
			"name": "Lại Yên",
			"pre": "Xã"
		}, {
			"id": 10079,
			"name": "Minh Khai",
			"pre": "Xã"
		}, {
			"id": 10086,
			"name": "Sơn Đồng",
			"pre": "Xã"
		}, {
			"id": 10082,
			"name": "Song Phương",
			"pre": "Xã"
		}, {
			"id": 10090,
			"name": "Tiền Yên",
			"pre": "Xã"
		}, {
			"id": 10007,
			"name": "Trạm Trôi",
			"pre": "Thị trấn"
		}, {
			"id": 10099,
			"name": "Vân Canh",
			"pre": "Xã"
		}, {
			"id": 10109,
			"name": "Vân Côn",
			"pre": "Xã"
		}, {
			"id": 10121,
			"name": "Yên Sở",
			"pre": "Xã"
		}],
		"street": [{
			"id": 7772,
			"name": "32",
			"pre": "Đường"
		}, {
			"id": 8437,
			"name": "422",
			"pre": "Đường"
		}, {
			"id": 631,
			"name": "70",
			"pre": "Đường"
		}, {
			"id": 2922,
			"name": "72",
			"pre": "Phố"
		}, {
			"id": 4295,
			"name": "79",
			"pre": "Đường"
		}, {
			"id": 5687,
			"name": "Đại lộ Thăng Long",
			"pre": "Đường"
		}, {
			"id": 566,
			"name": "Đồng Nhân",
			"pre": "Phố"
		}, {
			"id": 10991,
			"name": "La Tinh",
			"pre": "Đường"
		}, {
			"id": 6133,
			"name": "Lai Xá",
			"pre": "Đường"
		}, {
			"id": 595,
			"name": "Láng Hòa Lạc",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 7241,
			"name": "Thụy Ứng",
			"pre": "Đường"
		}, {
			"id": 8963,
			"name": "Tỉnh Lộ 422B",
			"pre": "Đường"
		}, {
			"id": 7509,
			"name": "Yên Vĩnh",
			"pre": "Đường"
		}],
		"project": [{
			"id": 591,
			"name": "An Thịnh I",
			"lat": 21.064477920532227,
			"lng": 105.68864440917969,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1804,
			"name": "Bảo Sơn Paradise",
			"lat": 21.001749038696289,
			"lng": 105.730712890625,
			"cats": [40, 325]
		}, {
			"id": 852,
			"name": "Bright City",
			"lat": 21.06287956237793,
			"lng": 105.72223663330078,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 285,
			"name": "Ciri An Khánh",
			"lat": 21.01838493347168,
			"lng": 105.7027587890625,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 1601,
			"name": "CT Number One",
			"lat": 21.0427303314209,
			"lng": 105.73021697998047,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 597,
			"name": "Dầu khí Đức Giang",
			"lat": 21.058673858642578,
			"lng": 105.70918273925781,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 688,
			"name": "Five Stars",
			"lat": 21.017467498779297,
			"lng": 105.72721862792969,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2372,
			"name": "Gemek Premium",
			"lat": 21.007961273193359,
			"lng": 105.72895812988281,
			"cats": []
		}, {
			"id": 723,
			"name": "Gemek Tower",
			"lat": 21.008392333984375,
			"lng": 105.73024749755859,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 618,
			"name": "Hoa Phượng",
			"lat": 21.001407623291016,
			"lng": 105.72777557373047,
			"cats": [40, 48, 55, 59, 325]
		}, {
			"id": 1485,
			"name": "KĐT An Khánh - An Thượng",
			"lat": 20.9916934967041,
			"lng": 105.70278930664062,
			"cats": [40, 48, 52, 59, 324, 325, 326]
		}, {
			"id": 486,
			"name": "Kim Chung Di Trạch",
			"lat": 21.056106567382812,
			"lng": 105.71633148193359,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 573,
			"name": "Lideco",
			"lat": 21.071165084838867,
			"lng": 105.71151733398437,
			"cats": [40, 41, 48, 52, 55, 59, 325]
		}, {
			"id": 2516,
			"name": "Masteri Villas Nam An Khánh",
			"lat": 20.998750686645508,
			"lng": 105.71778869628906,
			"cats": []
		}, {
			"id": 442,
			"name": "Nam An Khánh",
			"lat": 21.002010345458984,
			"lng": 105.70750427246094,
			"cats": [41, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 592,
			"name": "Sơn Đồng",
			"lat": 21.043411254882813,
			"lng": 105.70864868164062,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 8,
			"name": "Splendora An Khánh",
			"lat": 21.015106201171875,
			"lng": 105.72484588623047,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 875,
			"name": "Tân Việt Tower",
			"lat": 21.073978424072266,
			"lng": 105.69748687744141,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 604,
			"name": "Tây Đô",
			"lat": 21.044395446777344,
			"lng": 105.67465972900391,
			"cats": [48, 50, 55, 324, 325, 326]
		}, {
			"id": 1373,
			"name": "Thăng Long Victory",
			"lat": 21.009687423706055,
			"lng": 105.72159576416016,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2054,
			"name": "The Golden An Khánh",
			"lat": 21.005651473999023,
			"lng": 105.72743225097656,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2380,
			"name": "The Golden An Khánh 32T",
			"lat": 21.004850387573242,
			"lng": 105.72810363769531,
			"cats": []
		}, {
			"id": 691,
			"name": "Tricon Towers",
			"lat": 21.01439094543457,
			"lng": 105.72463226318359,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 48,
			"name": "Vân Canh",
			"lat": 21.041305541992188,
			"lng": 105.73207092285156,
			"cats": [40, 55, 59, 324, 325, 326]
		}, {
			"id": 40,
			"name": "Vườn Cam Vinapol",
			"lat": 21.029722213745117,
			"lng": 105.72012329101562,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2095,
			"name": "Westpoint - Nam đường 32",
			"lat": 21.069169998168945,
			"lng": 105.70370483398437,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 1,
		"name": "Hoàn Kiếm",
		"pre": "Quận",
		"ward": [{
			"id": 41,
			"name": "Chương Dương Độ",
			"pre": "Phường"
		}, {
			"id": 42,
			"name": "Cửa Đông",
			"pre": "Phường"
		}, {
			"id": 43,
			"name": "Cửa Nam",
			"pre": "Phường"
		}, {
			"id": 44,
			"name": "Đồng Xuân",
			"pre": "Phường"
		}, {
			"id": 45,
			"name": "Hàng Bạc",
			"pre": "Phường"
		}, {
			"id": 46,
			"name": "Hàng Bài",
			"pre": "Phường"
		}, {
			"id": 47,
			"name": "Hàng Bồ",
			"pre": "Phường"
		}, {
			"id": 48,
			"name": "Hàng Bông",
			"pre": "Phường"
		}, {
			"id": 49,
			"name": "Hàng Buồm",
			"pre": "Phường"
		}, {
			"id": 50,
			"name": "Hàng Đào",
			"pre": "Phường"
		}, {
			"id": 51,
			"name": "Hàng Gai",
			"pre": "Phường"
		}, {
			"id": 52,
			"name": "Hàng Mã",
			"pre": "Phường"
		}, {
			"id": 53,
			"name": "Hàng Trống",
			"pre": "Phường"
		}, {
			"id": 54,
			"name": "Lý Thái Tổ",
			"pre": "Phường"
		}, {
			"id": 55,
			"name": "Phan Chu Trinh",
			"pre": "Phường"
		}, {
			"id": 56,
			"name": "Phúc Tân",
			"pre": "Phường"
		}, {
			"id": 57,
			"name": "Trần Hưng Đạo",
			"pre": "Phường"
		}, {
			"id": 58,
			"name": "Tràng Tiền",
			"pre": "Phường"
		}],
		"street": [{
			"id": 127,
			"name": "19/12",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 92,
			"name": "An Xá",
			"pre": "Phố"
		}, {
			"id": 178,
			"name": "Ấu Triệu",
			"pre": "Phố"
		}, {
			"id": 179,
			"name": "Bà Triệu",
			"pre": "Phố"
		}, {
			"id": 527,
			"name": "Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 93,
			"name": "Bảo Khánh",
			"pre": "Phố"
		}, {
			"id": 177,
			"name": "Bảo Linh",
			"pre": "Đường"
		}, {
			"id": 180,
			"name": "Bát Đàn",
			"pre": "Phố"
		}, {
			"id": 262,
			"name": "Bát Sứ",
			"pre": "Phố"
		}, {
			"id": 94,
			"name": "Cấm Chỉ",
			"pre": "Phố"
		}, {
			"id": 346,
			"name": "Cao Thắng",
			"pre": "Đường"
		}, {
			"id": 181,
			"name": "Cầu Chương Dương",
			"pre": "Đường"
		}, {
			"id": 261,
			"name": "Cầu Đất",
			"pre": "Đường"
		}, {
			"id": 95,
			"name": "Cầu Đông",
			"pre": "Phố"
		}, {
			"id": 175,
			"name": "Cầu Gỗ",
			"pre": "Phố"
		}, {
			"id": 182,
			"name": "Cầu Long Biên",
			"pre": "Đường"
		}, {
			"id": 260,
			"name": "Cầu Thê Húc",
			"pre": "Đường"
		}, {
			"id": 96,
			"name": "Chả Cá",
			"pre": "Phố"
		}, {
			"id": 174,
			"name": "Chân Cầm",
			"pre": "Phố"
		}, {
			"id": 183,
			"name": "Chiến Thắng",
			"pre": "Đường"
		}, {
			"id": 259,
			"name": "Chợ Gạo",
			"pre": "Phố"
		}, {
			"id": 184,
			"name": "Chương Dương",
			"pre": "Đường"
		}, {
			"id": 258,
			"name": "Chương Dương Độ",
			"pre": "Đường"
		}, {
			"id": 97,
			"name": "Cổ Tân",
			"pre": "Phố"
		}, {
			"id": 173,
			"name": "Cổng Đục",
			"pre": "Đường"
		}, {
			"id": 266,
			"name": "Công Nghiệp 6",
			"pre": "Đường"
		}, {
			"id": 185,
			"name": "Cửa Đông",
			"pre": "Phố"
		}, {
			"id": 257,
			"name": "Cửa Nam",
			"pre": "Phố"
		}, {
			"id": 98,
			"name": "Dã Tượng",
			"pre": "Đường"
		}, {
			"id": 5330,
			"name": "Dal",
			"pre": "Đường"
		}, {
			"id": 5534,
			"name": "Dal 22/12",
			"pre": "Đường"
		}, {
			"id": 5533,
			"name": "Dal 27/7",
			"pre": "Đường"
		}, {
			"id": 172,
			"name": "Đặng Thái Thân",
			"pre": "Phố"
		}, {
			"id": 1096,
			"name": "Đào Duy Từ",
			"pre": "Đường"
		}, {
			"id": 883,
			"name": "Điện Biên",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 99,
			"name": "Đinh Công Tráng",
			"pre": "Đường"
		}, {
			"id": 171,
			"name": "Đinh Lễ",
			"pre": "Đường"
		}, {
			"id": 186,
			"name": "Đinh Liệt",
			"pre": "Phố"
		}, {
			"id": 255,
			"name": "Đình Ngang",
			"pre": "Phố"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 3965,
			"name": "Đoàn Nhữ Hài",
			"pre": "Đường"
		}, {
			"id": 170,
			"name": "Đông Thái",
			"pre": "Đường"
		}, {
			"id": 187,
			"name": "Đồng Xuân",
			"pre": "Phố"
		}, {
			"id": 254,
			"name": "Đường Thành",
			"pre": "Phố"
		}, {
			"id": 101,
			"name": "Gầm Cầu",
			"pre": "Phố"
		}, {
			"id": 169,
			"name": "Gia Ngư",
			"pre": "Phố"
		}, {
			"id": 188,
			"name": "Hạ Hồi",
			"pre": "Đường"
		}, {
			"id": 253,
			"name": "Hà Trung",
			"pre": "Phố"
		}, {
			"id": 102,
			"name": "Hai Bà Trưng",
			"pre": "Phố"
		}, {
			"id": 168,
			"name": "Hàm Long",
			"pre": "Phố"
		}, {
			"id": 189,
			"name": "Hàm Tử Quan",
			"pre": "Đường"
		}, {
			"id": 252,
			"name": "Hàng Bạc",
			"pre": "Phố"
		}, {
			"id": 103,
			"name": "Hàng Bài",
			"pre": "Phố"
		}, {
			"id": 167,
			"name": "Hàng Bè",
			"pre": "Phố"
		}, {
			"id": 190,
			"name": "Hàng Bồ",
			"pre": "Phố"
		}, {
			"id": 251,
			"name": "Hàng Bông",
			"pre": "Phố"
		}, {
			"id": 104,
			"name": "Hàng Buồm",
			"pre": "Phố"
		}, {
			"id": 166,
			"name": "Hàng Bút",
			"pre": "Phố"
		}, {
			"id": 191,
			"name": "Hàng Cá",
			"pre": "Phố"
		}, {
			"id": 250,
			"name": "Hàng Cân",
			"pre": "Phố"
		}, {
			"id": 105,
			"name": "Hàng Chai",
			"pre": "Phố"
		}, {
			"id": 10718,
			"name": "Hàng Chỉ",
			"pre": "Đường"
		}, {
			"id": 165,
			"name": "Hàng Chiếu",
			"pre": "Phố"
		}, {
			"id": 192,
			"name": "Hàng Chĩnh",
			"pre": "Phố"
		}, {
			"id": 488,
			"name": "Hàng Chuối",
			"pre": "Phố"
		}, {
			"id": 249,
			"name": "Hàng Cót",
			"pre": "Phố"
		}, {
			"id": 106,
			"name": "Hàng Da",
			"pre": "Phố"
		}, {
			"id": 164,
			"name": "Hàng Đào",
			"pre": "Phố"
		}, {
			"id": 193,
			"name": "Hàng Dầu",
			"pre": "Phố"
		}, {
			"id": 6867,
			"name": "Hàng Đậu",
			"pre": "Đường"
		}, {
			"id": 107,
			"name": "Hàng Điếu",
			"pre": "Phố"
		}, {
			"id": 163,
			"name": "Hàng Đồng",
			"pre": "Phố"
		}, {
			"id": 194,
			"name": "Hàng Đường",
			"pre": "Phố"
		}, {
			"id": 247,
			"name": "Hàng Gà",
			"pre": "Phố"
		}, {
			"id": 108,
			"name": "Hàng Gai",
			"pre": "Phố"
		}, {
			"id": 162,
			"name": "Hàng Giấy",
			"pre": "Phố"
		}, {
			"id": 6981,
			"name": "Hàng Giầy",
			"pre": "Đường"
		}, {
			"id": 5878,
			"name": "Hàng Hành",
			"pre": "Đường"
		}, {
			"id": 246,
			"name": "Hàng Hòm",
			"pre": "Phố"
		}, {
			"id": 6242,
			"name": "Hàng Hương",
			"pre": "Phố"
		}, {
			"id": 109,
			"name": "Hàng Khay",
			"pre": "Phố"
		}, {
			"id": 161,
			"name": "Hàng Khoai",
			"pre": "Phố"
		}, {
			"id": 196,
			"name": "Hàng Lược",
			"pre": "Phố"
		}, {
			"id": 245,
			"name": "Hàng Mã",
			"pre": "Phố"
		}, {
			"id": 110,
			"name": "Hàng Mắm",
			"pre": "Phố"
		}, {
			"id": 160,
			"name": "Hàng Mành",
			"pre": "Phố"
		}, {
			"id": 197,
			"name": "Hàng Muối",
			"pre": "Phố"
		}, {
			"id": 244,
			"name": "Hàng Ngang",
			"pre": "Phố"
		}, {
			"id": 111,
			"name": "Hàng Nón",
			"pre": "Phố"
		}, {
			"id": 159,
			"name": "Hàng Phèn",
			"pre": "Phố"
		}, {
			"id": 198,
			"name": "Hàng Quạt",
			"pre": "Phố"
		}, {
			"id": 243,
			"name": "Hàng Rươi",
			"pre": "Phố"
		}, {
			"id": 716,
			"name": "Hàng Than",
			"pre": "Đường"
		}, {
			"id": 112,
			"name": "Hàng Thiếc",
			"pre": "Phố"
		}, {
			"id": 158,
			"name": "Hàng Thùng",
			"pre": "Phố"
		}, {
			"id": 199,
			"name": "Hàng Tre",
			"pre": "Phố"
		}, {
			"id": 242,
			"name": "Hàng Trống",
			"pre": "Phố"
		}, {
			"id": 113,
			"name": "Hàng Vải",
			"pre": "Phố"
		}, {
			"id": 157,
			"name": "Hàng Vôi",
			"pre": "Phố"
		}, {
			"id": 200,
			"name": "Hồ Hoàn Kiếm",
			"pre": "Phố"
		}, {
			"id": 241,
			"name": "Hỏa Lò",
			"pre": "Phố"
		}, {
			"id": 5898,
			"name": "Hội Vũ",
			"pre": "Phố"
		}, {
			"id": 114,
			"name": "Hồng Hà",
			"pre": "Đường"
		}, {
			"id": 156,
			"name": "Hồng Phúc",
			"pre": "Phố"
		}, {
			"id": 201,
			"name": "Lãn Ông",
			"pre": "Phố"
		}, {
			"id": 89,
			"name": "Lê Duẩn",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 155,
			"name": "Lê Phụng Hiểu",
			"pre": "Phố"
		}, {
			"id": 202,
			"name": "Lê Thạch",
			"pre": "Đường"
		}, {
			"id": 240,
			"name": "Lê Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 116,
			"name": "Lê Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 154,
			"name": "Lê Văn Hưu",
			"pre": "Phố"
		}, {
			"id": 203,
			"name": "Lê Văn Linh",
			"pre": "Đường"
		}, {
			"id": 239,
			"name": "Liên Trì",
			"pre": "Phố"
		}, {
			"id": 493,
			"name": "Lò Đúc",
			"pre": "Phố"
		}, {
			"id": 117,
			"name": "Lò Rèn",
			"pre": "Phố"
		}, {
			"id": 153,
			"name": "Lò Sũ",
			"pre": "Phố"
		}, {
			"id": 268,
			"name": "Long Biên 2",
			"pre": "Đường"
		}, {
			"id": 204,
			"name": "Lương Ngọc Quyến",
			"pre": "Đường"
		}, {
			"id": 339,
			"name": "Lương Văn Can",
			"pre": "Đường"
		}, {
			"id": 118,
			"name": "Lý Đạo Thành",
			"pre": "Đường"
		}, {
			"id": 152,
			"name": "Lý Nam Đế",
			"pre": "Đường"
		}, {
			"id": 205,
			"name": "Lý Quốc Sư",
			"pre": "Phố"
		}, {
			"id": 237,
			"name": "Lý Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 151,
			"name": "Mã Mây",
			"pre": "Phố"
		}, {
			"id": 206,
			"name": "Nam Ngư",
			"pre": "Phố"
		}, {
			"id": 5879,
			"name": "Ngõ Bảo Khánh",
			"pre": "Đường"
		}, {
			"id": 236,
			"name": "Ngõ Gạch",
			"pre": "Phố"
		}, {
			"id": 5877,
			"name": "Ngõ Huyện",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 150,
			"name": "Ngô Thì Nhậm",
			"pre": "Đường"
		}, {
			"id": 9376,
			"name": "Ngõ Trạm",
			"pre": "Đường"
		}, {
			"id": 1738,
			"name": "Ngô Văn Sở",
			"pre": "Đường"
		}, {
			"id": 121,
			"name": "Nguyễn Chế Nghĩa",
			"pre": "Đường"
		}, {
			"id": 756,
			"name": "Nguyễn Công Hoan",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 208,
			"name": "Nguyễn Gia Thiều",
			"pre": "Đường"
		}, {
			"id": 234,
			"name": "Nguyễn Hữu Huân",
			"pre": "Đường"
		}, {
			"id": 122,
			"name": "Nguyễn Khắc Cần",
			"pre": "Phố"
		}, {
			"id": 148,
			"name": "Nguyên Khiết",
			"pre": "Đường"
		}, {
			"id": 209,
			"name": "Nguyễn Quang Bích",
			"pre": "Đường"
		}, {
			"id": 538,
			"name": "Nguyễn Quyền",
			"pre": "Đường"
		}, {
			"id": 233,
			"name": "Nguyễn Siêu",
			"pre": "Phố"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 147,
			"name": "Nguyễn Thiện Thuật",
			"pre": "Phố"
		}, {
			"id": 927,
			"name": "Nguyễn Thiệp",
			"pre": "Đường"
		}, {
			"id": 232,
			"name": "Nguyễn Tư Giản",
			"pre": "Đường"
		}, {
			"id": 87,
			"name": "Nguyễn Văn Côn",
			"pre": "Đường"
		}, {
			"id": 124,
			"name": "Nguyễn Văn Tố",
			"pre": "Phố"
		}, {
			"id": 146,
			"name": "Nguyễn Xí",
			"pre": "Phố"
		}, {
			"id": 211,
			"name": "Nhà Chung",
			"pre": "Phố"
		}, {
			"id": 231,
			"name": "Nhà Hỏa",
			"pre": "Phố"
		}, {
			"id": 125,
			"name": "Nhà Thờ",
			"pre": "Phố"
		}, {
			"id": 145,
			"name": "Ô Quan Chưởng",
			"pre": "Phố"
		}, {
			"id": 212,
			"name": "Phạm Ngũ Lão",
			"pre": "Đường"
		}, {
			"id": 230,
			"name": "Phạm Sư Mạnh",
			"pre": "Phố"
		}, {
			"id": 6095,
			"name": "Phạm Văn Sáng",
			"pre": "Đường"
		}, {
			"id": 126,
			"name": "Phan Bội Châu",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 229,
			"name": "Phan Huy Chú",
			"pre": "Đường"
		}, {
			"id": 6417,
			"name": "Phát Lộc",
			"pre": "Đường"
		}, {
			"id": 5862,
			"name": "Phố Huế",
			"pre": "Phố"
		}, {
			"id": 143,
			"name": "Phủ Doãn",
			"pre": "Phố"
		}, {
			"id": 4876,
			"name": "Phù Dung",
			"pre": "Phố"
		}, {
			"id": 10876,
			"name": "Phúc Minh",
			"pre": "Đường"
		}, {
			"id": 214,
			"name": "Phúc Tân",
			"pre": "Đường"
		}, {
			"id": 128,
			"name": "Phùng Hưng",
			"pre": "Phố"
		}, {
			"id": 142,
			"name": "Quán Sứ",
			"pre": "Phố"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 227,
			"name": "Tạ Hiện",
			"pre": "Đường"
		}, {
			"id": 6838,
			"name": "Tạm Thương",
			"pre": "Phố"
		}, {
			"id": 4878,
			"name": "Tân Trang",
			"pre": "Đường"
		}, {
			"id": 5673,
			"name": "Thành",
			"pre": "Đường"
		}, {
			"id": 129,
			"name": "Thanh Hà",
			"pre": "Phố"
		}, {
			"id": 141,
			"name": "Thanh Yên",
			"pre": "Đường"
		}, {
			"id": 4877,
			"name": "Thiên Phước",
			"pre": "Đường"
		}, {
			"id": 216,
			"name": "Thợ Nhuộm",
			"pre": "Phố"
		}, {
			"id": 5880,
			"name": "Thọ Xương",
			"pre": "Đường"
		}, {
			"id": 226,
			"name": "Thuốc Bắc",
			"pre": "Phố"
		}, {
			"id": 6833,
			"name": "Tô Tịch",
			"pre": "Phố"
		}, {
			"id": 130,
			"name": "Tố Tịch",
			"pre": "Phố"
		}, {
			"id": 1320,
			"name": "Tôn Đản",
			"pre": "Đường"
		}, {
			"id": 140,
			"name": "Tông Đản",
			"pre": "Phố"
		}, {
			"id": 217,
			"name": "Tống Duy Tân",
			"pre": "Đường"
		}, {
			"id": 207,
			"name": "Trạm",
			"pre": "Phố"
		}, {
			"id": 225,
			"name": "Trần Bình",
			"pre": "Phố"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 139,
			"name": "Trần Khánh Dư",
			"pre": "Đường"
		}, {
			"id": 218,
			"name": "Trần Nguyên Hãn",
			"pre": "Phố"
		}, {
			"id": 552,
			"name": "Trần Nhân Tông",
			"pre": "Đường"
		}, {
			"id": 913,
			"name": "Trần Nhật Duật",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 138,
			"name": "Trần Quang Khải",
			"pre": "Đường"
		}, {
			"id": 219,
			"name": "Trần Quốc Toản",
			"pre": "Đường"
		}, {
			"id": 503,
			"name": "Trần Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 224,
			"name": "Tràng Thi",
			"pre": "Phố"
		}, {
			"id": 132,
			"name": "Tràng Tiền",
			"pre": "Phố"
		}, {
			"id": 1232,
			"name": "Trang Tử",
			"pre": "Đường"
		}, {
			"id": 137,
			"name": "Triệu Quốc Đạt",
			"pre": "Đường"
		}, {
			"id": 546,
			"name": "Triệu Việt Vương",
			"pre": "Đường"
		}, {
			"id": 220,
			"name": "Trương Hán Siêu",
			"pre": "Đường"
		}, {
			"id": 7310,
			"name": "Tức Mạc",
			"pre": "Đường"
		}, {
			"id": 505,
			"name": "Vạn Kiếp",
			"pre": "Phố"
		}, {
			"id": 133,
			"name": "Võ Văn Dũng",
			"pre": "Đường"
		}, {
			"id": 136,
			"name": "Vọng",
			"pre": "Đường"
		}, {
			"id": 221,
			"name": "Vọng Đức",
			"pre": "Đường"
		}, {
			"id": 222,
			"name": "Vọng Hà",
			"pre": "Đường"
		}, {
			"id": 134,
			"name": "Yên Thái",
			"pre": "Đường"
		}, {
			"id": 135,
			"name": "Yết Kiêu",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1449,
			"name": "14 Lý Nam Đế",
			"lat": 21.037698745727539,
			"lng": 105.84561157226562,
			"cats": [41, 50, 55, 163]
		}, {
			"id": 274,
			"name": "33 Đường Thành",
			"lat": 21.033010482788086,
			"lng": 105.84613800048828,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 2149,
			"name": "84 Thợ Nhuộm - Hanoi Apartment Center",
			"lat": 21.023067474365234,
			"lng": 105.84825897216797,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 1442,
			"name": "ACB Office Building",
			"lat": 21.022655487060547,
			"lng": 105.85616302490234,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1443,
			"name": "Artexport House",
			"lat": 21.022377014160156,
			"lng": 105.85581970214844,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1406,
			"name": "BIDV Tower",
			"lat": 21.029483795166016,
			"lng": 105.8570556640625,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 168,
			"name": "Capital Tower",
			"lat": 21.023532867431641,
			"lng": 105.84195709228516,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1409,
			"name": "CornerStone Building",
			"lat": 21.020496368408203,
			"lng": 105.85548400878906,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1244,
			"name": "D’. San Raffles - Hàng Bài",
			"lat": 21.024063110351562,
			"lng": 105.85250091552734,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1437,
			"name": "Ha Noi Tung Shing Square",
			"lat": 21.029870986938477,
			"lng": 105.85633087158203,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 540,
			"name": "Hàng Da Galleria",
			"lat": 21.031278610229492,
			"lng": 105.84628295898437,
			"cats": [48, 53, 55, 59]
		}, {
			"id": 1447,
			"name": "Hanoitourist Building",
			"lat": 21.022365570068359,
			"lng": 105.85539245605469,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1408,
			"name": "International Centre",
			"lat": 21.025062561035156,
			"lng": 105.85547637939453,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1444,
			"name": "Naforimex Building",
			"lat": 21.024694442749023,
			"lng": 105.85152435302734,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1440,
			"name": "Opera Business Centre",
			"lat": 21.024894714355469,
			"lng": 105.85923767089844,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 41,
			"name": "Pacific Place",
			"lat": 21.025217056274414,
			"lng": 105.84336853027344,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1407,
			"name": "Phú Điền Building",
			"lat": 21.024650573730469,
			"lng": 105.84426879882812,
			"cats": [48, 50]
		}, {
			"id": 198,
			"name": "Press Club",
			"lat": 21.025341033935547,
			"lng": 105.85683441162109,
			"cats": [48, 55, 59]
		}, {
			"id": 235,
			"name": "Red River Building",
			"lat": 21.0250244140625,
			"lng": 105.86055755615234,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1112,
			"name": "STD Tower",
			"lat": 21.021015167236328,
			"lng": 105.84740447998047,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1410,
			"name": "Sun City Building",
			"lat": 21.02330207824707,
			"lng": 105.85528564453125,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 247,
			"name": "VCI Tower",
			"lat": 21.020977020263672,
			"lng": 105.85250854492187,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1445,
			"name": "VID Tower 1",
			"lat": 21.023714065551758,
			"lng": 105.84317016601562,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1439,
			"name": "Vietcombank Tower",
			"lat": 21.028390884399414,
			"lng": 105.85769653320312,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 219,
			"name": "Vinaplast Tài Tâm",
			"lat": 21.021751403808594,
			"lng": 105.85432434082031,
			"cats": [41, 48, 50, 55, 163]
		}]
	}, {
		"id": 8,
		"name": "Hoàng Mai",
		"pre": "Quận",
		"ward": [{
			"id": 9476,
			"name": "Đại Kim",
			"pre": "Phường"
		}, {
			"id": 9471,
			"name": "Định Công",
			"pre": "Phường"
		}, {
			"id": 9479,
			"name": "Giáp Bát",
			"pre": "Phường"
		}, {
			"id": 9484,
			"name": "Hoàng Liệt",
			"pre": "Phường"
		}, {
			"id": 9488,
			"name": "Hoàng Văn Thụ",
			"pre": "Phường"
		}, {
			"id": 9509,
			"name": "Lĩnh Nam",
			"pre": "Phường"
		}, {
			"id": 9513,
			"name": "Mai Động",
			"pre": "Phường"
		}, {
			"id": 9517,
			"name": "Tân Mai",
			"pre": "Phường"
		}, {
			"id": 9521,
			"name": "Thanh Trì",
			"pre": "Phường"
		}, {
			"id": 9524,
			"name": "Thịnh Liệt",
			"pre": "Phường"
		}, {
			"id": 9527,
			"name": "Trần Phú",
			"pre": "Phường"
		}, {
			"id": 9529,
			"name": "Tương Mai",
			"pre": "Phường"
		}, {
			"id": 9532,
			"name": "Vĩnh Hưng",
			"pre": "Phường"
		}, {
			"id": 9534,
			"name": "Yên Sở",
			"pre": "Phường"
		}],
		"street": [{
			"id": 6765,
			"name": "Bằng A",
			"pre": "Đường"
		}, {
			"id": 6766,
			"name": "Bằng B",
			"pre": "Đường"
		}, {
			"id": 10414,
			"name": "Bằng Liệt",
			"pre": "Đường"
		}, {
			"id": 1267,
			"name": "Bùi Huy Bích",
			"pre": "Đường"
		}, {
			"id": 309,
			"name": "Bùi Xương Trạch",
			"pre": "Đường"
		}, {
			"id": 175,
			"name": "Cầu Gỗ",
			"pre": "Phố"
		}, {
			"id": 7014,
			"name": "Cầu Lủ",
			"pre": "Đường"
		}, {
			"id": 472,
			"name": "Cầu Thanh Trì",
			"pre": "Đường"
		}, {
			"id": 5907,
			"name": "Đại Đồng",
			"pre": "Phố"
		}, {
			"id": 7127,
			"name": "Đại Kim",
			"pre": "Đường"
		}, {
			"id": 473,
			"name": "Đại Từ",
			"pre": "Đường"
		}, {
			"id": 443,
			"name": "Đặng Xuân Bảng",
			"pre": "Đường"
		}, {
			"id": 7116,
			"name": "Đền Lừ",
			"pre": "Đường"
		}, {
			"id": 7764,
			"name": "Đền Lừ 2",
			"pre": "Đường"
		}, {
			"id": 9025,
			"name": "Đền Lừ 3",
			"pre": "Đường"
		}, {
			"id": 298,
			"name": "Định Công",
			"pre": "Đường"
		}, {
			"id": 5633,
			"name": "Định Công Hạ",
			"pre": "Đường"
		}, {
			"id": 463,
			"name": "Định Công Thượng",
			"pre": "Đường"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 474,
			"name": "Đoàn Kết",
			"pre": "Đường"
		}, {
			"id": 72,
			"name": "Đội Cấn",
			"pre": "Đường"
		}, {
			"id": 10682,
			"name": "Đồng Mơ",
			"pre": "Đường"
		}, {
			"id": 444,
			"name": "Đông Thiên",
			"pre": "Đường"
		}, {
			"id": 310,
			"name": "Giải Phóng",
			"pre": "Đường"
		}, {
			"id": 464,
			"name": "Giáp Bát",
			"pre": "Đường"
		}, {
			"id": 6836,
			"name": "Giáp Lục",
			"pre": "Phố"
		}, {
			"id": 475,
			"name": "Giáp Nhị",
			"pre": "Đường"
		}, {
			"id": 7490,
			"name": "Giáp Tứ",
			"pre": "Đường"
		}, {
			"id": 8221,
			"name": "Họa Mi",
			"pre": "Đường"
		}, {
			"id": 6853,
			"name": "Hoàng Liệt",
			"pre": "Đường"
		}, {
			"id": 445,
			"name": "Hoàng Mai",
			"pre": "Đường"
		}, {
			"id": 3381,
			"name": "Hồng Quang",
			"pre": "Đường"
		}, {
			"id": 9319,
			"name": "Hưng Phúc",
			"pre": "Phố"
		}, {
			"id": 5734,
			"name": "Khuyến Lương",
			"pre": "Đường"
		}, {
			"id": 454,
			"name": "Kim Đồng",
			"pre": "Đường"
		}, {
			"id": 334,
			"name": "Kim Giang",
			"pre": "Đường"
		}, {
			"id": 476,
			"name": "Kim Ngưu",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 3924,
			"name": "Lê Văn Phấn",
			"pre": "Đường"
		}, {
			"id": 5677,
			"name": "Linh Đàm",
			"pre": "Đường"
		}, {
			"id": 5900,
			"name": "Linh Đường",
			"pre": "Đường"
		}, {
			"id": 455,
			"name": "Lĩnh Nam",
			"pre": "Đường"
		}, {
			"id": 465,
			"name": "Lương Khánh Thiện",
			"pre": "Đường"
		}, {
			"id": 477,
			"name": "Mai Động",
			"pre": "Đường"
		}, {
			"id": 447,
			"name": "Mai Khai",
			"pre": "Đường"
		}, {
			"id": 340,
			"name": "Minh Khai",
			"pre": "Đường"
		}, {
			"id": 466,
			"name": "Nam Dư",
			"pre": "Đường"
		}, {
			"id": 8467,
			"name": "Nam Dư Thượng",
			"pre": "Đường"
		}, {
			"id": 7365,
			"name": "Nghiêm Xuân Yêm",
			"pre": "Đường"
		}, {
			"id": 478,
			"name": "Ngọc Hồi",
			"pre": "Đường"
		}, {
			"id": 448,
			"name": "Ngũ Nhạc",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 5027,
			"name": "Nguyễn Cảnh Dị",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 467,
			"name": "Nguyễn Chính",
			"pre": "Đường"
		}, {
			"id": 7910,
			"name": "Nguyễn Công Thái",
			"pre": "Đường"
		}, {
			"id": 517,
			"name": "Nguyễn Công Trứ",
			"pre": "Đường"
		}, {
			"id": 479,
			"name": "Nguyễn Đức Cảnh",
			"pre": "Đường"
		}, {
			"id": 449,
			"name": "Nguyễn Duy Trinh",
			"pre": "Đường"
		}, {
			"id": 458,
			"name": "Nguyễn Hữu Thọ",
			"pre": "Đường"
		}, {
			"id": 468,
			"name": "Nguyễn Khoái",
			"pre": "Đường"
		}, {
			"id": 71,
			"name": "Nguyễn Ngọc Nại",
			"pre": "Đường"
		}, {
			"id": 480,
			"name": "Nguyễn Tam Trinh",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 316,
			"name": "Nguyễn Xiển",
			"pre": "Đường"
		}, {
			"id": 352,
			"name": "Phan Đình Giót",
			"pre": "Đường"
		}, {
			"id": 450,
			"name": "Pháp Vân",
			"pre": "Đường"
		}, {
			"id": 6653,
			"name": "Sen Ngoại",
			"pre": "Đường"
		}, {
			"id": 9117,
			"name": "Sở Thượng",
			"pre": "Phố"
		}, {
			"id": 459,
			"name": "Tam Trinh",
			"pre": "Đường"
		}, {
			"id": 469,
			"name": "Tân Mai",
			"pre": "Đường"
		}, {
			"id": 481,
			"name": "Tây Trà",
			"pre": "Đường"
		}, {
			"id": 451,
			"name": "Thanh Đàm",
			"pre": "Phố"
		}, {
			"id": 460,
			"name": "Thanh Lân",
			"pre": "Đường"
		}, {
			"id": 6854,
			"name": "Thanh Ngân",
			"pre": "Đường"
		}, {
			"id": 470,
			"name": "Thịnh Liệt",
			"pre": "Đường"
		}, {
			"id": 5660,
			"name": "Thúy Lĩnh",
			"pre": "Đường"
		}, {
			"id": 482,
			"name": "Trần Điền",
			"pre": "Phố"
		}, {
			"id": 1248,
			"name": "Trần Hòa",
			"pre": "Đường"
		}, {
			"id": 2335,
			"name": "Trần Nguyên Đán",
			"pre": "Đường"
		}, {
			"id": 452,
			"name": "Trần Thủ Độ",
			"pre": "Đường"
		}, {
			"id": 461,
			"name": "Trương Định",
			"pre": "Đường"
		}, {
			"id": 6901,
			"name": "Tứ Kỳ",
			"pre": "Đường"
		}, {
			"id": 5822,
			"name": "Tương Mai",
			"pre": "Phố"
		}, {
			"id": 471,
			"name": "Tựu Liệt",
			"pre": "Đường"
		}, {
			"id": 8869,
			"name": "Vành Đai 2,5",
			"pre": "Đường"
		}, {
			"id": 8005,
			"name": "Vành Đai 3",
			"pre": "Đường"
		}, {
			"id": 483,
			"name": "Vĩnh Hưng",
			"pre": "Đường"
		}, {
			"id": 508,
			"name": "Vĩnh Tuy",
			"pre": "Đường"
		}, {
			"id": 3696,
			"name": "Vũ Tông Phan",
			"pre": "Phố"
		}, {
			"id": 6361,
			"name": "Yên Duyên",
			"pre": "Phố"
		}, {
			"id": 453,
			"name": "Yên Sở",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2408,
			"name": "",
			"lat": 20.984098434448242,
			"lng": 105.84732818603516,
			"cats": []
		}, {
			"id": 1517,
			"name": "130 Nguyễn Đức Cảnh",
			"lat": 20.987161636352539,
			"lng": 105.85198211669922,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 737,
			"name": "25 Tân Mai",
			"lat": 20.983491897583008,
			"lng": 105.85003662109375,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 467,
			"name": "282 Lĩnh Nam",
			"lat": 20.981918334960937,
			"lng": 105.87937164306641,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 558,
			"name": "409 Lĩnh Nam",
			"lat": 20.983386993408203,
			"lng": 105.8782958984375,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1235,
			"name": "Ao Sào",
			"lat": 20.975595474243164,
			"lng": 105.85230255126953,
			"cats": [41, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 2503,
			"name": "B1-B2 Tây Nam Linh Đàm",
			"lat": 20.964223861694336,
			"lng": 105.82318115234375,
			"cats": []
		}, {
			"id": 2284,
			"name": "Căn hộ Thông tấn xã",
			"lat": 20.976398468017578,
			"lng": 105.8145751953125,
			"cats": []
		}, {
			"id": 1736,
			"name": "Cầu Tiên",
			"lat": 20.97117805480957,
			"lng": 105.84166717529297,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1811,
			"name": "CT3 Tây Nam Linh Đàm",
			"lat": 20.964694976806641,
			"lng": 105.82510375976562,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2080,
			"name": "CT36 - Dream Home",
			"lat": 20.981029510498047,
			"lng": 105.83484649658203,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2182,
			"name": "Đại Kim - Định Công Mở Rộng",
			"lat": 20.977920532226563,
			"lng": 105.83632659912109,
			"cats": [40, 41, 48, 50, 51, 52, 55, 57, 59, 163, 324, 325, 326]
		}, {
			"id": 567,
			"name": "Đền Lừ I",
			"lat": 20.98466682434082,
			"lng": 105.85974884033203,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 21,
			"name": "Đền Lừ II",
			"lat": 20.985368728637695,
			"lng": 105.85875701904297,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1861,
			"name": "Đồng Phát Park View Tower",
			"lat": 20.980098724365234,
			"lng": 105.87424468994141,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 503,
			"name": "Gamuda City",
			"lat": 20.969881057739258,
			"lng": 105.87168121337891,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 2363,
			"name": "Gamuda Gardens",
			"lat": 20.970283508300781,
			"lng": 105.87171173095703,
			"cats": []
		}, {
			"id": 2155,
			"name": "Happy House 296 Lĩnh Nam",
			"lat": 20.981531143188477,
			"lng": 105.88021087646484,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 2143,
			"name": "Hateco Hoàng Mai",
			"lat": 20.961339950561523,
			"lng": 105.86668395996094,
			"cats": [50, 57, 324, 326]
		}, {
			"id": 1906,
			"name": "Helios Tower 75 Tam Trinh",
			"lat": 20.994894027709961,
			"lng": 105.86313629150391,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2032,
			"name": "HH1 Linh Đàm",
			"lat": 20.964565277099609,
			"lng": 105.82731628417969,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2319,
			"name": "HH2 Linh Đàm",
			"lat": 20.964334487915039,
			"lng": 105.82729339599609,
			"cats": []
		}, {
			"id": 1848,
			"name": "HH3 Linh Đàm",
			"lat": 20.963598251342773,
			"lng": 105.82803344726562,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1779,
			"name": "HH4 Linh Đàm",
			"lat": 20.963314056396484,
			"lng": 105.82673645019531,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1921,
			"name": "Hòa Phát 70 NDC Tower",
			"lat": 20.987060546875,
			"lng": 105.85035705566406,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1604,
			"name": "Intracom 208",
			"lat": 21.008220672607422,
			"lng": 105.83955383300781,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2017,
			"name": "K35 Tân Mai",
			"lat": 20.983737945556641,
			"lng": 105.8515625,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 20,
			"name": "KĐT Đại Kim",
			"lat": 20.974800109863281,
			"lng": 105.83530426025391,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 24,
			"name": "KĐT Định Công",
			"lat": 20.985563278198242,
			"lng": 105.83258056640625,
			"cats": [48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 18,
			"name": "KĐT Linh Đàm",
			"lat": 20.971456527709961,
			"lng": 105.82817077636719,
			"cats": [40, 48, 52, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 2030,
			"name": "KĐT Tây Nam Kim Giang",
			"lat": 20.985141754150391,
			"lng": 105.80736541748047,
			"cats": [41, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 654,
			"name": "KĐT Vĩnh Hoàng",
			"lat": 20.984697341918945,
			"lng": 105.86615753173828,
			"cats": [40, 55, 59, 324, 325, 326]
		}, {
			"id": 586,
			"name": "Kim Văn Kim Lũ",
			"lat": 20.973291397094727,
			"lng": 105.82000732421875,
			"cats": [48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 305,
			"name": "Licogi 12",
			"lat": 20.971748352050781,
			"lng": 105.83906555175781,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 65,
			"name": "Lilama 52 Lĩnh Nam",
			"lat": 20.988988876342773,
			"lng": 105.86489868164062,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 63,
			"name": "Momota -151A Nguyễn Đức Cảnh",
			"lat": 20.987424850463867,
			"lng": 105.85154724121094,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 491,
			"name": "Nam Đô Complex",
			"lat": 20.979711532592773,
			"lng": 105.84483337402344,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1469,
			"name": "Nam Hải Lakeview",
			"lat": 20.983457565307617,
			"lng": 105.86720275878906,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1989,
			"name": "New Horizon City - 87 Lĩnh Nam",
			"lat": 20.989423751831055,
			"lng": 105.86656188964844,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2196,
			"name": "NOXH Đồng Mô",
			"lat": 20.973501205444336,
			"lng": 105.82572174072266,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 42,
			"name": "Pháp Vân Tứ Hiệp",
			"lat": 20.956270217895508,
			"lng": 105.84504699707031,
			"cats": [48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1162,
			"name": "Rainbow Linh Đàm",
			"lat": 20.963884353637695,
			"lng": 105.82416534423828,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2473,
			"name": "Rice City Linh Đàm",
			"lat": 20.963834762573242,
			"lng": 105.82245635986328,
			"cats": []
		}, {
			"id": 1201,
			"name": "Riverside Tower 79 Thanh Đàm",
			"lat": 20.993234634399414,
			"lng": 105.88736724853516,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 177,
			"name": "Ruby Tower",
			"lat": 20.989273071289063,
			"lng": 105.83251953125,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 782,
			"name": "Sky Garden Towers",
			"lat": 20.982349395751953,
			"lng": 105.83840942382812,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1402,
			"name": "South Tower Hoàng Liệt",
			"lat": 20.962495803833008,
			"lng": 105.84484100341797,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2188,
			"name": "Star AD1 (ADG Palace)",
			"lat": 20.98951530456543,
			"lng": 105.86774444580078,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 2508,
			"name": "T\u0026T Vĩnh Hưng",
			"lat": 20.998937606811523,
			"lng": 105.88019561767578,
			"cats": []
		}, {
			"id": 1400,
			"name": "Tây Nam Hồ Linh Đàm",
			"lat": 20.96422004699707,
			"lng": 105.82492065429687,
			"cats": [41, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 1193,
			"name": "The Manor Central Park",
			"lat": 20.972890853881836,
			"lng": 105.81534576416016,
			"cats": [40, 41, 48, 50, 52, 55, 324, 325, 326]
		}, {
			"id": 2429,
			"name": "The One Residence - Gamuda Garden",
			"lat": 20.970296859741211,
			"lng": 105.87197875976562,
			"cats": []
		}, {
			"id": 2430,
			"name": "The Two Residence - Gamuda Garden",
			"lat": 20.97004508972168,
			"lng": 105.87799072265625,
			"cats": []
		}, {
			"id": 480,
			"name": "Thịnh Liệt",
			"lat": 20.979793548583984,
			"lng": 105.85580444335937,
			"cats": [40, 41, 48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 217,
			"name": "Tiến Phú",
			"lat": 20.983417510986328,
			"lng": 105.86653137207031,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 174,
			"name": "TTTM Đền Lừ",
			"lat": 20.984764099121094,
			"lng": 105.85994720458984,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1753,
			"name": "VP2 Linh Đàm",
			"lat": 20.964187622070313,
			"lng": 105.83052825927734,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1218,
			"name": "VP3 Linh Đàm",
			"lat": 20.964454650878906,
			"lng": 105.83135986328125,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1869,
			"name": "VP4 Linh Đàm",
			"lat": 20.963281631469727,
			"lng": 105.83101654052734,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1217,
			"name": "VP5 Linh Đàm",
			"lat": 20.96356201171875,
			"lng": 105.83161163330078,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1394,
			"name": "VP6 Linh Đàm",
			"lat": 20.967321395874023,
			"lng": 105.83330535888672,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2467,
			"name": "VP7 Linh Đàm",
			"lat": 20.965320587158203,
			"lng": 105.83816528320313,
			"cats": []
		}]
	}, {
		"id": 9,
		"name": "Long Biên",
		"pre": "Quận",
		"ward": [{
			"id": 9376,
			"name": "Bồ Đề",
			"pre": "Phường"
		}, {
			"id": 9383,
			"name": "Cự Khối",
			"pre": "Phường"
		}, {
			"id": 9386,
			"name": "Đức Giang",
			"pre": "Phường"
		}, {
			"id": 9379,
			"name": "Gia Thụy",
			"pre": "Phường"
		}, {
			"id": 9390,
			"name": "Giang Biên",
			"pre": "Phường"
		}, {
			"id": 9394,
			"name": "Long Biên",
			"pre": "Phường"
		}, {
			"id": 9395,
			"name": "Ngọc Lâm",
			"pre": "Phường"
		}, {
			"id": 9396,
			"name": "Ngọc Thụy",
			"pre": "Phường"
		}, {
			"id": 9398,
			"name": "Phúc Đồng",
			"pre": "Phường"
		}, {
			"id": 9404,
			"name": "Phúc Lợi",
			"pre": "Phường"
		}, {
			"id": 9408,
			"name": "Sài Đồng",
			"pre": "Phường"
		}, {
			"id": 9410,
			"name": "Thạch Bàn",
			"pre": "Phường"
		}, {
			"id": 9413,
			"name": "Thượng Thanh",
			"pre": "Phường"
		}, {
			"id": 9416,
			"name": "Việt Hưng",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6340,
			"name": "Ái Mộ",
			"pre": "Đường"
		}, {
			"id": 2932,
			"name": "Anh Đào",
			"pre": "Đường"
		}, {
			"id": 9468,
			"name": "Anh Đào 1",
			"pre": "Đường"
		}, {
			"id": 9311,
			"name": "Anh Đào 10",
			"pre": "Đường"
		}, {
			"id": 9476,
			"name": "Anh Đào 11",
			"pre": "Đường"
		}, {
			"id": 10551,
			"name": "Anh Đào 12",
			"pre": "Đường"
		}, {
			"id": 9469,
			"name": "Anh Đào 2",
			"pre": "Đường"
		}, {
			"id": 9470,
			"name": "Anh Đào 3",
			"pre": "Đường"
		}, {
			"id": 9471,
			"name": "Anh Đào 4",
			"pre": "Đường"
		}, {
			"id": 9472,
			"name": "Anh Đào 5",
			"pre": "Đường"
		}, {
			"id": 9473,
			"name": "Anh Đào 6",
			"pre": "Đường"
		}, {
			"id": 9474,
			"name": "Anh Đào 7",
			"pre": "Đường"
		}, {
			"id": 9428,
			"name": "Anh Đào 8",
			"pre": "Đường"
		}, {
			"id": 9475,
			"name": "Anh Đào 9",
			"pre": "Đường"
		}, {
			"id": 9325,
			"name": "Bắc Biên",
			"pre": "Đường"
		}, {
			"id": 8989,
			"name": "Bắc Cầu",
			"pre": "Đường"
		}, {
			"id": 9136,
			"name": "Bằng Lăng",
			"pre": "Đường"
		}, {
			"id": 9701,
			"name": "Bằng Lăng 10",
			"pre": "Đường"
		}, {
			"id": 9702,
			"name": "Bằng Lăng 11",
			"pre": "Đường"
		}, {
			"id": 9703,
			"name": "Bằng Lăng 12",
			"pre": "Đường"
		}, {
			"id": 9695,
			"name": "Bằng Lăng 3",
			"pre": "Đường"
		}, {
			"id": 9696,
			"name": "Bằng Lăng 4",
			"pre": "Đường"
		}, {
			"id": 9694,
			"name": "Bằng Lăng 5",
			"pre": "Đường"
		}, {
			"id": 9697,
			"name": "Bằng Lăng 6",
			"pre": "Đường"
		}, {
			"id": 9698,
			"name": "Bằng Lăng 7",
			"pre": "Đường"
		}, {
			"id": 9699,
			"name": "Bằng Lăng 8",
			"pre": "Đường"
		}, {
			"id": 9700,
			"name": "Bằng Lăng 9",
			"pre": "Đường"
		}, {
			"id": 264,
			"name": "Bồ Đề",
			"pre": "Đường"
		}, {
			"id": 75,
			"name": "Bưởi",
			"pre": "Đường"
		}, {
			"id": 3980,
			"name": "Bưởi",
			"pre": "Đường"
		}, {
			"id": 8606,
			"name": "Cầu Bây",
			"pre": "Đường"
		}, {
			"id": 7108,
			"name": "Cổ Linh",
			"pre": "Đường"
		}, {
			"id": 3775,
			"name": "Cộng Hòa",
			"pre": "Đường"
		}, {
			"id": 265,
			"name": "Công Nghiệp 1",
			"pre": "Đường"
		}, {
			"id": 273,
			"name": "Công Nghiệp 2",
			"pre": "Đường"
		}, {
			"id": 282,
			"name": "Công Nghiệp 3",
			"pre": "Đường"
		}, {
			"id": 290,
			"name": "Công Nghiệp 4",
			"pre": "Đường"
		}, {
			"id": 274,
			"name": "Công Nghiệp 8",
			"pre": "Đường"
		}, {
			"id": 8207,
			"name": "Đặng Vũ Hỷ",
			"pre": "Đường"
		}, {
			"id": 2462,
			"name": "Đoàn Khuê",
			"pre": "Đường"
		}, {
			"id": 797,
			"name": "Độc Lập",
			"pre": "Đường"
		}, {
			"id": 283,
			"name": "Đức Giang",
			"pre": "Đường"
		}, {
			"id": 4005,
			"name": "Gia Quất",
			"pre": "Đường"
		}, {
			"id": 10222,
			"name": "Gia Thượng",
			"pre": "Đường"
		}, {
			"id": 7661,
			"name": "Gia Thụy",
			"pre": "Đường"
		}, {
			"id": 4843,
			"name": "Hoa Hồng",
			"pre": "Đường"
		}, {
			"id": 291,
			"name": "Hoa Lâm",
			"pre": "Đường"
		}, {
			"id": 4842,
			"name": "Hoa Lan",
			"pre": "Đường"
		}, {
			"id": 9477,
			"name": "Hoa Lan 1",
			"pre": "Đường"
		}, {
			"id": 9403,
			"name": "Hoa Lan 2",
			"pre": "Đường"
		}, {
			"id": 9478,
			"name": "Hoa Lan 3",
			"pre": "Đường"
		}, {
			"id": 9329,
			"name": "Hoa Lan 4",
			"pre": "Đường"
		}, {
			"id": 8540,
			"name": "Hoa Lan 5",
			"pre": "Đường"
		}, {
			"id": 9479,
			"name": "Hoa Lan 6",
			"pre": "Đường"
		}, {
			"id": 9480,
			"name": "Hoa Lan 7",
			"pre": "Đường"
		}, {
			"id": 9481,
			"name": "Hoa Lan 8",
			"pre": "Đường"
		}, {
			"id": 4847,
			"name": "Hoa Phượng",
			"pre": "Đường"
		}, {
			"id": 10342,
			"name": "Hoa Phượng 1",
			"pre": "Đường"
		}, {
			"id": 9404,
			"name": "Hoa Phượng 2",
			"pre": "Đường"
		}, {
			"id": 9392,
			"name": "Hoa Phượng 3",
			"pre": "Đường"
		}, {
			"id": 9368,
			"name": "Hoa Phượng 4",
			"pre": "Đường"
		}, {
			"id": 9704,
			"name": "Hoa Phượng 5",
			"pre": "Đường"
		}, {
			"id": 9287,
			"name": "Hoa Phượng 6",
			"pre": "Đường"
		}, {
			"id": 7140,
			"name": "Hoa Phượng 7",
			"pre": "Đường"
		}, {
			"id": 9705,
			"name": "Hoa Phượng 8",
			"pre": "Đường"
		}, {
			"id": 4838,
			"name": "Hoa Sữa",
			"pre": "Đường"
		}, {
			"id": 9342,
			"name": "Hoa Sữa 1",
			"pre": "Đường"
		}, {
			"id": 10163,
			"name": "Hoa Sữa 10",
			"pre": "Đường"
		}, {
			"id": 10164,
			"name": "Hoa Sữa 11",
			"pre": "Đường"
		}, {
			"id": 9330,
			"name": "Hoa Sữa 2",
			"pre": "Đường"
		}, {
			"id": 9258,
			"name": "Hoa Sữa 3",
			"pre": "Đường"
		}, {
			"id": 9307,
			"name": "Hoa Sữa 4",
			"pre": "Đường"
		}, {
			"id": 9335,
			"name": "Hoa Sữa 5",
			"pre": "Đường"
		}, {
			"id": 9652,
			"name": "Hoa Sữa 6",
			"pre": "Đường"
		}, {
			"id": 9723,
			"name": "Hoa Sữa 7",
			"pre": "Đường"
		}, {
			"id": 10161,
			"name": "Hoa Sữa 8",
			"pre": "Đường"
		}, {
			"id": 10162,
			"name": "Hoa Sữa 9",
			"pre": "Đường"
		}, {
			"id": 6047,
			"name": "Hoàng Như Tiếp",
			"pre": "Đường"
		}, {
			"id": 114,
			"name": "Hồng Hà",
			"pre": "Đường"
		}, {
			"id": 3010,
			"name": "Huỳnh Tấn Phát",
			"pre": "Đường"
		}, {
			"id": 1808,
			"name": "Huỳnh Văn Nghệ",
			"pre": "Đường"
		}, {
			"id": 6769,
			"name": "Kẻ Tạnh",
			"pre": "Phố"
		}, {
			"id": 9076,
			"name": "Kim Quan",
			"pre": "Đường"
		}, {
			"id": 267,
			"name": "Lâm Du",
			"pre": "Đường"
		}, {
			"id": 9280,
			"name": "Lâm Hạ",
			"pre": "Đường"
		}, {
			"id": 275,
			"name": "Lệ Mật",
			"pre": "Phố"
		}, {
			"id": 73,
			"name": "Liễu giai",
			"pre": "Đường"
		}, {
			"id": 284,
			"name": "Long Biên",
			"pre": "Đường"
		}, {
			"id": 292,
			"name": "Long Biên 1",
			"pre": "Đường"
		}, {
			"id": 268,
			"name": "Long Biên 2",
			"pre": "Đường"
		}, {
			"id": 10145,
			"name": "Lưu Khánh Đàm",
			"pre": "Đường"
		}, {
			"id": 4006,
			"name": "Mai Phúc",
			"pre": "Phố"
		}, {
			"id": 6665,
			"name": "Nam Đuống",
			"pre": "Đường"
		}, {
			"id": 276,
			"name": "Ngô Gia Khảm",
			"pre": "Đường"
		}, {
			"id": 285,
			"name": "Ngô Gia Tự",
			"pre": "Đường"
		}, {
			"id": 293,
			"name": "Ngọc Lâm",
			"pre": "Đường"
		}, {
			"id": 269,
			"name": "Ngọc Thụy",
			"pre": "Đường"
		}, {
			"id": 6363,
			"name": "Ngọc Trì",
			"pre": "Phố"
		}, {
			"id": 277,
			"name": "Nguyễn Cao Luyện",
			"pre": "Đường"
		}, {
			"id": 286,
			"name": "Nguyễn Đức Thuận",
			"pre": "Đường"
		}, {
			"id": 208,
			"name": "Nguyễn Gia Thiều",
			"pre": "Đường"
		}, {
			"id": 294,
			"name": "Nguyễn Sơn",
			"pre": "Đường"
		}, {
			"id": 6048,
			"name": "Nguyên Tử Lực",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 3057,
			"name": "Nguyễn Văn Hưởng",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 8749,
			"name": "Nhật",
			"pre": "Đường"
		}, {
			"id": 287,
			"name": "Ô Cách",
			"pre": "Đường"
		}, {
			"id": 295,
			"name": "Phú Viên",
			"pre": "Đường"
		}, {
			"id": 6678,
			"name": "Phúc Đồng",
			"pre": "Đường"
		}, {
			"id": 7877,
			"name": "Quốc Lộ 5",
			"pre": "Đường"
		}, {
			"id": 288,
			"name": "Sài Đồng",
			"pre": "Phố"
		}, {
			"id": 4015,
			"name": "Tân Thụy",
			"pre": "Đường"
		}, {
			"id": 296,
			"name": "Thạch Bàn",
			"pre": "Đường"
		}, {
			"id": 5637,
			"name": "Thạch Cầu",
			"pre": "Phố"
		}, {
			"id": 4017,
			"name": "Thanh Am",
			"pre": "Đường"
		}, {
			"id": 5942,
			"name": "Thép Mới",
			"pre": "Đường"
		}, {
			"id": 2097,
			"name": "Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 641,
			"name": "Thượng Cát",
			"pre": "Phố"
		}, {
			"id": 10882,
			"name": "Thượng Đồng",
			"pre": "Đường"
		}, {
			"id": 4018,
			"name": "Thượng Thanh",
			"pre": "Đường"
		}, {
			"id": 74,
			"name": "Thụy Khuyê",
			"pre": "Đường"
		}, {
			"id": 7514,
			"name": "Tình Quang",
			"pre": "Đường"
		}, {
			"id": 207,
			"name": "Trạm",
			"pre": "Phố"
		}, {
			"id": 8057,
			"name": "Trung Hà",
			"pre": "Đường"
		}, {
			"id": 280,
			"name": "Trường Lâm",
			"pre": "Đường"
		}, {
			"id": 1411,
			"name": "Trường Thạnh",
			"pre": "Đường"
		}, {
			"id": 289,
			"name": "Tư Đình",
			"pre": "Đường"
		}, {
			"id": 297,
			"name": "Vạn Hạnh",
			"pre": "Đường"
		}, {
			"id": 272,
			"name": "Việt Hưng",
			"pre": "Phố"
		}, {
			"id": 281,
			"name": "Vũ Xuân Thiều",
			"pre": "Đường"
		}, {
			"id": 7819,
			"name": "Xóm Lò",
			"pre": "Đường"
		}],
		"project": [{
			"id": 677,
			"name": "45 Nguyễn Sơn",
			"lat": 21.047618865966797,
			"lng": 105.87711334228516,
			"cats": [55, 324, 326]
		}, {
			"id": 2352,
			"name": "Aeon Mall Long Biên",
			"lat": 21.029922485351563,
			"lng": 105.88245391845703,
			"cats": []
		}, {
			"id": 964,
			"name": "Berriver Long Biên",
			"lat": 21.04414176940918,
			"lng": 105.87728881835937,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1661,
			"name": "C17 Bộ Công An",
			"lat": 21.053701400756836,
			"lng": 105.87014770507812,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 282,
			"name": "Canal Park",
			"lat": 21.018646240234375,
			"lng": 105.92237091064453,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 458,
			"name": "Công viên công nghệ thông tin Hà Nội",
			"lat": 21.028049468994141,
			"lng": 105.90022277832031,
			"cats": [48, 50, 53, 55, 57, 59]
		}, {
			"id": 590,
			"name": "Hà Nội Garden City",
			"lat": 21.019697189331055,
			"lng": 105.9205322265625,
			"cats": [41, 48, 50, 52, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 2333,
			"name": "Happy Star Tower",
			"lat": 21.060039520263672,
			"lng": 105.91365051269531,
			"cats": []
		}, {
			"id": 2397,
			"name": "Him Lam Thạch Bàn 2",
			"lat": 21.024032592773438,
			"lng": 105.91035461425781,
			"cats": []
		}, {
			"id": 667,
			"name": "Hoàng Quy",
			"lat": 21.037178039550781,
			"lng": 105.87306976318359,
			"cats": [55, 324, 326]
		}, {
			"id": 250,
			"name": "Incomex",
			"lat": 21.03144645690918,
			"lng": 105.90082550048828,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1757,
			"name": "Khu đô thị Thượng Thanh",
			"lat": 21.07234001159668,
			"lng": 105.89544677734375,
			"cats": [40, 52, 53, 55, 324, 325, 326]
		}, {
			"id": 1473,
			"name": "Lotus Lake View",
			"lat": 21.047859191894531,
			"lng": 105.88468170166016,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1780,
			"name": "Mipec Riverside",
			"lat": 21.045633316040039,
			"lng": 105.86666870117187,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2208,
			"name": "New Space",
			"lat": 21.0640926361084,
			"lng": 105.91490173339844,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 182,
			"name": "Plaschem Plaza",
			"lat": 21.05055046081543,
			"lng": 105.88479614257813,
			"cats": [48, 50, 55]
		}, {
			"id": 2323,
			"name": "Rice Home Sông Hồng",
			"lat": 21.053829193115234,
			"lng": 105.87761688232422,
			"cats": []
		}, {
			"id": 2259,
			"name": "Ruby City",
			"lat": 21.062240600585938,
			"lng": 105.91371917724609,
			"cats": []
		}, {
			"id": 1323,
			"name": "Sài Đồng",
			"lat": 21.037466049194336,
			"lng": 105.90750885009766,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 907,
			"name": "Savico MegaMall",
			"lat": 21.050495147705078,
			"lng": 105.89337921142578,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 218,
			"name": "Silver Wings Building - Mekong",
			"lat": 21.042753219604492,
			"lng": 105.87055206298828,
			"cats": [55, 324, 326]
		}, {
			"id": 1554,
			"name": "Sunrise Building 3",
			"lat": 21.03947639465332,
			"lng": 105.90586090087891,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1361,
			"name": "Thạch Bàn",
			"lat": 21.01905632019043,
			"lng": 105.90640258789063,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2344,
			"name": "Valencia Garden",
			"lat": 21.063098907470703,
			"lng": 105.90852355957031,
			"cats": []
		}, {
			"id": 51,
			"name": "Việt Hưng",
			"lat": 21.062690734863281,
			"lng": 105.90833282470703,
			"cats": [40, 55, 59, 324, 325, 326]
		}, {
			"id": 994,
			"name": "Vincom Center Long Bien",
			"lat": 21.050512313842773,
			"lng": 105.91690063476562,
			"cats": [41, 48, 55, 59, 163]
		}, {
			"id": 761,
			"name": "Vinhomes Riverside",
			"lat": 21.04609489440918,
			"lng": 105.91554260253906,
			"cats": [44, 48, 50, 55, 57, 59, 324, 325, 326]
		}]
	}, {
		"id": 17,
		"name": "Mê Linh",
		"pre": "Huyện",
		"ward": [{
			"id": 10143,
			"name": "Chi Đông",
			"pre": "Thị trấn"
		}, {
			"id": 10164,
			"name": "Chu Phan",
			"pre": "Xã"
		}, {
			"id": 10167,
			"name": "Đại Thịnh",
			"pre": "Xã"
		}, {
			"id": 10173,
			"name": "Hoàng Kim",
			"pre": "Xã"
		}, {
			"id": 10179,
			"name": "Kim Hoa",
			"pre": "Xã"
		}, {
			"id": 10189,
			"name": "Liên Mạc",
			"pre": "Xã"
		}, {
			"id": 10192,
			"name": "Mê Linh",
			"pre": "Xã"
		}, {
			"id": 10145,
			"name": "Quang Minh",
			"pre": "Thị trấn"
		}, {
			"id": 10203,
			"name": "Tam Đồng",
			"pre": "Xã"
		}, {
			"id": 10212,
			"name": "Thạch Đà",
			"pre": "Xã"
		}, {
			"id": 10219,
			"name": "Thanh Lâm",
			"pre": "Xã"
		}, {
			"id": 10226,
			"name": "Tiền Phong",
			"pre": "Xã"
		}, {
			"id": 10232,
			"name": "Tiến Thắng",
			"pre": "Xã"
		}, {
			"id": 10235,
			"name": "Tiến Thịnh",
			"pre": "Xã"
		}, {
			"id": 10239,
			"name": "Tráng Việt",
			"pre": "Xã"
		}, {
			"id": 10243,
			"name": "Tự Lập",
			"pre": "Xã"
		}, {
			"id": 10248,
			"name": "Văn Khê",
			"pre": "Xã"
		}, {
			"id": 10251,
			"name": "Vạn Yên",
			"pre": "Xã"
		}],
		"street": [{
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 702,
			"name": "23B",
			"pre": "Đường"
		}, {
			"id": 7169,
			"name": "353",
			"pre": "Đường"
		}, {
			"id": 679,
			"name": "Bắc Thăng Long",
			"pre": "Đường"
		}, {
			"id": 9080,
			"name": "Bảo Việt",
			"pre": "Đường"
		}, {
			"id": 8372,
			"name": "Cao tốc Thăng Long Nội Bài",
			"pre": "Đường"
		}, {
			"id": 7578,
			"name": "Cây Xoài",
			"pre": "Đường"
		}, {
			"id": 2943,
			"name": "Dân Sinh",
			"pre": "Đường"
		}, {
			"id": 7245,
			"name": "Hà Phong",
			"pre": "Đường"
		}, {
			"id": 8747,
			"name": "Hoa Bằng Lăng",
			"pre": "Đường"
		}, {
			"id": 7579,
			"name": "Hoa Điệp Vàng",
			"pre": "Đường"
		}, {
			"id": 8748,
			"name": "Hoa Ngọc Lan",
			"pre": "Đường"
		}, {
			"id": 6162,
			"name": "Long Việt",
			"pre": "Đường"
		}, {
			"id": 6801,
			"name": "Phố Yên",
			"pre": "Đường"
		}, {
			"id": 7246,
			"name": "Quang Minh",
			"pre": "Đường"
		}, {
			"id": 7678,
			"name": "Quốc lộ 23",
			"pre": "Đường"
		}, {
			"id": 7919,
			"name": "Quốc lộ 23B",
			"pre": "Đường"
		}, {
			"id": 7951,
			"name": "Quốc lộ 308",
			"pre": "Đường"
		}, {
			"id": 773,
			"name": "Tỉnh lộ 301",
			"pre": "Đường"
		}, {
			"id": 774,
			"name": "Tỉnh lộ 312",
			"pre": "Đường"
		}, {
			"id": 7247,
			"name": "Trung Sơn Trầm",
			"pre": "Đường"
		}, {
			"id": 7574,
			"name": "Vành Đai 4",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 8010,
			"name": "Yên Nhân",
			"pre": "Đường"
		}],
		"project": [{
			"id": 551,
			"name": "AIC Mê Linh",
			"lat": 21.167276382446289,
			"lng": 105.7579345703125,
			"cats": [48, 55, 59, 325]
		}, {
			"id": 557,
			"name": "Ba Đình Mê Linh",
			"lat": 21.155374526977539,
			"lng": 105.74903869628906,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 556,
			"name": "BIDV Scienco 5 Mê Linh",
			"lat": 21.165323257446289,
			"lng": 105.75479888916016,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 67,
			"name": "CEO Mê Linh",
			"lat": 21.17054557800293,
			"lng": 105.74478912353516,
			"cats": [40, 41, 48, 50, 52, 55, 324, 325, 326]
		}, {
			"id": 73,
			"name": "Chi Đông",
			"lat": 21.220821380615234,
			"lng": 105.75598907470703,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 656,
			"name": "Chung cư các KCN - Mê Linh",
			"lat": 21.162483215332031,
			"lng": 105.76239013671875,
			"cats": [41, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 608,
			"name": "Cienco 5 Mê Linh",
			"lat": 21.165542602539063,
			"lng": 105.75314331054687,
			"cats": [48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 882,
			"name": "Diamond Park New",
			"lat": 21.164947509765625,
			"lng": 105.76665496826172,
			"cats": [48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 69,
			"name": "Hà Phong",
			"lat": 21.162040710449219,
			"lng": 105.76198577880859,
			"cats": [40, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 635,
			"name": "Hoàng Vân",
			"lat": 21.161333084106445,
			"lng": 105.7567138671875,
			"cats": [48, 52, 55, 324, 325, 326]
		}, {
			"id": 1910,
			"name": "KCN Quang Minh",
			"lat": 21.193775177001953,
			"lng": 105.76593780517578,
			"cats": [48, 50, 53, 55, 59]
		}, {
			"id": 569,
			"name": "KĐT Quang Minh",
			"lat": 21.196413040161133,
			"lng": 105.78218078613281,
			"cats": [40, 44, 48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1789,
			"name": "Licogi 18 - Mê Linh",
			"lat": 21.190153121948242,
			"lng": 105.78215789794922,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 584,
			"name": "Mê Linh - Thanh Lâm - Đại Thịnh",
			"lat": 21.198097229003906,
			"lng": 105.71954345703125,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 70,
			"name": "Minh Giang Đầm Và",
			"lat": 21.137546539306641,
			"lng": 105.76342010498047,
			"cats": [40, 41, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 78,
			"name": "Phúc Việt",
			"lat": 21.14903450012207,
			"lng": 105.76602172851562,
			"cats": [44, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 1920,
			"name": "Rose Valley",
			"lat": 21.172445297241211,
			"lng": 105.76437377929687,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 56,
			"name": "Tiền Phong",
			"lat": 21.141590118408203,
			"lng": 105.7637939453125,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 616,
			"name": "Tùng Phương",
			"lat": 21.189403533935547,
			"lng": 105.71950531005859,
			"cats": [40, 48, 55, 325]
		}]
	}, {
		"id": 29,
		"name": "Mỹ Đức",
		"pre": "Huyện",
		"ward": [{
			"id": 10272,
			"name": "An Mỹ",
			"pre": "Xã"
		}, {
			"id": 10277,
			"name": "An Phú",
			"pre": "Xã"
		}, {
			"id": 10280,
			"name": "An Tiến",
			"pre": "Xã"
		}, {
			"id": 10284,
			"name": "Bột Xuyên",
			"pre": "Xã"
		}, {
			"id": 10290,
			"name": "Đại Hưng",
			"pre": "Xã"
		}, {
			"id": 10267,
			"name": "Đại Nghĩa",
			"pre": "Thị trấn"
		}, {
			"id": 10295,
			"name": "Đốc Tín",
			"pre": "Xã"
		}, {
			"id": 10306,
			"name": "Đồng Tâm",
			"pre": "Xã"
		}, {
			"id": 10313,
			"name": "Hồng Sơn",
			"pre": "Xã"
		}, {
			"id": 10320,
			"name": "Hợp Thanh",
			"pre": "Xã"
		}, {
			"id": 10325,
			"name": "Hợp Tiến",
			"pre": "Xã"
		}, {
			"id": 10331,
			"name": "Hùng Tiến",
			"pre": "Xã"
		}, {
			"id": 10336,
			"name": "Hương Sơn",
			"pre": "Xã"
		}, {
			"id": 10340,
			"name": "Lê Thanh",
			"pre": "Xã"
		}, {
			"id": 10344,
			"name": "Mỹ Thành",
			"pre": "Xã"
		}, {
			"id": 10348,
			"name": "Phù Lưu Tế",
			"pre": "Xã"
		}, {
			"id": 10350,
			"name": "Phúc Lâm",
			"pre": "Xã"
		}, {
			"id": 10353,
			"name": "Phùng Xá",
			"pre": "Xã"
		}, {
			"id": 10363,
			"name": "Thượng Lâm",
			"pre": "Xã"
		}, {
			"id": 10370,
			"name": "Tuy Lai",
			"pre": "Xã"
		}, {
			"id": 10381,
			"name": "Vạn Kim",
			"pre": "Xã"
		}, {
			"id": 10393,
			"name": "Xuy Xá",
			"pre": "Xã"
		}],
		"street": [{
			"id": 7820,
			"name": "Quốc lộ 21B",
			"pre": "Đường"
		}],
		"project": []
	}, {
		"id": 14,
		"name": "Nam Từ Liêm",
		"pre": "Quận",
		"ward": [{
			"id": 11368,
			"name": "Cầu Diễn",
			"pre": "Thị trấn"
		}, {
			"id": 11370,
			"name": "Đại Mỗ",
			"pre": "Xã"
		}, {
			"id": 11373,
			"name": "Mễ Trì",
			"pre": "Xã"
		}, {
			"id": 12115,
			"name": "Mỹ Đình 1",
			"pre": "Phường"
		}, {
			"id": 12116,
			"name": "Mỹ Đình 2",
			"pre": "Phường"
		}, {
			"id": 11913,
			"name": "Phú Đô",
			"pre": "Xã"
		}, {
			"id": 12117,
			"name": "Phương Canh",
			"pre": "Phường"
		}, {
			"id": 11377,
			"name": "Tây Mỗ",
			"pre": "Xã"
		}, {
			"id": 11381,
			"name": "Trung Văn",
			"pre": "Xã"
		}, {
			"id": 11383,
			"name": "Xuân Phương",
			"pre": "Xã"
		}],
		"street": [{
			"id": 4211,
			"name": "41",
			"pre": "Đường"
		}, {
			"id": 631,
			"name": "70",
			"pre": "Đường"
		}, {
			"id": 6037,
			"name": "An Hải 4",
			"pre": "Đường"
		}, {
			"id": 3149,
			"name": "B6",
			"pre": "Đường"
		}, {
			"id": 6390,
			"name": "Bình Hòa 7",
			"pre": "Đường"
		}, {
			"id": 1955,
			"name": "Bùi Xuân Phái",
			"pre": "Đường"
		}, {
			"id": 6612,
			"name": "C18",
			"pre": "Đường"
		}, {
			"id": 2006,
			"name": "Cao Xuân Huy",
			"pre": "Đường"
		}, {
			"id": 9452,
			"name": "Cầu Cốc",
			"pre": "Đường"
		}, {
			"id": 629,
			"name": "Cầu Diễn",
			"pre": "Đường"
		}, {
			"id": 644,
			"name": "Cầu Thăng Long",
			"pre": "đường"
		}, {
			"id": 1646,
			"name": "Châu Văn Liêm",
			"pre": "Đường"
		}, {
			"id": 3190,
			"name": "CN1",
			"pre": "Đường"
		}, {
			"id": 4057,
			"name": "CN2",
			"pre": "Đường"
		}, {
			"id": 3188,
			"name": "CN3",
			"pre": "Đường"
		}, {
			"id": 3187,
			"name": "CN4",
			"pre": "Đường"
		}, {
			"id": 3189,
			"name": "CN5",
			"pre": "Đường"
		}, {
			"id": 3196,
			"name": "CN6",
			"pre": "Đường"
		}, {
			"id": 4055,
			"name": "CN7",
			"pre": "Đường"
		}, {
			"id": 3195,
			"name": "CN8",
			"pre": "Đường"
		}, {
			"id": 4056,
			"name": "CN9",
			"pre": "Đường"
		}, {
			"id": 10139,
			"name": "Đại Linh",
			"pre": "Đường"
		}, {
			"id": 5687,
			"name": "Đại lộ Thăng Long",
			"pre": "Đường"
		}, {
			"id": 9399,
			"name": "Đại Mỗ",
			"pre": "Đường"
		}, {
			"id": 7657,
			"name": "Đê Đông Ngạc",
			"pre": "Đường"
		}, {
			"id": 7642,
			"name": "Đình Quán",
			"pre": "Đường"
		}, {
			"id": 5588,
			"name": "Đình Thôn",
			"pre": "Đường"
		}, {
			"id": 7927,
			"name": "Đỗ Đình Thiện",
			"pre": "Đường"
		}, {
			"id": 630,
			"name": "Đỗ Đức Dục",
			"pre": "Đường"
		}, {
			"id": 1416,
			"name": "Đỗ Xuân Hợp",
			"pre": "Đường"
		}, {
			"id": 645,
			"name": "Đồng Bát",
			"pre": "đường"
		}, {
			"id": 9662,
			"name": "Đồng Me",
			"pre": "Đường"
		}, {
			"id": 7374,
			"name": "Giao Quang",
			"pre": "Đường"
		}, {
			"id": 6613,
			"name": "Hà Bá Tường",
			"pre": "Đường"
		}, {
			"id": 891,
			"name": "Hàm Nghi",
			"pre": "Đường"
		}, {
			"id": 626,
			"name": "Hồ Tùng Mậu",
			"pre": "Đường"
		}, {
			"id": 241,
			"name": "Hỏa Lò",
			"pre": "Phố"
		}, {
			"id": 1274,
			"name": "Hoài Thanh",
			"pre": "Đường"
		}, {
			"id": 10602,
			"name": "Hòe Thị",
			"pre": "Đường"
		}, {
			"id": 6771,
			"name": "Hữu Hưng",
			"pre": "Đường"
		}, {
			"id": 647,
			"name": "K1",
			"pre": "Đường"
		}, {
			"id": 661,
			"name": "K1B",
			"pre": "Đường"
		}, {
			"id": 614,
			"name": "K2",
			"pre": "Đường"
		}, {
			"id": 632,
			"name": "K3",
			"pre": "Đường"
		}, {
			"id": 6132,
			"name": "K4",
			"pre": "Đường"
		}, {
			"id": 595,
			"name": "Láng Hòa Lạc",
			"pre": "Đường"
		}, {
			"id": 650,
			"name": "Lê Đức Thọ",
			"pre": "Đường"
		}, {
			"id": 6307,
			"name": "Lê Duy Hiến",
			"pre": "Đường"
		}, {
			"id": 666,
			"name": "Lê Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 6880,
			"name": "Liên Cơ",
			"pre": "Đường"
		}, {
			"id": 88,
			"name": "Lương Thế Vinh",
			"pre": "Đường"
		}, {
			"id": 1284,
			"name": "Lưu Hữu Phước",
			"pre": "Đường"
		}, {
			"id": 6123,
			"name": "Lưu Úc",
			"pre": "Đường"
		}, {
			"id": 652,
			"name": "Mễ Trì",
			"pre": "đường"
		}, {
			"id": 5856,
			"name": "Mễ Trì Hạ",
			"pre": "Đường"
		}, {
			"id": 5614,
			"name": "Mễ Trì Thượng",
			"pre": "Đường"
		}, {
			"id": 9690,
			"name": "Miếu Đầm",
			"pre": "Đường"
		}, {
			"id": 7971,
			"name": "Miêu Nha",
			"pre": "Đường"
		}, {
			"id": 668,
			"name": "Mỹ Đình",
			"pre": "đường"
		}, {
			"id": 620,
			"name": "Ngân Hàng",
			"pre": "Đường"
		}, {
			"id": 8061,
			"name": "Ngọa Long",
			"pre": "Đường"
		}, {
			"id": 6204,
			"name": "Ngọc Đại",
			"pre": "Đường"
		}, {
			"id": 10683,
			"name": "Ngọc Mạch",
			"pre": "Đường"
		}, {
			"id": 6611,
			"name": "Ngọc Trục",
			"pre": "Đường"
		}, {
			"id": 7832,
			"name": "Nguyễn Cảnh Hợp",
			"pre": "Đường"
		}, {
			"id": 636,
			"name": "Nguyễn Cơ Thạch",
			"pre": "Đường"
		}, {
			"id": 3700,
			"name": "Nguyễn Đổng Chi",
			"pre": "Phố"
		}, {
			"id": 3476,
			"name": "Nguyễn Hoàng",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 5589,
			"name": "Nguyễn Văn Xơ",
			"pre": "Đường"
		}, {
			"id": 6141,
			"name": "Nhân Mỹ",
			"pre": "Đường"
		}, {
			"id": 7300,
			"name": "Nhổn",
			"pre": "Đường"
		}, {
			"id": 364,
			"name": "Nhuệ Giang",
			"pre": "Đường"
		}, {
			"id": 622,
			"name": "Nông Lâm",
			"pre": "đường"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 7274,
			"name": "Phú Đô",
			"pre": "Đường"
		}, {
			"id": 4612,
			"name": "Phú Mỹ",
			"pre": "Đường"
		}, {
			"id": 7420,
			"name": "Phú Thứ",
			"pre": "Đường"
		}, {
			"id": 5699,
			"name": "Phúc Diễn",
			"pre": "Đường"
		}, {
			"id": 623,
			"name": "Phùng Khoang",
			"pre": "Đường"
		}, {
			"id": 640,
			"name": "Phương Canh",
			"pre": "đường"
		}, {
			"id": 9622,
			"name": "Quang Tiến",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 7654,
			"name": "Quốc lộ 70",
			"pre": "Đường"
		}, {
			"id": 2968,
			"name": "Tân Mỹ",
			"pre": "Đường"
		}, {
			"id": 672,
			"name": "Tân Xuân",
			"pre": "Đường"
		}, {
			"id": 6629,
			"name": "Tăng Thiết Giáp",
			"pre": "Đường"
		}, {
			"id": 624,
			"name": "Tây Mỗ",
			"pre": "đường"
		}, {
			"id": 367,
			"name": "Thanh Bình",
			"pre": "Đường"
		}, {
			"id": 10893,
			"name": "Thị Cấm",
			"pre": "Đường"
		}, {
			"id": 9274,
			"name": "Thiên Hiền",
			"pre": "Đường"
		}, {
			"id": 10521,
			"name": "Thiện Thanh",
			"pre": "Đường"
		}, {
			"id": 3151,
			"name": "Tố Hữu",
			"pre": "Đường"
		}, {
			"id": 675,
			"name": "Tôn Thất Thuyết",
			"pre": "Đường"
		}, {
			"id": 225,
			"name": "Trần Bình",
			"pre": "Phố"
		}, {
			"id": 3471,
			"name": "Trần Hữu Dực",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 6391,
			"name": "Trần Tấn Mới",
			"pre": "Đường"
		}, {
			"id": 3183,
			"name": "Trần Văn Cẩn",
			"pre": "Đường"
		}, {
			"id": 6876,
			"name": "Trần Văn Lai",
			"pre": "Đường"
		}, {
			"id": 9091,
			"name": "Trần Vỹ",
			"pre": "Phố"
		}, {
			"id": 658,
			"name": "Trung Văn",
			"pre": "đường"
		}, {
			"id": 9377,
			"name": "Tu Hoàng",
			"pre": "Đường"
		}, {
			"id": 550,
			"name": "Vũ Hữu Lợi",
			"pre": "Phố"
		}, {
			"id": 6053,
			"name": "Vũ Quỳnh",
			"pre": "Đường"
		}, {
			"id": 6892,
			"name": "Vườn Cam",
			"pre": "Đường"
		}, {
			"id": 5750,
			"name": "Xóm Chùa",
			"pre": "Đường"
		}, {
			"id": 781,
			"name": "Xuân La",
			"pre": "Đường"
		}, {
			"id": 8101,
			"name": "Xuân Phương",
			"pre": "Đường"
		}, {
			"id": 643,
			"name": "Yên Hòa Đại Mỗ",
			"pre": "đường"
		}],
		"project": [{
			"id": 721,
			"name": "789 Bộ Tổng Tham Mưu - BQP",
			"lat": 21.024967193603516,
			"lng": 105.77131652832031,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 659,
			"name": "An Lạc Mỹ Đình",
			"lat": 21.033037185668945,
			"lng": 105.76166534423828,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1732,
			"name": "An Lạc Phùng Khoang",
			"lat": 20.986604690551758,
			"lng": 105.78857421875,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 215,
			"name": "Apex Tower",
			"lat": 21.014579772949219,
			"lng": 105.78428649902344,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 2331,
			"name": "Athena Complex",
			"lat": 21.041181564331055,
			"lng": 105.73535919189453,
			"cats": []
		}, {
			"id": 149,
			"name": "B.I.G Tower",
			"lat": 21.031179428100586,
			"lng": 105.77904510498047,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 561,
			"name": "C14 - Bộ Công An",
			"lat": 20.990812301635742,
			"lng": 105.78391265869141,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1199,
			"name": "C37 Bộ Công An - Bắc Hà Tower",
			"lat": 20.996829986572266,
			"lng": 105.79383850097656,
			"cats": [48, 50, 55, 324, 325, 326]
		}, {
			"id": 214,
			"name": "CEO Tower",
			"lat": 21.015817642211914,
			"lng": 105.78274536132812,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 230,
			"name": "Crown Office",
			"lat": 21.027318954467773,
			"lng": 105.76753234863281,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1795,
			"name": "CT1 Trung Văn - Vinaconex 3",
			"lat": 20.99534797668457,
			"lng": 105.77940368652344,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1796,
			"name": "CT2 Trung Văn - Vinaconex 3",
			"lat": 20.994447708129883,
			"lng": 105.77857208251953,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 293,
			"name": "CT2 Trung Văn Viettel Hancic",
			"lat": 20.993038177490234,
			"lng": 105.78835296630859,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2424,
			"name": "CT2 Xuân Phương",
			"lat": 21.02686882019043,
			"lng": 105.73996734619141,
			"cats": []
		}, {
			"id": 1332,
			"name": "CT3 C’Land Lê Đức Thọ",
			"lat": 21.030010223388672,
			"lng": 105.76913452148437,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 600,
			"name": "Đại Mỗ",
			"lat": 20.992609024047852,
			"lng": 105.76223754882812,
			"cats": [41, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 220,
			"name": "Detech Tower",
			"lat": 21.028900146484375,
			"lng": 105.78173065185547,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 381,
			"name": "Dolphin Plaza",
			"lat": 21.030044555664063,
			"lng": 105.77662658691406,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 863,
			"name": "Dream Town",
			"lat": 21.016887664794922,
			"lng": 105.745849609375,
			"cats": [48, 50, 55, 324, 325, 326]
		}, {
			"id": 2251,
			"name": "Ecolife Capitol",
			"lat": 20.993562698364258,
			"lng": 105.78515625,
			"cats": []
		}, {
			"id": 2327,
			"name": "Five Star Mỹ Đình",
			"lat": 21.01862907409668,
			"lng": 105.77559661865234,
			"cats": []
		}, {
			"id": 1050,
			"name": "FLC Complex Phạm Hùng",
			"lat": 21.028190612792969,
			"lng": 105.77919769287109,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1925,
			"name": "FLC Garden City",
			"lat": 20.992574691772461,
			"lng": 105.76374053955078,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2378,
			"name": "FLC Green Home 18 Phạm Hùng",
			"lat": 21.0300235748291,
			"lng": 105.77881622314453,
			"cats": []
		}, {
			"id": 303,
			"name": "FLC Landmark Tower",
			"lat": 21.03399658203125,
			"lng": 105.77027130126953,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 720,
			"name": "Golden Palace",
			"lat": 21.012056350708008,
			"lng": 105.77512359619141,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 188,
			"name": "Handico Tower",
			"lat": 21.01661491394043,
			"lng": 105.78160858154297,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1198,
			"name": "HH2 Bắc Hà",
			"lat": 20.997516632080078,
			"lng": 105.795166015625,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1465,
			"name": "HH3 Tower",
			"lat": 21.016557693481445,
			"lng": 105.7794189453125,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 1467,
			"name": "ICD",
			"lat": 21.028305053710937,
			"lng": 105.78069305419922,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 1605,
			"name": "Intracom 6",
			"lat": 21.026660919189453,
			"lng": 105.7384033203125,
			"cats": [55, 324, 326]
		}, {
			"id": 554,
			"name": "Intracom1",
			"lat": 20.990697860717773,
			"lng": 105.78777313232422,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 34,
			"name": "KĐT Mễ Trì Hạ",
			"lat": 21.014993667602539,
			"lng": 105.78269958496094,
			"cats": [48, 52, 55, 324, 325, 326]
		}, {
			"id": 2168,
			"name": "KĐT Trung Văn - Hancic",
			"lat": 20.992214202880859,
			"lng": 105.78868103027344,
			"cats": [41, 48, 50, 51, 52, 55, 57, 59, 163, 324, 325, 326]
		}, {
			"id": 46,
			"name": "KĐT Trung Văn - Vinaconex 3",
			"lat": 20.994457244873047,
			"lng": 105.77975463867187,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 30,
			"name": "Keangnam",
			"lat": 21.016849517822266,
			"lng": 105.78397369384766,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 151,
			"name": "Lafontana",
			"lat": 21.006452560424805,
			"lng": 105.76763916015625,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1466,
			"name": "Lilama 10",
			"lat": 20.997804641723633,
			"lng": 105.79353332519531,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 798,
			"name": "Lotus Complex HH1",
			"lat": 21.010965347290039,
			"lng": 105.69908142089844,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2350,
			"name": "MBland Central Point Mỹ Đình",
			"lat": 21.034643173217773,
			"lng": 105.76462554931641,
			"cats": []
		}, {
			"id": 1273,
			"name": "MD Complex Mỹ Đình",
			"lat": 21.034229278564453,
			"lng": 105.76536560058594,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1278,
			"name": "Mễ Trì Thượng",
			"lat": 21.004905700683594,
			"lng": 105.77720642089844,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 2198,
			"name": "Mon City - Hải Đăng City",
			"lat": 21.035120010375977,
			"lng": 105.76743316650391,
			"cats": [41, 48, 50, 51, 52, 55, 57, 59, 163, 324, 325, 326]
		}, {
			"id": 370,
			"name": "Mỹ Đình",
			"lat": 21.031929016113281,
			"lng": 105.76692199707031,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 35,
			"name": "Mỹ Đình I",
			"lat": 21.034658432006836,
			"lng": 105.76454162597656,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 36,
			"name": "Mỹ Đình II",
			"lat": 21.031129837036133,
			"lng": 105.76814270019531,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1146,
			"name": "Mỹ Đình Pearl",
			"lat": 21.00684928894043,
			"lng": 105.76931762695312,
			"cats": [48, 50, 57, 59, 324, 326]
		}, {
			"id": 725,
			"name": "Mỹ Đình Plaza",
			"lat": 21.030839920043945,
			"lng": 105.77579498291016,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 456,
			"name": "Phú Mỹ",
			"lat": 21.035659790039063,
			"lng": 105.76690673828125,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 43,
			"name": "Phùng Khoang",
			"lat": 20.995641708374023,
			"lng": 105.79232788085937,
			"cats": [48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 166,
			"name": "PVN Tower",
			"lat": 21.010305404663086,
			"lng": 105.77405548095703,
			"cats": [41, 48, 50, 55, 59, 163, 324, 326]
		}, {
			"id": 2257,
			"name": "QMS Tower",
			"lat": 20.986377716064453,
			"lng": 105.77867889404297,
			"cats": []
		}, {
			"id": 3,
			"name": "Sudico Mỹ Đình",
			"lat": 21.017435073852539,
			"lng": 105.7803955078125,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 806,
			"name": "Sun Square",
			"lat": 21.03376579284668,
			"lng": 105.77030181884766,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1208,
			"name": "Tây Hà Tower",
			"lat": 20.996280670166016,
			"lng": 105.79325103759766,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 609,
			"name": "Tây Mỗ",
			"lat": 20.997140884399414,
			"lng": 105.74623870849609,
			"cats": [48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 960,
			"name": "Thang Long Number One",
			"lat": 21.00269889831543,
			"lng": 105.79242706298828,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 45,
			"name": "The Garden",
			"lat": 21.015119552612305,
			"lng": 105.77783203125,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2088,
			"name": "The Garden Hills - 99 Trần Bình",
			"lat": 21.030405044555664,
			"lng": 105.77703094482422,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 4,
			"name": "The Manor",
			"lat": 21.01417350769043,
			"lng": 105.77587127685547,
			"cats": [48, 50, 55, 59, 325, 326]
		}, {
			"id": 2144,
			"name": "TIG Đại Mỗ",
			"lat": 20.994472503662109,
			"lng": 105.76130676269531,
			"cats": [40, 41, 50, 51, 52, 55, 57, 163, 325]
		}, {
			"id": 511,
			"name": "Times Square Hà Nội",
			"lat": 21.008331298828125,
			"lng": 105.79163360595703,
			"cats": [41, 48, 50, 55, 57, 163, 324, 326]
		}, {
			"id": 1462,
			"name": "Toyota Mỹ Đình",
			"lat": 21.029060363769531,
			"lng": 105.77982330322266,
			"cats": [41, 50, 55, 163]
		}, {
			"id": 382,
			"name": "Viglacera Tower",
			"lat": 21.003505706787109,
			"lng": 105.79152679443359,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1178,
			"name": "Vinaconex 7 - 34 Cầu Diễn",
			"lat": 21.03388786315918,
			"lng": 105.75962829589844,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2341,
			"name": "Vinhomes Gardenia",
			"lat": 21.034605026245117,
			"lng": 105.76327514648437,
			"cats": []
		}, {
			"id": 2249,
			"name": "Vinhomes Paradise",
			"lat": 20.999353408813477,
			"lng": 105.78765106201172,
			"cats": []
		}, {
			"id": 2520,
			"name": "Vinhomes Phạm Hùng",
			"lat": 21.018405914306641,
			"lng": 105.78211975097656,
			"cats": []
		}, {
			"id": 1380,
			"name": "VOV Mễ Trì",
			"lat": 20.995250701904297,
			"lng": 105.78440856933594,
			"cats": [41, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 299,
			"name": "X2 Mỹ Đình",
			"lat": 21.022041320800781,
			"lng": 105.77242279052734,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2370,
			"name": "Xuân Phương Residence",
			"lat": 21.030963897705078,
			"lng": 105.75717926025391,
			"cats": []
		}, {
			"id": 2247,
			"name": "Xuân Phương Tasco",
			"lat": 21.025352478027344,
			"lng": 105.74130249023437,
			"cats": [40, 41, 48, 50, 51, 52, 55, 57, 59, 163, 283, 325, 361]
		}, {
			"id": 68,
			"name": "Xuân Phương Viglacera",
			"lat": 21.025880813598633,
			"lng": 105.74070739746094,
			"cats": [40, 50, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 27,
		"name": "Phú Xuyên",
		"pre": "Huyện",
		"ward": [{
			"id": 10420,
			"name": "Bạch Hạ",
			"pre": "Xã"
		}, {
			"id": 10426,
			"name": "Châu Can",
			"pre": "Xã"
		}, {
			"id": 10429,
			"name": "Chuyên Mỹ",
			"pre": "Xã"
		}, {
			"id": 10431,
			"name": "Đại Thắng",
			"pre": "Xã"
		}, {
			"id": 10434,
			"name": "Đại Xuyên",
			"pre": "Xã"
		}, {
			"id": 10436,
			"name": "Hoàng Long",
			"pre": "Xã"
		}, {
			"id": 10439,
			"name": "Hồng Minh",
			"pre": "Xã"
		}, {
			"id": 10441,
			"name": "Hồng Thái",
			"pre": "Xã"
		}, {
			"id": 10444,
			"name": "Khai Thái",
			"pre": "Xã"
		}, {
			"id": 10448,
			"name": "Minh Tân",
			"pre": "Xã"
		}, {
			"id": 10449,
			"name": "Nam Phong",
			"pre": "Xã"
		}, {
			"id": 10454,
			"name": "Nam Triều",
			"pre": "Xã"
		}, {
			"id": 10404,
			"name": "Phú Minh",
			"pre": "Thị trấn"
		}, {
			"id": 10457,
			"name": "Phú Túc",
			"pre": "Xã"
		}, {
			"id": 10411,
			"name": "Phú Xuyên",
			"pre": "Thị trấn"
		}, {
			"id": 10459,
			"name": "Phú Yên",
			"pre": "Xã"
		}, {
			"id": 10464,
			"name": "Phúc Tiến",
			"pre": "Xã"
		}, {
			"id": 10467,
			"name": "Phượng Dực",
			"pre": "Xã"
		}, {
			"id": 10472,
			"name": "Quang Lãng",
			"pre": "Xã"
		}, {
			"id": 10479,
			"name": "Quang Trung",
			"pre": "Xã"
		}, {
			"id": 10485,
			"name": "Sơn Hà",
			"pre": "Xã"
		}, {
			"id": 10492,
			"name": "Tân Dân",
			"pre": "Xã"
		}, {
			"id": 10495,
			"name": "Thụy Phú",
			"pre": "Xã"
		}, {
			"id": 10500,
			"name": "Tri Thủy",
			"pre": "Xã"
		}, {
			"id": 10507,
			"name": "Tri Trung",
			"pre": "Xã"
		}, {
			"id": 10512,
			"name": "Văn Hoàng",
			"pre": "Xã"
		}, {
			"id": 10516,
			"name": "Văn Nhân",
			"pre": "Xã"
		}, {
			"id": 10519,
			"name": "Vân Từ",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 8680,
			"name": "73",
			"pre": "Đường"
		}, {
			"id": 8677,
			"name": "Liên Thông",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 8980,
			"name": "Truyền Thống",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1223,
			"name": "Hanssip",
			"lat": 20.6929988861084,
			"lng": 105.92886352539062,
			"cats": [48, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 19,
		"name": "Phúc Thọ",
		"pre": "Huyện",
		"ward": [{
			"id": 10541,
			"name": "Cẩm Đình",
			"pre": "Xã"
		}, {
			"id": 12158,
			"name": "Gạch",
			"pre": "Thị trấn"
		}, {
			"id": 10563,
			"name": "Hát Môn",
			"pre": "Xã"
		}, {
			"id": 10570,
			"name": "Hiệp Thuận",
			"pre": "Xã"
		}, {
			"id": 10581,
			"name": "Liên Hiệp",
			"pre": "Xã"
		}, {
			"id": 10585,
			"name": "Long Xuyên",
			"pre": "Xã"
		}, {
			"id": 10592,
			"name": "Ngọc Tảo",
			"pre": "Xã"
		}, {
			"id": 10596,
			"name": "Phúc Hòa",
			"pre": "Xã"
		}, {
			"id": 10536,
			"name": "Phúc Thọ",
			"pre": "Thị trấn"
		}, {
			"id": 10601,
			"name": "Phụng Thượng",
			"pre": "Xã"
		}, {
			"id": 10604,
			"name": "Phương Độ",
			"pre": "Xã"
		}, {
			"id": 10609,
			"name": "Sen Chiểu",
			"pre": "Xã"
		}, {
			"id": 10616,
			"name": "Tam Hiệp",
			"pre": "Xã"
		}, {
			"id": 10619,
			"name": "Tam Thuấn",
			"pre": "Xã"
		}, {
			"id": 10622,
			"name": "Thanh Đa",
			"pre": "Xã"
		}, {
			"id": 10625,
			"name": "Thọ Lộc",
			"pre": "Xã"
		}, {
			"id": 10629,
			"name": "Thượng Cốc",
			"pre": "Xã"
		}, {
			"id": 10631,
			"name": "Tích Giang",
			"pre": "Xã"
		}, {
			"id": 10646,
			"name": "Trạch Mỹ Lộc",
			"pre": "Xã"
		}, {
			"id": 10660,
			"name": "Vân Hà",
			"pre": "Xã"
		}, {
			"id": 10664,
			"name": "Vân Nam",
			"pre": "Xã"
		}, {
			"id": 10671,
			"name": "Vân Phúc",
			"pre": "Xã"
		}, {
			"id": 10677,
			"name": "Võng Xuyên",
			"pre": "Xã"
		}, {
			"id": 10682,
			"name": "Xuân Phú",
			"pre": "Xã"
		}],
		"street": [{
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 769,
			"name": "Tỉnh lộ 419",
			"pre": "Đường"
		}],
		"project": [{
			"id": 563,
			"name": "Cẩm Đình",
			"lat": 21.087303161621094,
			"lng": 105.62736511230469,
			"cats": [40, 44, 48, 55, 59, 325]
		}]
	}, {
		"id": 22,
		"name": "Quốc Oai",
		"pre": "Huyện",
		"ward": [{
			"id": 10704,
			"name": "Cấn Hữu",
			"pre": "Xã"
		}, {
			"id": 10711,
			"name": "Cộng Hòa",
			"pre": "Xã"
		}, {
			"id": 10718,
			"name": "Đại Thành",
			"pre": "Xã"
		}, {
			"id": 10726,
			"name": "Đồng Quang",
			"pre": "Xã"
		}, {
			"id": 10731,
			"name": "Đông Xuân",
			"pre": "Xã"
		}, {
			"id": 10732,
			"name": "Đông Yên",
			"pre": "Xã"
		}, {
			"id": 10736,
			"name": "Hòa Thạch",
			"pre": "Xã"
		}, {
			"id": 10742,
			"name": "Liệp Tuyết",
			"pre": "Xã"
		}, {
			"id": 10746,
			"name": "Nghĩa Hương",
			"pre": "Xã"
		}, {
			"id": 10750,
			"name": "Ngọc Liệp",
			"pre": "Xã"
		}, {
			"id": 10756,
			"name": "Ngọc Mỹ",
			"pre": "Xã"
		}, {
			"id": 10761,
			"name": "Phú Cát",
			"pre": "Xã"
		}, {
			"id": 10767,
			"name": "Phú Mãn",
			"pre": "Xã"
		}, {
			"id": 10768,
			"name": "Phượng Cách",
			"pre": "Xã"
		}, {
			"id": 10698,
			"name": "Quốc Oai",
			"pre": "Thị trấn"
		}, {
			"id": 10769,
			"name": "Sài Sơn",
			"pre": "Xã"
		}, {
			"id": 10770,
			"name": "Tân Hòa",
			"pre": "Xã"
		}, {
			"id": 10771,
			"name": "Tân Phú",
			"pre": "Xã"
		}, {
			"id": 10772,
			"name": "Thạch Thán",
			"pre": "Xã"
		}, {
			"id": 10773,
			"name": "Tuyết Nghĩa",
			"pre": "Xã"
		}, {
			"id": 10774,
			"name": "Yên Sơn",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 7069,
			"name": "21A",
			"pre": "Đường"
		}, {
			"id": 9496,
			"name": "421B",
			"pre": "Đường"
		}, {
			"id": 5687,
			"name": "Đại lộ Thăng Long",
			"pre": "Đường"
		}, {
			"id": 8233,
			"name": "Đồng Bụt",
			"pre": "Đường"
		}, {
			"id": 7577,
			"name": "Đồng Lư",
			"pre": "Đường"
		}, {
			"id": 2364,
			"name": "Hồ Chí Minh",
			"pre": "Đường"
		}, {
			"id": 595,
			"name": "Láng Hòa Lạc",
			"pre": "Đường"
		}, {
			"id": 7777,
			"name": "Quốc lộ 21A",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 7716,
			"name": "Yên Quán",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1280,
			"name": "New House City",
			"lat": 20.99644660949707,
			"lng": 105.59937286376953,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 944,
			"name": "Sunny Garden City",
			"lat": 21.013628005981445,
			"lng": 105.64200592041016,
			"cats": [40, 48, 50, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1108,
			"name": "Tây Quốc Oai",
			"lat": 20.995037078857422,
			"lng": 105.64418792724609,
			"cats": [40, 48, 50, 52, 55, 325]
		}, {
			"id": 585,
			"name": "Tuần Châu",
			"lat": 21.032455444335937,
			"lng": 105.64711761474609,
			"cats": [40, 44, 48, 55, 57, 59, 325]
		}]
	}, {
		"id": 12,
		"name": "Sóc Sơn",
		"pre": "Huyện",
		"ward": [{
			"id": 10940,
			"name": "Bắc Phú",
			"pre": "Xã"
		}, {
			"id": 10931,
			"name": "Bắc Sơn",
			"pre": "Xã"
		}, {
			"id": 10924,
			"name": "Đông Xuân",
			"pre": "Xã"
		}, {
			"id": 10816,
			"name": "Đức Hoà",
			"pre": "Xã"
		}, {
			"id": 10874,
			"name": "Hiền Ninh",
			"pre": "Xã"
		}, {
			"id": 10808,
			"name": "Hồng Kỳ",
			"pre": "Xã"
		}, {
			"id": 10820,
			"name": "Kim Lũ",
			"pre": "Xã"
		}, {
			"id": 10882,
			"name": "Mai Đình",
			"pre": "Xã"
		}, {
			"id": 10781,
			"name": "Minh Phú",
			"pre": "Xã"
		}, {
			"id": 10865,
			"name": "Minh Trí",
			"pre": "Xã"
		}, {
			"id": 10802,
			"name": "Nam Sơn",
			"pre": "Xã"
		}, {
			"id": 10881,
			"name": "Phú Cường",
			"pre": "Xã"
		}, {
			"id": 10952,
			"name": "Phù Linh",
			"pre": "Xã"
		}, {
			"id": 10792,
			"name": "Phù Lỗ",
			"pre": "Xã"
		}, {
			"id": 10786,
			"name": "Phú Minh",
			"pre": "Xã"
		}, {
			"id": 10782,
			"name": "Quang Tiến",
			"pre": "Xã"
		}, {
			"id": 10775,
			"name": "Sóc Sơn",
			"pre": "Thị trấn"
		}, {
			"id": 10854,
			"name": "Tân Dân",
			"pre": "Xã"
		}, {
			"id": 10812,
			"name": "Tân Hưng",
			"pre": "Xã"
		}, {
			"id": 10829,
			"name": "Tân Minh",
			"pre": "Xã"
		}, {
			"id": 10776,
			"name": "Thanh Xuân",
			"pre": "Xã"
		}, {
			"id": 10960,
			"name": "Tiên Dược",
			"pre": "Xã"
		}, {
			"id": 10936,
			"name": "Trung Giã",
			"pre": "Xã"
		}, {
			"id": 10814,
			"name": "Việt Long",
			"pre": "Xã"
		}, {
			"id": 10943,
			"name": "Xuân Giang",
			"pre": "Xã"
		}, {
			"id": 10945,
			"name": "Xuân Thu",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 6346,
			"name": "35",
			"pre": "Đường"
		}, {
			"id": 1464,
			"name": "Đa Phúc",
			"pre": "Đường"
		}, {
			"id": 691,
			"name": "Đền Gióng",
			"pre": "đường"
		}, {
			"id": 9379,
			"name": "Đồng Lai",
			"pre": "Đường"
		}, {
			"id": 635,
			"name": "Đông Quan",
			"pre": "Đường"
		}, {
			"id": 682,
			"name": "Kim Anh",
			"pre": "đường"
		}, {
			"id": 686,
			"name": "Miếu Thờ",
			"pre": "phố"
		}, {
			"id": 692,
			"name": "Núi Đôi",
			"pre": "đường"
		}, {
			"id": 7471,
			"name": "Phù Mã",
			"pre": "Đường"
		}, {
			"id": 8609,
			"name": "Phú Tàng",
			"pre": "Đường"
		}, {
			"id": 7674,
			"name": "Quốc lộ 14",
			"pre": "Đường"
		}, {
			"id": 8783,
			"name": "Quốc lộ 16",
			"pre": "Đường"
		}, {
			"id": 7883,
			"name": "Quốc Lộ 2",
			"pre": "Đường"
		}, {
			"id": 7677,
			"name": "Quốc lộ 3",
			"pre": "Đường"
		}, {
			"id": 7853,
			"name": "Quốc Lộ 35",
			"pre": "Đường"
		}, {
			"id": 597,
			"name": "Quốc lộ 71",
			"pre": "Đường"
		}, {
			"id": 8075,
			"name": "Quốc Lộ 9",
			"pre": "Đường"
		}, {
			"id": 8676,
			"name": "Tân Phú",
			"pre": "Đường"
		}, {
			"id": 7406,
			"name": "Tân Trại",
			"pre": "Đường"
		}, {
			"id": 7598,
			"name": "Thạch Lỗi",
			"pre": "Đường"
		}, {
			"id": 693,
			"name": "Thân Nhân Trung",
			"pre": "Đường"
		}, {
			"id": 698,
			"name": "Tỉnh lộ 131",
			"pre": "Đường"
		}, {
			"id": 8634,
			"name": "Tỉnh lộ 135",
			"pre": "Đường"
		}, {
			"id": 690,
			"name": "Tỉnh lộ 270",
			"pre": "Đường"
		}, {
			"id": 695,
			"name": "Tỉnh lộ 296",
			"pre": "Đường"
		}, {
			"id": 9108,
			"name": "Tỉnh Lộ 35",
			"pre": "Đường"
		}],
		"project": [{
			"id": 517,
			"name": "KCN Nội Bài",
			"lat": 21.232711791992188,
			"lng": 105.81288909912109,
			"cats": [45, 50, 53]
		}]
	}, {
		"id": 16,
		"name": "Sơn Tây",
		"pre": "Thị xã",
		"ward": [{
			"id": 9628,
			"name": "Cổ Đông",
			"pre": "Xã"
		}, {
			"id": 9616,
			"name": "Đường Lâm",
			"pre": "Xã"
		}, {
			"id": 9625,
			"name": "Kim Sơn",
			"pre": "Phường"
		}, {
			"id": 9594,
			"name": "Lê Lợi",
			"pre": "Phường"
		}, {
			"id": 9602,
			"name": "Ngô Quyền",
			"pre": "Phường"
		}, {
			"id": 9597,
			"name": "Phú Thịnh",
			"pre": "Phường"
		}, {
			"id": 9595,
			"name": "Quang Trung",
			"pre": "Phường"
		}, {
			"id": 9626,
			"name": "Sơn Đông",
			"pre": "Xã"
		}, {
			"id": 9604,
			"name": "Sơn Lộc",
			"pre": "Phường"
		}, {
			"id": 9619,
			"name": "Thanh Mỹ",
			"pre": "Xã"
		}, {
			"id": 9610,
			"name": "Trung Hưng",
			"pre": "Phường"
		}, {
			"id": 9615,
			"name": "Trung Sơn Trầm",
			"pre": "Phường"
		}, {
			"id": 9614,
			"name": "Viên Sơn",
			"pre": "Phường"
		}, {
			"id": 9607,
			"name": "Xuân Khanh",
			"pre": "Phường"
		}, {
			"id": 9621,
			"name": "Xuân Sơn",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 7077,
			"name": "418",
			"pre": "Đường"
		}, {
			"id": 8392,
			"name": "87",
			"pre": "Đường"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 7329,
			"name": "Cầu Trì",
			"pre": "Đường"
		}, {
			"id": 580,
			"name": "Chùa Thông",
			"pre": "phố"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 594,
			"name": "Đường bê tông Cao Trung",
			"pre": "đường"
		}, {
			"id": 591,
			"name": "Đường Lâm",
			"pre": "đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 9164,
			"name": "Lạc Sơn",
			"pre": "Đường"
		}, {
			"id": 595,
			"name": "Láng Hòa Lạc",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 751,
			"name": "Phạm Hồng Thái",
			"pre": "Đường"
		}, {
			"id": 212,
			"name": "Phạm Ngũ Lão",
			"pre": "Đường"
		}, {
			"id": 576,
			"name": "Phó Đức Chính",
			"pre": "Phố"
		}, {
			"id": 589,
			"name": "Phố Hàng",
			"pre": "đường"
		}, {
			"id": 10217,
			"name": "Phú Nhi",
			"pre": "Đường"
		}, {
			"id": 497,
			"name": "Phùng Khắc Khoan",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 7777,
			"name": "Quốc lộ 21A",
			"pre": "Đường"
		}, {
			"id": 6006,
			"name": "Quốc lộ 32",
			"pre": "Đường"
		}, {
			"id": 597,
			"name": "Quốc lộ 71",
			"pre": "Đường"
		}, {
			"id": 8302,
			"name": "Thanh Vị",
			"pre": "Đường"
		}, {
			"id": 8671,
			"name": "Tỉnh lộ 414",
			"pre": "Đường"
		}, {
			"id": 7967,
			"name": "Tỉnh lộ 416",
			"pre": "Đường"
		}, {
			"id": 599,
			"name": "Tỉnh lộ 73",
			"pre": "Đường"
		}, {
			"id": 768,
			"name": "Tỉnh lộ 84",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 7247,
			"name": "Trung Sơn Trầm",
			"pre": "Đường"
		}, {
			"id": 590,
			"name": "Trưng Vương",
			"pre": "Đường"
		}, {
			"id": 6860,
			"name": "Tùng Thiện",
			"pre": "Đường"
		}, {
			"id": 6440,
			"name": "Vĩnh Thụy",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1486,
			"name": "Khu đô thị mới Phú Thịnh",
			"lat": 21.136680603027344,
			"lng": 105.51339721679687,
			"cats": [40, 41, 48, 52, 59, 325]
		}, {
			"id": 588,
			"name": "Mai Trai Nghĩa Phủ",
			"lat": 21.136680603027344,
			"lng": 105.51339721679687,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 6,
		"name": "Tây Hồ",
		"pre": "Quận",
		"ward": [{
			"id": 9359,
			"name": "Bưởi",
			"pre": "Phường"
		}, {
			"id": 9370,
			"name": "Nhật Tân",
			"pre": "Phường"
		}, {
			"id": 9374,
			"name": "Phú Thượng",
			"pre": "Phường"
		}, {
			"id": 9371,
			"name": "Quảng An",
			"pre": "Phường"
		}, {
			"id": 9364,
			"name": "Thụy Khuê",
			"pre": "Phường"
		}, {
			"id": 9369,
			"name": "Tứ Liên",
			"pre": "Phường"
		}, {
			"id": 9373,
			"name": "Xuân La",
			"pre": "Phường"
		}, {
			"id": 9367,
			"name": "Yên Phụ",
			"pre": "Phường"
		}],
		"street": [{
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 777,
			"name": "An Dương",
			"pre": "Đường"
		}, {
			"id": 6000,
			"name": "An Dương Vương",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 785,
			"name": "An Thành 2",
			"pre": "đường"
		}, {
			"id": 791,
			"name": "Anh Thành 1",
			"pre": "đường"
		}, {
			"id": 778,
			"name": "Âu Cơ",
			"pre": "Đường"
		}, {
			"id": 3980,
			"name": "Bưởi",
			"pre": "Đường"
		}, {
			"id": 782,
			"name": "Đặng Thai Mai",
			"pre": "Đường"
		}, {
			"id": 786,
			"name": "Dốc Tam Đa",
			"pre": "phố"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 1604,
			"name": "Hồ Sen",
			"pre": "Đường"
		}, {
			"id": 5892,
			"name": "Hồ Tây",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 616,
			"name": "Hoàng Quốc Việt",
			"pre": "Đường"
		}, {
			"id": 114,
			"name": "Hồng Hà",
			"pre": "Đường"
		}, {
			"id": 3999,
			"name": "Lạc Chính",
			"pre": "Đường"
		}, {
			"id": 621,
			"name": "Lạc Long Quân",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 787,
			"name": "Mai Xuân Thưởng",
			"pre": "Đường"
		}, {
			"id": 8767,
			"name": "Minh Hương",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 793,
			"name": "Nghi Tàm",
			"pre": "đường"
		}, {
			"id": 3348,
			"name": "Nguyễn Đình Thi",
			"pre": "Đường"
		}, {
			"id": 653,
			"name": "Nguyễn Hoàng Tôn",
			"pre": "đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 6723,
			"name": "Nhật Chiêu",
			"pre": "Đường"
		}, {
			"id": 783,
			"name": "Nước Phần Lan",
			"pre": "đường"
		}, {
			"id": 788,
			"name": "Phú Gia",
			"pre": "Đường"
		}, {
			"id": 4749,
			"name": "Phú Xá",
			"pre": "Đường"
		}, {
			"id": 8552,
			"name": "Phúc Hoa",
			"pre": "Đường"
		}, {
			"id": 6986,
			"name": "Quảng An",
			"pre": "Đường"
		}, {
			"id": 794,
			"name": "Quảng Bá",
			"pre": "đường"
		}, {
			"id": 8902,
			"name": "Quảng Khánh",
			"pre": "Phố"
		}, {
			"id": 3991,
			"name": "Tân Ấp",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 779,
			"name": "Tây Hồ",
			"pre": "đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 2115,
			"name": "Thanh Niên",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6401,
			"name": "Thượng Thụy",
			"pre": "Phố"
		}, {
			"id": 789,
			"name": "Thụy Khuê",
			"pre": "đường"
		}, {
			"id": 795,
			"name": "Tô Ngọc Vân",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 4081,
			"name": "Trịnh Công Sơn",
			"pre": "Đường"
		}, {
			"id": 9707,
			"name": "Từ Hoa",
			"pre": "Phố"
		}, {
			"id": 7570,
			"name": "Tứ Liên",
			"pre": "Đường"
		}, {
			"id": 733,
			"name": "Văn Cao",
			"pre": "Đường"
		}, {
			"id": 8092,
			"name": "Vành Đai 2",
			"pre": "Đường"
		}, {
			"id": 6521,
			"name": "Vệ Hồ",
			"pre": "Đường"
		}, {
			"id": 780,
			"name": "Ven Hồ",
			"pre": "đường"
		}, {
			"id": 7021,
			"name": "Võ Chí Công",
			"pre": "Đường"
		}, {
			"id": 790,
			"name": "Võng Thị",
			"pre": "đường"
		}, {
			"id": 5750,
			"name": "Xóm Chùa",
			"pre": "Đường"
		}, {
			"id": 796,
			"name": "Xuân Diệu",
			"pre": "Đường"
		}, {
			"id": 628,
			"name": "Xuân Đỉnh",
			"pre": "Đường"
		}, {
			"id": 781,
			"name": "Xuân La",
			"pre": "Đường"
		}, {
			"id": 6314,
			"name": "Yên Hoa",
			"pre": "Phố"
		}, {
			"id": 784,
			"name": "Yên Phụ",
			"pre": "đường"
		}],
		"project": [{
			"id": 64,
			"name": "249A Thụy Khuê",
			"lat": 21.043359756469727,
			"lng": 105.81848907470703,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 729,
			"name": "Chung cư Xuân La",
			"lat": 21.065666198730469,
			"lng": 105.80699920654297,
			"cats": [55, 324, 326]
		}, {
			"id": 2,
			"name": "Ciputra Hà Nội",
			"lat": 21.072135925292969,
			"lng": 105.81099700927734,
			"cats": [48, 50, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 2187,
			"name": "D’. Le Roi Soleil - Quảng An",
			"lat": 21.063980102539063,
			"lng": 105.82644653320312,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 2471,
			"name": "Ecolife Tây Hồ",
			"lat": 21.052824020385742,
			"lng": 105.79438781738281,
			"cats": []
		}, {
			"id": 886,
			"name": "Five Stars Westlake",
			"lat": 21.043590545654297,
			"lng": 105.82114410400391,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 27,
			"name": "Golden Westlake",
			"lat": 21.042610168457031,
			"lng": 105.82151794433594,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 1944,
			"name": "Hancom 603 Lạc Long Quân",
			"lat": 21.067815780639648,
			"lng": 105.80813598632812,
			"cats": [55, 324, 326]
		}, {
			"id": 194,
			"name": "Hanoi Flower Villages",
			"lat": 21.041961669921875,
			"lng": 105.83068084716797,
			"cats": [50, 59, 325]
		}, {
			"id": 429,
			"name": "Hanoi Lake View",
			"lat": 21.047439575195313,
			"lng": 105.83740234375,
			"cats": [41, 48, 55, 57, 59]
		}, {
			"id": 1460,
			"name": "HIPT",
			"lat": 21.043380737304687,
			"lng": 105.82286834716797,
			"cats": [41, 50, 163]
		}, {
			"id": 2132,
			"name": "KĐT Tây Hồ Tây - Starlake Hà Nội",
			"lat": 21.05546760559082,
			"lng": 105.79588317871094,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 2150,
			"name": "Lạc Hồng Tây Hồ",
			"lat": 21.083349227905273,
			"lng": 105.81072998046875,
			"cats": [48, 55, 57, 324, 326]
		}, {
			"id": 874,
			"name": "Machinco Building",
			"lat": 21.043787002563477,
			"lng": 105.81356048583984,
			"cats": [41, 48, 50, 59, 163]
		}, {
			"id": 657,
			"name": "Mùa Xuân",
			"lat": 21.061840057373047,
			"lng": 105.78378295898437,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 223,
			"name": "Ngọc Linh Building",
			"lat": 21.044387817382813,
			"lng": 105.81483459472656,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2051,
			"name": "Oriental Westlake",
			"lat": 21.051906585693359,
			"lng": 105.80905914306641,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1285,
			"name": "Packexim",
			"lat": 21.085586547851563,
			"lng": 105.8128662109375,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2328,
			"name": "Packexim 2 Tây Hồ",
			"lat": 21.087865829467773,
			"lng": 105.81491088867187,
			"cats": []
		}, {
			"id": 644,
			"name": "Phú Thượng",
			"lat": 21.088964462280273,
			"lng": 105.79420471191406,
			"cats": [48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 156,
			"name": "Somerset West Lake",
			"lat": 21.044111251831055,
			"lng": 105.81844329833984,
			"cats": [55, 324, 326]
		}, {
			"id": 2420,
			"name": "Sun Legacy",
			"lat": 21.040546417236328,
			"lng": 105.82575988769531,
			"cats": []
		}, {
			"id": 226,
			"name": "Syrena Building",
			"lat": 21.064247131347656,
			"lng": 105.82798004150391,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1110,
			"name": "Tay Ho Residence",
			"lat": 21.055543899536133,
			"lng": 105.80513000488281,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 172,
			"name": "Vinaconex No.2",
			"lat": 21.073984146118164,
			"lng": 105.81289672851562,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 7,
			"name": "Vườn Đào",
			"lat": 21.079299926757813,
			"lng": 105.81423950195312,
			"cats": [48, 55, 57, 324, 326]
		}]
	}, {
		"id": 23,
		"name": "Thạch Thất",
		"pre": "Huyện",
		"ward": [{
			"id": 10986,
			"name": "Bình Phú",
			"pre": "Xã"
		}, {
			"id": 10993,
			"name": "Bình Yên",
			"pre": "Xã"
		}, {
			"id": 11011,
			"name": "Cẩm Yên",
			"pre": "Xã"
		}, {
			"id": 11012,
			"name": "Cần Kiệm",
			"pre": "Xã"
		}, {
			"id": 11006,
			"name": "Canh Nậu",
			"pre": "Xã"
		}, {
			"id": 11016,
			"name": "Chàng Sơn",
			"pre": "Xã"
		}, {
			"id": 11034,
			"name": "Đại Đồng",
			"pre": "Xã"
		}, {
			"id": 11024,
			"name": "Dị Nậu",
			"pre": "Xã"
		}, {
			"id": 11042,
			"name": "Đồng Trúc",
			"pre": "Xã"
		}, {
			"id": 11050,
			"name": "Hạ Bằng",
			"pre": "Xã"
		}, {
			"id": 11057,
			"name": "Hương Ngải",
			"pre": "Xã"
		}, {
			"id": 11069,
			"name": "Hữu Bằng",
			"pre": "Xã"
		}, {
			"id": 11077,
			"name": "Kim Quan",
			"pre": "Xã"
		}, {
			"id": 11082,
			"name": "Lại Thượng",
			"pre": "Xã"
		}, {
			"id": 10977,
			"name": "Liên Quan",
			"pre": "Thị trấn"
		}, {
			"id": 11084,
			"name": "Phú Kim",
			"pre": "Xã"
		}, {
			"id": 11085,
			"name": "Phùng Xá",
			"pre": "Xã"
		}, {
			"id": 11090,
			"name": "Tân Xã",
			"pre": "Xã"
		}, {
			"id": 11092,
			"name": "Thạch Hòa",
			"pre": "Xã"
		}, {
			"id": 11096,
			"name": "Thạch Xá",
			"pre": "Xã"
		}, {
			"id": 11098,
			"name": "Tiến Xuân",
			"pre": "Xã"
		}, {
			"id": 11102,
			"name": "Yên Bình",
			"pre": "Xã"
		}, {
			"id": 11104,
			"name": "Yên Trung",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 6214,
			"name": "8/3",
			"pre": "Phố"
		}, {
			"id": 8713,
			"name": "84",
			"pre": "Đường"
		}, {
			"id": 8760,
			"name": "Cần Thơ",
			"pre": "Đường"
		}, {
			"id": 5687,
			"name": "Đại lộ Thăng Long",
			"pre": "Đường"
		}, {
			"id": 6571,
			"name": "Đồng Vàng",
			"pre": "Đường"
		}, {
			"id": 10879,
			"name": "ĐT 446",
			"pre": "Đường"
		}, {
			"id": 7777,
			"name": "Quốc lộ 21A",
			"pre": "Đường"
		}, {
			"id": 769,
			"name": "Tỉnh lộ 419",
			"pre": "Đường"
		}, {
			"id": 768,
			"name": "Tỉnh lộ 84",
			"pre": "Đường"
		}],
		"project": [{
			"id": 607,
			"name": "Asean Resort",
			"lat": 21.032356262207031,
			"lng": 105.49690246582031,
			"cats": [44, 48, 55, 57, 325]
		}, {
			"id": 516,
			"name": "Bắc Phú Cát",
			"lat": 20.97552490234375,
			"lng": 105.54572296142578,
			"cats": [45, 50, 53]
		}, {
			"id": 249,
			"name": "CNC Viettel",
			"lat": 20.997280120849609,
			"lng": 105.53899383544922,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 518,
			"name": "Thạch Thất Quốc Oai",
			"lat": 21.00444221496582,
			"lng": 105.63063049316406,
			"cats": [45, 50, 55, 59, 326]
		}, {
			"id": 564,
			"name": "Xanh Villas",
			"lat": 20.990604400634766,
			"lng": 105.48683166503906,
			"cats": [44, 48, 50, 55, 59, 325]
		}]
	}, {
		"id": 25,
		"name": "Thanh Oai",
		"pre": "Huyện",
		"ward": [{
			"id": 11116,
			"name": "Bích Hòa",
			"pre": "Xã"
		}, {
			"id": 11130,
			"name": "Bình Minh",
			"pre": "Xã"
		}, {
			"id": 11180,
			"name": "Cao Dương",
			"pre": "Xã"
		}, {
			"id": 11111,
			"name": "Cao Viên",
			"pre": "Xã"
		}, {
			"id": 11120,
			"name": "Cự Khê",
			"pre": "Xã"
		}, {
			"id": 11165,
			"name": "Dân Hòa",
			"pre": "Xã"
		}, {
			"id": 11146,
			"name": "Đỗ Động",
			"pre": "Xã"
		}, {
			"id": 11177,
			"name": "Hồng Dương",
			"pre": "Xã"
		}, {
			"id": 11159,
			"name": "Kim An",
			"pre": "Xã"
		}, {
			"id": 11110,
			"name": "Kim Bài",
			"pre": "Thị trấn"
		}, {
			"id": 11149,
			"name": "Kim Thư",
			"pre": "Xã"
		}, {
			"id": 11174,
			"name": "Liên Châu",
			"pre": "Xã"
		}, {
			"id": 11123,
			"name": "Mỹ Hưng",
			"pre": "Xã"
		}, {
			"id": 11162,
			"name": "Phương Trung",
			"pre": "Xã"
		}, {
			"id": 11127,
			"name": "Tam Hưng",
			"pre": "Xã"
		}, {
			"id": 11169,
			"name": "Tân Ước",
			"pre": "Xã"
		}, {
			"id": 11137,
			"name": "Thanh Cao",
			"pre": "Xã"
		}, {
			"id": 11133,
			"name": "Thanh Mai",
			"pre": "Xã"
		}, {
			"id": 11140,
			"name": "Thanh Thùy",
			"pre": "Xã"
		}, {
			"id": 11144,
			"name": "Thanh Văn",
			"pre": "Xã"
		}, {
			"id": 11181,
			"name": "Xuân Dương",
			"pre": "Xã"
		}],
		"street": [{
			"id": 772,
			"name": "21B",
			"pre": "Đường"
		}, {
			"id": 7820,
			"name": "Quốc lộ 21B",
			"pre": "Đường"
		}, {
			"id": 597,
			"name": "Quốc lộ 71",
			"pre": "Đường"
		}],
		"project": []
	}, {
		"id": 13,
		"name": "Thanh Trì",
		"pre": "Huyện",
		"ward": [{
			"id": 11223,
			"name": "Đại Áng",
			"pre": "Xã"
		}, {
			"id": 11192,
			"name": "Đông Mỹ",
			"pre": "Xã"
		}, {
			"id": 11201,
			"name": "Duyên Hà",
			"pre": "Xã"
		}, {
			"id": 11233,
			"name": "Hữu Hòa",
			"pre": "Xã"
		}, {
			"id": 11231,
			"name": "Liên Ninh",
			"pre": "Xã"
		}, {
			"id": 11213,
			"name": "Ngọc Hồi",
			"pre": "Xã"
		}, {
			"id": 11209,
			"name": "Ngũ Hiệp",
			"pre": "Xã"
		}, {
			"id": 11219,
			"name": "Tả Thanh Oai",
			"pre": "Xã"
		}, {
			"id": 11205,
			"name": "Tam Hiệp",
			"pre": "Xã"
		}, {
			"id": 11238,
			"name": "Tân Triều",
			"pre": "Xã"
		}, {
			"id": 11189,
			"name": "Thanh Liệt",
			"pre": "Xã"
		}, {
			"id": 11207,
			"name": "Tứ Hiệp",
			"pre": "Xã"
		}, {
			"id": 11185,
			"name": "Văn Điển",
			"pre": "Thị trấn"
		}, {
			"id": 11228,
			"name": "Vạn Phúc",
			"pre": "Xã"
		}, {
			"id": 11216,
			"name": "Vĩnh Quỳnh",
			"pre": "Xã"
		}, {
			"id": 11197,
			"name": "Yên Mỹ",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 631,
			"name": "70",
			"pre": "Đường"
		}, {
			"id": 6372,
			"name": "Cầu Bính",
			"pre": "Đường"
		}, {
			"id": 6189,
			"name": "Cầu Bươu",
			"pre": "Đường"
		}, {
			"id": 9973,
			"name": "Cầu Dậu",
			"pre": "Đường"
		}, {
			"id": 7976,
			"name": "Cầu Tó",
			"pre": "Đường"
		}, {
			"id": 183,
			"name": "Chiến Thắng",
			"pre": "Đường"
		}, {
			"id": 8509,
			"name": "Cổ Điển A",
			"pre": "Đường"
		}, {
			"id": 8510,
			"name": "Cổ Điển B",
			"pre": "Đường"
		}, {
			"id": 8507,
			"name": "Cương Ngô",
			"pre": "Đường"
		}, {
			"id": 6374,
			"name": "Đê Quai",
			"pre": "Đường"
		}, {
			"id": 6371,
			"name": "Đông Mỹ",
			"pre": "Đường"
		}, {
			"id": 7422,
			"name": "Hữu Hòa",
			"pre": "Đường"
		}, {
			"id": 9382,
			"name": "Hữu Lê",
			"pre": "Đường"
		}, {
			"id": 8682,
			"name": "Huỳnh Cung",
			"pre": "Đường"
		}, {
			"id": 334,
			"name": "Kim Giang",
			"pre": "Đường"
		}, {
			"id": 8506,
			"name": "Lạc Thị",
			"pre": "Đường"
		}, {
			"id": 7221,
			"name": "Lưu Phái",
			"pre": "Đường"
		}, {
			"id": 478,
			"name": "Ngọc Hồi",
			"pre": "Đường"
		}, {
			"id": 7280,
			"name": "Ngũ Hiệp",
			"pre": "Đường"
		}, {
			"id": 448,
			"name": "Ngũ Nhạc",
			"pre": "Đường"
		}, {
			"id": 468,
			"name": "Nguyễn Khoái",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 316,
			"name": "Nguyễn Xiển",
			"pre": "Đường"
		}, {
			"id": 8505,
			"name": "Nhị Châu",
			"pre": "Đường"
		}, {
			"id": 718,
			"name": "Phan Trọng Tuệ",
			"pre": "Đường"
		}, {
			"id": 450,
			"name": "Pháp Vân",
			"pre": "Đường"
		}, {
			"id": 5635,
			"name": "Quốc Bảo",
			"pre": "Đường"
		}, {
			"id": 7834,
			"name": "Quốc Lộ 1",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 7654,
			"name": "Quốc lộ 70",
			"pre": "Đường"
		}, {
			"id": 732,
			"name": "Quỳnh Đô",
			"pre": "đường"
		}, {
			"id": 5814,
			"name": "Tả Thanh Oai",
			"pre": "Đường"
		}, {
			"id": 6049,
			"name": "Tân Triều",
			"pre": "Đường"
		}, {
			"id": 451,
			"name": "Thanh Đàm",
			"pre": "Phố"
		}, {
			"id": 460,
			"name": "Thanh Lân",
			"pre": "Đường"
		}, {
			"id": 8750,
			"name": "Thanh Liệt",
			"pre": "Đường"
		}, {
			"id": 452,
			"name": "Trần Thủ Độ",
			"pre": "Đường"
		}, {
			"id": 719,
			"name": "Tranh Khúc",
			"pre": "đường"
		}, {
			"id": 307,
			"name": "Triều Khúc",
			"pre": "Đường"
		}, {
			"id": 734,
			"name": "Tứ Hiệp",
			"pre": "đường"
		}, {
			"id": 471,
			"name": "Tựu Liệt",
			"pre": "Đường"
		}, {
			"id": 8005,
			"name": "Vành Đai 3",
			"pre": "Đường"
		}, {
			"id": 6042,
			"name": "Vĩnh Ninh",
			"pre": "Phố"
		}, {
			"id": 10769,
			"name": "Vĩnh Quỳnh",
			"pre": "Đường"
		}, {
			"id": 6373,
			"name": "Vòng Cầu Niệm",
			"pre": "Đường"
		}, {
			"id": 8508,
			"name": "Yên Ngưu",
			"pre": "Đường"
		}, {
			"id": 5836,
			"name": "Yên Xá",
			"pre": "Đường"
		}],
		"project": [{
			"id": 74,
			"name": "Cầu Bươu",
			"lat": 20.961641311645508,
			"lng": 105.80349731445312,
			"cats": [40, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2492,
			"name": "Chung cư Đại Thanh",
			"lat": 20.95697021484375,
			"lng": 105.80387115478516,
			"cats": []
		}, {
			"id": 1412,
			"name": "Chung cư Viện 103",
			"lat": 20.968753814697266,
			"lng": 105.79210662841797,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1081,
			"name": "Đại Thanh",
			"lat": 20.95703125,
			"lng": 105.80696105957031,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 2170,
			"name": "Eco Green City",
			"lat": 20.983098983764648,
			"lng": 105.80816650390625,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 2334,
			"name": "Eco Spring",
			"lat": 20.98310661315918,
			"lng": 105.80805206298828,
			"cats": []
		}, {
			"id": 857,
			"name": "HDB Plaza",
			"lat": 20.920045852661133,
			"lng": 105.83263397216797,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2053,
			"name": "Hồng Hà Eco City",
			"lat": 20.943979263305664,
			"lng": 105.85543823242187,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 937,
			"name": "South Building",
			"lat": 20.956087112426758,
			"lng": 105.84694671630859,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2389,
			"name": "Tabudec Plaza",
			"lat": 20.958566665649414,
			"lng": 105.80219268798828,
			"cats": []
		}, {
			"id": 885,
			"name": "Tincom Pháp Vân",
			"lat": 20.92555046081543,
			"lng": 105.85104370117187,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1363,
			"name": "Tổng cục 5 Tân Triều",
			"lat": 20.969627380371094,
			"lng": 105.79921722412109,
			"cats": [40, 41, 52, 325]
		}, {
			"id": 2385,
			"name": "Tứ Hiệp Plaza",
			"lat": 20.95258903503418,
			"lng": 105.85185241699219,
			"cats": []
		}, {
			"id": 1835,
			"name": "Viện bỏng Lê Hữu Trác",
			"lat": 20.964401245117188,
			"lng": 105.7933349609375,
			"cats": [48, 55, 324, 325, 326]
		}]
	}, {
		"id": 5,
		"name": "Thanh Xuân",
		"pre": "Quận",
		"ward": [{
			"id": 9326,
			"name": "Hạ Đình",
			"pre": "Phường"
		}, {
			"id": 9328,
			"name": "Khương Đình",
			"pre": "Phường"
		}, {
			"id": 14,
			"name": "Khương Mai",
			"pre": "Phường"
		}, {
			"id": 13,
			"name": "Khương Trung",
			"pre": "Phường"
		}, {
			"id": 9327,
			"name": "Kim Giang",
			"pre": "Phường"
		}, {
			"id": 9329,
			"name": "Nhân Chính",
			"pre": "Phường"
		}, {
			"id": 9330,
			"name": "Phương Liệt",
			"pre": "Phường"
		}, {
			"id": 9332,
			"name": "Thanh Xuân Bắc",
			"pre": "Phường"
		}, {
			"id": 9335,
			"name": "Thanh Xuân Nam",
			"pre": "Phường"
		}, {
			"id": 9339,
			"name": "Thanh Xuân Trung",
			"pre": "Phường"
		}, {
			"id": 9347,
			"name": "Thượng Đình",
			"pre": "Phường"
		}],
		"street": [{
			"id": 309,
			"name": "Bùi Xương Trạch",
			"pre": "Đường"
		}, {
			"id": 7014,
			"name": "Cầu Lủ",
			"pre": "Đường"
		}, {
			"id": 319,
			"name": "Chính Kinh",
			"pre": "Phố"
		}, {
			"id": 320,
			"name": "Cù Chính Lan",
			"pre": "Đường"
		}, {
			"id": 330,
			"name": "Cự Lộc",
			"pre": "Phố"
		}, {
			"id": 298,
			"name": "Định Công",
			"pre": "Đường"
		}, {
			"id": 463,
			"name": "Định Công Thượng",
			"pre": "Đường"
		}, {
			"id": 310,
			"name": "Giải Phóng",
			"pre": "Đường"
		}, {
			"id": 321,
			"name": "Giáp Nhất",
			"pre": "Đường"
		}, {
			"id": 331,
			"name": "Hạ Đình",
			"pre": "Phố"
		}, {
			"id": 299,
			"name": "Hoàng Đạo Thành",
			"pre": "Đường"
		}, {
			"id": 311,
			"name": "Hoàng Đạo Thúy",
			"pre": "Phố"
		}, {
			"id": 322,
			"name": "Hoàng Minh Giám",
			"pre": "Đường"
		}, {
			"id": 332,
			"name": "Hoàng Ngân",
			"pre": "Đường"
		}, {
			"id": 300,
			"name": "Hoàng Văn Thái",
			"pre": "Đường"
		}, {
			"id": 312,
			"name": "Hồng Liên",
			"pre": "Đường"
		}, {
			"id": 323,
			"name": "Khuất Duy Tiến",
			"pre": "Đường"
		}, {
			"id": 333,
			"name": "Khương Đình",
			"pre": "Đường"
		}, {
			"id": 7594,
			"name": "Khương Đình 2",
			"pre": "Đường"
		}, {
			"id": 301,
			"name": "Khương Hạ",
			"pre": "Phố"
		}, {
			"id": 7990,
			"name": "Khương Hạ Mới",
			"pre": "Đường"
		}, {
			"id": 313,
			"name": "Khương Trung",
			"pre": "Đường"
		}, {
			"id": 324,
			"name": "Khương Trung mới",
			"pre": "Đường"
		}, {
			"id": 334,
			"name": "Kim Giang",
			"pre": "Đường"
		}, {
			"id": 3120,
			"name": "Lạc Hồng",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 325,
			"name": "Lê Văn Thiêm",
			"pre": "Phố"
		}, {
			"id": 204,
			"name": "Lương Ngọc Quyến",
			"pre": "Đường"
		}, {
			"id": 88,
			"name": "Lương Thế Vinh",
			"pre": "Đường"
		}, {
			"id": 303,
			"name": "Ngụy Như Kon Tum",
			"pre": "Phố"
		}, {
			"id": 315,
			"name": "Nguyễn Huy Tưởng",
			"pre": "Đường"
		}, {
			"id": 71,
			"name": "Nguyễn Ngọc Nại",
			"pre": "Đường"
		}, {
			"id": 646,
			"name": "Nguyễn Ngọc Vũ",
			"pre": "Phố"
		}, {
			"id": 4048,
			"name": "Nguyễn Quý Đức",
			"pre": "Đường"
		}, {
			"id": 304,
			"name": "Nguyễn Thị Định",
			"pre": "Đường"
		}, {
			"id": 615,
			"name": "Nguyễn Thị Thập",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 326,
			"name": "Nguyễn Tuân",
			"pre": "Đường"
		}, {
			"id": 341,
			"name": "Nguyễn Văn Trỗi",
			"pre": "Đường"
		}, {
			"id": 351,
			"name": "Nguyễn Viết Xuân",
			"pre": "Đường"
		}, {
			"id": 316,
			"name": "Nguyễn Xiển",
			"pre": "Đường"
		}, {
			"id": 327,
			"name": "Nhân Hòa",
			"pre": "Phố"
		}, {
			"id": 496,
			"name": "Phạm Đình Hổ",
			"pre": "Phố"
		}, {
			"id": 352,
			"name": "Phan Đình Giót",
			"pre": "Đường"
		}, {
			"id": 3878,
			"name": "Phố Vọng",
			"pre": "Phố"
		}, {
			"id": 623,
			"name": "Phùng Khoang",
			"pre": "Đường"
		}, {
			"id": 306,
			"name": "Phương Liệt",
			"pre": "Phố"
		}, {
			"id": 317,
			"name": "Quan Nhân",
			"pre": "Phố"
		}, {
			"id": 6763,
			"name": "Tân Hồng",
			"pre": "Đường"
		}, {
			"id": 542,
			"name": "Thanh Nhàn",
			"pre": "Đường"
		}, {
			"id": 9205,
			"name": "Thượng Đình",
			"pre": "Đường"
		}, {
			"id": 328,
			"name": "Tô Vĩnh Diện",
			"pre": "Đường"
		}, {
			"id": 482,
			"name": "Trần Điền",
			"pre": "Phố"
		}, {
			"id": 307,
			"name": "Triều Khúc",
			"pre": "Đường"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 329,
			"name": "Vũ Hữu",
			"pre": "Phố"
		}, {
			"id": 3696,
			"name": "Vũ Tông Phan",
			"pre": "Phố"
		}, {
			"id": 2227,
			"name": "Vũ Trọng Phụng",
			"pre": "Đường"
		}, {
			"id": 308,
			"name": "Vương Thừa Vũ",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1806,
			"name": "108 Nguyễn Trãi",
			"lat": 21.000017166137695,
			"lng": 105.81490325927734,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2305,
			"name": "282 Nguyễn Huy Tưởng",
			"lat": 20.99632453918457,
			"lng": 105.80266571044922,
			"cats": []
		}, {
			"id": 2218,
			"name": "317 Trường Chinh",
			"lat": 21.00196647644043,
			"lng": 105.82420349121094,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 643,
			"name": "44 Triều Khúc",
			"lat": 20.986049652099609,
			"lng": 105.79813385009766,
			"cats": [48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 568,
			"name": "54 Hạ Đình",
			"lat": 20.991142272949219,
			"lng": 105.81041717529297,
			"cats": [48, 55, 59, 324, 325, 326]
		}, {
			"id": 951,
			"name": "57 Vũ Trọng Phụng",
			"lat": 20.997934341430664,
			"lng": 105.80813598632812,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 745,
			"name": "69 Vũ Trọng Phụng",
			"lat": 20.999090194702148,
			"lng": 105.80760955810547,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 676,
			"name": "72 Quan Nhân",
			"lat": 21.006288528442383,
			"lng": 105.81175231933594,
			"cats": [48, 55, 324, 325, 326]
		}, {
			"id": 1797,
			"name": "96 Định Công",
			"lat": 20.984867095947266,
			"lng": 105.83864593505859,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 829,
			"name": "Apartment Building",
			"lat": 21.000425338745117,
			"lng": 105.81442260742187,
			"cats": [55, 324, 326]
		}, {
			"id": 756,
			"name": "C3 Lê Văn Lương (Golden Palace)",
			"lat": 21.00445556640625,
			"lng": 105.80252838134766,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 2040,
			"name": "CCV Building - 164 Khuất Duy Tiến",
			"lat": 21.000026702880859,
			"lng": 105.79985809326172,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1645,
			"name": "Cienco1 Hoàng Đạo Thúy",
			"lat": 21.00474739074707,
			"lng": 105.80617523193359,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1647,
			"name": "Cowaelmic 198 Nguyễn Tuân",
			"lat": 21.000984191894531,
			"lng": 105.80147552490234,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1955,
			"name": "Cự  Lộc",
			"lat": 21.003273010253906,
			"lng": 105.81109619140625,
			"cats": [55, 324, 326]
		}, {
			"id": 1782,
			"name": "Diamond Blue 69 Triều Khúc",
			"lat": 20.984270095825195,
			"lng": 105.79975891113281,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1463,
			"name": "Diamond Flower Tower",
			"lat": 21.005578994750977,
			"lng": 105.80374908447266,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1200,
			"name": "Fafilm - VNT Tower",
			"lat": 21.002019882202148,
			"lng": 105.82038879394531,
			"cats": [41, 48, 50, 52, 55, 324, 325, 326]
		}, {
			"id": 2068,
			"name": "Five Star Kim Giang",
			"lat": 20.986000061035156,
			"lng": 105.81218719482422,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 741,
			"name": "Golden Land",
			"lat": 20.993486404418945,
			"lng": 105.80690765380859,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1271,
			"name": "Golden West",
			"lat": 21.002038955688477,
			"lng": 105.80166625976562,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2320,
			"name": "GoldSeason",
			"lat": 20.994771957397461,
			"lng": 105.80612945556641,
			"cats": []
		}, {
			"id": 175,
			"name": "H10 - Vinaconex 6",
			"lat": 20.989810943603516,
			"lng": 105.80158233642578,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1230,
			"name": "Hạ Đình Tower",
			"lat": 20.991706848144531,
			"lng": 105.80937957763672,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 653,
			"name": "Hà Nội Center Point",
			"lat": 21.004817962646484,
			"lng": 105.80467224121094,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2038,
			"name": "Handi Resco Lê văn Lương",
			"lat": 21.005693435668945,
			"lng": 105.80643463134766,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 158,
			"name": "Hapulico Complex",
			"lat": 21.00048828125,
			"lng": 105.80715942382812,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1142,
			"name": "Hei Tower Điện Lực",
			"lat": 21.003246307373047,
			"lng": 105.80506134033203,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 163,
			"name": "HUD Tower",
			"lat": 21.002099990844727,
			"lng": 105.80062103271484,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2109,
			"name": "Imperia Garden",
			"lat": 20.997276306152344,
			"lng": 105.80298614501953,
			"cats": [48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 2340,
			"name": "Imperial Plaza",
			"lat": 20.987405776977539,
			"lng": 105.84099578857422,
			"cats": []
		}, {
			"id": 1882,
			"name": "KĐT Hạ Đình",
			"lat": 20.9859561920166,
			"lng": 105.80271911621094,
			"cats": [48, 52, 55, 324, 325, 326]
		}, {
			"id": 281,
			"name": "Khang Thông Thanh Xuân",
			"lat": 20.98390007019043,
			"lng": 105.79361724853516,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1614,
			"name": "Khu nhà ở 183 Hoàng Văn Thái",
			"lat": 20.9959716796875,
			"lng": 105.82311248779297,
			"cats": [52, 55, 324, 325, 326]
		}, {
			"id": 2209,
			"name": "Legend Tower 109 Nguyễn Tuân",
			"lat": 20.998144149780273,
			"lng": 105.80348968505859,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 190,
			"name": "Licogi 13 Tower",
			"lat": 20.998832702636719,
			"lng": 105.79779815673828,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1062,
			"name": "Mỹ Sơn Tower",
			"lat": 20.999387741088867,
			"lng": 105.80726623535156,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2262,
			"name": "Pandora 53 Triều Khúc",
			"lat": 20.985971450805664,
			"lng": 105.79833984375,
			"cats": []
		}, {
			"id": 193,
			"name": "Pearl Phương Nam Towers",
			"lat": 20.998714447021484,
			"lng": 105.83699798583984,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1099,
			"name": "Phú Gia Residence",
			"lat": 20.996532440185547,
			"lng": 105.80263519287109,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2176,
			"name": "PVV-Vinapharm 60B Nguyễn Huy Tưởng",
			"lat": 20.998350143432617,
			"lng": 105.80636596679687,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 448,
			"name": "Royal City",
			"lat": 21.002666473388672,
			"lng": 105.8154296875,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 494,
			"name": "Sakura Tower",
			"lat": 20.997611999511719,
			"lng": 105.809326171875,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1731,
			"name": "Sapphire Palace",
			"lat": 20.998561859130859,
			"lng": 105.81185150146484,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1116,
			"name": "Spring Home",
			"lat": 20.987285614013672,
			"lng": 105.83579254150391,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1250,
			"name": "Star Tower 283 Khương trung",
			"lat": 20.994558334350586,
			"lng": 105.81812286376953,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 602,
			"name": "Starcity Center",
			"lat": 21.005144119262695,
			"lng": 105.79467010498047,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 576,
			"name": "Starcity Lê Văn Lương",
			"lat": 21.006181716918945,
			"lng": 105.80642700195312,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2417,
			"name": "Sunrise City Lê Văn Lương",
			"lat": 21.006311416625977,
			"lng": 105.80747985839844,
			"cats": []
		}, {
			"id": 746,
			"name": "Thăng Long Tower",
			"lat": 21.00128173828125,
			"lng": 105.80447387695312,
			"cats": [41, 48, 50, 55, 163]
		}, {
			"id": 2072,
			"name": "Thành An Tower",
			"lat": 21.007913589477539,
			"lng": 105.80716705322266,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1137,
			"name": "The Artemis",
			"lat": 21.000082015991211,
			"lng": 105.82803344726562,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 744,
			"name": "Thượng Đình Plaza",
			"lat": 20.998079299926758,
			"lng": 105.8118896484375,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 2148,
			"name": "Times Tower - HACC1 Complex Building",
			"lat": 21.002452850341797,
			"lng": 105.80119323730469,
			"cats": [48, 50, 55, 57, 324, 326]
		}, {
			"id": 276,
			"name": "Tincom City Point",
			"lat": 20.995811462402344,
			"lng": 105.83812713623047,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 169,
			"name": "Transmeco",
			"lat": 20.998136520385742,
			"lng": 105.79869842529297,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 170,
			"name": "Trung tâm Tài chính Sông Đà",
			"lat": 20.987970352172852,
			"lng": 105.80030059814453,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 915,
			"name": "TTTM Hạ Đình",
			"lat": 21.002300262451172,
			"lng": 105.81990814208984,
			"cats": [48, 53, 55, 59]
		}, {
			"id": 747,
			"name": "TTTM Khương Đình",
			"lat": 20.992830276489258,
			"lng": 105.81769561767578,
			"cats": [48, 50, 55, 59]
		}, {
			"id": 1500,
			"name": "VG Building 235 Nguyễn Trãi",
			"lat": 20.993465423583984,
			"lng": 105.80821990966797,
			"cats": [41, 48, 50, 163]
		}, {
			"id": 2174,
			"name": "Vicem Comatce Tower",
			"lat": 20.999496459960938,
			"lng": 105.8006591796875,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 2250,
			"name": "Vinhomes Smart City",
			"lat": 20.996187210083008,
			"lng": 105.81022644042969,
			"cats": []
		}, {
			"id": 2357,
			"name": "Viwaseen Tower",
			"lat": 20.996795654296875,
			"lng": 105.79288482666016,
			"cats": []
		}]
	}, {
		"id": 26,
		"name": "Thường Tín",
		"pre": "Huyện",
		"ward": [{
			"id": 11340,
			"name": "Chương Dương",
			"pre": "Xã"
		}, {
			"id": 11341,
			"name": "Dũng Tiến",
			"pre": "Xã"
		}, {
			"id": 11342,
			"name": "Duyên Thái",
			"pre": "Xã"
		}, {
			"id": 11343,
			"name": "Hà Hồi",
			"pre": "Xã"
		}, {
			"id": 11344,
			"name": "Hiền Giang",
			"pre": "Xã"
		}, {
			"id": 11345,
			"name": "Hòa Bình",
			"pre": "Xã"
		}, {
			"id": 11347,
			"name": "Hồng Vân",
			"pre": "Xã"
		}, {
			"id": 11346,
			"name": "Khánh Hà",
			"pre": "Xã"
		}, {
			"id": 11348,
			"name": "Lê Lợi",
			"pre": "Xã"
		}, {
			"id": 11349,
			"name": "Liên Phương",
			"pre": "Xã"
		}, {
			"id": 11350,
			"name": "Minh Cường",
			"pre": "Xã"
		}, {
			"id": 11351,
			"name": "Nghiêm Xuyên",
			"pre": "Xã"
		}, {
			"id": 11352,
			"name": "Nguyễn Trãi",
			"pre": "Xã"
		}, {
			"id": 11353,
			"name": "Nhị Khê",
			"pre": "Xã"
		}, {
			"id": 11354,
			"name": "Ninh Sở",
			"pre": "Xã"
		}, {
			"id": 11355,
			"name": "Quất Động",
			"pre": "Xã"
		}, {
			"id": 11356,
			"name": "Tân Minh",
			"pre": "Xã"
		}, {
			"id": 11357,
			"name": "Thắng Lợi",
			"pre": "Xã"
		}, {
			"id": 11358,
			"name": "Thống Nhất",
			"pre": "Xã"
		}, {
			"id": 11359,
			"name": "Thư Phú",
			"pre": "Xã"
		}, {
			"id": 11339,
			"name": "Thường Tín",
			"pre": "Thị trấn"
		}, {
			"id": 11360,
			"name": "Tiền Phong",
			"pre": "Xã"
		}, {
			"id": 11361,
			"name": "Tô Hiệu",
			"pre": "Xã"
		}, {
			"id": 11362,
			"name": "Tự Nhiên",
			"pre": "Xã"
		}, {
			"id": 11364,
			"name": "Văn Bình",
			"pre": "Xã"
		}, {
			"id": 11363,
			"name": "Vạn Điểm",
			"pre": "Xã"
		}, {
			"id": 11365,
			"name": "Văn Phú",
			"pre": "Xã"
		}, {
			"id": 11367,
			"name": "Vân Tảo",
			"pre": "Xã"
		}, {
			"id": 11366,
			"name": "Văn Tự",
			"pre": "Xã"
		}],
		"street": [{
			"id": 8746,
			"name": "Ga",
			"pre": "Đường"
		}, {
			"id": 9062,
			"name": "Liên Thôn",
			"pre": "Đường"
		}, {
			"id": 8681,
			"name": "Liễu Ngoại",
			"pre": "Đường"
		}, {
			"id": 9043,
			"name": "Nguyễn Tuấn Trình",
			"pre": "Đường"
		}, {
			"id": 9972,
			"name": "Quán Gánh",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 3412,
			"name": "Quốc lộ 1B",
			"pre": "Đường"
		}, {
			"id": 597,
			"name": "Quốc lộ 71",
			"pre": "Đường"
		}, {
			"id": 8185,
			"name": "Quốc Lộ 71A",
			"pre": "Đường"
		}, {
			"id": 8954,
			"name": "Tía",
			"pre": "Phố"
		}, {
			"id": 9223,
			"name": "Tỉnh lộ 427",
			"pre": "Đường"
		}, {
			"id": 8135,
			"name": "Vôi",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2398,
			"name": "Khu đô thị Duyên Thái",
			"lat": 20.8986759185791,
			"lng": 105.86719512939453,
			"cats": []
		}]
	}, {
		"id": 28,
		"name": "Ứng Hòa",
		"pre": "Huyện",
		"ward": [{
			"id": 11385,
			"name": "Cao Thành",
			"pre": "Xã"
		}, {
			"id": 11386,
			"name": "Đại Cường",
			"pre": "Xã"
		}, {
			"id": 11387,
			"name": "Đại Hùng",
			"pre": "Xã"
		}, {
			"id": 11388,
			"name": "Đội Bình",
			"pre": "Xã"
		}, {
			"id": 11389,
			"name": "Đông Lỗ",
			"pre": "Xã"
		}, {
			"id": 11390,
			"name": "Đồng Tân",
			"pre": "Xã"
		}, {
			"id": 11391,
			"name": "Đồng Tiến",
			"pre": "Xã"
		}, {
			"id": 11393,
			"name": "Hòa Lâm",
			"pre": "Xã"
		}, {
			"id": 11394,
			"name": "Hòa Nam",
			"pre": "Xã"
		}, {
			"id": 11395,
			"name": "Hòa Phú",
			"pre": "Xã"
		}, {
			"id": 11392,
			"name": "Hoa Sơn",
			"pre": "Xã"
		}, {
			"id": 11396,
			"name": "Hòa Xá",
			"pre": "Xã"
		}, {
			"id": 11397,
			"name": "Hồng Quang",
			"pre": "Xã"
		}, {
			"id": 11398,
			"name": "Kim Đường",
			"pre": "Xã"
		}, {
			"id": 11399,
			"name": "Liên Bạt",
			"pre": "Xã"
		}, {
			"id": 11400,
			"name": "Lưu Hoàng",
			"pre": "Xã"
		}, {
			"id": 11401,
			"name": "Minh Đức",
			"pre": "Xã"
		}, {
			"id": 11402,
			"name": "Phù Lưu",
			"pre": "Xã"
		}, {
			"id": 11403,
			"name": "Phương Tú",
			"pre": "Xã"
		}, {
			"id": 11404,
			"name": "Quảng Phú Cầu",
			"pre": "Xã"
		}, {
			"id": 11405,
			"name": "Sơn Công",
			"pre": "Xã"
		}, {
			"id": 11413,
			"name": "Tân Phương",
			"pre": "Xã"
		}, {
			"id": 11406,
			"name": "Tảo Dương Văn",
			"pre": "Xã"
		}, {
			"id": 11407,
			"name": "Trầm Lộng",
			"pre": "Xã"
		}, {
			"id": 11408,
			"name": "Trung Tú",
			"pre": "Xã"
		}, {
			"id": 11409,
			"name": "Trường Thịnh",
			"pre": "Xã"
		}, {
			"id": 11384,
			"name": "Vân Đình",
			"pre": "Thị trấn"
		}, {
			"id": 11410,
			"name": "Vạn Thái",
			"pre": "Xã"
		}, {
			"id": 11411,
			"name": "Viên An",
			"pre": "Xã"
		}, {
			"id": 11412,
			"name": "Viên Nội",
			"pre": "Xã"
		}],
		"street": [{
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 517,
			"name": "Nguyễn Công Trứ",
			"pre": "Đường"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 7865,
			"name": "Quốc lộ 21",
			"pre": "Đường"
		}, {
			"id": 771,
			"name": "Thôn Thanh Ấm",
			"pre": "đường"
		}, {
			"id": 770,
			"name": "Tỉnh lộ 424",
			"pre": "Đường"
		}, {
			"id": 368,
			"name": "Tô Hiệu",
			"pre": "Đường"
		}, {
			"id": 611,
			"name": "Trần Đăng Ninh",
			"pre": "Đường"
		}, {
			"id": 8097,
			"name": "Văn Phú",
			"pre": "Đường"
		}],
		"project": []
	}]
}, {
	"code": "BD",
	"name": "Bình Dương",
	"district": [{
		"id": 716,
		"name": "Bàu Bàng",
		"pre": "Huyện",
		"ward": [{
			"id": 1062,
			"name": "Cây Trường II",
			"pre": "Xã"
		}, {
			"id": 1073,
			"name": "Hưng Hòa",
			"pre": "Xã"
		}, {
			"id": 1065,
			"name": "Lai Hưng",
			"pre": "Xã"
		}, {
			"id": 1075,
			"name": "Lai Uyên",
			"pre": "Xã"
		}, {
			"id": 12109,
			"name": "Lai Uyên",
			"pre": "Xã"
		}, {
			"id": 1064,
			"name": "Long Nguyên",
			"pre": "Xã"
		}, {
			"id": 1074,
			"name": "Tân Hưng",
			"pre": "Xã"
		}, {
			"id": 1063,
			"name": "Trừ Văn Thố",
			"pre": "Xã"
		}],
		"street": [{
			"id": 1746,
			"name": "Đại Lộ Bình Dương",
			"pre": "Đường"
		}, {
			"id": 9111,
			"name": "ĐT 749A",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 8670,
			"name": "Tỉnh lộ 24",
			"pre": "Đường"
		}],
		"project": [{
			"id": 522,
			"name": "KĐT dịch vụ Bàu Bàng",
			"lat": 11.164340019226074,
			"lng": 106.53269195556641,
			"cats": [40, 41, 48, 52, 55, 59, 325]
		}]
	}, {
		"id": 156,
		"name": "Bến Cát",
		"pre": "Huyện",
		"ward": [{
			"id": 1072,
			"name": "An Điền",
			"pre": "Xã"
		}, {
			"id": 1071,
			"name": "An Tây",
			"pre": "Xã"
		}, {
			"id": 12251,
			"name": "Cây Trường",
			"pre": "Xã"
		}, {
			"id": 1067,
			"name": "Chánh Phú Hòa",
			"pre": "Xã"
		}, {
			"id": 1069,
			"name": "Hòa Lợi",
			"pre": "Xã"
		}, {
			"id": 1061,
			"name": "Mỹ Phước",
			"pre": "Phường"
		}, {
			"id": 1070,
			"name": "Phú An",
			"pre": "Xã"
		}, {
			"id": 1068,
			"name": "Tân Định",
			"pre": "Xã"
		}, {
			"id": 1066,
			"name": "Thới Hòa",
			"pre": "Xã"
		}],
		"street": [{
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4196,
			"name": "30",
			"pre": "Đường"
		}, {
			"id": 8220,
			"name": "7A",
			"pre": "Đường"
		}, {
			"id": 2378,
			"name": "7B",
			"pre": "Đường"
		}, {
			"id": 7942,
			"name": "An Điền",
			"pre": "Đường"
		}, {
			"id": 10303,
			"name": "Ba Lan Xi",
			"pre": "Đường"
		}, {
			"id": 2567,
			"name": "Ba Mươi Tháng Tư",
			"pre": "Đường"
		}, {
			"id": 10895,
			"name": "Bàu Tây",
			"pre": "Đường"
		}, {
			"id": 1344,
			"name": "Bùi Văn Ngữ",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 3220,
			"name": "D10",
			"pre": "Đường"
		}, {
			"id": 3222,
			"name": "D11",
			"pre": "Đường"
		}, {
			"id": 6872,
			"name": "D12",
			"pre": "Đường"
		}, {
			"id": 3221,
			"name": "D13",
			"pre": "Đường"
		}, {
			"id": 7425,
			"name": "D14",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 8176,
			"name": "D17A",
			"pre": "Đường"
		}, {
			"id": 8759,
			"name": "D19",
			"pre": "Đường"
		}, {
			"id": 4601,
			"name": "D2",
			"pre": "Đường"
		}, {
			"id": 9037,
			"name": "D20",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 2599,
			"name": "D4",
			"pre": "Đường"
		}, {
			"id": 7337,
			"name": "D5B",
			"pre": "Đường"
		}, {
			"id": 8159,
			"name": "D6",
			"pre": "Đường"
		}, {
			"id": 5889,
			"name": "D9",
			"pre": "Đường"
		}, {
			"id": 7150,
			"name": "DA1",
			"pre": "Đường"
		}, {
			"id": 7741,
			"name": "DA1-1",
			"pre": "Đường"
		}, {
			"id": 9715,
			"name": "DA1-2",
			"pre": "Đường"
		}, {
			"id": 9195,
			"name": "DA2",
			"pre": "Đường"
		}, {
			"id": 1746,
			"name": "Đại Lộ Bình Dương",
			"pre": "Đường"
		}, {
			"id": 10503,
			"name": "DB13",
			"pre": "Đường"
		}, {
			"id": 8892,
			"name": "DB4",
			"pre": "Đường"
		}, {
			"id": 10854,
			"name": "DB5",
			"pre": "Đường"
		}, {
			"id": 10743,
			"name": "DB8",
			"pre": "Đường"
		}, {
			"id": 5962,
			"name": "DC3",
			"pre": "Đường"
		}, {
			"id": 6908,
			"name": "DC6",
			"pre": "Đường"
		}, {
			"id": 9110,
			"name": "DE1",
			"pre": "Đường"
		}, {
			"id": 9842,
			"name": "DE4",
			"pre": "Đường"
		}, {
			"id": 9363,
			"name": "DE7",
			"pre": "Đường"
		}, {
			"id": 10720,
			"name": "DH15",
			"pre": "Đường"
		}, {
			"id": 10653,
			"name": "DH6",
			"pre": "Đường"
		}, {
			"id": 10789,
			"name": "DI1",
			"pre": "Đường"
		}, {
			"id": 8247,
			"name": "DJ1",
			"pre": "Đường"
		}, {
			"id": 8286,
			"name": "DJ10",
			"pre": "Đường"
		}, {
			"id": 10819,
			"name": "DJ12",
			"pre": "Đường"
		}, {
			"id": 10218,
			"name": "DJ15",
			"pre": "Đường"
		}, {
			"id": 7856,
			"name": "DJ1A",
			"pre": "Đường"
		}, {
			"id": 8283,
			"name": "DJ2",
			"pre": "Đường"
		}, {
			"id": 10557,
			"name": "DJ34",
			"pre": "Đường"
		}, {
			"id": 10238,
			"name": "DJ3A",
			"pre": "Đường"
		}, {
			"id": 7752,
			"name": "DJ4",
			"pre": "Đường"
		}, {
			"id": 7835,
			"name": "DJ5",
			"pre": "Đường"
		}, {
			"id": 8246,
			"name": "DJ6",
			"pre": "Đường"
		}, {
			"id": 10362,
			"name": "DJ7",
			"pre": "Đường"
		}, {
			"id": 8423,
			"name": "DJ8",
			"pre": "Đường"
		}, {
			"id": 7435,
			"name": "DJ9",
			"pre": "Đường"
		}, {
			"id": 9963,
			"name": "DK5A",
			"pre": "Đường"
		}, {
			"id": 7742,
			"name": "DL12",
			"pre": "Đường"
		}, {
			"id": 9746,
			"name": "DL13",
			"pre": "Đường"
		}, {
			"id": 8175,
			"name": "DL14",
			"pre": "Đường"
		}, {
			"id": 8772,
			"name": "DL15",
			"pre": "Đường"
		}, {
			"id": 8296,
			"name": "DL16",
			"pre": "Đường"
		}, {
			"id": 9751,
			"name": "DL17",
			"pre": "Đường"
		}, {
			"id": 8694,
			"name": "DL7",
			"pre": "Đường"
		}, {
			"id": 10605,
			"name": "DL9",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 7171,
			"name": "ĐT 743",
			"pre": "Đường"
		}, {
			"id": 8577,
			"name": "ĐT 744",
			"pre": "Đường"
		}, {
			"id": 8565,
			"name": "ĐT 746",
			"pre": "Đường"
		}, {
			"id": 8319,
			"name": "ĐT 748",
			"pre": "Đường"
		}, {
			"id": 8479,
			"name": "ĐT 749",
			"pre": "Đường"
		}, {
			"id": 9023,
			"name": "DX",
			"pre": "Đường"
		}, {
			"id": 9713,
			"name": "DX 020",
			"pre": "Đường"
		}, {
			"id": 9730,
			"name": "DX 03",
			"pre": "Đường"
		}, {
			"id": 10425,
			"name": "H3",
			"pre": "Đường"
		}, {
			"id": 2781,
			"name": "H4",
			"pre": "Đường"
		}, {
			"id": 8186,
			"name": "H6",
			"pre": "Đường"
		}, {
			"id": 2558,
			"name": "Hai Tháng Chín",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 8891,
			"name": "Hương lộ 740",
			"pre": "Đường"
		}, {
			"id": 2561,
			"name": "Huyện lộ 604",
			"pre": "Đường"
		}, {
			"id": 10949,
			"name": "KL13",
			"pre": "Đường"
		}, {
			"id": 8288,
			"name": "KL3",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 5433,
			"name": "Mỹ Phước",
			"pre": "Đường"
		}, {
			"id": 6447,
			"name": "Mỹ Phước 1",
			"pre": "Đường"
		}, {
			"id": 6851,
			"name": "Mỹ Phước 2",
			"pre": "Đường"
		}, {
			"id": 6500,
			"name": "Mỹ Phước 3",
			"pre": "Đường"
		}, {
			"id": 6499,
			"name": "Mỹ Phước 4",
			"pre": "Đường"
		}, {
			"id": 6988,
			"name": "Mỹ Phước Tân Vạn",
			"pre": "Đường"
		}, {
			"id": 3599,
			"name": "N1",
			"pre": "Đường"
		}, {
			"id": 7328,
			"name": "N11",
			"pre": "Đường"
		}, {
			"id": 9958,
			"name": "N13",
			"pre": "Đường"
		}, {
			"id": 8241,
			"name": "N14",
			"pre": "Đường"
		}, {
			"id": 8464,
			"name": "N16",
			"pre": "Đường"
		}, {
			"id": 8151,
			"name": "N17",
			"pre": "Đường"
		}, {
			"id": 1984,
			"name": "N2",
			"pre": "Đường"
		}, {
			"id": 10359,
			"name": "N2B",
			"pre": "Đường"
		}, {
			"id": 10404,
			"name": "N2-D2",
			"pre": "Đường"
		}, {
			"id": 3019,
			"name": "N3",
			"pre": "Đường"
		}, {
			"id": 10405,
			"name": "N4-D2",
			"pre": "Đường"
		}, {
			"id": 6732,
			"name": "N5",
			"pre": "Đường"
		}, {
			"id": 7258,
			"name": "N7",
			"pre": "Đường"
		}, {
			"id": 7138,
			"name": "N9",
			"pre": "Đường"
		}, {
			"id": 10651,
			"name": "NA-1",
			"pre": "Đường"
		}, {
			"id": 10361,
			"name": "NA11",
			"pre": "Đường"
		}, {
			"id": 7151,
			"name": "NA2",
			"pre": "Đường"
		}, {
			"id": 9391,
			"name": "NA3",
			"pre": "Đường"
		}, {
			"id": 8446,
			"name": "NA5",
			"pre": "Đường"
		}, {
			"id": 9308,
			"name": "NA7",
			"pre": "Đường"
		}, {
			"id": 9836,
			"name": "NA9",
			"pre": "Đường"
		}, {
			"id": 10752,
			"name": "NB2B",
			"pre": "Đường"
		}, {
			"id": 9961,
			"name": "NB3A",
			"pre": "Đường"
		}, {
			"id": 10680,
			"name": "NB6",
			"pre": "Đường"
		}, {
			"id": 10512,
			"name": "NB7A",
			"pre": "Đường"
		}, {
			"id": 10204,
			"name": "NB8",
			"pre": "Đường"
		}, {
			"id": 9960,
			"name": "NB9",
			"pre": "Đường"
		}, {
			"id": 9125,
			"name": "NC2",
			"pre": "Đường"
		}, {
			"id": 10333,
			"name": "NC3",
			"pre": "Đường"
		}, {
			"id": 7796,
			"name": "NE2",
			"pre": "Đường"
		}, {
			"id": 8563,
			"name": "NE3",
			"pre": "Đường"
		}, {
			"id": 8935,
			"name": "NE4",
			"pre": "Đường"
		}, {
			"id": 10410,
			"name": "NE6",
			"pre": "Đường"
		}, {
			"id": 7036,
			"name": "NE8",
			"pre": "Đường"
		}, {
			"id": 10434,
			"name": "NF6",
			"pre": "Đường"
		}, {
			"id": 10582,
			"name": "NG1",
			"pre": "Đường"
		}, {
			"id": 10615,
			"name": "NG1A",
			"pre": "Đường"
		}, {
			"id": 10556,
			"name": "NG3A",
			"pre": "Đường"
		}, {
			"id": 10707,
			"name": "NG5",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 6448,
			"name": "Nguyễn Thành Vĩnh",
			"pre": "Đường"
		}, {
			"id": 1406,
			"name": "Nguyễn Văn Thành",
			"pre": "Đường"
		}, {
			"id": 10639,
			"name": "NH15",
			"pre": "Đường"
		}, {
			"id": 10815,
			"name": "NH7A",
			"pre": "Đường"
		}, {
			"id": 10157,
			"name": "NI10",
			"pre": "Đường"
		}, {
			"id": 10698,
			"name": "NI13",
			"pre": "Đường"
		}, {
			"id": 8314,
			"name": "NI2",
			"pre": "Đường"
		}, {
			"id": 10650,
			"name": "NI5",
			"pre": "Đường"
		}, {
			"id": 10754,
			"name": "NI7",
			"pre": "Đường"
		}, {
			"id": 8285,
			"name": "NJ11",
			"pre": "Đường"
		}, {
			"id": 8287,
			"name": "NJ12",
			"pre": "Đường"
		}, {
			"id": 8452,
			"name": "NJ14",
			"pre": "Đường"
		}, {
			"id": 7149,
			"name": "NJ17",
			"pre": "Đường"
		}, {
			"id": 8050,
			"name": "NJ18",
			"pre": "Đường"
		}, {
			"id": 10511,
			"name": "NJ19",
			"pre": "Đường"
		}, {
			"id": 8284,
			"name": "NJ21",
			"pre": "Đường"
		}, {
			"id": 10472,
			"name": "NJ3",
			"pre": "Đường"
		}, {
			"id": 10755,
			"name": "NJ5",
			"pre": "Đường"
		}, {
			"id": 8453,
			"name": "NJ9",
			"pre": "Đường"
		}, {
			"id": 10482,
			"name": "NK11",
			"pre": "Đường"
		}, {
			"id": 10142,
			"name": "NK12",
			"pre": "Đường"
		}, {
			"id": 10773,
			"name": "NK13",
			"pre": "Đường"
		}, {
			"id": 10198,
			"name": "NK2",
			"pre": "Đường"
		}, {
			"id": 9154,
			"name": "NK5",
			"pre": "Đường"
		}, {
			"id": 10561,
			"name": "NK7",
			"pre": "Đường"
		}, {
			"id": 10585,
			"name": "NK9",
			"pre": "Đường"
		}, {
			"id": 10552,
			"name": "NL11",
			"pre": "Đường"
		}, {
			"id": 10772,
			"name": "NL12",
			"pre": "Đường"
		}, {
			"id": 10212,
			"name": "NL13",
			"pre": "Đường"
		}, {
			"id": 8910,
			"name": "NL14A",
			"pre": "Đường"
		}, {
			"id": 10135,
			"name": "NL15",
			"pre": "Đường"
		}, {
			"id": 9962,
			"name": "NL16A",
			"pre": "Đường"
		}, {
			"id": 9682,
			"name": "NL17",
			"pre": "Đường"
		}, {
			"id": 8303,
			"name": "NL18",
			"pre": "Đường"
		}, {
			"id": 10176,
			"name": "NL18A",
			"pre": "Đường"
		}, {
			"id": 10665,
			"name": "NL19",
			"pre": "Đường"
		}, {
			"id": 10156,
			"name": "NL2",
			"pre": "Đường"
		}, {
			"id": 10134,
			"name": "NL3",
			"pre": "Đường"
		}, {
			"id": 10918,
			"name": "NL4",
			"pre": "Đường"
		}, {
			"id": 10553,
			"name": "NL6",
			"pre": "Đường"
		}, {
			"id": 7551,
			"name": "NL7",
			"pre": "Đường"
		}, {
			"id": 7695,
			"name": "NP3A",
			"pre": "Đường"
		}, {
			"id": 741,
			"name": "Phan Đăng Lưu",
			"pre": "Phố"
		}, {
			"id": 7566,
			"name": "Phú Sơn",
			"pre": "Đường"
		}, {
			"id": 7420,
			"name": "Phú Thứ",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 7674,
			"name": "Quốc lộ 14",
			"pre": "Đường"
		}, {
			"id": 3210,
			"name": "S1",
			"pre": "Đường"
		}, {
			"id": 1757,
			"name": "Tân Vạn",
			"pre": "Đường"
		}, {
			"id": 7673,
			"name": "Tân Vĩnh Hiệp",
			"pre": "Đường"
		}, {
			"id": 6792,
			"name": "Tạo Lực 2",
			"pre": "Đường"
		}, {
			"id": 7740,
			"name": "TC 4",
			"pre": "Đường"
		}, {
			"id": 8015,
			"name": "TC1",
			"pre": "Đường"
		}, {
			"id": 7975,
			"name": "TC1A",
			"pre": "Đường"
		}, {
			"id": 7855,
			"name": "TC2",
			"pre": "Đường"
		}, {
			"id": 8838,
			"name": "TC3",
			"pre": "Đường"
		}, {
			"id": 2097,
			"name": "Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 8125,
			"name": "Tỉnh lộ 2/9",
			"pre": "Đường"
		}, {
			"id": 2367,
			"name": "Tỉnh lộ 240",
			"pre": "Đường"
		}, {
			"id": 2361,
			"name": "Tỉnh lộ 744",
			"pre": "Đường"
		}, {
			"id": 2362,
			"name": "Tỉnh lộ 748",
			"pre": "Đường"
		}, {
			"id": 1903,
			"name": "Tỉnh lộ 7A",
			"pre": "Đường"
		}, {
			"id": 219,
			"name": "Trần Quốc Toản",
			"pre": "Đường"
		}, {
			"id": 7574,
			"name": "Vành Đai 4",
			"pre": "Đường"
		}, {
			"id": 10716,
			"name": "XB2",
			"pre": "Đường"
		}, {
			"id": 10622,
			"name": "XC10",
			"pre": "Đường"
		}, {
			"id": 10713,
			"name": "XC2",
			"pre": "Đường"
		}, {
			"id": 10689,
			"name": "XC3",
			"pre": "Đường"
		}, {
			"id": 11005,
			"name": "XC4",
			"pre": "Đường"
		}, {
			"id": 10890,
			"name": "XC7",
			"pre": "Đường"
		}],
		"project": [{
			"id": 889,
			"name": "An Phát Thịnh - An Tây",
			"lat": 11.079898834228516,
			"lng": 106.55702972412109,
			"cats": [40, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 1981,
			"name": "Bến Cát Golden Land",
			"lat": 11.129476547241211,
			"lng": 106.57025909423828,
			"cats": [40]
		}, {
			"id": 1395,
			"name": "BenCat Center Point",
			"lat": 11.095314025878906,
			"lng": 106.61041259765625,
			"cats": [40, 41, 48, 52, 53, 55, 324, 325, 326]
		}, {
			"id": 2121,
			"name": "City Garden",
			"lat": 11.109622001647949,
			"lng": 106.60672760009766,
			"cats": [40, 48, 51, 55, 163, 325]
		}, {
			"id": 1024,
			"name": "Cocoland",
			"lat": 11.136760711669922,
			"lng": 106.65212249755859,
			"cats": [40, 325]
		}, {
			"id": 977,
			"name": "College Town",
			"lat": 11.095963478088379,
			"lng": 106.60496520996094,
			"cats": [40, 41, 48, 52, 55, 57, 325]
		}, {
			"id": 1074,
			"name": "College Town II",
			"lat": 11.094747543334961,
			"lng": 106.60389709472656,
			"cats": [40, 41, 48, 52, 55, 325]
		}, {
			"id": 1859,
			"name": "Đại Nam",
			"lat": 11.054871559143066,
			"lng": 106.63165283203125,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 1551,
			"name": "Eastern Land",
			"lat": 11.124353408813477,
			"lng": 106.60224151611328,
			"cats": [40, 41, 48, 52, 59, 324, 325, 326]
		}, {
			"id": 1856,
			"name": "Ecolakes Mỹ Phước",
			"lat": 11.117456436157227,
			"lng": 106.63137054443359,
			"cats": [44, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 2263,
			"name": "Golden Center City",
			"lat": 11.089835166931152,
			"lng": 106.60702514648437,
			"cats": []
		}, {
			"id": 942,
			"name": "Golden City",
			"lat": 11.12608814239502,
			"lng": 106.64038848876953,
			"cats": [40, 41, 48, 52, 55, 57, 59, 325]
		}, {
			"id": 1090,
			"name": "Golden Dragon (Kim Long)",
			"lat": 11.095672607421875,
			"lng": 106.62242889404297,
			"cats": [40, 41, 48, 52, 55, 325]
		}, {
			"id": 931,
			"name": "Goldland",
			"lat": 11.06787109375,
			"lng": 106.6873779296875,
			"cats": [48, 50, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 2336,
			"name": "Happy Home",
			"lat": 11.151206970214844,
			"lng": 106.62422943115234,
			"cats": []
		}, {
			"id": 1735,
			"name": "Lucky Home",
			"lat": 11.152078628540039,
			"lng": 106.61602783203125,
			"cats": [40, 51, 163, 324, 325, 326]
		}, {
			"id": 463,
			"name": "Mỹ Phước 1",
			"lat": 11.128634452819824,
			"lng": 106.59703826904297,
			"cats": [40, 45, 53]
		}, {
			"id": 1855,
			"name": "Mỹ Phước 2",
			"lat": 11.137392044067383,
			"lng": 106.62175750732422,
			"cats": [40, 48, 55, 59, 325]
		}, {
			"id": 1301,
			"name": "Mỹ Phước 3",
			"lat": 11.11406421661377,
			"lng": 106.64686584472656,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1300,
			"name": "Mỹ Phước 4",
			"lat": 11.089554786682129,
			"lng": 106.60780334472656,
			"cats": [40, 48, 55, 59, 325]
		}, {
			"id": 1970,
			"name": "New Era City",
			"lat": 11.103433609008789,
			"lng": 106.62023162841797,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1049,
			"name": "New Life",
			"lat": 11.090849876403809,
			"lng": 106.67039489746094,
			"cats": [40, 48, 51, 55, 59, 163, 325]
		}, {
			"id": 985,
			"name": "Ngũ Tượng Khải Hoàn",
			"lat": 11.108708381652832,
			"lng": 106.61153411865234,
			"cats": [40, 41, 48, 52, 55, 59, 325]
		}, {
			"id": 953,
			"name": "Phú An",
			"lat": 11.138757705688477,
			"lng": 106.62557220458984,
			"cats": [48, 50, 51, 55, 59, 163, 325]
		}, {
			"id": 1610,
			"name": "Phú Mỹ",
			"lat": 11.120366096496582,
			"lng": 106.61232757568359,
			"cats": [55, 324, 326]
		}, {
			"id": 523,
			"name": "Rạch Bắp",
			"lat": 11.143982887268066,
			"lng": 106.55697631835937,
			"cats": [40, 48, 52, 55, 324, 325, 326]
		}, {
			"id": 2142,
			"name": "RichHome",
			"lat": 11.161055564880371,
			"lng": 106.67340850830078,
			"cats": [40, 48, 51, 55, 57, 163, 325]
		}, {
			"id": 2181,
			"name": "RichHome 2",
			"lat": 11.117595672607422,
			"lng": 106.66717529296875,
			"cats": [40, 51, 55, 163, 283, 325]
		}, {
			"id": 1414,
			"name": "Spring City",
			"lat": 11.113790512084961,
			"lng": 106.64128112792969,
			"cats": [40, 41, 48, 52, 55, 57, 325]
		}, {
			"id": 1471,
			"name": "StarLight City",
			"lat": 11.104907989501953,
			"lng": 106.60684204101562,
			"cats": [40, 48, 51, 55, 59, 163, 325]
		}, {
			"id": 1168,
			"name": "Sunrise River",
			"lat": 11.109158515930176,
			"lng": 106.59377288818359,
			"cats": [40, 41, 44, 48, 52, 325]
		}, {
			"id": 525,
			"name": "The Green River",
			"lat": 11.082178115844727,
			"lng": 106.61134338378906,
			"cats": [40, 41, 48, 52, 55, 59, 325]
		}]
	}, {
		"id": 157,
		"name": "Dầu Tiếng",
		"pre": "Huyện",
		"ward": [{
			"id": 955,
			"name": "An Lập",
			"pre": "Xã"
		}, {
			"id": 960,
			"name": "Dầu Tiếng",
			"pre": "Phường"
		}, {
			"id": 954,
			"name": "Định  Hiệp",
			"pre": "Xã"
		}, {
			"id": 951,
			"name": "Định An",
			"pre": "Xã"
		}, {
			"id": 953,
			"name": "Định Thành",
			"pre": "Xã"
		}, {
			"id": 952,
			"name": "Long Hòa",
			"pre": "Xã"
		}, {
			"id": 957,
			"name": "Long Tân",
			"pre": "Xã"
		}, {
			"id": 932,
			"name": "Minh Hòa",
			"pre": "Xã"
		}, {
			"id": 937,
			"name": "Minh Tân",
			"pre": "Xã"
		}, {
			"id": 934,
			"name": "Minh Thạnh",
			"pre": "Xã"
		}, {
			"id": 958,
			"name": "Thanh An",
			"pre": "Xã"
		}, {
			"id": 959,
			"name": "Thanh Tuyền",
			"pre": "Xã"
		}],
		"street": [{
			"id": 8666,
			"name": "13/3",
			"pre": "Đường"
		}, {
			"id": 10018,
			"name": "20/8",
			"pre": "Đường"
		}, {
			"id": 10017,
			"name": "Bàu Rong",
			"pre": "Đường"
		}, {
			"id": 8232,
			"name": "Bàu Sen",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 797,
			"name": "Độc Lập",
			"pre": "Đường"
		}, {
			"id": 8577,
			"name": "ĐT 744",
			"pre": "Đường"
		}, {
			"id": 102,
			"name": "Hai Bà Trưng",
			"pre": "Phố"
		}, {
			"id": 2364,
			"name": "Hồ Chí Minh",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 1797,
			"name": "Ngô Văn Trị",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 560,
			"name": "Nguyễn Bỉnh Khiêm",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 10014,
			"name": "Nguyễn Văn Ngân",
			"pre": "Đường"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 10016,
			"name": "Phạm Thị Hoa",
			"pre": "Đường"
		}, {
			"id": 2097,
			"name": "Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 2363,
			"name": "Tỉnh lộ 239",
			"pre": "Đường"
		}, {
			"id": 2367,
			"name": "Tỉnh lộ 240",
			"pre": "Đường"
		}, {
			"id": 2361,
			"name": "Tỉnh lộ 744",
			"pre": "Đường"
		}, {
			"id": 2362,
			"name": "Tỉnh lộ 748",
			"pre": "Đường"
		}, {
			"id": 2365,
			"name": "Tỉnh lộ 749",
			"pre": "Đường"
		}, {
			"id": 2368,
			"name": "Tỉnh lộ 750",
			"pre": "Đường"
		}, {
			"id": 2366,
			"name": "Tỉnh lộ 751",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 10015,
			"name": "Trần Văn Lắc",
			"pre": "Đường"
		}, {
			"id": 2468,
			"name": "Trần Văn Trà",
			"pre": "Đường"
		}, {
			"id": 1972,
			"name": "Tự Do",
			"pre": "Đường"
		}, {
			"id": 8955,
			"name": "Văn Công Khai",
			"pre": "Đường"
		}, {
			"id": 1944,
			"name": "Vành Đai",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2206,
			"name": "The Garden Houses",
			"lat": 11.354266166687012,
			"lng": 106.36992645263672,
			"cats": [40, 283]
		}]
	}, {
		"id": 158,
		"name": "Dĩ An",
		"pre": "Huyện",
		"ward": [{
			"id": 999,
			"name": "An Bình",
			"pre": "Phường"
		}, {
			"id": 1000,
			"name": "Bình An",
			"pre": "Phường"
		}, {
			"id": 1001,
			"name": "Bình Thắng",
			"pre": "Phường"
		}, {
			"id": 995,
			"name": "Dĩ An",
			"pre": "Phường"
		}, {
			"id": 997,
			"name": "Đông Hòa",
			"pre": "Phường"
		}, {
			"id": 996,
			"name": "Tân Bình",
			"pre": "Phường"
		}, {
			"id": 998,
			"name": "Tân Đông Hiệp",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 4265,
			"name": "33",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 8887,
			"name": "60/09",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 1949,
			"name": "743",
			"pre": "Đường"
		}, {
			"id": 8220,
			"name": "7A",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 7073,
			"name": "A",
			"pre": "Đường"
		}, {
			"id": 1084,
			"name": "An Bình",
			"pre": "Đường"
		}, {
			"id": 2111,
			"name": "An Nhơn",
			"pre": "Đường"
		}, {
			"id": 10401,
			"name": "An Phú 21",
			"pre": "Đường"
		}, {
			"id": 4135,
			"name": "B",
			"pre": "Đường"
		}, {
			"id": 7587,
			"name": "Ba Cây",
			"pre": "Đường"
		}, {
			"id": 9834,
			"name": "Bà Sa",
			"pre": "Đường"
		}, {
			"id": 2090,
			"name": "Bình Đường",
			"pre": "Đường"
		}, {
			"id": 8242,
			"name": "Bình Đường 1",
			"pre": "Đường"
		}, {
			"id": 7165,
			"name": "Bình Đường 2",
			"pre": "Đường"
		}, {
			"id": 6380,
			"name": "Bình Đường 3",
			"pre": "Đường"
		}, {
			"id": 7161,
			"name": "Bình Đường 4",
			"pre": "Đường"
		}, {
			"id": 6552,
			"name": "Bình Minh",
			"pre": "Đường"
		}, {
			"id": 7198,
			"name": "Bình Minh 1",
			"pre": "Đường"
		}, {
			"id": 8147,
			"name": "Bình Minh 2",
			"pre": "Đường"
		}, {
			"id": 2151,
			"name": "Bình Thung",
			"pre": "Đường"
		}, {
			"id": 7842,
			"name": "Bình Thung 2",
			"pre": "Đường"
		}, {
			"id": 7160,
			"name": "Bùi Thị Cội",
			"pre": "Đường"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 6742,
			"name": "C",
			"pre": "Đường"
		}, {
			"id": 2110,
			"name": "Cây Da",
			"pre": "Đường"
		}, {
			"id": 2142,
			"name": "Cây Da Xế",
			"pre": "Đường"
		}, {
			"id": 945,
			"name": "Cây Điệp",
			"pre": "Đường"
		}, {
			"id": 9716,
			"name": "Cây Găng - Cây Sao",
			"pre": "Đường"
		}, {
			"id": 2132,
			"name": "Cây Keo",
			"pre": "Đường"
		}, {
			"id": 8240,
			"name": "Cây Lơn",
			"pre": "Đường"
		}, {
			"id": 2106,
			"name": "Chiêu Liêu",
			"pre": "Đường"
		}, {
			"id": 2013,
			"name": "Cô Bắc",
			"pre": "Đường"
		}, {
			"id": 2014,
			"name": "Cô Giang",
			"pre": "Đường"
		}, {
			"id": 3222,
			"name": "D11",
			"pre": "Đường"
		}, {
			"id": 6872,
			"name": "D12",
			"pre": "Đường"
		}, {
			"id": 3221,
			"name": "D13",
			"pre": "Đường"
		}, {
			"id": 7425,
			"name": "D14",
			"pre": "Đường"
		}, {
			"id": 2599,
			"name": "D4",
			"pre": "Đường"
		}, {
			"id": 2600,
			"name": "D5",
			"pre": "Đường"
		}, {
			"id": 6799,
			"name": "D7",
			"pre": "Đường"
		}, {
			"id": 5889,
			"name": "D9",
			"pre": "Đường"
		}, {
			"id": 5980,
			"name": "Đại lộ Độc lập",
			"pre": "Đường"
		}, {
			"id": 2099,
			"name": "Đại Thiên Lộc",
			"pre": "Đường"
		}, {
			"id": 9825,
			"name": "Đặng Văn Mây",
			"pre": "Đường"
		}, {
			"id": 2089,
			"name": "Đào Trinh Nhất",
			"pre": "Đường"
		}, {
			"id": 7742,
			"name": "DL12",
			"pre": "Đường"
		}, {
			"id": 8000,
			"name": "DN2",
			"pre": "Đường"
		}, {
			"id": 2156,
			"name": "Đỗ Tấn Phong",
			"pre": "Đường"
		}, {
			"id": 9956,
			"name": "Đoàn Thị Kia",
			"pre": "Đường"
		}, {
			"id": 797,
			"name": "Độc Lập",
			"pre": "Đường"
		}, {
			"id": 3022,
			"name": "Đông A",
			"pre": "Đường"
		}, {
			"id": 2131,
			"name": "Đông An",
			"pre": "Đường"
		}, {
			"id": 7004,
			"name": "Đông B",
			"pre": "Đường"
		}, {
			"id": 6738,
			"name": "Đông Chiêu",
			"pre": "Phố"
		}, {
			"id": 7163,
			"name": "Đông Minh",
			"pre": "Đường"
		}, {
			"id": 401,
			"name": "Đông Tác",
			"pre": "Đường"
		}, {
			"id": 6973,
			"name": "Đông Tân",
			"pre": "Đường"
		}, {
			"id": 2288,
			"name": "Đông Thành",
			"pre": "Đường"
		}, {
			"id": 10577,
			"name": "Đông Yên",
			"pre": "Đường"
		}, {
			"id": 7171,
			"name": "ĐT 743",
			"pre": "Đường"
		}, {
			"id": 10939,
			"name": "ĐT 743A",
			"pre": "Đường"
		}, {
			"id": 9651,
			"name": "ĐT 743B",
			"pre": "Đường"
		}, {
			"id": 8466,
			"name": "ĐT 743C",
			"pre": "Đường"
		}, {
			"id": 5982,
			"name": "Dương Đình Cúc",
			"pre": "Đường"
		}, {
			"id": 9365,
			"name": "Đường L",
			"pre": "Đường"
		}, {
			"id": 4889,
			"name": "E",
			"pre": "Đường"
		}, {
			"id": 10537,
			"name": "F",
			"pre": "Đường"
		}, {
			"id": 8345,
			"name": "GS1",
			"pre": "Đường"
		}, {
			"id": 9060,
			"name": "GS12",
			"pre": "Đường"
		}, {
			"id": 10820,
			"name": "GS13",
			"pre": "Đường"
		}, {
			"id": 8048,
			"name": "GS14",
			"pre": "Đường"
		}, {
			"id": 7840,
			"name": "GS16",
			"pre": "Đường"
		}, {
			"id": 7659,
			"name": "GS2",
			"pre": "Đường"
		}, {
			"id": 8229,
			"name": "GS3",
			"pre": "Đường"
		}, {
			"id": 9100,
			"name": "GS9",
			"pre": "Đường"
		}, {
			"id": 102,
			"name": "Hai Bà Trưng",
			"pre": "Phố"
		}, {
			"id": 2147,
			"name": "Hầm Đá",
			"pre": "Đường"
		}, {
			"id": 6743,
			"name": "K",
			"pre": "Đường"
		}, {
			"id": 2138,
			"name": "Khu 5",
			"pre": "Đường"
		}, {
			"id": 8332,
			"name": "Lái Thiêu",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 348,
			"name": "Lê Quý Đôn",
			"pre": "Đường"
		}, {
			"id": 6987,
			"name": "Lê Thị Út",
			"pre": "Đường"
		}, {
			"id": 2113,
			"name": "Lê Văn Mầm",
			"pre": "Đường"
		}, {
			"id": 7038,
			"name": "Lê Văn Tách",
			"pre": "Đường"
		}, {
			"id": 7156,
			"name": "Lê Văn Tiên",
			"pre": "Đường"
		}, {
			"id": 2120,
			"name": "Liên Huyện",
			"pre": "Đường"
		}, {
			"id": 2150,
			"name": "Lồ Ô",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 10180,
			"name": "M",
			"pre": "Đường"
		}, {
			"id": 6775,
			"name": "Mạch Thị Liễu",
			"pre": "Đường"
		}, {
			"id": 2104,
			"name": "Mi Hòa Hợp",
			"pre": "Đường"
		}, {
			"id": 8311,
			"name": "Mồi",
			"pre": "Đường"
		}, {
			"id": 10946,
			"name": "Mỳ Hòa Hợp",
			"pre": "Đường"
		}, {
			"id": 6988,
			"name": "Mỹ Phước Tân Vạn",
			"pre": "Đường"
		}, {
			"id": 10183,
			"name": "N",
			"pre": "Đường"
		}, {
			"id": 3599,
			"name": "N1",
			"pre": "Đường"
		}, {
			"id": 8241,
			"name": "N14",
			"pre": "Đường"
		}, {
			"id": 8849,
			"name": "N15",
			"pre": "Đường"
		}, {
			"id": 8464,
			"name": "N16",
			"pre": "Đường"
		}, {
			"id": 8151,
			"name": "N17",
			"pre": "Đường"
		}, {
			"id": 6950,
			"name": "N18",
			"pre": "Đường"
		}, {
			"id": 6741,
			"name": "N19",
			"pre": "Đường"
		}, {
			"id": 1984,
			"name": "N2",
			"pre": "Đường"
		}, {
			"id": 8463,
			"name": "N20",
			"pre": "Đường"
		}, {
			"id": 7839,
			"name": "N21",
			"pre": "Đường"
		}, {
			"id": 8443,
			"name": "N22",
			"pre": "Đường"
		}, {
			"id": 8484,
			"name": "N23",
			"pre": "Đường"
		}, {
			"id": 3019,
			"name": "N3",
			"pre": "Đường"
		}, {
			"id": 3018,
			"name": "N4",
			"pre": "Đường"
		}, {
			"id": 6732,
			"name": "N5",
			"pre": "Đường"
		}, {
			"id": 7145,
			"name": "N8",
			"pre": "Đường"
		}, {
			"id": 2149,
			"name": "Ngôi Sao",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 537,
			"name": "Nguyễn Đình Chiểu",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 2656,
			"name": "Nguyễn Hữu Cảnh",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 6618,
			"name": "Nguyễn Thị Chạy",
			"pre": "Đường"
		}, {
			"id": 7178,
			"name": "Nguyễn Thị Khắp",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 10439,
			"name": "Nguyễn Thị Phố",
			"pre": "Đường"
		}, {
			"id": 2118,
			"name": "Nguyễn Thị Tươi",
			"pre": "Đường"
		}, {
			"id": 87,
			"name": "Nguyễn Văn Côn",
			"pre": "Đường"
		}, {
			"id": 316,
			"name": "Nguyễn Xiển",
			"pre": "Đường"
		}, {
			"id": 7757,
			"name": "Nhị Đồng",
			"pre": "Đường"
		}, {
			"id": 7186,
			"name": "Nhị Đồng 1",
			"pre": "Đường"
		}, {
			"id": 7424,
			"name": "Nhị Đồng 2",
			"pre": "Đường"
		}, {
			"id": 7148,
			"name": "Nội Hóa",
			"pre": "Đường"
		}, {
			"id": 8123,
			"name": "Nội Hóa 1",
			"pre": "Đường"
		}, {
			"id": 7692,
			"name": "Nội Hóa II",
			"pre": "Đường"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 126,
			"name": "Phan Bội Châu",
			"pre": "Đường"
		}, {
			"id": 352,
			"name": "Phan Đình Giót",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 2145,
			"name": "Quốc lộ 1K",
			"pre": "Đường"
		}, {
			"id": 3777,
			"name": "Quyết Thắng",
			"pre": "Đường"
		}, {
			"id": 2129,
			"name": "Si-li-cát",
			"pre": "Đường"
		}, {
			"id": 1339,
			"name": "Song Hành",
			"pre": "Đường"
		}, {
			"id": 8494,
			"name": "Suối Lồ",
			"pre": "Đường"
		}, {
			"id": 5101,
			"name": "Tân An",
			"pre": "Đường"
		}, {
			"id": 4256,
			"name": "Tân Hòa Đông",
			"pre": "Đường"
		}, {
			"id": 2927,
			"name": "Tân Lập",
			"pre": "Đường"
		}, {
			"id": 4973,
			"name": "Tân Long",
			"pre": "Đường"
		}, {
			"id": 1029,
			"name": "Tân Phước",
			"pre": "Đường"
		}, {
			"id": 7993,
			"name": "Tân Thắng",
			"pre": "Đường"
		}, {
			"id": 1757,
			"name": "Tân Vạn",
			"pre": "Đường"
		}, {
			"id": 2953,
			"name": "Thắng Lợi",
			"pre": "Đường"
		}, {
			"id": 7586,
			"name": "Thắng Lợi 2",
			"pre": "Đường"
		}, {
			"id": 2115,
			"name": "Thanh Niên",
			"pre": "Đường"
		}, {
			"id": 2097,
			"name": "Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 7175,
			"name": "Thống Nhất 2",
			"pre": "Đường"
		}, {
			"id": 7841,
			"name": "Tỉnh Lộ 638",
			"pre": "Đường"
		}, {
			"id": 2577,
			"name": "Tỉnh lộ 743",
			"pre": "Đường"
		}, {
			"id": 2123,
			"name": "Tỉnh lộ 743B",
			"pre": "Đường"
		}, {
			"id": 2152,
			"name": "Tỉnh lộ 743C",
			"pre": "Đường"
		}, {
			"id": 328,
			"name": "Tô Vĩnh Diện",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 420,
			"name": "Trần Quang Diệu",
			"pre": "Đường"
		}, {
			"id": 138,
			"name": "Trần Quang Khải",
			"pre": "Đường"
		}, {
			"id": 7152,
			"name": "Trần Thị Dương",
			"pre": "Đường"
		}, {
			"id": 10891,
			"name": "Trần Thị Vững",
			"pre": "Đường"
		}, {
			"id": 7167,
			"name": "Trần Thị Xanh",
			"pre": "Đường"
		}, {
			"id": 1788,
			"name": "Trần Văn Ơn",
			"pre": "Đường"
		}, {
			"id": 5981,
			"name": "Trịnh Lỗi",
			"pre": "Đường"
		}, {
			"id": 2091,
			"name": "Trịnh Phong Đáng",
			"pre": "Đường"
		}, {
			"id": 7147,
			"name": "Trung Thắng",
			"pre": "Đường"
		}, {
			"id": 1094,
			"name": "Trường Sơn",
			"pre": "Đường"
		}, {
			"id": 2098,
			"name": "Truông Tre",
			"pre": "Đường"
		}, {
			"id": 10802,
			"name": "Trương Văn Vĩnh",
			"pre": "Đường"
		}, {
			"id": 2140,
			"name": "Tua Gò Mã",
			"pre": "Đường"
		}, {
			"id": 7574,
			"name": "Vành Đai 4",
			"pre": "Đường"
		}, {
			"id": 2724,
			"name": "Võ Thị Sáu",
			"pre": "Đường"
		}, {
			"id": 8308,
			"name": "Vũng Việt",
			"pre": "Đường"
		}, {
			"id": 5820,
			"name": "Xa Lộ Hà Nội",
			"pre": "Đường"
		}],
		"project": [{
			"id": 93,
			"name": "An Bình Sunshine",
			"lat": 10.8721923828125,
			"lng": 106.75782775878906,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1528,
			"name": "Biconsi",
			"lat": 10.93122673034668,
			"lng": 106.77545928955078,
			"cats": [40, 41, 44, 52, 57, 325]
		}, {
			"id": 1092,
			"name": "Bình Nguyên",
			"lat": 10.891921043395996,
			"lng": 106.80149841308594,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 909,
			"name": "Charm Plaza",
			"lat": 10.907730102539063,
			"lng": 106.74210357666016,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2223,
			"name": "Dĩ An Golden Land",
			"lat": 10.803215980529785,
			"lng": 106.71800994873047,
			"cats": [40, 41, 283, 325, 361]
		}, {
			"id": 1997,
			"name": "Ecohomes Tri Thức Trẻ",
			"lat": 10.894906997680664,
			"lng": 106.7618408203125,
			"cats": [40, 48, 52, 325]
		}, {
			"id": 344,
			"name": "Green Square",
			"lat": 10.889403343200684,
			"lng": 106.77593994140625,
			"cats": [40, 41, 48, 50, 55, 57, 163, 324, 325, 326]
		}, {
			"id": 2086,
			"name": "Him Lam Phú Đông",
			"lat": 10.871663093566895,
			"lng": 106.75926971435547,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 2426,
			"name": "Khu dân cư Tân Bình",
			"lat": 10.936984062194824,
			"lng": 106.75185394287109,
			"cats": []
		}, {
			"id": 1501,
			"name": "Khu đô thị Đại Phú",
			"lat": 10.891921043395996,
			"lng": 106.79408264160156,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1192,
			"name": "Metro Tower",
			"lat": 10.875980377197266,
			"lng": 106.80850982666016,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1857,
			"name": "The Mall City",
			"lat": 10.904679298400879,
			"lng": 106.74153900146484,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 159,
		"name": "Phú Giáo",
		"pre": "Huyện",
		"ward": [{
			"id": 1052,
			"name": "An Bình",
			"pre": "Xã"
		}, {
			"id": 1053,
			"name": "An Linh",
			"pre": "Xã"
		}, {
			"id": 1056,
			"name": "An Long",
			"pre": "Xã"
		}, {
			"id": 1060,
			"name": "An Thái",
			"pre": "Xã"
		}, {
			"id": 1058,
			"name": "Phước Hòa",
			"pre": "Xã"
		}, {
			"id": 1055,
			"name": "Phước Sang",
			"pre": "Xã"
		}, {
			"id": 1051,
			"name": "Phước Vĩnh",
			"pre": "Phường"
		}, {
			"id": 12089,
			"name": "Tam Lập",
			"pre": "Xã"
		}, {
			"id": 1054,
			"name": "Tân Hiệp",
			"pre": "Xã"
		}, {
			"id": 1057,
			"name": "Tân Long",
			"pre": "Xã"
		}, {
			"id": 1059,
			"name": "Vĩnh Hòa",
			"pre": "Xã"
		}],
		"street": [{
			"id": 2531,
			"name": "18/9",
			"pre": "Đường"
		}, {
			"id": 2171,
			"name": "19/5",
			"pre": "Đường"
		}, {
			"id": 1000,
			"name": "3/2",
			"pre": "Đường"
		}, {
			"id": 2924,
			"name": "74",
			"pre": "Phố"
		}, {
			"id": 2518,
			"name": "Bến Sạn",
			"pre": "Đường"
		}, {
			"id": 2535,
			"name": "Bố Mua",
			"pre": "Đường"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 1049,
			"name": "Công Chúa Ngọc Hân",
			"pre": "Đường"
		}, {
			"id": 2502,
			"name": "DH501",
			"pre": "Đường"
		}, {
			"id": 2538,
			"name": "DH502",
			"pre": "Đường"
		}, {
			"id": 2510,
			"name": "DH503",
			"pre": "Đường"
		}, {
			"id": 2511,
			"name": "DH504",
			"pre": "Đường"
		}, {
			"id": 2506,
			"name": "DH505",
			"pre": "Đường"
		}, {
			"id": 2508,
			"name": "DH507",
			"pre": "Đường"
		}, {
			"id": 2509,
			"name": "DH508",
			"pre": "Đường"
		}, {
			"id": 2513,
			"name": "DH510",
			"pre": "Đường"
		}, {
			"id": 2514,
			"name": "DH511",
			"pre": "Đường"
		}, {
			"id": 2515,
			"name": "DH512",
			"pre": "Đường"
		}, {
			"id": 2516,
			"name": "DH513",
			"pre": "Đường"
		}, {
			"id": 2517,
			"name": "DH515",
			"pre": "Đường"
		}, {
			"id": 797,
			"name": "Độc Lập",
			"pre": "Đường"
		}, {
			"id": 10845,
			"name": "HL 502",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 341,
			"name": "Nguyễn Văn Trỗi",
			"pre": "Đường"
		}, {
			"id": 2534,
			"name": "Phan Châu Trinh",
			"pre": "Đường"
		}, {
			"id": 2521,
			"name": "Phước Tiến",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 2498,
			"name": "Tỉnh lộ 741",
			"pre": "Đường"
		}, {
			"id": 2368,
			"name": "Tỉnh lộ 750",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2354,
			"name": "Phước Hòa GoldenLand",
			"lat": 11.23838996887207,
			"lng": 106.73932647705078,
			"cats": []
		}]
	}, {
		"id": 160,
		"name": "Tân Uyên",
		"pre": "Huyện",
		"ward": [{
			"id": 1026,
			"name": "Bạch Đằng",
			"pre": "Xã"
		}, {
			"id": 1035,
			"name": "Bình Mỹ",
			"pre": "Xã"
		}, {
			"id": 1037,
			"name": "Đất Cuốc",
			"pre": "Xã"
		}, {
			"id": 1036,
			"name": "Hiếu Liêm",
			"pre": "Xã"
		}, {
			"id": 1034,
			"name": "Hội Nghĩa",
			"pre": "Xã"
		}, {
			"id": 1021,
			"name": "Khánh Bình",
			"pre": "Xã"
		}, {
			"id": 1030,
			"name": "Lạc An",
			"pre": "Xã"
		}, {
			"id": 1018,
			"name": "Phú Chánh",
			"pre": "Xã"
		}, {
			"id": 1015,
			"name": "Tân Bình",
			"pre": "Xã"
		}, {
			"id": 1033,
			"name": "Tân Định",
			"pre": "Xã"
		}, {
			"id": 1038,
			"name": "Tân Hiệp",
			"pre": "Xã"
		}, {
			"id": 1032,
			"name": "Tân Lập",
			"pre": "Xã"
		}, {
			"id": 1028,
			"name": "Tân Mỹ",
			"pre": "Xã"
		}, {
			"id": 1014,
			"name": "Tân Phước Khánh",
			"pre": "Phường"
		}, {
			"id": 1031,
			"name": "Tân Thành",
			"pre": "Xã"
		}, {
			"id": 1019,
			"name": "Tân Vĩnh Hiệp",
			"pre": "Xã"
		}, {
			"id": 1040,
			"name": "Thái Hòa",
			"pre": "Phường"
		}, {
			"id": 1039,
			"name": "Thạnh Hội",
			"pre": "Xã"
		}, {
			"id": 1024,
			"name": "Thạnh Phước",
			"pre": "Xã"
		}, {
			"id": 1029,
			"name": "Thường Tân",
			"pre": "Xã"
		}, {
			"id": 1013,
			"name": "Uyên Hưng",
			"pre": "Phường"
		}, {
			"id": 1017,
			"name": "Vĩnh Tân",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3631,
			"name": "21",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 2580,
			"name": "747",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 10922,
			"name": "Bình Chuẩn 19",
			"pre": "Đường"
		}, {
			"id": 7088,
			"name": "Bình Chuẩn 31",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 10387,
			"name": "D1A",
			"pre": "Đường"
		}, {
			"id": 8924,
			"name": "D1B",
			"pre": "Đường"
		}, {
			"id": 9451,
			"name": "D2B",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 10335,
			"name": "D3A",
			"pre": "Đường"
		}, {
			"id": 10595,
			"name": "D3-N6A",
			"pre": "Đường"
		}, {
			"id": 8159,
			"name": "D6",
			"pre": "Đường"
		}, {
			"id": 6799,
			"name": "D7",
			"pre": "Đường"
		}, {
			"id": 1775,
			"name": "D8",
			"pre": "Đường"
		}, {
			"id": 2944,
			"name": "Dân Chủ",
			"pre": "Đường"
		}, {
			"id": 10200,
			"name": "DB1",
			"pre": "Đường"
		}, {
			"id": 8892,
			"name": "DB4",
			"pre": "Đường"
		}, {
			"id": 10174,
			"name": "DH402",
			"pre": "Đường"
		}, {
			"id": 9881,
			"name": "DH403",
			"pre": "Đường"
		}, {
			"id": 7172,
			"name": "DH404",
			"pre": "Đường"
		}, {
			"id": 10678,
			"name": "DH407",
			"pre": "Đường"
		}, {
			"id": 8422,
			"name": "DH409",
			"pre": "Đường"
		}, {
			"id": 8983,
			"name": "DH410",
			"pre": "Đường"
		}, {
			"id": 10613,
			"name": "DH412",
			"pre": "Đường"
		}, {
			"id": 9819,
			"name": "DH417",
			"pre": "Đường"
		}, {
			"id": 11004,
			"name": "DH418",
			"pre": "Đường"
		}, {
			"id": 9759,
			"name": "DH423",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 7892,
			"name": "ĐT 602",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 7433,
			"name": "ĐT 742",
			"pre": "Đường"
		}, {
			"id": 7171,
			"name": "ĐT 743",
			"pre": "Đường"
		}, {
			"id": 6873,
			"name": "ĐT 745",
			"pre": "Đường"
		}, {
			"id": 8565,
			"name": "ĐT 746",
			"pre": "Đường"
		}, {
			"id": 6580,
			"name": "ĐT 747",
			"pre": "Đường"
		}, {
			"id": 10199,
			"name": "ĐT 747B",
			"pre": "Đường"
		}, {
			"id": 9023,
			"name": "DX",
			"pre": "Đường"
		}, {
			"id": 7610,
			"name": "DX 01",
			"pre": "Đường"
		}, {
			"id": 7137,
			"name": "DX 010",
			"pre": "Đường"
		}, {
			"id": 9227,
			"name": "DX 011",
			"pre": "Đường"
		}, {
			"id": 9134,
			"name": "DX 012",
			"pre": "Đường"
		}, {
			"id": 9184,
			"name": "DX 013",
			"pre": "Đường"
		}, {
			"id": 9880,
			"name": "DX 016",
			"pre": "Đường"
		}, {
			"id": 9730,
			"name": "DX 03",
			"pre": "Đường"
		}, {
			"id": 9659,
			"name": "DX 05",
			"pre": "Đường"
		}, {
			"id": 7040,
			"name": "DX 06",
			"pre": "Đường"
		}, {
			"id": 8520,
			"name": "DX 07",
			"pre": "Đường"
		}, {
			"id": 8880,
			"name": "DX 09",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 965,
			"name": "Hòa Bình",
			"pre": "Đường"
		}, {
			"id": 7411,
			"name": "Hội Nghĩa",
			"pre": "Đường"
		}, {
			"id": 1850,
			"name": "Huỳnh Văn Lũy",
			"pre": "Đường"
		}, {
			"id": 10498,
			"name": "Khánh Bình 13",
			"pre": "Đường"
		}, {
			"id": 10947,
			"name": "Khánh Bình 46",
			"pre": "Đường"
		}, {
			"id": 10977,
			"name": "Khánh Bình 65",
			"pre": "Đường"
		}, {
			"id": 10996,
			"name": "Khánh Bình 67",
			"pre": "Đường"
		}, {
			"id": 10417,
			"name": "Khánh Bình 75",
			"pre": "Đường"
		}, {
			"id": 10702,
			"name": "Khánh Hội",
			"pre": "Đường"
		}, {
			"id": 7584,
			"name": "Khánh Lợi",
			"pre": "Đường"
		}, {
			"id": 6583,
			"name": "Khởi Nghĩa Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 2120,
			"name": "Liên Huyện",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 3599,
			"name": "N1",
			"pre": "Đường"
		}, {
			"id": 10685,
			"name": "N12",
			"pre": "Đường"
		}, {
			"id": 10693,
			"name": "N12B",
			"pre": "Đường"
		}, {
			"id": 9958,
			"name": "N13",
			"pre": "Đường"
		}, {
			"id": 3019,
			"name": "N3",
			"pre": "Đường"
		}, {
			"id": 3018,
			"name": "N4",
			"pre": "Đường"
		}, {
			"id": 6732,
			"name": "N5",
			"pre": "Đường"
		}, {
			"id": 10527,
			"name": "N5A",
			"pre": "Đường"
		}, {
			"id": 3020,
			"name": "N6",
			"pre": "Đường"
		}, {
			"id": 10712,
			"name": "N6A",
			"pre": "Đường"
		}, {
			"id": 9685,
			"name": "N7A",
			"pre": "Đường"
		}, {
			"id": 7145,
			"name": "N8",
			"pre": "Đường"
		}, {
			"id": 7138,
			"name": "N9",
			"pre": "Đường"
		}, {
			"id": 10466,
			"name": "NA6",
			"pre": "Đường"
		}, {
			"id": 10237,
			"name": "NB2",
			"pre": "Đường"
		}, {
			"id": 7794,
			"name": "NB5",
			"pre": "Đường"
		}, {
			"id": 10512,
			"name": "NB7A",
			"pre": "Đường"
		}, {
			"id": 9960,
			"name": "NB9",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 10565,
			"name": "Ông Đông",
			"pre": "Đường"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6584,
			"name": "Tân Chánh Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 10760,
			"name": "Tân Hiệp 34",
			"pre": "Đường"
		}, {
			"id": 7166,
			"name": "Tân Hiệp 35",
			"pre": "Đường"
		}, {
			"id": 9812,
			"name": "Tân Hiệp 39",
			"pre": "Đường"
		}, {
			"id": 10786,
			"name": "Tân Hiệp 46",
			"pre": "Đường"
		}, {
			"id": 10993,
			"name": "Tân Hiệp 49",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 920,
			"name": "Thủ Khoa Huân",
			"pre": "Đường"
		}, {
			"id": 2577,
			"name": "Tỉnh lộ 743",
			"pre": "Đường"
		}, {
			"id": 1952,
			"name": "Tỉnh lộ 745",
			"pre": "Đường"
		}, {
			"id": 2583,
			"name": "Tỉnh lộ 746",
			"pre": "Đường"
		}, {
			"id": 5808,
			"name": "Tỉnh lộ 747",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 7574,
			"name": "Vành Đai 4",
			"pre": "Đường"
		}, {
			"id": 10523,
			"name": "X4",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1207,
			"name": "Civilized City",
			"lat": 11.121635437011719,
			"lng": 106.70577239990234,
			"cats": [40, 48, 51, 55, 59, 163, 325]
		}, {
			"id": 1762,
			"name": "IJC@VSIP",
			"lat": 11.127960205078125,
			"lng": 106.70578765869141,
			"cats": [48, 53, 55, 59]
		}, {
			"id": 2049,
			"name": "KDC Hill Land 19",
			"lat": 11.04053783416748,
			"lng": 106.77300262451172,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 2178,
			"name": "New Central Park",
			"lat": 11.123950958251953,
			"lng": 106.70551300048828,
			"cats": [40, 51, 55, 163]
		}, {
			"id": 2070,
			"name": "The Mall City II",
			"lat": 11.128478050231934,
			"lng": 106.70683288574219,
			"cats": [40, 48, 52, 55, 59, 325]
		}, {
			"id": 1927,
			"name": "VSIP2 mở rộng",
			"lat": 11.141220092773438,
			"lng": 106.70607757568359,
			"cats": [40, 45, 53, 57, 59]
		}]
	}, {
		"id": 163,
		"name": "Thủ Dầu Một",
		"pre": "Thị xã",
		"ward": [{
			"id": 972,
			"name": "Chánh Mỹ",
			"pre": "Xã"
		}, {
			"id": 963,
			"name": "Chánh Nghĩa",
			"pre": "Phường"
		}, {
			"id": 968,
			"name": "Định Hòa",
			"pre": "Phường"
		}, {
			"id": 969,
			"name": "Hiệp An",
			"pre": "Phường"
		}, {
			"id": 962,
			"name": "Hiệp Thành",
			"pre": "Phường"
		}, {
			"id": 970,
			"name": "Hòa Phú",
			"pre": "Phường"
		}, {
			"id": 961,
			"name": "Phú Cường",
			"pre": "Phường"
		}, {
			"id": 964,
			"name": "Phú Hòa",
			"pre": "Phường"
		}, {
			"id": 966,
			"name": "Phú Lợi",
			"pre": "Phường"
		}, {
			"id": 967,
			"name": "Phú Mỹ",
			"pre": "Phường"
		}, {
			"id": 971,
			"name": "Phú Tân",
			"pre": "Phường"
		}, {
			"id": 965,
			"name": "Phú Thọ",
			"pre": "Phường"
		}, {
			"id": 974,
			"name": "Tân An",
			"pre": "Xã"
		}, {
			"id": 973,
			"name": "Tương Bình Hiệp",
			"pre": "Xã"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 1809,
			"name": "1/12",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 709,
			"name": "23",
			"pre": "Đường"
		}, {
			"id": 2869,
			"name": "24",
			"pre": "Phố"
		}, {
			"id": 2165,
			"name": "28",
			"pre": "Đường"
		}, {
			"id": 689,
			"name": "3",
			"pre": "Đường"
		}, {
			"id": 1718,
			"name": "30/4",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 2889,
			"name": "45",
			"pre": "Phố"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6272,
			"name": "51",
			"pre": "Đường"
		}, {
			"id": 6015,
			"name": "57",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 2915,
			"name": "65",
			"pre": "Phố"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 2918,
			"name": "68",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 2924,
			"name": "74",
			"pre": "Phố"
		}, {
			"id": 8797,
			"name": "76",
			"pre": "Đường"
		}, {
			"id": 2378,
			"name": "7B",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2122,
			"name": "An Mỹ",
			"pre": "Đường"
		}, {
			"id": 778,
			"name": "Âu Cơ",
			"pre": "Đường"
		}, {
			"id": 527,
			"name": "Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 1769,
			"name": "Bàu Bàng",
			"pre": "Đường"
		}, {
			"id": 1860,
			"name": "Bùi Ngọc Thu",
			"pre": "Đường"
		}, {
			"id": 1765,
			"name": "Bùi Quốc Khánh",
			"pre": "Đường"
		}, {
			"id": 1811,
			"name": "Bùi Văn Bình",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 10258,
			"name": "Cây Viết",
			"pre": "Đường"
		}, {
			"id": 1847,
			"name": "Chánh Lộc",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 3220,
			"name": "D10",
			"pre": "Đường"
		}, {
			"id": 3222,
			"name": "D11",
			"pre": "Đường"
		}, {
			"id": 6872,
			"name": "D12",
			"pre": "Đường"
		}, {
			"id": 8996,
			"name": "D17",
			"pre": "Đường"
		}, {
			"id": 8924,
			"name": "D1B",
			"pre": "Đường"
		}, {
			"id": 4601,
			"name": "D2",
			"pre": "Đường"
		}, {
			"id": 10487,
			"name": "D28",
			"pre": "Đường"
		}, {
			"id": 9451,
			"name": "D2B",
			"pre": "Đường"
		}, {
			"id": 4602,
			"name": "D3",
			"pre": "Đường"
		}, {
			"id": 10335,
			"name": "D3A",
			"pre": "Đường"
		}, {
			"id": 2599,
			"name": "D4",
			"pre": "Đường"
		}, {
			"id": 2600,
			"name": "D5",
			"pre": "Đường"
		}, {
			"id": 8159,
			"name": "D6",
			"pre": "Đường"
		}, {
			"id": 6799,
			"name": "D7",
			"pre": "Đường"
		}, {
			"id": 1775,
			"name": "D8",
			"pre": "Đường"
		}, {
			"id": 5889,
			"name": "D9",
			"pre": "Đường"
		}, {
			"id": 7150,
			"name": "DA1",
			"pre": "Đường"
		}, {
			"id": 9195,
			"name": "DA2",
			"pre": "Đường"
		}, {
			"id": 1746,
			"name": "Đại Lộ Bình Dương",
			"pre": "Đường"
		}, {
			"id": 8222,
			"name": "Đại Lộ Mỹ Phước",
			"pre": "Đường"
		}, {
			"id": 2944,
			"name": "Dân Chủ",
			"pre": "Đường"
		}, {
			"id": 9194,
			"name": "DB10",
			"pre": "Đường"
		}, {
			"id": 8892,
			"name": "DB4",
			"pre": "Đường"
		}, {
			"id": 10723,
			"name": "DB6",
			"pre": "Đường"
		}, {
			"id": 9193,
			"name": "DB7B",
			"pre": "Đường"
		}, {
			"id": 10724,
			"name": "DB9",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 7435,
			"name": "DJ9",
			"pre": "Đường"
		}, {
			"id": 1798,
			"name": "Đoàn Đức Liên",
			"pre": "Đường"
		}, {
			"id": 7363,
			"name": "Đoàn Thị Liên",
			"pre": "Đường"
		}, {
			"id": 10140,
			"name": "Đồng Cây Viết",
			"pre": "Đường"
		}, {
			"id": 940,
			"name": "Đồng Khởi",
			"pre": "Đường"
		}, {
			"id": 10674,
			"name": "DS13",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 7433,
			"name": "ĐT 742",
			"pre": "Đường"
		}, {
			"id": 7171,
			"name": "ĐT 743",
			"pre": "Đường"
		}, {
			"id": 8577,
			"name": "ĐT 744",
			"pre": "Đường"
		}, {
			"id": 6873,
			"name": "ĐT 745",
			"pre": "Đường"
		}, {
			"id": 9023,
			"name": "DX",
			"pre": "Đường"
		}, {
			"id": 7610,
			"name": "DX 01",
			"pre": "Đường"
		}, {
			"id": 7137,
			"name": "DX 010",
			"pre": "Đường"
		}, {
			"id": 8715,
			"name": "DX 013",
			"pre": "Đường"
		}, {
			"id": 9172,
			"name": "DX 014",
			"pre": "Đường"
		}, {
			"id": 7781,
			"name": "DX 02",
			"pre": "Đường"
		}, {
			"id": 9713,
			"name": "DX 020",
			"pre": "Đường"
		}, {
			"id": 10739,
			"name": "DX 021",
			"pre": "Đường"
		}, {
			"id": 7636,
			"name": "DX 024",
			"pre": "Đường"
		}, {
			"id": 9902,
			"name": "DX 025",
			"pre": "Đường"
		}, {
			"id": 9742,
			"name": "DX 026",
			"pre": "Đường"
		}, {
			"id": 7324,
			"name": "DX 027",
			"pre": "Đường"
		}, {
			"id": 10467,
			"name": "DX 029",
			"pre": "Đường"
		}, {
			"id": 9730,
			"name": "DX 03",
			"pre": "Đường"
		}, {
			"id": 10412,
			"name": "DX 031",
			"pre": "Đường"
		}, {
			"id": 10915,
			"name": "DX 034",
			"pre": "Đường"
		}, {
			"id": 8700,
			"name": "DX 037",
			"pre": "Đường"
		}, {
			"id": 9708,
			"name": "DX 039",
			"pre": "Đường"
		}, {
			"id": 7170,
			"name": "DX 040",
			"pre": "Đường"
		}, {
			"id": 8659,
			"name": "DX 042",
			"pre": "Đường"
		}, {
			"id": 9118,
			"name": "DX 043",
			"pre": "Đường"
		}, {
			"id": 7335,
			"name": "DX 044",
			"pre": "Đường"
		}, {
			"id": 9130,
			"name": "DX 047",
			"pre": "Đường"
		}, {
			"id": 8418,
			"name": "DX 048",
			"pre": "Đường"
		}, {
			"id": 7891,
			"name": "DX 050",
			"pre": "Đường"
		}, {
			"id": 7319,
			"name": "DX 051",
			"pre": "Đường"
		}, {
			"id": 7040,
			"name": "DX 06",
			"pre": "Đường"
		}, {
			"id": 10964,
			"name": "DX 060",
			"pre": "Đường"
		}, {
			"id": 9671,
			"name": "DX 063",
			"pre": "Đường"
		}, {
			"id": 9030,
			"name": "DX 064",
			"pre": "Đường"
		}, {
			"id": 8427,
			"name": "DX 065",
			"pre": "Đường"
		}, {
			"id": 8212,
			"name": "DX 066",
			"pre": "Đường"
		}, {
			"id": 9672,
			"name": "DX 067",
			"pre": "Đường"
		}, {
			"id": 7195,
			"name": "DX 068",
			"pre": "Đường"
		}, {
			"id": 10550,
			"name": "DX 069",
			"pre": "Đường"
		}, {
			"id": 7994,
			"name": "DX 070",
			"pre": "Đường"
		}, {
			"id": 7353,
			"name": "DX 071",
			"pre": "Đường"
		}, {
			"id": 8868,
			"name": "DX 072",
			"pre": "Đường"
		}, {
			"id": 10612,
			"name": "DX 073",
			"pre": "Đường"
		}, {
			"id": 8519,
			"name": "DX 075",
			"pre": "Đường"
		}, {
			"id": 8561,
			"name": "DX 076",
			"pre": "Đường"
		}, {
			"id": 10459,
			"name": "DX 077",
			"pre": "Đường"
		}, {
			"id": 7637,
			"name": "DX 078",
			"pre": "Đường"
		}, {
			"id": 10799,
			"name": "DX 080",
			"pre": "Đường"
		}, {
			"id": 10617,
			"name": "DX 082",
			"pre": "Đường"
		}, {
			"id": 8213,
			"name": "DX 083",
			"pre": "Đường"
		}, {
			"id": 8218,
			"name": "DX 086",
			"pre": "Đường"
		}, {
			"id": 8016,
			"name": "DX 087",
			"pre": "Đường"
		}, {
			"id": 8002,
			"name": "DX 088",
			"pre": "Đường"
		}, {
			"id": 10230,
			"name": "DX 089",
			"pre": "Đường"
		}, {
			"id": 10564,
			"name": "DX 094",
			"pre": "Đường"
		}, {
			"id": 1867,
			"name": "DX 095",
			"pre": "Đường"
		}, {
			"id": 10954,
			"name": "DX 098",
			"pre": "Đường"
		}, {
			"id": 10861,
			"name": "DX 101",
			"pre": "Đường"
		}, {
			"id": 10928,
			"name": "DX 102",
			"pre": "Đường"
		}, {
			"id": 8478,
			"name": "DX 103",
			"pre": "Đường"
		}, {
			"id": 9758,
			"name": "DX 105",
			"pre": "Đường"
		}, {
			"id": 10885,
			"name": "DX 106",
			"pre": "Đường"
		}, {
			"id": 10843,
			"name": "DX 107",
			"pre": "Đường"
		}, {
			"id": 10926,
			"name": "DX 112",
			"pre": "Đường"
		}, {
			"id": 8148,
			"name": "DX 118",
			"pre": "Đường"
		}, {
			"id": 8426,
			"name": "DX 120",
			"pre": "Đường"
		}, {
			"id": 10143,
			"name": "DX 121",
			"pre": "Đường"
		}, {
			"id": 10193,
			"name": "DX 126",
			"pre": "Đường"
		}, {
			"id": 10770,
			"name": "DX 127",
			"pre": "Đường"
		}, {
			"id": 10591,
			"name": "DX 133",
			"pre": "Đường"
		}, {
			"id": 10995,
			"name": "DX 134",
			"pre": "Đường"
		}, {
			"id": 8163,
			"name": "DX 140",
			"pre": "Đường"
		}, {
			"id": 7871,
			"name": "DX 143",
			"pre": "Đường"
		}, {
			"id": 9904,
			"name": "DX 144",
			"pre": "Đường"
		}, {
			"id": 9046,
			"name": "DX 150",
			"pre": "Đường"
		}, {
			"id": 102,
			"name": "Hai Bà Trưng",
			"pre": "Phố"
		}, {
			"id": 1877,
			"name": "Hiệp An",
			"pre": "Đường"
		}, {
			"id": 1868,
			"name": "Hồ Văn Cống",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 337,
			"name": "Hoàng Văn Thụ",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 7379,
			"name": "Huỳnh Thị Chấu",
			"pre": "Đường"
		}, {
			"id": 1870,
			"name": "Huỳnh Thị Hiếu",
			"pre": "Đường"
		}, {
			"id": 8625,
			"name": "Huỳnh Văn Cù",
			"pre": "Đường"
		}, {
			"id": 1850,
			"name": "Huỳnh Văn Lũy",
			"pre": "Đường"
		}, {
			"id": 1808,
			"name": "Huỳnh Văn Nghệ",
			"pre": "Đường"
		}, {
			"id": 10741,
			"name": "K48",
			"pre": "Đường"
		}, {
			"id": 8391,
			"name": "L9",
			"pre": "Đường"
		}, {
			"id": 621,
			"name": "Lạc Long Quân",
			"pre": "Đường"
		}, {
			"id": 1871,
			"name": "Lê Chí Dân",
			"pre": "Đường"
		}, {
			"id": 2618,
			"name": "Lê Hoàn",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 1806,
			"name": "Lê Thị Trung",
			"pre": "Đường"
		}, {
			"id": 7038,
			"name": "Lê Văn Tách",
			"pre": "Đường"
		}, {
			"id": 6114,
			"name": "Liên Phường",
			"pre": "Đường"
		}, {
			"id": 1771,
			"name": "Lò Chén",
			"pre": "Đường"
		}, {
			"id": 1420,
			"name": "Lò Lu",
			"pre": "Đường"
		}, {
			"id": 237,
			"name": "Lý Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 6399,
			"name": "Lý Thường Liệt",
			"pre": "Đường"
		}, {
			"id": 362,
			"name": "Lý Tự Trọng",
			"pre": "Đường"
		}, {
			"id": 6400,
			"name": "Mai Bá Hương",
			"pre": "Đường"
		}, {
			"id": 6447,
			"name": "Mỹ Phước 1",
			"pre": "Đường"
		}, {
			"id": 6988,
			"name": "Mỹ Phước Tân Vạn",
			"pre": "Đường"
		}, {
			"id": 3599,
			"name": "N1",
			"pre": "Đường"
		}, {
			"id": 7328,
			"name": "N11",
			"pre": "Đường"
		}, {
			"id": 8241,
			"name": "N14",
			"pre": "Đường"
		}, {
			"id": 8849,
			"name": "N15",
			"pre": "Đường"
		}, {
			"id": 6209,
			"name": "N16 Bắc Cường",
			"pre": "Đường"
		}, {
			"id": 1984,
			"name": "N2",
			"pre": "Đường"
		}, {
			"id": 8463,
			"name": "N20",
			"pre": "Đường"
		}, {
			"id": 9750,
			"name": "N25",
			"pre": "Đường"
		}, {
			"id": 3019,
			"name": "N3",
			"pre": "Đường"
		}, {
			"id": 3018,
			"name": "N4",
			"pre": "Đường"
		}, {
			"id": 6732,
			"name": "N5",
			"pre": "Đường"
		}, {
			"id": 3020,
			"name": "N6",
			"pre": "Đường"
		}, {
			"id": 7258,
			"name": "N7",
			"pre": "Đường"
		}, {
			"id": 7145,
			"name": "N8",
			"pre": "Đường"
		}, {
			"id": 7138,
			"name": "N9",
			"pre": "Đường"
		}, {
			"id": 7151,
			"name": "NA2",
			"pre": "Đường"
		}, {
			"id": 898,
			"name": "Nam Kỳ Khởi Nghĩa",
			"pre": "Đường"
		}, {
			"id": 9067,
			"name": "NB3",
			"pre": "Đường"
		}, {
			"id": 8886,
			"name": "NB4",
			"pre": "Đường"
		}, {
			"id": 1836,
			"name": "Ngô Chí Quốc",
			"pre": "Đường"
		}, {
			"id": 285,
			"name": "Ngô Gia Tự",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 1797,
			"name": "Ngô Văn Trị",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 537,
			"name": "Nguyễn Đình Chiểu",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 286,
			"name": "Nguyễn Đức Thuận",
			"pre": "Đường"
		}, {
			"id": 979,
			"name": "Nguyễn Huệ",
			"pre": "Đường"
		}, {
			"id": 902,
			"name": "Nguyễn Thái Bình",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 6448,
			"name": "Nguyễn Thành Vĩnh",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 8211,
			"name": "Nguyễn Thị Trung",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 6826,
			"name": "Nguyễn Văn Lộng",
			"pre": "Đường"
		}, {
			"id": 7913,
			"name": "Nguyễn Văn Phúc",
			"pre": "Đường"
		}, {
			"id": 1406,
			"name": "Nguyễn Văn Thành",
			"pre": "Đường"
		}, {
			"id": 1841,
			"name": "Nguyễn Văn Tiết",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 212,
			"name": "Phạm Ngũ Lão",
			"pre": "Đường"
		}, {
			"id": 126,
			"name": "Phan Bội Châu",
			"pre": "Đường"
		}, {
			"id": 741,
			"name": "Phan Đăng Lưu",
			"pre": "Phố"
		}, {
			"id": 352,
			"name": "Phan Đình Giót",
			"pre": "Đường"
		}, {
			"id": 7604,
			"name": "Phú Chánh",
			"pre": "Đường"
		}, {
			"id": 10833,
			"name": "Phú Chánh D",
			"pre": "Đường"
		}, {
			"id": 1796,
			"name": "Phú Hòa",
			"pre": "Đường"
		}, {
			"id": 1752,
			"name": "Phú Lợi",
			"pre": "Đường"
		}, {
			"id": 4612,
			"name": "Phú Mỹ",
			"pre": "Đường"
		}, {
			"id": 9049,
			"name": "Phú Văn",
			"pre": "Đường"
		}, {
			"id": 1876,
			"name": "Quanh Thành Đại Nam",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 7674,
			"name": "Quốc lộ 14",
			"pre": "Đường"
		}, {
			"id": 1761,
			"name": "Quốc lộ 80",
			"pre": "Đường"
		}, {
			"id": 1632,
			"name": "Quy Lưu",
			"pre": "Phố"
		}, {
			"id": 8477,
			"name": "Sóng Thần",
			"pre": "Đường"
		}, {
			"id": 1757,
			"name": "Tân Vạn",
			"pre": "Đường"
		}, {
			"id": 1852,
			"name": "Tạo Lực 1",
			"pre": "Đường"
		}, {
			"id": 6792,
			"name": "Tạo Lực 2",
			"pre": "Đường"
		}, {
			"id": 8369,
			"name": "Tạo Lực 2B",
			"pre": "Đường"
		}, {
			"id": 8014,
			"name": "Tạo Lực 3",
			"pre": "Đường"
		}, {
			"id": 7277,
			"name": "Tạo Lực 5",
			"pre": "Đường"
		}, {
			"id": 6848,
			"name": "Tạo Lực 6",
			"pre": "Đường"
		}, {
			"id": 6446,
			"name": "Tạo Lực 7",
			"pre": "Đường"
		}, {
			"id": 1745,
			"name": "Thích Quảng Đức",
			"pre": "Đường"
		}, {
			"id": 7635,
			"name": "Tỉnh lộ 8",
			"pre": "Đường"
		}, {
			"id": 428,
			"name": "Tôn Đức Thắng",
			"pre": "Phố"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 1855,
			"name": "Trần Ngọc Liên",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 219,
			"name": "Trần Quốc Toản",
			"pre": "Đường"
		}, {
			"id": 1788,
			"name": "Trần Văn Ơn",
			"pre": "Đường"
		}, {
			"id": 390,
			"name": "Trịnh Hoài Đức",
			"pre": "Đường"
		}, {
			"id": 8955,
			"name": "Văn Công Khai",
			"pre": "Đường"
		}, {
			"id": 7574,
			"name": "Vành Đai 4",
			"pre": "Đường"
		}, {
			"id": 7930,
			"name": "Vĩnh Tân",
			"pre": "Đường"
		}, {
			"id": 9072,
			"name": "Võ Minh Đức",
			"pre": "Đường"
		}, {
			"id": 1827,
			"name": "Võ Thành Long",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 8356,
			"name": "X1B",
			"pre": "Đường"
		}, {
			"id": 1762,
			"name": "Xóm Guốc",
			"pre": "Đường"
		}, {
			"id": 1002,
			"name": "Yersin",
			"pre": "Đường"
		}],
		"project": [{
			"id": 835,
			"name": "Becamex City Center",
			"lat": 10.975109100341797,
			"lng": 106.67076873779297,
			"cats": [48, 50, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 1960,
			"name": "Becamex Định Hòa",
			"lat": 11.044321060180664,
			"lng": 106.65971374511719,
			"cats": [40, 55, 324, 326]
		}, {
			"id": 1961,
			"name": "Becamex Hòa Lợi",
			"lat": 11.086225509643555,
			"lng": 106.67230224609375,
			"cats": [40, 59, 324, 326]
		}, {
			"id": 740,
			"name": "Detaco Ecovilas",
			"lat": 11.006125450134277,
			"lng": 106.62358093261719,
			"cats": [40, 44, 48, 55, 325]
		}, {
			"id": 850,
			"name": "Đông Đô Đại Phố",
			"lat": 11.072381973266602,
			"lng": 106.68639373779297,
			"cats": [41, 48, 50, 52, 55, 57, 59, 325]
		}, {
			"id": 2293,
			"name": "Gold Star Tower",
			"lat": 10.978306770324707,
			"lng": 106.65565490722656,
			"cats": []
		}, {
			"id": 1240,
			"name": "Gold Town",
			"lat": 11.055389404296875,
			"lng": 106.68763732910156,
			"cats": [40, 48, 51, 55, 57, 163]
		}, {
			"id": 934,
			"name": "Green Pearl",
			"lat": 11.069567680358887,
			"lng": 106.67484283447266,
			"cats": [40, 41, 48, 52, 55, 57, 325]
		}, {
			"id": 1929,
			"name": "Hiệp Thành III",
			"lat": 11.002366065979004,
			"lng": 106.66919708251953,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 374,
			"name": "IJC Aroma Bình Dương",
			"lat": 11.05702018737793,
			"lng": 106.67530822753906,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1900,
			"name": "KDC Hiệp Phát",
			"lat": 11.005325317382813,
			"lng": 106.6600341796875,
			"cats": [40, 41, 52, 325]
		}, {
			"id": 550,
			"name": "New Horizon",
			"lat": 10.976676940917969,
			"lng": 106.66939544677734,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 375,
			"name": "Phú Cường (chung cư Biconsi)",
			"lat": 10.981477737426758,
			"lng": 106.65587615966797,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1931,
			"name": "Phú Hòa I",
			"lat": 10.974230766296387,
			"lng": 106.67872619628906,
			"cats": [40, 41, 52, 55, 324, 325, 326]
		}, {
			"id": 714,
			"name": "Phú Thịnh",
			"lat": 10.951176643371582,
			"lng": 106.65596008300781,
			"cats": [40, 48, 55, 59, 325]
		}, {
			"id": 1140,
			"name": "Prince Town",
			"lat": 11.0580472946167,
			"lng": 106.666015625,
			"cats": [48, 51, 55, 57, 163, 325]
		}, {
			"id": 1191,
			"name": "Sora Gardens",
			"lat": 11.046622276306152,
			"lng": 106.67892456054687,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 955,
			"name": "Sunflower",
			"lat": 11.053737640380859,
			"lng": 106.67378997802734,
			"cats": [40, 325]
		}, {
			"id": 266,
			"name": "Sunrise Apartment",
			"lat": 10.975951194763184,
			"lng": 106.67144775390625,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 1446,
			"name": "TDC Plaza",
			"lat": 11.059379577636719,
			"lng": 106.67649841308594,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 581,
			"name": "Thành Phố Mới Bình Dương",
			"lat": 11.056387901306152,
			"lng": 106.68144989013672,
			"cats": [40, 48, 50, 55, 59, 324, 325, 326]
		}, {
			"id": 1318,
			"name": "The Morning City",
			"lat": 11.054176330566406,
			"lng": 106.70552825927734,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 808,
			"name": "Tương Bình Hiệp",
			"lat": 11.012592315673828,
			"lng": 106.62696075439453,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 582,
			"name": "Uni-town",
			"lat": 11.069066047668457,
			"lng": 106.68383026123047,
			"cats": [41, 48, 50, 52, 55, 57, 325]
		}, {
			"id": 1338,
			"name": "Vsip II",
			"lat": 11.086270332336426,
			"lng": 106.68017578125,
			"cats": [40, 45, 48, 53, 55, 57]
		}, {
			"id": 1027,
			"name": "Wharfland",
			"lat": 10.998602867126465,
			"lng": 106.65188598632812,
			"cats": [40, 52, 325]
		}]
	}, {
		"id": 161,
		"name": "Thuận An",
		"pre": "Huyện",
		"ward": [{
			"id": 979,
			"name": "An Phú",
			"pre": "Phường"
		}, {
			"id": 984,
			"name": "An Sơn",
			"pre": "Xã"
		}, {
			"id": 975,
			"name": "An Thạnh",
			"pre": "Phường"
		}, {
			"id": 978,
			"name": "Bình Chuẩn",
			"pre": "Phường"
		}, {
			"id": 982,
			"name": "Bình Hòa",
			"pre": "Phường"
		}, {
			"id": 986,
			"name": "Bình Nhâm",
			"pre": "Xã"
		}, {
			"id": 985,
			"name": "Hưng Định",
			"pre": "Xã"
		}, {
			"id": 976,
			"name": "Lái Thiêu",
			"pre": "Phường"
		}, {
			"id": 981,
			"name": "Thuận Giao",
			"pre": "Phường"
		}, {
			"id": 983,
			"name": "Vĩnh Phú",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3789,
			"name": "1",
			"pre": "Đường"
		}, {
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 1998,
			"name": "11",
			"pre": "Đường"
		}, {
			"id": 1999,
			"name": "12",
			"pre": "Đường"
		}, {
			"id": 4781,
			"name": "13",
			"pre": "Đường"
		}, {
			"id": 2001,
			"name": "14",
			"pre": "Đường"
		}, {
			"id": 2002,
			"name": "15",
			"pre": "Đường"
		}, {
			"id": 4187,
			"name": "16",
			"pre": "Đường"
		}, {
			"id": 2850,
			"name": "17",
			"pre": "Đường"
		}, {
			"id": 2095,
			"name": "18",
			"pre": "Đường"
		}, {
			"id": 5707,
			"name": "19",
			"pre": "Đường"
		}, {
			"id": 7702,
			"name": "1B",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 1974,
			"name": "22/12",
			"pre": "Đường"
		}, {
			"id": 8120,
			"name": "34A",
			"pre": "Đường"
		}, {
			"id": 6346,
			"name": "35",
			"pre": "Đường"
		}, {
			"id": 2879,
			"name": "37",
			"pre": "Phố"
		}, {
			"id": 2167,
			"name": "38",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 4213,
			"name": "43",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 2840,
			"name": "6",
			"pre": "Đường"
		}, {
			"id": 2252,
			"name": "61",
			"pre": "Đường"
		}, {
			"id": 6793,
			"name": "61A",
			"pre": "Đường"
		}, {
			"id": 8036,
			"name": "62",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 1994,
			"name": "7",
			"pre": "Đường"
		}, {
			"id": 1949,
			"name": "743",
			"pre": "Đường"
		}, {
			"id": 1950,
			"name": "743C",
			"pre": "Đường"
		}, {
			"id": 2841,
			"name": "8",
			"pre": "Đường"
		}, {
			"id": 2842,
			"name": "9",
			"pre": "Đường"
		}, {
			"id": 4160,
			"name": "An Phú",
			"pre": "Đường"
		}, {
			"id": 10715,
			"name": "An Phú 1",
			"pre": "Đường"
		}, {
			"id": 10735,
			"name": "An Phú 11",
			"pre": "Đường"
		}, {
			"id": 9115,
			"name": "An Phú 13",
			"pre": "Đường"
		}, {
			"id": 9970,
			"name": "An Phú 14",
			"pre": "Đường"
		}, {
			"id": 10869,
			"name": "An Phú 15",
			"pre": "Đường"
		}, {
			"id": 7847,
			"name": "An Phú 16",
			"pre": "Đường"
		}, {
			"id": 8827,
			"name": "An Phú 17",
			"pre": "Đường"
		}, {
			"id": 10542,
			"name": "An phú 18",
			"pre": "Đường"
		}, {
			"id": 10686,
			"name": "An Phú 2",
			"pre": "Đường"
		}, {
			"id": 9078,
			"name": "An Phú 20",
			"pre": "Đường"
		}, {
			"id": 9974,
			"name": "An Phú 24",
			"pre": "Đường"
		}, {
			"id": 10943,
			"name": "An Phú 25",
			"pre": "Đường"
		}, {
			"id": 8909,
			"name": "An Phú 29",
			"pre": "Đường"
		}, {
			"id": 10903,
			"name": "An Phú 31",
			"pre": "Đường"
		}, {
			"id": 9236,
			"name": "An Phú 35",
			"pre": "Đường"
		}, {
			"id": 8360,
			"name": "An Phú 6",
			"pre": "Đường"
		}, {
			"id": 10535,
			"name": "An Phú 8",
			"pre": "Đường"
		}, {
			"id": 10507,
			"name": "An Phú 9",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 10765,
			"name": "An Sơn 1",
			"pre": "Đường"
		}, {
			"id": 10437,
			"name": "An Sơn 2",
			"pre": "Đường"
		}, {
			"id": 7887,
			"name": "An Sơn 25",
			"pre": "Đường"
		}, {
			"id": 9906,
			"name": "An Sơn 7",
			"pre": "Đường"
		}, {
			"id": 10826,
			"name": "An Thạnh 12",
			"pre": "Đường"
		}, {
			"id": 10914,
			"name": "An Thạnh 16",
			"pre": "Đường"
		}, {
			"id": 8619,
			"name": "An Thạnh 17",
			"pre": "Đường"
		}, {
			"id": 9905,
			"name": "An Thạnh 2",
			"pre": "Đường"
		}, {
			"id": 8142,
			"name": "An Thạnh 22",
			"pre": "Đường"
		}, {
			"id": 10518,
			"name": "An Thạnh 24",
			"pre": "Đường"
		}, {
			"id": 8570,
			"name": "An Thạnh 75",
			"pre": "Đường"
		}, {
			"id": 1959,
			"name": "Ấp Bình Hòa",
			"pre": "Đường"
		}, {
			"id": 1980,
			"name": "Ấp Bình Thuận 1",
			"pre": "Đường"
		}, {
			"id": 1978,
			"name": "Ấp Hòa Lân",
			"pre": "Đường"
		}, {
			"id": 1979,
			"name": "Ấp Hòa Lân 1",
			"pre": "Đường"
		}, {
			"id": 9036,
			"name": "B184",
			"pre": "Đường"
		}, {
			"id": 9012,
			"name": "BH22",
			"pre": "Đường"
		}, {
			"id": 7583,
			"name": "Bình Chuẩn",
			"pre": "Đường"
		}, {
			"id": 9491,
			"name": "Bình Chuẩn 10",
			"pre": "Đường"
		}, {
			"id": 9975,
			"name": "Bình Chuẩn 15",
			"pre": "Đường"
		}, {
			"id": 7664,
			"name": "Bình Chuẩn 17",
			"pre": "Đường"
		}, {
			"id": 9051,
			"name": "Bình Chuẩn 20",
			"pre": "Đường"
		}, {
			"id": 9225,
			"name": "Bình Chuẩn 21",
			"pre": "Đường"
		}, {
			"id": 10288,
			"name": "Bình Chuẩn 27",
			"pre": "Đường"
		}, {
			"id": 9006,
			"name": "Bình Chuẩn 28",
			"pre": "Đường"
		}, {
			"id": 8361,
			"name": "Bình Chuẩn 3",
			"pre": "Đường"
		}, {
			"id": 7088,
			"name": "Bình Chuẩn 31",
			"pre": "Đường"
		}, {
			"id": 10383,
			"name": "Bình Chuẩn 34",
			"pre": "Đường"
		}, {
			"id": 10210,
			"name": "Bình Chuẩn 35",
			"pre": "Đường"
		}, {
			"id": 7596,
			"name": "Bình Chuẩn 37",
			"pre": "Đường"
		}, {
			"id": 10419,
			"name": "Bình Chuẩn 42",
			"pre": "Đường"
		}, {
			"id": 9047,
			"name": "Bình Chuẩn 61",
			"pre": "Đường"
		}, {
			"id": 7889,
			"name": "Bình Chuẩn 62",
			"pre": "Đường"
		}, {
			"id": 7669,
			"name": "Bình Chuẩn 63",
			"pre": "Đường"
		}, {
			"id": 10892,
			"name": "Bình Chuẩn 64",
			"pre": "Đường"
		}, {
			"id": 10377,
			"name": "Bình Chuẩn 69",
			"pre": "Đường"
		}, {
			"id": 8375,
			"name": "Bình Chuẩn 72",
			"pre": "Đường"
		}, {
			"id": 10592,
			"name": "Bình Chuẩn 9",
			"pre": "Đường"
		}, {
			"id": 6913,
			"name": "Bình Đáng",
			"pre": "Đường"
		}, {
			"id": 6139,
			"name": "Bình Đức",
			"pre": "Đường"
		}, {
			"id": 8144,
			"name": "Bình Đức 1",
			"pre": "Đường"
		}, {
			"id": 10624,
			"name": "Bình Đức 2",
			"pre": "Đường"
		}, {
			"id": 5865,
			"name": "Bình Hòa",
			"pre": "Đường"
		}, {
			"id": 10214,
			"name": "Bình Hòa 18",
			"pre": "Đường"
		}, {
			"id": 10970,
			"name": "Bình Hòa 20",
			"pre": "Đường"
		}, {
			"id": 10244,
			"name": "Bình Hòa 22",
			"pre": "Đường"
		}, {
			"id": 9816,
			"name": "Bình Hòa 23",
			"pre": "Đường"
		}, {
			"id": 8959,
			"name": "Bình Hòa 24",
			"pre": "Đường"
		}, {
			"id": 7397,
			"name": "Bình Hòa 3",
			"pre": "Đường"
		}, {
			"id": 9292,
			"name": "Bình Hoà 5",
			"pre": "Đường"
		}, {
			"id": 6930,
			"name": "Bình Nhâm",
			"pre": "Đường"
		}, {
			"id": 10505,
			"name": "Bình Nhâm 01",
			"pre": "Đường"
		}, {
			"id": 10504,
			"name": "Bình Nhâm 02",
			"pre": "Đường"
		}, {
			"id": 10827,
			"name": "Bình Nhâm 11",
			"pre": "Đường"
		}, {
			"id": 10717,
			"name": "Bình Nhâm 19",
			"pre": "Đường"
		}, {
			"id": 9050,
			"name": "Bình Nhâm 23",
			"pre": "Đường"
		}, {
			"id": 10208,
			"name": "Bình Nhâm 26",
			"pre": "Đường"
		}, {
			"id": 10868,
			"name": "Bình Nhâm 27",
			"pre": "Đường"
		}, {
			"id": 10932,
			"name": "Bình Nhâm 39",
			"pre": "Đường"
		}, {
			"id": 8374,
			"name": "Bình Nhâm 4",
			"pre": "Đường"
		}, {
			"id": 10266,
			"name": "Bình Nhâm 40",
			"pre": "Đường"
		}, {
			"id": 9828,
			"name": "Bình Nhâm 49",
			"pre": "Đường"
		}, {
			"id": 10452,
			"name": "Bình Nhâm 61",
			"pre": "Đường"
		}, {
			"id": 9229,
			"name": "Bình Nhâm 64",
			"pre": "Đường"
		}, {
			"id": 10737,
			"name": "Bình Nhâm 8",
			"pre": "Đường"
		}, {
			"id": 9177,
			"name": "Bình Nhâm 82",
			"pre": "Đường"
		}, {
			"id": 8928,
			"name": "Bình Nhâm 83",
			"pre": "Đường"
		}, {
			"id": 10848,
			"name": "Bình Nhâm 88",
			"pre": "Đường"
		}, {
			"id": 4272,
			"name": "Bình Phú",
			"pre": "Đường"
		}, {
			"id": 8367,
			"name": "Bình Phước A",
			"pre": "Đường"
		}, {
			"id": 8166,
			"name": "Bình Phước B",
			"pre": "Đường"
		}, {
			"id": 7370,
			"name": "Bình Quới",
			"pre": "Đường"
		}, {
			"id": 7436,
			"name": "Bình Thuận 2",
			"pre": "Đường"
		}, {
			"id": 7057,
			"name": "BN83",
			"pre": "Đường"
		}, {
			"id": 1947,
			"name": "Bờ Bao Sông Sài Gòn",
			"pre": "Đường"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 10216,
			"name": "C11",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 1957,
			"name": "Cây Me",
			"pre": "Đường"
		}, {
			"id": 1918,
			"name": "Châu Văn Tiếp",
			"pre": "Đường"
		}, {
			"id": 1963,
			"name": "Chòm Sao",
			"pre": "Đường"
		}, {
			"id": 10501,
			"name": "D",
			"pre": "Đường"
		}, {
			"id": 1985,
			"name": "D1",
			"pre": "Đường"
		}, {
			"id": 3222,
			"name": "D11",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 3223,
			"name": "D16",
			"pre": "Đường"
		}, {
			"id": 8996,
			"name": "D17",
			"pre": "Đường"
		}, {
			"id": 7454,
			"name": "D18",
			"pre": "Đường"
		}, {
			"id": 8759,
			"name": "D19",
			"pre": "Đường"
		}, {
			"id": 4601,
			"name": "D2",
			"pre": "Đường"
		}, {
			"id": 9037,
			"name": "D20",
			"pre": "Đường"
		}, {
			"id": 10494,
			"name": "D21",
			"pre": "Đường"
		}, {
			"id": 7162,
			"name": "D22",
			"pre": "Đường"
		}, {
			"id": 10438,
			"name": "D24",
			"pre": "Đường"
		}, {
			"id": 10775,
			"name": "D32",
			"pre": "Đường"
		}, {
			"id": 6857,
			"name": "D33",
			"pre": "Đường"
		}, {
			"id": 9211,
			"name": "D35",
			"pre": "Đường"
		}, {
			"id": 7290,
			"name": "D38",
			"pre": "Đường"
		}, {
			"id": 2600,
			"name": "D5",
			"pre": "Đường"
		}, {
			"id": 8159,
			"name": "D6",
			"pre": "Đường"
		}, {
			"id": 6799,
			"name": "D7",
			"pre": "Đường"
		}, {
			"id": 5889,
			"name": "D9",
			"pre": "Đường"
		}, {
			"id": 9048,
			"name": "DA 8",
			"pre": "Đường"
		}, {
			"id": 8862,
			"name": "DA6",
			"pre": "Đường"
		}, {
			"id": 10191,
			"name": "DA7",
			"pre": "Đường"
		}, {
			"id": 1746,
			"name": "Đại Lộ Bình Dương",
			"pre": "Đường"
		}, {
			"id": 8143,
			"name": "Đại lộ Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 1983,
			"name": "Đất Thánh",
			"pre": "Đường"
		}, {
			"id": 10194,
			"name": "DC63",
			"pre": "Đường"
		}, {
			"id": 8992,
			"name": "DC76",
			"pre": "Đường"
		}, {
			"id": 10339,
			"name": "DC84",
			"pre": "Đường"
		}, {
			"id": 7418,
			"name": "DH401",
			"pre": "Đường"
		}, {
			"id": 8521,
			"name": "DH404",
			"pre": "Đường"
		}, {
			"id": 7742,
			"name": "DL12",
			"pre": "Đường"
		}, {
			"id": 10586,
			"name": "DN1",
			"pre": "Đường"
		}, {
			"id": 1934,
			"name": "Đỗ Thành Nhân",
			"pre": "Đường"
		}, {
			"id": 797,
			"name": "Độc Lập",
			"pre": "Đường"
		}, {
			"id": 2131,
			"name": "Đông An",
			"pre": "Đường"
		}, {
			"id": 10637,
			"name": "Đông An 3",
			"pre": "Đường"
		}, {
			"id": 7129,
			"name": "Đông Ba",
			"pre": "Đường"
		}, {
			"id": 1937,
			"name": "Đông Cung Cảnh",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 1942,
			"name": "Đông Nhì",
			"pre": "Đường"
		}, {
			"id": 7244,
			"name": "Đông Tư",
			"pre": "Đường"
		}, {
			"id": 8856,
			"name": "ĐT 42",
			"pre": "Đường"
		}, {
			"id": 8146,
			"name": "ĐT 734C",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 7433,
			"name": "ĐT 742",
			"pre": "Đường"
		}, {
			"id": 7171,
			"name": "ĐT 743",
			"pre": "Đường"
		}, {
			"id": 9651,
			"name": "ĐT 743B",
			"pre": "Đường"
		}, {
			"id": 8466,
			"name": "ĐT 743C",
			"pre": "Đường"
		}, {
			"id": 6873,
			"name": "ĐT 745",
			"pre": "Đường"
		}, {
			"id": 8565,
			"name": "ĐT 746",
			"pre": "Đường"
		}, {
			"id": 6580,
			"name": "ĐT 747",
			"pre": "Đường"
		}, {
			"id": 10199,
			"name": "ĐT 747B",
			"pre": "Đường"
		}, {
			"id": 9676,
			"name": "Đức Lợi",
			"pre": "Đường"
		}, {
			"id": 1960,
			"name": "Đường AS02",
			"pre": "Đường"
		}, {
			"id": 7610,
			"name": "DX 01",
			"pre": "Đường"
		}, {
			"id": 8520,
			"name": "DX 07",
			"pre": "Đường"
		}, {
			"id": 8519,
			"name": "DX 075",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 7437,
			"name": "Hòa Lân",
			"pre": "Đường"
		}, {
			"id": 6941,
			"name": "Hòa Lân 2",
			"pre": "Đường"
		}, {
			"id": 7126,
			"name": "Hòa Long",
			"pre": "Đường"
		}, {
			"id": 1973,
			"name": "Hữu Nghị",
			"pre": "Đường"
		}, {
			"id": 10129,
			"name": "Khánh Long",
			"pre": "Đường"
		}, {
			"id": 6583,
			"name": "Khởi Nghĩa Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 1904,
			"name": "Khu dân cư Vĩnh Phú",
			"pre": "Đường"
		}, {
			"id": 9070,
			"name": "Lái Thiêu 1",
			"pre": "Đường"
		}, {
			"id": 7888,
			"name": "Lái Thiêu 115",
			"pre": "Đường"
		}, {
			"id": 8161,
			"name": "Lái Thiêu 117",
			"pre": "Đường"
		}, {
			"id": 10969,
			"name": "Lái Thiêu 16",
			"pre": "Đường"
		}, {
			"id": 9074,
			"name": "Lái Thiêu 44",
			"pre": "Đường"
		}, {
			"id": 9872,
			"name": "Lái Thiêu 53",
			"pre": "Đường"
		}, {
			"id": 9871,
			"name": "Lái Thiêu 66",
			"pre": "Đường"
		}, {
			"id": 10667,
			"name": "Lái Thiêu 9",
			"pre": "Đường"
		}, {
			"id": 10481,
			"name": "Lái Thiêu 96",
			"pre": "Đường"
		}, {
			"id": 8162,
			"name": "Lái Thiêu 98",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 1938,
			"name": "Lê Văn Duyệt",
			"pre": "Đường"
		}, {
			"id": 2120,
			"name": "Liên Huyện",
			"pre": "Đường"
		}, {
			"id": 8362,
			"name": "Liên Xã",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 5433,
			"name": "Mỹ Phước",
			"pre": "Đường"
		}, {
			"id": 6988,
			"name": "Mỹ Phước Tân Vạn",
			"pre": "Đường"
		}, {
			"id": 3599,
			"name": "N1",
			"pre": "Đường"
		}, {
			"id": 1984,
			"name": "N2",
			"pre": "Đường"
		}, {
			"id": 8463,
			"name": "N20",
			"pre": "Đường"
		}, {
			"id": 3019,
			"name": "N3",
			"pre": "Đường"
		}, {
			"id": 6732,
			"name": "N5",
			"pre": "Đường"
		}, {
			"id": 10378,
			"name": "NA1",
			"pre": "Đường"
		}, {
			"id": 10830,
			"name": "NA10",
			"pre": "Đường"
		}, {
			"id": 8927,
			"name": "NA12",
			"pre": "Đường"
		}, {
			"id": 8446,
			"name": "NA5",
			"pre": "Đường"
		}, {
			"id": 10466,
			"name": "NA6",
			"pre": "Đường"
		}, {
			"id": 9308,
			"name": "NA7",
			"pre": "Đường"
		}, {
			"id": 7469,
			"name": "NA8",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 4049,
			"name": "Nguyễn Duy",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 1841,
			"name": "Nguyễn Văn Tiết",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 1951,
			"name": "Phan Thanh Giản",
			"pre": "Đường"
		}, {
			"id": 576,
			"name": "Phó Đức Chính",
			"pre": "Phố"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 7634,
			"name": "Quốc Lộ 13",
			"pre": "Đường"
		}, {
			"id": 8368,
			"name": "Quốc Lộ 43",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6584,
			"name": "Tân Chánh Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 1982,
			"name": "Thạnh Bình",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 8616,
			"name": "Thạnh Quý",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 920,
			"name": "Thủ Khoa Huân",
			"pre": "Đường"
		}, {
			"id": 1975,
			"name": "Thuận An Hòa",
			"pre": "Đường"
		}, {
			"id": 8040,
			"name": "Thuận Giao",
			"pre": "Đường"
		}, {
			"id": 9809,
			"name": "Thuận Giao 12",
			"pre": "Đường"
		}, {
			"id": 9810,
			"name": "Thuận Giao 13",
			"pre": "Đường"
		}, {
			"id": 8657,
			"name": "Thuận Giao 16",
			"pre": "Đường"
		}, {
			"id": 9728,
			"name": "Thuận Giao 17",
			"pre": "Đường"
		}, {
			"id": 9729,
			"name": "Thuận Giao 19",
			"pre": "Đường"
		}, {
			"id": 10407,
			"name": "Thuận Giao 21",
			"pre": "Đường"
		}, {
			"id": 9807,
			"name": "Thuận Giao 23",
			"pre": "Đường"
		}, {
			"id": 9748,
			"name": "Thuận Giao 24",
			"pre": "Đường"
		}, {
			"id": 10569,
			"name": "Thuận Giao 43",
			"pre": "Đường"
		}, {
			"id": 8518,
			"name": "Thuận Giao 5",
			"pre": "Đường"
		}, {
			"id": 7729,
			"name": "Thuận Giao 7",
			"pre": "Đường"
		}, {
			"id": 9808,
			"name": "Thuận Giao 9",
			"pre": "Đường"
		}, {
			"id": 7815,
			"name": "Tỉnh lộ 43",
			"pre": "Đường"
		}, {
			"id": 2577,
			"name": "Tỉnh lộ 743",
			"pre": "Đường"
		}, {
			"id": 1952,
			"name": "Tỉnh lộ 745",
			"pre": "Đường"
		}, {
			"id": 1903,
			"name": "Tỉnh lộ 7A",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 420,
			"name": "Trần Quang Diệu",
			"pre": "Đường"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 1972,
			"name": "Tự Do",
			"pre": "Đường"
		}, {
			"id": 1944,
			"name": "Vành Đai",
			"pre": "Đường"
		}, {
			"id": 8005,
			"name": "Vành Đai 3",
			"pre": "Đường"
		}, {
			"id": 1965,
			"name": "Viet Huong IP",
			"pre": "Đường"
		}, {
			"id": 5778,
			"name": "Vĩnh Phú",
			"pre": "Đường"
		}, {
			"id": 9489,
			"name": "Vĩnh Phú 10",
			"pre": "Đường"
		}, {
			"id": 9524,
			"name": "Vĩnh Phú 12",
			"pre": "Đường"
		}, {
			"id": 10956,
			"name": "Vĩnh Phú 15",
			"pre": "Đường"
		}, {
			"id": 8448,
			"name": "Vĩnh Phú 16",
			"pre": "Đường"
		}, {
			"id": 8488,
			"name": "Vĩnh Phú 20",
			"pre": "Đường"
		}, {
			"id": 10778,
			"name": "Vĩnh Phú 21",
			"pre": "Đường"
		}, {
			"id": 9835,
			"name": "Vĩnh Phú 22",
			"pre": "Đường"
		}, {
			"id": 8056,
			"name": "Vĩnh Phú 23",
			"pre": "Đường"
		}, {
			"id": 10352,
			"name": "Vĩnh Phú 25",
			"pre": "Đường"
		}, {
			"id": 9149,
			"name": "Vĩnh Phú 27",
			"pre": "Đường"
		}, {
			"id": 10579,
			"name": "Vĩnh Phú 3",
			"pre": "Đường"
		}, {
			"id": 10962,
			"name": "Vĩnh Phú 30",
			"pre": "Đường"
		}, {
			"id": 7763,
			"name": "Vĩnh Phú 32",
			"pre": "Đường"
		}, {
			"id": 7665,
			"name": "Vĩnh Phú 33",
			"pre": "Đường"
		}, {
			"id": 9140,
			"name": "Vĩnh Phú 35",
			"pre": "Đường"
		}, {
			"id": 9757,
			"name": "Vĩnh Phú 37",
			"pre": "Đường"
		}, {
			"id": 7508,
			"name": "Vĩnh Phú 38",
			"pre": "Đường"
		}, {
			"id": 8202,
			"name": "Vinh Phú 40",
			"pre": "Đường"
		}, {
			"id": 7600,
			"name": "Vĩnh Phú 41",
			"pre": "Đường"
		}, {
			"id": 10485,
			"name": "Vĩnh Phú 42",
			"pre": "Đường"
		}, {
			"id": 8649,
			"name": "Vĩnh Phú 6",
			"pre": "Đường"
		}, {
			"id": 10960,
			"name": "X1",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2023,
			"name": "An Sơn Riverside",
			"lat": 10.926562309265137,
			"lng": 106.66207122802734,
			"cats": [40, 52, 324, 325, 326]
		}, {
			"id": 1222,
			"name": "An Thạnh",
			"lat": 10.954232215881348,
			"lng": 106.69259643554687,
			"cats": [40, 41, 48, 52, 55, 163, 325]
		}, {
			"id": 2474,
			"name": "Biệt thự sinh thái Bình Đức Tiến",
			"lat": 10.911832809448242,
			"lng": 106.69557189941406,
			"cats": []
		}, {
			"id": 2394,
			"name": "Citadine Bình Dương",
			"lat": 10.903010368347168,
			"lng": 106.73177337646484,
			"cats": []
		}, {
			"id": 914,
			"name": "Contentment Plaza",
			"lat": 10.870255470275879,
			"lng": 106.71208953857422,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1879,
			"name": "Đại Ngàn",
			"lat": 10.946079254150391,
			"lng": 106.71956634521484,
			"cats": [40, 48, 324, 325, 326]
		}, {
			"id": 845,
			"name": "Eco Xuân Lái Thiêu",
			"lat": 10.909506797790527,
			"lng": 106.71279144287109,
			"cats": [40, 44, 48, 55, 325]
		}, {
			"id": 1227,
			"name": "EHome 4 - Bắc Sài Gòn",
			"lat": 10.884577751159668,
			"lng": 106.70368957519531,
			"cats": [41, 48, 52, 59, 324, 325, 326]
		}, {
			"id": 1816,
			"name": "First Home Premium",
			"lat": 10.949758529663086,
			"lng": 106.70572662353516,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1930,
			"name": "KDC An Phú Hưng",
			"lat": 10.961121559143066,
			"lng": 106.73439788818359,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 1749,
			"name": "KDC Thuận Giao",
			"lat": 10.964273452758789,
			"lng": 106.71302032470703,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}, {
			"id": 817,
			"name": "Oscar Riverside",
			"lat": 10.899412155151367,
			"lng": 106.69631195068359,
			"cats": [48, 55, 57, 59, 324, 326]
		}, {
			"id": 1002,
			"name": "The Canary",
			"lat": 10.932640075683594,
			"lng": 106.71234130859375,
			"cats": [48, 55, 57, 59, 324, 326]
		}, {
			"id": 2236,
			"name": "The Habitat Bình Dương",
			"lat": 10.931833267211914,
			"lng": 106.72530364990234,
			"cats": [48, 50, 55, 57, 59, 324, 326, 362]
		}, {
			"id": 1095,
			"name": "The Oasis",
			"lat": 10.9436674118042,
			"lng": 106.72931671142578,
			"cats": [40, 41, 48, 52, 325]
		}, {
			"id": 1247,
			"name": "The Seasons Lái Thiêu",
			"lat": 10.906068801879883,
			"lng": 106.71028137207031,
			"cats": [40, 48, 51, 55, 59, 163, 325]
		}, {
			"id": 1729,
			"name": "Vĩnh Phú I",
			"lat": 10.877020835876465,
			"lng": 106.71113586425781,
			"cats": [40, 48, 51, 55, 59, 163, 325]
		}, {
			"id": 858,
			"name": "Vĩnh Phú II",
			"lat": 10.886666297912598,
			"lng": 106.70969390869141,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 1337,
			"name": "VSIP 1",
			"lat": 10.93183708190918,
			"lng": 106.72547149658203,
			"cats": [45, 48, 53, 55, 57]
		}]
	}]
}, {
	"code": "DDN",
	"name": "Đà Nẵng",
	"district": [{
		"id": 45,
		"name": "Cẩm Lệ",
		"pre": "Quận",
		"ward": [{
			"id": 224,
			"name": "Hòa An",
			"pre": "Phường"
		}, {
			"id": 225,
			"name": "Hòa Phát",
			"pre": "Phường"
		}, {
			"id": 222,
			"name": "Hòa Thọ Đông",
			"pre": "Phường"
		}, {
			"id": 223,
			"name": "Hòa Thọ Tây",
			"pre": "Phường"
		}, {
			"id": 226,
			"name": "Hòa Xuân",
			"pre": "Phường"
		}, {
			"id": 221,
			"name": "Khuê Trung",
			"pre": "Phường"
		}],
		"street": [{
			"id": 6573,
			"name": "14B",
			"pre": "Đường"
		}, {
			"id": 4991,
			"name": "20",
			"pre": "Đường"
		}, {
			"id": 2263,
			"name": "47",
			"pre": "Đường"
		}, {
			"id": 6591,
			"name": "50",
			"pre": "Đường"
		}, {
			"id": 2916,
			"name": "66",
			"pre": "Đường"
		}, {
			"id": 9339,
			"name": "An Hoà 1",
			"pre": "Đường"
		}, {
			"id": 10446,
			"name": "An Hòa 10",
			"pre": "Đường"
		}, {
			"id": 10447,
			"name": "An Hòa 12",
			"pre": "Đường"
		}, {
			"id": 10441,
			"name": "An Hòa 2",
			"pre": "Đường"
		}, {
			"id": 10442,
			"name": "An Hòa 3",
			"pre": "Đường"
		}, {
			"id": 7621,
			"name": "An Hòa 4",
			"pre": "Đường"
		}, {
			"id": 10443,
			"name": "An Hòa 5",
			"pre": "Đường"
		}, {
			"id": 10444,
			"name": "An Hòa 6",
			"pre": "Đường"
		}, {
			"id": 10445,
			"name": "An Hòa 7",
			"pre": "Đường"
		}, {
			"id": 9931,
			"name": "An Hòa 8",
			"pre": "Đường"
		}, {
			"id": 9932,
			"name": "An Hòa 9",
			"pre": "Đường"
		}, {
			"id": 6599,
			"name": "An Phú Đông 27",
			"pre": "Đường"
		}, {
			"id": 5827,
			"name": "An Thượng 6",
			"pre": "Đường"
		}, {
			"id": 801,
			"name": "Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 2204,
			"name": "Bãi Sậy",
			"pre": "Đường"
		}, {
			"id": 10953,
			"name": "Bàu Cầu 1",
			"pre": "Đường"
		}, {
			"id": 9327,
			"name": "Bàu Gia Thượng 1",
			"pre": "Đường"
		}, {
			"id": 9334,
			"name": "Bàu Gia Thượng 2",
			"pre": "Đường"
		}, {
			"id": 9324,
			"name": "Bàu Gia Thượng 3",
			"pre": "Đường"
		}, {
			"id": 8617,
			"name": "Bàu Tràm 1",
			"pre": "Đường"
		}, {
			"id": 6722,
			"name": "Bàu Tràm 2",
			"pre": "Đường"
		}, {
			"id": 2399,
			"name": "Bàu Tràm Trung",
			"pre": "Đường"
		}, {
			"id": 5865,
			"name": "Bình Hòa",
			"pre": "Đường"
		}, {
			"id": 9785,
			"name": "Bình Hòa 1",
			"pre": "Đường"
		}, {
			"id": 8554,
			"name": "Bình Hòa 10",
			"pre": "Đường"
		}, {
			"id": 9789,
			"name": "Bình Hòa 11",
			"pre": "Đường"
		}, {
			"id": 9790,
			"name": "Bình Hòa 12",
			"pre": "Đường"
		}, {
			"id": 9791,
			"name": "Bình Hòa 14",
			"pre": "Đường"
		}, {
			"id": 9792,
			"name": "Bình Hòa 17",
			"pre": "Đường"
		}, {
			"id": 9786,
			"name": "Bình Hòa 2",
			"pre": "Đường"
		}, {
			"id": 7397,
			"name": "Bình Hòa 3",
			"pre": "Đường"
		}, {
			"id": 9213,
			"name": "Bình Hòa 4",
			"pre": "Đường"
		}, {
			"id": 9292,
			"name": "Bình Hoà 5",
			"pre": "Đường"
		}, {
			"id": 6912,
			"name": "Bình Hòa 6",
			"pre": "Đường"
		}, {
			"id": 6390,
			"name": "Bình Hòa 7",
			"pre": "Đường"
		}, {
			"id": 9787,
			"name": "Bình Hòa 8",
			"pre": "Đường"
		}, {
			"id": 9788,
			"name": "Bình Hòa 9",
			"pre": "Đường"
		}, {
			"id": 8776,
			"name": "Bình Thái 1",
			"pre": "Đường"
		}, {
			"id": 8957,
			"name": "Bình Thái 2",
			"pre": "Đường"
		}, {
			"id": 10155,
			"name": "Bình Thái 3",
			"pre": "Đường"
		}, {
			"id": 10141,
			"name": "Bình Thái 4",
			"pre": "Đường"
		}, {
			"id": 1199,
			"name": "Bùi Hữu Nghĩa",
			"pre": "Đường"
		}, {
			"id": 9526,
			"name": "Bùi Huy Đáp",
			"pre": "Đường"
		}, {
			"id": 1932,
			"name": "Bùi Kỷ",
			"pre": "Đường"
		}, {
			"id": 1953,
			"name": "Bùi Vịnh",
			"pre": "Đường"
		}, {
			"id": 8899,
			"name": "Bùi Xuân Trạch",
			"pre": "Đường"
		}, {
			"id": 9747,
			"name": "Bùi Xuân Tự",
			"pre": "Đường"
		}, {
			"id": 309,
			"name": "Bùi Xương Trạch",
			"pre": "Đường"
		}, {
			"id": 9915,
			"name": "Bùi Xương Tự",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 7070,
			"name": "Cẩm Bắc 1",
			"pre": "Đường"
		}, {
			"id": 2386,
			"name": "Cẩm Bắc 10",
			"pre": "Đường"
		}, {
			"id": 9840,
			"name": "Cẩm Bắc 11",
			"pre": "Đường"
		}, {
			"id": 7620,
			"name": "Cẩm Bắc 12",
			"pre": "Đường"
		}, {
			"id": 9837,
			"name": "Cẩm Bắc 2",
			"pre": "Đường"
		}, {
			"id": 8757,
			"name": "Cẩm Bắc 3",
			"pre": "Đường"
		}, {
			"id": 8593,
			"name": "Cẩm Bắc 4",
			"pre": "Đường"
		}, {
			"id": 6942,
			"name": "Cẩm Bắc 5",
			"pre": "Đường"
		}, {
			"id": 9838,
			"name": "Cẩm Bắc 6",
			"pre": "Đường"
		}, {
			"id": 2384,
			"name": "Cẩm Bắc 7",
			"pre": "Đường"
		}, {
			"id": 9839,
			"name": "Cẩm Bắc 8",
			"pre": "Đường"
		}, {
			"id": 9207,
			"name": "Cẩm Bắc 9",
			"pre": "Đường"
		}, {
			"id": 9260,
			"name": "Cẩm Chánh 1",
			"pre": "Đường"
		}, {
			"id": 9897,
			"name": "Cẩm Chánh 2",
			"pre": "Đường"
		}, {
			"id": 9898,
			"name": "Cẩm Chánh 3",
			"pre": "Đường"
		}, {
			"id": 9899,
			"name": "Cẩm Chánh 4",
			"pre": "Đường"
		}, {
			"id": 9206,
			"name": "Cẩm Chánh 5",
			"pre": "Đường"
		}, {
			"id": 10917,
			"name": "Cẩm Nam",
			"pre": "Đường"
		}, {
			"id": 6898,
			"name": "Cẩm Nam 1",
			"pre": "Đường"
		}, {
			"id": 8919,
			"name": "Cẩm Nam 2",
			"pre": "Đường"
		}, {
			"id": 9900,
			"name": "Cẩm Nam 3",
			"pre": "Đường"
		}, {
			"id": 9901,
			"name": "Cẩm Nam 4",
			"pre": "Đường"
		}, {
			"id": 8138,
			"name": "Cẩm Nam 5",
			"pre": "Đường"
		}, {
			"id": 8917,
			"name": "Cẩm Nam 6",
			"pre": "Đường"
		}, {
			"id": 9929,
			"name": "Cẩm Nam 7",
			"pre": "Đường"
		}, {
			"id": 9930,
			"name": "Cẩm Nam 8",
			"pre": "Đường"
		}, {
			"id": 3350,
			"name": "Cao Bá Đạt",
			"pre": "Đường"
		}, {
			"id": 845,
			"name": "Cao Bá Quát",
			"pre": "Đường"
		}, {
			"id": 2003,
			"name": "Cao Sơn Pháo",
			"pre": "Đường"
		}, {
			"id": 2005,
			"name": "Cao Xuân Dục",
			"pre": "Đường"
		}, {
			"id": 2006,
			"name": "Cao Xuân Huy",
			"pre": "Đường"
		}, {
			"id": 1532,
			"name": "Châu Thị Vĩnh Tế",
			"pre": "Đường"
		}, {
			"id": 9485,
			"name": "Cổ Mân Cúc 1",
			"pre": "Đường"
		}, {
			"id": 9486,
			"name": "Cổ Mân Cúc 2",
			"pre": "Đường"
		}, {
			"id": 9487,
			"name": "Cổ Mân Cúc 3",
			"pre": "Đường"
		}, {
			"id": 9488,
			"name": "Cổ Mân Cúc 4",
			"pre": "Đường"
		}, {
			"id": 9508,
			"name": "Cổ Mân Lan 1",
			"pre": "Đường"
		}, {
			"id": 9509,
			"name": "Cổ Mân Lan 2",
			"pre": "Đường"
		}, {
			"id": 9510,
			"name": "Cổ Mân Lan 4",
			"pre": "Đường"
		}, {
			"id": 8168,
			"name": "Cổ Mân Mai 1",
			"pre": "Đường"
		}, {
			"id": 9505,
			"name": "Cổ Mân Mai 2",
			"pre": "Đường"
		}, {
			"id": 9506,
			"name": "Cổ Mân Mai 3",
			"pre": "Đường"
		}, {
			"id": 9390,
			"name": "Cổ Mân Mai 4",
			"pre": "Đường"
		}, {
			"id": 9507,
			"name": "Cổ Mân Mai 5",
			"pre": "Đường"
		}, {
			"id": 6110,
			"name": "Cồn Dầu 1",
			"pre": "Đường"
		}, {
			"id": 8851,
			"name": "Cồn Dầu 2",
			"pre": "Đường"
		}, {
			"id": 9393,
			"name": "Cồn Dầu 3",
			"pre": "Đường"
		}, {
			"id": 9686,
			"name": "Cồn Dầu 4",
			"pre": "Đường"
		}, {
			"id": 9687,
			"name": "Cồn Dầu 5",
			"pre": "Đường"
		}, {
			"id": 9688,
			"name": "Cồn Dầu 6",
			"pre": "Đường"
		}, {
			"id": 9689,
			"name": "Cồn Dầu 7",
			"pre": "Đường"
		}, {
			"id": 7092,
			"name": "Cồn Dầu 8",
			"pre": "Đường"
		}, {
			"id": 1075,
			"name": "Cống Quỳnh",
			"pre": "Đường"
		}, {
			"id": 6579,
			"name": "Cù Lao Thượng",
			"pre": "Đường"
		}, {
			"id": 6582,
			"name": "D15",
			"pre": "Đường"
		}, {
			"id": 5687,
			"name": "Đại lộ Thăng Long",
			"pre": "Đường"
		}, {
			"id": 2065,
			"name": "Đàm Văn Lễ",
			"pre": "Đường"
		}, {
			"id": 10828,
			"name": "Đặng Hòa",
			"pre": "Đường"
		}, {
			"id": 2074,
			"name": "Đặng Như Mai",
			"pre": "Đường"
		}, {
			"id": 782,
			"name": "Đặng Thai Mai",
			"pre": "Đường"
		}, {
			"id": 2273,
			"name": "Đặng Văn Ngữ",
			"pre": "Đường"
		}, {
			"id": 443,
			"name": "Đặng Xuân Bảng",
			"pre": "Đường"
		}, {
			"id": 6800,
			"name": "Đào Công Chính",
			"pre": "Đường"
		}, {
			"id": 402,
			"name": "Đào Duy Anh",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 10355,
			"name": "Đinh Châu",
			"pre": "Đường"
		}, {
			"id": 5829,
			"name": "Đình Đông",
			"pre": "Đường"
		}, {
			"id": 186,
			"name": "Đinh Liệt",
			"pre": "Phố"
		}, {
			"id": 7109,
			"name": "Đỗ Đăng Tuyển",
			"pre": "Đường"
		}, {
			"id": 3611,
			"name": "Đô Đốc Bảo",
			"pre": "Đường"
		}, {
			"id": 7330,
			"name": "Đô Đốc Lân",
			"pre": "Đường"
		}, {
			"id": 3292,
			"name": "Đô Đốc Lộc",
			"pre": "Đường"
		}, {
			"id": 7458,
			"name": "Đô Đốc Tuyết",
			"pre": "Đường"
		}, {
			"id": 4762,
			"name": "Đỗ Thúc Tịnh",
			"pre": "Đường"
		}, {
			"id": 10262,
			"name": "Đỗ Tự",
			"pre": "Đường"
		}, {
			"id": 3383,
			"name": "Đoàn Hữu Trưng",
			"pre": "Đường"
		}, {
			"id": 6918,
			"name": "Đoàn Ngọc Nhạc",
			"pre": "Đường"
		}, {
			"id": 3970,
			"name": "Đoàn Nguyễn Tuấn",
			"pre": "Đường"
		}, {
			"id": 72,
			"name": "Đội Cấn",
			"pre": "Đường"
		}, {
			"id": 1050,
			"name": "Đội Cung",
			"pre": "Đường"
		}, {
			"id": 9620,
			"name": "Đống Công Tường",
			"pre": "Đường"
		}, {
			"id": 6598,
			"name": "Đông Hưng Thuận 6",
			"pre": "Đường"
		}, {
			"id": 2387,
			"name": "Đông Thạnh 2",
			"pre": "Đường"
		}, {
			"id": 7999,
			"name": "Đồng Trí 3",
			"pre": "Đường"
		}, {
			"id": 6581,
			"name": "ĐT 741",
			"pre": "Đường"
		}, {
			"id": 6580,
			"name": "ĐT 747",
			"pre": "Đường"
		}, {
			"id": 4372,
			"name": "Dương Bá Cung",
			"pre": "Đường"
		}, {
			"id": 9924,
			"name": "Dương Đức Nhan",
			"pre": "Đường"
		}, {
			"id": 10832,
			"name": "Dương Loan",
			"pre": "Đường"
		}, {
			"id": 2023,
			"name": "Dương Quảng Hàm",
			"pre": "Đường"
		}, {
			"id": 2395,
			"name": "Hà Duy Phiên",
			"pre": "Đường"
		}, {
			"id": 1324,
			"name": "Hà Huy Giáp",
			"pre": "Đường"
		}, {
			"id": 6636,
			"name": "Hà Mục",
			"pre": "Đường"
		}, {
			"id": 6423,
			"name": "Hà Tông Quyền",
			"pre": "Đường"
		}, {
			"id": 8160,
			"name": "Hà Văn Trí",
			"pre": "Đường"
		}, {
			"id": 6592,
			"name": "Hàn Giang",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 3361,
			"name": "Hồ Biểu Chánh",
			"pre": "Đường"
		}, {
			"id": 6353,
			"name": "Hồ Đắt Di",
			"pre": "Đường"
		}, {
			"id": 6484,
			"name": "Hồ Ngọc Lãm",
			"pre": "Đường"
		}, {
			"id": 3360,
			"name": "Hồ Nguyên Trừng",
			"pre": "Đường"
		}, {
			"id": 2584,
			"name": "Hồ Quý Ly",
			"pre": "Đường"
		}, {
			"id": 5931,
			"name": "Hồ Sỹ Dương",
			"pre": "Đường"
		}, {
			"id": 8026,
			"name": "Hòa An",
			"pre": "Đường"
		}, {
			"id": 6392,
			"name": "Hòa An 2",
			"pre": "Đường"
		}, {
			"id": 8141,
			"name": "Hòa An 3",
			"pre": "Đường"
		}, {
			"id": 10731,
			"name": "Hòa An 4",
			"pre": "Đường"
		}, {
			"id": 9276,
			"name": "Hoà An 5",
			"pre": "Đường"
		}, {
			"id": 8607,
			"name": "Hòa An 7",
			"pre": "Đường"
		}, {
			"id": 6563,
			"name": "Hòa An 8",
			"pre": "Đường"
		}, {
			"id": 6078,
			"name": "Hòa An 9",
			"pre": "Đường"
		}, {
			"id": 8730,
			"name": "Hóa Mỹ",
			"pre": "Đường"
		}, {
			"id": 10165,
			"name": "Hòa Nam 1",
			"pre": "Đường"
		}, {
			"id": 10166,
			"name": "Hòa Nam 2",
			"pre": "Đường"
		}, {
			"id": 10167,
			"name": "Hòa Nam 3",
			"pre": "Đường"
		}, {
			"id": 6495,
			"name": "Hòa Nam 5",
			"pre": "Đường"
		}, {
			"id": 10168,
			"name": "Hòa Nam 6",
			"pre": "Đường"
		}, {
			"id": 8025,
			"name": "Hòa Thọ Đông",
			"pre": "Đường"
		}, {
			"id": 9304,
			"name": "Hoàng Bính Chính",
			"pre": "Đường"
		}, {
			"id": 9251,
			"name": "Hoàng Châu Ký",
			"pre": "Đường"
		}, {
			"id": 311,
			"name": "Hoàng Đạo Thúy",
			"pre": "Phố"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 7505,
			"name": "Hoàng Đình Ái",
			"pre": "Đường"
		}, {
			"id": 5720,
			"name": "Hoàng Dư Khương",
			"pre": "Đường"
		}, {
			"id": 322,
			"name": "Hoàng Minh Giám",
			"pre": "Đường"
		}, {
			"id": 332,
			"name": "Hoàng Ngân",
			"pre": "Đường"
		}, {
			"id": 412,
			"name": "Hoàng Ngọc Phách",
			"pre": "Phố"
		}, {
			"id": 688,
			"name": "Hoàng Sâm",
			"pre": "Phố"
		}, {
			"id": 6035,
			"name": "Hoàng Tăng Bí",
			"pre": "Đường"
		}, {
			"id": 9443,
			"name": "Hoàng Thị Ái",
			"pre": "Đường"
		}, {
			"id": 300,
			"name": "Hoàng Văn Thái",
			"pre": "Đường"
		}, {
			"id": 2086,
			"name": "Hoàng Xuân Hãn",
			"pre": "Đường"
		}, {
			"id": 6491,
			"name": "Huy Cận",
			"pre": "Đường"
		}, {
			"id": 2357,
			"name": "Huỳnh Ngọc Huệ",
			"pre": "Đường"
		}, {
			"id": 3010,
			"name": "Huỳnh Tấn Phát",
			"pre": "Đường"
		}, {
			"id": 1603,
			"name": "Huỳnh Tịnh Của",
			"pre": "Đường"
		}, {
			"id": 7982,
			"name": "Huỳnh Xuân Nhị",
			"pre": "Đường"
		}, {
			"id": 6583,
			"name": "Khởi Nghĩa Bắc Sơn",
			"pre": "Đường"
		}, {
			"id": 2146,
			"name": "Khúc Hạo",
			"pre": "Đường"
		}, {
			"id": 3411,
			"name": "Khương Hữu Dụng",
			"pre": "Đường"
		}, {
			"id": 7060,
			"name": "Kiều Phụng",
			"pre": "Đường"
		}, {
			"id": 8396,
			"name": "Lâm Nhĩ",
			"pre": "Đường"
		}, {
			"id": 8608,
			"name": "Lâm Văn Thự",
			"pre": "Đường"
		}, {
			"id": 3253,
			"name": "Lê Cao Lãng",
			"pre": "Đường"
		}, {
			"id": 1055,
			"name": "Lê Đại Hành",
			"pre": "Đường"
		}, {
			"id": 9073,
			"name": "Lê Đình",
			"pre": "Đường"
		}, {
			"id": 9655,
			"name": "Lê Đỉnh",
			"pre": "Đường"
		}, {
			"id": 89,
			"name": "Lê Duẩn",
			"pre": "Đường"
		}, {
			"id": 2383,
			"name": "Lê Duy Lương",
			"pre": "Đường"
		}, {
			"id": 10453,
			"name": "Lê Huy",
			"pre": "Đường"
		}, {
			"id": 6131,
			"name": "Lê Kim Lăng",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 7345,
			"name": "Lê Ngân",
			"pre": "Đường"
		}, {
			"id": 7962,
			"name": "Lê Quảng Ba",
			"pre": "Đường"
		}, {
			"id": 1530,
			"name": "Lê Quang Định",
			"pre": "Đường"
		}, {
			"id": 202,
			"name": "Lê Thạch",
			"pre": "Đường"
		}, {
			"id": 3180,
			"name": "Lê Thận",
			"pre": "Đường"
		}, {
			"id": 2249,
			"name": "Lê Thanh Nghị",
			"pre": "Đường"
		}, {
			"id": 6992,
			"name": "Lê Thiết Hùng",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 5848,
			"name": "Lê Văn An",
			"pre": "Đường"
		}, {
			"id": 203,
			"name": "Lê Văn Linh",
			"pre": "Đường"
		}, {
			"id": 6945,
			"name": "Lê Vĩnh Khanh",
			"pre": "Đường"
		}, {
			"id": 9571,
			"name": "Liêm Lạc 12",
			"pre": "Đường"
		}, {
			"id": 9572,
			"name": "Liêm Lạc 14",
			"pre": "Đường"
		}, {
			"id": 9573,
			"name": "Liêm Lạc 15",
			"pre": "Đường"
		}, {
			"id": 9574,
			"name": "Liêm Lạc 16",
			"pre": "Đường"
		}, {
			"id": 9575,
			"name": "Liêm Lạc 17",
			"pre": "Đường"
		}, {
			"id": 9576,
			"name": "Liêm Lạc 18",
			"pre": "Đường"
		}, {
			"id": 9577,
			"name": "Liêm Lạc 19",
			"pre": "Đường"
		}, {
			"id": 9578,
			"name": "Liêm Lạc 20",
			"pre": "Đường"
		}, {
			"id": 9579,
			"name": "Liêm Lạc 21",
			"pre": "Đường"
		}, {
			"id": 9328,
			"name": "Liên Lạc 12",
			"pre": "Đường"
		}, {
			"id": 8918,
			"name": "Liên Lạc 4",
			"pre": "Đường"
		}, {
			"id": 7559,
			"name": "Lỗ Giáng 1",
			"pre": "Đường"
		}, {
			"id": 10736,
			"name": "Lỗ Giáng 12",
			"pre": "Đường"
		}, {
			"id": 10699,
			"name": "Lỗ Giáng 14",
			"pre": "Đường"
		}, {
			"id": 10433,
			"name": "Lỗ Giáng 15",
			"pre": "Đường"
		}, {
			"id": 9306,
			"name": "Lỗ Giáng 16",
			"pre": "Đường"
		}, {
			"id": 10558,
			"name": "Lỗ Giáng 18",
			"pre": "Đường"
		}, {
			"id": 9420,
			"name": "Lỗ Giáng 19",
			"pre": "Đường"
		}, {
			"id": 9925,
			"name": "Lỗ Giáng 2",
			"pre": "Đường"
		}, {
			"id": 7965,
			"name": "Lỗ Giáng 20",
			"pre": "Đường"
		}, {
			"id": 9449,
			"name": "Lỗ Giáng 21",
			"pre": "Đường"
		}, {
			"id": 6706,
			"name": "Lỗ Giáng 22",
			"pre": "Đường"
		}, {
			"id": 9601,
			"name": "Lỗ Giáng 24",
			"pre": "Đường"
		}, {
			"id": 9926,
			"name": "Lỗ Giáng 3",
			"pre": "Đường"
		}, {
			"id": 8858,
			"name": "Lỗ Giáng 4",
			"pre": "Đường"
		}, {
			"id": 9927,
			"name": "Lỗ Giáng 5",
			"pre": "Đường"
		}, {
			"id": 9464,
			"name": "Lỗ Giáng 6",
			"pre": "Đường"
		}, {
			"id": 9173,
			"name": "Lỗ Giáng 7",
			"pre": "Đường"
		}, {
			"id": 7456,
			"name": "Lỗ Giáng 8",
			"pre": "Đường"
		}, {
			"id": 9928,
			"name": "Lỗ Giáng 9",
			"pre": "Đường"
		}, {
			"id": 6602,
			"name": "Lộc Hòa",
			"pre": "Đường"
		}, {
			"id": 8836,
			"name": "Lư Giang",
			"pre": "Đường"
		}, {
			"id": 396,
			"name": "Lương Định Của",
			"pre": "Phố"
		}, {
			"id": 8053,
			"name": "Lương Nhữ Hộc",
			"pre": "Đường"
		}, {
			"id": 339,
			"name": "Lương Văn Can",
			"pre": "Đường"
		}, {
			"id": 4129,
			"name": "Lưu Nhân Chú",
			"pre": "Đường"
		}, {
			"id": 1608,
			"name": "Lý Nhân Tông",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 7115,
			"name": "Lý Thiên Bảo",
			"pre": "Đường"
		}, {
			"id": 434,
			"name": "Mai Anh Tuấn",
			"pre": "Phố"
		}, {
			"id": 10894,
			"name": "Mẹ Thứ",
			"pre": "Đường"
		}, {
			"id": 6596,
			"name": "Mương Khai",
			"pre": "Đường"
		}, {
			"id": 6394,
			"name": "Ngô Chi Lan",
			"pre": "Đường"
		}, {
			"id": 3597,
			"name": "Ngô Mây",
			"pre": "Đường"
		}, {
			"id": 6351,
			"name": "Ngô Nhâm Tịnh",
			"pre": "Đường"
		}, {
			"id": 5891,
			"name": "Ngô Thái Lân",
			"pre": "Đường"
		}, {
			"id": 4011,
			"name": "Ngô Thế Lân",
			"pre": "Đường"
		}, {
			"id": 150,
			"name": "Ngô Thì Nhậm",
			"pre": "Đường"
		}, {
			"id": 2396,
			"name": "Nguyễn Bảo",
			"pre": "Đường"
		}, {
			"id": 756,
			"name": "Nguyễn Công Hoan",
			"pre": "Đường"
		}, {
			"id": 2398,
			"name": "Nguyễn Đăng Đạo",
			"pre": "Đường"
		}, {
			"id": 5846,
			"name": "Nguyễn Đình Tứ",
			"pre": "Đường"
		}, {
			"id": 7220,
			"name": "Nguyễn Đỗ Mục",
			"pre": "Đường"
		}, {
			"id": 4050,
			"name": "Nguyễn Đóa",
			"pre": "Đường"
		}, {
			"id": 6347,
			"name": "Nguyễn Dữ",
			"pre": "Đường"
		}, {
			"id": 9338,
			"name": "Nguyễn Đức Thiệu",
			"pre": "Đường"
		}, {
			"id": 4049,
			"name": "Nguyễn Duy",
			"pre": "Đường"
		}, {
			"id": 10351,
			"name": "Nguyễn Hàng",
			"pre": "Đường"
		}, {
			"id": 8816,
			"name": "Nguyễn Hằng",
			"pre": "Đường"
		}, {
			"id": 8733,
			"name": "Nguyễn Hàng Chi",
			"pre": "Đường"
		}, {
			"id": 5826,
			"name": "Nguyễn Hành",
			"pre": "Đường"
		}, {
			"id": 458,
			"name": "Nguyễn Hữu Thọ",
			"pre": "Đường"
		}, {
			"id": 3138,
			"name": "Nguyễn Hữu Tiến",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 8378,
			"name": "Nguyễn Huy Liệu",
			"pre": "Đường"
		}, {
			"id": 315,
			"name": "Nguyễn Huy Tưởng",
			"pre": "Đường"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 2381,
			"name": "Nguyễn Khoa Chiêm",
			"pre": "Đường"
		}, {
			"id": 6348,
			"name": "Nguyễn Lai",
			"pre": "Đường"
		}, {
			"id": 394,
			"name": "Nguyễn Lương Bằng",
			"pre": "Đường"
		}, {
			"id": 3259,
			"name": "Nguyễn Lý",
			"pre": "Đường"
		}, {
			"id": 6818,
			"name": "Nguyễn Nhàn",
			"pre": "Đường"
		}, {
			"id": 681,
			"name": "Nguyễn Phong Sắc",
			"pre": "Đường"
		}, {
			"id": 8857,
			"name": "Nguyễn Phú Hường",
			"pre": "Đường"
		}, {
			"id": 10746,
			"name": "Nguyễn Phước Lan",
			"pre": "Đường"
		}, {
			"id": 6972,
			"name": "Nguyễn Phước Tần",
			"pre": "Đường"
		}, {
			"id": 10182,
			"name": "Nguyễn Quang Lâm",
			"pre": "Đường"
		}, {
			"id": 4048,
			"name": "Nguyễn Quý Đức",
			"pre": "Đường"
		}, {
			"id": 538,
			"name": "Nguyễn Quyền",
			"pre": "Đường"
		}, {
			"id": 1310,
			"name": "Nguyễn Tất Thành",
			"pre": "Đường"
		}, {
			"id": 7684,
			"name": "Nguyễn Thanh Năm",
			"pre": "Đường"
		}, {
			"id": 2377,
			"name": "Nguyễn Thế Lịch",
			"pre": "Đường"
		}, {
			"id": 6557,
			"name": "Nguyễn Thiếp",
			"pre": "Đường"
		}, {
			"id": 3429,
			"name": "Nguyễn Thuật",
			"pre": "Đường"
		}, {
			"id": 350,
			"name": "Nguyễn Thượng Hiền",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 1048,
			"name": "Nguyễn Trung Ngạn",
			"pre": "Đường"
		}, {
			"id": 6352,
			"name": "Nguyễn Văn Bổng",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 7139,
			"name": "Nguyễn Văn Giáp",
			"pre": "Đường"
		}, {
			"id": 648,
			"name": "Nguyễn Văn Huyên",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 5761,
			"name": "Nguyễn Văn Tạo",
			"pre": "Đường"
		}, {
			"id": 10706,
			"name": "Nguyễn Văn Tỵ",
			"pre": "Đường"
		}, {
			"id": 10576,
			"name": "Nguyễn Văn Xuân",
			"pre": "Đường"
		}, {
			"id": 6777,
			"name": "Nguyễn Xuân Hữu",
			"pre": "Đường"
		}, {
			"id": 9498,
			"name": "Nhân Hòa 1",
			"pre": "Đường"
		}, {
			"id": 9499,
			"name": "Nhân Hòa 2",
			"pre": "Đường"
		}, {
			"id": 9500,
			"name": "Nhân Hòa 3",
			"pre": "Đường"
		}, {
			"id": 9501,
			"name": "Nhân Hòa 4",
			"pre": "Đường"
		}, {
			"id": 9502,
			"name": "Nhân Hòa 5",
			"pre": "Đường"
		}, {
			"id": 9503,
			"name": "Nhân Hòa 6",
			"pre": "Đường"
		}, {
			"id": 9504,
			"name": "Nhân Hòa 7",
			"pre": "Đường"
		}, {
			"id": 4938,
			"name": "Nhất Chi Mai",
			"pre": "Đường"
		}, {
			"id": 7936,
			"name": "Nhơn Hòa 1",
			"pre": "Đường"
		}, {
			"id": 6273,
			"name": "Nhơn Hòa 3",
			"pre": "Đường"
		}, {
			"id": 8022,
			"name": "Nhơn Hòa 4",
			"pre": "Đường"
		}, {
			"id": 6109,
			"name": "Nhơn Hòa 5",
			"pre": "Đường"
		}, {
			"id": 6990,
			"name": "Nhơn Hòa 6",
			"pre": "Đường"
		}, {
			"id": 9068,
			"name": "Nhơn Hòa 7",
			"pre": "Đường"
		}, {
			"id": 9332,
			"name": "Nhơn Hoà 8",
			"pre": "Đường"
		}, {
			"id": 6185,
			"name": "Nhơn Hòa Phước",
			"pre": "Đường"
		}, {
			"id": 10169,
			"name": "Nhơn Hòa Phước 1",
			"pre": "Đường"
		}, {
			"id": 10170,
			"name": "Nhơn Hòa Phước 2",
			"pre": "Đường"
		}, {
			"id": 10171,
			"name": "Nhơn Hòa Phước 3",
			"pre": "Đường"
		}, {
			"id": 6587,
			"name": "Núi Một",
			"pre": "Đường"
		}, {
			"id": 3416,
			"name": "Ông Ích Đường",
			"pre": "Đường"
		}, {
			"id": 726,
			"name": "Ông Ích Khiêm",
			"pre": "Đường"
		}, {
			"id": 1045,
			"name": "Pasteur",
			"pre": "Đường"
		}, {
			"id": 4374,
			"name": "Phạm Bành",
			"pre": "Đường"
		}, {
			"id": 4232,
			"name": "Phạm Công Trứ",
			"pre": "Đường"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 2397,
			"name": "Phạm Phú Tiết",
			"pre": "Đường"
		}, {
			"id": 230,
			"name": "Phạm Sư Mạnh",
			"pre": "Phố"
		}, {
			"id": 1216,
			"name": "Phạm Thế Hiển",
			"pre": "Đường"
		}, {
			"id": 7564,
			"name": "Phạm Tứ",
			"pre": "Đường"
		}, {
			"id": 987,
			"name": "Phạm Viết Chánh",
			"pre": "Đường"
		}, {
			"id": 7218,
			"name": "Phạm Vinh",
			"pre": "Đường"
		}, {
			"id": 4127,
			"name": "Phan Anh",
			"pre": "Đường"
		}, {
			"id": 2534,
			"name": "Phan Châu Trinh",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 741,
			"name": "Phan Đăng Lưu",
			"pre": "Phố"
		}, {
			"id": 8253,
			"name": "Phan Khôi",
			"pre": "Đường"
		}, {
			"id": 10751,
			"name": "Phan Sỹ Trực",
			"pre": "Đường"
		}, {
			"id": 1489,
			"name": "Phan Tứ",
			"pre": "Đường"
		}, {
			"id": 3584,
			"name": "Phan Văn Đáng",
			"pre": "Đường"
		}, {
			"id": 382,
			"name": "Phan Văn Trị",
			"pre": "Đường"
		}, {
			"id": 7384,
			"name": "Phong Bắc 1",
			"pre": "Đường"
		}, {
			"id": 9917,
			"name": "Phong Bắc 10",
			"pre": "Đường"
		}, {
			"id": 9407,
			"name": "Phong Bắc 11",
			"pre": "Đường"
		}, {
			"id": 9918,
			"name": "Phong Bắc 12",
			"pre": "Đường"
		}, {
			"id": 9919,
			"name": "Phong Bắc 14",
			"pre": "Đường"
		}, {
			"id": 9920,
			"name": "Phong Bắc 15",
			"pre": "Đường"
		}, {
			"id": 9921,
			"name": "Phong Bắc 16",
			"pre": "Đường"
		}, {
			"id": 9922,
			"name": "Phong Bắc 17",
			"pre": "Đường"
		}, {
			"id": 9406,
			"name": "Phong Bắc 2",
			"pre": "Đường"
		}, {
			"id": 9093,
			"name": "Phong Bắc 4",
			"pre": "Đường"
		}, {
			"id": 7541,
			"name": "Phong Bắc 5",
			"pre": "Đường"
		}, {
			"id": 9916,
			"name": "Phong Bắc 6",
			"pre": "Đường"
		}, {
			"id": 6309,
			"name": "Phong Bắc 7",
			"pre": "Đường"
		}, {
			"id": 10346,
			"name": "Phong Bắc 8",
			"pre": "Đường"
		}, {
			"id": 8951,
			"name": "Phong Bắc 9",
			"pre": "Đường"
		}, {
			"id": 3082,
			"name": "Phù Đổng",
			"pre": "Đường"
		}, {
			"id": 6588,
			"name": "Phú Trung",
			"pre": "Đường"
		}, {
			"id": 8245,
			"name": "Phước Hòa",
			"pre": "Đường"
		}, {
			"id": 9912,
			"name": "Phước Hoà 1",
			"pre": "Đường"
		}, {
			"id": 9913,
			"name": "Phước Hoà 2",
			"pre": "Đường"
		}, {
			"id": 9914,
			"name": "Phước Hoà 3",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 6584,
			"name": "Tân Chánh Hiệp 2",
			"pre": "Đường"
		}, {
			"id": 6597,
			"name": "Tân Thới Hiệp 10",
			"pre": "Đường"
		}, {
			"id": 6725,
			"name": "Tế Hanh",
			"pre": "Đường"
		}, {
			"id": 7743,
			"name": "Thăng  Long",
			"pre": "Đường"
		}, {
			"id": 3442,
			"name": "Thanh Hóa",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 1171,
			"name": "Thành Thái",
			"pre": "Đường"
		}, {
			"id": 6590,
			"name": "Thạnh Xuân 13",
			"pre": "Đường"
		}, {
			"id": 6600,
			"name": "Thạnh Xuân 21",
			"pre": "Đường"
		}, {
			"id": 6585,
			"name": "Thích Bửu Đăng",
			"pre": "Đường"
		}, {
			"id": 8724,
			"name": "Thôi Hiệu",
			"pre": "Đường"
		}, {
			"id": 5828,
			"name": "Tiền Đức",
			"pre": "Đường"
		}, {
			"id": 2500,
			"name": "Tiên Sơn 16",
			"pre": "Đường"
		}, {
			"id": 3151,
			"name": "Tố Hữu",
			"pre": "Đường"
		}, {
			"id": 328,
			"name": "Tô Vĩnh Diện",
			"pre": "Đường"
		}, {
			"id": 1320,
			"name": "Tôn Đản",
			"pre": "Đường"
		}, {
			"id": 428,
			"name": "Tôn Đức Thắng",
			"pre": "Phố"
		}, {
			"id": 675,
			"name": "Tôn Thất Thuyết",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 544,
			"name": "Trần Cao Vân",
			"pre": "Đường"
		}, {
			"id": 7476,
			"name": "Trần Đình Long",
			"pre": "Đường"
		}, {
			"id": 8193,
			"name": "Trần Huấn",
			"pre": "Đường"
		}, {
			"id": 8914,
			"name": "Trần Hữu Duẩn",
			"pre": "Đường"
		}, {
			"id": 743,
			"name": "Trần Huy Liệu",
			"pre": "Đường"
		}, {
			"id": 9248,
			"name": "Trần Kim Bảng",
			"pre": "Đường"
		}, {
			"id": 3874,
			"name": "Trần Lê",
			"pre": "Đường"
		}, {
			"id": 4169,
			"name": "Trần Lưu",
			"pre": "Đường"
		}, {
			"id": 10520,
			"name": "Trần Lựu",
			"pre": "Đường"
		}, {
			"id": 4974,
			"name": "Trần Mai Ninh",
			"pre": "Đường"
		}, {
			"id": 8336,
			"name": "Trần Nam Trung",
			"pre": "Đường"
		}, {
			"id": 5999,
			"name": "Trần Phước Thành",
			"pre": "Đường"
		}, {
			"id": 6593,
			"name": "Trần Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 3086,
			"name": "Trần Quốc Thảo",
			"pre": "Đường"
		}, {
			"id": 219,
			"name": "Trần Quốc Toản",
			"pre": "Đường"
		}, {
			"id": 8398,
			"name": "Trần Quý Hai",
			"pre": "Đường"
		}, {
			"id": 6391,
			"name": "Trần Tấn Mới",
			"pre": "Đường"
		}, {
			"id": 452,
			"name": "Trần Thủ Độ",
			"pre": "Đường"
		}, {
			"id": 654,
			"name": "Trần Tử Bình",
			"pre": "Phố"
		}, {
			"id": 3183,
			"name": "Trần Văn Cẩn",
			"pre": "Đường"
		}, {
			"id": 3320,
			"name": "Trần Văn Đang",
			"pre": "Đường"
		}, {
			"id": 1486,
			"name": "Trần Văn Dư",
			"pre": "Đường"
		}, {
			"id": 4370,
			"name": "Trần Văn Giàu",
			"pre": "Đường"
		}, {
			"id": 1788,
			"name": "Trần Văn Ơn",
			"pre": "Đường"
		}, {
			"id": 2468,
			"name": "Trần Văn Trà",
			"pre": "Đường"
		}, {
			"id": 10897,
			"name": "Trần Viện",
			"pre": "Đường"
		}, {
			"id": 510,
			"name": "Trần Xuân Soạn",
			"pre": "Phố"
		}, {
			"id": 6595,
			"name": "Trích Sài",
			"pre": "Đường"
		}, {
			"id": 137,
			"name": "Triệu Quốc Đạt",
			"pre": "Đường"
		}, {
			"id": 2393,
			"name": "Trịnh Đình Thảo",
			"pre": "Đường"
		}, {
			"id": 390,
			"name": "Trịnh Hoài Đức",
			"pre": "Đường"
		}, {
			"id": 5149,
			"name": "Trịnh Khả",
			"pre": "Đường"
		}, {
			"id": 2375,
			"name": "Trừ Văn Thố",
			"pre": "Đường"
		}, {
			"id": 8705,
			"name": "Trung Lương 2",
			"pre": "Đường"
		}, {
			"id": 8881,
			"name": "Trung Lương 3",
			"pre": "Đường"
		}, {
			"id": 9894,
			"name": "Trung Lương 4",
			"pre": "Đường"
		}, {
			"id": 8784,
			"name": "Trung Lương 5",
			"pre": "Đường"
		}, {
			"id": 9895,
			"name": "Trung Lương 6",
			"pre": "Đường"
		}, {
			"id": 9896,
			"name": "Trung Lương 7",
			"pre": "Đường"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 3428,
			"name": "Trương Quang Giao",
			"pre": "Đường"
		}, {
			"id": 1094,
			"name": "Trường Sơn",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 5143,
			"name": "Tú Mỡ",
			"pre": "Đường"
		}, {
			"id": 9511,
			"name": "Tùng Lâm 1",
			"pre": "Đường"
		}, {
			"id": 9519,
			"name": "Tùng Lâm 10",
			"pre": "Đường"
		}, {
			"id": 9512,
			"name": "Tùng Lâm 2",
			"pre": "Đường"
		}, {
			"id": 9513,
			"name": "Tùng Lâm 3",
			"pre": "Đường"
		}, {
			"id": 9514,
			"name": "Tùng Lâm 4",
			"pre": "Đường"
		}, {
			"id": 9515,
			"name": "Tùng Lâm 5",
			"pre": "Đường"
		}, {
			"id": 9516,
			"name": "Tùng Lâm 6",
			"pre": "Đường"
		}, {
			"id": 9517,
			"name": "Tùng Lâm 7",
			"pre": "Đường"
		}, {
			"id": 9419,
			"name": "Tùng Lâm 8",
			"pre": "Đường"
		}, {
			"id": 9518,
			"name": "Tùng Lâm 9",
			"pre": "Đường"
		}, {
			"id": 6179,
			"name": "Văn Cận",
			"pre": "Đường"
		}, {
			"id": 3245,
			"name": "Văn Tiến Dũng",
			"pre": "Đường"
		}, {
			"id": 10823,
			"name": "Võ An Ninh",
			"pre": "Đường"
		}, {
			"id": 7021,
			"name": "Võ Chí Công",
			"pre": "Đường"
		}, {
			"id": 6577,
			"name": "Võ Quảng",
			"pre": "Đường"
		}, {
			"id": 10795,
			"name": "Võ Sạ",
			"pre": "Đường"
		}, {
			"id": 7326,
			"name": "Vũ Miên",
			"pre": "Đường"
		}, {
			"id": 6053,
			"name": "Vũ Quỳnh",
			"pre": "Đường"
		}, {
			"id": 3696,
			"name": "Vũ Tông Phan",
			"pre": "Phố"
		}, {
			"id": 6349,
			"name": "Vũ Trọng Hoàng",
			"pre": "Đường"
		}, {
			"id": 6586,
			"name": "Xa La",
			"pre": "Đường"
		}, {
			"id": 2070,
			"name": "Xô Viết Nghệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 602,
			"name": "Xuân Thủy",
			"pre": "Đường"
		}, {
			"id": 736,
			"name": "Yên Thế",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1892,
			"name": "An Phát",
			"lat": 16.046628952026367,
			"lng": 108.17892456054687,
			"cats": [40]
		}, {
			"id": 1331,
			"name": "C.T Plaza Đà Nẵng",
			"lat": 16.042720794677734,
			"lng": 108.19351196289063,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}, {
			"id": 2295,
			"name": "Đầu trục Tây Bắc",
			"lat": 16.051267623901367,
			"lng": 108.17890167236328,
			"cats": []
		}, {
			"id": 1196,
			"name": "Dream Home",
			"lat": 16.020612716674805,
			"lng": 108.22982788085937,
			"cats": [40, 44, 325]
		}, {
			"id": 1573,
			"name": "Green Lake",
			"lat": 16.016263961791992,
			"lng": 108.19576263427734,
			"cats": [40, 41, 51, 52, 163, 325]
		}, {
			"id": 2379,
			"name": "Hòa An Residence",
			"lat": 16.059719085693359,
			"lng": 108.17889404296875,
			"cats": []
		}, {
			"id": 2314,
			"name": "KĐT Hòa Xuân mở rộng",
			"lat": 16.018306732177734,
			"lng": 108.22174835205078,
			"cats": []
		}, {
			"id": 2234,
			"name": "Khu quân nhân 309",
			"lat": 16.034847259521484,
			"lng": 108.17948913574219,
			"cats": [40, 48, 283, 325, 361]
		}, {
			"id": 1360,
			"name": "Nam cầu Nguyễn Tri Phương",
			"lat": 16.008123397827148,
			"lng": 108.21940612792969,
			"cats": [40, 44, 48, 59, 325]
		}, {
			"id": 1260,
			"name": "Phước Lý",
			"lat": 16.043216705322266,
			"lng": 108.16985321044922,
			"cats": [40, 48, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 2210,
			"name": "Thăng Long Riverside",
			"lat": 16.006296157836914,
			"lng": 108.19923400878906,
			"cats": [40, 283, 325, 361]
		}, {
			"id": 1496,
			"name": "The Sun City Ecoisland",
			"lat": 16.020698547363281,
			"lng": 108.22966003417969,
			"cats": [40, 44, 48, 52, 55, 59, 325]
		}, {
			"id": 1770,
			"name": "Yên Thế Bắc Sơn",
			"lat": 16.049835205078125,
			"lng": 108.17946624755859,
			"cats": [40, 324, 325, 326]
		}]
	}, {
		"id": 46,
		"name": "Hải Châu",
		"pre": "Quận",
		"ward": [{
			"id": 238,
			"name": " Hải Châu I",
			"pre": "Phường"
		}, {
			"id": 243,
			"name": " Hòa Thuận Đông",
			"pre": "Phường"
		}, {
			"id": 248,
			"name": "Bình Hiên",
			"pre": "Phường"
		}, {
			"id": 247,
			"name": "Bình Thuận",
			"pre": "Phường"
		}, {
			"id": 239,
			"name": "Hải Châu II",
			"pre": "Phường"
		}, {
			"id": 249,
			"name": "Hòa Cường Bắc",
			"pre": "Phường"
		}, {
			"id": 250,
			"name": "Hòa Cường Nam",
			"pre": "Phường"
		}, {
			"id": 244,
			"name": "Hòa Thuận Tây",
			"pre": "Phường"
		}, {
			"id": 245,
			"name": "Nam Dương",
			"pre": "Phường"
		}, {
			"id": 246,
			"name": "Phước Ninh",
			"pre": "Phường"
		}, {
			"id": 240,
			"name": "Thạch Thang",
			"pre": "Phường"
		}, {
			"id": 241,
			"name": "Thanh Bình",
			"pre": "Phường"
		}, {
			"id": 242,
			"name": "Thuận Phước",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3919,
			"name": "2/9",
			"pre": "Đường"
		}, {
			"id": 6453,
			"name": "21E",
			"pre": "Đường"
		}, {
			"id": 2773,
			"name": "22",
			"pre": "Đường"
		}, {
			"id": 1000,
			"name": "3/2",
			"pre": "Đường"
		}, {
			"id": 1718,
			"name": "30/4",
			"pre": "Đường"
		}, {
			"id": 1218,
			"name": "Ba Đình",
			"pre": "Đường"
		}, {
			"id": 800,
			"name": "Bà Huyện Thanh Quan",
			"pre": "Phố"
		}, {
			"id": 6330,
			"name": "Bắc Đẩu",
			"pre": "Đường"
		}, {
			"id": 527,
			"name": "Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 8621,
			"name": "Bàu Hạc 2",
			"pre": "Đường"
		}, {
			"id": 5887,
			"name": "Bầu Hạc 5",
			"pre": "Đường"
		}, {
			"id": 7756,
			"name": "Bàu Tràm",
			"pre": "Đường"
		}, {
			"id": 6722,
			"name": "Bàu Tràm 2",
			"pre": "Đường"
		}, {
			"id": 2399,
			"name": "Bàu Tràm Trung",
			"pre": "Đường"
		}, {
			"id": 6787,
			"name": "Bầu Trảng 2",
			"pre": "Đường"
		}, {
			"id": 7044,
			"name": "Bình An 1",
			"pre": "Đường"
		}, {
			"id": 8690,
			"name": "Bình An 2",
			"pre": "Đường"
		}, {
			"id": 8523,
			"name": "Bình An 3",
			"pre": "Đường"
		}, {
			"id": 9263,
			"name": "Bình An 4",
			"pre": "Đường"
		}, {
			"id": 8178,
			"name": "Bình An 6",
			"pre": "Đường"
		}, {
			"id": 6552,
			"name": "Bình Minh",
			"pre": "Đường"
		}, {
			"id": 7198,
			"name": "Bình Minh 1",
			"pre": "Đường"
		}, {
			"id": 8147,
			"name": "Bình Minh 2",
			"pre": "Đường"
		}, {
			"id": 6028,
			"name": "Bình Minh 3",
			"pre": "Đường"
		}, {
			"id": 1932,
			"name": "Bùi Kỷ",
			"pre": "Đường"
		}, {
			"id": 844,
			"name": "Bùi Viện",
			"pre": "Đường"
		}, {
			"id": 1955,
			"name": "Bùi Xuân Phái",
			"pre": "Đường"
		}, {
			"id": 1956,
			"name": "Ca Văn Thỉnh",
			"pre": "Đường"
		}, {
			"id": 1958,
			"name": "Cầm Bá Thước",
			"pre": "Đường"
		}, {
			"id": 346,
			"name": "Cao Thắng",
			"pre": "Đường"
		}, {
			"id": 2005,
			"name": "Cao Xuân Dục",
			"pre": "Đường"
		}, {
			"id": 2006,
			"name": "Cao Xuân Huy",
			"pre": "Đường"
		}, {
			"id": 1532,
			"name": "Châu Thị Vĩnh Tế",
			"pre": "Đường"
		}, {
			"id": 2007,
			"name": "Châu Thượng Văn",
			"pre": "Đường"
		}, {
			"id": 1646,
			"name": "Châu Văn Liêm",
			"pre": "Đường"
		}, {
			"id": 2208,
			"name": "Chi Lăng",
			"pre": "Đường"
		}, {
			"id": 2011,
			"name": "Chu Mạnh Trinh",
			"pre": "Đường"
		}, {
			"id": 802,
			"name": "Chu Văn An",
			"pre": "Đường"
		}, {
			"id": 2013,
			"name": "Cô Bắc",
			"pre": "Đường"
		}, {
			"id": 2014,
			"name": "Cô Giang",
			"pre": "Đường"
		}, {
			"id": 5687,
			"name": "Đại lộ Thăng Long",
			"pre": "Đường"
		}, {
			"id": 8789,
			"name": "Đầm Rong 2",
			"pre": "Đường"
		}, {
			"id": 782,
			"name": "Đặng Thai Mai",
			"pre": "Đường"
		}, {
			"id": 2100,
			"name": "Đặng Thùy Trâm",
			"pre": "Đường"
		}, {
			"id": 2101,
			"name": "Đặng Tử Kính",
			"pre": "Đường"
		}, {
			"id": 2112,
			"name": "Đào Cam Mộc",
			"pre": "Đường"
		}, {
			"id": 402,
			"name": "Đào Duy Anh",
			"pre": "Đường"
		}, {
			"id": 1096,
			"name": "Đào Duy Từ",
			"pre": "Đường"
		}, {
			"id": 1198,
			"name": "Đào Tấn",
			"pre": "Đường"
		}, {
			"id": 5715,
			"name": "Đào Trí",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 99,
			"name": "Đinh Công Tráng",
			"pre": "Đường"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 5615,
			"name": "Đỗ Quang",
			"pre": "Phố"
		}, {
			"id": 7866,
			"name": "Đỗ Xuân Cát",
			"pre": "Đường"
		}, {
			"id": 8318,
			"name": "Đoàn Quý Phi",
			"pre": "Đường"
		}, {
			"id": 439,
			"name": "Đoàn Thị Điểm",
			"pre": "Đường"
		}, {
			"id": 805,
			"name": "Đốc Ngữ",
			"pre": "Phố"
		}, {
			"id": 1652,
			"name": "Đống Đa",
			"pre": "Đường"
		}, {
			"id": 6239,
			"name": "Đức Lợi 2",
			"pre": "Đường"
		}, {
			"id": 9188,
			"name": "Đức Lợi 3",
			"pre": "Đường"
		}, {
			"id": 7480,
			"name": "Đức Lợi I",
			"pre": "Đường"
		}, {
			"id": 1203,
			"name": "Dương Bá Trạc",
			"pre": "Đường"
		}, {
			"id": 2026,
			"name": "Dương Thạc",
			"pre": "Đường"
		}, {
			"id": 2025,
			"name": "Dương Thanh",
			"pre": "Đường"
		}, {
			"id": 2024,
			"name": "Dương Thưởng",
			"pre": "Đường"
		}, {
			"id": 573,
			"name": "Duy Tân",
			"pre": "Đường"
		}, {
			"id": 776,
			"name": "Giang Văn Minh",
			"pre": "Đường"
		}, {
			"id": 6613,
			"name": "Hà Bá Tường",
			"pre": "Đường"
		}, {
			"id": 1324,
			"name": "Hà Huy Giáp",
			"pre": "Đường"
		}, {
			"id": 755,
			"name": "Hà Huy Tập",
			"pre": "Đường"
		}, {
			"id": 6055,
			"name": "Hải Hồ",
			"pre": "Đường"
		}, {
			"id": 2854,
			"name": "Hải Phòng",
			"pre": "Đường"
		}, {
			"id": 2858,
			"name": "Hải Sơn",
			"pre": "Đường"
		}, {
			"id": 891,
			"name": "Hàm Nghi",
			"pre": "Đường"
		}, {
			"id": 2589,
			"name": "Hàn Mặc Tử",
			"pre": "Đường"
		}, {
			"id": 939,
			"name": "Hàn Thuyên",
			"pre": "Đường"
		}, {
			"id": 3361,
			"name": "Hồ Biểu Chánh",
			"pre": "Đường"
		}, {
			"id": 2133,
			"name": "Hồ Nghinh",
			"pre": "Đường"
		}, {
			"id": 3360,
			"name": "Hồ Nguyên Trừng",
			"pre": "Đường"
		}, {
			"id": 6614,
			"name": "Hồ Tông Thốc",
			"pre": "Đường"
		}, {
			"id": 6434,
			"name": "Hóa Sơn 1",
			"pre": "Đường"
		}, {
			"id": 6308,
			"name": "Hóa Sơn 2",
			"pre": "Đường"
		}, {
			"id": 6452,
			"name": "Hóa Sơn 3",
			"pre": "Đường"
		}, {
			"id": 7306,
			"name": "Hóa Sơn 4",
			"pre": "Đường"
		}, {
			"id": 7696,
			"name": "Hóa Sơn 6",
			"pre": "Đường"
		}, {
			"id": 6252,
			"name": "Hoàn Văn Thủ",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 6480,
			"name": "Hoàng Thúc Trâm",
			"pre": "Đường"
		}, {
			"id": 436,
			"name": "Hoàng Tích Trí",
			"pre": "Phố"
		}, {
			"id": 337,
			"name": "Hoàng Văn Thụ",
			"pre": "Đường"
		}, {
			"id": 3283,
			"name": "Hoàng Xuân Nhị",
			"pre": "Đường"
		}, {
			"id": 4903,
			"name": "Hưng Hóa",
			"pre": "Đường"
		}, {
			"id": 9405,
			"name": "Hưng Hoá 1",
			"pre": "Đường"
		}, {
			"id": 7859,
			"name": "Hưng Hoá 2",
			"pre": "Đường"
		}, {
			"id": 9846,
			"name": "Hưng Hóa 3",
			"pre": "Đường"
		}, {
			"id": 8665,
			"name": "Hưng Hóa 4",
			"pre": "Đường"
		}, {
			"id": 9938,
			"name": "Hưng Hoá 5",
			"pre": "Đường"
		}, {
			"id": 9939,
			"name": "Hưng Hoá 7",
			"pre": "Đường"
		}, {
			"id": 8196,
			"name": "Hưng Hóa 7",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 6491,
			"name": "Huy Cận",
			"pre": "Đường"
		}, {
			"id": 3443,
			"name": "Huỳnh Lý",
			"pre": "Đường"
		}, {
			"id": 1283,
			"name": "Huỳnh Mẫn Đạt",
			"pre": "Đường"
		}, {
			"id": 2357,
			"name": "Huỳnh Ngọc Huệ",
			"pre": "Đường"
		}, {
			"id": 3010,
			"name": "Huỳnh Tấn Phát",
			"pre": "Đường"
		}, {
			"id": 78,
			"name": "Huỳnh Thúc Kháng",
			"pre": "Đường"
		}, {
			"id": 6910,
			"name": "Ka Văn Thịnh",
			"pre": "Đường"
		}, {
			"id": 1068,
			"name": "Lê Anh Xuân",
			"pre": "Đường"
		}, {
			"id": 3425,
			"name": "Lê Bá Trinh",
			"pre": "Đường"
		}, {
			"id": 3415,
			"name": "Lê Cơ",
			"pre": "Đường"
		}, {
			"id": 9349,
			"name": "Lê Đại",
			"pre": "Đường"
		}, {
			"id": 1055,
			"name": "Lê Đại Hành",
			"pre": "Đường"
		}, {
			"id": 3445,
			"name": "Lê Đình Dương",
			"pre": "Đường"
		}, {
			"id": 5890,
			"name": "Lê Đình Duy",
			"pre": "Đường"
		}, {
			"id": 5949,
			"name": "Lê Đình Lý",
			"pre": "Đường"
		}, {
			"id": 3293,
			"name": "Lê Đình Thám",
			"pre": "Đường"
		}, {
			"id": 89,
			"name": "Lê Duẩn",
			"pre": "Đường"
		}, {
			"id": 2383,
			"name": "Lê Duy Lương",
			"pre": "Đường"
		}, {
			"id": 361,
			"name": "Lê Hồng Phong",
			"pre": "Đường"
		}, {
			"id": 6437,
			"name": "Lê khắc Cần",
			"pre": "Đường"
		}, {
			"id": 4341,
			"name": "Lê Khôi",
			"pre": "Đường"
		}, {
			"id": 115,
			"name": "Lê Lai",
			"pre": "Đường"
		}, {
			"id": 338,
			"name": "Lê Lợi",
			"pre": "Đường"
		}, {
			"id": 3323,
			"name": "Lê Ngô Cát",
			"pre": "Đường"
		}, {
			"id": 6635,
			"name": "Lê Nổ",
			"pre": "Đường"
		}, {
			"id": 155,
			"name": "Lê Phụng Hiểu",
			"pre": "Phố"
		}, {
			"id": 348,
			"name": "Lê Quý Đôn",
			"pre": "Đường"
		}, {
			"id": 2821,
			"name": "Lê Sát",
			"pre": "Đường"
		}, {
			"id": 2249,
			"name": "Lê Thanh Nghị",
			"pre": "Đường"
		}, {
			"id": 895,
			"name": "Lê Thánh Tôn",
			"pre": "Đường"
		}, {
			"id": 935,
			"name": "Lê Thị Hồng Gấm",
			"pre": "Đường"
		}, {
			"id": 7120,
			"name": "Lê Văn Đức",
			"pre": "Đường"
		}, {
			"id": 1480,
			"name": "Lê Văn Hiến",
			"pre": "Đường"
		}, {
			"id": 6991,
			"name": "Lê Văn Long",
			"pre": "Đường"
		}, {
			"id": 3427,
			"name": "Lê Vĩnh Huy",
			"pre": "Đường"
		}, {
			"id": 204,
			"name": "Lương Ngọc Quyến",
			"pre": "Đường"
		}, {
			"id": 1154,
			"name": "Lương Nhữ Học",
			"pre": "Đường"
		}, {
			"id": 8053,
			"name": "Lương Nhữ Hộc",
			"pre": "Đường"
		}, {
			"id": 1258,
			"name": "Lưu Quý Kỳ",
			"pre": "Đường"
		}, {
			"id": 3026,
			"name": "Lưu Trọng Lư",
			"pre": "Đường"
		}, {
			"id": 1608,
			"name": "Lý Nhân Tông",
			"pre": "Đường"
		}, {
			"id": 237,
			"name": "Lý Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 4147,
			"name": "Lý Thái Tông",
			"pre": "Đường"
		}, {
			"id": 119,
			"name": "Lý Thường Kiệt",
			"pre": "Phố"
		}, {
			"id": 362,
			"name": "Lý Tự Trọng",
			"pre": "Đường"
		}, {
			"id": 933,
			"name": "Mạc Đĩnh Chi",
			"pre": "Đường"
		}, {
			"id": 536,
			"name": "Mạc Thị Bưởi",
			"pre": "Phố"
		}, {
			"id": 7006,
			"name": "Mai Am",
			"pre": "Đường"
		}, {
			"id": 7291,
			"name": "Mai Dị",
			"pre": "Đường"
		}, {
			"id": 4022,
			"name": "Mai Lão Bạng",
			"pre": "Đường"
		}, {
			"id": 5950,
			"name": "Man Thiện",
			"pre": "Đường"
		}, {
			"id": 6396,
			"name": "Mỹ An 7",
			"pre": "Đường"
		}, {
			"id": 6819,
			"name": "Nam Sơn",
			"pre": "Đường"
		}, {
			"id": 10246,
			"name": "Nam Sơn 1",
			"pre": "Đường"
		}, {
			"id": 10247,
			"name": "Nam Sơn 2",
			"pre": "Đường"
		}, {
			"id": 9282,
			"name": "Nam Sơn 3",
			"pre": "Đường"
		}, {
			"id": 10248,
			"name": "Nam Sơn 4",
			"pre": "Đường"
		}, {
			"id": 7380,
			"name": "Nam Sơn 5",
			"pre": "Đường"
		}, {
			"id": 6394,
			"name": "Ngô Chi Lan",
			"pre": "Đường"
		}, {
			"id": 285,
			"name": "Ngô Gia Tự",
			"pre": "Đường"
		}, {
			"id": 395,
			"name": "Ngô Tất Tố",
			"pre": "Đường"
		}, {
			"id": 3909,
			"name": "Ngô Thế Vinh",
			"pre": "Đường"
		}, {
			"id": 5885,
			"name": "Ngô Thị Liễu",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 1040,
			"name": "Nguyễn Bá Học",
			"pre": "Đường"
		}, {
			"id": 740,
			"name": "Nguyễn Bình",
			"pre": "Đường"
		}, {
			"id": 70,
			"name": "Nguyễn Chí Thanh",
			"pre": "Đường"
		}, {
			"id": 1056,
			"name": "Nguyễn Cư Trinh",
			"pre": "Đường"
		}, {
			"id": 2398,
			"name": "Nguyễn Đăng Đạo",
			"pre": "Đường"
		}, {
			"id": 6354,
			"name": "Nguyễn Đôn Tiết",
			"pre": "Đường"
		}, {
			"id": 3700,
			"name": "Nguyễn Đổng Chi",
			"pre": "Phố"
		}, {
			"id": 149,
			"name": "Nguyễn Du",
			"pre": "Đường"
		}, {
			"id": 6347,
			"name": "Nguyễn Dữ",
			"pre": "Đường"
		}, {
			"id": 479,
			"name": "Nguyễn Đức Cảnh",
			"pre": "Đường"
		}, {
			"id": 6254,
			"name": "Nguyễn Đức Trung",
			"pre": "Đường"
		}, {
			"id": 208,
			"name": "Nguyễn Gia Thiều",
			"pre": "Đường"
		}, {
			"id": 3476,
			"name": "Nguyễn Hoàng",
			"pre": "Đường"
		}, {
			"id": 2656,
			"name": "Nguyễn Hữu Cảnh",
			"pre": "Đường"
		}, {
			"id": 3225,
			"name": "Nguyễn Hữu Dật",
			"pre": "Đường"
		}, {
			"id": 458,
			"name": "Nguyễn Hữu Thọ",
			"pre": "Đường"
		}, {
			"id": 617,
			"name": "Nguyễn Khánh Toàn",
			"pre": "Đường"
		}, {
			"id": 468,
			"name": "Nguyễn Khoái",
			"pre": "Đường"
		}, {
			"id": 3291,
			"name": "Nguyễn Lộ Trạch",
			"pre": "Đường"
		}, {
			"id": 6327,
			"name": "Nguyễn Phẩm",
			"pre": "Đường"
		}, {
			"id": 980,
			"name": "Nguyễn Phi Khanh",
			"pre": "Đường"
		}, {
			"id": 681,
			"name": "Nguyễn Phong Sắc",
			"pre": "Đường"
		}, {
			"id": 209,
			"name": "Nguyễn Quang Bích",
			"pre": "Đường"
		}, {
			"id": 294,
			"name": "Nguyễn Sơn",
			"pre": "Đường"
		}, {
			"id": 3324,
			"name": "Nguyễn Sơn Hà",
			"pre": "Đường"
		}, {
			"id": 8971,
			"name": "Nguyễn Sơn Trà",
			"pre": "Đường"
		}, {
			"id": 3288,
			"name": "Nguyễn Súy",
			"pre": "Đường"
		}, {
			"id": 1310,
			"name": "Nguyễn Tất Thành",
			"pre": "Đường"
		}, {
			"id": 123,
			"name": "Nguyễn Thái Học",
			"pre": "Đường"
		}, {
			"id": 5870,
			"name": "Nguyễn Thành Hãn",
			"pre": "Đường"
		}, {
			"id": 981,
			"name": "Nguyễn Thành Ý",
			"pre": "Đường"
		}, {
			"id": 1275,
			"name": "Nguyễn Thi",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 147,
			"name": "Nguyễn Thiện Thuật",
			"pre": "Phố"
		}, {
			"id": 6663,
			"name": "Nguyễn Trác",
			"pre": "Đường"
		}, {
			"id": 5823,
			"name": "Nguyễn Trác Luân",
			"pre": "Đường"
		}, {
			"id": 65,
			"name": "Nguyễn Trãi",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 6287,
			"name": "Nguyễn Trừng",
			"pre": "Đường"
		}, {
			"id": 752,
			"name": "Nguyễn Trường Tộ",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 985,
			"name": "Nguyễn Văn Thủ",
			"pre": "Đường"
		}, {
			"id": 124,
			"name": "Nguyễn Văn Tố",
			"pre": "Phố"
		}, {
			"id": 3432,
			"name": "Nguyễn Xuân Nhĩ",
			"pre": "Đường"
		}, {
			"id": 4111,
			"name": "Nguyễn Xuân Ôn",
			"pre": "Đường"
		}, {
			"id": 6058,
			"name": "Như Nguyệt",
			"pre": "Đường"
		}, {
			"id": 2659,
			"name": "Nơ Trang Long",
			"pre": "Đường"
		}, {
			"id": 4947,
			"name": "Núi Thành",
			"pre": "Đường"
		}, {
			"id": 10959,
			"name": "Ông Cao Thắng",
			"pre": "Đường"
		}, {
			"id": 726,
			"name": "Ông Ích Khiêm",
			"pre": "Đường"
		}, {
			"id": 5662,
			"name": "Ông Ích Khiên",
			"pre": "Đường"
		}, {
			"id": 1045,
			"name": "Pasteur",
			"pre": "Đường"
		}, {
			"id": 751,
			"name": "Phạm Hồng Thái",
			"pre": "Đường"
		}, {
			"id": 416,
			"name": "Phạm Ngọc Thạch",
			"pre": "Đường"
		}, {
			"id": 212,
			"name": "Phạm Ngũ Lão",
			"pre": "Đường"
		}, {
			"id": 6639,
			"name": "Phạm Như Sương",
			"pre": "Đường"
		}, {
			"id": 1664,
			"name": "Phạm Phú Thứ",
			"pre": "Đường"
		}, {
			"id": 2397,
			"name": "Phạm Phú Tiết",
			"pre": "Đường"
		}, {
			"id": 1216,
			"name": "Phạm Thế Hiển",
			"pre": "Đường"
		}, {
			"id": 827,
			"name": "Phạm Văn Bạch",
			"pre": "Đường"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 2664,
			"name": "Phạm Văn Nghị",
			"pre": "Đường"
		}, {
			"id": 4127,
			"name": "Phan Anh",
			"pre": "Đường"
		}, {
			"id": 126,
			"name": "Phan Bội Châu",
			"pre": "Đường"
		}, {
			"id": 10709,
			"name": "Phan Cảnh Phúc",
			"pre": "Đường"
		}, {
			"id": 2534,
			"name": "Phan Châu Trinh",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 741,
			"name": "Phan Đăng Lưu",
			"pre": "Phố"
		}, {
			"id": 6679,
			"name": "Phan Đình",
			"pre": "Đường"
		}, {
			"id": 213,
			"name": "Phan Đình Phùng",
			"pre": "Đường"
		}, {
			"id": 6830,
			"name": "Phan Huy Ôn",
			"pre": "Đường"
		}, {
			"id": 749,
			"name": "Phan Kế Bính",
			"pre": "Đường"
		}, {
			"id": 8511,
			"name": "Phần Lăng 14",
			"pre": "Đường"
		}, {
			"id": 8512,
			"name": "Phần Lăng 15",
			"pre": "Đường"
		}, {
			"id": 8527,
			"name": "Phần Lăng 16",
			"pre": "Đường"
		}, {
			"id": 7279,
			"name": "Phần Lăng 17",
			"pre": "Đường"
		}, {
			"id": 8017,
			"name": "Phần Lăng 18",
			"pre": "Đường"
		}, {
			"id": 9356,
			"name": "Phần Lăng 19",
			"pre": "Đường"
		}, {
			"id": 5857,
			"name": "Phan Thanh",
			"pre": "Đường"
		}, {
			"id": 6111,
			"name": "Phan Thành Tài",
			"pre": "Đường"
		}, {
			"id": 718,
			"name": "Phan Trọng Tuệ",
			"pre": "Đường"
		}, {
			"id": 366,
			"name": "Quang Trung",
			"pre": "Đường"
		}, {
			"id": 227,
			"name": "Tạ Hiện",
			"pre": "Đường"
		}, {
			"id": 5101,
			"name": "Tân An",
			"pre": "Đường"
		}, {
			"id": 2413,
			"name": "Tân An 1",
			"pre": "Đường"
		}, {
			"id": 2414,
			"name": "Tân An 2",
			"pre": "Đường"
		}, {
			"id": 2415,
			"name": "Tân An 3",
			"pre": "Đường"
		}, {
			"id": 2416,
			"name": "Tân An 4",
			"pre": "Đường"
		}, {
			"id": 5845,
			"name": "Tân Lập 1",
			"pre": "Đường"
		}, {
			"id": 6895,
			"name": "Tân Lập 2",
			"pre": "Đường"
		}, {
			"id": 1184,
			"name": "Tăng Bạt Hổ",
			"pre": "Đường"
		}, {
			"id": 514,
			"name": "Thái Phiên",
			"pre": "Đường"
		}, {
			"id": 6027,
			"name": "Thân Cảnh Phúc",
			"pre": "Đường"
		}, {
			"id": 7743,
			"name": "Thăng  Long",
			"pre": "Đường"
		}, {
			"id": 2428,
			"name": "Thanh Duyên",
			"pre": "Đường"
		}, {
			"id": 2429,
			"name": "Thanh Hải",
			"pre": "Đường"
		}, {
			"id": 2432,
			"name": "Thanh Huy 3",
			"pre": "Đường"
		}, {
			"id": 2435,
			"name": "Thanh Long",
			"pre": "Đường"
		}, {
			"id": 2436,
			"name": "Thanh Sơn",
			"pre": "Đường"
		}, {
			"id": 2437,
			"name": "Thanh Thủy",
			"pre": "Đường"
		}, {
			"id": 500,
			"name": "Thi Sách",
			"pre": "Phố"
		}, {
			"id": 2438,
			"name": "Thuận An 1",
			"pre": "Đường"
		}, {
			"id": 3109,
			"name": "Tiên Sơn",
			"pre": "Đường"
		}, {
			"id": 2473,
			"name": "Tiên Sơn 1",
			"pre": "Đường"
		}, {
			"id": 2492,
			"name": "Tiên Sơn 10",
			"pre": "Đường"
		}, {
			"id": 2493,
			"name": "Tiên Sơn 11",
			"pre": "Đường"
		}, {
			"id": 2494,
			"name": "Tiên Sơn 12",
			"pre": "Đường"
		}, {
			"id": 2496,
			"name": "Tiên Sơn 14",
			"pre": "Đường"
		}, {
			"id": 2501,
			"name": "Tiên Sơn 17",
			"pre": "Đường"
		}, {
			"id": 2481,
			"name": "Tiên Sơn 2",
			"pre": "Đường"
		}, {
			"id": 2505,
			"name": "Tiên Sơn 20",
			"pre": "Đường"
		}, {
			"id": 2482,
			"name": "Tiên Sơn 3",
			"pre": "Đường"
		}, {
			"id": 2483,
			"name": "Tiên Sơn 4",
			"pre": "Đường"
		}, {
			"id": 2484,
			"name": "Tiên Sơn 5",
			"pre": "Đường"
		}, {
			"id": 2486,
			"name": "Tiên Sơn 6",
			"pre": "Đường"
		}, {
			"id": 2487,
			"name": "Tiên Sơn 7",
			"pre": "Đường"
		}, {
			"id": 2488,
			"name": "Tiên Sơn 8",
			"pre": "Đường"
		}, {
			"id": 2489,
			"name": "Tiên Sơn 9",
			"pre": "Đường"
		}, {
			"id": 3449,
			"name": "Tiểu La",
			"pre": "Đường"
		}, {
			"id": 3151,
			"name": "Tố Hữu",
			"pre": "Đường"
		}, {
			"id": 1009,
			"name": "Tôn Thất Đạm",
			"pre": "Đường"
		}, {
			"id": 5666,
			"name": "Tống Phước Phổ",
			"pre": "Đường"
		}, {
			"id": 512,
			"name": "Trần Bình Trọng",
			"pre": "Đường"
		}, {
			"id": 3747,
			"name": "Trần Can",
			"pre": "Đường"
		}, {
			"id": 544,
			"name": "Trần Cao Vân",
			"pre": "Đường"
		}, {
			"id": 7292,
			"name": "Trần Cừ",
			"pre": "Đường"
		}, {
			"id": 582,
			"name": "Trần Cung",
			"pre": "Phố"
		}, {
			"id": 611,
			"name": "Trần Đăng Ninh",
			"pre": "Đường"
		}, {
			"id": 6278,
			"name": "Trần Đức Thảo",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 1618,
			"name": "Trần Hữu Trang",
			"pre": "Đường"
		}, {
			"id": 4528,
			"name": "Trần Kế Xương",
			"pre": "Đường"
		}, {
			"id": 552,
			"name": "Trần Nhân Tông",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 219,
			"name": "Trần Quốc Toản",
			"pre": "Đường"
		}, {
			"id": 386,
			"name": "Trần Quý Cáp",
			"pre": "Đường"
		}, {
			"id": 6391,
			"name": "Trần Tấn Mới",
			"pre": "Đường"
		}, {
			"id": 452,
			"name": "Trần Thủ Độ",
			"pre": "Đường"
		}, {
			"id": 6236,
			"name": "Trần Tống",
			"pre": "Đường"
		}, {
			"id": 3263,
			"name": "Trần Văn Giáp",
			"pre": "Đường"
		}, {
			"id": 2355,
			"name": "Trần Xuân Lê",
			"pre": "Đường"
		}, {
			"id": 5958,
			"name": "Triệu Nữ Vương",
			"pre": "Đường"
		}, {
			"id": 4081,
			"name": "Trịnh Công Sơn",
			"pre": "Đường"
		}, {
			"id": 2225,
			"name": "Trưng Nhị",
			"pre": "Đường"
		}, {
			"id": 3939,
			"name": "Trưng Nữ Vương",
			"pre": "Đường"
		}, {
			"id": 5904,
			"name": "Trương Chí Cương",
			"pre": "Đường"
		}, {
			"id": 220,
			"name": "Trương Hán Siêu",
			"pre": "Đường"
		}, {
			"id": 504,
			"name": "Tuệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 733,
			"name": "Văn Cao",
			"pre": "Đường"
		}, {
			"id": 2724,
			"name": "Võ Thị Sáu",
			"pre": "Đường"
		}, {
			"id": 2739,
			"name": "Võ Văn Tần",
			"pre": "Đường"
		}, {
			"id": 329,
			"name": "Vũ Hữu",
			"pre": "Phố"
		}, {
			"id": 2227,
			"name": "Vũ Trọng Phụng",
			"pre": "Đường"
		}, {
			"id": 2070,
			"name": "Xô Viết Nghệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 796,
			"name": "Xuân Diệu",
			"pre": "Đường"
		}, {
			"id": 10808,
			"name": "Xuân Tâm",
			"pre": "Đường"
		}, {
			"id": 5912,
			"name": "Ỷ Lan Nguyên Phi",
			"pre": "Đường"
		}, {
			"id": 2556,
			"name": "Yên Bái",
			"pre": "Đường"
		}, {
			"id": 6235,
			"name": "Yên Báy",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1651,
			"name": "4 Nguyễn Tri Phương",
			"lat": 16.037105560302734,
			"lng": 108.21305084228516,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 927,
			"name": "Blooming Tower",
			"lat": 16.090568542480469,
			"lng": 108.21631622314453,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 2511,
			"name": "Chung cư Quang Nguyễn",
			"lat": 16.044021606445312,
			"lng": 108.21005249023437,
			"cats": []
		}, {
			"id": 902,
			"name": "Đà Nẵng Plaza",
			"lat": 16.079374313354492,
			"lng": 108.22264862060547,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 876,
			"name": "Daewon Đa Phước",
			"lat": 16.099588394165039,
			"lng": 108.18232727050781,
			"cats": [44, 48, 50, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 1574,
			"name": "F.Home",
			"lat": 16.080120086669922,
			"lng": 108.22000122070312,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 2387,
			"name": "Green Plaza Đà Nẵng",
			"lat": 16.063619613647461,
			"lng": 108.22369384765625,
			"cats": []
		}, {
			"id": 441,
			"name": "Indochina Riverside",
			"lat": 16.069986343383789,
			"lng": 108.22454071044922,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 1011,
			"name": "La Paz Tower",
			"lat": 16.076072692871094,
			"lng": 108.22005462646484,
			"cats": [48, 50, 55, 324, 326]
		}, {
			"id": 664,
			"name": "Nguyền Đình Chiểu",
			"lat": 16.028718948364258,
			"lng": 108.24558258056641,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 514,
			"name": "Viễn Đông Meridian",
			"lat": 16.068960189819336,
			"lng": 108.22148132324219,
			"cats": [48, 50, 55, 57, 59, 324, 326]
		}]
	}, {
		"id": 51,
		"name": "Hòa Vang",
		"pre": "Huyện",
		"ward": [{
			"id": 227,
			"name": "Hòa Bắc",
			"pre": "Phường"
		}, {
			"id": 228,
			"name": "Hòa Châu",
			"pre": "Phường"
		}, {
			"id": 229,
			"name": "Hòa Khương",
			"pre": "Phường"
		}, {
			"id": 230,
			"name": "Hòa Liên",
			"pre": "Phường"
		}, {
			"id": 231,
			"name": "Hòa Nhơn",
			"pre": "Phường"
		}, {
			"id": 232,
			"name": "Hòa Ninh",
			"pre": "Xã"
		}, {
			"id": 233,
			"name": "Hòa Phong",
			"pre": "Xã"
		}, {
			"id": 234,
			"name": "Hòa Phú",
			"pre": "Xã"
		}, {
			"id": 235,
			"name": "Hòa Phước",
			"pre": "Xã"
		}, {
			"id": 236,
			"name": "Hòa Sơn",
			"pre": "Xã"
		}, {
			"id": 237,
			"name": "Hòa Tiến",
			"pre": "Xã"
		}],
		"street": [{
			"id": 6573,
			"name": "14B",
			"pre": "Đường"
		}, {
			"id": 7691,
			"name": "409",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 10330,
			"name": "601",
			"pre": "Đường"
		}, {
			"id": 6082,
			"name": "602",
			"pre": "Đường"
		}, {
			"id": 7486,
			"name": "603",
			"pre": "Đường"
		}, {
			"id": 1209,
			"name": "Âu Dương Lân",
			"pre": "Đường"
		}, {
			"id": 5733,
			"name": "Bạch Đằng Đông",
			"pre": "Đường"
		}, {
			"id": 2399,
			"name": "Bàu Tràm Trung",
			"pre": "Đường"
		}, {
			"id": 2082,
			"name": "Bùi Cẩm Hổ",
			"pre": "Đường"
		}, {
			"id": 9526,
			"name": "Bùi Huy Đáp",
			"pre": "Đường"
		}, {
			"id": 2386,
			"name": "Cẩm Bắc 10",
			"pre": "Đường"
		}, {
			"id": 2384,
			"name": "Cẩm Bắc 7",
			"pre": "Đường"
		}, {
			"id": 6395,
			"name": "Cẩm Thoại Tây",
			"pre": "Đường"
		}, {
			"id": 5732,
			"name": "Cẩm Toại Trung",
			"pre": "Đường"
		}, {
			"id": 3350,
			"name": "Cao Bá Đạt",
			"pre": "Đường"
		}, {
			"id": 2089,
			"name": "Đào Trinh Nhất",
			"pre": "Đường"
		}, {
			"id": 7325,
			"name": "DH8",
			"pre": "Đường"
		}, {
			"id": 2380,
			"name": "Đông Thạnh 1",
			"pre": "Đường"
		}, {
			"id": 2387,
			"name": "Đông Thạnh 2",
			"pre": "Đường"
		}, {
			"id": 2389,
			"name": "Đông Thạnh 3",
			"pre": "Đường"
		}, {
			"id": 7892,
			"name": "ĐT 602",
			"pre": "Đường"
		}, {
			"id": 7996,
			"name": "ĐT 605",
			"pre": "Đường"
		}, {
			"id": 2395,
			"name": "Hà Duy Phiên",
			"pre": "Đường"
		}, {
			"id": 755,
			"name": "Hà Huy Tập",
			"pre": "Đường"
		}, {
			"id": 2385,
			"name": "Hồ Sĩ Dương",
			"pre": "Đường"
		}, {
			"id": 10714,
			"name": "Hòa Liên 3",
			"pre": "Đường"
		}, {
			"id": 8974,
			"name": "Hòa Liên 4",
			"pre": "Đường"
		}, {
			"id": 10670,
			"name": "Hòa Liên 5",
			"pre": "Đường"
		}, {
			"id": 299,
			"name": "Hoàng Đạo Thành",
			"pre": "Đường"
		}, {
			"id": 9443,
			"name": "Hoàng Thị Ái",
			"pre": "Đường"
		}, {
			"id": 300,
			"name": "Hoàng Văn Thái",
			"pre": "Đường"
		}, {
			"id": 1603,
			"name": "Huỳnh Tịnh Của",
			"pre": "Đường"
		}, {
			"id": 9525,
			"name": "Kha Vạng Cân",
			"pre": "Đường"
		}, {
			"id": 650,
			"name": "Lê Đức Thọ",
			"pre": "Đường"
		}, {
			"id": 2383,
			"name": "Lê Duy Lương",
			"pre": "Đường"
		}, {
			"id": 379,
			"name": "Lê Trực",
			"pre": "Đường"
		}, {
			"id": 3135,
			"name": "Mai An Tiêm",
			"pre": "Đường"
		}, {
			"id": 1509,
			"name": "Ngũ Hành Sơn",
			"pre": "Đường"
		}, {
			"id": 2396,
			"name": "Nguyễn Bảo",
			"pre": "Đường"
		}, {
			"id": 2398,
			"name": "Nguyễn Đăng Đạo",
			"pre": "Đường"
		}, {
			"id": 3481,
			"name": "Nguyễn Hàm Ninh",
			"pre": "Đường"
		}, {
			"id": 2594,
			"name": "Nguyễn Huy Oánh",
			"pre": "Đường"
		}, {
			"id": 685,
			"name": "Nguyễn Khả Trạc",
			"pre": "Đường"
		}, {
			"id": 394,
			"name": "Nguyễn Lương Bằng",
			"pre": "Đường"
		}, {
			"id": 2400,
			"name": "Nguyễn Phan Vinh",
			"pre": "Đường"
		}, {
			"id": 1310,
			"name": "Nguyễn Tất Thành",
			"pre": "Đường"
		}, {
			"id": 2377,
			"name": "Nguyễn Thế Lịch",
			"pre": "Đường"
		}, {
			"id": 1048,
			"name": "Nguyễn Trung Ngạn",
			"pre": "Đường"
		}, {
			"id": 725,
			"name": "Nguyễn Trung Trực",
			"pre": "Đường"
		}, {
			"id": 678,
			"name": "Phạm Hùng",
			"pre": "Đường"
		}, {
			"id": 2397,
			"name": "Phạm Phú Tiết",
			"pre": "Đường"
		}, {
			"id": 3584,
			"name": "Phan Văn Đáng",
			"pre": "Đường"
		}, {
			"id": 9346,
			"name": "Phong Nam",
			"pre": "Đường"
		}, {
			"id": 7417,
			"name": "Phú Hòa 1",
			"pre": "Đường"
		}, {
			"id": 8538,
			"name": "Quốc Lộ 14B",
			"pre": "Đường"
		}, {
			"id": 10568,
			"name": "Quốc lộ 14G",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 743,
			"name": "Trần Huy Liệu",
			"pre": "Đường"
		}, {
			"id": 138,
			"name": "Trần Quang Khải",
			"pre": "Đường"
		}, {
			"id": 654,
			"name": "Trần Tử Bình",
			"pre": "Phố"
		}, {
			"id": 1486,
			"name": "Trần Văn Dư",
			"pre": "Đường"
		}, {
			"id": 4370,
			"name": "Trần Văn Giàu",
			"pre": "Đường"
		}, {
			"id": 2379,
			"name": "Trần Văn Lan",
			"pre": "Đường"
		}, {
			"id": 2393,
			"name": "Trịnh Đình Thảo",
			"pre": "Đường"
		}, {
			"id": 9527,
			"name": "Trịnh Quang Xuân",
			"pre": "Đường"
		}, {
			"id": 2375,
			"name": "Trừ Văn Thố",
			"pre": "Đường"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 9419,
			"name": "Tùng Lâm 8",
			"pre": "Đường"
		}, {
			"id": 3245,
			"name": "Văn Tiến Dũng",
			"pre": "Đường"
		}, {
			"id": 7326,
			"name": "Vũ Miên",
			"pre": "Đường"
		}, {
			"id": 2070,
			"name": "Xô Viết Nghệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 602,
			"name": "Xuân Thủy",
			"pre": "Đường"
		}],
		"project": []
	}, {
		"id": 52,
		"name": "Hoàng Sa",
		"pre": "Huyện",
		"ward": [],
		"street": [],
		"project": []
	}, {
		"id": 47,
		"name": "Liên Chiểu",
		"pre": "Quận",
		"ward": [{
			"id": 220,
			"name": "Hòa Hiệp Bắc",
			"pre": "Phường"
		}, {
			"id": 219,
			"name": "Hòa Hiệp Nam",
			"pre": "Phường"
		}, {
			"id": 218,
			"name": "Hòa Khánh Bắc",
			"pre": "Phường"
		}, {
			"id": 217,
			"name": "Hòa Khánh Nam",
			"pre": "Phường"
		}, {
			"id": 216,
			"name": "Hòa Minh",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3780,
			"name": "10",
			"pre": "Đường"
		}, {
			"id": 3788,
			"name": "2",
			"pre": "Đường"
		}, {
			"id": 1990,
			"name": "4",
			"pre": "Đường"
		}, {
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 7945,
			"name": "A9",
			"pre": "Đường"
		}, {
			"id": 778,
			"name": "Âu Cơ",
			"pre": "Đường"
		}, {
			"id": 9557,
			"name": "Bà Nà - Suối Mơ",
			"pre": "Đường"
		}, {
			"id": 7517,
			"name": "Bạch Thái Bưởi",
			"pre": "Đường"
		}, {
			"id": 9731,
			"name": "Bàu Mạc 1",
			"pre": "Đường"
		}, {
			"id": 9738,
			"name": "Bàu Mạc 10",
			"pre": "Đường"
		}, {
			"id": 9739,
			"name": "Bàu Mạc 11",
			"pre": "Đường"
		}, {
			"id": 8841,
			"name": "Bàu Mạc 12",
			"pre": "Đường"
		}, {
			"id": 9315,
			"name": "Bàu Mạc 14",
			"pre": "Đường"
		}, {
			"id": 9740,
			"name": "Bàu Mạc 15",
			"pre": "Đường"
		}, {
			"id": 9369,
			"name": "Bàu Mạc 2",
			"pre": "Đường"
		}, {
			"id": 9732,
			"name": "Bàu Mạc 3",
			"pre": "Đường"
		}, {
			"id": 9733,
			"name": "Bàu Mạc 4",
			"pre": "Đường"
		}, {
			"id": 9734,
			"name": "Bàu Mạc 5",
			"pre": "Đường"
		}, {
			"id": 9735,
			"name": "Bàu Mạc 6",
			"pre": "Đường"
		}, {
			"id": 9736,
			"name": "Bàu Mạc 7",
			"pre": "Đường"
		}, {
			"id": 9387,
			"name": "Bàu Mạc 8",
			"pre": "Đường"
		}, {
			"id": 9737,
			"name": "Bàu Mạc 9",
			"pre": "Đường"
		}, {
			"id": 9562,
			"name": "Bàu Năng 1",
			"pre": "Đường"
		}, {
			"id": 9561,
			"name": "Bàu Năng 2",
			"pre": "Đường"
		}, {
			"id": 9560,
			"name": "Bàu Năng 3",
			"pre": "Đường"
		}, {
			"id": 8810,
			"name": "Bàu Vàng 1",
			"pre": "Đường"
		}, {
			"id": 9877,
			"name": "Bàu Vàng 2",
			"pre": "Đường"
		}, {
			"id": 9878,
			"name": "Bàu Vàng 3",
			"pre": "Đường"
		}, {
			"id": 9879,
			"name": "Bàu Vàng 4",
			"pre": "Đường"
		}, {
			"id": 8103,
			"name": "Bàu Vàng 5",
			"pre": "Đường"
		}, {
			"id": 8639,
			"name": "Bàu Vàng 6",
			"pre": "Đường"
		}, {
			"id": 1926,
			"name": "Bùi Chát",
			"pre": "Đường"
		}, {
			"id": 10153,
			"name": "Cao Bá Phát",
			"pre": "Đường"
		}, {
			"id": 2056,
			"name": "Chơn Tâm",
			"pre": "Đường"
		}, {
			"id": 9617,
			"name": "Chơn Tâm 1",
			"pre": "Đường"
		}, {
			"id": 9355,
			"name": "Chơn Tâm 2",
			"pre": "Đường"
		}, {
			"id": 9618,
			"name": "Chơn Tâm 3",
			"pre": "Đường"
		}, {
			"id": 9616,
			"name": "Chơn Tâm 4",
			"pre": "Đường"
		}, {
			"id": 8591,
			"name": "Chơn Tâm 5",
			"pre": "Đường"
		}, {
			"id": 9619,
			"name": "Chơn Tâm 6",
			"pre": "Đường"
		}, {
			"id": 9431,
			"name": "Chơn Tâm 7",
			"pre": "Đường"
		}, {
			"id": 8329,
			"name": "Chơn Tâm 8",
			"pre": "Đường"
		}, {
			"id": 6810,
			"name": "Chúc Động",
			"pre": "Đường"
		}, {
			"id": 2324,
			"name": "Đá Mọc 1",
			"pre": "Đường"
		}, {
			"id": 2326,
			"name": "Đá Mọc 2",
			"pre": "Đường"
		}, {
			"id": 2328,
			"name": "Đá Mọc 3",
			"pre": "Đường"
		}, {
			"id": 2329,
			"name": "Đá Mọc 4",
			"pre": "Đường"
		}, {
			"id": 2330,
			"name": "Đá Mọc 5",
			"pre": "Đường"
		}, {
			"id": 10543,
			"name": "Đá Mọc 8",
			"pre": "Đường"
		}, {
			"id": 2055,
			"name": "Đa Phước",
			"pre": "Đường"
		}, {
			"id": 2057,
			"name": "Đà Sơn",
			"pre": "Đường"
		}, {
			"id": 2046,
			"name": "Đàm Quang Trung",
			"pre": "Đường"
		}, {
			"id": 2065,
			"name": "Đàm Văn Lễ",
			"pre": "Đường"
		}, {
			"id": 1213,
			"name": "Đặng Chất",
			"pre": "Đường"
		}, {
			"id": 798,
			"name": "Đặng Dung",
			"pre": "Phố"
		}, {
			"id": 2071,
			"name": "Đặng Huy Trứ",
			"pre": "Đường"
		}, {
			"id": 2072,
			"name": "Đặng Minh Khiêm",
			"pre": "Đường"
		}, {
			"id": 91,
			"name": "Đặng Tất",
			"pre": "Phố"
		}, {
			"id": 2117,
			"name": "Đào Công Soạn",
			"pre": "Đường"
		}, {
			"id": 8214,
			"name": "Đào Doãn Địch",
			"pre": "Đường"
		}, {
			"id": 9934,
			"name": "Đào Nghiễm",
			"pre": "Đường"
		}, {
			"id": 1004,
			"name": "Đào Nguyên Phổ",
			"pre": "Đường"
		}, {
			"id": 8331,
			"name": "Đào Quang Phổ",
			"pre": "Đường"
		}, {
			"id": 2320,
			"name": "Đào Sư Tích",
			"pre": "Đường"
		}, {
			"id": 5199,
			"name": "Đinh Đức Thiện",
			"pre": "Đường"
		}, {
			"id": 4378,
			"name": "Đỗ Năng Tế",
			"pre": "Đường"
		}, {
			"id": 2764,
			"name": "Đỗ Nhuận",
			"pre": "Phố"
		}, {
			"id": 8513,
			"name": "Đoàn Phú Tứ",
			"pre": "Đường"
		}, {
			"id": 487,
			"name": "Đoàn Trần Nghiệp",
			"pre": "Đường"
		}, {
			"id": 6092,
			"name": "Đồng Bài 1",
			"pre": "Đường"
		}, {
			"id": 7303,
			"name": "Đồng Bài 3",
			"pre": "Đường"
		}, {
			"id": 8429,
			"name": "Đồng Kè",
			"pre": "Đường"
		}, {
			"id": 940,
			"name": "Đồng Khởi",
			"pre": "Đường"
		}, {
			"id": 9599,
			"name": "Đồng Trí 1",
			"pre": "Đường"
		}, {
			"id": 9436,
			"name": "Đồng Trí 2",
			"pre": "Đường"
		}, {
			"id": 7999,
			"name": "Đồng Trí 3",
			"pre": "Đường"
		}, {
			"id": 9598,
			"name": "Đồng Trí 4",
			"pre": "Đường"
		}, {
			"id": 9600,
			"name": "Đồng Trí 5",
			"pre": "Đường"
		}, {
			"id": 7518,
			"name": "Đồng Trí 6",
			"pre": "Đường"
		}, {
			"id": 6239,
			"name": "Đức Lợi 2",
			"pre": "Đường"
		}, {
			"id": 7480,
			"name": "Đức Lợi I",
			"pre": "Đường"
		}, {
			"id": 2018,
			"name": "Dương Bích Liên",
			"pre": "Đường"
		}, {
			"id": 2020,
			"name": "Dương Đức Hiền",
			"pre": "Đường"
		}, {
			"id": 6712,
			"name": "Giáp Văn Cương",
			"pre": "Đường"
		}, {
			"id": 8972,
			"name": "Hà Hồi",
			"pre": "Đường"
		}, {
			"id": 7395,
			"name": "Hà Văn Tính",
			"pre": "Đường"
		}, {
			"id": 7359,
			"name": "Hàm Trung 2",
			"pre": "Đường"
		}, {
			"id": 9438,
			"name": "Hàm Trung 3",
			"pre": "Đường"
		}, {
			"id": 6435,
			"name": "Hàm Trung 4",
			"pre": "Đường"
		}, {
			"id": 7864,
			"name": "Hàm Trung 5",
			"pre": "Đường"
		}, {
			"id": 8874,
			"name": "Hàm Trung 8",
			"pre": "Đường"
		}, {
			"id": 5064,
			"name": "Hồ Bá Ôn",
			"pre": "Đường"
		}, {
			"id": 2584,
			"name": "Hồ Quý Ly",
			"pre": "Đường"
		}, {
			"id": 6459,
			"name": "Hồ Sỹ Đồng",
			"pre": "Đường"
		}, {
			"id": 626,
			"name": "Hồ Tùng Mậu",
			"pre": "Đường"
		}, {
			"id": 8088,
			"name": "Hòa Khánh",
			"pre": "Đường"
		}, {
			"id": 7539,
			"name": "Hòa Minh 1",
			"pre": "Đường"
		}, {
			"id": 8564,
			"name": "Hoà Minh 10",
			"pre": "Đường"
		}, {
			"id": 10738,
			"name": "Hòa Minh 11",
			"pre": "Đường"
		}, {
			"id": 7205,
			"name": "Hòa Minh 12",
			"pre": "Đường"
		}, {
			"id": 8195,
			"name": "Hòa Minh 14",
			"pre": "Đường"
		}, {
			"id": 7259,
			"name": "Hòa Minh 15",
			"pre": "Đường"
		}, {
			"id": 9252,
			"name": "Hoà Minh 16",
			"pre": "Đường"
		}, {
			"id": 7980,
			"name": "Hòa Minh 17",
			"pre": "Đường"
		}, {
			"id": 9559,
			"name": "Hòa Minh 18",
			"pre": "Đường"
		}, {
			"id": 9558,
			"name": "Hòa Minh 19",
			"pre": "Đường"
		}, {
			"id": 10821,
			"name": "Hòa Minh 2",
			"pre": "Đường"
		}, {
			"id": 7472,
			"name": "Hòa Minh 20",
			"pre": "Đường"
		}, {
			"id": 8275,
			"name": "Hòa Minh 21",
			"pre": "Đường"
		}, {
			"id": 9084,
			"name": "Hoà Minh 22",
			"pre": "Đường"
		}, {
			"id": 8089,
			"name": "Hòa Minh 23",
			"pre": "Đường"
		}, {
			"id": 5964,
			"name": "Hòa Minh 3",
			"pre": "Đường"
		}, {
			"id": 6479,
			"name": "Hòa Minh 4",
			"pre": "Đường"
		}, {
			"id": 8555,
			"name": "Hòa Minh 5",
			"pre": "Đường"
		}, {
			"id": 6438,
			"name": "Hòa Minh 6",
			"pre": "Đường"
		}, {
			"id": 8808,
			"name": "Hòa Minh 7",
			"pre": "Đường"
		}, {
			"id": 6823,
			"name": "Hòa Minh 8",
			"pre": "Đường"
		}, {
			"id": 8730,
			"name": "Hóa Mỹ",
			"pre": "Đường"
		}, {
			"id": 6281,
			"name": "Hòa Mỹ 3",
			"pre": "Đường"
		}, {
			"id": 6494,
			"name": "Hòa Mỹ 4",
			"pre": "Đường"
		}, {
			"id": 2334,
			"name": "Hòa Mỹ 5",
			"pre": "Đường"
		}, {
			"id": 6072,
			"name": "Hòa Nam 4",
			"pre": "Đường"
		}, {
			"id": 6495,
			"name": "Hòa Nam 5",
			"pre": "Đường"
		}, {
			"id": 10168,
			"name": "Hòa Nam 6",
			"pre": "Đường"
		}, {
			"id": 1588,
			"name": "Hoàng Minh Thảo",
			"pre": "Đường"
		}, {
			"id": 300,
			"name": "Hoàng Văn Thái",
			"pre": "Đường"
		}, {
			"id": 3745,
			"name": "Hồng Thái",
			"pre": "Đường"
		}, {
			"id": 8804,
			"name": "Huỳnh Thị Bảo Hòa",
			"pre": "Đường"
		}, {
			"id": 2323,
			"name": "Kiều Oánh Mậu",
			"pre": "Đường"
		}, {
			"id": 5965,
			"name": "Kim Cương",
			"pre": "Đường"
		}, {
			"id": 2981,
			"name": "Kim Liên",
			"pre": "Đường"
		}, {
			"id": 9935,
			"name": "Kim Liên 1",
			"pre": "Đường"
		}, {
			"id": 9936,
			"name": "Kim Liên 2",
			"pre": "Đường"
		}, {
			"id": 9937,
			"name": "Kim Liên 3",
			"pre": "Đường"
		}, {
			"id": 3676,
			"name": "Kinh Dương Vương",
			"pre": "Đường"
		}, {
			"id": 621,
			"name": "Lạc Long Quân",
			"pre": "Đường"
		}, {
			"id": 3417,
			"name": "Lâm Quang Thự",
			"pre": "Đường"
		}, {
			"id": 3566,
			"name": "Lê A",
			"pre": "Đường"
		}, {
			"id": 894,
			"name": "Lê Công Kiều",
			"pre": "Đường"
		}, {
			"id": 8985,
			"name": "Lê Doãn Nhạ",
			"pre": "Đường"
		}, {
			"id": 202,
			"name": "Lê Thạch",
			"pre": "Đường"
		}, {
			"id": 3238,
			"name": "Lê Thiệt",
			"pre": "Đường"
		}, {
			"id": 8732,
			"name": "Lê Tự Nhất Thống",
			"pre": "Đường"
		}, {
			"id": 9911,
			"name": "Lê Tự Thống Nhất",
			"pre": "Đường"
		}, {
			"id": 8683,
			"name": "Lê Văn Mến",
			"pre": "Đường"
		}, {
			"id": 821,
			"name": "Lê Văn Sỹ",
			"pre": "Đường"
		}, {
			"id": 4181,
			"name": "Lê Văn Thịnh",
			"pre": "Đường"
		}, {
			"id": 465,
			"name": "Lương Khánh Thiện",
			"pre": "Đường"
		}, {
			"id": 3269,
			"name": "Lương Trúc Đàm",
			"pre": "Đường"
		}, {
			"id": 2333,
			"name": "Lý Chính Thắng",
			"pre": "Đường"
		}, {
			"id": 4147,
			"name": "Lý Thái Tông",
			"pre": "Đường"
		}, {
			"id": 1449,
			"name": "Lý Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 10429,
			"name": "Mộc Bài 1",
			"pre": "Đường"
		}, {
			"id": 8139,
			"name": "Mộc Bài 2",
			"pre": "Đường"
		}, {
			"id": 8377,
			"name": "Mộc Bài 3",
			"pre": "Đường"
		}, {
			"id": 6184,
			"name": "Mộc Bài 4",
			"pre": "Đường"
		}, {
			"id": 10430,
			"name": "Mộc Bài 5",
			"pre": "Đường"
		}, {
			"id": 10431,
			"name": "Mộc Bài 6",
			"pre": "Đường"
		}, {
			"id": 9565,
			"name": "Mộc Bài 7",
			"pre": "Đường"
		}, {
			"id": 9564,
			"name": "Mộc Bài 8",
			"pre": "Đường"
		}, {
			"id": 9563,
			"name": "Mộc Bài 9",
			"pre": "Đường"
		}, {
			"id": 722,
			"name": "Nam Cao",
			"pre": "Phố"
		}, {
			"id": 7946,
			"name": "Nam Ô",
			"pre": "Đường"
		}, {
			"id": 3422,
			"name": "Nam Trân",
			"pre": "Đường"
		}, {
			"id": 2054,
			"name": "Ngô Chân Lưu",
			"pre": "Đường"
		}, {
			"id": 977,
			"name": "Ngô Đức Kế",
			"pre": "Đường"
		}, {
			"id": 380,
			"name": "Ngô Sĩ Liên",
			"pre": "Đường"
		}, {
			"id": 150,
			"name": "Ngô Thì Nhậm",
			"pre": "Đường"
		}, {
			"id": 1738,
			"name": "Ngô Văn Sở",
			"pre": "Đường"
		}, {
			"id": 2051,
			"name": "Ngô Xuân Thu",
			"pre": "Đường"
		}, {
			"id": 457,
			"name": "Nguyễn An Ninh",
			"pre": "Đường"
		}, {
			"id": 2059,
			"name": "Nguyễn Bá Phát",
			"pre": "Đường"
		}, {
			"id": 931,
			"name": "Nguyễn Cảnh Chân",
			"pre": "Đường"
		}, {
			"id": 5027,
			"name": "Nguyễn Cảnh Dị",
			"pre": "Đường"
		}, {
			"id": 2408,
			"name": "Nguyễn Chánh",
			"pre": "Đường"
		}, {
			"id": 3254,
			"name": "Nguyễn Chích",
			"pre": "Đường"
		}, {
			"id": 756,
			"name": "Nguyễn Công Hoan",
			"pre": "Đường"
		}, {
			"id": 7188,
			"name": "Nguyễn Đình Trọng",
			"pre": "Đường"
		}, {
			"id": 3165,
			"name": "Nguyễn Đỗ Cung",
			"pre": "Đường"
		}, {
			"id": 8733,
			"name": "Nguyễn Hàng Chi",
			"pre": "Đường"
		}, {
			"id": 495,
			"name": "Nguyễn Huy Tự",
			"pre": "Phố"
		}, {
			"id": 315,
			"name": "Nguyễn Huy Tưởng",
			"pre": "Đường"
		}, {
			"id": 724,
			"name": "Nguyễn Khắc Nhu",
			"pre": "Phố"
		}, {
			"id": 2381,
			"name": "Nguyễn Khoa Chiêm",
			"pre": "Đường"
		}, {
			"id": 381,
			"name": "Nguyễn Khuyến",
			"pre": "Đường"
		}, {
			"id": 10347,
			"name": "Nguyễn Kiều",
			"pre": "Đường"
		}, {
			"id": 394,
			"name": "Nguyễn Lương Bằng",
			"pre": "Đường"
		}, {
			"id": 9199,
			"name": "Nguyễn Minh Chấn",
			"pre": "Đường"
		}, {
			"id": 2322,
			"name": "Nguyễn Minh Không",
			"pre": "Đường"
		}, {
			"id": 2327,
			"name": "Nguyễn Minh Không",
			"pre": "Đường"
		}, {
			"id": 4239,
			"name": "Nguyễn Mộng Tuân",
			"pre": "Đường"
		}, {
			"id": 2052,
			"name": "Nguyễn Như Hạnh",
			"pre": "Đường"
		}, {
			"id": 10277,
			"name": "Nguyễn Phước Chu",
			"pre": "Đường"
		}, {
			"id": 3515,
			"name": "Nguyễn Sinh Sắc",
			"pre": "Đường"
		}, {
			"id": 5927,
			"name": "Nguyễn Tấn Phát",
			"pre": "Đường"
		}, {
			"id": 1310,
			"name": "Nguyễn Tất Thành",
			"pre": "Đường"
		}, {
			"id": 902,
			"name": "Nguyễn Thái Bình",
			"pre": "Đường"
		}, {
			"id": 1051,
			"name": "Nguyễn Thị Minh Khai",
			"pre": "Đường"
		}, {
			"id": 615,
			"name": "Nguyễn Thị Thập",
			"pre": "Đường"
		}, {
			"id": 7394,
			"name": "Nguyễn Thúy",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 351,
			"name": "Nguyễn Viết Xuân",
			"pre": "Đường"
		}, {
			"id": 146,
			"name": "Nguyễn Xí",
			"pre": "Phố"
		}, {
			"id": 6328,
			"name": "Ninh Tốn",
			"pre": "Đường"
		}, {
			"id": 496,
			"name": "Phạm Đình Hổ",
			"pre": "Phố"
		}, {
			"id": 3426,
			"name": "Phạm Như Xương",
			"pre": "Đường"
		}, {
			"id": 6219,
			"name": "Phạm Văn Ngôn",
			"pre": "Đường"
		}, {
			"id": 10611,
			"name": "Phạm Văn Tráng",
			"pre": "Đường"
		}, {
			"id": 352,
			"name": "Phan Đình Giót",
			"pre": "Đường"
		}, {
			"id": 6051,
			"name": "Phan Thị Nể",
			"pre": "Đường"
		}, {
			"id": 922,
			"name": "Phan Văn Đạt",
			"pre": "Đường"
		}, {
			"id": 3431,
			"name": "Phan Văn Định",
			"pre": "Đường"
		}, {
			"id": 8021,
			"name": "Phan Văn Thuật",
			"pre": "Đường"
		}, {
			"id": 8894,
			"name": "Phan Văn Trường",
			"pre": "Đường"
		}, {
			"id": 8502,
			"name": "Phú Lộc 1",
			"pre": "Đường"
		}, {
			"id": 6870,
			"name": "Phú Lộc 14",
			"pre": "Đường"
		}, {
			"id": 6393,
			"name": "Phú Lộc 15",
			"pre": "Đường"
		}, {
			"id": 10628,
			"name": "Phú Lộc 16",
			"pre": "Đường"
		}, {
			"id": 9664,
			"name": "Phú Lộc 17",
			"pre": "Đường"
		}, {
			"id": 7206,
			"name": "Phú Lộc 18",
			"pre": "Đường"
		}, {
			"id": 9621,
			"name": "Phú Lộc 19",
			"pre": "Đường"
		}, {
			"id": 8470,
			"name": "Phú Lộc 2",
			"pre": "Đường"
		}, {
			"id": 7204,
			"name": "Phú Lộc 3",
			"pre": "Đường"
		}, {
			"id": 7368,
			"name": "Phú Lộc 5",
			"pre": "Đường"
		}, {
			"id": 7516,
			"name": "Phú Lộc 7",
			"pre": "Đường"
		}, {
			"id": 8334,
			"name": "Phú Lộc 8",
			"pre": "Đường"
		}, {
			"id": 2336,
			"name": "Phú Thạnh 1",
			"pre": "Đường"
		}, {
			"id": 2337,
			"name": "Phú Thạnh 2",
			"pre": "Đường"
		}, {
			"id": 2338,
			"name": "Phú Thạnh 3",
			"pre": "Đường"
		}, {
			"id": 2340,
			"name": "Phú Thạnh 4",
			"pre": "Đường"
		}, {
			"id": 2342,
			"name": "Phú Thạnh 5",
			"pre": "Đường"
		}, {
			"id": 2343,
			"name": "Phú Thạnh 6",
			"pre": "Đường"
		}, {
			"id": 581,
			"name": "Phùng Chí Kiên",
			"pre": "Phố"
		}, {
			"id": 128,
			"name": "Phùng Hưng",
			"pre": "Phố"
		}, {
			"id": 9432,
			"name": "Quang Thành",
			"pre": "Đường"
		}, {
			"id": 9433,
			"name": "Quang Thành 1",
			"pre": "Đường"
		}, {
			"id": 2092,
			"name": "Quốc lộ 1A",
			"pre": "Đường"
		}, {
			"id": 4248,
			"name": "Sử Hy Nhan",
			"pre": "Đường"
		}, {
			"id": 2427,
			"name": "Tân Trào",
			"pre": "Đường"
		}, {
			"id": 4066,
			"name": "Thanh Tịnh",
			"pre": "Đường"
		}, {
			"id": 6493,
			"name": "Thanh Vinh",
			"pre": "Đường"
		}, {
			"id": 8315,
			"name": "Thanh Vinh 10",
			"pre": "Đường"
		}, {
			"id": 9288,
			"name": "Thanh Vinh 11",
			"pre": "Đường"
		}, {
			"id": 9440,
			"name": "Thành Vinh 12",
			"pre": "Đường"
		}, {
			"id": 9124,
			"name": "Thanh Vinh 14",
			"pre": "Đường"
		}, {
			"id": 8890,
			"name": "Thanh Vinh 15",
			"pre": "Đường"
		}, {
			"id": 9310,
			"name": "Thanh Vinh 16",
			"pre": "Đường"
		}, {
			"id": 8130,
			"name": "Thanh Vinh 4",
			"pre": "Đường"
		}, {
			"id": 1745,
			"name": "Thích Quảng Đức",
			"pre": "Đường"
		}, {
			"id": 368,
			"name": "Tô Hiệu",
			"pre": "Đường"
		}, {
			"id": 1320,
			"name": "Tôn Đản",
			"pre": "Đường"
		}, {
			"id": 428,
			"name": "Tôn Đức Thắng",
			"pre": "Phố"
		}, {
			"id": 217,
			"name": "Tống Duy Tân",
			"pre": "Đường"
		}, {
			"id": 2512,
			"name": "Tốt Động",
			"pre": "Đường"
		}, {
			"id": 8805,
			"name": "Trà Na 1",
			"pre": "Đường"
		}, {
			"id": 8806,
			"name": "Trà Na 2",
			"pre": "Đường"
		}, {
			"id": 8807,
			"name": "Trà Na 3",
			"pre": "Đường"
		}, {
			"id": 2687,
			"name": "Trần Anh Tông",
			"pre": "Đường"
		}, {
			"id": 3421,
			"name": "Trần Đình Tri",
			"pre": "Đường"
		}, {
			"id": 2335,
			"name": "Trần Nguyên Đán",
			"pre": "Đường"
		}, {
			"id": 7776,
			"name": "Trần Phước Chu",
			"pre": "Đường"
		}, {
			"id": 999,
			"name": "Trần Quý Khoách",
			"pre": "Đường"
		}, {
			"id": 2565,
			"name": "Trần Tấn",
			"pre": "Đường"
		}, {
			"id": 8149,
			"name": "Trần Văn Đa",
			"pre": "Đường"
		}, {
			"id": 4084,
			"name": "Trần Văn Kỷ",
			"pre": "Đường"
		}, {
			"id": 2345,
			"name": "Trịnh Khắc Lập",
			"pre": "Đường"
		}, {
			"id": 7761,
			"name": "Trung Nghĩa",
			"pre": "Đường"
		}, {
			"id": 2522,
			"name": "Trung Nghĩa 1",
			"pre": "Đường"
		}, {
			"id": 2523,
			"name": "Trung Nghĩa 2",
			"pre": "Đường"
		}, {
			"id": 2525,
			"name": "Trung Nghĩa 3",
			"pre": "Đường"
		}, {
			"id": 2526,
			"name": "Trung Nghĩa 4",
			"pre": "Đường"
		}, {
			"id": 2527,
			"name": "Trung Nghĩa 5",
			"pre": "Đường"
		}, {
			"id": 2528,
			"name": "Trung Nghĩa 6",
			"pre": "Đường"
		}, {
			"id": 2529,
			"name": "Trung Nghĩa 7",
			"pre": "Đường"
		}, {
			"id": 9340,
			"name": "Trung Nghĩa 8",
			"pre": "Đường"
		}, {
			"id": 9378,
			"name": "Trung Nghĩa 9",
			"pre": "Đường"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 6594,
			"name": "Trương Văn Đa",
			"pre": "Đường"
		}, {
			"id": 7357,
			"name": "Trương Vân Lĩnh",
			"pre": "Đường"
		}, {
			"id": 5143,
			"name": "Tú Mỡ",
			"pre": "Đường"
		}, {
			"id": 2321,
			"name": "Tú Quỳ",
			"pre": "Đường"
		}, {
			"id": 3338,
			"name": "Võ Duy Dương",
			"pre": "Đường"
		}, {
			"id": 4532,
			"name": "Vũ Huy Tấn",
			"pre": "Đường"
		}, {
			"id": 9884,
			"name": "Vũ Lập",
			"pre": "Đường"
		}, {
			"id": 388,
			"name": "Vũ Ngọc Phan",
			"pre": "Phố"
		}, {
			"id": 2542,
			"name": "Xuân Thiều",
			"pre": "Đường"
		}, {
			"id": 2539,
			"name": "Xuân Thiều 1",
			"pre": "Đường"
		}, {
			"id": 2550,
			"name": "Xuân Thiều 10",
			"pre": "Đường"
		}, {
			"id": 2551,
			"name": "Xuân Thiều 11",
			"pre": "Đường"
		}, {
			"id": 2552,
			"name": "Xuân Thiều 12",
			"pre": "Đường"
		}, {
			"id": 2553,
			"name": "Xuân Thiều 13",
			"pre": "Đường"
		}, {
			"id": 2554,
			"name": "Xuân Thiều 14",
			"pre": "Đường"
		}, {
			"id": 2540,
			"name": "Xuân Thiều 2",
			"pre": "Đường"
		}, {
			"id": 2541,
			"name": "Xuân Thiều 3",
			"pre": "Đường"
		}, {
			"id": 2543,
			"name": "Xuân Thiều 4",
			"pre": "Đường"
		}, {
			"id": 2545,
			"name": "Xuân Thiều 5",
			"pre": "Đường"
		}, {
			"id": 2546,
			"name": "Xuân Thiều 6",
			"pre": "Đường"
		}, {
			"id": 2547,
			"name": "Xuân Thiều 7",
			"pre": "Đường"
		}, {
			"id": 2548,
			"name": "Xuân Thiều 8",
			"pre": "Đường"
		}, {
			"id": 2549,
			"name": "Xuân Thiều 9",
			"pre": "Đường"
		}, {
			"id": 8638,
			"name": "Yên Khuê 2",
			"pre": "Đường"
		}, {
			"id": 736,
			"name": "Yên Thế",
			"pre": "Đường"
		}],
		"project": [{
			"id": 2243,
			"name": "Aurora Da Nang City",
			"lat": 16.052577972412109,
			"lng": 108.1666259765625,
			"cats": [40, 41, 48, 163, 283, 325, 362]
		}, {
			"id": 2375,
			"name": "Aurora HouseforRent",
			"lat": 16.052711486816406,
			"lng": 108.16683959960937,
			"cats": []
		}, {
			"id": 872,
			"name": "Ecorio",
			"lat": 16.112564086914063,
			"lng": 108.12323760986328,
			"cats": [40, 44, 48, 50, 52, 55, 57, 325]
		}, {
			"id": 732,
			"name": "Golden Hills City",
			"lat": 16.106407165527344,
			"lng": 108.10873413085937,
			"cats": [41, 44, 48, 50, 52, 55, 59, 325]
		}, {
			"id": 1962,
			"name": "KDC Phú Lộc An",
			"lat": 16.073684692382812,
			"lng": 108.16781616210937,
			"cats": [40, 324, 325, 326]
		}, {
			"id": 2317,
			"name": "Khu đô thị Bulova",
			"lat": 16.082162857055664,
			"lng": 108.16503143310547,
			"cats": []
		}, {
			"id": 2169,
			"name": "Nam Trân Central Park",
			"lat": 16.061279296875,
			"lng": 108.171142578125,
			"cats": [40, 48, 50, 55, 57, 59, 163]
		}, {
			"id": 2484,
			"name": "Phố Garden Sea",
			"lat": 16.081209182739258,
			"lng": 108.16575622558594,
			"cats": []
		}, {
			"id": 1246,
			"name": "Phú Quý",
			"lat": 16.077058792114258,
			"lng": 108.13694000244141,
			"cats": [40, 41, 48, 55, 57, 59, 325]
		}, {
			"id": 2269,
			"name": "Phùng Hưng",
			"lat": 16.073793411254883,
			"lng": 108.16691589355469,
			"cats": []
		}, {
			"id": 1771,
			"name": "Quang Thành 3B",
			"lat": 16.085903167724609,
			"lng": 108.14337921142578,
			"cats": [40, 51, 163, 325]
		}, {
			"id": 2481,
			"name": "Sun Bay Đà Nẵng",
			"lat": 16.08125114440918,
			"lng": 108.16644287109375,
			"cats": []
		}, {
			"id": 815,
			"name": "Thien Park",
			"lat": 16.123424530029297,
			"lng": 108.10635375976562,
			"cats": [40, 48, 55, 59, 324, 325, 326]
		}]
	}, {
		"id": 48,
		"name": "Ngũ Hành Sơn",
		"pre": "Quận",
		"ward": [{
			"id": 269,
			"name": " Khuê Mỹ",
			"pre": "Phường"
		}, {
			"id": 271,
			"name": "Hòa Hải",
			"pre": "Phường"
		}, {
			"id": 270,
			"name": "Hòa Quý",
			"pre": "Phường"
		}, {
			"id": 268,
			"name": "Mỹ An",
			"pre": "Phường"
		}],
		"street": [{
			"id": 9554,
			"name": "An Bắc 4",
			"pre": "Đường"
		}, {
			"id": 6000,
			"name": "An Dương Vương",
			"pre": "Đường"
		}, {
			"id": 1917,
			"name": "An Nông",
			"pre": "Đường"
		}, {
			"id": 6279,
			"name": "An Thượng",
			"pre": "Đường"
		}, {
			"id": 7528,
			"name": "An Thượng 1",
			"pre": "Đường"
		}, {
			"id": 9267,
			"name": "An Thượng 10",
			"pre": "Đường"
		}, {
			"id": 6677,
			"name": "An Thượng 11",
			"pre": "Đường"
		}, {
			"id": 9801,
			"name": "An Thượng 12",
			"pre": "Đường"
		}, {
			"id": 9441,
			"name": "An Thượng 14",
			"pre": "Đường"
		}, {
			"id": 6478,
			"name": "An Thượng 15",
			"pre": "Đường"
		}, {
			"id": 9240,
			"name": "An Thượng 16",
			"pre": "Đường"
		}, {
			"id": 7448,
			"name": "An Thượng 17",
			"pre": "Đường"
		}, {
			"id": 9802,
			"name": "An Thượng 18",
			"pre": "Đường"
		}, {
			"id": 9803,
			"name": "An Thượng 19",
			"pre": "Đường"
		}, {
			"id": 6310,
			"name": "An Thượng 2",
			"pre": "Đường"
		}, {
			"id": 2291,
			"name": "An Thượng 20",
			"pre": "Đường"
		}, {
			"id": 2293,
			"name": "An Thượng 21",
			"pre": "Đường"
		}, {
			"id": 2294,
			"name": "An Thượng 22",
			"pre": "Đường"
		}, {
			"id": 9804,
			"name": "An Thượng 23",
			"pre": "Đường"
		}, {
			"id": 6485,
			"name": "An Thượng 24",
			"pre": "Đường"
		}, {
			"id": 9805,
			"name": "An Thượng 25",
			"pre": "Đường"
		}, {
			"id": 8280,
			"name": "An Thượng 26",
			"pre": "Đường"
		}, {
			"id": 8107,
			"name": "An Thượng 27",
			"pre": "Đường"
		}, {
			"id": 9126,
			"name": "An Thượng 28",
			"pre": "Đường"
		}, {
			"id": 8793,
			"name": "An Thượng 29",
			"pre": "Đường"
		}, {
			"id": 7497,
			"name": "An Thượng 3",
			"pre": "Đường"
		}, {
			"id": 9092,
			"name": "An Thượng 30",
			"pre": "Đường"
		}, {
			"id": 9806,
			"name": "An Thượng 31",
			"pre": "Đường"
		}, {
			"id": 7459,
			"name": "An Thượng 32",
			"pre": "Đường"
		}, {
			"id": 7187,
			"name": "An Thượng 33",
			"pre": "Đường"
		}, {
			"id": 9316,
			"name": "An Thượng 34",
			"pre": "Đường"
		}, {
			"id": 7404,
			"name": "An Thượng 35",
			"pre": "Đường"
		}, {
			"id": 9150,
			"name": "An Thượng 36",
			"pre": "Đường"
		}, {
			"id": 6305,
			"name": "An Thượng 4",
			"pre": "Đường"
		}, {
			"id": 6888,
			"name": "An Thượng 5",
			"pre": "Đường"
		}, {
			"id": 5827,
			"name": "An Thượng 6",
			"pre": "Đường"
		}, {
			"id": 7302,
			"name": "An Thượng 7",
			"pre": "Đường"
		}, {
			"id": 7507,
			"name": "An Thượng 8",
			"pre": "Đường"
		}, {
			"id": 6251,
			"name": "An Thượng 9",
			"pre": "Đường"
		}, {
			"id": 7447,
			"name": "An Tư Công Chúa",
			"pre": "Đường"
		}, {
			"id": 10353,
			"name": "Anh Thơ",
			"pre": "Đường"
		}, {
			"id": 1916,
			"name": "Ấp Bắc",
			"pre": "Đường"
		}, {
			"id": 3146,
			"name": "B3",
			"pre": "Đường"
		}, {
			"id": 1468,
			"name": "Bà Bang Nhãn",
			"pre": "Đường"
		}, {
			"id": 9434,
			"name": "Bá Giang 1",
			"pre": "Đường"
		}, {
			"id": 9641,
			"name": "Bá Giáng 10",
			"pre": "Đường"
		}, {
			"id": 9642,
			"name": "Bá Giáng 11",
			"pre": "Đường"
		}, {
			"id": 9539,
			"name": "Bá Giáng 12",
			"pre": "Đường"
		}, {
			"id": 9538,
			"name": "Bá Giáng 14",
			"pre": "Đường"
		}, {
			"id": 9634,
			"name": "Bá Giáng 2",
			"pre": "Đường"
		}, {
			"id": 9635,
			"name": "Bá Giáng 3",
			"pre": "Đường"
		}, {
			"id": 9636,
			"name": "Bá Giáng 4",
			"pre": "Đường"
		}, {
			"id": 9415,
			"name": "Bá Giáng 5",
			"pre": "Đường"
		}, {
			"id": 9637,
			"name": "Bá Giáng 6",
			"pre": "Đường"
		}, {
			"id": 9638,
			"name": "Bá Giáng 7",
			"pre": "Đường"
		}, {
			"id": 9639,
			"name": "Bá Giáng 8",
			"pre": "Đường"
		}, {
			"id": 9640,
			"name": "Bá Giáng 9",
			"pre": "Đường"
		}, {
			"id": 800,
			"name": "Bà Huyện Thanh Quan",
			"pre": "Phố"
		}, {
			"id": 7364,
			"name": "Bắc Mỹ An",
			"pre": "Đường"
		}, {
			"id": 2318,
			"name": "Bát Nàn Công chúa",
			"pre": "Đường"
		}, {
			"id": 1913,
			"name": "Bình Giã",
			"pre": "Đường"
		}, {
			"id": 1921,
			"name": "Bình Kỳ",
			"pre": "Đường"
		}, {
			"id": 10584,
			"name": "Bùi Bỉnh Uyên",
			"pre": "Đường"
		}, {
			"id": 1483,
			"name": "Bùi Tá Hán",
			"pre": "Đường"
		}, {
			"id": 1902,
			"name": "Bùi Thế Mỹ",
			"pre": "Đường"
		}, {
			"id": 10747,
			"name": "Cao Hồng Lãnh",
			"pre": "Đường"
		}, {
			"id": 9190,
			"name": "Cao Sơn 3",
			"pre": "Đường"
		}, {
			"id": 10957,
			"name": "Cao Sơn 8",
			"pre": "Đường"
		}, {
			"id": 346,
			"name": "Cao Thắng",
			"pre": "Đường"
		}, {
			"id": 1532,
			"name": "Châu Thị Vĩnh Tế",
			"pre": "Đường"
		}, {
			"id": 1531,
			"name": "Chế Lan Viên",
			"pre": "Đường"
		}, {
			"id": 1901,
			"name": "Chu Cẩm Phong",
			"pre": "Đường"
		}, {
			"id": 1908,
			"name": "Chu Lai",
			"pre": "Đường"
		}, {
			"id": 184,
			"name": "Chương Dương",
			"pre": "Đường"
		}, {
			"id": 7802,
			"name": "Đa Mặn",
			"pre": "Đường"
		}, {
			"id": 8200,
			"name": "Đa Mặn 2",
			"pre": "Đường"
		}, {
			"id": 9444,
			"name": "Đa Mặn 3",
			"pre": "Đường"
		}, {
			"id": 7724,
			"name": "Đa Mặn 5",
			"pre": "Đường"
		}, {
			"id": 8871,
			"name": "Đa Mặn 6",
			"pre": "Đường"
		}, {
			"id": 9421,
			"name": "Đa Mặn 7",
			"pre": "Đường"
		}, {
			"id": 10406,
			"name": "Đa Mặn 9",
			"pre": "Đường"
		}, {
			"id": 7685,
			"name": "Đa Mỹ Tây 8",
			"pre": "Đường"
		}, {
			"id": 8027,
			"name": "Đa Phước 1",
			"pre": "Đường"
		}, {
			"id": 10697,
			"name": "Đa Phước 10",
			"pre": "Đường"
		}, {
			"id": 8182,
			"name": "Đa Phước 2",
			"pre": "Đường"
		}, {
			"id": 9774,
			"name": "Đa Phước 3",
			"pre": "Đường"
		}, {
			"id": 8133,
			"name": "Đa Phước 4",
			"pre": "Đường"
		}, {
			"id": 9775,
			"name": "Đa Phước 5",
			"pre": "Đường"
		}, {
			"id": 9255,
			"name": "Đa Phước 6",
			"pre": "Đường"
		}, {
			"id": 9776,
			"name": "Đa Phước 7",
			"pre": "Đường"
		}, {
			"id": 9777,
			"name": "Đa Phước 8",
			"pre": "Đường"
		}, {
			"id": 7540,
			"name": "Đa Phước 9",
			"pre": "Đường"
		}, {
			"id": 9643,
			"name": "Đại An 1",
			"pre": "Đường"
		}, {
			"id": 9644,
			"name": "Đại An 2",
			"pre": "Đường"
		}, {
			"id": 9645,
			"name": "Đại An 3",
			"pre": "Đường"
		}, {
			"id": 9646,
			"name": "Đại An 4",
			"pre": "Đường"
		}, {
			"id": 2073,
			"name": "Đặng Nguyên Cẩn",
			"pre": "Đường"
		}, {
			"id": 172,
			"name": "Đặng Thái Thân",
			"pre": "Phố"
		}, {
			"id": 2109,
			"name": "Đặng Xuân Thiều",
			"pre": "Đường"
		}, {
			"id": 5829,
			"name": "Đình Đông",
			"pre": "Đường"
		}, {
			"id": 8941,
			"name": "Đỗ Bá",
			"pre": "Đường"
		}, {
			"id": 3251,
			"name": "Đỗ Bí",
			"pre": "Đường"
		}, {
			"id": 627,
			"name": "Doãn Kế Thiện",
			"pre": "Phố"
		}, {
			"id": 2462,
			"name": "Đoàn Khuê",
			"pre": "Đường"
		}, {
			"id": 7852,
			"name": "Doãn Uẩn",
			"pre": "Đường"
		}, {
			"id": 7303,
			"name": "Đồng Bài 3",
			"pre": "Đường"
		}, {
			"id": 6881,
			"name": "Đông Hải",
			"pre": "Đường"
		}, {
			"id": 10365,
			"name": "Đông Hải 1",
			"pre": "Đường"
		}, {
			"id": 10371,
			"name": "Đông Hải 10",
			"pre": "Đường"
		}, {
			"id": 10372,
			"name": "Đông Hải 11",
			"pre": "Đường"
		}, {
			"id": 9214,
			"name": "Đông Hải 2",
			"pre": "Đường"
		}, {
			"id": 10366,
			"name": "Đông Hải 3",
			"pre": "Đường"
		}, {
			"id": 10367,
			"name": "Đông Hải 4",
			"pre": "Đường"
		}, {
			"id": 7464,
			"name": "Đông Hải 5",
			"pre": "Đường"
		}, {
			"id": 10368,
			"name": "Đông Hải 6",
			"pre": "Đường"
		}, {
			"id": 10369,
			"name": "Đông Hải 7",
			"pre": "Đường"
		}, {
			"id": 9458,
			"name": "Đông Hải 8",
			"pre": "Đường"
		}, {
			"id": 10370,
			"name": "Đông Hải 9",
			"pre": "Đường"
		}, {
			"id": 3434,
			"name": "Đồng Phước Huyến",
			"pre": "Đường"
		}, {
			"id": 8630,
			"name": "Đông Trà 2",
			"pre": "Đường"
		}, {
			"id": 8081,
			"name": "Đông Trà 4",
			"pre": "Đường"
		}, {
			"id": 8930,
			"name": "ĐT 607",
			"pre": "Đường"
		}, {
			"id": 1527,
			"name": "Dương Khuê",
			"pre": "Đường"
		}, {
			"id": 7267,
			"name": "Dương Thị Xuân Quý",
			"pre": "Đường"
		}, {
			"id": 10583,
			"name": "Dương Tôn Hải",
			"pre": "Đường"
		}, {
			"id": 1006,
			"name": "Dương Tử Giang",
			"pre": "Đường"
		}, {
			"id": 6258,
			"name": "Dương Tự Quán",
			"pre": "Đường"
		}, {
			"id": 7778,
			"name": "Giang Châu 1",
			"pre": "Đường"
		}, {
			"id": 10295,
			"name": "Giang Châu 3",
			"pre": "Đường"
		}, {
			"id": 6055,
			"name": "Hải Hồ",
			"pre": "Đường"
		}, {
			"id": 1071,
			"name": "Hải Triều",
			"pre": "Đường"
		}, {
			"id": 1525,
			"name": "Hàm Tử",
			"pre": "Đường"
		}, {
			"id": 10354,
			"name": "Hằng Phương Nữ Sỹ",
			"pre": "Đường"
		}, {
			"id": 1519,
			"name": "Hồ Huân Nghiệp",
			"pre": "Đường"
		}, {
			"id": 1896,
			"name": "Hồ Thấu",
			"pre": "Đường"
		}, {
			"id": 522,
			"name": "Hồ Xuân Hương",
			"pre": "Đường"
		}, {
			"id": 3095,
			"name": "Hòa Bình 1",
			"pre": "Phố"
		}, {
			"id": 3093,
			"name": "Hòa Bình 2",
			"pre": "Đường"
		}, {
			"id": 9233,
			"name": "Hoà Bình 3",
			"pre": "Đường"
		}, {
			"id": 9398,
			"name": "Hoà Bình 4",
			"pre": "Phố"
		}, {
			"id": 10415,
			"name": "Hòa Bình 5",
			"pre": "Đường"
		}, {
			"id": 9381,
			"name": "Hoà Bình 6",
			"pre": "Phố"
		}, {
			"id": 9373,
			"name": "Hoà Bình 7",
			"pre": "Đường"
		}, {
			"id": 6456,
			"name": "Hoà Cường",
			"pre": "Đường"
		}, {
			"id": 1274,
			"name": "Hoài Thanh",
			"pre": "Đường"
		}, {
			"id": 9304,
			"name": "Hoàng Bính Chính",
			"pre": "Đường"
		}, {
			"id": 3748,
			"name": "Hoàng Công Chất",
			"pre": "Đường"
		}, {
			"id": 1520,
			"name": "Hoàng Kế Viêm",
			"pre": "Đường"
		}, {
			"id": 938,
			"name": "Hoàng Sa",
			"pre": "Đường"
		}, {
			"id": 2319,
			"name": "Hoàng Thiều Hoa",
			"pre": "Đường"
		}, {
			"id": 1481,
			"name": "Hoàng Trọng Mậu",
			"pre": "Đường"
		}, {
			"id": 1482,
			"name": "Hoàng Văn Hòe",
			"pre": "Đường"
		}, {
			"id": 1895,
			"name": "Huyền Trân Công Chúa",
			"pre": "Đường"
		}, {
			"id": 1894,
			"name": "Huỳnh Bá Chánh",
			"pre": "Đường"
		}, {
			"id": 9542,
			"name": "Huỳnh Lắm",
			"pre": "Đường"
		}, {
			"id": 9666,
			"name": "Huỳnh Thị Một",
			"pre": "Đường"
		}, {
			"id": 1474,
			"name": "K20",
			"pre": "Đường"
		}, {
			"id": 9540,
			"name": "Khái Đông 4",
			"pre": "Đường"
		}, {
			"id": 9553,
			"name": "Khuê Bắc 1",
			"pre": "Đường"
		}, {
			"id": 9552,
			"name": "Khuê Bắc 2",
			"pre": "Đường"
		}, {
			"id": 9551,
			"name": "Khuê Bắc 3",
			"pre": "Đường"
		}, {
			"id": 9414,
			"name": "Khuê Đông",
			"pre": "Đường"
		}, {
			"id": 10669,
			"name": "Khuê Mỹ Đông",
			"pre": "Đường"
		}, {
			"id": 2303,
			"name": "Khuê Mỹ Đông 1",
			"pre": "Đường"
		}, {
			"id": 2304,
			"name": "Khuê Mỹ Đông 2",
			"pre": "Đường"
		}, {
			"id": 2305,
			"name": "Khuê Mỹ Đông 3",
			"pre": "Đường"
		}, {
			"id": 7256,
			"name": "Khuê Mỹ Đông 4",
			"pre": "Đường"
		}, {
			"id": 9556,
			"name": "Khuê Mỹ Đông 5",
			"pre": "Đường"
		}, {
			"id": 9555,
			"name": "Khuê Mỹ Đông 6",
			"pre": "Đường"
		}, {
			"id": 454,
			"name": "Kim Đồng",
			"pre": "Đường"
		}, {
			"id": 5686,
			"name": "Lã Xuân Oai",
			"pre": "Đường"
		}, {
			"id": 4036,
			"name": "Lê Đình Chinh",
			"pre": "Đường"
		}, {
			"id": 6387,
			"name": "Lê Hữu Khánh",
			"pre": "Đường"
		}, {
			"id": 2087,
			"name": "Lê Hữu Trác",
			"pre": "Đường"
		}, {
			"id": 7723,
			"name": "Lê Huy Cát",
			"pre": "Đường"
		}, {
			"id": 9744,
			"name": "Lê Hy Cát",
			"pre": "Đường"
		}, {
			"id": 3250,
			"name": "Lê Lộ",
			"pre": "Đường"
		}, {
			"id": 666,
			"name": "Lê Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 3184,
			"name": "Lê Quát",
			"pre": "Đường"
		}, {
			"id": 973,
			"name": "Lê Thị Riêng",
			"pre": "Đường"
		}, {
			"id": 3227,
			"name": "Lê Trung Đình",
			"pre": "Đường"
		}, {
			"id": 1480,
			"name": "Lê Văn Hiến",
			"pre": "Đường"
		}, {
			"id": 154,
			"name": "Lê Văn Hưu",
			"pre": "Phố"
		}, {
			"id": 1479,
			"name": "Lê Văn Tâm",
			"pre": "Đường"
		}, {
			"id": 9692,
			"name": "Lê Văn Thủ",
			"pre": "Đường"
		}, {
			"id": 1891,
			"name": "Lộc Ninh",
			"pre": "Đường"
		}, {
			"id": 10750,
			"name": "Lương Thế Kỷ",
			"pre": "Đường"
		}, {
			"id": 88,
			"name": "Lương Thế Vinh",
			"pre": "Đường"
		}, {
			"id": 1889,
			"name": "Lương Thúc Kỳ",
			"pre": "Đường"
		}, {
			"id": 9541,
			"name": "Lưu Đình Chất",
			"pre": "Đường"
		}, {
			"id": 6877,
			"name": "Lưu Quang Thuận",
			"pre": "Đường"
		}, {
			"id": 1925,
			"name": "Lưu Quang Vũ",
			"pre": "Đường"
		}, {
			"id": 934,
			"name": "Lưu Văn Lang",
			"pre": "Đường"
		}, {
			"id": 6716,
			"name": "Lý Văn Phức",
			"pre": "Đường"
		}, {
			"id": 6205,
			"name": "Lý Văn Tố",
			"pre": "Đường"
		}, {
			"id": 1280,
			"name": "Mạc Cửu",
			"pre": "Đường"
		}, {
			"id": 1155,
			"name": "Mạc Thiên Tích",
			"pre": "Phố"
		}, {
			"id": 1923,
			"name": "Mai Đăng Chơn",
			"pre": "Đường"
		}, {
			"id": 3069,
			"name": "Minh Mạng",
			"pre": "Đường"
		}, {
			"id": 10806,
			"name": "Mộc Sơn 2",
			"pre": "Đường"
		}, {
			"id": 8106,
			"name": "Mỹ An 1",
			"pre": "Đường"
		}, {
			"id": 9768,
			"name": "Mỹ An 10",
			"pre": "Đường"
		}, {
			"id": 9333,
			"name": "Mỹ An 11",
			"pre": "Đường"
		}, {
			"id": 7219,
			"name": "Mỹ An 12",
			"pre": "Đường"
		}, {
			"id": 9769,
			"name": "Mỹ An 14",
			"pre": "Đường"
		}, {
			"id": 9148,
			"name": "Mỹ An 15",
			"pre": "Đường"
		}, {
			"id": 7010,
			"name": "Mỹ An 16",
			"pre": "Đường"
		}, {
			"id": 6946,
			"name": "Mỹ An 17",
			"pre": "Đường"
		}, {
			"id": 6105,
			"name": "Mỹ An 18",
			"pre": "Đường"
		}, {
			"id": 8610,
			"name": "Mỹ An 19",
			"pre": "Đường"
		}, {
			"id": 9348,
			"name": "Mỹ An 20",
			"pre": "Đường"
		}, {
			"id": 9284,
			"name": "Mỹ An 22",
			"pre": "Đường"
		}, {
			"id": 7421,
			"name": "Mỹ An 23",
			"pre": "Đường"
		}, {
			"id": 8058,
			"name": "Mỹ An 24",
			"pre": "Đường"
		}, {
			"id": 9142,
			"name": "Mỹ An 25",
			"pre": "Đường"
		}, {
			"id": 9764,
			"name": "Mỹ An 3",
			"pre": "Đường"
		}, {
			"id": 9765,
			"name": "Mỹ An 4",
			"pre": "Đường"
		}, {
			"id": 8739,
			"name": "Mỹ An 5",
			"pre": "Đường"
		}, {
			"id": 7735,
			"name": "Mỹ An 6",
			"pre": "Đường"
		}, {
			"id": 6396,
			"name": "Mỹ An 7",
			"pre": "Đường"
		}, {
			"id": 9766,
			"name": "Mỹ An 8",
			"pre": "Đường"
		}, {
			"id": 9767,
			"name": "Mỹ An 9",
			"pre": "Đường"
		}, {
			"id": 2298,
			"name": "Mỹ Đa Đông 1",
			"pre": "Đường"
		}, {
			"id": 2297,
			"name": "Mỹ Đa Đông 3",
			"pre": "Đường"
		}, {
			"id": 8432,
			"name": "Mỹ Đa Đông 5",
			"pre": "Đường"
		}, {
			"id": 8594,
			"name": "Mỹ Đa Đông 8",
			"pre": "Đường"
		}, {
			"id": 10668,
			"name": "Mỹ Đa Tây",
			"pre": "Đường"
		}, {
			"id": 9770,
			"name": "Mỹ Đa Tây 1",
			"pre": "Đường"
		}, {
			"id": 9423,
			"name": "Mỹ Đa Tây 2",
			"pre": "Đường"
		}, {
			"id": 9771,
			"name": "Mỹ Đa Tây 3",
			"pre": "Đường"
		}, {
			"id": 9772,
			"name": "Mỹ Đa Tây 4",
			"pre": "Đường"
		}, {
			"id": 8411,
			"name": "Mỹ Đa Tây 5",
			"pre": "Đường"
		}, {
			"id": 7934,
			"name": "Mỹ Đa Tây 6",
			"pre": "Đường"
		}, {
			"id": 9773,
			"name": "Mỹ Đa Tây 7",
			"pre": "Đường"
		}, {
			"id": 8503,
			"name": "Mỹ Đa Tây 8",
			"pre": "Đường"
		}, {
			"id": 9386,
			"name": "Mỹ Đa Tây 9",
			"pre": "Đường"
		}, {
			"id": 6997,
			"name": "Mỹ Sơn 16",
			"pre": "Đường"
		}, {
			"id": 898,
			"name": "Nam Kỳ Khởi Nghĩa",
			"pre": "Đường"
		}, {
			"id": 1768,
			"name": "Nam Thành",
			"pre": "Đường"
		}, {
			"id": 7365,
			"name": "Nghiêm Xuân Yêm",
			"pre": "Đường"
		}, {
			"id": 6637,
			"name": "Nghiêm Xuân Yên",
			"pre": "Đường"
		}, {
			"id": 1511,
			"name": "Ngô Thì Sĩ",
			"pre": "Đường"
		}, {
			"id": 2307,
			"name": "Ngô Viết Hữu",
			"pre": "Đường"
		}, {
			"id": 1509,
			"name": "Ngũ Hành Sơn",
			"pre": "Đường"
		}, {
			"id": 2296,
			"name": "Nguyễn Bá Lân",
			"pre": "Đường"
		}, {
			"id": 636,
			"name": "Nguyễn Cơ Thạch",
			"pre": "Đường"
		}, {
			"id": 537,
			"name": "Nguyễn Đình Chiểu",
			"pre": "Đường"
		}, {
			"id": 9395,
			"name": "Nguyễn Đình Hiến",
			"pre": "Đường"
		}, {
			"id": 1477,
			"name": "Nguyễn Đình Trân",
			"pre": "Đường"
		}, {
			"id": 5860,
			"name": "Nguyễn Dục",
			"pre": "Đường"
		}, {
			"id": 286,
			"name": "Nguyễn Đức Thuận",
			"pre": "Đường"
		}, {
			"id": 3922,
			"name": "Nguyễn Duy Cung",
			"pre": "Đường"
		}, {
			"id": 449,
			"name": "Nguyễn Duy Trinh",
			"pre": "Đường"
		}, {
			"id": 1476,
			"name": "Nguyễn Khắc Viện",
			"pre": "Đường"
		}, {
			"id": 3619,
			"name": "Nguyễn Lữ",
			"pre": "Đường"
		}, {
			"id": 3907,
			"name": "Nguyễn Minh Châu",
			"pre": "Đường"
		}, {
			"id": 2083,
			"name": "Nguyễn Nghiêm",
			"pre": "Đường"
		}, {
			"id": 1883,
			"name": "Nguyễn Phạm Tuân",
			"pre": "Đường"
		}, {
			"id": 4051,
			"name": "Nguyễn Phan Chánh",
			"pre": "Đường"
		}, {
			"id": 5301,
			"name": "Nguyễn Quốc Trị",
			"pre": "Đường"
		}, {
			"id": 7189,
			"name": "Nguyễn Tạo",
			"pre": "Đường"
		}, {
			"id": 1884,
			"name": "Nguyễn Thần Hiến",
			"pre": "Đường"
		}, {
			"id": 981,
			"name": "Nguyễn Thành Ý",
			"pre": "Đường"
		}, {
			"id": 10703,
			"name": "Nguyễn Thế Kỷ",
			"pre": "Đường"
		}, {
			"id": 2454,
			"name": "Nguyễn Thông",
			"pre": "Đường"
		}, {
			"id": 4326,
			"name": "Nguyễn Thức Tự",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 3927,
			"name": "Nguyễn Trọng Hợp",
			"pre": "Đường"
		}, {
			"id": 725,
			"name": "Nguyễn Trung Trực",
			"pre": "Đường"
		}, {
			"id": 232,
			"name": "Nguyễn Tư Giản",
			"pre": "Đường"
		}, {
			"id": 3720,
			"name": "Nguyễn Tuyển",
			"pre": "Đường"
		}, {
			"id": 925,
			"name": "Nguyễn Văn Nguyễn",
			"pre": "Đường"
		}, {
			"id": 1493,
			"name": "Nguyễn Văn Thoại",
			"pre": "Đường"
		}, {
			"id": 316,
			"name": "Nguyễn Xiển",
			"pre": "Đường"
		}, {
			"id": 10196,
			"name": "Nguyễn Xuân Yêm",
			"pre": "Đường"
		}, {
			"id": 10805,
			"name": "Non Nước",
			"pre": "Đường"
		}, {
			"id": 10681,
			"name": "Nước Mặn",
			"pre": "Đường"
		}, {
			"id": 10694,
			"name": "Nước Mặn 1",
			"pre": "Đường"
		}, {
			"id": 10768,
			"name": "Nước Mặn 2",
			"pre": "Đường"
		}, {
			"id": 10704,
			"name": "Nước Mặn 3",
			"pre": "Đường"
		}, {
			"id": 10700,
			"name": "Nước Mặn 4",
			"pre": "Đường"
		}, {
			"id": 1492,
			"name": "Phạm Hữu Kính",
			"pre": "Đường"
		}, {
			"id": 9549,
			"name": "Phạm Hữu Nhật",
			"pre": "Đường"
		}, {
			"id": 7722,
			"name": "Phạm Kiêm Ích",
			"pre": "Đường"
		}, {
			"id": 2302,
			"name": "Phạm Kiệt",
			"pre": "Đường"
		}, {
			"id": 1882,
			"name": "Phạm Nổi",
			"pre": "Đường"
		}, {
			"id": 579,
			"name": "Phạm Thận Duật",
			"pre": "Đường"
		}, {
			"id": 613,
			"name": "Phạm Tuấn Tài",
			"pre": "Phố"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 1881,
			"name": "Phan Đình Thông",
			"pre": "Đường"
		}, {
			"id": 1491,
			"name": "Phan Hành Sơn",
			"pre": "Đường"
		}, {
			"id": 8017,
			"name": "Phần Lăng 18",
			"pre": "Đường"
		}, {
			"id": 9356,
			"name": "Phần Lăng 19",
			"pre": "Đường"
		}, {
			"id": 7550,
			"name": "Phan Liêm",
			"pre": "Đường"
		}, {
			"id": 1490,
			"name": "Phan Thúc Duyện",
			"pre": "Đường"
		}, {
			"id": 908,
			"name": "Phan Tôn",
			"pre": "Đường"
		}, {
			"id": 1878,
			"name": "Phan Tòng",
			"pre": "Đường"
		}, {
			"id": 1489,
			"name": "Phan Tứ",
			"pre": "Đường"
		}, {
			"id": 2287,
			"name": "Phan Tứ",
			"pre": "Đường"
		}, {
			"id": 7658,
			"name": "Quán Khái",
			"pre": "Đường"
		}, {
			"id": 2309,
			"name": "Quán Khái 1",
			"pre": "Đường"
		}, {
			"id": 2310,
			"name": "Quán Khái 2",
			"pre": "Đường"
		}, {
			"id": 2311,
			"name": "Quán Khái 3",
			"pre": "Đường"
		}, {
			"id": 2312,
			"name": "Quán Khái 4",
			"pre": "Đường"
		}, {
			"id": 2314,
			"name": "Quán Khái 5",
			"pre": "Đường"
		}, {
			"id": 2315,
			"name": "Quán Khái 6",
			"pre": "Đường"
		}, {
			"id": 2316,
			"name": "Quán Khái 7",
			"pre": "Đường"
		}, {
			"id": 2306,
			"name": "Quán Khái 8",
			"pre": "Đường"
		}, {
			"id": 6343,
			"name": "Sơn Thủy",
			"pre": "Đường"
		}, {
			"id": 2403,
			"name": "Sơn Thủy 1",
			"pre": "Đường"
		}, {
			"id": 10992,
			"name": "Sơn Thủy 11",
			"pre": "Đường"
		}, {
			"id": 9550,
			"name": "Sơn Thủy 12",
			"pre": "Đường"
		}, {
			"id": 2404,
			"name": "Sơn Thủy 2",
			"pre": "Đường"
		}, {
			"id": 2405,
			"name": "Sơn Thủy 3",
			"pre": "Đường"
		}, {
			"id": 2406,
			"name": "Sơn Thủy 4",
			"pre": "Đường"
		}, {
			"id": 2407,
			"name": "Sơn Thủy 5",
			"pre": "Đường"
		}, {
			"id": 2409,
			"name": "Sơn Thủy 6",
			"pre": "Đường"
		}, {
			"id": 2410,
			"name": "Sơn Thủy 7",
			"pre": "Đường"
		}, {
			"id": 2411,
			"name": "Sơn Thủy 8",
			"pre": "Đường"
		}, {
			"id": 2412,
			"name": "Sơn Thủy 9",
			"pre": "Đường"
		}, {
			"id": 8765,
			"name": "Sơn Thủy Đông",
			"pre": "Đường"
		}, {
			"id": 9424,
			"name": "Sơn Thủy Đông 1",
			"pre": "Đường"
		}, {
			"id": 10940,
			"name": "Sơn Thủy Đông 2",
			"pre": "Đường"
		}, {
			"id": 10811,
			"name": "Sơn Thủy Đông 3",
			"pre": "Đường"
		}, {
			"id": 10427,
			"name": "Sơn Thủy Đông 4",
			"pre": "Đường"
		}, {
			"id": 3024,
			"name": "Song hào",
			"pre": "Đường"
		}, {
			"id": 1091,
			"name": "Sư Vạn Hạnh",
			"pre": "Đường"
		}, {
			"id": 9603,
			"name": "Tân Lưu",
			"pre": "Đường"
		}, {
			"id": 9160,
			"name": "Tân Trà",
			"pre": "Đường"
		}, {
			"id": 354,
			"name": "Tây Sơn",
			"pre": "Đường"
		}, {
			"id": 3262,
			"name": "Thạch Lam",
			"pre": "Phố"
		}, {
			"id": 7743,
			"name": "Thăng  Long",
			"pre": "Đường"
		}, {
			"id": 8781,
			"name": "Thích Phước Huệ",
			"pre": "Đường"
		}, {
			"id": 1545,
			"name": "Thượng Đức",
			"pre": "Đường"
		}, {
			"id": 9044,
			"name": "Thủy Sơn",
			"pre": "Đường"
		}, {
			"id": 9309,
			"name": "Thuỷ Sơn 1",
			"pre": "Đường"
		}, {
			"id": 10341,
			"name": "Thủy Sơn 3",
			"pre": "Đường"
		}, {
			"id": 9380,
			"name": "Thuỷ Sơn 4",
			"pre": "Đường"
		}, {
			"id": 9341,
			"name": "Thuỷ Sơn 5",
			"pre": "Đường"
		}, {
			"id": 5828,
			"name": "Tiền Đức",
			"pre": "Đường"
		}, {
			"id": 1320,
			"name": "Tôn Đản",
			"pre": "Đường"
		}, {
			"id": 730,
			"name": "Tôn Thất Thiệp",
			"pre": "Phố"
		}, {
			"id": 10852,
			"name": "Trà Khê 3",
			"pre": "Đường"
		}, {
			"id": 10841,
			"name": "Trà Khê 7",
			"pre": "Đường"
		}, {
			"id": 1554,
			"name": "Trà Lộ",
			"pre": "Đường"
		}, {
			"id": 8204,
			"name": "Trần Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 553,
			"name": "Trần Đại Nghĩa",
			"pre": "Phố"
		}, {
			"id": 1472,
			"name": "Trần Hoành",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 3852,
			"name": "Trần Hữu Độ",
			"pre": "Đường"
		}, {
			"id": 3471,
			"name": "Trần Hữu Dực",
			"pre": "Đường"
		}, {
			"id": 139,
			"name": "Trần Khánh Dư",
			"pre": "Đường"
		}, {
			"id": 674,
			"name": "Trần Quốc Hoàn",
			"pre": "Phố"
		}, {
			"id": 7683,
			"name": "Trần Thị Lý",
			"pre": "Đường"
		}, {
			"id": 10774,
			"name": "Trần Văn Đán",
			"pre": "Đường"
		}, {
			"id": 1486,
			"name": "Trần Văn Dư",
			"pre": "Đường"
		}, {
			"id": 4430,
			"name": "Trần Văn Thành",
			"pre": "Đường"
		}, {
			"id": 1181,
			"name": "Trần Xuân Hòa",
			"pre": "Đường"
		}, {
			"id": 5981,
			"name": "Trịnh Lỗi",
			"pre": "Đường"
		}, {
			"id": 9647,
			"name": "Trung Hòa 1",
			"pre": "Đường"
		}, {
			"id": 9648,
			"name": "Trung Hòa 2",
			"pre": "Đường"
		}, {
			"id": 9649,
			"name": "Trung Hòa 3",
			"pre": "Đường"
		}, {
			"id": 9650,
			"name": "Trung Hòa 4",
			"pre": "Đường"
		}, {
			"id": 8756,
			"name": "Trung Hòa 5",
			"pre": "Đường"
		}, {
			"id": 9250,
			"name": "Trương Công Hy",
			"pre": "Đường"
		}, {
			"id": 2474,
			"name": "Trương Đăng Quế",
			"pre": "Đường"
		}, {
			"id": 1485,
			"name": "Trường Sa",
			"pre": "Đường"
		}, {
			"id": 1471,
			"name": "Trương Văn Hiến",
			"pre": "Đường"
		}, {
			"id": 4082,
			"name": "Tùng Thiện Vương",
			"pre": "Đường"
		}, {
			"id": 1264,
			"name": "Tuy Lý Vương",
			"pre": "Đường"
		}, {
			"id": 2289,
			"name": "Ung Văn Khiêm",
			"pre": "Đường"
		}, {
			"id": 7271,
			"name": "Vân Đài Nữ Sĩ",
			"pre": "Đường"
		}, {
			"id": 2308,
			"name": "Văn Tân",
			"pre": "Đường"
		}, {
			"id": 1542,
			"name": "Vạn Tường",
			"pre": "Đường"
		}, {
			"id": 7021,
			"name": "Võ Chí Công",
			"pre": "Đường"
		}, {
			"id": 7209,
			"name": "Võ Nguyên Giáp",
			"pre": "Đường"
		}, {
			"id": 1484,
			"name": "Võ Như Hưng",
			"pre": "Đường"
		}, {
			"id": 8397,
			"name": "Võ Văn Đặng",
			"pre": "Đường"
		}, {
			"id": 9680,
			"name": "Võ Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 1470,
			"name": "Vũ Duy Đoán",
			"pre": "Đường"
		}, {
			"id": 550,
			"name": "Vũ Hữu Lợi",
			"pre": "Phố"
		}, {
			"id": 2301,
			"name": "Vũ Mộng Nguyên",
			"pre": "Đường"
		}, {
			"id": 10276,
			"name": "Vũ Văn Cẩn",
			"pre": "Đường"
		}, {
			"id": 9544,
			"name": "Vùng Trung 10",
			"pre": "Đường"
		}, {
			"id": 9543,
			"name": "Vùng Trung 11",
			"pre": "Đường"
		}, {
			"id": 9548,
			"name": "Vùng Trung 6",
			"pre": "Đường"
		}, {
			"id": 9547,
			"name": "Vùng Trung 7",
			"pre": "Đường"
		}, {
			"id": 9546,
			"name": "Vùng Trung 8",
			"pre": "Đường"
		}, {
			"id": 9545,
			"name": "Vùng Trung 9",
			"pre": "Đường"
		}, {
			"id": 1002,
			"name": "Yersin",
			"pre": "Đường"
		}],
		"project": [{
			"id": 1983,
			"name": "Danang Beach Resort",
			"lat": 15.974594116210937,
			"lng": 108.27829742431641,
			"cats": [44, 57, 59, 325]
		}, {
			"id": 769,
			"name": "FPT City Đà Nẵng",
			"lat": 15.976931571960449,
			"lng": 108.26297760009766,
			"cats": [40, 48, 50, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 614,
			"name": "Furama Villas",
			"lat": 16.039451599121094,
			"lng": 108.24980926513672,
			"cats": [40, 44, 48, 55, 57, 59, 325]
		}, {
			"id": 1934,
			"name": "Fusion Maia Resort",
			"lat": 16.03106689453125,
			"lng": 108.25498199462891,
			"cats": [44, 55, 59, 325]
		}, {
			"id": 859,
			"name": "Hòa Quý City",
			"lat": 16.000446319580078,
			"lng": 108.23336029052734,
			"cats": [40, 41, 48, 52, 55, 57, 325]
		}, {
			"id": 681,
			"name": "Hyatt Regency",
			"lat": 16.013021469116211,
			"lng": 108.26374053955078,
			"cats": [44, 48, 55, 57, 324, 325, 326]
		}, {
			"id": 1791,
			"name": "Nam Cầu Tuyên Sơn-Nam Việt Á",
			"lat": 16.030107498168945,
			"lng": 108.24070739746094,
			"cats": [40, 44, 48, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 2179,
			"name": "Naman Residences",
			"lat": 15.968838691711426,
			"lng": 108.28459930419922,
			"cats": [44, 325]
		}, {
			"id": 890,
			"name": "Norman Estates",
			"lat": 15.980513572692871,
			"lng": 108.27773284912109,
			"cats": [44, 57, 59, 325]
		}, {
			"id": 2313,
			"name": "Phố Sơn Thủy",
			"lat": 16.010951995849609,
			"lng": 108.25303649902344,
			"cats": []
		}, {
			"id": 1650,
			"name": "Phú Mỹ An",
			"lat": 15.991097450256348,
			"lng": 108.26021575927734,
			"cats": [40, 48, 51, 52, 55, 59, 324, 325, 326]
		}, {
			"id": 930,
			"name": "Premier Village",
			"lat": 16.043981552124023,
			"lng": 108.24979400634766,
			"cats": [40, 44, 325]
		}, {
			"id": 2235,
			"name": "Sky Han River",
			"lat": 16.02955436706543,
			"lng": 108.24293518066406,
			"cats": [40, 48, 59, 283, 325, 361]
		}, {
			"id": 2410,
			"name": "Smart Center House",
			"lat": 16.000804901123047,
			"lng": 108.23274993896484,
			"cats": []
		}, {
			"id": 1609,
			"name": "T18 Royal Era 1",
			"lat": 16.053117752075195,
			"lng": 108.24723815917969,
			"cats": [40, 44, 48, 55, 57, 324, 325, 326]
		}, {
			"id": 1815,
			"name": "The Dune Residences",
			"lat": 15.973139762878418,
			"lng": 108.27846527099609,
			"cats": [44, 325]
		}, {
			"id": 956,
			"name": "The Empire Resort",
			"lat": 16.010547637939453,
			"lng": 108.26180267333984,
			"cats": [40, 44, 48, 55, 57, 59, 324, 325, 326]
		}, {
			"id": 1577,
			"name": "The Ocean Apartment",
			"lat": 15.972965240478516,
			"lng": 108.28278350830078,
			"cats": [44, 48, 59, 324, 325, 326]
		}, {
			"id": 1781,
			"name": "The Ocean Villas",
			"lat": 15.974202156066895,
			"lng": 108.27997589111328,
			"cats": [44, 325]
		}, {
			"id": 1985,
			"name": "The Point",
			"lat": 15.978657722473145,
			"lng": 108.27596282958984,
			"cats": [40, 44, 325]
		}, {
			"id": 2084,
			"name": "Vinpearl Premium Đà Nẵng",
			"lat": 16.006965637207031,
			"lng": 108.26590728759766,
			"cats": [44, 325]
		}, {
			"id": 1579,
			"name": "Vision City",
			"lat": 15.953861236572266,
			"lng": 108.27404022216797,
			"cats": [40, 44, 48, 59, 325]
		}]
	}, {
		"id": 49,
		"name": "Sơn Trà",
		"pre": "Quận",
		"ward": [{
			"id": 262,
			"name": " An Hải Bắc",
			"pre": "Phường"
		}, {
			"id": 261,
			"name": "An Hải Đông",
			"pre": "Phường"
		}, {
			"id": 263,
			"name": "An Hải Tây",
			"pre": "Phường"
		}, {
			"id": 264,
			"name": "Mân Thái",
			"pre": "Phường"
		}, {
			"id": 266,
			"name": "Nại Hiên Đông ",
			"pre": "Phường"
		}, {
			"id": 265,
			"name": "Phước Mỹ",
			"pre": "Phường"
		}, {
			"id": 267,
			"name": "Thọ Quang",
			"pre": "Phường"
		}],
		"street": [{
			"id": 3786,
			"name": "5",
			"pre": "Đường"
		}, {
			"id": 8913,
			"name": "An Cư 1",
			"pre": "Đường"
		}, {
			"id": 10645,
			"name": "An Cư 11",
			"pre": "Đường"
		}, {
			"id": 7201,
			"name": "An Cư 2",
			"pre": "Đường"
		}, {
			"id": 7200,
			"name": "An Cư 3",
			"pre": "Đường"
		}, {
			"id": 7106,
			"name": "An Cư 4",
			"pre": "Đường"
		}, {
			"id": 6780,
			"name": "An Cư 5",
			"pre": "Đường"
		}, {
			"id": 9337,
			"name": "An Cư 6",
			"pre": "Đường"
		}, {
			"id": 8389,
			"name": "An Cư 7",
			"pre": "Đường"
		}, {
			"id": 9951,
			"name": "An Đồn",
			"pre": "Đường"
		}, {
			"id": 8481,
			"name": "An Đồn 5",
			"pre": "Đường"
		}, {
			"id": 9230,
			"name": "An Hải 1",
			"pre": "Đường"
		}, {
			"id": 6107,
			"name": "An Hải 10",
			"pre": "Đường"
		}, {
			"id": 9168,
			"name": "An Hải 11",
			"pre": "Đường"
		}, {
			"id": 9864,
			"name": "An Hải 12",
			"pre": "Đường"
		}, {
			"id": 9412,
			"name": "An Hải 14",
			"pre": "Đường"
		}, {
			"id": 8843,
			"name": "An Hải 15",
			"pre": "Đường"
		}, {
			"id": 9466,
			"name": "An Hải 16",
			"pre": "Đường"
		}, {
			"id": 9865,
			"name": "An Hải 17",
			"pre": "Đường"
		}, {
			"id": 6900,
			"name": "An Hải 18",
			"pre": "Đường"
		}, {
			"id": 9866,
			"name": "An Hải 19",
			"pre": "Đường"
		}, {
			"id": 9860,
			"name": "An Hải 2",
			"pre": "Đường"
		}, {
			"id": 8978,
			"name": "An Hải 20",
			"pre": "Đường"
		}, {
			"id": 6057,
			"name": "An Hải 3",
			"pre": "Đường"
		}, {
			"id": 6037,
			"name": "An Hải 4",
			"pre": "Đường"
		}, {
			"id": 9861,
			"name": "An Hải 5",
			"pre": "Đường"
		}, {
			"id": 6056,
			"name": "An Hải 6",
			"pre": "Đường"
		}, {
			"id": 7429,
			"name": "An Hải 7",
			"pre": "Đường"
		}, {
			"id": 9862,
			"name": "An Hải 8",
			"pre": "Đường"
		}, {
			"id": 9863,
			"name": "An Hải 9",
			"pre": "Đường"
		}, {
			"id": 9943,
			"name": "An Hải Bắc 1",
			"pre": "Đường"
		}, {
			"id": 9942,
			"name": "An Hải Bắc 2",
			"pre": "Đường"
		}, {
			"id": 9944,
			"name": "An Hải Bắc 3",
			"pre": "Đường"
		}, {
			"id": 9945,
			"name": "An Hải Bắc 4",
			"pre": "Đường"
		}, {
			"id": 9946,
			"name": "An Hải Bắc 5",
			"pre": "Đường"
		}, {
			"id": 9947,
			"name": "An Hải Bắc 6",
			"pre": "Đường"
		}, {
			"id": 9266,
			"name": "An Hải Bắc 8",
			"pre": "Đường"
		}, {
			"id": 7621,
			"name": "An Hòa 4",
			"pre": "Đường"
		}, {
			"id": 2122,
			"name": "An Mỹ",
			"pre": "Đường"
		}, {
			"id": 2111,
			"name": "An Nhơn",
			"pre": "Đường"
		}, {
			"id": 5861,
			"name": "An Nhơn 1",
			"pre": "Đường"
		}, {
			"id": 10363,
			"name": "An Nhơn 2",
			"pre": "Đường"
		}, {
			"id": 8949,
			"name": "An Nhơn 3",
			"pre": "Đường"
		}, {
			"id": 10924,
			"name": "An Nhơn 4",
			"pre": "Đường"
		}, {
			"id": 7948,
			"name": "An Nhơn 5",
			"pre": "Đường"
		}, {
			"id": 8525,
			"name": "An Nhơn 6",
			"pre": "Đường"
		}, {
			"id": 6486,
			"name": "An Nhơn 7",
			"pre": "Đường"
		}, {
			"id": 8079,
			"name": "An Nhơn 8",
			"pre": "Đường"
		}, {
			"id": 8775,
			"name": "An Nhơn 9",
			"pre": "Đường"
		}, {
			"id": 6279,
			"name": "An Thượng",
			"pre": "Đường"
		}, {
			"id": 7528,
			"name": "An Thượng 1",
			"pre": "Đường"
		}, {
			"id": 8280,
			"name": "An Thượng 26",
			"pre": "Đường"
		}, {
			"id": 8107,
			"name": "An Thượng 27",
			"pre": "Đường"
		}, {
			"id": 8793,
			"name": "An Thượng 29",
			"pre": "Đường"
		}, {
			"id": 7187,
			"name": "An Thượng 33",
			"pre": "Đường"
		}, {
			"id": 6305,
			"name": "An Thượng 4",
			"pre": "Đường"
		}, {
			"id": 2127,
			"name": "An Trung 1",
			"pre": "Đường"
		}, {
			"id": 2128,
			"name": "An Trung 2",
			"pre": "Đường"
		}, {
			"id": 2130,
			"name": "An Trung 3",
			"pre": "Đường"
		}, {
			"id": 9533,
			"name": "An Trung 4",
			"pre": "Đường"
		}, {
			"id": 5733,
			"name": "Bạch Đằng Đông",
			"pre": "Đường"
		}, {
			"id": 9778,
			"name": "Bằng Lăng 1",
			"pre": "Đường"
		}, {
			"id": 9779,
			"name": "Bằng Lăng 2",
			"pre": "Đường"
		}, {
			"id": 9695,
			"name": "Bằng Lăng 3",
			"pre": "Đường"
		}, {
			"id": 9694,
			"name": "Bằng Lăng 5",
			"pre": "Đường"
		}, {
			"id": 2180,
			"name": "Bình Than",
			"pre": "Đường"
		}, {
			"id": 1927,
			"name": "Bùi Dương Lịch",
			"pre": "Đường"
		}, {
			"id": 1199,
			"name": "Bùi Hữu Nghĩa",
			"pre": "Đường"
		}, {
			"id": 1267,
			"name": "Bùi Huy Bích",
			"pre": "Đường"
		}, {
			"id": 1935,
			"name": "Bùi Lâm",
			"pre": "Đường"
		}, {
			"id": 1939,
			"name": "Bùi Quốc Hưng",
			"pre": "Đường"
		}, {
			"id": 484,
			"name": "Bùi Thị Xuân",
			"pre": "Đường"
		}, {
			"id": 2386,
			"name": "Cẩm Bắc 10",
			"pre": "Đường"
		}, {
			"id": 1076,
			"name": "Cao Bá Nhạ",
			"pre": "Đường"
		}, {
			"id": 845,
			"name": "Cao Bá Quát",
			"pre": "Đường"
		}, {
			"id": 711,
			"name": "Cao Lỗ",
			"pre": "Đường"
		}, {
			"id": 1532,
			"name": "Châu Thị Vĩnh Tế",
			"pre": "Đường"
		}, {
			"id": 6565,
			"name": "Chu Huy Mân",
			"pre": "Đường"
		}, {
			"id": 184,
			"name": "Chương Dương",
			"pre": "Đường"
		}, {
			"id": 9852,
			"name": "Cổ Mân 1",
			"pre": "Đường"
		}, {
			"id": 9854,
			"name": "Cổ Mân 2",
			"pre": "Đường"
		}, {
			"id": 9853,
			"name": "Cổ Mân 3",
			"pre": "Đường"
		}, {
			"id": 9855,
			"name": "Cổ Mân 4",
			"pre": "Đường"
		}, {
			"id": 9856,
			"name": "Cổ Mân 5",
			"pre": "Đường"
		}, {
			"id": 9857,
			"name": "Cổ Mân 6",
			"pre": "Đường"
		}, {
			"id": 9858,
			"name": "Cổ Mân 7",
			"pre": "Đường"
		}, {
			"id": 9859,
			"name": "Cổ Mân 8",
			"pre": "Đường"
		}, {
			"id": 8170,
			"name": "Cổ Mân 9",
			"pre": "Đường"
		}, {
			"id": 98,
			"name": "Dã Tượng",
			"pre": "Đường"
		}, {
			"id": 5687,
			"name": "Đại lộ Thăng Long",
			"pre": "Đường"
		}, {
			"id": 5564,
			"name": "Đặng Nhữ Lâm",
			"pre": "Đường"
		}, {
			"id": 440,
			"name": "Đặng Trần Côn",
			"pre": "Phố"
		}, {
			"id": 8206,
			"name": "Đào Duy Kỳ",
			"pre": "Đường"
		}, {
			"id": 2143,
			"name": "Đinh Công Trứ",
			"pre": "Đường"
		}, {
			"id": 6483,
			"name": "Đinh Đạt",
			"pre": "Đường"
		}, {
			"id": 171,
			"name": "Đinh Lễ",
			"pre": "Đường"
		}, {
			"id": 2144,
			"name": "Đinh Nhật Thận",
			"pre": "Đường"
		}, {
			"id": 7423,
			"name": "Đinh Thị Hòa",
			"pre": "Đường"
		}, {
			"id": 5665,
			"name": "Đỗ Anh Hàn",
			"pre": "Đường"
		}, {
			"id": 531,
			"name": "Đỗ Hành",
			"pre": "Đường"
		}, {
			"id": 5881,
			"name": "Đỗ Huy Uyển",
			"pre": "Đường"
		}, {
			"id": 6468,
			"name": "Đỗ Thế Chấp",
			"pre": "Đường"
		}, {
			"id": 1416,
			"name": "Đỗ Xuân Hợp",
			"pre": "Đường"
		}, {
			"id": 890,
			"name": "Đông Du",
			"pre": "Đường"
		}, {
			"id": 6791,
			"name": "Đông Giang",
			"pre": "Đường"
		}, {
			"id": 3044,
			"name": "Đông Kinh Nghĩa Thục",
			"pre": "Đường"
		}, {
			"id": 964,
			"name": "Dương Đình Nghệ",
			"pre": "Đường"
		}, {
			"id": 2021,
			"name": "Dương Lâm",
			"pre": "Đường"
		}, {
			"id": 2025,
			"name": "Dương Thanh",
			"pre": "Đường"
		}, {
			"id": 2027,
			"name": "Dương Trí Trạch",
			"pre": "Đường"
		}, {
			"id": 2029,
			"name": "Dương Tự Minh",
			"pre": "Đường"
		}, {
			"id": 2031,
			"name": "Dương Văn An",
			"pre": "Đường"
		}, {
			"id": 2032,
			"name": "Dương Vân Nga",
			"pre": "Đường"
		}, {
			"id": 2179,
			"name": "Giáp Hải",
			"pre": "Đường"
		}, {
			"id": 6142,
			"name": "Hà Bổng",
			"pre": "Đường"
		}, {
			"id": 2134,
			"name": "Hà Chương",
			"pre": "Đường"
		}, {
			"id": 4305,
			"name": "Hà Đặc",
			"pre": "Phố"
		}, {
			"id": 9532,
			"name": "Hà Kỳ Ngộ",
			"pre": "Đường"
		}, {
			"id": 10337,
			"name": "Hà Thị Thân",
			"pre": "Đường"
		}, {
			"id": 2255,
			"name": "Hà Tông Huân",
			"pre": "Đường"
		}, {
			"id": 6604,
			"name": "Hậu Lân",
			"pre": "Đường"
		}, {
			"id": 6606,
			"name": "Hiệp Thành 13",
			"pre": "Đường"
		}, {
			"id": 10539,
			"name": "Hồ Hán Thương",
			"pre": "Đường"
		}, {
			"id": 1302,
			"name": "Hồ Học Lãm",
			"pre": "Đường"
		}, {
			"id": 2133,
			"name": "Hồ Nghinh",
			"pre": "Đường"
		}, {
			"id": 2177,
			"name": "Hồ Sĩ Phấn",
			"pre": "Đường"
		}, {
			"id": 2211,
			"name": "Hồ Sĩ Tân",
			"pre": "Đường"
		}, {
			"id": 7336,
			"name": "Hồ Sỹ Tân",
			"pre": "Đường"
		}, {
			"id": 1896,
			"name": "Hồ Thấu",
			"pre": "Đường"
		}, {
			"id": 522,
			"name": "Hồ Xuân Hương",
			"pre": "Đường"
		}, {
			"id": 9780,
			"name": "Hoa Hồng 1",
			"pre": "Đường"
		}, {
			"id": 9781,
			"name": "Hoa Hồng 2",
			"pre": "Đường"
		}, {
			"id": 9783,
			"name": "Hoa Hồng 3",
			"pre": "Đường"
		}, {
			"id": 9782,
			"name": "Hoa Hồng 4",
			"pre": "Đường"
		}, {
			"id": 533,
			"name": "Hoa Lư",
			"pre": "Phố"
		}, {
			"id": 1274,
			"name": "Hoài Thanh",
			"pre": "Đường"
		}, {
			"id": 3418,
			"name": "Hoàng Bích Sơn",
			"pre": "Đường"
		}, {
			"id": 6693,
			"name": "Hoàng Đức Lương",
			"pre": "Đường"
		}, {
			"id": 1520,
			"name": "Hoàng Kế Viêm",
			"pre": "Đường"
		}, {
			"id": 616,
			"name": "Hoàng Quốc Việt",
			"pre": "Đường"
		}, {
			"id": 938,
			"name": "Hoàng Sa",
			"pre": "Đường"
		}, {
			"id": 1276,
			"name": "Hoàng Sĩ Khải",
			"pre": "Đường"
		}, {
			"id": 7900,
			"name": "Hoàng Sỹ Khải",
			"pre": "Đường"
		}, {
			"id": 6691,
			"name": "Hương Hải Thiền Sư",
			"pre": "Đường"
		}, {
			"id": 2146,
			"name": "Khúc Hạo",
			"pre": "Đường"
		}, {
			"id": 1571,
			"name": "Khúc Thừa Dụ",
			"pre": "Phố"
		}, {
			"id": 454,
			"name": "Kim Đồng",
			"pre": "Đường"
		}, {
			"id": 4379,
			"name": "Lâm Hoành",
			"pre": "Đường"
		}, {
			"id": 830,
			"name": "Lê Bình",
			"pre": "Đường"
		}, {
			"id": 8105,
			"name": "Lê Bôi",
			"pre": "Đường"
		}, {
			"id": 2216,
			"name": "Lê Cảnh Tuân",
			"pre": "Đường"
		}, {
			"id": 3359,
			"name": "Lê Chân",
			"pre": "Đường"
		}, {
			"id": 5758,
			"name": "Lê Độ",
			"pre": "Đường"
		}, {
			"id": 650,
			"name": "Lê Đức Thọ",
			"pre": "Đường"
		}, {
			"id": 2229,
			"name": "Lê Hữu Kiều",
			"pre": "Đường"
		}, {
			"id": 2087,
			"name": "Lê Hữu Trác",
			"pre": "Đường"
		}, {
			"id": 3248,
			"name": "Lê Lâm",
			"pre": "Đường"
		}, {
			"id": 3250,
			"name": "Lê Lộ",
			"pre": "Đường"
		}, {
			"id": 8920,
			"name": "Lê Mạnh Trinh",
			"pre": "Đường"
		}, {
			"id": 7718,
			"name": "Lê Minh Trung",
			"pre": "Đường"
		}, {
			"id": 7079,
			"name": "Lê Ninh",
			"pre": "Đường"
		}, {
			"id": 2178,
			"name": "Lê Phụ Trần",
			"pre": "Đường"
		}, {
			"id": 155,
			"name": "Lê Phụng Hiểu",
			"pre": "Phố"
		}, {
			"id": 666,
			"name": "Lê Quang Đạo",
			"pre": "Đường"
		}, {
			"id": 7444,
			"name": "Lê Sĩ Tân",
			"pre": "Đường"
		}, {
			"id": 7499,
			"name": "Lê Tấn Toán",
			"pre": "Đường"
		}, {
			"id": 2141,
			"name": "Lê Tấn Trung.",
			"pre": "Đường"
		}, {
			"id": 4146,
			"name": "Lê Thước",
			"pre": "Đường"
		}, {
			"id": 1938,
			"name": "Lê Văn Duyệt",
			"pre": "Đường"
		}, {
			"id": 2272,
			"name": "Lê Văn Huân",
			"pre": "Đường"
		}, {
			"id": 314,
			"name": "Lê Văn Lương",
			"pre": "Đường"
		}, {
			"id": 7354,
			"name": "Lê Văn Quý",
			"pre": "Đường"
		}, {
			"id": 325,
			"name": "Lê Văn Thiêm",
			"pre": "Phố"
		}, {
			"id": 5923,
			"name": "Lê Văn Thứ",
			"pre": "Đường"
		}, {
			"id": 8153,
			"name": "Lộc Phước",
			"pre": "Đường"
		}, {
			"id": 9940,
			"name": "Lộc Phước 1",
			"pre": "Đường"
		}, {
			"id": 6288,
			"name": "Loseby",
			"pre": "Đường"
		}, {
			"id": 896,
			"name": "Lương Hữu Khánh",
			"pre": "Đường"
		}, {
			"id": 88,
			"name": "Lương Thế Vinh",
			"pre": "Đường"
		}, {
			"id": 1284,
			"name": "Lưu Hữu Phước",
			"pre": "Đường"
		}, {
			"id": 118,
			"name": "Lý Đạo Thành",
			"pre": "Đường"
		}, {
			"id": 2201,
			"name": "Lý Nhật Quang",
			"pre": "Đường"
		}, {
			"id": 6609,
			"name": "Lý Ông Trọng",
			"pre": "Đường"
		}, {
			"id": 237,
			"name": "Lý Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 1449,
			"name": "Lý Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 2267,
			"name": "Lý Tử Tấn",
			"pre": "Đường"
		}, {
			"id": 6205,
			"name": "Lý Văn Tố",
			"pre": "Đường"
		}, {
			"id": 561,
			"name": "Mai Hắc Đế",
			"pre": "Phố"
		}, {
			"id": 2187,
			"name": "Mân Quang 10",
			"pre": "Đường"
		}, {
			"id": 10921,
			"name": "Mân Quang 11",
			"pre": "Đường"
		}, {
			"id": 9374,
			"name": "Mân Quang 4",
			"pre": "Đường"
		}, {
			"id": 2182,
			"name": "Mân Quang 6",
			"pre": "Đường"
		}, {
			"id": 2183,
			"name": "Mân Quang 7",
			"pre": "Đường"
		}, {
			"id": 2181,
			"name": "Mân Quang 8",
			"pre": "Đường"
		}, {
			"id": 2184,
			"name": "Mân Quang 9",
			"pre": "Đường"
		}, {
			"id": 6105,
			"name": "Mỹ An 18",
			"pre": "Đường"
		}, {
			"id": 6396,
			"name": "Mỹ An 7",
			"pre": "Đường"
		}, {
			"id": 9766,
			"name": "Mỹ An 8",
			"pre": "Đường"
		}, {
			"id": 2299,
			"name": "Mỹ Đa Đông 2",
			"pre": "Đường"
		}, {
			"id": 7199,
			"name": "Mỹ Khê",
			"pre": "Đường"
		}, {
			"id": 10925,
			"name": "Mỹ Khê 1",
			"pre": "Đường"
		}, {
			"id": 10839,
			"name": "Mỹ Khê 2",
			"pre": "Đường"
		}, {
			"id": 10881,
			"name": "Mỹ Khê 4",
			"pre": "Đường"
		}, {
			"id": 8778,
			"name": "N.Morrison",
			"pre": "Đường"
		}, {
			"id": 9435,
			"name": "Nại Hiên Đông",
			"pre": "Đường"
		}, {
			"id": 10269,
			"name": "Nại Hiên Đông 1",
			"pre": "Đường"
		}, {
			"id": 10275,
			"name": "Nại Hiên Đông 10",
			"pre": "Đường"
		}, {
			"id": 2235,
			"name": "Nại Hiên Đông 11",
			"pre": "Đường"
		}, {
			"id": 2238,
			"name": "Nại Hiên Đông 12",
			"pre": "Đường"
		}, {
			"id": 2241,
			"name": "Nại Hiên Đông 14",
			"pre": "Đường"
		}, {
			"id": 2242,
			"name": "Nại Hiên Đông 15",
			"pre": "Đường"
		}, {
			"id": 2243,
			"name": "Nại Hiên Đông 16",
			"pre": "Đường"
		}, {
			"id": 9950,
			"name": "Nại Hiên Đông 17",
			"pre": "Đường"
		}, {
			"id": 9238,
			"name": "Nại Hiên Đông 2",
			"pre": "Đường"
		}, {
			"id": 10270,
			"name": "Nại Hiên Đông 3",
			"pre": "Đường"
		}, {
			"id": 10268,
			"name": "Nại Hiên Đông 4",
			"pre": "Đường"
		}, {
			"id": 10271,
			"name": "Nại Hiên Đông 5",
			"pre": "Đường"
		}, {
			"id": 10272,
			"name": "Nại Hiên Đông 6",
			"pre": "Đường"
		}, {
			"id": 10273,
			"name": "Nại Hiên Đông 7",
			"pre": "Đường"
		}, {
			"id": 10274,
			"name": "Nại Hiên Đông 8",
			"pre": "Đường"
		}, {
			"id": 7340,
			"name": "Nại Hiên Đông 9",
			"pre": "Đường"
		}, {
			"id": 2188,
			"name": "Nại Nghĩa 1",
			"pre": "Đường"
		}, {
			"id": 2192,
			"name": "Nại Nghĩa 2",
			"pre": "Đường"
		}, {
			"id": 2193,
			"name": "Nại Nghĩa 3",
			"pre": "Đường"
		}, {
			"id": 2194,
			"name": "Nại Nghĩa 4",
			"pre": "Đường"
		}, {
			"id": 2196,
			"name": "Nại Nghĩa 5",
			"pre": "Đường"
		}, {
			"id": 2197,
			"name": "Nại Nghĩa 6",
			"pre": "Đường"
		}, {
			"id": 9402,
			"name": "Nại Thịnh 2",
			"pre": "Đường"
		}, {
			"id": 9948,
			"name": "Nại Thịnh 3",
			"pre": "Đường"
		}, {
			"id": 9949,
			"name": "Nại Thịnh 4",
			"pre": "Đường"
		}, {
			"id": 9535,
			"name": "Nai Thịnh 5",
			"pre": "Đường"
		}, {
			"id": 9537,
			"name": "Nai Thịnh 6",
			"pre": "Đường"
		}, {
			"id": 9536,
			"name": "Nai Thịnh 7",
			"pre": "Đường"
		}, {
			"id": 9534,
			"name": "Nại Thịnh 8",
			"pre": "Đường"
		}, {
			"id": 10649,
			"name": "Nại Tú",
			"pre": "Đường"
		}, {
			"id": 9952,
			"name": "Nại Tú 1",
			"pre": "Đường"
		}, {
			"id": 9953,
			"name": "Nại Tú 2",
			"pre": "Đường"
		}, {
			"id": 9954,
			"name": "Nại Tú 3",
			"pre": "Đường"
		}, {
			"id": 9955,
			"name": "Nại Tú 4",
			"pre": "Đường"
		}, {
			"id": 10251,
			"name": "Nại Tú 8",
			"pre": "Đường"
		}, {
			"id": 10790,
			"name": "Nam Thọ",
			"pre": "Đường"
		}, {
			"id": 6455,
			"name": "Nam Thọ 1",
			"pre": "Đường"
		}, {
			"id": 10395,
			"name": "Nam Thọ 2",
			"pre": "Đường"
		}, {
			"id": 7352,
			"name": "Nam Thọ 4",
			"pre": "Đường"
		}, {
			"id": 9941,
			"name": "Nam Thọ 6",
			"pre": "Đường"
		}, {
			"id": 2269,
			"name": "Ngô Cao Lãng",
			"pre": "Đường"
		}, {
			"id": 4137,
			"name": "Ngô Quang Huy",
			"pre": "Đường"
		}, {
			"id": 120,
			"name": "Ngô Quyền",
			"pre": "Đường"
		}, {
			"id": 2226,
			"name": "Ngô Thì Hiệu",
			"pre": "Đường"
		}, {
			"id": 2220,
			"name": "Ngô Thì Hương",
			"pre": "Đường"
		}, {
			"id": 1511,
			"name": "Ngô Thì Sĩ",
			"pre": "Đường"
		}, {
			"id": 2222,
			"name": "Ngô Thì Trí",
			"pre": "Đường"
		}, {
			"id": 6529,
			"name": "Ngô Trí Hòa",
			"pre": "Đường"
		}, {
			"id": 5052,
			"name": "Ngọc Hân",
			"pre": "Đường"
		}, {
			"id": 560,
			"name": "Nguyễn Bỉnh Khiêm",
			"pre": "Đường"
		}, {
			"id": 277,
			"name": "Nguyễn Cao Luyện",
			"pre": "Đường"
		}, {
			"id": 3382,
			"name": "Nguyễn Chí Diễu",
			"pre": "Đường"
		}, {
			"id": 6203,
			"name": "Nguyễn Công Sáu",
			"pre": "Đường"
		}, {
			"id": 517,
			"name": "Nguyễn Công Trứ",
			"pre": "Đường"
		}, {
			"id": 2257,
			"name": "Nguyễn Đăng Giai",
			"pre": "Đường"
		}, {
			"id": 2271,
			"name": "Nguyễn Đăng Tuyển",
			"pre": "Đường"
		}, {
			"id": 4230,
			"name": "Nguyễn Địa Lô",
			"pre": "Đường"
		}, {
			"id": 7308,
			"name": "Nguyễn Đức An",
			"pre": "Đường"
		}, {
			"id": 10457,
			"name": "Nguyễn Đức Thông",
			"pre": "Đường"
		}, {
			"id": 3450,
			"name": "Nguyễn Duy Hiệu",
			"pre": "Đường"
		}, {
			"id": 2654,
			"name": "Nguyễn Hiền",
			"pre": "Đường"
		}, {
			"id": 8401,
			"name": "Nguyễn Hữu An",
			"pre": "Đường"
		}, {
			"id": 7208,
			"name": "Nguyễn Hữu Thông",
			"pre": "Đường"
		}, {
			"id": 6603,
			"name": "Nguyễn Huy Chương",
			"pre": "Đường"
		}, {
			"id": 122,
			"name": "Nguyễn Khắc Cần",
			"pre": "Phố"
		}, {
			"id": 6608,
			"name": "Nguyễn Khanh",
			"pre": "Đường"
		}, {
			"id": 1131,
			"name": "Nguyễn Lâm",
			"pre": "Đường"
		}, {
			"id": 2400,
			"name": "Nguyễn Phan Vinh",
			"pre": "Đường"
		}, {
			"id": 5153,
			"name": "Nguyễn Phục",
			"pre": "Đường"
		}, {
			"id": 3164,
			"name": "Nguyễn Sáng",
			"pre": "Đường"
		}, {
			"id": 3725,
			"name": "Nguyễn Sỹ Cố",
			"pre": "Đường"
		}, {
			"id": 8358,
			"name": "Nguyễn Thế Lộc",
			"pre": "Đường"
		}, {
			"id": 2214,
			"name": "Nguyễn Thị Ba",
			"pre": "Đường"
		}, {
			"id": 304,
			"name": "Nguyễn Thị Định",
			"pre": "Đường"
		}, {
			"id": 4054,
			"name": "Nguyễn Thiện Kế",
			"pre": "Đường"
		}, {
			"id": 6557,
			"name": "Nguyễn Thiếp",
			"pre": "Đường"
		}, {
			"id": 2454,
			"name": "Nguyễn Thông",
			"pre": "Đường"
		}, {
			"id": 10623,
			"name": "Nguyễn Trọng Nghĩa",
			"pre": "Đường"
		}, {
			"id": 2259,
			"name": "Nguyễn Trực",
			"pre": "Đường"
		}, {
			"id": 725,
			"name": "Nguyễn Trung Trực",
			"pre": "Đường"
		}, {
			"id": 326,
			"name": "Nguyễn Tuân",
			"pre": "Đường"
		}, {
			"id": 2260,
			"name": "Nguyễn Tuấn Thiện",
			"pre": "Đường"
		}, {
			"id": 87,
			"name": "Nguyễn Văn Côn",
			"pre": "Đường"
		}, {
			"id": 270,
			"name": "Nguyễn Văn Cừ",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 3376,
			"name": "Nguyễn Văn Siêu",
			"pre": "Đường"
		}, {
			"id": 1493,
			"name": "Nguyễn Văn Thoại",
			"pre": "Đường"
		}, {
			"id": 3299,
			"name": "Nguyễn Xuân Khoát",
			"pre": "Đường"
		}, {
			"id": 2119,
			"name": "Phạm Cự Lượng",
			"pre": "Đường"
		}, {
			"id": 5888,
			"name": "Phạm Cực Lượng",
			"pre": "Đường"
		}, {
			"id": 1492,
			"name": "Phạm Hữu Kính",
			"pre": "Đường"
		}, {
			"id": 3917,
			"name": "Phạm Huy Thông",
			"pre": "Phố"
		}, {
			"id": 3452,
			"name": "Phạm Quang Ảnh",
			"pre": "Đường"
		}, {
			"id": 3059,
			"name": "Phạm Thiều",
			"pre": "Đường"
		}, {
			"id": 4060,
			"name": "Phạm Tu",
			"pre": "Đường"
		}, {
			"id": 7168,
			"name": "Phạm Vấn",
			"pre": "Đường"
		}, {
			"id": 1433,
			"name": "Phạm Văn Đồng",
			"pre": "Đường"
		}, {
			"id": 2148,
			"name": "Phạm Văn Xảo",
			"pre": "Đường"
		}, {
			"id": 832,
			"name": "Phan Bá Phiến",
			"pre": "Đường"
		}, {
			"id": 5869,
			"name": "Phan Bôi",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 741,
			"name": "Phan Đăng Lưu",
			"pre": "Phố"
		}, {
			"id": 229,
			"name": "Phan Huy Chú",
			"pre": "Đường"
		}, {
			"id": 727,
			"name": "Phan Huy Ích",
			"pre": "Đường"
		}, {
			"id": 2233,
			"name": "Phan Huy Thực.",
			"pre": "Đường"
		}, {
			"id": 1489,
			"name": "Phan Tứ",
			"pre": "Đường"
		}, {
			"id": 1341,
			"name": "Phan Văn Hớn",
			"pre": "Đường"
		}, {
			"id": 576,
			"name": "Phó Đức Chính",
			"pre": "Phố"
		}, {
			"id": 6393,
			"name": "Phú Lộc 15",
			"pre": "Đường"
		}, {
			"id": 6460,
			"name": "Phúc Hạo",
			"pre": "Đường"
		}, {
			"id": 497,
			"name": "Phùng Khắc Khoan",
			"pre": "Đường"
		}, {
			"id": 2137,
			"name": "Phước Mỹ 1",
			"pre": "Đường"
		}, {
			"id": 2135,
			"name": "Phước Mỹ 3",
			"pre": "Đường"
		}, {
			"id": 2139,
			"name": "Phước Mỹ 4",
			"pre": "Đường"
		}, {
			"id": 10671,
			"name": "Phước Trường",
			"pre": "Đường"
		}, {
			"id": 9247,
			"name": "Phước Trường 1",
			"pre": "Đường"
		}, {
			"id": 9295,
			"name": "Phước Trường 10",
			"pre": "Đường"
		}, {
			"id": 9296,
			"name": "Phước Trường 11",
			"pre": "Đường"
		}, {
			"id": 9297,
			"name": "Phước Trường 12",
			"pre": "Đường"
		}, {
			"id": 9298,
			"name": "Phước Trường 14",
			"pre": "Đường"
		}, {
			"id": 9299,
			"name": "Phước Trường 15",
			"pre": "Đường"
		}, {
			"id": 10225,
			"name": "Phước Trường 2",
			"pre": "Đường"
		}, {
			"id": 8524,
			"name": "Phước Trường 3",
			"pre": "Đường"
		}, {
			"id": 8268,
			"name": "Phước Trường 4",
			"pre": "Đường"
		}, {
			"id": 8885,
			"name": "Phước Trường 5",
			"pre": "Đường"
		}, {
			"id": 6289,
			"name": "Phước Trường 6",
			"pre": "Đường"
		}, {
			"id": 8623,
			"name": "Phước Trường 7",
			"pre": "Đường"
		}, {
			"id": 10226,
			"name": "Phước Trường 8",
			"pre": "Đường"
		}, {
			"id": 10227,
			"name": "Phước Trường 9",
			"pre": "Đường"
		}, {
			"id": 8281,
			"name": "Phước Tường 2",
			"pre": "Đường"
		}, {
			"id": 2280,
			"name": "Suối Đá 1",
			"pre": "Đường"
		}, {
			"id": 2274,
			"name": "Suối Đá 2",
			"pre": "Đường"
		}, {
			"id": 2282,
			"name": "Suối Đá 2",
			"pre": "Đường"
		}, {
			"id": 2283,
			"name": "Suối Đá 3",
			"pre": "Đường"
		}, {
			"id": 921,
			"name": "Sương Nguyệt Ánh",
			"pre": "Đường"
		}, {
			"id": 6477,
			"name": "Tạ Mỹ Duật",
			"pre": "Đường"
		}, {
			"id": 6607,
			"name": "Tân Chánh Hiệp 16",
			"pre": "Đường"
		}, {
			"id": 1227,
			"name": "Tản Đà",
			"pre": "Đường"
		}, {
			"id": 10909,
			"name": "Tân Phú 1",
			"pre": "Đường"
		}, {
			"id": 8624,
			"name": "Tân Phú 2",
			"pre": "Đường"
		}, {
			"id": 10483,
			"name": "Tân Thái",
			"pre": "Đường"
		}, {
			"id": 2417,
			"name": "Tân Thái 1",
			"pre": "Đường"
		}, {
			"id": 2426,
			"name": "Tân Thái 10",
			"pre": "Đường"
		}, {
			"id": 2418,
			"name": "Tân Thái 2",
			"pre": "Đường"
		}, {
			"id": 2419,
			"name": "Tân Thái 3",
			"pre": "Đường"
		}, {
			"id": 2420,
			"name": "Tân Thái 4",
			"pre": "Đường"
		}, {
			"id": 2421,
			"name": "Tân Thái 5",
			"pre": "Đường"
		}, {
			"id": 2422,
			"name": "Tân Thái 6",
			"pre": "Đường"
		}, {
			"id": 2423,
			"name": "Tân Thái 7",
			"pre": "Đường"
		}, {
			"id": 2424,
			"name": "Tân Thái 8",
			"pre": "Đường"
		}, {
			"id": 2425,
			"name": "Tân Thái 9",
			"pre": "Đường"
		}, {
			"id": 3128,
			"name": "Tân Thuận",
			"pre": "Đường"
		}, {
			"id": 3262,
			"name": "Thạch Lam",
			"pre": "Phố"
		}, {
			"id": 514,
			"name": "Thái Phiên",
			"pre": "Đường"
		}, {
			"id": 7860,
			"name": "Thanh Bình Xanh",
			"pre": "Đường"
		}, {
			"id": 6605,
			"name": "Thạnh Lộc 27",
			"pre": "Đường"
		}, {
			"id": 2437,
			"name": "Thanh Thủy",
			"pre": "Đường"
		}, {
			"id": 6493,
			"name": "Thanh Vinh",
			"pre": "Đường"
		}, {
			"id": 9529,
			"name": "Thành Vinh 2",
			"pre": "Đường"
		}, {
			"id": 9528,
			"name": "Thành Vinh 3",
			"pre": "Đường"
		}, {
			"id": 9530,
			"name": "Thành Vinh 4",
			"pre": "Đường"
		}, {
			"id": 9531,
			"name": "Thành Vinh 5",
			"pre": "Đường"
		}, {
			"id": 4090,
			"name": "Thế Lữ",
			"pre": "Đường"
		}, {
			"id": 8781,
			"name": "Thích Phước Huệ",
			"pre": "Đường"
		}, {
			"id": 2261,
			"name": "Thích Thiện Chiếu",
			"pre": "Đường"
		}, {
			"id": 2275,
			"name": "Thôi Hữu",
			"pre": "Đường"
		}, {
			"id": 920,
			"name": "Thủ Khoa Huân",
			"pre": "Đường"
		}, {
			"id": 355,
			"name": "Tô Hiến Thành",
			"pre": "Đường"
		}, {
			"id": 4069,
			"name": "Tôn Quang Phiệt",
			"pre": "Đường"
		}, {
			"id": 385,
			"name": "Tôn Thất Tùng",
			"pre": "Đường"
		}, {
			"id": 6610,
			"name": "Trại Gà",
			"pre": "Đường"
		}, {
			"id": 8204,
			"name": "Trần Bạch Đằng",
			"pre": "Đường"
		}, {
			"id": 6290,
			"name": "Trần Đình Đàn",
			"pre": "Đường"
		}, {
			"id": 5694,
			"name": "Trần Đức Lương",
			"pre": "Đường"
		}, {
			"id": 6709,
			"name": "Trần Đức Thông",
			"pre": "Đường"
		}, {
			"id": 502,
			"name": "Trần Hưng Đạo",
			"pre": "Đường"
		}, {
			"id": 391,
			"name": "Trần Hữu Tước",
			"pre": "Đường"
		}, {
			"id": 545,
			"name": "Trần Khát Chân",
			"pre": "Đường"
		}, {
			"id": 10875,
			"name": "Trần Lâm",
			"pre": "Đường"
		}, {
			"id": 218,
			"name": "Trần Nguyên Hãn",
			"pre": "Phố"
		}, {
			"id": 552,
			"name": "Trần Nhân Tông",
			"pre": "Đường"
		}, {
			"id": 420,
			"name": "Trần Quang Diệu",
			"pre": "Đường"
		}, {
			"id": 138,
			"name": "Trần Quang Khải",
			"pre": "Đường"
		}, {
			"id": 8915,
			"name": "Trần Sâm",
			"pre": "Đường"
		}, {
			"id": 4085,
			"name": "Trần Thanh Mại",
			"pre": "Đường"
		}, {
			"id": 503,
			"name": "Trần Thánh Tông",
			"pre": "Đường"
		}, {
			"id": 2278,
			"name": "Trần Thuyết",
			"pre": "Đường"
		}, {
			"id": 1486,
			"name": "Trần Văn Dư",
			"pre": "Đường"
		}, {
			"id": 546,
			"name": "Triệu Việt Vương",
			"pre": "Đường"
		}, {
			"id": 461,
			"name": "Trương Định",
			"pre": "Đường"
		}, {
			"id": 220,
			"name": "Trương Hán Siêu",
			"pre": "Đường"
		}, {
			"id": 2234,
			"name": "Trương Quốc Dung",
			"pre": "Đường"
		}, {
			"id": 3329,
			"name": "Trương Quyền",
			"pre": "Đường"
		}, {
			"id": 1485,
			"name": "Trường Sa",
			"pre": "Đường"
		}, {
			"id": 1094,
			"name": "Trường Sơn",
			"pre": "Đường"
		}, {
			"id": 509,
			"name": "Vân Đồn",
			"pre": "Đường"
		}, {
			"id": 3940,
			"name": "Võ Duy Ninh",
			"pre": "Đường"
		}, {
			"id": 9281,
			"name": "Võ Nghĩa",
			"pre": "Đường"
		}, {
			"id": 7209,
			"name": "Võ Nguyên Giáp",
			"pre": "Đường"
		}, {
			"id": 1484,
			"name": "Võ Như Hưng",
			"pre": "Đường"
		}, {
			"id": 1234,
			"name": "Võ Trường Toản",
			"pre": "Đường"
		}, {
			"id": 1001,
			"name": "Võ Văn Kiệt",
			"pre": "Đường"
		}, {
			"id": 6752,
			"name": "Vũ Đình Long",
			"pre": "Đường"
		}, {
			"id": 2258,
			"name": "Vũ Ngọc Nhạ",
			"pre": "Đường"
		}, {
			"id": 3696,
			"name": "Vũ Tông Phan",
			"pre": "Phố"
		}, {
			"id": 2124,
			"name": "Vũ Văn Dũng",
			"pre": "Đường"
		}, {
			"id": 2219,
			"name": "Vũng Thùng 1",
			"pre": "Đường"
		}, {
			"id": 2245,
			"name": "Vũng Thùng 2",
			"pre": "Đường"
		}, {
			"id": 2246,
			"name": "Vũng Thùng 3",
			"pre": "Đường"
		}, {
			"id": 2248,
			"name": "Vũng Thùng 4",
			"pre": "Đường"
		}, {
			"id": 2250,
			"name": "Vũng Thùng 5",
			"pre": "Đường"
		}, {
			"id": 308,
			"name": "Vương Thừa Vũ",
			"pre": "Đường"
		}, {
			"id": 135,
			"name": "Yết Kiêu",
			"pre": "Đường"
		}],
		"project": [{
			"id": 946,
			"name": "À La Carte Hotel",
			"lat": 16.06861686706543,
			"lng": 108.24445343017578,
			"cats": [48, 55, 57, 324, 326]
		}, {
			"id": 2349,
			"name": "Alphanam Luxury Apartment",
			"lat": 16.069581985473633,
			"lng": 108.24532318115234,
			"cats": []
		}, {
			"id": 2039,
			"name": "An Viên City",
			"lat": 16.083999633789063,
			"lng": 108.23861694335937,
			"cats": [40, 48, 51, 55, 59, 163, 325]
		}, {
			"id": 896,
			"name": "Ánh Dương - Soleil Đà Nẵng",
			"lat": 16.070833206176758,
			"lng": 108.24378967285156,
			"cats": [48, 55, 57, 59, 324, 326]
		}, {
			"id": 1015,
			"name": "Azura",
			"lat": 16.071706771850586,
			"lng": 108.22905731201172,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1259,
			"name": "Bluehouse",
			"lat": 16.09246826171875,
			"lng": 108.22873687744141,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1265,
			"name": "Euro Village",
			"lat": 16.052820205688477,
			"lng": 108.23196411132812,
			"cats": [40, 44, 48, 59, 325]
		}, {
			"id": 1204,
			"name": "Fusion Suites Da Nang Beach",
			"lat": 16.076030731201172,
			"lng": 108.24451446533203,
			"cats": [44, 48, 55, 324, 326]
		}, {
			"id": 2391,
			"name": "Habour Ville",
			"lat": 16.098268508911133,
			"lng": 108.22502899169922,
			"cats": []
		}, {
			"id": 515,
			"name": "Harmony Tower",
			"lat": 16.0712890625,
			"lng": 108.24066925048828,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1101,
			"name": "InterContinental Da nang",
			"lat": 16.120256423950195,
			"lng": 108.30657958984375,
			"cats": [44, 48, 57, 325]
		}, {
			"id": 2461,
			"name": "Marina Complex",
			"lat": 16.092119216918945,
			"lng": 108.22557830810547,
			"cats": []
		}, {
			"id": 1088,
			"name": "Mercure Sơn Trà",
			"lat": 16.106418609619141,
			"lng": 108.29531097412109,
			"cats": [40, 44, 55, 57, 325]
		}, {
			"id": 2326,
			"name": "Mường Thanh Sơn Trà",
			"lat": 16.053169250488281,
			"lng": 108.24815368652344,
			"cats": []
		}, {
			"id": 1147,
			"name": "Nest Home",
			"lat": 16.089340209960938,
			"lng": 108.24095916748047,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 2487,
			"name": "Ngô Quyền Trade Center",
			"lat": 16.10125732421875,
			"lng": 108.24726104736328,
			"cats": []
		}, {
			"id": 825,
			"name": "Olalani Resort \u0026 Condotel",
			"lat": 16.029542922973633,
			"lng": 108.25609588623047,
			"cats": [44, 48, 55, 57, 324, 325, 326]
		}, {
			"id": 759,
			"name": "Olalani Riverside Towers",
			"lat": 16.086826324462891,
			"lng": 108.22808074951172,
			"cats": [48, 50, 55, 59, 324, 326]
		}, {
			"id": 1243,
			"name": "Phúc Lộc Viên",
			"lat": 16.081996917724609,
			"lng": 108.23812866210937,
			"cats": [40, 52, 325]
		}, {
			"id": 2200,
			"name": "Sơn Trà Ocean View",
			"lat": 16.095062255859375,
			"lng": 108.24802398681641,
			"cats": [40, 283, 361]
		}, {
			"id": 2519,
			"name": "Star Villa Sơn Trà",
			"lat": 16.102832794189453,
			"lng": 108.23314666748047,
			"cats": []
		}, {
			"id": 1787,
			"name": "The Monarchy",
			"lat": 16.056062698364258,
			"lng": 108.23291778564453,
			"cats": [48, 55, 59, 283, 324, 325, 326]
		}, {
			"id": 758,
			"name": "The Summit",
			"lat": 16.096309661865234,
			"lng": 108.24553680419922,
			"cats": [48, 55, 324, 326]
		}, {
			"id": 1102,
			"name": "The Sun City Riverside",
			"lat": 16.055637359619141,
			"lng": 108.23120880126953,
			"cats": [44, 48, 55, 57, 59, 325]
		}, {
			"id": 2476,
			"name": "Vinpearl Condotel Đà Nẵng",
			"lat": 16.070474624633789,
			"lng": 108.22957611083984,
			"cats": []
		}]
	}, {
		"id": 50,
		"name": "Thanh Khê",
		"pre": "Quận",
		"ward": [{
			"id": 251,
			"name": "An Khê",
			"pre": "Phường"
		}, {
			"id": 252,
			"name": "Chính Gián",
			"pre": "Phường"
		}, {
			"id": 256,
			"name": "Hòa Khê",
			"pre": "Phường"
		}, {
			"id": 253,
			"name": "Tam Thuận",
			"pre": "Phường"
		}, {
			"id": 254,
			"name": "Tân Chính",
			"pre": "Phường"
		}, {
			"id": 255,
			"name": "Thạc Gián",
			"pre": "Phường"
		}, {
			"id": 259,
			"name": "Thanh Khê Đông",
			"pre": "Phường"
		}, {
			"id": 260,
			"name": "Thanh Khê Tây",
			"pre": "Phường"
		}, {
			"id": 12070,
			"name": "Thanh Lộc Đán",
			"pre": "Phường"
		}, {
			"id": 258,
			"name": "Vĩnh Trung",
			"pre": "Phường"
		}, {
			"id": 257,
			"name": "Xuân Hà",
			"pre": "Phường"
		}],
		"street": [{
			"id": 2166,
			"name": "29",
			"pre": "Đường"
		}, {
			"id": 1718,
			"name": "30/4",
			"pre": "Đường"
		}, {
			"id": 9450,
			"name": "An Hòa 11",
			"pre": "Đường"
		}, {
			"id": 6850,
			"name": "An Xuân",
			"pre": "Đường"
		}, {
			"id": 7298,
			"name": "An Xuân 1",
			"pre": "Đường"
		}, {
			"id": 7297,
			"name": "An Xuân 2",
			"pre": "Đường"
		}, {
			"id": 8004,
			"name": "Bàu Hạc",
			"pre": "Đường"
		}, {
			"id": 9129,
			"name": "Bàu Hạc 1",
			"pre": "Đường"
		}, {
			"id": 7515,
			"name": "Bàu Hạc 4",
			"pre": "Đường"
		}, {
			"id": 5887,
			"name": "Bầu Hạc 5",
			"pre": "Đường"
		}, {
			"id": 9231,
			"name": "Bàu Hạc 6",
			"pre": "Đường"
		}, {
			"id": 10865,
			"name": "Bàu Hạt 1",
			"pre": "Đường"
		}, {
			"id": 6398,
			"name": "Bàu Hạt 2",
			"pre": "Đường"
		}, {
			"id": 9394,
			"name": "Bàu Làng",
			"pre": "Đường"
		}, {
			"id": 9222,
			"name": "Bàu Trảng 1",
			"pre": "Đường"
		}, {
			"id": 6787,
			"name": "Bầu Trảng 2",
			"pre": "Đường"
		}, {
			"id": 9522,
			"name": "Bàu Trảng 3",
			"pre": "Đường"
		}, {
			"id": 9521,
			"name": "Bàu Trảng 4",
			"pre": "Đường"
		}, {
			"id": 6475,
			"name": "Bàu Trảng 5",
			"pre": "Đường"
		}, {
			"id": 7963,
			"name": "Bàu Trảng 6",
			"pre": "Đường"
		}, {
			"id": 9625,
			"name": "Bàu Trảng 7",
			"pre": "Đường"
		}, {
			"id": 1659,
			"name": "Bế Văn Đàn",
			"pre": "Đường"
		}, {
			"id": 10141,
			"name": "Bình Thái 4",
			"pre": "Đường"
		}, {
			"id": 1759,
			"name": "Cách Mạng Tháng Tám",
			"pre": "Đường"
		}, {
			"id": 5787,
			"name": "Cần Giuộc",
			"pre": "Đường"
		}, {
			"id": 320,
			"name": "Cù Chính Lan",
			"pre": "Đường"
		}, {
			"id": 2068,
			"name": "Đặng Đình Vân",
			"pre": "Đường"
		}, {
			"id": 761,
			"name": "Đặng Phúc Thông",
			"pre": "Đường"
		}, {
			"id": 782,
			"name": "Đặng Thai Mai",
			"pre": "Đường"
		}, {
			"id": 2100,
			"name": "Đặng Thùy Trâm",
			"pre": "Đường"
		}, {
			"id": 402,
			"name": "Đào Duy Anh",
			"pre": "Đường"
		}, {
			"id": 1096,
			"name": "Đào Duy Từ",
			"pre": "Đường"
		}, {
			"id": 1004,
			"name": "Đào Nguyên Phổ",
			"pre": "Đường"
		}, {
			"id": 256,
			"name": "Điện Biên Phủ",
			"pre": "Đường"
		}, {
			"id": 3413,
			"name": "Đinh Núp",
			"pre": "Đường"
		}, {
			"id": 9170,
			"name": "Đinh Thị Vân",
			"pre": "Đường"
		}, {
			"id": 66,
			"name": "Đinh Tiên Hoàng",
			"pre": "Đường"
		}, {
			"id": 630,
			"name": "Đỗ Đức Dục",
			"pre": "Đường"
		}, {
			"id": 567,
			"name": "Đỗ Ngọc Du",
			"pre": "Đường"
		}, {
			"id": 5615,
			"name": "Đỗ Quang",
			"pre": "Phố"
		}, {
			"id": 3965,
			"name": "Đoàn Nhữ Hài",
			"pre": "Đường"
		}, {
			"id": 1652,
			"name": "Đống Đa",
			"pre": "Đường"
		}, {
			"id": 8541,
			"name": "Đông Lợi 1",
			"pre": "Đường"
		}, {
			"id": 9721,
			"name": "Đông Lợi 2",
			"pre": "Đường"
		}, {
			"id": 10294,
			"name": "Đông Lợi 3",
			"pre": "Đường"
		}, {
			"id": 7480,
			"name": "Đức Lợi I",
			"pre": "Đường"
		}, {
			"id": 5781,
			"name": "Dũng Sĩ",
			"pre": "Đường"
		}, {
			"id": 7474,
			"name": "Dũng Sĩ Thanh Khê",
			"pre": "Đường"
		}, {
			"id": 2018,
			"name": "Dương Bích Liên",
			"pre": "Đường"
		}, {
			"id": 10862,
			"name": "Hà Đông 1",
			"pre": "Đường"
		}, {
			"id": 10740,
			"name": "Hà Đông 2",
			"pre": "Đường"
		}, {
			"id": 755,
			"name": "Hà Huy Tập",
			"pre": "Đường"
		}, {
			"id": 3968,
			"name": "Hà Khê",
			"pre": "Đường"
		}, {
			"id": 6798,
			"name": "Hà Xuân",
			"pre": "Đường"
		}, {
			"id": 8262,
			"name": "Hà Xuân 1",
			"pre": "Đường"
		}, {
			"id": 6055,
			"name": "Hải Hồ",
			"pre": "Đường"
		}, {
			"id": 2854,
			"name": "Hải Phòng",
			"pre": "Đường"
		}, {
			"id": 891,
			"name": "Hàm Nghi",
			"pre": "Đường"
		}, {
			"id": 2589,
			"name": "Hàn Mặc Tử",
			"pre": "Đường"
		}, {
			"id": 2584,
			"name": "Hồ Quý Ly",
			"pre": "Đường"
		}, {
			"id": 5886,
			"name": "Hồ Tương",
			"pre": "Đường"
		}, {
			"id": 6563,
			"name": "Hòa An 8",
			"pre": "Đường"
		}, {
			"id": 6281,
			"name": "Hòa Mỹ 3",
			"pre": "Đường"
		}, {
			"id": 360,
			"name": "Hoàng Diệu",
			"pre": "Đường"
		}, {
			"id": 792,
			"name": "Hoàng Hoa Thám",
			"pre": "Đường"
		}, {
			"id": 610,
			"name": "Hùng Vương",
			"pre": "Đường"
		}, {
			"id": 2357,
			"name": "Huỳnh Ngọc Huệ",
			"pre": "Đường"
		}, {
			"id": 10756,
			"name": "K19",
			"pre": "Đường"
		}, {
			"id": 5759,
			"name": "Kim Hải",
			"pre": "Đường"
		}, {
			"id": 3676,
			"name": "Kinh Dương Vương",
			"pre": "Đường"
		}, {
			"id": 1684,
			"name": "Kỳ Đồng",
			"pre": "Phố"
		}, {
			"id": 3445,
			"name": "Lê Đình Dương",
			"pre": "Đường"
		}, {
			"id": 5949,
			"name": "Lê Đình Lý",
			"pre": "Đường"
		}, {
			"id": 5758,
			"name": "Lê Độ",
			"pre": "Đường"
		}, {
			"id": 89,
			"name": "Lê Duẩn",
			"pre": "Đường"
		}, {
			"id": 7383,
			"name": "Lê Duy Đình",
			"pre": "Đường"
		}, {
			"id": 4284,
			"name": "Lê Quang Sung",
			"pre": "Đường"
		}, {
			"id": 6356,
			"name": "Lê Thị Tính",
			"pre": "Đường"
		}, {
			"id": 6659,
			"name": "Lê Thị Xuyến",
			"pre": "Đường"
		}, {
			"id": 302,
			"name": "Lê Trọng Tấn",
			"pre": "Phố"
		}, {
			"id": 4181,
			"name": "Lê Văn Thịnh",
			"pre": "Đường"
		}, {
			"id": 1154,
			"name": "Lương Nhữ Học",
			"pre": "Đường"
		}, {
			"id": 8053,
			"name": "Lương Nhữ Hộc",
			"pre": "Đường"
		}, {
			"id": 1608,
			"name": "Lý Nhân Tông",
			"pre": "Đường"
		}, {
			"id": 237,
			"name": "Lý Thái Tổ",
			"pre": "Đường"
		}, {
			"id": 4147,
			"name": "Lý Thái Tông",
			"pre": "Đường"
		}, {
			"id": 5782,
			"name": "Lý Triện",
			"pre": "Đường"
		}, {
			"id": 787,
			"name": "Mai Xuân Thưởng",
			"pre": "Đường"
		}, {
			"id": 5950,
			"name": "Man Thiện",
			"pre": "Đường"
		}, {
			"id": 6983,
			"name": "Mẹ Hiền",
			"pre": "Đường"
		}, {
			"id": 6326,
			"name": "Mẹ Nhu",
			"pre": "Đường"
		}, {
			"id": 977,
			"name": "Ngô Đức Kế",
			"pre": "Đường"
		}, {
			"id": 276,
			"name": "Ngô Gia Khảm",
			"pre": "Đường"
		}, {
			"id": 478,
			"name": "Ngọc Hồi",
			"pre": "Đường"
		}, {
			"id": 1277,
			"name": "Nguyễn Biểu",
			"pre": "Đường"
		}, {
			"id": 5027,
			"name": "Nguyễn Cảnh Dị",
			"pre": "Đường"
		}, {
			"id": 494,
			"name": "Nguyễn Cao",
			"pre": "Đường"
		}, {
			"id": 2348,
			"name": "Nguyễn Công Hãng",
			"pre": "Đường"
		}, {
			"id": 2347,
			"name": "Nguyễn Đăng",
			"pre": "Đường"
		}, {
			"id": 5846,
			"name": "Nguyễn Đình Tứ",
			"pre": "Đường"
		}, {
			"id": 5902,
			"name": "Nguyễn Đình Tựu",
			"pre": "Đường"
		}, {
			"id": 6254,
			"name": "Nguyễn Đức Trung",
			"pre": "Đường"
		}, {
			"id": 208,
			"name": "Nguyễn Gia Thiều",
			"pre": "Đường"
		}, {
			"id": 1087,
			"name": "Nguyễn Giản Thanh",
			"pre": "Đường"
		}, {
			"id": 3476,
			"name": "Nguyễn Hoàng",
			"pre": "Đường"
		}, {
			"id": 433,
			"name": "Nguyên Hồng",
			"pre": "Đường"
		}, {
			"id": 4045,
			"name": "Nguyễn Hữu Thận",
			"pre": "Đường"
		}, {
			"id": 458,
			"name": "Nguyễn Hữu Thọ",
			"pre": "Đường"
		}, {
			"id": 9271,
			"name": "Nguyễn Hữu Thuận",
			"pre": "Đường"
		}, {
			"id": 4047,
			"name": "Nguyễn Huy Lượng",
			"pre": "Đường"
		}, {
			"id": 315,
			"name": "Nguyễn Huy Tưởng",
			"pre": "Đường"
		}, {
			"id": 577,
			"name": "Nguyễn Khang",
			"pre": "Đường"
		}, {
			"id": 2381,
			"name": "Nguyễn Khoa Chiêm",
			"pre": "Đường"
		}, {
			"id": 2083,
			"name": "Nguyễn Nghiêm",
			"pre": "Đường"
		}, {
			"id": 6818,
			"name": "Nguyễn Nhàn",
			"pre": "Đường"
		}, {
			"id": 5986,
			"name": "Nguyễn Phước Nguyên",
			"pre": "Đường"
		}, {
			"id": 10179,
			"name": "Nguyễn Phước Thái",
			"pre": "Đường"
		}, {
			"id": 1310,
			"name": "Nguyễn Tất Thành",
			"pre": "Đường"
		}, {
			"id": 7563,
			"name": "Nguyễn Thị Bảy",
			"pre": "Đường"
		}, {
			"id": 615,
			"name": "Nguyễn Thị Thập",
			"pre": "Đường"
		}, {
			"id": 1140,
			"name": "Nguyễn Tri Phương",
			"pre": "Đường"
		}, {
			"id": 6077,
			"name": "Nguyễn Trung Đức",
			"pre": "Đường"
		}, {
			"id": 8032,
			"name": "Nguyễn Văn Huề",
			"pre": "Đường"
		}, {
			"id": 278,
			"name": "Nguyễn Văn Linh",
			"pre": "Đường"
		}, {
			"id": 7782,
			"name": "Nguyễn Văn Phương",
			"pre": "Đường"
		}, {
			"id": 726,
			"name": "Ông Ích Khiêm",
			"pre": "Đường"
		}, {
			"id": 9353,
			"name": "Phạm Ngọc Mậu",
			"pre": "Đường"
		}, {
			"id": 3423,
			"name": "Phạm Nhữ Tăng",
			"pre": "Đường"
		}, {
			"id": 2664,
			"name": "Phạm Văn Nghị",
			"pre": "Đường"
		}, {
			"id": 4127,
			"name": "Phan Anh",
			"pre": "Đường"
		}, {
			"id": 907,
			"name": "Phan Chu Trinh",
			"pre": "Đường"
		}, {
			"id": 2369,
			"name": "Phần Lăng 1",
			"pre": "Đường"
		}, {
			"id": 7721,
			"name": "Phần Lăng 11",
			"pre": "Đường"
		}, {
			"id": 9851,
			"name": "Phần Lăng 12",
			"pre": "Đường"
		}, {
			"id": 8511,
			"name": "Phần Lăng 14",
			"pre": "Đường"
		}, {
			"id": 8527,
			"name": "Phần Lăng 16",
			"pre": "Đường"
		}, {
			"id": 7279,
			"name": "Phần Lăng 17",
			"pre": "Đường"
		}, {
			"id": 8017,
			"name": "Phần Lăng 18",
			"pre": "Đường"
		}, {
			"id": 9356,
			"name": "Phần Lăng 19",
			"pre": "Đường"
		}, {
			"id": 2370,
			"name": "Phần Lăng 2",
			"pre": "Đường"
		}, {
			"id": 2371,
			"name": "Phần Lăng 3",
			"pre": "Đường"
		}, {
			"id": 2372,
			"name": "Phần Lăng 4",
			"pre": "Đường"
		}, {
			"id": 2373,
			"name": "Phần Lăng 5",
			"pre": "Đường"
		}, {
			"id": 8884,
			"name": "Phần Lăng 6",
			"pre": "Đường"
		}, {
			"id": 5893,
			"name": "Phần Lăng 7",
			"pre": "Đường"
		}, {
			"id": 6562,
			"name": "Phần Lăng 8",
			"pre": "Đường"
		}, {
			"id": 6492,
			"name": "Phần Lăng 9",
			"pre": "Đường"
		}, {
			"id": 8155,
			"name": "Phan Nhu",
			"pre": "Đường"
		}, {
			"id": 1257,
			"name": "Phan Phú Tiên",
			"pre": "Đường"
		}, {
			"id": 5857,
			"name": "Phan Thanh",
			"pre": "Đường"
		}, {
			"id": 6111,
			"name": "Phan Thành Tài",
			"pre": "Đường"
		}, {
			"id": 991,
			"name": "Phan Xích Long",
			"pre": "Đường"
		}, {
			"id": 6018,
			"name": "Phú Lộc",
			"pre": "Đường"
		}, {
			"id": 9417,
			"name": "Phú Lộc 10",
			"pre": "Đường"
		}, {
			"id": 6076,
			"name": "Phú Lộc 11",
			"pre": "Đường"
		}, {
			"id": 8934,
			"name": "Phú Lộc 12",
			"pre": "Đường"
		}, {
			"id": 6393,
			"name": "Phú Lộc 15",
			"pre": "Đường"
		}, {
			"id": 7206,
			"name": "Phú Lộc 18",
			"pre": "Đường"
		}, {
			"id": 9621,
			"name": "Phú Lộc 19",
			"pre": "Đường"
		}, {
			"id": 6814,
			"name": "Phú Lộc 4",
			"pre": "Đường"
		}, {
			"id": 7368,
			"name": "Phú Lộc 5",
			"pre": "Đường"
		}, {
			"id": 128,
			"name": "Phùng Hưng",
			"pre": "Phố"
		}, {
			"id": 8371,
			"name": "Quang Dũng",
			"pre": "Đường"
		}, {
			"id": 1227,
			"name": "Tản Đà",
			"pre": "Đường"
		}, {
			"id": 9566,
			"name": "Tân Hòa 1",
			"pre": "Đường"
		}, {
			"id": 7009,
			"name": "Tân Hòa 2",
			"pre": "Đường"
		}, {
			"id": 9567,
			"name": "Tân Hòa 3",
			"pre": "Đường"
		}, {
			"id": 9568,
			"name": "Tân Hòa 4",
			"pre": "Đường"
		}, {
			"id": 9569,
			"name": "Tân Hòa 5",
			"pre": "Đường"
		}, {
			"id": 9570,
			"name": "Tân Hòa 6",
			"pre": "Đường"
		}, {
			"id": 5975,
			"name": "Thái Thị Bôi",
			"pre": "Đường"
		}, {
			"id": 693,
			"name": "Thân Nhân Trung",
			"pre": "Đường"
		}, {
			"id": 2430,
			"name": "Thanh Huy 1",
			"pre": "Đường"
		}, {
			"id": 2431,
			"name": "Thanh Huy 2",
			"pre": "Đường"
		}, {
			"id": 2432,
			"name": "Thanh Huy 3",
			"pre": "Đường"
		}, {
			"id": 2433,
			"name": "Thanh Huy 4",
			"pre": "Đường"
		}, {
			"id": 2434,
			"name": "Thanh Huy 5",
			"pre": "Đường"
		}, {
			"id": 9933,
			"name": "Thanh Khê 6",
			"pre": "Đường"
		}, {
			"id": 2438,
			"name": "Thuận An 1",
			"pre": "Đường"
		}, {
			"id": 2439,
			"name": "Thuận An 2",
			"pre": "Đường"
		}, {
			"id": 2440,
			"name": "Thuận An 3",
			"pre": "Đường"
		}, {
			"id": 2465,
			"name": "Thuận An 4",
			"pre": "Đường"
		}, {
			"id": 2467,
			"name": "Thuận An 5",
			"pre": "Đường"
		}, {
			"id": 2469,
			"name": "Thuận An 6",
			"pre": "Đường"
		}, {
			"id": 2470,
			"name": "Thuận An 7",
			"pre": "Đường"
		}, {
			"id": 2356,
			"name": "Thúc Tề",
			"pre": "Đường"
		}, {
			"id": 2492,
			"name": "Tiên Sơn 10",
			"pre": "Đường"
		}, {
			"id": 2493,
			"name": "Tiên Sơn 11",
			"pre": "Đường"
		}, {
			"id": 2494,
			"name": "Tiên Sơn 12",
			"pre": "Đường"
		}, {
			"id": 2495,
			"name": "Tiên Sơn 13",
			"pre": "Đường"
		}, {
			"id": 2496,
			"name": "Tiên Sơn 14",
			"pre": "Đường"
		}, {
			"id": 2497,
			"name": "Tiên Sơn 15",
			"pre": "Đường"
		}, {
			"id": 2500,
			"name": "Tiên Sơn 16",
			"pre": "Đường"
		}, {
			"id": 2501,
			"name": "Tiên Sơn 17",
			"pre": "Đường"
		}, {
			"id": 2503,
			"name": "Tiên Sơn 18",
			"pre": "Đường"
		}, {
			"id": 2504,
			"name": "Tiên Sơn 19",
			"pre": "Đường"
		}, {
			"id": 2505,
			"name": "Tiên Sơn 20",
			"pre": "Đường"
		}, {
			"id": 2507,
			"name": "Tiên Sơn 21",
			"pre": "Đường"
		}, {
			"id": 368,
			"name": "Tô Hiệu",
			"pre": "Đường"
		}, {
			"id": 795,
			"name": "Tô Ngọc Vân",
			"pre": "Đường"
		}, {
			"id": 1320,
			"name": "Tôn Đản",
			"pre": "Đường"
		}, {
			"id": 428,
			"name": "Tôn Đức Thắng",
			"pre": "Phố"
		}, {
			"id": 1009,
			"name": "Tôn Thất Đạm",
			"pre": "Đường"
		}, {
			"id": 385,
			"name": "Tôn Thất Tùng",
			"pre": "Đường"
		}, {
			"id": 2687,
			"name": "Trần Anh Tông",
			"pre": "Đường"
		}, {
			"id": 3747,
			"name": "Trần Can",
			"pre": "Đường"
		}, {
			"id": 544,
			"name": "Trần Cao Vân",
			"pre": "Đường"
		}, {
			"id": 7292,
			"name": "Trần Cừ",
			"pre": "Đường"
		}, {
			"id": 7476,
			"name": "Trần Đình Long",
			"pre": "Đường"
		}, {
			"id": 9673,
			"name": "Trần Ngọc Sương",
			"pre": "Đường"
		}, {
			"id": 2335,
			"name": "Trần Nguyên Đán",
			"pre": "Đường"
		}, {
			"id": 131,
			"name": "Trần Phú",
			"pre": "Đường"
		}, {
			"id": 5999,
			"name": "Trần Phước Thành",
			"pre": "Đường"
		}, {
			"id": 4282,
			"name": "Trần Thái Tông",
			"pre": "Đường"
		}, {
			"id": 7202,
			"name": "Trần Thanh Trung",
			"pre": "Đường"
		}, {
			"id": 7683,
			"name": "Trần Thị Lý",
			"pre": "Đường"
		}, {
			"id": 6236,
			"name": "Trần Tống",
			"pre": "Đường"
		}, {
			"id": 2355,
			"name": "Trần Xuân Lê",
			"pre": "Đường"
		}, {
			"id": 318,
			"name": "Trường Chinh",
			"pre": "Đường"
		}, {
			"id": 733,
			"name": "Văn Cao",
			"pre": "Đường"
		}, {
			"id": 7209,
			"name": "Võ Nguyên Giáp",
			"pre": "Đường"
		}, {
			"id": 2739,
			"name": "Võ Văn Tần",
			"pre": "Đường"
		}, {
			"id": 6812,
			"name": "Vũ Huỳnh",
			"pre": "Đường"
		}, {
			"id": 6053,
			"name": "Vũ Quỳnh",
			"pre": "Đường"
		}, {
			"id": 2070,
			"name": "Xô Viết Nghệ Tĩnh",
			"pre": "Đường"
		}, {
			"id": 7061,
			"name": "Xuân Đán 1",
			"pre": "Đường"
		}, {
			"id": 2536,
			"name": "Xuân Đán 2",
			"pre": "Đường"
		}, {
			"id": 6091,
			"name": "Xuân Hòa 1",
			"pre": "Đường"
		}, {
			"id": 7439,
			"name": "Xuân Hòa 2",
			"pre": "Đường"
		}, {
			"id": 6496,
			"name": "Yên Khê 1",
			"pre": "Đường"
		}, {
			"id": 6201,
			"name": "Yên Khê 2",
			"pre": "Đường"
		}],
		"project": [{
			"id": 986,
			"name": "Dragon Vĩnh Trung",
			"lat": 16.068254470825195,
			"lng": 108.21881103515625,
			"cats": [48, 55, 57, 59]
		}, {
			"id": 1513,
			"name": "Hoàng Anh Lakeview Residence",
			"lat": 16.062366485595703,
			"lng": 108.21044158935547,
			"cats": [48, 55, 59, 324, 326]
		}, {
			"id": 1242,
			"name": "Vĩnh Trung Plaza",
			"lat": 16.066854476928711,
			"lng": 108.21329498291016,
			"cats": [48, 50, 55, 59, 324, 326]
		}]
	}]
}];



export {cateList,
	cityListOTher1,
	vipTypeList,
	directionList,
	priceLevel
}