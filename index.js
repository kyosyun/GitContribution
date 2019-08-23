'use strict'
var Xray = require('x-ray');
var x = Xray();

var userName = 'kyosyun';
var startDate = '2019-01-01';
var url = `https://github.com/users/${userName}/contributions?from=${startDate}`;
var contributions = new Array()
console.log(url)
x(url, 'rect', [ { count: '@data-count', date: '@data-date' }])((error, result) => {
    result.forEach(contribute => {
        contributions[contribute.date] = contribute.count;
    });
    console.log(contributions)
}); 

