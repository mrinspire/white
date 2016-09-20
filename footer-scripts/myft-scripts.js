

/* Javascript getElementById() Examples */
/*
var d = new Date();
document.getElementById("datedemo").value = d;
document.getElementById("formdate").value = Date().format('mm/dd/yy');
*/

/* Javascript toLocalDateString() Method */
var d = new Date();
var n = d.toLocaleDateString();
document.getElementById("localedate").value = n;

/* Javascript getTimezoneOffset() Method */
var g = new Date();
var q = g.getTime();
document.getElementById("localetime").value = g.getTime();

/* Javascript getTimezoneOffset() Method */
/*var f = new Date();
var p = f.getTimezoneOffset();
document.getElementById("localetimeoffset").value = p;*/

var loctim = new Date();
var newloctim = loctim.getTime();
document.getElementById("thetime").value = newloctim.getTime();