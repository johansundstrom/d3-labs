var dataArr = [44, 43, 31, 41, 28];

var height = 500;
var width = 500;

const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', height)
    .attr('width', width);

const svg = canvas.select('svg')


// const circle = canvas.append('circle')
//     .attr('cx', 100)
//     .attr('cy', 100)
//     .attr('r', 75)
//     .attr('fill', 'orange');

const rect = svg.append('rect')

rect.attr('width', 24)
    .data(dataArr)
    .attr('fill', 'red')
    .attr('height', function(d, i){
        console.log(d, i);
        return height - d +1  ;
    })
    .attr('y', 499)
    .attr('x', function(d, i){
        return i * 25;
    })
 
console.log(rect)