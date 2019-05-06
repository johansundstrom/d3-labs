var dataArr = [0, 43, 31, 41, 28];

const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', 500)
    .attr('width', 500);

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
        return d * 2;
    })
    .attr('x', function(d, i){
        return i * 10;
    })
 
console.log(rect)