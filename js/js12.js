var dataArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
//var dataArr = [75, 80, 85, 90, 95, 100];

var height = 200;
var width = 200;

const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', height)
    .attr('width', width);

const svg = canvas.select('svg')

