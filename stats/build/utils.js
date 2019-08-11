"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split("/").map(function (val) { return parseInt(val, 10); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
