let dataArr = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
//let dataArr = [75, 80, 85, 90, 95, 100];

const svgWidth = 200;
const svgHeight = 200;
const svgMargin = 30;

const scaleFactor = svgHeight / parseFloat(Math.max.apply(null, dataArr));

const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', svgHeight)
    .attr('width', svgWidth);

const svg = canvas.select('svg')

svg.select('svg')
    .attr('height', svgHeight - svgMargin)
    .attr('width', svgWidth - svgMargin)

svg.append('text')
    .attr('x', 20)
    .attr('y', 20)
    .attr('font-family','verdana')
    .text('Johan');

const rect = svg.selectAll('rect')

var myRect = rect.data(dataArr)
    .enter()
    .append("rect")
    .attr('fill', 'orange')

    .attr('x', function(d, i){
        let xValue = i * (svgWidth / dataArr.length);
        return xValue;
    })

    .attr('y', function(d) {
        yValue = svgHeight - d * scaleFactor;
        return yValue;
    })

    .attr('width', function(){
        let width = svgWidth / dataArr.length - 1;
        return width;
    })

    .attr('height', function(d){
        var heightValue = scaleFactor * d;
        return heightValue;
    });

var g = svg.append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")")
    .call(myRect);

