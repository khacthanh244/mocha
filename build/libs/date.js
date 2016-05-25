"use strict";
function daysFormat(bdate, edate) {
    let diff = edate - bdate, sign = diff < 0 ? -1 : 1, milliseconds, seconds, minutes, hours, days;
    diff /= sign;
    diff = (diff - (milliseconds = diff % 1000)) / 1000;
    diff = (diff - (seconds = diff % 60)) / 60;
    diff = (diff - (minutes = diff % 60)) / 60;
    days = (diff - (hours = diff % 24)) / 24;
    let final = '';
    if (days === 0 && hours === 0 && minutes === 0) {
        final = `${seconds} giây trước`;
    }
    else if (days === 0 && hours === 0) {
        final = `${minutes} phút trước`;
    }
    else if (days === 0) {
        final = ` ${hours} giờ trước`;
    }
    else if (days == 1) {
        final = '1 ngày trước';
    }
    else {
        let d = bdate;
        final = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + " lúc " + d.getHours() + ":" + d.getMinutes();
    }
    return final;
}
exports.daysFormat = daysFormat;
