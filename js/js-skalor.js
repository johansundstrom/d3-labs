let dataArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
//var dataArr = [75, 80, 85, 90, 95, 100];

const height = 300;
const width = 300;

const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', height)
    .attr('width', width);

const svg = canvas.select('svg')

d3.select('svg')
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('height', function(){
        let myHeight = height - 50;
        return myHeight;
    })
    .attr('width', 50)
    .attr('fill', '#ccc');

d3.select('svg')
    .append('rect')
    .attr('x', 50)
    .attr('y', height - 50)
    .attr('height', height - 50)
    .attr('width', width - 50)
    .attr('fill', '#ccc');

    d3.select('svg')
    .append('rect')
    .attr('x', 50)
    .attr('y', 0)
    .attr('height', height - 50)
    .attr('width', width - 50)
    .attr('fill', 'orange');